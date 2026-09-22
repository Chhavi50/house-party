"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";
import { FadeIn, SectionHeading } from "@/components/ui/Motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading eyebrow="BEFORE YOU BOOK" title="FAQ" />
        </FadeIn>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const open = openIndex === index;
            return (
              <FadeIn key={item.question} delay={index * 0.04}>
                <div className="glass overflow-hidden rounded-sm">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                  >
                    <span className="font-medium text-white">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        "shrink-0 text-neon transition",
                        open ? "rotate-180" : "",
                      )}
                      size={18}
                    />
                  </button>
                  {open ? (
                    <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted">
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
