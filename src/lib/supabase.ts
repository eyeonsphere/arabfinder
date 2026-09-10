import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client for the reviews feature (Part 5, Rule 4 of the blueprint).
// Uses the service role key because API routes do all read/write themselves — there is
// still no user-account system on this site, so there's no per-user session to scope
// access by. This file is imported only from route handlers under src/app/api, never
// from a client component, so the service role key never reaches the browser.
//
// Required environment variables (set in Netlify: Site configuration -> Environment
// variables, and locally in .env.local for `npm run dev`):
//   SUPABASE_URL              — Project Settings -> API -> Project URL
//   SUPABASE_SERVICE_ROLE_KEY — Project Settings -> API -> service_role secret key
//
// Run supabase/schema.sql once in the Supabase project's SQL Editor before these routes
// will work — it creates the `reviews` table these queries assume exists.
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase is not configured: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY " +
        "(see src/lib/supabase.ts for where to find these in the Supabase dashboard)."
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
