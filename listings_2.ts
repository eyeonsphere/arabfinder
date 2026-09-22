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
  {
    listingId: "osm-st-paul-syriac-orthodox-santee",
    name: "St Paul Syriac Orthodox Church",
    slug: "st-paul-syriac-orthodox-church",
    primaryCategory: "faith-community",
    hasPublicStorefront: true,
    countySlug: "san-diego-county",
    citySlug: "santee",
    geo: { lat: 32.8372717, lng: -116.973916 },

    arabOwnedSelfIdentified: "not_stated",

    faithCommunityAffiliation: "Syriac Orthodox",
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
    editorialNote: "Near Cottonwood Avenue, Santee. Street address not yet confirmed in OpenStreetMap — needs Stage 2 enrichment.",
  },
  {
    listingId: "osm-al-rribat-al-aslami-la-mesa",
    name: "Al Rribat Al Aslami",
    slug: "al-rribat-al-aslami",
    primaryCategory: "faith-community",
    hasPublicStorefront: true,
    countySlug: "san-diego-county",
    citySlug: "la-mesa",
    geo: { lat: 32.7708073, lng: -117.043655 },

    arabOwnedSelfIdentified: "not_stated",

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
    editorialNote: "Near Saranac Street, La Mesa. OpenStreetMap itself flags this record with a \"check religion\" note (its own contributor-added fixme tag), so treat the Islamic-center classification as unconfirmed until verified. Street address not yet confirmed either — needs Stage 2 enrichment.",
  },
  {
    listingId: "osm-saint-michael-chaldean-el-cajon",
    name: "Saint Michael Chaldean Catholic Church",
    slug: "saint-michael-chaldean-catholic-church",
    primaryCategory: "faith-community",
    hasPublicStorefront: true,
    countySlug: "san-diego-county",
    citySlug: "el-cajon",
    geo: { lat: 32.7876978, lng: -116.9522952 },

    arabOwnedSelfIdentified: "not_stated",

    faithCommunityAffiliation: "Chaldean Catholic",
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
    editorialNote: "Near East Washington Avenue, El Cajon — the heart of San Diego County's Chaldean/Iraqi-majority community per the blueprint's demographic research. Street address not yet confirmed in OpenStreetMap — needs Stage 2 enrichment.",
  },
  {
    listingId: "osm-islamic-center-of-lakeside",
    name: "Islamic Center of Lakeside",
    slug: "islamic-center-of-lakeside",
    primaryCategory: "faith-community",
    hasPublicStorefront: true,
    countySlug: "san-diego-county",
    citySlug: "lakeside",
    geo: { lat: 32.865053, lng: -116.956789 },

    arabOwnedSelfIdentified: "not_stated",

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
    editorialNote: "Near Mountain View Lane, Lakeside. Street address not yet confirmed in OpenStreetMap — needs Stage 2 enrichment.",
  },
  {
    listingId: "osm-our-mother-of-perpetual-help-el-cajon",
    name: "Our Mother of Perpetual Help",
    slug: "our-mother-of-perpetual-help",
    primaryCategory: "faith-community",
    hasPublicStorefront: true,
    countySlug: "san-diego-county",
    citySlug: "el-cajon",
    geo: { lat: 32.7798922, lng: -116.950317 },

    arabOwnedSelfIdentified: "not_stated",

    faithCommunityAffiliation: "Syriac Catholic",
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
    editorialNote: "Near East Chase Avenue, El Cajon. Street address not yet confirmed in OpenStreetMap — needs Stage 2 enrichment.",
  },
  {
    listingId: "osm-luna-grill-el-cajon",
    name: "Luna Grill",
    slug: "luna-grill-el-cajon",
    primaryCategory: "food-drink",
    address: {
      street: "2963 Jamacha Road",
      locality: "El Cajon",
      region: "CA",
      postal: "92019",
    },
    hasPublicStorefront: true,
    countySlug: "san-diego-county",
    citySlug: "el-cajon",
    telephone: "+1-619-797-4000",
    website: "https://locations.lunagrill.com/luna-grill-e09db7a47093",
    geo: { lat: 32.7377885, lng: -116.9398908 },

    arabOwnedSelfIdentified: "not_stated",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Mediterranean-cuisine restaurant chain location. Cuisine tag only — no ownership or halal-certification claim is made or implied by this listing.",
  },
  {
    listingId: "osm-sahara-el-cajon",
    name: "Sahara",
    slug: "sahara-el-cajon",
    primaryCategory: "food-drink",
    address: {
      street: "2990 Jamacha Road",
      locality: "El Cajon",
      region: "CA",
      postal: "92019",
    },
    hasPublicStorefront: true,
    countySlug: "san-diego-county",
    citySlug: "el-cajon",
    telephone: "+1-619-660-9990",
    website: "https://saharasd.com/",
    geo: { lat: 32.7403701, lng: -116.9422469 },

    arabOwnedSelfIdentified: "not_stated",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Tagged in OpenStreetMap as Middle Eastern / Mediterranean cuisine. No ownership or halal-certification claim is made or implied by this listing.",
  },
  {
    listingId: "osm-family-golden-palace-el-cajon",
    name: "Family Golden Palace",
    slug: "family-golden-palace-el-cajon",
    primaryCategory: "food-drink",
    address: {
      street: "820 Jamacha Road",
      locality: "El Cajon",
      region: "CA",
      postal: "92019",
    },
    hasPublicStorefront: true,
    countySlug: "san-diego-county",
    citySlug: "el-cajon",
    geo: { lat: 32.784867, lng: -116.928286 },

    arabOwnedSelfIdentified: "not_stated",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Tagged in OpenStreetMap as Mediterranean cuisine. No ownership or halal-certification claim is made or implied by this listing.",
  },
  {
    listingId: "osm-al-sultan-mediterranean-grill",
    name: "Al-Sultan Mediterranean Grill",
    slug: "al-sultan-mediterranean-grill",
    primaryCategory: "food-drink",
    address: {
      street: "1707 South Brookhurst Street",
      locality: "Anaheim",
      region: "CA",
      postal: "92802",
    },
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "anaheim",
    telephone: "+1-714-844-2093",
    website: "https://alsultanmediterraneangrillca.com/",
    geo: { lat: 33.8059448, lng: -117.9594385 },

    arabOwnedSelfIdentified: "not_stated",

    halalStatus: "self_described_halal",
    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Cuisine tagged shawarma/Mediterranean; OpenStreetMap's diet:halal=yes tag is a community-reported signal, not a formal certification, so this is recorded as self-described rather than authority-certified.",
  },
  {
    listingId: "osm-forn-al-hara",
    name: "Forn Al Hara",
    slug: "forn-al-hara",
    primaryCategory: "food-drink",
    address: {
      street: "512 South Brookhurst Street, Unit 6",
      locality: "Anaheim",
      region: "CA",
      postal: "92804",
    },
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "anaheim",
    telephone: "+1-714-758-3777",
    website: "https://fornalhara.com/",
    geo: { lat: 33.8260487, lng: -117.9582242 },

    arabOwnedSelfIdentified: "not_stated",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Cuisine tagged Arab/Lebanese/Mediterranean in OpenStreetMap. Part of the South Brookhurst Street plaza (512/518) within the Little Arabia corridor.",
  },
  {
    listingId: "osm-house-of-mandi",
    name: "House of Mandi",
    slug: "house-of-mandi",
    primaryCategory: "food-drink",
    address: {
      street: "518 South Brookhurst Street, Unit 1",
      locality: "Anaheim",
      region: "CA",
      postal: "92804",
    },
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "anaheim",
    telephone: "+1-657-220-5272",
    website: "https://www.houseofmandianaheim.com/",
    geo: { lat: 33.8256065, lng: -117.9586727 },

    arabOwnedSelfIdentified: "not_stated",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Cuisine tagged Arab in OpenStreetMap (mandi is a rice-and-meat dish associated with the Arabian Peninsula and Yemen). Part of the South Brookhurst Street plaza within the Little Arabia corridor.",
  },
  {
    listingId: "osm-jamila-juice",
    name: "Jamila Juice",
    slug: "jamila-juice",
    primaryCategory: "food-drink",
    address: {
      street: "512 South Brookhurst Street, Unit 4",
      locality: "Anaheim",
      region: "CA",
      postal: "92804",
    },
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "anaheim",
    telephone: "+1-714-215-4499",
    website: "https://www.jamilajuice.com/",
    geo: { lat: 33.8260523, lng: -117.958386 },

    arabOwnedSelfIdentified: "not_stated",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Part of the South Brookhurst Street plaza within the Little Arabia corridor.",
  },
  {
    listingId: "osm-qahwah-and-chapati",
    name: "Qahwah & Chauati",
    slug: "qahwah-and-chauati",
    primaryCategory: "food-drink",
    address: {
      street: "518 South Brookhurst Street, Unit 3",
      locality: "Anaheim",
      region: "CA",
      postal: "92804",
    },
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "anaheim",
    telephone: "+1-714-833-5818",
    website: "https://www.qahwahandchapati.com/",
    geo: { lat: 33.8256173, lng: -117.9585357 },

    arabOwnedSelfIdentified: "not_stated",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Name spelling taken as-tagged in OpenStreetMap (\"Qahwah\" is Arabic for coffee); the linked website spells it \"Chapati\" — worth confirming the exact name before this listing is claimed. Part of the South Brookhurst Street plaza within the Little Arabia corridor.",
  },
  {
    listingId: "osm-jenin-meat-market",
    name: "Jenin Meat Market",
    slug: "jenin-meat-market",
    primaryCategory: "food-drink",
    address: {
      street: "518 South Brookhurst Street, Unit 6",
      locality: "Anaheim",
      region: "CA",
      postal: "92804",
    },
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "anaheim",
    telephone: "+1-714-215-4149",
    website: "https://www.jeninmeatmarket.com/",
    geo: { lat: 33.8256173, lng: -117.9582369 },

    arabOwnedSelfIdentified: "not_stated",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Named for Jenin, a city in the West Bank. Part of the South Brookhurst Street plaza within the Little Arabia corridor.",
  },
  {
    listingId: "osm-sababa-falafel-shop",
    name: "Sababa Falafel Shop",
    slug: "sababa-falafel-shop",
    primaryCategory: "food-drink",
    hasPublicStorefront: true,
    countySlug: "orange-county",
    citySlug: "anaheim",
    geo: { lat: 33.8026228, lng: -117.9593587 },

    arabOwnedSelfIdentified: "not_stated",

    claimStatus: "unclaimed",
    verificationLevel: "unverified",
    provenance: {
      source: "OpenStreetMap POI (ODbL)",
      method: "Automated ingestion via Overpass API",
      recordedAt: "2026-09-03",
    },
    closureStatus: "open",
    isSponsored: false,
    professionalDisclaimerShown: false,
    editorialNote: "Falafel restaurant near West Ball Road / Brookhurst Street. Street address not yet confirmed in OpenStreetMap — needs Stage 2 enrichment.",
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
