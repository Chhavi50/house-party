"use client";

import { useEffect, useState } from "react";
import { eventConfig } from "@/config/event";
import { formatCurrency } from "@/lib/utils";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroBottom = window.innerHeight * 0.7;
      setVisible(window.scrollY > heroBottom);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-black/90 p-3 backdrop-blur-xl md:hidden">
      <a
        href={eventConfig.googleFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="glow-btn flex w-full items-center justify-center rounded-sm px-4 py-3.5 text-sm font-semibold tracking-[0.14em] text-white"
      >
        BOOK YOUR SPOT · {formatCurrency(eventConfig.price)}
      </a>
    </div>
  );
}
