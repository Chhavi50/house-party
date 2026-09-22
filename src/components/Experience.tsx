"use client";

import { FadeIn, SectionHeading } from "@/components/ui/Motion";

const experiences = [
  {
    title: "DJ MUSIC",
    copy: "Bass, neon, and a soundtrack that owns the night.",
    image: "/gallery/dj-01.png",
  },
  {
    title: "DANCE",
    copy: "No stage fright. Just bodies moving under pink light.",
    image: "/gallery/dance-01.png",
  },
  {
    title: "GAMES",
    copy: "Competitive enough to get loud. Fun enough to forget time.",
    image: "/gallery/people-01.png",
  },
  {
    title: "UNLIMITED SNACKS",
    copy: "Fuel for long conversations and worse decisions.",
    image: "/gallery/food-01.png",
  },
  {
    title: "SOFT DRINKS",
    copy: "Unlimited pours. Stay hydrated. Stay reckless.",
    image: "/gallery/ambience-01.png",
  },
  {
    title: "HOOKAH",
    copy: "Slow clouds. Fast nights. Lounge energy all evening.",
    image: "/gallery/ambience-01.png",
  },
  {
    title: "VEG & NON-VEG",
    copy: "Everyone eats. Nobody misses out.",
    image: "/gallery/food-01.png",
  },
  {
    title: "NEW PEOPLE",
    copy: "Strangers today. Friends tomorrow.",
    image: "/gallery/people-01.png",
  },
  {
    title: "LATE NIGHT",
    copy: "House party atmosphere from 7 PM onwards.",
    image: "/gallery/party-01.png",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-pad relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="THE VIBE"
            title="ONE NIGHT. A LOT OF STORIES."
            subtitle="STRANGERS TODAY. FRIENDS TOMORROW."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((item, index) => (
            <FadeIn key={item.title} delay={(index % 3) * 0.06}>
              <article className="group relative min-h-[280px] overflow-hidden rounded-sm border border-border">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6">
                  <h3 className="font-display text-3xl text-white">{item.title}</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">{item.copy}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
