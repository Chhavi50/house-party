"use client";

import { CalendarDays, Clock3, MapPin, Ticket } from "lucide-react";
import { eventConfig } from "@/config/event";
import { formatCurrency } from "@/lib/utils";
import { FadeIn, SectionHeading } from "@/components/ui/Motion";

const cards = [
  {
    icon: CalendarDays,
    label: "DATE",
    value: `${eventConfig.date} · ${eventConfig.day.toUpperCase()}`,
  },
  {
    icon: Clock3,
    label: "TIME",
    value: eventConfig.time.toUpperCase(),
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: eventConfig.location.toUpperCase(),
  },
  {
    icon: Ticket,
    label: "PRICE",
    value: `${formatCurrency(eventConfig.price)} / PERSON`,
  },
];

export function EventDetails() {
  return (
    <section id="details" className="section-pad relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="THE NIGHT"
            title="EVENT DETAILS"
            subtitle="SAME PEOPLE. DIFFERENT NIGHT."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.label} delay={index * 0.08}>
                <article className="group glass relative overflow-hidden rounded-sm p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,45,106,0.25)]">
                  <div className="mb-5 inline-flex rounded-sm border border-border bg-black/40 p-3 text-neon shadow-[0_0_18px_rgba(255,45,106,0.35)] transition group-hover:scale-105">
                    <Icon size={22} />
                  </div>
                  <p className="text-xs tracking-[0.25em] text-muted">{card.label}</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-white">
                    {card.value}
                  </h3>
                  {card.label === "LOCATION" ? (
                    <p className="mt-3 text-sm text-muted">{eventConfig.locationNote}</p>
                  ) : null}
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
