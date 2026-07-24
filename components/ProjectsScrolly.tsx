"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

type Intro = { eyebrow: string; heading: string };

// Pinned vertical card column: the section pins, the column of cards scrolls
// up 1:1 with the page, the centred card in focus. SSR / reduced-motion fall
// back to a plain static grid.
export function ProjectsScrolly({
  items,
  intro,
}: {
  items: { title: string; body: string }[];
  intro: Intro;
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
    const cards = Array.from(col.querySelectorAll<HTMLElement>(".vsc-card"));
    if (!cards.length) return;
    const MULT = 1.4; // scroll length per px of travel (higher = slower/longer)
    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

    const ends = () => {
      const first = cards[0];
      const last = cards[cards.length - 1];
      const vpH = viewport.clientHeight;
      const y0 = vpH / 2 - (first.offsetTop + first.offsetHeight / 2);
      const y1 = vpH / 2 - (last.offsetTop + last.offsetHeight / 2);
      return { y0, y1, travel: Math.max(1, y0 - y1) };
    };
    const measure = () => {
      root.style.height = `${window.innerHeight + ends().travel * MULT}px`;
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      const total = root.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = clamp(-root.getBoundingClientRect().top / total);
      const { y0, y1 } = ends();
      col.style.transform = `translateY(${y0 + p * (y1 - y0)}px)`;

      const vp = viewport.getBoundingClientRect();
      const center = vp.top + vp.height / 2;
      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - center) / (vp.height / 2);
        const k = clamp(1 - d);
        card.style.opacity = String(0.32 + 0.68 * k);
        card.style.transform = `scale(${0.95 + 0.05 * k})`;
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
    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      root.style.height = "";
    };
  }, [live, items.length]);

  if (!live) {
    return (
      <div className="container-read">
        <div className="section-header">
          <div className="eyebrow">{intro.eyebrow}</div>
          <h2>{intro.heading}</h2>
        </div>
        <div className="additional-grid reading-col">
          {items.map((a) => (
            <div className="additional-item" key={a.title}>
              <h4>{a.title}</h4>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="vsc"
      style={{ "--n": items.length } as CSSProperties}
    >
      <div className="vsc-stage">
        <div className="cs-glow" aria-hidden="true" />
        <div className="cs-grid" aria-hidden="true" />
        <div className="vsc-inner">
          <div className="section-header vsc-head">
            <div className="eyebrow">{intro.eyebrow}</div>
            <h2>{intro.heading}</h2>
          </div>
          <div className="vsc-viewport">
            <div className="vsc-col">
              {items.map((a, i) => (
                <article className="vsc-card" key={a.title}>
                  <span className="vsc-cardglow" aria-hidden="true" />
                  <div className="vsc-num">
                    Проект {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4>{a.title}</h4>
                  <p>{a.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
