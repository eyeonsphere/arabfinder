import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cities, getCity, getCounty } from "@/lib/geo";
import { categories } from "@/lib/categories";
import { listingsForCity } from "@/lib/listings";
import { shouldIndex } from "@/lib/noindex";

export function generateStaticParams() {
  return cities.map((c) => ({ county: c.countySlug, city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string; city: string }> }): Promise<Metadata> {
  const { county, city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city || city.countySlug !== county) return {};
  const listingCount = listingsForCity(city.slug).length;
  return {
    title: city.name,
    robots: shouldIndex(listingCount) ? undefined : { index: false, follow: true },
  };
}

export default async function CityPage({ params }: { params: Promise<{ county: string; city: string }> }) {
  const { county: countySlug, city: citySlug } = await params;
  const city = getCity(citySlug);
  const county = getCounty(countySlug);
  if (!city || !county || city.countySlug !== county.slug) notFound();

  const listings = listingsForCity(city.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm text-foreground/50">
        <Link href="/counties" className="hover:underline">Counties</Link> /{" "}
        <Link href={`/${county.slug}`} className="hover:underline">{county.name}</Link> / {city.name}
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-brand-teal-dark">{city.name}</h1>
      <p className="mt-3 max-w-2xl text-foreground/70">{city.blurb}</p>

      {!shouldIndex(listings.length) && (
        <p className="mt-4 max-w-2xl rounded-lg border border-border-soft bg-white p-4 text-sm text-foreground/60">
          This page is not yet indexed by search engines — it will index automatically once at least 3 verified
          listings are published here, per Arab Finder's anti-doorway-page policy.
        </p>
      )}

      <div className="mt-10">
        <p className="font-medium text-foreground">Browse by category</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const count = listings.filter((l) => l.primaryCategory === cat.slug || l.secondaryCategories?.includes(cat.slug)).length;
            return (
              <Link key={cat.slug} href={`/${county.slug}/${city.slug}/${cat.slug}`} className="rounded-lg border border-border-soft bg-white p-4 hover:border-brand-gold">
                <p className="font-medium text-brand-teal-dark">{cat.name}</p>
                <p className="mt-2 text-xs text-foreground/60">
                  {count > 0 ? `${count} listing${count === 1 ? "" : "s"}` : "No listings yet"}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-dashed border-border-soft p-6 text-sm text-foreground/60">
        Don't see a business you know in {city.name}?{" "}
        <Link href="/submit-a-business" className="font-medium text-brand-teal hover:underline">
          Suggest it
        </Link>{" "}
        — new listings go to a manual moderation queue before publishing, and ownership defaults to "not stated"
        until the owner claims the listing.
      </div>
    </div>
  );
}
