"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

// One case at a time with the next one peeking in. Native scroll-snap (swipe,
// trackpad, keyboard) plus prev/next buttons and a counter.
export function CaseSlider({ slides }: { slides: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const n = slides.length;

  const go = useCallback(
    (to: number) => {
      const el = ref.current;
      if (!el) return;
      const t = Math.max(0, Math.min(n - 1, to));
      const slide = el.children[t] as HTMLElement | undefined;
      if (slide) el.scrollTo({ left: slide.offsetLeft - el.offsetLeft, behavior: "smooth" });
    },
    [n]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        let best = 0;
        let dist = Infinity;
        Array.from(el.children).forEach((c, k) => {
          const d = Math.abs((c as HTMLElement).offsetLeft - el.offsetLeft - el.scrollLeft);
          if (d < dist) {
            dist = d;
            best = k;
          }
        });
        setI(best);
      });
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
          <b>{String(i + 1).padStart(2, "0")}</b> / {String(n).padStart(2, "0")}
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
