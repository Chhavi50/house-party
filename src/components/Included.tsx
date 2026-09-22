"use client";

import { Cigarette, Gamepad2, Headphones, Martini, UtensilsCrossed, Wine } from "lucide-react";
import { FadeIn, SectionHeading } from "@/components/ui/Motion";

const items = [
  {
    icon: UtensilsCrossed,
    title: "UNLIMITED SNACKS",
    desc: "Veg & Non-Veg Available",
  },
  {
    icon: Martini,
    title: "SOFT DRINKS",
    desc: "Unlimited pours & mixers",
  },
  {
    icon: Headphones,
    title: "DJ MUSIC & DANCE",
    desc: "High energy all night",
  },
  {
    icon: Gamepad2,
    title: "GAMES",
    desc: "All night party energy",
  },
  {
    icon: Cigarette,
    title: "UNLIMITED HOOKAH",
    desc: "Lounge vibes",
  },
  {
    icon: Wine,
    title: "BYOB AVAILABLE",
    desc: "Bring your own booze",
  },
];

export function Included() {
  return (
    <section id="included" className="section-pad relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="THE PACKAGE"
            title="WHAT'S INCLUDED?"
            subtitle="EAT · DRINK · DANCE · REPEAT"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.07}>
                <article className="group relative h-full overflow-hidden rounded-sm border border-border bg-gradient-to-br from-[#1a070d] via-[#0d0508] to-black p-7 transition duration-300 hover:border-neon/50">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-neon/10 blur-2xl transition group-hover:bg-neon/25" />
                  <div className="relative">
                    <div className="mb-5 inline-flex rounded-sm bg-neon/10 p-3 text-neon ring-1 ring-neon/30">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-display text-2xl text-white">{item.title}</h3>
                    <p className="mt-2 text-muted">{item.desc}</p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-10 text-center">
          <p className="font-brush text-2xl text-white/80 md:text-3xl">
            GOOD FOOD. GREAT COMPANY.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
