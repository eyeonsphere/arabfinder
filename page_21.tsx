import Link from "next/link";
import { counties } from "@/lib/geo";
import { categories } from "@/lib/categories";
import { listings } from "@/lib/listings";
import ListingCard from "@/components/ListingCard";

export default function Home() {
  const phase1 = counties.filter((c) => c.phase === 1);

  return (
    <div>
      <section className="border-b border-border-soft bg-gradient-to-b from-brand-teal to-brand-teal-dark text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-wide text-brand-gold-light">Southern California</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Find Arabic-speaking and Arab American businesses, professionals, and community institutions.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            No account required. Every listing shows exactly what's known and how it was verified — ownership,
            language, and halal status are shown only when a business tells us itself, never guessed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/counties"
              className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-teal-dark hover:bg-brand-gold-light"
            >
              Browse by county
            </Link>
            <Link
              href="/submit-a-business"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Suggest a business
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold text-brand-teal-dark">Now launching: {phase1[0].name}</h2>
          <Link href={`/${phase1[0].slug}`} className="text-sm font-medium text-brand-teal hover:underline">
            View county →
          </Link>
        </div>
        <p className="mt-2 max-w-3xl text-foreground/70">{phase1[0].blurb}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {listings.map((l) => (
            <ListingCard key={l.listingId} listing={l} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold text-brand-teal-dark">Categories</h2>
        <p className="mt-2 max-w-3xl text-foreground/70">
          Eleven top-level categories, each mapped to a schema.org business type. Licensed categories carry a
          standing disclaimer and license-board verification.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="rounded-lg border border-border-soft bg-white p-4 hover:border-brand-gold"
            >
              <p className="font-medium text-brand-teal-dark">{c.name}</p>
              <p className="mt-1 text-xs text-foreground/50">
                {c.requiresLicenseVerification ? "License verification required" : "No license verification required"}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold text-brand-teal-dark">Southern California launch roadmap</h2>
        <p className="mt-2 max-w-3xl text-foreground/70">
          Arabs Finder is rolling out county by county, ordered by demand density and existing community
          infrastructure.
        </p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {counties.filter((c) => c.state === "CA" && c.phase !== 7).map((c) => (
            <li key={c.slug} className="rounded-lg border border-border-soft bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{c.phaseLabel}</p>
              <Link href={`/${c.slug}`} className="mt-1 block font-medium text-brand-teal-dark hover:underline">
                {c.name}
              </Link>
              <p className="mt-1 text-xs text-foreground/50">{c.arabAncestryPopulation} Arab ancestry (ACS est.)</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 border-t border-border-soft">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-gold">Also now open</p>
        <h2 className="mt-2 text-2xl font-semibold text-brand-teal-dark">Michigan chapter</h2>
        <p className="mt-2 max-w-3xl text-foreground/70">
          Metro Detroit is home to the country's largest Chaldean community and its second-largest Middle
          Eastern-ancestry population of any U.S. metro area, after Southern California. Wayne, Oakland, and Macomb
          counties are live now, sourced from community chamber-of-commerce and business-directory partners.
        </p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {counties.filter((c) => c.state === "MI").map((c) => (
            <li key={c.slug} className="rounded-lg border border-border-soft bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{c.phaseLabel}</p>
              <Link href={`/${c.slug}`} className="mt-1 block font-medium text-brand-teal-dark hover:underline">
                {c.name}
              </Link>
              <p className="mt-1 text-xs text-foreground/50">{c.dialectProfile}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 border-t border-border-soft">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-gold">Also now open</p>
        <h2 className="mt-2 text-2xl font-semibold text-brand-teal-dark">Illinois chapter</h2>
        <p className="mt-2 max-w-3xl text-foreground/70">
          Cook County is home to the largest Palestinian-American population of any U.S. county, concentrated along
          the Harlem Avenue corridor in Bridgeview, alongside a longstanding Assyrian/Chaldean community on Chicago's
          north side and north suburbs. Cook, DuPage, and Will counties are live now, sourced from the Arab American
          Bar Association of Illinois, the Assyrian American Bar Association, arabchicago-il.com, and hospital-system
          provider directories.
        </p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {counties.filter((c) => c.state === "IL").map((c) => (
            <li key={c.slug} className="rounded-lg border border-border-soft bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{c.phaseLabel}</p>
              <Link href={`/${c.slug}`} className="mt-1 block font-medium text-brand-teal-dark hover:underline">
                {c.name}
              </Link>
              <p className="mt-1 text-xs text-foreground/50">{c.dialectProfile}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 border-t border-border-soft">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-gold">Also now open</p>
        <h2 className="mt-2 text-2xl font-semibold text-brand-teal-dark">Bay Area chapter</h2>
        <p className="mt-2 max-w-3xl text-foreground/70">
          San Francisco's Tenderloin neighborhood has been the heart of Arab San Francisco since the 1960s, home to
          the largest Yemeni community in Northern California. Oakland has its own 10,000+ Yemeni-American
          community, and San Jose's Silicon Valley hosts a more recent wave of Arab American tech professionals. San
          Francisco, Alameda, and Santa Clara counties are live now.
        </p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {counties.filter((c) => c.state === "CA" && c.phase === 7).map((c) => (
            <li key={c.slug} className="rounded-lg border border-border-soft bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{c.phaseLabel}</p>
              <Link href={`/${c.slug}`} className="mt-1 block font-medium text-brand-teal-dark hover:underline">
                {c.name}
              </Link>
              <p className="mt-1 text-xs text-foreground/50">{c.dialectProfile}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
