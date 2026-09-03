import Link from "next/link";
import type { Metadata } from "next";
import { counties, citiesInCounty } from "@/lib/geo";

export const metadata: Metadata = { title: "Browse by county" };

export default function CountiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-brand-teal-dark">Southern California counties</h1>
      <p className="mt-2 max-w-2xl text-foreground/70">
        Five counties hold a combined estimated Arab-ancestry population above 200,000. Rollout is phased by demand
        density and existing community infrastructure — not all counties are live yet.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {counties.map((county) => {
          const cities = citiesInCounty(county.slug);
          return (
            <div key={county.slug} className="rounded-xl border border-border-soft bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{county.phaseLabel}</p>
              <Link href={`/${county.slug}`} className="mt-1 block text-xl font-semibold text-brand-teal-dark hover:underline">
                {county.name}
              </Link>
              <p className="mt-2 text-sm text-foreground/70">{county.blurb}</p>
              <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-foreground/60">
                <div>
                  <dt className="font-medium text-foreground/40">Arab ancestry (ACS est.)</dt>
                  <dd>{county.arabAncestryPopulation}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground/40">Arabic spoken at home</dt>
                  <dd>{county.arabicSpeakersAtHome}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-foreground/50">Cities: {cities.map((c) => c.name).join(", ")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
