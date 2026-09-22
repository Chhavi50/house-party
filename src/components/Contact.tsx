"use client";

import { AtSign, Phone } from "lucide-react";
import { eventConfig } from "@/config/event";
import { FadeIn, SectionHeading } from "@/components/ui/Motion";

export function Contact() {
  return (
    <section id="contact" className="section-pad relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="BOOKING HELP"
            title="QUESTIONS? LET'S TALK."
            subtitle="GOOD DRINKS. BETTER COMPANY."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {eventConfig.contactNumbers.map((contact, index) => (
            <FadeIn key={contact.phone} delay={index * 0.08}>
              <a
                href={`tel:${contact.phone}`}
                className="glass group flex h-full flex-col justify-between rounded-sm p-6 transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,45,106,0.2)]"
              >
                <div className="mb-8 inline-flex w-fit rounded-sm border border-border p-3 text-neon">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.25em] text-muted uppercase">Call</p>
                  <h3 className="mt-2 font-display text-3xl text-white">{contact.name}</h3>
                  <p className="mt-2 text-lg text-neon">{contact.phone}</p>
                </div>
              </a>
            </FadeIn>
          ))}

          <FadeIn delay={0.16}>
            <a
              href={eventConfig.artistInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex h-full flex-col justify-between rounded-sm p-6 transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,45,106,0.2)]"
            >
              <div className="mb-8 inline-flex w-fit rounded-sm border border-border p-3 text-neon">
                <AtSign size={20} />
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] text-muted uppercase">Artist</p>
                <h3 className="mt-2 font-display text-3xl text-white">
                  {eventConfig.artist.toUpperCase()}
                </h3>
                <p className="mt-2 text-lg text-neon">{eventConfig.artistInstagram}</p>
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
