import { Listing } from "./types";

// Phase 0 seed data.
//
// Per Rule 3 (Zero Local Scraping of Google or Yelp) this file contains NO data
// copied or cached from Google Maps or Yelp. Per Rule 1 (the Self-Identification
// Rule), Arab ownership is never inferred — it is only set from an authenticated
// owner claim ("self_identified") or a cited public statement made by the
// business itself ("documented_public_claim"). Every other field below is drawn
// from the two organizations' own public pages, as documented in the Southern
// California research pack.
//
// Because a real IRS TEOS / OpenStreetMap ingestion pipeline (Part 6, Stage 1)
// has not been run yet, this seed intentionally contains only the handful of
// institutional anchors that could be verified this way — not invented
// businesses. Category/city pages stay under the 3-listing indexing threshold
// (Part 8) until real ingestion or owner claims populate them further; see
// noindex.ts.
export const listings: Listing[] = [
  {
    listingId: "aabc-irvine",
    name: "Arab American Business Chamber (AABC)",
    slug: "arab-american-business-chamber",
    primaryCategory: "faith-community",
    secondaryCategories: ["shops-events-services"],
    address: {
      street: "2801 Main Street, Suite 413",
      locality: "Irvine",
      region: "CA",
      postal: "92614",
    },
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "irvine",
    telephone: "(949) 287-2465",

    arabOwnedSelfIdentified: "documented_public_claim",
    arabOwnedSource: "Organization's own published mission statement",
    arabOwnedAttestedBy: "AABC public website (fetched via research, Sept 2026)",

    claimStatus: "unclaimed",
    verificationLevel: "contact_verified",
    provenance: {
      source: "Public organization website",
      method: "Manual editorial entry from cited public source",
      recordedAt: "2026-09-01",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote:
      "A regional chamber of commerce serving Arab American professionals, entrepreneurs, and small business owners. States its purpose as \"advancing economic opportunity, strategic partnerships, and sustainable business growth within the Arab American community.\" Board includes President & CEO Farah Kanchar.",
  },
  {
    listingId: "american-arab-chamber-anaheim",
    name: "American Arab Chamber of Commerce — Anaheim",
    slug: "american-arab-chamber-of-commerce-anaheim",
    primaryCategory: "faith-community",
    secondaryCategories: ["shops-events-services"],
    hasPublicStorefront: false,
    serviceArea: ["Anaheim, CA", "Orange County, CA"],
    countySlug: "orange-county",
    citySlug: "anaheim",

    arabOwnedSelfIdentified: "documented_public_claim",
    arabOwnedSource: "Organization's own published mission statement",
    arabOwnedAttestedBy: "American Arab Chamber of Commerce public website (fetched via research, Sept 2026)",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "Public organization website",
      method: "Manual editorial entry from cited public source",
      recordedAt: "2026-09-01",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote:
      "Founded in Dearborn, Michigan in 1992, the American Arab Chamber of Commerce maintains an Anaheim-focused presence describing a national network of 1,800+ businesses across three local clusters: restaurants, food & retail; real estate & services; and tourism & hospitality. No stated street address was found for the Anaheim office as of this listing's creation — the chamber is listed as a service-area organization rather than a storefront.",
  },
];

export function listingsForCounty(countySlug: string): Listing[] {
  return listings.filter((l) => l.countySlug === countySlug);
}
export function listingsForCity(citySlug: string): Listing[] {
  return listings.filter((l) => l.citySlug === citySlug);
}
export function listingsForCategoryInCity(citySlug: string, categorySlug: string): Listing[] {
  return listings.filter(
    (l) =>
      l.citySlug === citySlug &&
      (l.primaryCategory === categorySlug || l.secondaryCategories?.includes(categorySlug))
  );
}
export function getListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}
