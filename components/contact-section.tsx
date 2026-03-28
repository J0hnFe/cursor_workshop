import { ArrowUpRight } from "lucide-react";
import { contactEmail, contactSection } from "@/constants/content";

export function ContactSection() {
  return (
    <section
      id={contactSection.id}
      aria-labelledby="contact-heading"
      className="border-b border-zinc-200/80 bg-white"
    >
      <div className="section-y mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-5">
            <h2
              id="contact-heading"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600"
            >
              {contactSection.title}
            </h2>
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-zinc-950 sm:text-3xl sm:leading-snug">
              {contactSection.lead}
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-600">
              {contactSection.body}
            </p>
          </div>

          <div className="space-y-10 lg:col-span-6 lg:col-start-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {contactSection.emailLabel}
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:text-indigo-600 hover:decoration-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {contactEmail}
                <ArrowUpRight className="size-4 text-indigo-600" aria-hidden />
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Response time
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-600">
                {contactSection.availabilityNote}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex w-fit items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {contactSection.primaryLinkLabel}
              </a>
              <a
                href={contactSection.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition hover:text-indigo-600"
              >
                {contactSection.secondaryLinkLabel}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
