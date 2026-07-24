"use client";

import { useEffect, useRef } from "react";

// Scroll-driven transition: a field of red dots rises from the bottom with a
// wavy front until it covers the whole screen, then clears — a "wave washing
// over the screen" between the services and the cases.
export function WaveWash() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const g: CanvasRenderingContext2D = ctx;
    const cnv: HTMLCanvasElement = canvas;
    const el: HTMLDivElement = wrap;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let W = 0;
    let H = 0;
    let spacing = 22;
    let progress = 0;
    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

    const fit = () => {
      const r = cnv.getBoundingClientRect();
      W = r.width;
      H = r.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cnv.width = Math.floor(W * dpr);
      cnv.height = Math.floor(H * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      spacing = Math.max(16, Math.round(W / 64));
    };

    const readProgress = () => {
      const total = el.offsetHeight - window.innerHeight;
      progress = total > 0 ? clamp(-el.getBoundingClientRect().top / total) : 0;
    };

    const draw = (tms: number) => {
      const t = tms / 1000;
      const p = progress;
      const cover = clamp(p / 0.6); // fills the screen by p = 0.6
      const op = p < 0.72 ? 1 : clamp(1 - (p - 0.72) / 0.28); // then clears
      g.clearRect(0, 0, W, H);
      if (op > 0.002) {
        const frontBase = (1 - cover) * (H + 40);
        const amp = Math.min(64, H * 0.06);
        for (let x = 0; x <= W; x += spacing) {
          const front = frontBase + Math.sin(x * 0.012 + t * 1.4) * amp;
          for (let y = H; y >= front; y -= spacing) {
            const d = clamp((y - front) / H);
            const flick = 0.6 + 0.4 * Math.sin(x * 0.3 + y * 0.2 + t * 3);
            const a = op * clamp(0.22 + (1 - d) * 0.78) * flick;
            const rad = 1.3 + (1 - d) * 1.5;
            g.beginPath();
            g.arc(x + Math.sin(y * 0.05 + t) * 2, y, rad, 0, Math.PI * 2);
            g.fillStyle = `rgba(255,${50 + Math.floor((1 - d) * 45)},46,${a})`;
            g.fill();
          }
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    fit();
    readProgress();
    const onScroll = () => {
      readProgress();
      if (reduce) draw(0);
    };
    const onResize = () => {
      fit();
      readProgress();
      if (reduce) draw(0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    if (reduce) draw(0);
    else raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={wrapRef} className="wave-wash" aria-hidden="true">
      <canvas ref={canvasRef} className="wave-wash-canvas" />
    </div>
  );
}
