"use client";

import { AtSign } from "lucide-react";
import { eventConfig } from "@/config/event";
import { FadeIn, SectionHeading } from "@/components/ui/Motion";

export function Artist() {
  return (
    <section id="artist" className="section-pad relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="LIVE ENERGY"
            title="THE SOUNDTRACK OF THE NIGHT"
          />
        </FadeIn>

        <FadeIn className="mt-12">
          <div className="relative overflow-hidden rounded-sm border border-border bg-[radial-gradient(circle_at_20%_20%,rgba(255,45,106,0.25),transparent_40%),linear-gradient(135deg,#14060b,#050505_60%)] p-8 md:p-12">
            <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-hot/20 blur-[90px]" />
            <div className="grid items-center gap-10 md:grid-cols-[220px_1fr]">
              <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-sm border border-neon/40 bg-black/60 shadow-[0_0_25px_rgba(255,45,106,0.25)]">
                <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(255,45,106,0.3),transparent_70%),linear-gradient(160deg,#2a0812,#0a0406)] p-6 text-center">
                  <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full border border-neon/50 bg-neon/10 text-neon shadow-[0_0_15px_rgba(255,45,106,0.4)] font-display text-2xl">
                    {eventConfig.artist.charAt(0)}
                  </div>
                  <p className="mt-2 text-[10px] tracking-[0.3em] text-neon uppercase">ARTIST SPOTLIGHT</p>
                  <p className="mt-1 text-xs text-muted/80">Photo coming soon</p>
                </div>
              </div>

              <div>
                <p className="text-xs tracking-[0.28em] text-neon uppercase">Featured Artist</p>
                <h3 className="mt-3 font-display text-5xl text-white md:text-6xl">
                  {eventConfig.artist.toUpperCase()}
                </h3>
                <p className="mt-4 max-w-xl text-muted">
                  Setting the mood for Chandigarh&apos;s first house party night — neon lights,
                  loud speakers, and a crowd that came to stay till late.
                </p>
                <a
                  href={eventConfig.artistInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-sm border border-border bg-black/40 px-5 py-3 text-sm tracking-wide text-white transition hover:border-neon/50"
                >
                  <AtSign size={18} className="text-neon" />
                  {eventConfig.artistInstagram}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
