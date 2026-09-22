import Link from "next/link";
import type { Metadata } from "next";
import { counties, citiesInCounty } from "@/lib/geo";

export const metadata: Metadata = { title: "Browse by county" };

function CountyCard({ county }: { county: (typeof counties)[number] }) {
  const cities = citiesInCounty(county.slug);
  return (
    <div className="rounded-xl border border-border-soft bg-white p-6">
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
}

export default function CountiesPage() {
  const caCounties = counties.filter((c) => c.state === "CA");
  const miCounties = counties.filter((c) => c.state === "MI");

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-brand-teal-dark">Browse by region</h1>
      <p className="mt-2 max-w-2xl text-foreground/70">
        Arabs Finder covers two regions so far: Southern California, where it launched, and Michigan, home to the
        country's largest Chaldean and Arab American community outside the Middle East. Rollout within each region
        is phased by demand density and existing community infrastructure — not all counties are live yet.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-brand-teal-dark">Southern California counties</h2>
        <p className="mt-1 max-w-2xl text-sm text-foreground/60">
          Five counties hold a combined estimated Arab-ancestry population above 200,000.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {caCounties.map((county) => (
            <CountyCard key={county.slug} county={county} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-brand-teal-dark">Michigan counties</h2>
        <p className="mt-1 max-w-2xl text-sm text-foreground/60">
          Metro Detroit has the second-largest Middle Eastern-ancestry population of any U.S. metro area, after
          Southern California, and the country's largest Chaldean community.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {miCounties.map((county) => (
            <CountyCard key={county.slug} county={county} />
          ))}
        </div>
      </section>
    </div>
  );
}
