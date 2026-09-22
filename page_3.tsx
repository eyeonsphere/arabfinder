"use client";

import { useEffect, useState } from "react";

// Unlisted moderation queue for the reviews feature (Part 5, Rule 4 of the blueprint).
// Not linked from anywhere in the site nav — reachable only by typing /admin/reviews.
//
// Auth model, and why it's this simple for v1: there's still no accounts system on this
// site at all (the whole platform is deliberately no-account-required for visitors), so
// rather than build a real login system just for one operator moderating one queue, this
// page asks for a single shared secret (the ADMIN_REVIEWS_PASSWORD env var) and sends it
// as a header on every request. That's genuinely weaker than real auth — the secret sits
// in the browser's sessionStorage and in each request's headers, visible to anyone with
// devtools access to this browser tab — but the queue itself holds nothing more sensitive
// than pending review text and reviewer emails, and the page is unlisted. If this ever
// needs to support more than one moderator, or the queue's contents get more sensitive,
// swap this for real auth (Netlify Identity or similar) rather than adding more secrets.
interface PendingReview {
  id: string;
  listing_id: string;
  reviewer_name: string;
  reviewer_email: string;
  rating: number;
  review_text: string;
  created_at: string;
}

export default function AdminReviewsPage() {
  const [secret, setSecret] = useState<string | null>(null);
  const [secretInput, setSecretInput] = useState("");
  const [reviews, setReviews] = useState<PendingReview[] | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("arabfinder_admin_secret");
    if (stored) setSecret(stored);
  }, []);

  async function loadQueue(currentSecret: string) {
    setAuthError(null);
    const res = await fetch("/api/admin/reviews?status=pending", {
      headers: { "x-admin-secret": currentSecret },
    });
    if (res.status === 401) {
      setAuthError("Incorrect password.");
      sessionStorage.removeItem("arabfinder_admin_secret");
      setSecret(null);
      return;
    }
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setAuthError(data.error || "Something went wrong loading the queue.");
      return;
    }
    const data = await res.json();
    setReviews(data.reviews ?? []);
  }

  useEffect(() => {
    if (secret) loadQueue(secret);
  }, [secret]);

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    sessionStorage.setItem("arabfinder_admin_secret", secretInput);
    setSecret(secretInput);
  }

  async function handleDecision(id: string, status: "approved" | "rejected") {
    if (!secret) return;
    setActionError(null);
    const res = await fetch(`/api/admin/reviews/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-secret": secret },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setActionError(data.error || "Something went wrong.");
      return;
    }
    setReviews((prev) => prev?.filter((r) => r.id !== id) ?? null);
  }

  if (!secret) {
    return (
      <div className="mx-auto max-w-sm px-4 py-20">
        <h1 className="text-xl font-semibold text-brand-teal-dark">Reviews moderation</h1>
        <form onSubmit={handleUnlock} className="mt-4 space-y-3">
          <input
            type="password"
            placeholder="Admin password"
            value={secretInput}
            onChange={(e) => setSecretInput(e.target.value)}
            className="w-full rounded-md border border-border-soft px-3 py-2 text-sm"
          />
          <button type="submit" className="w-full rounded-full bg-brand-teal px-5 py-2 text-sm font-medium text-white">
            Unlock
          </button>
          {authError && <p className="text-sm text-red-700">{authError}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-2xl font-semibold text-brand-teal-dark">Reviews awaiting moderation</h1>
      <p className="mt-2 text-sm text-foreground/60">
        Approve or reject each review. Per Rule 4 of the platform's compliance rules: reject only for spam, abuse, or
        a clear policy violation (e.g. the business reviewing itself) — never simply because a review is negative.
      </p>
      {actionError && <p className="mt-3 text-sm text-red-700">{actionError}</p>}

      {reviews === null && <p className="mt-6 text-sm text-foreground/50">Loading…</p>}
      {reviews !== null && reviews.length === 0 && (
        <p className="mt-6 text-sm text-foreground/60">Nothing waiting — the queue is empty.</p>
      )}

      <div className="mt-6 space-y-4">
        {reviews?.map((r) => (
          <div key={r.id} className="rounded-xl border border-border-soft bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
              <p className="font-semibold text-foreground">
                {r.reviewer_name} <span className="font-normal text-foreground/50">({r.reviewer_email})</span>
              </p>
              <p className="text-brand-gold">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</p>
            </div>
            <p className="mt-1 text-xs text-foreground/40">
              Listing: {r.listing_id} · {new Date(r.created_at).toLocaleString()}
            </p>
            <p className="mt-3 text-sm text-foreground/80">{r.review_text}</p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => handleDecision(r.id, "approved")}
                className="rounded-full bg-brand-teal px-4 py-1.5 text-sm font-medium text-white hover:bg-brand-teal-dark"
              >
                Approve
              </button>
              <button
                onClick={() => handleDecision(r.id, "rejected")}
                className="rounded-full border border-red-700 px-4 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
