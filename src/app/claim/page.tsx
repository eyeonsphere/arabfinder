import type { Metadata } from "next";

export const metadata: Metadata = { title: "Claim a listing" };

export default function ClaimPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-brand-teal-dark">Claim your listing</h1>
      <p className="mt-3 text-foreground/70">
        Claiming your business lets you set your own ownership self-identification, hours, contact details, and
        photos. It requires at least two matching verification factors — this keeps the "Arab-owned" and
        "claimed & verified" badges meaningful.
      </p>

      <ol className="mt-8 space-y-4">
        {[
          { title: "Find your listing", body: "Search by city and category, or tell us the business name below." },
          { title: "Verify by email", body: "We send a link to an email address at the business's own domain, matching the listed website." },
          { title: "Verify by phone", body: "We send a one-time code by SMS or automated voice call to the listed phone number — only after you request it, never unsolicited." },
          { title: "Or verify by mail", body: "No phone or domain email on file? We can mail a postcard with a 6-digit PIN to the business address." },
          { title: "Two factors confirm your claim", body: "Once two matching factors are verified, your listing status changes to \"claimed & verified\" and you can edit it directly." },
        ].map((step, i) => (
          <li key={step.title} className="flex gap-4 rounded-xl border border-border-soft bg-white p-5">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-teal text-sm font-semibold text-white">
              {i + 1}
            </span>
            <div>
              <p className="font-medium text-foreground">{step.title}</p>
              <p className="mt-1 text-sm text-foreground/60">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <form
        name="claim-request"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thanks"
        className="mt-10 space-y-4 rounded-xl border border-border-soft bg-white p-6"
      >
        <input type="hidden" name="form-name" value="claim-request" />
        <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

        <p className="font-medium text-foreground">Start a claim</p>
        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="claim-business">Business name &amp; city</label>
          <input id="claim-business" name="business" required className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="claim-role">Your role at the business</label>
          <input id="claim-role" name="role" placeholder="e.g. Owner, Office manager" required className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="claim-email">Your email</label>
          <input id="claim-email" type="email" name="email" required className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded-full bg-brand-teal px-5 py-2 text-sm font-medium text-white hover:bg-brand-teal-dark">
          Start claim
        </button>
      </form>
    </div>
  );
}
