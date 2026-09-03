// Arab Finder — core data model
// Mirrors "Part 4: Listing Fields Schema & Data Dictionary (v1)" of the platform spec.
// This is a static/demo implementation of the schema (JSON-backed) for the Phase 0
// foundation build. A production build swaps this module for the Postgres-backed
// Prisma/Django models described in the spec without changing the page components.

export type SchemaOrgType =
  | "FoodEstablishment"
  | "MedicalBusiness"
  | "LegalService"
  | "FinancialService"
  | "RealEstateAgent"
  | "HomeAndConstructionBusiness"
  | "AutomotiveBusiness"
  | "HealthAndBeautyBusiness"
  | "CivicStructure"
  | "ChildCare"
  | "EducationalOrganization"
  | "ProfessionalService"
  | "Store";

export interface Category {
  slug: string;
  name: string;
  schemaType: SchemaOrgType;
  requiresLicenseVerification: boolean;
  licenseNote?: string;
  subcategories: string[];
}

export interface County {
  slug: string;
  name: string;
  phase: 1 | 2 | 3 | 4;
  phaseLabel: string;
  arabAncestryPopulation: string;
  arabicSpeakersAtHome: string;
  lepShare?: string;
  dialectProfile: string;
  blurb: string;
}

export interface City {
  slug: string;
  name: string;
  countySlug: string;
  blurb: string;
  isCulturalDistrict?: boolean;
}

// Ownership self-identification — Rule 1 (Anti-Ethnic-Inference).
// Can ONLY be set to "self_identified" via an authenticated owner claim, or
// "documented_public_claim" with a cited public URL where the business itself
// makes the claim. Every other listing — including all seeded/nominated ones —
// defaults to "not_stated". Never inferred from name, cuisine, language, or religion.
export type OwnershipIdentification =
  | "self_identified"
  | "documented_public_claim"
  | "not_stated";

export type HalalStatus =
  | "certified_by_authority"
  | "self_described_halal"
  | "partial_halal_menu"
  | "not_halal"
  | "not_stated";

export type ClaimStatus = "unclaimed" | "claim_pending" | "claimed_verified";

export type VerificationLevel =
  | "unverified"
  | "contact_verified"
  | "owner_verified"
  | "license_verified";

export type ClosureStatus = "open" | "temporarily_closed" | "permanently_closed";

export interface Provenance {
  source: string; // e.g. "IRS TEOS bulk file", "Owner claim", "Chamber partner list"
  method: string; // e.g. "Bulk ingestion", "Authenticated self-report"
  recordedAt: string; // ISO date
}

export interface Listing {
  listingId: string;
  name: string;
  legalName?: string;
  slug: string;
  primaryCategory: string; // Category.slug
  secondaryCategories?: string[]; // max 3, Category.slug
  address?: {
    street: string;
    locality: string; // city
    region: string; // state
    postal: string;
  };
  hasPublicStorefront: boolean;
  serviceArea?: string[]; // required if hasPublicStorefront is false
  countySlug: string;
  citySlug?: string;
  geo?: { lat: number; lng: number };
  telephone?: string;
  website?: string;
  openingHours?: string;
  priceRange?: string;

  arabOwnedSelfIdentified: OwnershipIdentification;
  arabOwnedSource?: string;
  arabOwnedAttestedBy?: string;

  languagesSpoken?: string[];
  arabicDialects?: string[];
  arabicServiceAdvertised?: boolean;

  licenseType?: string;
  licenseNumber?: string;
  licenseState?: string;
  licenseStatus?: "verified" | "pending" | "not_applicable";
  licenseVerifiedAt?: string;
  professionalDisclaimerShown?: boolean;

  accessibility?: string[];
  genderOfProviderAvailable?: string[];

  halalStatus?: HalalStatus;
  halalCertifierName?: string;
  halalCertificateUrl?: string;
  alcoholServed?: boolean;
  porkServed?: boolean;
  prayerSpace?: boolean;
  faithCommunityAffiliation?: string;

  claimStatus: ClaimStatus;
  verificationLevel: VerificationLevel;
  provenance: Provenance;
  lastVerifiedAt?: string;
  nextReviewDue?: string;
  closureStatus: ClosureStatus;
  duplicateOf?: string;

  isSponsored: boolean;
  sponsorshipLabel?: string;
  nonprofitEin?: string;

  editorialNote?: string;
}
