"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";

type Intro = { eyebrow: string; heading: string; sub?: string };
export type ScrollyItem = { key: string; content: ReactNode };

// staggered reveal window per element role: [start, end, dy]
const ROLE: Record<string, [number, number, number]> = {
  tag: [0.06, 0.32, 22],
  metric: [0.12, 0.46, 52],
  sub: [0.18, 0.5, 34],
  title: [0.2, 0.52, 40],
  desc: [0.3, 0.66, 42],
  tech: [0.44, 0.8, 40],
};

// Generic pinned scroll-choreography: an intro that fades out, then each item
// cross-fades in one at a time with a staggered per-element reveal.
export function Scrolly({
  items,
  intro,
  fallback,
  seg = "62vh",
}: {
  items: ScrollyItem[];
  intro: Intro;
  fallback: ReactNode;
  seg?: string;
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
    const caseEls = Array.from(el.querySelectorAll<HTMLElement>(".cs-case"));
    const dots = Array.from(el.querySelectorAll<HTMLElement>(".cs-dot"));
    if (!introEl) return;

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
        const fadeIn = smooth((lpRaw + 0.32) / 0.34);
        const fadeOut = 1 - smooth((lpRaw - 1.04) / 0.28);
        const cardO = clamp(Math.min(fadeIn, fadeOut));
        card.style.opacity = String(cardO);
        card.style.pointerEvents = cardO > 0.6 ? "auto" : "none";
        if (lpRaw >= -0.05) active = i;
        roles[i].forEach((r) => {
          const cfg = ROLE[r.dataset.role || ""] || ROLE.desc;
          const t = smooth((lp - cfg[0]) / (cfg[1] - cfg[0]));
          r.style.opacity = String(t);
          r.style.transform = `translateY(${cfg[2] * (1 - t)}px)`;
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

  if (!live) return <>{fallback}</>;

  return (
    <div
      ref={rootRef}
      className="case-scrolly scrolly-live"
      style={{ "--n": items.length, "--seg": seg } as CSSProperties}
    >
      <div className="cs-stage">
        <div className="cs-glow" aria-hidden="true" />
        <div className="cs-grid" aria-hidden="true" />

        <div className="cs-intro">
          <div className="eyebrow">{intro.eyebrow}</div>
          <h2>{intro.heading}</h2>
          {intro.sub && <p className="lead">{intro.sub}</p>}
        </div>

        {items.map((it) => (
          <article className="cs-case" key={it.key}>
            {it.content}
          </article>
        ))}

        <div className="cs-dots" aria-hidden="true">
          {items.map((it) => (
            <span className="cs-dot" key={it.key} />
          ))}
        </div>
      </div>
    </div>
  );
}
