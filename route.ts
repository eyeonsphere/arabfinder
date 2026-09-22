import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import { listings } from "@/lib/listings";

// Public reviews API — Part 5, Rule 4 of the blueprint (first-party reviews only,
// no suppression of negative ones, no blending with third-party ratings, neutral
// default sort). See supabase/schema.sql for the table this reads and writes.
//
// GET  /api/reviews?listingId=... -> approved reviews for one listing, newest first
// POST /api/reviews               -> submit a new review; always starts as "pending"
//                                     and is held for moderation (see /admin/reviews)
//                                     before it becomes publicly visible.

export async function GET(request: NextRequest) {
  const listingId = request.nextUrl.searchParams.get("listingId");
  if (!listingId) {
    return NextResponse.json({ error: "listingId query parameter is required" }, { status: 400 });
  }

  let supabase;
  try {
    supabase = getSupabaseServerClient();
  } catch {
    // Reviews aren't configured yet (no Supabase credentials set) — degrade to an
    // empty list rather than a 500, so listing pages still render fine either way.
    return NextResponse.json({ reviews: [], average: null, count: 0 });
  }

  const { data, error } = await supabase
    .from("reviews")
    .select("id, reviewer_name, rating, review_text, created_at")
    .eq("listing_id", listingId)
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const reviews = (data ?? []).map((r) => ({
    id: r.id,
    reviewerName: r.reviewer_name,
    rating: r.rating,
    reviewText: r.review_text,
    createdAt: r.created_at,
  }));
  const average = reviews.length ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : null;

  return NextResponse.json({ reviews, average, count: reviews.length });
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { listingId, reviewerName, reviewerEmail, rating, reviewText, honeypot } = (body ?? {}) as Record<
    string,
    unknown
  >;

  // Honeypot anti-spam field: real visitors never see or fill this input (it's hidden
  // by CSS in the form), so anything landing here has been filled by an automated bot.
  // Same pattern already used on this site's Netlify Forms (claim / suggest-a-business).
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return NextResponse.json({ ok: true }); // pretend success, drop it silently
  }

  if (typeof listingId !== "string" || !listings.some((l) => l.listingId === listingId)) {
    return NextResponse.json({ error: "Unknown listingId" }, { status: 400 });
  }
  if (typeof reviewerName !== "string" || reviewerName.trim().length < 2) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (typeof reviewerEmail !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reviewerEmail)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }
  const ratingNum = Number(rating);
  if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    return NextResponse.json({ error: "Rating must be a whole number from 1 to 5" }, { status: 400 });
  }
  if (typeof reviewText !== "string" || reviewText.trim().length < 10 || reviewText.length > 4000) {
    return NextResponse.json({ error: "Review text must be between 10 and 4000 characters" }, { status: 400 });
  }

  let supabase;
  try {
    supabase = getSupabaseServerClient();
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 503 });
  }

  const { error } = await supabase.from("reviews").insert({
    listing_id: listingId,
    reviewer_name: reviewerName.trim(),
    reviewer_email: reviewerEmail.trim(),
    rating: ratingNum,
    review_text: reviewText.trim(),
    status: "pending",
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, status: "pending" }, { status: 201 });
}
