import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategory } from "@/lib/categories";
import { cities, getCounty } from "@/lib/geo";
import { listingsForCategoryInCity } from "@/lib/listings";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  return { title: category ? category.name : "Category" };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm text-foreground/50">
        <Link href="/categories" className="hover:underline">Categories</Link> / {category.name}
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-brand-teal-dark">{category.name}</h1>
      <p className="mt-1 font-mono text-xs text-foreground/40">schema.org/{category.schemaType}</p>

      {category.requiresLicenseVerification && (
        <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          License verification required{category.licenseNote ? ` — ${category.licenseNote}` : ""}. Every listing in
          this category carries a standing disclaimer: Arab Finder does not recommend, refer, or verify professional
          competence.
        </div>
      )}

      <div className="mt-6">
        <p className="font-medium text-foreground">Subcategories</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {category.subcategories.map((s) => (
            <span key={s} className="rounded-full border border-border-soft bg-white px-3 py-1 text-xs text-foreground/70">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="font-medium text-foreground">Browse {category.name.toLowerCase()} by city</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => {
            const count = listingsForCategoryInCity(city.slug, category.slug).length;
            const county = getCounty(city.countySlug);
            return (
              <Link
                key={city.slug}
                href={`/${city.countySlug}/${city.slug}/${category.slug}`}
                className="rounded-lg border border-border-soft bg-white p-4 hover:border-brand-gold"
              >
                <p className="font-medium text-brand-teal-dark">{city.name}</p>
                <p className="text-xs text-foreground/50">{county?.name}</p>
                <p className="mt-2 text-xs text-foreground/60">
                  {count > 0 ? `${count} listing${count === 1 ? "" : "s"}` : "No listings yet — be the first to suggest one"}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
