"use client";

import { useEffect, useRef } from "react";
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

export function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const stepBy = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".svc-card");
    const step = card ? card.offsetWidth + 20 : 380;
    if (dir > 0 && track.scrollLeft + track.clientWidth >= track.scrollWidth - 8) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: step * dir, behavior: "smooth" });
    }
  };

  // slow auto-advance, paused while the pointer is over the track
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let paused = false;
    const enter = () => (paused = true);
    const leave = () => (paused = false);
    track.addEventListener("pointerenter", enter);
    track.addEventListener("pointerleave", leave);
    const id = setInterval(() => {
      if (!paused) stepBy(1);
    }, 4200);
    return () => {
      clearInterval(id);
      track.removeEventListener("pointerenter", enter);
      track.removeEventListener("pointerleave", leave);
    };
  }, []);

  // click-drag to scroll on desktop (suppress the click if it was a drag)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let down = false;
    let startX = 0;
    let startLeft = 0;
    let moved = false;
    const onDown = (e: PointerEvent) => {
      down = true;
      moved = false;
      startX = e.clientX;
      startLeft = track.scrollLeft;
      track.classList.add("is-dragging");
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      down = false;
      track.classList.remove("is-dragging");
    };
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    track.addEventListener("click", onClick, true);
    return () => {
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      track.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <div className="svc">
      <div className="svc-track" ref={trackRef}>
        {services.map((s) => (
          <article className="svc-card" key={s.title}>
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
        ))}
      </div>
      <div className="svc-nav">
        <button
          type="button"
          className="svc-arrow"
          aria-label="Назад"
          onClick={() => stepBy(-1)}
        >
          ←
        </button>
        <button
          type="button"
          className="svc-arrow"
          aria-label="Вперёд"
          onClick={() => stepBy(1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
