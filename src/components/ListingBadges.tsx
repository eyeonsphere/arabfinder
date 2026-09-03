import { Listing } from "@/lib/types";
import { getCategory } from "@/lib/categories";

// Rule 1: The Self-Identification Rule. Only ever renders what the record
// actually says — never infers or guesses. "not_stated" renders nothing at all
// rather than a default assumption.
export function OwnershipBadge({ listing }: { listing: Listing }) {
  if (listing.arabOwnedSelfIdentified === "not_stated") return null;
  const label =
    listing.arabOwnedSelfIdentified === "self_identified"
      ? "Arab-owned — self-identified by owner"
      : "Arab-owned — documented public claim";
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-brand-gold bg-brand-gold-light/40 px-3 py-1 text-xs font-medium text-brand-teal-dark">
      {label}
    </span>
  );
}

// Rule 2: Absolute Separation of Arab Ownership and Halal — rendered as an
// entirely independent badge, never merged with OwnershipBadge.
export function HalalBadge({ listing }: { listing: Listing }) {
  if (!listing.halalStatus || listing.halalStatus === "not_stated") return null;
  const labels: Record<string, string> = {
    certified_by_authority: "Halal — certified by authority",
    self_described_halal: "Halal — self-described",
    partial_halal_menu: "Partial halal menu",
    not_halal: "Not halal",
  };
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-700 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
      {labels[listing.halalStatus]}
    </span>
  );
}

export function SponsoredLabel({ listing }: { listing: Listing }) {
  if (!listing.isSponsored) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground/70">
      {listing.sponsorshipLabel || "Sponsored"}
    </span>
  );
}

export function ClaimStatusBadge({ listing }: { listing: Listing }) {
  const map: Record<string, { label: string; cls: string }> = {
    unclaimed: { label: "Unclaimed listing", cls: "bg-foreground/5 text-foreground/60" },
    claim_pending: { label: "Claim pending verification", cls: "bg-amber-50 text-amber-800" },
    claimed_verified: { label: "Claimed & verified", cls: "bg-brand-teal text-white" },
  };
  const m = map[listing.claimStatus];
  return <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${m.cls}`}>{m.label}</span>;
}

// Rule 5: Professional-License Disclaimers. Every licensed category must
// display a standing disclaimer — hardcoded, not editable per-listing.
export function LicenseDisclaimer({ listing }: { listing: Listing }) {
  const category = getCategory(listing.primaryCategory);
  if (!category?.requiresLicenseVerification) return null;
  return (
    <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
      <p className="font-semibold">License disclaimer</p>
      <p className="mt-1">
        Arab Finder does not recommend, refer, or verify professional competence. Where a license number is shown,
        it reflects a lookup against the relevant state licensing board and may not be current.
        {listing.licenseState && listing.licenseType ? (
          <>
            {" "}
            Verify this {listing.licenseType.toLowerCase()} license directly with the {listing.licenseState} state
            licensing board before engaging this provider.
          </>
        ) : (
          " This listing has not yet had its license verified against the relevant state board."
        )}
      </p>
    </div>
  );
}
