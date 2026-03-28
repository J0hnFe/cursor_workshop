"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioSection } from "@/constants/content";

export function PortfolioSection() {
  const reduceMotion = useReducedMotion();
  const y = reduceMotion ? 0 : 14;

  return (
    <section
      id={portfolioSection.id}
      aria-labelledby="portfolio-title"
      className="border-b border-zinc-200/80"
    >
      <div className="section-y mx-auto max-w-7xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <h2
            id="portfolio-title"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600"
          >
            {portfolioSection.title}
          </h2>
          <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-zinc-950 sm:text-3xl sm:leading-snug">
            {portfolioSection.subtitle}
          </p>
        </header>

        <ul className="mt-14 divide-y divide-zinc-200/90">
          {portfolioSection.items.map((project, index) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0.12 : 0.4,
                delay: reduceMotion ? 0 : index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-6 py-10 transition first:pt-2 sm:grid-cols-12 sm:items-start sm:gap-4 sm:py-12"
              >
                <span className="text-sm tabular-nums text-zinc-400 sm:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="sm:col-span-6">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950 transition group-hover:text-indigo-600 sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                    {project.description}
                  </p>
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 sm:col-span-3 sm:pt-1">
                  {project.stack}
                </p>
                <div className="flex items-center gap-1 text-sm font-semibold text-indigo-600 sm:col-span-2 sm:justify-end sm:pt-1">
                  {portfolioSection.viewLabel}
                  <ArrowUpRight
                    className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
