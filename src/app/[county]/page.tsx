import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { counties, getCounty, citiesInCounty } from "@/lib/geo";
import { listingsForCounty } from "@/lib/listings";

export function generateStaticParams() {
  return counties.map((c) => ({ county: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string }> }): Promise<Metadata> {
  const { county: slug } = await params;
  const county = getCounty(slug);
  return { title: county ? county.name : "County" };
}

export default async function CountyPage({ params }: { params: Promise<{ county: string }> }) {
  const { county: slug } = await params;
  const county = getCounty(slug);
  if (!county) notFound();
  const cities = citiesInCounty(county.slug);
  const listings = listingsForCounty(county.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm text-foreground/50">
        <Link href="/counties" className="hover:underline">Counties</Link> / {county.name}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-gold">{county.phaseLabel}</p>
      <h1 className="mt-1 text-3xl font-semibold text-brand-teal-dark">{county.name}</h1>
      <p className="mt-3 max-w-2xl text-foreground/70">{county.blurb}</p>

      <dl className="mt-6 grid max-w-lg grid-cols-2 gap-4 rounded-xl border border-border-soft bg-white p-5 text-sm">
        <div>
          <dt className="text-xs font-medium text-foreground/40">Arab ancestry (ACS est.)</dt>
          <dd className="text-foreground">{county.arabAncestryPopulation}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-foreground/40">Arabic spoken at home</dt>
          <dd className="text-foreground">{county.arabicSpeakersAtHome}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-foreground/40">Limited English proficiency share</dt>
          <dd className="text-foreground">{county.lepShare || "n/a"}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-foreground/40">Dominant dialect profile</dt>
          <dd className="text-foreground">{county.dialectProfile}</dd>
        </div>
      </dl>

      <div className="mt-10">
        <p className="font-medium text-foreground">Cities</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => {
            const cityListingCount = listings.filter((l) => l.citySlug === city.slug).length;
            return (
              <Link key={city.slug} href={`/${county.slug}/${city.slug}`} className="rounded-lg border border-border-soft bg-white p-4 hover:border-brand-gold">
                <p className="font-medium text-brand-teal-dark">
                  {city.name}
                  {city.isCulturalDistrict && <span className="ml-2 text-[11px] font-medium text-brand-gold">Cultural district</span>}
                </p>
                <p className="mt-2 text-xs text-foreground/60">
                  {cityListingCount > 0 ? `${cityListingCount} listing${cityListingCount === 1 ? "" : "s"}` : "No listings yet"}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
