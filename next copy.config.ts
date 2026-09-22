import type { NextConfig } from "next";

// Sept 2026: switched off `output: "export"` (static export) now that the site has a
// live database-backed feature — the reviews system (src/app/api/reviews, Supabase).
// This is the exact trigger condition flagged back when static export was first chosen;
// see the "static export is a deliberate, temporary choice" note in the project's build
// notes. The site now builds as a normal Next.js app (SSG for listing/category/city pages
// via generateStaticParams, dynamic API routes for reviews) and deploys via Netlify's
// Next.js Runtime — see netlify.toml.
const nextConfig: NextConfig = {};

export default nextConfig;
