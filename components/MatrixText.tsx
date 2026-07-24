"use client";

import { useEffect, useRef } from "react";

// Renders `text` as solid letterforms built from streaming red digits (a base
// digit fill inside the letters + bright falling heads), clipped to the letter
// shapes with a destination-in text mask.
export function MatrixText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const g: CanvasRenderingContext2D = ctx;
    const cnv: HTMLCanvasElement = canvas;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let W = 0;
    let H = 0;
    let fontPx = 0;
    let cell = 8;
    let cols = 0;
    let rows = 0;
    let glyphs: string[] = [];
    let heads: number[] = [];
    const rnd = () => (Math.random() > 0.5 ? "1" : "0");
    const shapeFont = () => `800 ${fontPx}px "Helvetica Neue", Arial, sans-serif`;

    const fit = () => {
      const rect = cnv.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cnv.width = Math.floor(W * dpr);
      cnv.height = Math.floor(H * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      g.font = `800 100px "Helvetica Neue", Arial, sans-serif`;
      const w100 = g.measureText(text).width || 1;
      fontPx = Math.min((W * 0.99) / w100 * 100, H * 0.98);
      cell = Math.max(7, Math.round(fontPx * 0.06));
      cols = Math.ceil(W / cell) + 1;
      rows = Math.ceil(H / cell) + 1;
      glyphs = Array.from({ length: cols * rows }, rnd);
      heads = Array.from({ length: cols }, () => Math.random() * rows);
    };

    const frame = () => {
      g.globalCompositeOperation = "source-over";
      g.clearRect(0, 0, W, H);
      g.textAlign = "start";
      g.textBaseline = "top";
      g.font = `${cell}px "JetBrains Mono", monospace`;
      for (let c = 0; c < cols; c++) {
        const head = heads[c];
        for (let r = 0; r < rows; r++) {
          const idx = c * rows + r;
          if (Math.random() < 0.03) glyphs[idx] = rnd();
          const dist = head - r;
          if (dist >= 0 && dist < 10) {
            g.fillStyle =
              dist < 1
                ? "rgba(255,232,224,1)"
                : `rgba(255,66,58,${Math.max(0.32, 1 - dist * 0.07)})`;
          } else {
            g.fillStyle = "rgba(255,66,60,0.46)";
          }
          g.fillText(glyphs[idx], c * cell, r * cell);
        }
        heads[c] += 0.5;
        if (heads[c] > rows + 6) heads[c] = -Math.random() * rows;
      }

      g.globalCompositeOperation = "destination-in";
      g.textAlign = "center";
      g.textBaseline = "middle";
      g.font = shapeFont();
      g.fillStyle = "#fff";
      g.fillText(text, W / 2, H / 2);

      // bright contour so the letters separate from the background
      g.globalCompositeOperation = "source-over";
      g.lineWidth = Math.max(1.5, fontPx * 0.016);
      g.strokeStyle = "rgba(255,78,70,0.95)";
      g.strokeText(text, W / 2, H / 2);

      if (!reduce) raf = requestAnimationFrame(frame);
    };

    fit();
    frame();
    const onResize = () => {
      fit();
      if (reduce) frame();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [text]);

  return (
    <canvas
      ref={ref}
      className={`matrix-text${className ? ` ${className}` : ""}`}
      role="img"
      aria-label={text}
    />
  );
}
