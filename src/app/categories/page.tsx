import Link from "next/link";
import type { Metadata } from "next";
import { categories } from "@/lib/categories";

export const metadata: Metadata = { title: "Categories" };

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-brand-teal-dark">Categories</h1>
      <p className="mt-2 max-w-2xl text-foreground/70">
        Eleven top-level categories, each hardcoded to exactly one schema.org business type. Categories flagged
        "license verification required" display a standing professional disclaimer and, where possible, a live
        state licensing board check.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {categories.map((c) => (
          <Link key={c.slug} href={`/categories/${c.slug}`} className="rounded-xl border border-border-soft bg-white p-5 hover:border-brand-gold">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-brand-teal-dark">{c.name}</p>
              {c.requiresLicenseVerification && (
                <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800">
                  License verified
                </span>
              )}
            </div>
            <p className="mt-1 text-xs font-mono text-foreground/40">schema.org/{c.schemaType}</p>
            <p className="mt-2 text-sm text-foreground/60">{c.subcategories.slice(0, 4).join(" · ")}{c.subcategories.length > 4 ? " · …" : ""}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
