import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { listings, getListing } from "@/lib/listings";
import { getCategory } from "@/lib/categories";
import { getCity, getCounty } from "@/lib/geo";
import {
  OwnershipBadge,
  HalalBadge,
  SponsoredLabel,
  ClaimStatusBadge,
  LicenseDisclaimer,
} from "@/components/ListingBadges";

export function generateStaticParams() {
  return listings.map((l) => ({ county: l.countySlug, city: l.citySlug!, category: l.primaryCategory, listing: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ listing: string }> }): Promise<Metadata> {
  const { listing: slug } = await params;
  const listing = getListing(slug);
  return { title: listing?.name || "Listing" };
}

export default async function ListingPage({
  params,
}: {
  params: Promise<{ county: string; city: string; category: string; listing: string }>;
}) {
  const { listing: slug } = await params;
  const listing = getListing(slug);
  if (!listing) notFound();
  const category = getCategory(listing.primaryCategory);
  const city = listing.citySlug ? getCity(listing.citySlug) : undefined;
  const county = getCounty(listing.countySlug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm text-foreground/50">
        <Link href={`/${listing.countySlug}`} className="hover:underline">{county?.name}</Link> /{" "}
        {city && <><Link href={`/${listing.countySlug}/${city.slug}`} className="hover:underline">{city.name}</Link> / </>}
        <Link href={`/${listing.countySlug}/${city?.slug}/${listing.primaryCategory}`} className="hover:underline">
          {category?.name}
        </Link>
      </p>

      <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
        <h1 className="text-3xl font-semibold text-brand-teal-dark">{listing.name}</h1>
        <SponsoredLabel listing={listing} />
      </div>
      {listing.legalName && listing.legalName !== listing.name && (
        <p className="text-sm text-foreground/50">Legal name: {listing.legalName}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <ClaimStatusBadge listing={listing} />
        <OwnershipBadge listing={listing} />
        <HalalBadge listing={listing} />
      </div>

      {listing.editorialNote && <p className="mt-6 text-foreground/80">{listing.editorialNote}</p>}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border-soft bg-white p-5">
          <p className="text-sm font-semibold text-foreground">Contact &amp; location</p>
          <dl className="mt-3 space-y-2 text-sm">
            {listing.address && (
              <div>
                <dt className="text-xs text-foreground/40">Address</dt>
                <dd>{listing.address.street}, {listing.address.locality}, {listing.address.region} {listing.address.postal}</dd>
              </div>
            )}
            {!listing.hasPublicStorefront && listing.serviceArea && (
              <div>
                <dt className="text-xs text-foreground/40">Service area</dt>
                <dd>{listing.serviceArea.join(", ")}</dd>
              </div>
            )}
            {listing.telephone && (
              <div>
                <dt className="text-xs text-foreground/40">Phone</dt>
                <dd>{listing.telephone}</dd>
              </div>
            )}
            {listing.website && (
              <div>
                <dt className="text-xs text-foreground/40">Website</dt>
                <dd><a href={listing.website} className="text-brand-teal hover:underline">{listing.website}</a></dd>
              </div>
            )}
            {listing.openingHours && (
              <div>
                <dt className="text-xs text-foreground/40">Hours</dt>
                <dd>{listing.openingHours}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="rounded-xl border border-border-soft bg-white p-5">
          <p className="text-sm font-semibold text-foreground">Verification</p>
          <dl className="mt-3 space-y-2 text-sm">
            <div>
              <dt className="text-xs text-foreground/40">Verification level</dt>
              <dd className="capitalize">{listing.verificationLevel.replace(/_/g, " ")}</dd>
            </div>
            <div>
              <dt className="text-xs text-foreground/40">Source</dt>
              <dd>{listing.provenance.source}</dd>
            </div>
            <div>
              <dt className="text-xs text-foreground/40">Recorded</dt>
              <dd>{listing.provenance.recordedAt}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-6">
        <LicenseDisclaimer listing={listing} />
      </div>

      <div className="mt-10 rounded-xl border border-dashed border-border-soft p-6">
        <p className="font-medium text-foreground">Is this your business?</p>
        <p className="mt-1 text-sm text-foreground/60">
          Claiming lets you set your own ownership self-identification, hours, and contact details, and requires two
          matching verification factors (domain email, phone/SMS code, or a mailed postcard PIN).
        </p>
        <Link
          href="/claim"
          className="mt-3 inline-block rounded-full bg-brand-teal px-5 py-2 text-sm font-medium text-white hover:bg-brand-teal-dark"
        >
          Claim this listing
        </Link>
      </div>

      <div className="mt-10">
        <p className="font-medium text-foreground">Reviews</p>
        <p className="mt-2 text-sm text-foreground/60">
          No reviews yet. Reviews, when present, are sorted neutrally by default and are never edited, removed, or
          blended with third-party ratings.
        </p>
      </div>
    </div>
  );
}
