import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border-soft bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-foreground/70 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-foreground">Arab Finder</p>
            <p className="mt-2 max-w-xs">
              A web-first index for Arabic-speaking communities in Southern California. Ownership and identity are
              never assumed — only what a business tells us, itself, in its own words.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Directory</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/counties" className="hover:underline">Browse by county</Link></li>
              <li><Link href="/categories" className="hover:underline">Categories</Link></li>
              <li><Link href="/submit-a-business" className="hover:underline">Suggest a business</Link></li>
              <li><Link href="/claim" className="hover:underline">Claim a listing</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground">Policies</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/about" className="hover:underline">About &amp; how listings work</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/privacy#your-privacy-choices" className="hover:underline">Your Privacy Choices</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-border-soft pt-6 text-xs text-foreground/50">
          © {new Date().getFullYear()} Arab Finder. Listings marked "not stated" carry no claim about the owner's
          background. Reviews, when enabled, are sorted neutrally and are never edited or removed except for legal
          takedowns.
        </p>
      </div>
    </footer>
  );
}
