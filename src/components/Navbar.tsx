"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { eventConfig } from "@/config/event";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#included", label: "What's Included" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-black/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <a href="#home" className="font-display text-lg tracking-[0.18em] text-white">
          HOUSE PARTY
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={eventConfig.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn rounded-sm px-5 py-2.5 text-sm font-semibold tracking-wide text-white"
          >
            BOOK YOUR SPOT
          </a>
        </nav>

        <button
          type="button"
          className="rounded-sm border border-border p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-black/95 px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={eventConfig.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="glow-btn mt-2 rounded-sm px-5 py-3 text-center text-sm font-semibold tracking-wide text-white"
            >
              BOOK YOUR SPOT · {eventConfig.currencySymbol}
              {eventConfig.price}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
