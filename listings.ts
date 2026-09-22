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
// A first real Part 6, Stage 1 ingestion pass has now been run for Orange
// County: place-of-worship POIs pulled live from OpenStreetMap via the public
// Overpass API (ODbL-licensed, public domain reuse — not Google/Yelp), with
// city assigned either from OSM's own addr:city tag or, where that was
// missing, from a Nominatim (also OSM-based) reverse geocode of the node's
// coordinates. Every mosque/church record below carries only what OSM itself
// states: its name, religious affiliation, and location — never an ownership
// claim. Category/city pages that still sit under the 3-listing indexing
// threshold (Part 8) remain noindexed until further ingestion or owner claims
// populate them; see noindex.ts.
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
  {
    listingId: "osm-al-noor-foundation-westminster",
    name: "Al-Noor Foundation",
    slug: "al-noor-foundation",
    primaryCategory: "faith-community",
    address: {
      street: "14522 Goldenwest Street",
      locality: "Westminster",
      region: "CA",
      postal: "92683",
    },
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "westminster",
    geo: { lat: 33.7512827, lng: -118.0064907 },

    arabOwnedSelfIdentified: "not_stated",

    faithCommunityAffiliation: "Sunni",
    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap place-of-worship POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Also known as Al-Noor Mosque. Denomination self-tagged as Sunni in OpenStreetMap.",
  },
  {
    listingId: "osm-jafaria-islamic-society-anaheim",
    name: "Jafaria Islamic Society",
    slug: "jafaria-islamic-society",
    primaryCategory: "faith-community",
    address: {
      street: "1546 East La Palma Avenue",
      locality: "Anaheim",
      region: "CA",
      postal: "92805",
    },
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "anaheim",
    website: "https://www.jafaria.org/jafaria_site/",
    geo: { lat: 33.8469003, lng: -117.8956131 },

    arabOwnedSelfIdentified: "not_stated",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap place-of-worship POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
  },
  {
    listingId: "osm-masjid-al-ansar-anaheim",
    name: "Masjid Al-Ansar",
    slug: "masjid-al-ansar",
    primaryCategory: "faith-community",
    address: {
      street: "1717 Brookhurst Street",
      locality: "Anaheim",
      region: "CA",
      postal: "92804",
    },
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "anaheim",
    telephone: "+1-714-535-1100",
    website: "https://www.wcismasjid.com/",
    geo: { lat: 33.805618, lng: -117.9595158 },

    arabOwnedSelfIdentified: "not_stated",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap place-of-worship POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Located on Brookhurst Street, within the Little Arabia cultural corridor.",
  },
  {
    listingId: "osm-saint-verena-coptic-orthodox-anaheim",
    name: "Saint Verena Coptic Orthodox Church",
    slug: "saint-verena-coptic-orthodox-church",
    primaryCategory: "faith-community",
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "anaheim",
    geo: { lat: 33.8372222, lng: -117.8988889 },

    arabOwnedSelfIdentified: "not_stated",

    faithCommunityAffiliation: "Coptic Orthodox",
    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap place-of-worship POI (ODbL) + Nominatim reverse geocode for city",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Street address not yet confirmed in OpenStreetMap — city and coordinates only. Needs Stage 2 enrichment before a full address can be shown.",
  },
  {
    listingId: "osm-holy-cross-melkite-placentia",
    name: "Holy Cross Melkite Greek Catholic Church",
    slug: "holy-cross-melkite-greek-catholic-church",
    primaryCategory: "faith-community",
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "placentia",
    geo: { lat: 33.8822222, lng: -117.8716667 },

    arabOwnedSelfIdentified: "not_stated",

    faithCommunityAffiliation: "Melkite Greek Catholic",
    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap place-of-worship POI (ODbL) + Nominatim reverse geocode for city",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Street address not yet confirmed in OpenStreetMap — city and coordinates only. Needs Stage 2 enrichment before a full address can be shown.",
  },
  {
    listingId: "osm-st-marys-syrian-orthodox-orange",
    name: "St Mary's Syrian Orthodox Church",
    slug: "st-marys-syrian-orthodox-church",
    primaryCategory: "faith-community",
    address: {
      street: "1515 East Taft Avenue",
      locality: "Orange",
      region: "CA",
      postal: "92865",
    },
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "orange",
    geo: { lat: 33.8162823, lng: -117.8380541 },

    arabOwnedSelfIdentified: "not_stated",

    faithCommunityAffiliation: "Syriac Orthodox",
    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap place-of-worship POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
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
