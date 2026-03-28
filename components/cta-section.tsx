"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { finalCta } from "@/constants/content";

export function CtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="cta-heading"
      className="border-t border-zinc-800 bg-zinc-950 text-zinc-50"
    >
      <div className="section-y mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2
            id="cta-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {finalCta.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            {finalCta.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.a
              href={finalCta.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
            >
              {finalCta.primaryCta.label}
              <ArrowUpRight className="size-4" aria-hidden />
            </motion.a>
            <a
              href={finalCta.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-7 py-3.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              {finalCta.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
