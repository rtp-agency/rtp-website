"use client";

import { useEffect, useState } from "react";
import { ui, type Lang } from "@/lib/i18n";

// Floating contact pill at the bottom-center. Slides down out of view while the
// visitor scrolls down, slides back in when they scroll up. Hidden near the top
// (the hero already has its own CTAs).
export function StickyContact({ lang }: { lang: Lang }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 6) return; // ignore jitter
      const goingUp = y < lastY;
      setVisible(y > 600 && goingUp);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`/${lang}#contact`}
      className={`sticky-contact${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      {ui[lang].stickyCta} <span className="arrow">→</span>
    </a>
  );
}
