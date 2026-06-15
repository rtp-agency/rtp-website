"use client";

import { useEffect, useRef } from "react";

export function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mobile = window.innerWidth < 768;
    const N = mobile ? 26 : 44;

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;

    const parts = Array.from({ length: N }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.0005,
      vy: (Math.random() - 0.5) * 0.0005,
      a: Math.random() * 0.4 + 0.12,
      g: 200 + Math.floor(Math.random() * 55),
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = 1;
        else if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        else if (p.y > 1) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.g},${p.g},${p.g},${p.a})`;
        ctx.fill();
      }
    };

    const frame = () => {
      if (!visible) {
        raf = 0;
        return;
      }
      draw();
      raf = requestAnimationFrame(frame);
    };

    if (reduce) {
      draw();
      return () => window.removeEventListener("resize", resize);
    }

    // Pause the loop whenever the hero scrolls out of view.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(frame);
      },
      { threshold: 0 }
    );
    io.observe(canvas);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}
