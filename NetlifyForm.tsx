"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Netlify Forms wrapper for the Next.js Runtime (@netlify/plugin-nextjs v5).
//
// Why this exists: Netlify's deploy-time form detection only scans static HTML, so a
// <form data-netlify="true"> rendered inside a Next.js page (dynamic, server-rendered
// or client-rendered) is invisible to it — that broke all three of the site's forms
// the first time this project deployed under the Next.js Runtime (Sept 2026). The fix
// (per https://opennext.js.org/netlify/forms) is to declare each form's schema once in
// a static file (public/__forms.html, never shown to visitors) and, at runtime, submit
// via fetch() directly to that file's URL instead of letting the browser do a native
// form POST. Netlify accepts the fetch() because the form/field names match what it
// registered from the static file at deploy time.
//
// Usage: wrap just the visible fields — this component supplies the hidden
// `form-name` field and the honeypot field itself, matching the pattern already used
// for anti-spam elsewhere on the site (e.g. ReviewsSection's own honeypot).
export function NetlifyForm({
  name,
  redirectTo,
  className,
  children,
}: {
  name: string;
  redirectTo: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, typeof value === "string" ? value : value.name);
    });

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (!res.ok) throw new Error("Something went wrong submitting this — please try again.");
      router.push(redirectTo);
    } catch (err) {
      setError((err as Error).message);
      setSubmitting(false);
    }
  }

  return (
    <form name={name} onSubmit={handleSubmit} className={className}>
      <input type="hidden" name="form-name" value={name} />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      {children}
      {error && <p className="text-sm text-red-700">{error}</p>}
      {submitting && <p className="text-sm text-foreground/50">Submitting…</p>}
    </form>
  );
}
