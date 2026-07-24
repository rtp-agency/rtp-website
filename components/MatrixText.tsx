"use client";

import { useEffect, useRef } from "react";

// Renders `text` as letterforms filled with a falling red binary rain (black
// letters, red digits running inside) via a canvas + destination-in text mask.
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
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let W = 0;
    let H = 0;
    let fontPx = 0;
    let cell = 12;
    let drops: number[] = [];
    const shapeFont = () =>
      `700 ${fontPx}px "Helvetica Neue", Arial, sans-serif`;

    function fit() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      g.font = `700 100px "Helvetica Neue", Arial, sans-serif`;
      const w100 = g.measureText(text).width || 1;
      fontPx = Math.min((W * 0.98) / w100 * 100, H * 0.94);
      cell = Math.max(9, Math.round(fontPx * 0.09));
      const cols = Math.ceil(W / cell) + 1;
      drops = Array.from({ length: cols }, () =>
        Math.floor((Math.random() * H) / cell - 8)
      );
    }

    function frame() {
      g.globalCompositeOperation = "source-over";
      g.clearRect(0, 0, W, H);

      // faint letter body so the shape reads even between digits
      g.textAlign = "center";
      g.textBaseline = "middle";
      g.font = shapeFont();
      g.fillStyle = "rgba(255,55,55,0.10)";
      g.fillText(text, W / 2, H / 2);

      // falling digits across the whole canvas
      g.textAlign = "start";
      g.textBaseline = "top";
      g.font = `${cell}px "JetBrains Mono", monospace`;
      for (let i = 0; i < drops.length; i++) {
        const x = i * cell;
        const headRow = drops[i];
        for (let t = 0; t < 7; t++) {
          const row = headRow - t;
          const y = row * cell;
          if (y < -cell || y > H) continue;
          const ch = Math.random() > 0.5 ? "1" : "0";
          if (t === 0) g.fillStyle = "rgba(255,190,180,0.95)";
          else g.fillStyle = `rgba(255,45,45,${Math.max(0, 0.65 - t * 0.1)})`;
          g.fillText(ch, x, y);
        }
        drops[i] += 0.45;
        if (drops[i] * cell > H + cell * 7)
          drops[i] = -Math.floor(Math.random() * 10);
      }

      // clip everything to the text shape
      g.globalCompositeOperation = "destination-in";
      g.textAlign = "center";
      g.textBaseline = "middle";
      g.font = shapeFont();
      g.fillStyle = "#fff";
      g.fillText(text, W / 2, H / 2);

      if (!reduce) raf = requestAnimationFrame(frame);
    }

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
