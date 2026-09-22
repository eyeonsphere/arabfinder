import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

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

// PATCH /api/admin/reviews/:id  { status: "approved" | "rejected", moderationNote?: string }
//
// Rule 4 reminder for whoever moderates: a review can be rejected for spam, abuse,
// clear policy violations (e.g. the "reviewer" is the business itself), or content
// that isn't really about the listing — never simply for being negative or unflattering.
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const authError = checkAdminAuth(request);
  if (authError) return authError;

  const { id } = await params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const { status, moderationNote } = (body ?? {}) as Record<string, unknown>;
  if (status !== "approved" && status !== "rejected") {
    return NextResponse.json({ error: 'status must be "approved" or "rejected"' }, { status: 400 });
  }

  let supabase;
  try {
    supabase = getSupabaseServerClient();
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 503 });
  }

  const { error } = await supabase
    .from("reviews")
    .update({
      status,
      moderation_note: typeof moderationNote === "string" ? moderationNote : null,
    })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
