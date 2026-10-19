"use client";

import { useCallback, useEffect, useState } from "react";
import type { ShotGroup } from "@/lib/shots";

// Gallery groups + a keyboard-friendly lightbox shared across all groups.
export function CaseGallery({
  groups,
  labels,
}: {
  groups: ShotGroup[];
  labels: { open: string; close: string; prev: string; next: string };
}) {
  const flat = groups.flatMap((g) => g.shots);
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + flat.length) % flat.length)),
    [flat.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, step]);

  let n = -1;
  const current = open === null ? null : flat[open];

  return (
    <>
      {groups.map((g) => (
        <section className="gallery-group" key={g.title}>
          <h2>{g.title}</h2>
          {g.lead && <p className="gallery-lead">{g.lead}</p>}
          <div className={`gallery gallery-${g.layout}`}>
            {g.shots.map((s) => {
              const idx = ++n;
              return (
                <figure className={`gshot gshot-${s.frame}`} key={s.src}>
                  <button
                    type="button"
                    className="gshot-btn"
                    onClick={() => setOpen(idx)}
                    aria-label={`${labels.open}: ${s.alt}`}
                  >
                    {s.frame === "browser" && (
                      <span className="shot-bar" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                        {s.chrome && <span>{s.chrome}</span>}
                      </span>
                    )}
                    <img
                      src={s.src}
                      width={s.w}
                      height={s.h}
                      alt={s.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="gshot-zoom" aria-hidden="true">
                      ⤢
                    </span>
                  </button>
                  {s.caption && <figcaption>{s.caption}</figcaption>}
                </figure>
              );
            })}
          </div>
        </section>
      ))}

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="lb-close"
            aria-label={labels.close}
            onClick={() => setOpen(null)}
          >
            ✕
          </button>
          {flat.length > 1 && (
            <>
              <button
                type="button"
                className="lb-nav lb-prev"
                aria-label={labels.prev}
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
              >
                ←
              </button>
              <button
                type="button"
                className="lb-nav lb-next"
                aria-label={labels.next}
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
              >
                →
              </button>
            </>
          )}
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} />
            {current.caption && <figcaption>{current.caption}</figcaption>}
          </figure>
        </div>
      )}
    </>
  );
}
