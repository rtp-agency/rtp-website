"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ui } from "@/lib/i18n";

const BRAND = "RTP Agency";

declare global {
  interface Window {
    __rtpIntroActive?: boolean;
    __rtpIntroDone?: boolean;
  }
}

// Terminal-style bar: on reveal it wipes open from a thin vertical line, types
// the brand like a command line, then the nav items slide in. On scroll it
// collapses back (items tuck away) but keeps the already-typed brand.
export function Nav({ variant = "home" }: { variant?: "home" | "case" }) {
  const t = ui.nav;
  const [stage, setStage] = useState<"line" | "wide" | "done">("line");
  const [typed, setTyped] = useState("");
  const [compact, setCompact] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    let typeTimer: ReturnType<typeof setTimeout> | undefined;
    let charTimer: ReturnType<typeof setInterval> | undefined;
    const begin = () => {
      if (started.current) return;
      started.current = true;
      setStage("wide");
      typeTimer = setTimeout(() => {
        let i = 0;
        charTimer = setInterval(() => {
          i += 1;
          setTyped(BRAND.slice(0, i));
          if (i >= BRAND.length) {
            clearInterval(charTimer);
            setStage("done");
          }
        }, 70);
      }, 560);
    };

    let cleanup = () => {};
    if (
      typeof window !== "undefined" &&
      window.__rtpIntroActive &&
      !window.__rtpIntroDone
    ) {
      window.addEventListener("rtp-intro-done", begin, { once: true });
      cleanup = () => window.removeEventListener("rtp-intro-done", begin);
    } else {
      const id = setTimeout(begin, 300);
      cleanup = () => clearTimeout(id);
    }
    return () => {
      cleanup();
      clearTimeout(typeTimer);
      clearInterval(charTimer);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 90);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.services },
    { href: "#work", label: t.work },
    { href: "#testimonials", label: t.testimonials },
    { href: "#contact", label: t.contact },
  ];

  return (
    <nav>
      <div className={`term-bar${compact ? " is-compact" : ""}`} data-stage={stage}>
        <Link href="/" className="term-logo">
          <span className="term-prompt">$</span>
          <span className="term-brand">
            {variant === "home" ? typed : BRAND}
          </span>
          <span className="term-caret" aria-hidden="true" />
        </Link>

        {variant === "home" ? (
          <ul className="term-links">
            {links.map((l, i) => (
              <li key={l.href} style={{ "--i": i } as CSSProperties}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        ) : (
          <Link href="/#work" className="term-back">
            {t.back}
          </Link>
        )}
      </div>
    </nav>
  );
}
