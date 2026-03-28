"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  LayoutTemplate,
  ServerCog,
  Users,
  type LucideIcon,
} from "lucide-react";
import { servicesSection } from "@/constants/content";

const serviceIcons: Record<(typeof servicesSection.items)[number]["icon"], LucideIcon> =
  {
    LayoutTemplate,
    ServerCog,
    Users,
  };

export function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const y = reduceMotion ? 0 : 14;

  return (
    <section
      id={servicesSection.id}
      aria-labelledby="services-title"
      className="border-b border-zinc-200/80"
    >
      <div className="section-y mx-auto max-w-7xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <h2
            id="services-title"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600"
          >
            {servicesSection.title}
          </h2>
          <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-zinc-950 sm:text-3xl sm:leading-snug">
            {servicesSection.subtitle}
          </p>
        </header>

        <ul className="mt-16 space-y-12 md:grid md:grid-cols-3 md:gap-10 md:space-y-0">
          {servicesSection.items.map((item, index) => {
            const Icon = serviceIcons[item.icon];
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0.12 : 0.42,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="md:border-t md:border-zinc-200/90 md:pt-10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <Icon className="size-[1.125rem]" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-zinc-600 sm:text-[0.9375rem]">
                  {item.description}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
