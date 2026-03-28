import { about } from "@/constants/content";

export function AboutSection() {
  return (
    <section
      id={about.id}
      aria-labelledby="about-title"
      className="border-b border-zinc-200/80"
    >
      <div className="section-y mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 md:items-start">
          <div className="md:col-span-5">
            <h2
              id="about-title"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600"
            >
              {about.title}
            </h2>
            <p className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-zinc-950 sm:text-3xl sm:leading-snug">
              {about.lead}
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-zinc-600 md:col-span-6 md:col-start-7">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
