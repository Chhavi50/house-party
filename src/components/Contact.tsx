"use client";

import { Phone } from "lucide-react";
import { eventConfig } from "@/config/event";
import { FadeIn, SectionHeading } from "@/components/ui/Motion";

export function Contact() {
  return (
    <section id="contact" className="section-pad relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionHeading
            eyebrow="FOR BOOKINGS / QUERIES"
            title="QUESTIONS? LET'S TALK."
            subtitle="GOOD DRINKS. BETTER COMPANY."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {eventConfig.contactNumbers.map((contact, index) => (
            <FadeIn key={contact.phone} delay={index * 0.08}>
              <a
                href={`tel:${contact.phone}`}
                className="glass group flex h-full flex-col justify-between rounded-sm p-6 md:p-8 transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,45,106,0.25)]"
              >
                <div className="mb-6 inline-flex w-fit rounded-sm border border-border p-3 text-neon shadow-[0_0_12px_rgba(255,45,106,0.3)]">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.25em] text-muted uppercase">Call / WhatsApp</p>
                  <h3 className="mt-2 font-display text-3xl text-white">{contact.name}</h3>
                  <p className="mt-2 font-mono text-xl font-bold tracking-wider text-neon">
                    {contact.phone}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
