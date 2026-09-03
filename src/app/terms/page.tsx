import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-brand-teal-dark">Terms of Service</h1>
      <p className="mt-3 text-sm text-foreground/50">Last updated September 2026</p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">What Arab Finder is</h2>
      <p className="mt-3 text-foreground/80">
        Arab Finder is an interactive computer service that hosts user-generated content, including business
        listings, claims, and — where enabled — reviews and comments. As such, and consistent with Section 230 of
        the Communications Decency Act, Arab Finder is not the publisher or speaker of content submitted by users or
        businesses.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">We don't rewrite what you say</h2>
      <p className="mt-3 text-foreground/80">
        Staff never edit, paraphrase, or rewrite a user's review or a business's self-description into Arab Finder's
        own editorial voice. Any claim that a business is Arab-owned must be made explicitly by the business itself —
        Arab Finder does not assert it on a business's behalf.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">Reviews policy</h2>
      <p className="mt-3 text-foreground/80">
        Negative reviews are never suppressed, deleted, or hidden for being negative. Reviews are sorted neutrally by
        default. Arab Finder, its staff, and its contractors never write reviews to seed a listing. First-party
        reviews are never blended or aggregated with ratings imported from a third-party platform.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">No referral fees in Legal or Health & Medical</h2>
      <p className="mt-3 text-foreground/80">
        Consistent with California State Bar Rule 7.2(b) and the federal Anti-Kickback Statute / Stark Law, Arab
        Finder never charges a pay-per-lead, commission-split, or referral fee in the Legal or Health & Medical
        categories. Only flat-rate subscription advertising is offered in these verticals, and it is always labeled
        as advertising.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">Licensed categories</h2>
      <p className="mt-3 text-foreground/80">
        Arab Finder does not recommend, refer, or verify the professional competence of any listed provider. Where a
        license status is shown, verify it directly with the relevant state licensing board before relying on it.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">Claiming a listing</h2>
      <p className="mt-3 text-foreground/80">
        Only the verified owner of a business may claim its listing. Claims require at least two matching
        verification factors (domain-matched email, an SMS or voice code to the listed phone number, or a postcard
        PIN mailed to the business address) before a listing is marked "claimed & verified."
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">Contact</h2>
      <p className="mt-3 text-foreground/80">
        <a href="mailto:legal@arabfinder.example" className="text-brand-teal hover:underline">legal@arabfinder.example</a>
      </p>
    </div>
  );
}
