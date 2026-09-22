"use client";

import { ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { eventConfig } from "@/config/event";
import { formatCurrency } from "@/lib/utils";
import { FadeIn, SectionHeading } from "@/components/ui/Motion";

const perks = [
  "Unlimited Snacks (Veg & Non-Veg Available)",
  "Unlimited Soft Drinks & Mixers",
  "DJ Music & Dance Floor",
  "Late-Night Party Games",
  "Unlimited Hookah Lounge",
  "BYOB Available",
];

export function BookingSection() {
  return (
    <section
      id="register"
      className="section-pad relative scroll-mt-24 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-64 max-w-3xl rounded-full bg-neon/10 blur-[100px]" />
      
      <div className="relative mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading
            eyebrow="RSVP"
            title="BOOK YOUR SPOT"
            subtitle="GOOD PEOPLE. BAD DECISIONS."
          />
        </FadeIn>

        <FadeIn className="mt-10">
          <div className="glass relative overflow-hidden rounded-sm p-6 md:p-10">
            {/* Ambient corner glow */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-neon/20 blur-3xl" />

            {/* Ticket Header & Pricing */}
            <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-8 sm:flex-row sm:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-xs tracking-wider text-neon uppercase">
                  <Sparkles size={13} />
                  <span>Official Registration</span>
                </div>
                <h3 className="mt-3 font-display text-3xl text-white md:text-4xl">
                  {eventConfig.eventName.toUpperCase()}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {eventConfig.location} ({eventConfig.locationNote}) · {eventConfig.day} · {eventConfig.time}
                </p>
              </div>

              <div className="rounded-sm border border-neon/30 bg-black/50 p-4 text-left sm:text-right">
                <p className="text-xs tracking-[0.2em] text-muted uppercase">Price per pass</p>
                <p className="mt-1 font-display text-4xl text-neon">
                  {formatCurrency(eventConfig.price)}
                </p>
                <p className="text-[11px] text-muted">Per person · All inclusive</p>
              </div>
            </div>

            {/* Inclusions summary */}
            <div className="my-8 space-y-3">
              <p className="text-xs tracking-[0.2em] text-neon uppercase font-semibold">
                What&apos;s Included In Your Pass:
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2.5 text-sm text-white/90">
                    <CheckCircle2 size={16} className="shrink-0 text-neon" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Process Note */}
            <div className="mb-8 rounded-sm border border-border/80 bg-black/40 p-4 text-xs text-muted">
              <p className="font-semibold text-white uppercase tracking-wider mb-1">
                How It Works:
              </p>
              <p className="leading-relaxed">
                Clicking <strong className="text-white">&quot;BOOK YOUR SPOT&quot;</strong> opens our official Google Form in a new tab. You will select your guest count, food preference, complete the UPI payment, and upload your screenshot directly in the form.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-col items-center gap-3 text-center">
              <a
                href={eventConfig.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn flex w-full items-center justify-center gap-2 rounded-sm px-8 py-4 text-base font-semibold tracking-[0.16em] text-white transition hover:scale-[1.01] sm:w-auto sm:min-w-[280px]"
              >
                <span>BOOK YOUR SPOT</span>
                <ExternalLink size={18} />
              </a>

              <p className="text-[11px] text-muted/80">
                Secure checkout via Google Form · UPI QR &amp; details included inside
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
