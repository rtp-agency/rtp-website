"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { services, type Service } from "@/lib/site";

const TG_URL = "https://t.me/rtp_agency";

function Icon({ kind }: { kind: Service["icon"] }) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "video":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M10 9.5l4.5 2.5L10 14.5z" />
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M21 4L3 11l6 2 2 6 3-4 4 3z" />
          <path d="M9 13l8-6" />
        </svg>
      );
    case "crm":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M9 9v11" />
        </svg>
      );
    case "sites":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 8h18M6.5 6h.01M9 6h.01" />
        </svg>
      );
    case "infra":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <path d="M7 7h.01M7 17h.01" />
        </svg>
      );
    case "custom":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
        </svg>
      );
    default:
      return null;
  }
}

// 3D coverflow: cards levitate around the centre; the active one faces front,
// the others angle back into a ring. Swipe / arrows rotate through them.
export function ServicesCarousel() {
  const n = services.length;
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setActive((a) => (a + 1) % n);
    }, 4600);
    return () => clearInterval(id);
  }, [n]);

  // swipe / drag to rotate
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    let x0 = 0;
    let down = false;
    const onDown = (e: PointerEvent) => {
      down = true;
      x0 = e.clientX;
      paused.current = true;
    };
    const onUp = (e: PointerEvent) => {
      if (!down) return;
      down = false;
      const dx = e.clientX - x0;
      if (dx > 45) go(-1);
      else if (dx < -45) go(1);
      window.setTimeout(() => (paused.current = false), 1500);
    };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  return (
    <div className="svc3d">
      <div className="svc3d-stage" ref={rootRef}>
        {services.map((s, i) => {
          let off = i - active;
          if (off > n / 2) off -= n;
          if (off < -n / 2) off += n;
          const a = Math.abs(off);
          const style: CSSProperties = {
            transform: `translateX(${off * 58}%) translateZ(${-a * 200}px) rotateY(${
              off * -34
            }deg)`,
            opacity: a > 2.5 ? 0 : 1 - a * 0.22,
            zIndex: 20 - a,
            pointerEvents: off === 0 ? "auto" : "none",
          };
          return (
            <article
              className={`svc3d-card${off === 0 ? " is-active" : ""}`}
              style={style}
              key={s.title}
              onClick={() => off !== 0 && setActive(i)}
            >
              <div className="svc-ico">
                <Icon kind={s.icon} />
              </div>
              <h3 className="svc-title">{s.title}</h3>
              <ul className="svc-list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a
                className="svc-cta"
                href={TG_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Написать по услуге <span className="arrow">→</span>
              </a>
            </article>
          );
        })}
      </div>
      <div className="svc-nav">
        <button
          type="button"
          className="svc-arrow"
          aria-label="Назад"
          onClick={() => go(-1)}
        >
          ←
        </button>
        <button
          type="button"
          className="svc-arrow"
          aria-label="Вперёд"
          onClick={() => go(1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
