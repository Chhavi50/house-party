"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { FadeIn, SectionHeading } from "@/components/ui/Motion";

export function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [activeId, setActiveId] = useState<string | null>(null);

  const items = useMemo(() => {
    if (filter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  const active = galleryItems.find((item) => item.id === activeId) ?? null;

  return (
    <section id="gallery" className="section-pad relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="FLASHES"
            title="PARTY GALLERY"
            subtitle="IT'S GONNA BE LIT"
          />
        </FadeIn>

        <FadeIn className="mt-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-sm border px-3 py-2 text-xs tracking-[0.16em] uppercase transition",
                filter === category
                  ? "border-neon bg-neon/15 text-white"
                  : "border-border text-muted hover:border-neon/40 hover:text-white",
              )}
            >
              {category}
            </button>
          ))}
        </FadeIn>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item, index) => (
            <FadeIn key={item.id} delay={(index % 6) * 0.04} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActiveId(item.id)}
                className={cn(
                  "group relative block w-full overflow-hidden rounded-sm border border-border",
                  item.span === "tall" ? "min-h-[360px]" : "min-h-[240px]",
                  item.span === "wide" ? "min-h-[280px]" : "",
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 text-left">
                  <p className="text-[10px] tracking-[0.25em] text-neon uppercase">
                    {item.category}
                  </p>
                  <p className="mt-1 text-sm text-white">{item.alt}</p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveId(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-sm border border-border p-2 text-white"
            aria-label="Close lightbox"
            onClick={() => setActiveId(null)}
          >
            <X size={20} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[85vh] max-w-5xl rounded-sm border border-border object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
