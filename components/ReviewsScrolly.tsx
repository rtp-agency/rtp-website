"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import type { Testimonial } from "@/lib/site";

type Intro = { eyebrow: string; heading: string };

function Author({ t }: { t: Testimonial }) {
  return (
    <div className="testimonial-author">
      <div className="testimonial-avatar">{t.avatar}</div>
      <div className="testimonial-author-info">
        <span className="testimonial-author-name">
          {t.link ? (
            <a
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="testimonial-author-link"
            >
              {t.name}
            </a>
          ) : (
            t.name
          )}
        </span>
        <span className="testimonial-author-title">{t.title}</span>
      </div>
    </div>
  );
}

// Pinned horizontal card row: the section pins, the row of review cards scrolls
// left 1:1 with the page, the centred card in focus. SSR / reduced-motion fall
// back to a plain static grid.
export function ReviewsScrolly({
  items,
  intro,
}: {
  items: Testimonial[];
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
    const row = root.querySelector<HTMLElement>(".hsc-row");
    const viewport = root.querySelector<HTMLElement>(".hsc-viewport");
    if (!row || !viewport) return;
    const cards = Array.from(row.querySelectorAll<HTMLElement>(".hsc-card"));
    if (!cards.length) return;
    const MULT = 1.2;
    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

    const ends = () => {
      const first = cards[0];
      const last = cards[cards.length - 1];
      const vpW = viewport.clientWidth;
      const x0 = vpW / 2 - (first.offsetLeft + first.offsetWidth / 2);
      const x1 = vpW / 2 - (last.offsetLeft + last.offsetWidth / 2);
      return { x0, x1, travel: Math.max(1, x0 - x1) };
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
      const { x0, x1 } = ends();
      row.style.transform = `translateX(${x0 + p * (x1 - x0)}px)`;

      const vp = viewport.getBoundingClientRect();
      const center = vp.left + vp.width / 2;
      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - center) / (vp.width / 2);
        const k = clamp(1 - d);
        card.style.opacity = String(0.4 + 0.6 * k);
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
        <div className="testimonials-grid reading-col">
          {items.map((t) => (
            <div className="testimonial" key={t.name}>
              <p className="testimonial-quote">{t.quote}</p>
              <Author t={t} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="hsc"
      style={{ "--n": items.length } as CSSProperties}
    >
      <div className="hsc-stage">
        <div className="cs-glow" aria-hidden="true" />
        <div className="cs-grid" aria-hidden="true" />
        <div className="hsc-inner">
          <div className="section-header hsc-head">
            <div className="eyebrow">{intro.eyebrow}</div>
            <h2>{intro.heading}</h2>
          </div>
          <div className="hsc-viewport">
            <div className="hsc-row">
              {items.map((t) => (
                <figure className="hsc-card" key={t.name}>
                  <span className="vsc-cardglow" aria-hidden="true" />
                  <p className="hsc-quote">«{t.quote}»</p>
                  <Author t={t} />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
