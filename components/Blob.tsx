"use client";

import { useEffect, useRef } from "react";

// Glossy morphing blob that drifts toward the cursor, with particles orbiting it.
export function Blob() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
      tx = Math.max(-1, Math.min(1, dx)) * 30;
      ty = Math.max(-1, Math.min(1, dy)) * 30;
    };

    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      wrap.style.setProperty("--bx", cx.toFixed(2) + "px");
      wrap.style.setProperty("--by", cy.toFixed(2) + "px");
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="blob-wrap" ref={wrapRef} aria-hidden="true">
      <div className="blob-orbit blob-orbit-1">
        <span />
        <span />
      </div>
      <div className="blob-orbit blob-orbit-2">
        <span />
        <span />
      </div>
      <div className="blob" />
    </div>
  );
}
