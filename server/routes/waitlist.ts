import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { GoogleGenAI, Type } from "@google/genai";

const r = Router();
// Prevent multiple PrismaClient instances in development
const db = (globalThis as any).prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") (globalThis as any).prisma = db;

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const In = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  reason: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  hp: z.string().optional(), // honeypot
});

r.post("/vip-waitlist", async (req, res) => {
  const parsed = In.safeParse(req.body);
  if (!parsed.success) {
    return res.redirect("/#waitlist-section-error");
  }

  const p = parsed.data;
  if (p.hp) {
    // Honeypot triggered
    return res.redirect("/#waitlist-section-success");
  }

  const utm = {
    source: p.utm_source,
    medium: p.utm_medium,
    campaign: p.utm_campaign,
  };

  try {
    const entry = await db.vipWaitlist.upsert({
      where: { email: p.email.toLowerCase() },
      update: { name: p.name, reason: p.reason, utm },
      create: {
        name: p.name,
        email: p.email.toLowerCase(),
        reason: p.reason,
        utm,
        userAgent: req.get("user-agent") || "",
        ip: req.ip || "",
      },
    });

    // --- AI Prioritization Start ---
    // This happens after the user is saved and does not block the redirect.
    // If this fails, the user is still on the waitlist.
    try {
      const prompt = `
        Applicant Name: "${p.name}"
        Reason for joining Cabana: "${p.reason || "Not provided."}"
        
        Based on this, evaluate their potential as a member for "Cabana", an exclusive club for luxury nightlife and creators. Score them from 1-100 on their fit. A high score indicates a strong potential member (e.g., influential creator, industry leader, great networker). A low score indicates a poor fit. Provide a brief rationale.
        `;

      const responseSchema = {
        type: Type.OBJECT,
        properties: {
          score: {
            type: Type.INTEGER,
            description: "A score from 1-100 representing the applicant's potential fit.",
          },
          rationale: {
            type: Type.STRING,
            description: "A brief rationale for the assigned score.",
          },
        },
        required: ["score", "rationale"],
      };

      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: responseSchema,
          systemInstruction: "You are an AI assistant for Cabana, a luxury nightlife and creator club. Your task is to evaluate waitlist applicants and score their suitability.",
        },
      });

      const jsonString = result.text.trim();
      const aiData = JSON.parse(jsonString);

      if (aiData.score && aiData.rationale) {
        await db.vipWaitlist.update({
          where: { id: entry.id },
          data: {
            score: aiData.score,
            rationale: aiData.rationale,
          },
        });
      }
    } catch (aiError) {
      console.error("AI prioritization failed for", p.email, aiError);
      // Gracefully fail: user is on the list, just without an AI score.
    }
    // --- AI Prioritization End ---

    return res.redirect("/#waitlist-section-success");
  } catch (error) {
    console.error("Failed to upsert waitlist entry:", error);
    return res.redirect("/#waitlist-section-error");
  }
});

export default r;
