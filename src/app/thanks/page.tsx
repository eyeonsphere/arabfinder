import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Thank you" };

export default function ThanksPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-semibold text-brand-teal-dark">Thanks — we've got it.</h1>
      <p className="mt-3 text-foreground/70">
        Your submission is in the queue. If you left an email, we'll follow up if we need anything else.
      </p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-brand-teal px-5 py-2 text-sm font-medium text-white hover:bg-brand-teal-dark">
        Back to Arab Finder
      </Link>
    </div>
  );
}
