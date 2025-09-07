// Import Express and related types to ensure correct type inference for the app instance and its handlers.
import express, { Express, Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// API Routes
import waitlist from './routes/waitlist.js';

// Explicitly type the app constant with the `Express` type.
// This allows TypeScript to correctly resolve the method overloads for `app.use()` and `app.get()`,
// which fixes the "No overload matches this call" compilation errors.
const app: Express = express();
const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("trust proxy", true);

// Middleware to parse JSON and urlencoded bodies (for <form> posts)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Routes
app.use('/api', waitlist);

// Serve static client files from the root project directory
const rootPath = path.join(__dirname, '..');
app.use(express.static(rootPath));

// SPA Fallback: for any request that doesn't match a file, send index.html
// Add explicit types for req and res to aid type inference.
app.get('*', (_req: Request, res: Response) => {
  const indexPath = path.join(rootPath, 'index.html');
  // Check if index.html exists before sending
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Client entry point not found. Please run the build process.');
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
