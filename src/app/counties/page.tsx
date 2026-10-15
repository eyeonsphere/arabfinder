import Link from "next/link";
import type { Metadata } from "next";
import { counties, citiesInCounty, countyRegions } from "@/lib/geo";

export const metadata: Metadata = { title: "Browse by county" };

// Hand-written intros for the original regions; any newer region (added by
// just adding counties to geo.ts) falls back to an auto-generated line so it
// never silently fails to render — see the note on countyRegions() in
// src/lib/geo.ts.
const REGION_HEADING: Record<string, string> = {
  "Southern California": "Southern California counties",
  "Michigan Chapter": "Michigan counties",
  "Illinois Chapter": "Illinois counties",
  "Bay Area Chapter": "San Francisco Bay Area counties",
};

const REGION_INTRO: Record<string, string> = {
  "Southern California": "Five counties hold a combined estimated Arab-ancestry population above 200,000.",
  "Michigan Chapter":
    "Metro Detroit has the second-largest Middle Eastern-ancestry population of any U.S. metro area, after Southern California, and the country's largest Chaldean community.",
  "Illinois Chapter":
    "Cook County has the largest Palestinian-American population of any U.S. county, concentrated along the Harlem Avenue corridor in Bridgeview, alongside a longstanding Assyrian/Chaldean community on Chicago's north side and north suburbs.",
  "Bay Area Chapter":
    "San Francisco's Tenderloin has been the heart of Arab San Francisco since the 1960s, home to the largest Yemeni community in Northern California; Oakland has its own 10,000+ Yemeni-American community; and San Jose's Silicon Valley hosts a more recent wave of Arab American tech professionals.",
};

function regionHeading(region: string): string {
  return REGION_HEADING[region] ?? `${region} counties`;
}

function regionIntro(region: string, regionCounties: (typeof counties)): string {
  if (REGION_INTRO[region]) return REGION_INTRO[region];
  const count = regionCounties.length;
  return `${count} ${count === 1 ? "county is" : "counties are"} live in this chapter so far.`;
}

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
  const regions = countyRegions();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-brand-teal-dark">Browse by region</h1>
      <p className="mt-2 max-w-2xl text-foreground/70">
        Arabs Finder now covers {regions.length} regions across {counties.length} counties, rolled out phase by
        phase, by demand density and existing community infrastructure — not all counties are live yet everywhere.
      </p>

      {regions.map(({ region, counties: regionCounties }) => (
        <section key={region} className="mt-14 first:mt-10">
          <h2 className="text-xl font-semibold text-brand-teal-dark">{regionHeading(region)}</h2>
          <p className="mt-1 max-w-2xl text-sm text-foreground/60">{regionIntro(region, regionCounties)}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {regionCounties.map((county) => (
              <CountyCard key={county.slug} county={county} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
