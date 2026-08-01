"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

type Intro = { eyebrow: string; heading: string };

// A self-contained pinned section: it pins for its own scroll length while a
// column of cards scrolls up 1:1 with the page, the centred card in focus.
// Used on its own for "cases" and "other work". SSR / reduced-motion render the
// plain static grid passed as `fallback`.
export function CardScrolly({
  id,
  intro,
  cards,
  fallback,
}: {
  id?: string;
  intro: Intro;
  cards: ReactNode; // a set of .vsc-card elements
  fallback: ReactNode;
}) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);
  const live = mounted && !reduce;

  useEffect(() => {
    if (!live) return;
    const root = rootRef.current;
    if (!root) return;
    const col = root.querySelector<HTMLElement>(".vsc-col");
    const viewport = root.querySelector<HTMLElement>(".vsc-viewport");
    if (!col || !viewport) return;
    const items = Array.from(col.querySelectorAll<HTMLElement>(".vsc-card"));
    if (!items.length) return;
    const MULT = 1.35; // scroll length per px of travel (higher = slower/longer)
    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

    // measured once (and on resize) so the scroll loop never reads per-card
    let vpH = 0;
    let mids: number[] = [];
    let travel = 0;
    const measure = () => {
      vpH = viewport.clientHeight;
      mids = items.map((c) => c.offsetTop + c.offsetHeight / 2);
      travel = Math.max(1, mids[mids.length - 1] - mids[0]);
      root.style.height = `${window.innerHeight + travel * MULT}px`;
    };
    measure();

    let ticking = false;
    const update = () => {
      ticking = false;
      const total = root.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = clamp(-root.getBoundingClientRect().top / total);
      // focus point a bit above the viewport centre so the card reads higher on
      // screen, but with clear space below the header (no crowding)
      const focus = vpH * 0.34;
      const y0 = focus - mids[0];
      const y1 = focus - mids[mids.length - 1];
      const ty = y0 + p * (y1 - y0);
      col.style.transform = `translateY(${ty}px)`;
      const half = vpH / 2;
      items.forEach((card, i) => {
        const d = Math.abs(mids[i] + ty - focus) / half;
        const k = clamp(1 - d);
        card.style.opacity = String(0.3 + 0.7 * k);
        card.style.transform = `scale(${0.955 + 0.045 * k})`;
        card.classList.toggle("is-focus", k > 0.72);
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    const onResize = () => {
      measure();
      update();
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      root.style.height = "";
    };
  }, [live]);

  if (!live) {
    return (
      <section id={id} className="section-line container-read">
        <div className="section-header">
          <div className="eyebrow">{intro.eyebrow}</div>
          <h2>{intro.heading}</h2>
        </div>
        {fallback}
      </section>
    );
  }

  return (
    <section id={id} ref={rootRef} className="vsc">
      <div className="vsc-stage">
        <div className="vsc-inner">
          <div className="section-header vsc-head">
            <div className="eyebrow">{intro.eyebrow}</div>
            <h2>{intro.heading}</h2>
          </div>
          <div className="vsc-viewport">
            <div className="vsc-col">{cards}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
