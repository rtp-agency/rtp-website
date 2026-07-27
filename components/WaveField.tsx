"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    __rtpWaveOff?: boolean;
  }
}

// A receding grid of red dots over black whose height is driven by a travelling
// sine wave — a 2D canvas that reads as a 3D dot-wave. Cheap, dependency-free,
// DPR-aware. On phones it runs at lower density / 30fps / DPR 1, and it pauses
// whenever it is tab-hidden or masked by a later phase.
export function WaveField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const g: CanvasRenderingContext2D = ctx;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mobile = window.matchMedia?.("(max-width: 620px)").matches ?? false;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let last = -1;

    const COLS = mobile ? 46 : 84; // dots across a row
    const ROWS = mobile ? 26 : 46; // rows receding into depth
    const maxDpr = mobile ? 1 : 2;
    const frameMs = mobile ? 1000 / 30 : 0; // 0 = every frame

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(t: number) {
      g.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const horizon = height * 0.26;
      const planeH = height * 0.78;
      const baseSpacing = width / (COLS * 0.62);
      const amp = Math.min(width, height) * 0.05;

      for (let r = 0; r < ROWS; r++) {
        const dt = r / (ROWS - 1);
        const persp = 0.16 + dt * dt * 0.84;
        const rowY = horizon + Math.pow(dt, 1.55) * planeH;
        const spacing = baseSpacing * persp;
        const radius = 0.5 + persp * 2.1;
        const d2 = radius * 2;

        for (let c = 0; c < COLS; c++) {
          const x = cx + (c - COLS / 2) * spacing;
          if (x < -20 || x > width + 20) continue;
          const phase = t * 1.1 + c * 0.26 + r * 0.2;
          const s = Math.sin(phase);
          const y = rowY + s * amp * persp;
          const crest = (s + 1) * 0.5;
          const alpha = (0.1 + dt * 0.55) * (0.45 + crest * 0.55);
          g.fillStyle = `rgba(255,${Math.round(40 + crest * 55)},${Math.round(
            40 + crest * 30
          )},${alpha})`;
          if (mobile) {
            // fillRect is markedly cheaper than arc on mobile GPUs
            g.fillRect(x - radius, y - radius, d2, d2);
          } else {
            g.beginPath();
            g.arc(x, y, radius, 0, Math.PI * 2);
            g.fill();
          }
        }
      }
    }

    function loop(tms: number) {
      raf = requestAnimationFrame(loop);
      if (document.hidden || window.__rtpWaveOff) return;
      if (frameMs && tms - last < frameMs) return;
      last = tms;
      draw(tms / 1000);
    }

    resize();
    if (reduce) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="wave-field" aria-hidden="true" />;
}
