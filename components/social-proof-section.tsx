import { socialProof } from "@/constants/content";

export function SocialProofSection() {
  return (
    <section
      aria-labelledby="proof-title"
      className="border-y border-zinc-200/90 bg-zinc-100/40"
    >
      <div className="section-y mx-auto max-w-7xl px-4 sm:px-6">
        <p
          id="proof-title"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500"
        >
          Social proof
        </p>
        <h2 className="mt-3 max-w-xl text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
          {socialProof.title}
        </h2>

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:items-stretch lg:gap-16">
          <figure className="lg:col-span-6 xl:col-span-7">
            <blockquote className="text-lg font-medium leading-relaxed text-zinc-800 sm:text-xl">
              “{socialProof.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm leading-relaxed text-zinc-600">
              <span className="font-semibold text-zinc-900">
                {socialProof.attribution}
              </span>
              <span className="mx-1.5 text-zinc-300">—</span>
              {socialProof.role}
              <span className="mx-1.5 text-zinc-300">·</span>
              {socialProof.company}
            </figcaption>
          </figure>

          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-0 lg:col-span-6 xl:col-span-5">
            {socialProof.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex-1 ${i > 0 ? "sm:pl-10 sm:border-l sm:border-zinc-200/90" : ""}`}
              >
                <p className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-[12rem] text-sm leading-relaxed text-zinc-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
