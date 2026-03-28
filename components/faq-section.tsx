"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { faqSection } from "@/constants/content";

export function FaqSection() {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id={faqSection.id}
      aria-labelledby="faq-heading"
      className="border-b border-zinc-200/80"
    >
      <div className="section-y mx-auto max-w-7xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <h2
            id="faq-heading"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600"
          >
            {faqSection.title}
          </h2>
          <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-zinc-950 sm:text-3xl sm:leading-snug">
            {faqSection.subtitle}
          </p>
        </header>

        <ul className="mx-auto mt-14 max-w-3xl divide-y divide-zinc-200/90">
          {faqSection.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-trigger-${index}`;

            return (
              <li key={item.question} className="py-2">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-start justify-between gap-4 py-4 text-left text-base font-semibold text-zinc-950 transition hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-lg"
                  >
                    <span className="pr-2">{item.question}</span>
                    <ChevronDown
                      aria-hidden
                      className={`mt-0.5 size-5 shrink-0 text-zinc-400 transition ${isOpen ? "rotate-180 text-indigo-600" : ""}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: reduceMotion ? 0 : -4 }}
                      transition={{
                        duration: reduceMotion ? 0.1 : 0.22,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <p className="pb-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
