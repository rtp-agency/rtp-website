"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

// One case per view. Native scroll-snap (swipe / trackpad / keyboard) plus
// prev/next buttons, a counter and a progress rule.
export function CaseSlider({ slides }: { slides: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const n = slides.length;

  const go = useCallback((to: number) => {
    const el = ref.current;
    if (!el) return;
    const t = Math.max(0, Math.min(n - 1, to));
    el.scrollTo({ left: t * el.clientWidth, behavior: "smooth" });
  }, [n]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
        setI(Math.round(el.scrollLeft / Math.max(1, el.clientWidth)))
      );
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(i + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(i - 1);
    }
  };

  return (
    <div className="cs" role="region" aria-roledescription="carousel" aria-label="Кейсы">
      <div className="cs-bar">
        <div className="cs-count" aria-live="polite">
          <b>{String(i + 1).padStart(2, "0")}</b>
          <span> / {String(n).padStart(2, "0")}</span>
        </div>
        <div className="cs-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${(i + 1) / n})` }} />
        </div>
        <div className="cs-arrows">
          <button type="button" onClick={() => go(i - 1)} disabled={i === 0} aria-label="Предыдущий кейс">
            ←
          </button>
          <button type="button" onClick={() => go(i + 1)} disabled={i === n - 1} aria-label="Следующий кейс">
            →
          </button>
        </div>
      </div>

      <div className="cs-track" ref={ref} tabIndex={0} onKeyDown={onKey}>
        {slides.map((s, k) => (
          <div className="cs-slide" key={k} aria-hidden={k !== i}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
