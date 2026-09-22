"use client";

import { useEffect, useState } from "react";

interface PublicReview {
  id: string;
  reviewerName: string;
  rating: number;
  reviewText: string;
  createdAt: string;
}

// Part 5, Rule 4 of the blueprint: first-party reviews only, no seeded/staff/AI-written
// reviews, no suppression of negative ones, no blending with third-party ratings, and a
// neutral default sort — this component always sorts newest-first, which is what the
// API already returns, and never lets a listing owner hide or reorder reviews.
export function ReviewsSection({ listingId }: { listingId: string }) {
  const [reviews, setReviews] = useState<PublicReview[] | null>(null);
  const [average, setAverage] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/reviews?listingId=${encodeURIComponent(listingId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        setReviews(data.reviews ?? []);
        setAverage(data.average ?? null);
      })
      .catch(() => {
        if (!cancelled) setReviews([]);
      });
    return () => {
      cancelled = true;
    };
  }, [listingId]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          listingId,
          reviewerName: formData.get("reviewerName"),
          reviewerEmail: formData.get("reviewerEmail"),
          rating: Number(formData.get("rating")),
          reviewText: formData.get("reviewText"),
          honeypot: formData.get("company_website"), // hidden field, see CSS below
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong submitting your review.");
      }
      setSubmitResult("success");
      form.reset();
    } catch (err) {
      setSubmitResult("error");
      setErrorMessage((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <p className="font-medium text-foreground">
          Reviews
          {average !== null && (
            <span className="ml-2 text-sm font-normal text-foreground/60">
              {average.toFixed(1)} / 5 · {reviews?.length ?? 0} review{reviews?.length === 1 ? "" : "s"}
            </span>
          )}
        </p>
        {!showForm && (
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="rounded-full border border-brand-teal px-4 py-1.5 text-sm font-medium text-brand-teal hover:bg-brand-teal hover:text-white"
          >
            Write a review
          </button>
        )}
      </div>

      <p className="mt-2 text-sm text-foreground/60">
        Reviews are sorted newest-first by default and are never edited, removed, or blended with third-party
        ratings. Every submitted review is checked for spam and abuse before it appears here, which usually takes a
        day or two.
      </p>

      {showForm && submitResult !== "success" && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3 rounded-xl border border-border-soft bg-white p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm">
              <span className="text-foreground/70">Your name</span>
              <input
                name="reviewerName"
                required
                minLength={2}
                className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm"
              />
            </label>
            <label className="text-sm">
              <span className="text-foreground/70">Email (not shown publicly)</span>
              <input
                type="email"
                name="reviewerEmail"
                required
                className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm"
              />
            </label>
          </div>
          <label className="block text-sm">
            <span className="text-foreground/70">Rating</span>
            <select
              name="rating"
              required
              defaultValue="5"
              className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm"
            >
              <option value="5">5 — Excellent</option>
              <option value="4">4 — Good</option>
              <option value="3">3 — Average</option>
              <option value="2">2 — Poor</option>
              <option value="1">1 — Very poor</option>
            </select>
          </label>
          <label className="block text-sm">
            <span className="text-foreground/70">Your review</span>
            <textarea
              name="reviewText"
              required
              minLength={10}
              maxLength={4000}
              rows={4}
              className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm"
            />
          </label>
          {/* Honeypot: hidden from real visitors via CSS, so only bots fill it in. */}
          <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
            <label>
              Company website
              <input name="company_website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          {submitResult === "error" && errorMessage && <p className="text-sm text-red-700">{errorMessage}</p>}
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-brand-teal px-5 py-2 text-sm font-medium text-white hover:bg-brand-teal-dark disabled:opacity-50"
            >
              {submitting ? "Submitting…" : "Submit review"}
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="text-sm text-foreground/60 hover:underline">
              Cancel
            </button>
          </div>
        </form>
      )}

      {submitResult === "success" && (
        <p className="mt-4 rounded-xl border border-emerald-700 bg-emerald-50 p-4 text-sm text-emerald-800">
          Thanks — your review is submitted and will appear here once it's been checked for spam and abuse.
        </p>
      )}

      <div className="mt-4 space-y-4">
        {reviews === null && <p className="text-sm text-foreground/50">Loading reviews…</p>}
        {reviews !== null && reviews.length === 0 && (
          <p className="text-sm text-foreground/60">No reviews yet — be the first to write one.</p>
        )}
        {reviews?.map((r) => (
          <div key={r.id} className="rounded-xl border border-border-soft bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{r.reviewerName}</p>
              <p className="text-sm text-brand-gold" aria-label={`${r.rating} out of 5 stars`}>
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </p>
            </div>
            <p className="mt-1 text-xs text-foreground/40">{new Date(r.createdAt).toLocaleDateString()}</p>
            <p className="mt-2 text-sm text-foreground/80">{r.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
