"use client";

import { useEffect, useRef } from "react";

// A receding grid of red dots over black whose height is driven by a travelling
// sine wave — a 2D canvas that reads as a 3D dot-wave (like the reference, but
// red on black). Cheap, dependency-free, DPR-aware, reduced-motion friendly.
export function WaveField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // capture as non-null so nested rAF/resize closures keep the narrowing
    const g: CanvasRenderingContext2D = ctx;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;

    const COLS = 84; // dots across a row
    const ROWS = 46; // rows receding into depth

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function frame(tms: number) {
      const t = tms / 1000;
      g.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const horizon = height * 0.26; // where far rows sit
      const planeH = height * 0.78; // vertical span of the plane
      const baseSpacing = width / (COLS * 0.62);
      const amp = Math.min(width, height) * 0.05;

      for (let r = 0; r < ROWS; r++) {
        // depth: 0 = far (top, small), 1 = near (bottom, big)
        const dt = r / (ROWS - 1);
        const persp = 0.16 + dt * dt * 0.84; // non-linear for perspective
        const rowY = horizon + Math.pow(dt, 1.55) * planeH;
        const spacing = baseSpacing * persp;
        const radius = 0.5 + persp * 2.1;

        for (let c = 0; c < COLS; c++) {
          const x = cx + (c - COLS / 2) * spacing;
          if (x < -20 || x > width + 20) continue;
          const phase = t * 1.1 + c * 0.26 + r * 0.2;
          const wave = Math.sin(phase) * amp * persp;
          const y = rowY + wave;

          // brighten dots near a wave crest
          const crest = (Math.sin(phase) + 1) * 0.5;
          const alpha = (0.1 + dt * 0.55) * (0.45 + crest * 0.55);

          g.beginPath();
          g.arc(x, y, radius, 0, Math.PI * 2);
          g.fillStyle = `rgba(255, ${Math.round(40 + crest * 55)}, ${Math.round(
            40 + crest * 30
          )}, ${alpha})`;
          g.fill();
        }
      }

      if (!reduce) raf = requestAnimationFrame(frame);
    }

    resize();
    if (reduce) {
      frame(0);
    } else {
      raf = requestAnimationFrame(frame);
    }
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="wave-field" aria-hidden="true" />;
}
