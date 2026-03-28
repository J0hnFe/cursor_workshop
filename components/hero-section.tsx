"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { hero, site } from "@/constants/content";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const y = reduceMotion ? 0 : 22;

  return (
    <section
      id="top"
      className="relative isolate grid min-h-[calc(100svh-var(--header-h))] w-full max-w-[100vw] grid-cols-1 lg:grid-cols-12"
    >
      <div className="relative z-10 flex flex-col justify-center bg-zinc-50 px-4 py-16 sm:px-6 lg:col-span-5 lg:bg-transparent lg:px-10 lg:py-20 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0.15 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            {site.brandName}
            <span className="font-normal text-zinc-400">
              {" "}
              · {site.brandDescriptor}
            </span>
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-zinc-950 sm:text-4xl sm:leading-[1.08] lg:text-[2.75rem]">
            {hero.titleLead}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
              {hero.titleGradient}
            </span>
            {hero.titleTrail}
          </h1>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <motion.a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {hero.primaryCta.label}
              <ArrowUpRight className="size-4 opacity-90" aria-hidden />
            </motion.a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-zinc-300/90 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative min-h-[38vh] lg:col-span-7 lg:min-h-[calc(100svh-var(--header-h))]">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-50/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-zinc-50 lg:via-zinc-50/35 lg:to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 mix-blend-multiply lg:opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(79,70,229,0.12), transparent 65%)",
          }}
        />
      </div>
    </section>
  );
}
