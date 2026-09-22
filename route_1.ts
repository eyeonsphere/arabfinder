import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

// Admin-only: list reviews awaiting moderation. Protected by a single shared secret
// (ADMIN_REVIEWS_PASSWORD env var) sent as the `x-admin-secret` header — see the note
// in src/app/admin/reviews/page.tsx about why this lightweight scheme was chosen for
// v1 instead of a full accounts system, and its limitations.
function checkAdminAuth(request: NextRequest): NextResponse | null {
  const expected = process.env.ADMIN_REVIEWS_PASSWORD;
  if (!expected) {
    return NextResponse.json(
      { error: "ADMIN_REVIEWS_PASSWORD is not set — admin moderation is disabled until it is." },
      { status: 503 }
    );
  }
  const provided = request.headers.get("x-admin-secret");
  if (provided !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET(request: NextRequest) {
  const authError = checkAdminAuth(request);
  if (authError) return authError;

  const status = request.nextUrl.searchParams.get("status") ?? "pending";

  let supabase;
  try {
    supabase = getSupabaseServerClient();
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 503 });
  }

  const { data, error } = await supabase
    .from("reviews")
    .select("id, listing_id, reviewer_name, reviewer_email, rating, review_text, status, created_at")
    .eq("status", status)
    .order("created_at", { ascending: true }); // oldest-pending-first — clears the queue in submission order

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ reviews: data ?? [] });
}
