"use client";

import { useCallback, useState, type ReactNode } from "react";

// Vertical slider: one case in focus, the next one peeking in below. Arrows,
// keyboard and clicking the peeking card all move it. On small screens the CSS
// turns it into a plain stacked list.
export function CaseSlider({ slides }: { slides: ReactNode[] }) {
  const [i, setI] = useState(0);
  const n = slides.length;

  const go = useCallback((to: number) => setI(Math.max(0, Math.min(n - 1, to))), [n]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      go(i + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
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
            ↑
          </button>
          <button type="button" onClick={() => go(i + 1)} disabled={i === n - 1} aria-label="Следующий кейс">
            ↓
          </button>
        </div>
      </div>

      <div className="cs-view" tabIndex={0} onKeyDown={onKey}>
        <div className="cs-rail" style={{ ["--i" as string]: i }}>
          {slides.map((s, k) => (
            <div
              className={`cs-slide${k === i ? " is-active" : ""}`}
              key={k}
              aria-hidden={k !== i}
              onClickCapture={(e) => {
                if (k !== i) {
                  e.preventDefault();
                  e.stopPropagation();
                  go(k);
                }
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
