import Link from "next/link";
import { Listing } from "@/lib/types";
import { getCounty } from "@/lib/geo";
import { OwnershipBadge, HalalBadge, SponsoredLabel } from "./ListingBadges";

export default function ListingCard({ listing }: { listing: Listing }) {
  const county = getCounty(listing.countySlug);
  return (
    <Link
      href={`/${listing.countySlug}/${listing.citySlug}/${listing.primaryCategory}/${listing.slug}`}
      className="block rounded-xl border border-border-soft bg-white p-5 transition hover:border-brand-gold hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-brand-teal-dark">{listing.name}</h3>
        <SponsoredLabel listing={listing} />
      </div>
      <p className="mt-1 text-sm text-foreground/60">
        {listing.address ? `${listing.address.locality}, ${listing.address.region}` : listing.serviceArea?.join(", ")}
        {county ? ` · ${county.name}` : ""}
      </p>
      {listing.editorialNote && <p className="mt-2 line-clamp-2 text-sm text-foreground/80">{listing.editorialNote}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        <OwnershipBadge listing={listing} />
        <HalalBadge listing={listing} />
      </div>
    </Link>
  );
}
