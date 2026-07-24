"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import type { WorkItem } from "@/lib/site";
import { ui } from "@/lib/i18n";

type Intro = { eyebrow: string; heading: string; sub: string };

// staggered reveal window per element role: [start, end, dx, dy]
const ROLE: Record<string, [number, number, number, number]> = {
  tag: [0.06, 0.32, -30, 0],
  metric: [0.12, 0.46, 0, 52],
  sub: [0.18, 0.5, 0, 34],
  title: [0.24, 0.56, 0, 36],
  desc: [0.32, 0.64, 0, 42],
  tech: [0.44, 0.8, 0, 44],
};

export function CasesScrolly({
  items,
  intro,
}: {
  items: WorkItem[];
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
    const el = root;
    const introEl = el.querySelector<HTMLElement>(".cs-intro");
    const glow = el.querySelector<HTMLElement>(".cs-glow");
    const caseEls = Array.from(el.querySelectorAll<HTMLElement>(".cs-case"));
    const dots = Array.from(el.querySelectorAll<HTMLElement>(".cs-dot"));
    if (!introEl || !glow) return;

    const N = caseEls.length;
    const SEG = 1 / (N + 1);
    const roles = caseEls.map((c) =>
      Array.from(c.querySelectorAll<HTMLElement>("[data-role]"))
    );
    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
    const smooth = (t: number) => {
      t = clamp(t);
      return t * t * (3 - 2 * t);
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = clamp(-el.getBoundingClientRect().top / total);

      const introLp = clamp(p / SEG);
      const out = smooth((introLp - 0.5) / 0.5);
      introEl.style.opacity = String(1 - out);
      introEl.style.transform = `translateY(${-80 * out}px)`;

      let active = 0;
      caseEls.forEach((card, i) => {
        const segStart = SEG * (i + 1);
        const lpRaw = (p - segStart) / SEG;
        const lp = clamp(lpRaw);
        const fadeIn = smooth((lpRaw + 0.1) / 0.34);
        const fadeOut = 1 - smooth((lpRaw - 1.0) / 0.3);
        const cardO = clamp(Math.min(fadeIn, fadeOut));
        card.style.opacity = String(cardO);
        card.style.pointerEvents = cardO > 0.6 ? "auto" : "none";
        if (lpRaw >= -0.05) active = i;
        roles[i].forEach((r) => {
          const cfg = ROLE[r.dataset.role || ""];
          if (!cfg) return;
          const t = smooth((lp - cfg[0]) / (cfg[1] - cfg[0]));
          r.style.opacity = String(t);
          r.style.transform = `translate(${cfg[2] * (1 - t)}px, ${
            cfg[3] * (1 - t)
          }px)`;
        });
      });

      dots.forEach((d, i) => {
        if (i === active && p >= SEG - 0.0001) d.classList.add("on");
        else d.classList.remove("on");
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [live, items.length]);

  // SSR / reduced-motion: a plain readable grid of cards (SEO-safe)
  if (!live) {
    return (
      <div className="container cs-fallback">
        <div className="section-header">
          <div className="eyebrow">{intro.eyebrow}</div>
          <h2>{intro.heading}</h2>
          <p className="lead">{intro.sub}</p>
        </div>
        <div className="work-grid">
          {items.map((c) => (
            <a key={c.slug} href={`/work/${c.slug}`} className="case-study">
              <div className="case-number">{c.number}</div>
              <h3>{c.title}</h3>
              <div className="case-summary">{c.summary}</div>
              <div className="case-footer">
                <div className="case-tech-mini">{c.tech}</div>
                <span className="case-read-more">{ui.readCase} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="case-scrolly scrolly-live"
      style={{ "--n": items.length } as CSSProperties}
    >
      <div className="cs-stage">
        <div className="cs-glow" aria-hidden="true" />
        <div className="cs-grid" aria-hidden="true" />

        <div className="cs-intro">
          <div className="eyebrow">{intro.eyebrow}</div>
          <h2>{intro.heading}</h2>
          <p className="lead">{intro.sub}</p>
        </div>

        {items.map((c) => {
          const hero = c.highlights[0];
          return (
            <article className="cs-case" key={c.slug}>
              <a href={`/work/${c.slug}`} className="cs-link">
                <div className="cs-tag" data-role="tag">
                  {c.number}
                </div>
                {hero && (
                  <>
                    <div className="cs-metric" data-role="metric">
                      {hero.number}
                    </div>
                    <div className="cs-sub" data-role="sub">
                      {hero.label}
                    </div>
                  </>
                )}
                <h3 className="cs-title" data-role="title">
                  {c.title}
                </h3>
                <p className="cs-desc" data-role="desc">
                  {c.summary}
                </p>
                <div className="cs-foot" data-role="tech">
                  <span className="cs-tech">{c.tech}</span>
                  <span className="cs-more">{ui.readCase} →</span>
                </div>
              </a>
            </article>
          );
        })}

        <div className="cs-dots" aria-hidden="true">
          {items.map((c) => (
            <span className="cs-dot" key={c.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
