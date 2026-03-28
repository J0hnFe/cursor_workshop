import Link from "next/link";
import { Mail } from "lucide-react";
import { BrandGithub, BrandLinkedin } from "@/components/brand-icons";
import { footer, nav } from "@/constants/content";

const footerIcons = {
  Linkedin: BrandLinkedin,
  Github: BrandGithub,
  Mail,
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div>
          <p className="text-sm font-semibold text-zinc-200">
            {footer.tagline}
          </p>
          <nav
            aria-label="Footer"
            className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm"
          >
            {nav.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <nav aria-label="Social profiles" className="flex items-center gap-2">
          {footer.socials.map((s) => {
            const Icon = footerIcons[s.icon];
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="flex size-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-zinc-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-zinc-900">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-zinc-600 sm:px-6 sm:text-left">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
