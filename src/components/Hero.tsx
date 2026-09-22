"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { eventConfig } from "@/config/event";
import { formatCurrency } from "@/lib/utils";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="grain relative flex min-h-[100svh] items-end overflow-hidden pb-24 pt-28 md:items-center md:pb-16"
    >
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url(${eventConfig.heroImage})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,45,106,0.28),_transparent_45%),linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(5,5,5,0.72)_45%,rgba(5,5,5,0.96)_100%)]" />
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-neon/30 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-deep-red/40 blur-[120px]" />

      {!reduce ? (
        <>
          <motion.div
            className="pointer-events-none absolute left-[12%] top-[28%] h-2 w-2 rounded-full bg-neon"
            animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute right-[18%] top-[36%] h-3 w-3 rounded-full bg-hot/80"
            animate={{ y: [0, 22, 0], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : null}

      <div className="section-pad relative z-10 mx-auto w-full max-w-7xl">
        <motion.p
          className="mb-4 text-xs tracking-[0.35em] text-neon uppercase md:text-sm"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eventConfig.location} · {eventConfig.day.toUpperCase()}
        </motion.p>

        <motion.h1
          className="font-display max-w-4xl text-5xl leading-[0.9] text-white sm:text-7xl md:text-8xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          OUR FIRST
          <br />
          <span className="neon-text text-neon">HOUSE PARTY</span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl font-brush text-3xl text-white/90 md:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {eventConfig.tagline}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm tracking-[0.18em] text-muted uppercase md:text-base"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span>{eventConfig.location.toUpperCase()}</span>
          <span className="text-neon">•</span>
          <span>
            {eventConfig.date} · {eventConfig.day.toUpperCase()}
          </span>
          <span className="text-neon">•</span>
          <span>{eventConfig.time.toUpperCase()}</span>
          <span className="text-neon">•</span>
          <span className="text-white">
            {formatCurrency(eventConfig.price)} / PERSON
          </span>
          <span className="text-neon">•</span>
          <span className="rounded-full border border-neon/40 bg-neon/10 px-2.5 py-0.5 text-xs font-bold text-neon">
            BYOB AVAILABLE
          </span>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={eventConfig.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn inline-flex items-center justify-center rounded-sm px-8 py-4 text-sm font-semibold tracking-[0.16em] text-white"
          >
            BOOK YOUR SPOT
          </a>
          <a
            href="#included"
            className="inline-flex items-center justify-center rounded-sm border border-border bg-black/40 px-8 py-4 text-sm font-semibold tracking-[0.16em] text-white backdrop-blur-md transition hover:border-neon/60"
          >
            SEE WHAT&apos;S INCLUDED
          </a>
        </motion.div>
      </div>

      <a
        href="#details"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] tracking-[0.3em] text-muted uppercase"
        aria-label="Scroll to event details"
      >
        <span>Scroll</span>
        <ChevronDown className="animate-bounce text-neon" size={18} />
      </a>
    </section>
  );
}
