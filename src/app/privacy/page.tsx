import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-brand-teal-dark">Privacy Policy</h1>
      <p className="mt-3 text-sm text-foreground/50">Last updated September 2026 · Written for California Consumer Privacy Act (CCPA) compliance.</p>

      <p className="mt-6 text-foreground/80">
        This policy is written in plain language and describes what Arab Finder collects, why, and the choices you
        have. It applies to individual practitioner profiles and privacy-sensitive listings as carefully as it does
        to larger businesses, regardless of Arab Finder's own revenue.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">What we collect</h2>
      <p className="mt-3 text-foreground/80">
        Business and listing information you or a business owner submits; claim-verification details (an email
        address, a phone number, or a mailing address used only to send a one-time verification PIN); and, if you
        contact us, whatever you include in that message. We do not sell personal information.
      </p>

      <h2 id="your-privacy-choices" className="mt-10 text-xl font-semibold text-brand-teal-dark">
        Your Privacy Choices
      </h2>
      <p className="mt-3 text-foreground/80">
        You can opt out of the sale or sharing of your personal information, including via a browser-level Global
        Privacy Control (GPC) signal, which Arab Finder honors automatically. To submit a manual opt-out, email{" "}
        <a href="mailto:privacy@arabfinder.example" className="text-brand-teal hover:underline">privacy@arabfinder.example</a>.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">Request your data (DSAR)</h2>
      <p className="mt-3 text-foreground/80">
        You may request access to, or deletion of, your personal information. Individual practitioners (solo
        dentists, attorneys, and similar) can request removal of their profile on a low-friction, take-down-on-request
        basis regardless of Arab Finder's revenue thresholds. Requests are processed within 45 calendar days.
      </p>
      <form
        name="dsar-request"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thanks"
        className="mt-4 space-y-4 rounded-xl border border-border-soft bg-white p-6"
      >
        <input type="hidden" name="form-name" value="dsar-request" />
        <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="dsar-type">Request type</label>
          <select id="dsar-type" name="request_type" required className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm">
            <option>Access — send me the data you have</option>
            <option>Deletion — remove my data</option>
            <option>Opt-out of sale/sharing</option>
            <option>Remove my individual practitioner profile</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="dsar-email">Email</label>
          <input id="dsar-email" type="email" name="email" required className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="dsar-details">Details (listing name/URL, or what you're requesting)</label>
          <textarea id="dsar-details" name="details" rows={4} className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded-full bg-brand-teal px-5 py-2 text-sm font-medium text-white hover:bg-brand-teal-dark">
          Submit request
        </button>
        <p className="text-xs text-foreground/40">We'll acknowledge your request and respond within 45 calendar days, as required by the CCPA.</p>
      </form>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">Outreach emails</h2>
      <p className="mt-3 text-foreground/80">
        Claim-invitation emails sent to seeded business listings include a valid physical postal address and a
        working opt-out link, per the CAN-SPAM Act. Opt-outs are honored within 10 business days and remain valid for
        at least 30 days. We do not send automated or autodialed SMS or voice outreach without your prior express
        written consent, per the Telephone Consumer Protection Act — claim-verification codes you request yourself
        are the only automated messages we send.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-teal-dark">Contact</h2>
      <p className="mt-3 text-foreground/80">
        Questions about this policy: <a href="mailto:privacy@arabfinder.example" className="text-brand-teal hover:underline">privacy@arabfinder.example</a>.
      </p>
    </div>
  );
}
