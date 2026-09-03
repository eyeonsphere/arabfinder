import type { MetadataRoute } from "next";
import { counties, cities } from "@/lib/geo";
import { categories } from "@/lib/categories";
import { listings, listingsForCategoryInCity } from "@/lib/listings";
import { shouldIndex } from "@/lib/noindex";

const BASE_URL = "https://arabfinder.example";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/counties", "/categories", "/about", "/privacy", "/terms", "/claim", "/submit-a-business"].map(
    (path) => ({ url: `${BASE_URL}${path}`, changeFrequency: "weekly" as const })
  );

  const countyPages = counties.map((c) => ({ url: `${BASE_URL}/${c.slug}`, changeFrequency: "weekly" as const }));
  const categoryPages = categories.map((c) => ({ url: `${BASE_URL}/categories/${c.slug}`, changeFrequency: "monthly" as const }));

  const cityPages = cities.map((c) => ({ url: `${BASE_URL}/${c.countySlug}/${c.slug}`, changeFrequency: "weekly" as const }));

  // Category-city pages and listing pages only enter the sitemap once indexed
  // (Part 8: pages under the 3-listing threshold carry a noindex header and
  // are excluded here too, to avoid submitting doorway pages to search engines).
  const cityCategoryPages = cities.flatMap((city) =>
    categories
      .filter((cat) => shouldIndex(listingsForCategoryInCity(city.slug, cat.slug).length))
      .map((cat) => ({ url: `${BASE_URL}/${city.countySlug}/${city.slug}/${cat.slug}`, changeFrequency: "weekly" as const }))
  );

  const listingPages = listings.map((l) => ({
    url: `${BASE_URL}/${l.countySlug}/${l.citySlug}/${l.primaryCategory}/${l.slug}`,
    changeFrequency: "weekly" as const,
  }));

  return [...staticPages, ...countyPages, ...categoryPages, ...cityPages, ...cityCategoryPages, ...listingPages];
}
