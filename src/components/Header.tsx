import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border-soft bg-brand-teal text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-teal-dark">
            AF
          </span>
          <span className="text-lg font-semibold tracking-tight">Arab Finder</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          <Link href="/counties" className="hover:text-brand-gold-light">
            Browse by county
          </Link>
          <Link href="/categories" className="hover:text-brand-gold-light">
            Categories
          </Link>
          <Link href="/about" className="hover:text-brand-gold-light">
            About
          </Link>
          <Link
            href="/submit-a-business"
            className="rounded-full bg-brand-gold px-4 py-2 font-medium text-brand-teal-dark hover:bg-brand-gold-light"
          >
            Suggest a business
          </Link>
        </nav>
      </div>
    </header>
  );
}
