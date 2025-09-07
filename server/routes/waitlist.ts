import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const r = Router();
// Prevent multiple PrismaClient instances in development
const db =
  (globalThis as any).prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') (globalThis as any).prisma = db;


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
    // For simplicity in a non-JS context, redirect to an error state.
    // A more advanced implementation might pass the error message in a query param.
    return res.redirect('/#waitlist-section-error');
  }

  const p = parsed.data;
  if (p.hp) { // Honeypot triggered
    // Pretend success for the bot
    return res.redirect('/#waitlist-section-success');
  }

  const utm = {
    source: p.utm_source,
    medium: p.utm_medium,
    campaign: p.utm_campaign,
  };

  try {
    await db.vipWaitlist.upsert({
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

    // On success, redirect to the same page with a success indicator
    return res.redirect('/#waitlist-section-success');

  } catch (error) {
    console.error("Failed to upsert waitlist entry:", error);
    // On db error, redirect to an error state
    return res.redirect('/#waitlist-section-error');
  }
});

export default r;
