import type { Metadata } from "next";

export const metadata: Metadata = { title: "About & how listings work" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-brand-teal-dark">About Arab Finder</h1>
      <p className="mt-4 text-foreground/80">
        Arab Finder is a web-first, no-account-required index for Arabic-speaking communities in Southern
        California. Professionals and businesses can create and manage a listing, post local offers, and connect
        with community members. It launched in Orange County and is expanding county by county, in order of
        documented demand density.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">How ownership is identified</h2>
      <p className="mt-3 text-foreground/80">
        Arab Finder never infers or guesses Arab identity or ownership from a name, photograph, spoken language,
        cuisine, religion, or location. Surname-based ethnic inference is unreliable, Arabic-speaking does not mean
        Arab (Assyrian, Turkish, Persian, and Chaldean communities are distinct), most Arab Americans are not
        Muslim, and most halal food providers are not Arab-owned. Because of this, the "Arab-owned" label on a
        listing can only ever come from one of two sources: an authenticated claim by the business's own owner, or a
        public statement the business itself has published and that Arab Finder can cite. Every other listing —
        including everything seeded before an owner claims it — is marked "not stated," which is not a negative
        signal, just an unanswered question.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">Ownership and halal status are separate</h2>
      <p className="mt-3 text-foreground/80">
        Halal certification and Arab ownership are stored as entirely independent fields and are never merged,
        cross-defaulted, or auto-completed from one another. Halal status is religious and supply-chain information;
        ownership is a separate, self-reported fact.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">Where listing data comes from</h2>
      <p className="mt-3 text-foreground/80">
        Arab Finder does not copy, cache, or store business listings scraped from Google Maps or Yelp — both
        platforms' terms of service prohibit exactly that. Listings instead come from public-domain sources (such as
        the IRS's tax-exempt organization filings and OpenStreetMap for mosques, churches, and community
        institutions), from partner community organizations and chambers of commerce, and from business owners and
        community members submitting a listing directly. Community-submitted listings never publish automatically —
        they go to a manual moderation queue first, with ownership set to "not stated" until the business claims and
        verifies its own listing.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">Reviews</h2>
      <p className="mt-3 text-foreground/80">
        When reviews are enabled, they are sorted neutrally by default (by recency or usefulness — never to hide
        negative reviews), are never staff- or AI-written, and are never blended with star ratings imported from
        other platforms.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">Licensed professional categories</h2>
      <p className="mt-3 text-foreground/80">
        Health, legal, financial, real estate, home services, and auto-repair listings display a standing disclaimer
        that Arab Finder does not recommend, refer, or verify professional competence, and shown license numbers
        should always be checked directly with the relevant state licensing board. Arab Finder does not charge
        pay-per-lead, commission-split, or referral fees in the legal or health & medical categories — only flat-rate
        subscription advertising is offered there.
      </p>
    </div>
  );
}
