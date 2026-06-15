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
    const N = mobile ? 40 : 78;
    // Constellation lines between nearby particles — desktop only (O(N²)).
    const link = !mobile;
    const LINK_DIST = 0.13; // in normalized space

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;

    const parts = Array.from({ length: N }, () => {
      const bright = Math.random() < 0.18; // a few brighter "stars"
      return {
        x: Math.random(),
        y: Math.random(),
        r: bright ? Math.random() * 1.6 + 1.6 : Math.random() * 1.5 + 0.4,
        vx: (Math.random() - 0.5) * 0.0006,
        vy: (Math.random() - 0.5) * 0.0006,
        a: bright ? Math.random() * 0.3 + 0.45 : Math.random() * 0.35 + 0.12,
        g: 200 + Math.floor(Math.random() * 55),
        bright,
      };
    });

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
      }
      // Faint links between nearby particles (constellation look).
      if (link) {
        ctx.lineWidth = 1;
        for (let i = 0; i < parts.length; i++) {
          for (let j = i + 1; j < parts.length; j++) {
            const dx = parts[i].x - parts[j].x;
            const dy = parts[i].y - parts[j].y;
            const d = Math.hypot(dx, dy);
            if (d < LINK_DIST) {
              const a = (1 - d / LINK_DIST) * 0.07;
              ctx.strokeStyle = `rgba(235,235,235,${a})`;
              ctx.beginPath();
              ctx.moveTo(parts[i].x * w, parts[i].y * h);
              ctx.lineTo(parts[j].x * w, parts[j].y * h);
              ctx.stroke();
            }
          }
        }
      }
      for (const p of parts) {
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.g},${p.g},${p.g},${p.a})`;
        if (p.bright) {
          ctx.shadowColor = "rgba(255,255,255,0.5)";
          ctx.shadowBlur = 6;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
      ctx.shadowBlur = 0;
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
