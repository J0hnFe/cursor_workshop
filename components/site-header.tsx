import Link from "next/link";
import { nav } from "@/constants/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/65 sm:h-[4.25rem]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="#top"
          className="text-[0.9375rem] font-semibold tracking-tight text-zinc-950 transition-colors hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
        >
          {nav.displayName}
        </Link>

        <nav
          aria-label="Page sections"
          className="hidden items-center gap-7 text-sm font-medium text-zinc-600 lg:flex"
        >
          {nav.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={nav.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {nav.ctaLabel}
        </a>
      </div>
    </header>
  );
}
