import type { Metadata } from "next";
import { categories } from "@/lib/categories";
import { cities } from "@/lib/geo";

export const metadata: Metadata = { title: "Suggest a business" };

export default function SubmitBusinessPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold text-brand-teal-dark">Suggest a business</h1>
      <p className="mt-3 text-foreground/70">
        Know a business, mosque, church, or community organization that should be listed? Tell us below. Every
        suggestion goes to a manual moderation queue before it publishes — nothing you submit goes live
        automatically.
      </p>
      <p className="mt-3 rounded-lg border border-border-soft bg-white p-4 text-sm text-foreground/60">
        Note: this form doesn't ask whether the business is Arab-owned. That's intentional — ownership can only be
        recorded once the business itself claims its listing and states it directly. Suggested listings always start
        as "not stated."
      </p>

      <form
        name="business-suggestion"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thanks"
        className="mt-8 space-y-4 rounded-xl border border-border-soft bg-white p-6"
      >
        <input type="hidden" name="form-name" value="business-suggestion" />
        <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="biz-name">Business name</label>
          <input id="biz-name" name="business_name" required className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-foreground" htmlFor="biz-category">Category</label>
            <select id="biz-category" name="category" required className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm">
              {categories.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground" htmlFor="biz-city">City</label>
            <select id="biz-city" name="city" required className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm">
              {cities.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="biz-address">Address or service area</label>
          <input id="biz-address" name="address" className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="biz-website">Website or phone (helps us verify)</label>
          <input id="biz-website" name="contact" className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="biz-notes">Anything else?</label>
          <textarea id="biz-notes" name="notes" rows={3} className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="biz-your-email">Your email (optional, in case we have questions)</label>
          <input id="biz-your-email" type="email" name="submitter_email" className="mt-1 w-full rounded-md border border-border-soft px-3 py-2 text-sm" />
        </div>

        <button type="submit" className="rounded-full bg-brand-teal px-5 py-2 text-sm font-medium text-white hover:bg-brand-teal-dark">
          Submit suggestion
        </button>
      </form>
    </div>
  );
}
