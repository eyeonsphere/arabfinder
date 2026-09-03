import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cities, getCity, getCounty } from "@/lib/geo";
import { categories, getCategory } from "@/lib/categories";
import { listingsForCategoryInCity } from "@/lib/listings";
import { shouldIndex, MIN_LISTINGS_TO_INDEX } from "@/lib/noindex";
import ListingCard from "@/components/ListingCard";

export function generateStaticParams() {
  return cities.flatMap((city) => categories.map((cat) => ({ county: city.countySlug, city: city.slug, category: cat.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ county: string; city: string; category: string }>;
}): Promise<Metadata> {
  const { city: citySlug, category: catSlug } = await params;
  const city = getCity(citySlug);
  const category = getCategory(catSlug);
  if (!city || !category) return {};
  const count = listingsForCategoryInCity(city.slug, category.slug).length;
  return {
    title: `${category.name} in ${city.name}`,
    robots: shouldIndex(count) ? undefined : { index: false, follow: true },
  };
}

export default async function CityCategoryPage({
  params,
}: {
  params: Promise<{ county: string; city: string; category: string }>;
}) {
  const { county: countySlug, city: citySlug, category: catSlug } = await params;
  const county = getCounty(countySlug);
  const city = getCity(citySlug);
  const category = getCategory(catSlug);
  if (!county || !city || !category || city.countySlug !== county.slug) notFound();

  const listings = listingsForCategoryInCity(city.slug, category.slug);
  const indexed = shouldIndex(listings.length);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm text-foreground/50">
        <Link href={`/${county.slug}`} className="hover:underline">{county.name}</Link> /{" "}
        <Link href={`/${county.slug}/${city.slug}`} className="hover:underline">{city.name}</Link> / {category.name}
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-brand-teal-dark">
        {category.name} in {city.name}
      </h1>

      {category.requiresLicenseVerification && (
        <div className="mt-4 max-w-2xl rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          Arab Finder does not recommend, refer, or verify professional competence in this category. Check any shown
          license number against the relevant state licensing board.
        </div>
      )}

      {!indexed && (
        <p className="mt-4 max-w-2xl rounded-lg border border-border-soft bg-white p-4 text-xs text-foreground/50">
          noindex — fewer than {MIN_LISTINGS_TO_INDEX} verified listings published for this category in this city.
        </p>
      )}

      {listings.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-border-soft p-8 text-center">
          <p className="text-foreground/70">No {category.name.toLowerCase()} listings in {city.name} yet.</p>
          <Link href="/submit-a-business" className="mt-3 inline-block rounded-full bg-brand-teal px-5 py-2 text-sm font-medium text-white hover:bg-brand-teal-dark">
            Suggest one
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {listings.map((l) => (
            <ListingCard key={l.listingId} listing={l} />
          ))}
        </div>
      )}
    </div>
  );
}
