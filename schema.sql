-- Arab Finder reviews schema
-- Run this once in the Supabase project's SQL Editor (Supabase dashboard ->
-- SQL Editor -> New query -> paste this whole file -> Run) before the reviews
-- feature will work. Safe to re-run: uses IF NOT EXISTS / OR REPLACE throughout.
--
-- Implements Part 5, Rule 4 of the platform blueprint: first-party reviews only,
-- no suppression of negative reviews, no staff/AI-written reviews, no blending
-- with third-party (Yelp/Google) ratings, neutral default sort (newest first).

create extension if not exists "pgcrypto";

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  listing_id text not null,              -- matches Listing.listingId in src/lib/listings.ts
  reviewer_name text not null,
  reviewer_email text not null,          -- spam/abuse contact only; never returned to the public API
  rating smallint not null check (rating between 1 and 5),
  review_text text not null check (char_length(review_text) between 10 and 4000),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  moderation_note text,                  -- internal only, e.g. why a review was rejected
  created_at timestamptz not null default now()
);

create index if not exists reviews_listing_id_status_idx
  on public.reviews (listing_id, status, created_at desc);

-- Row Level Security is enabled with NO policies, on purpose: every read and write goes
-- through the site's own API routes (src/app/api/reviews, src/app/api/admin/reviews),
-- which use the service_role key server-side and so bypass RLS entirely. Leaving RLS on
-- with zero policies means the anon/public key (if it were ever exposed) can do nothing
-- at all to this table — no accidental public read or write access.
alter table public.reviews enable row level security;
