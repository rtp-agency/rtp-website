"use client";

import { useEffect, useRef } from "react";

// A fixed, site-wide 3D nebula: thousands of tiny points frozen in a clumpy gas
// cloud. Additive blending makes dense clumps glow (the gas) while sparse points
// read as individual droplets. The cloud is tall; scrolling pans the camera down
// through it and a slow rotation gives depth. Red on black, DPR/fps-capped, and
// it pauses when the tab is hidden.
export function Nebula() {
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
    const mobile = window.matchMedia?.("(max-width: 620px)").matches ?? false;

    const N = mobile ? 950 : 2400;
    const maxDpr = mobile ? 1 : 1.5;
    const frameMs = mobile ? 1000 / 30 : 1000 / 50;
    const YR = 2.0; // vertical extent of the cloud (tall)

    let W = 0;
    let H = 0;
    let dpr = 1;
    let raf = 0;
    let last = -1;
    let maxScroll = 1;

    const rand = Math.random;
    // cheap approx-normal in [-1,1]
    const gauss = () => (rand() + rand() + rand()) / 1.5 - 1;

    type P = { x: number; y: number; z: number; b: number; c: number; s: number };
    const pts: P[] = [];
    const CLUSTERS = mobile ? 15 : 24;
    const centers = Array.from({ length: CLUSTERS }, () => ({
      x: (rand() - 0.5) * 1.7,
      y: (rand() - 0.5) * 2 * YR,
      z: (rand() - 0.5) * 1.5,
      r: 0.14 + rand() * 0.46,
      w: 0.4 + rand(),
    }));
    const totalW = centers.reduce((a, c) => a + c.w, 0);
    for (let i = 0; i < N; i++) {
      const halo = rand() < 0.15;
      let x: number;
      let y: number;
      let z: number;
      if (halo) {
        x = (rand() - 0.5) * 2.4;
        y = (rand() - 0.5) * 2 * YR * 1.1;
        z = (rand() - 0.5) * 2;
      } else {
        let t = rand() * totalW;
        let c = centers[0];
        for (const cc of centers) {
          t -= cc.w;
          if (t <= 0) {
            c = cc;
            break;
          }
        }
        x = c.x + gauss() * c.r;
        y = c.y + gauss() * c.r * 1.3;
        z = c.z + gauss() * c.r;
      }
      pts.push({
        x,
        y,
        z,
        b: 0.3 + rand() * 0.7,
        c: rand(),
        s: 0.5 + rand() * 1.0,
      });
    }

    // Group points by a quantised colour so the draw loop sets fillStyle ~once
    // per bucket instead of once per point (the string alloc was the bottleneck).
    // Fixed per-point alpha; additive blending + size-by-depth still give depth.
    const bmap = new Map<string, number[]>();
    for (let i = 0; i < N; i++) {
      const p = pts[i];
      const cq = Math.floor(p.c * 4) / 4;
      const aq = Math.round(p.b * 0.62 * 8) / 8;
      const rr = 215 + ((cq * 40) | 0);
      const gg = 40 + ((cq * 46) | 0);
      const bb = 46 + ((cq * 36) | 0);
      const key = `rgba(${rr},${gg},${bb},${aq})`;
      let arr = bmap.get(key);
      if (!arr) bmap.set(key, (arr = []));
      arr.push(i);
    }
    const bucketColors = Array.from(bmap.keys());
    const bucketPts = bucketColors.map((k) => bmap.get(k)!);

    const refresh = () => {
      maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
    };
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      refresh();
    };
    // body height changes (pinned sections set their heights in JS) → keep the
    // scroll range current without reading layout every frame
    const ro = new ResizeObserver(refresh);

    const draw = (t: number) => {
      g.globalCompositeOperation = "source-over";
      g.clearRect(0, 0, W, H);
      g.globalCompositeOperation = "lighter";

      const cx = W * 0.5;
      const cy = H * 0.5;
      const focal = Math.max(W, H) * 0.9;
      const camZ = 2.3;
      const sp = window.scrollY / maxScroll; // 0..1 down the page
      const camY = (sp - 0.5) * YR * 1.05; // pan down the cloud
      const ang = t * 0.045 + sp * 0.9; // slow rotate + scroll twist
      const ca = Math.cos(ang);
      const sa = Math.sin(ang);
      const tilt = 0.14;
      const ct = Math.cos(tilt);
      const st = Math.sin(tilt);

      const fscale = focal * 0.5;
      for (let bi = 0; bi < bucketPts.length; bi++) {
        g.fillStyle = bucketColors[bi];
        const arr = bucketPts[bi];
        for (let j = 0; j < arr.length; j++) {
          const p = pts[arr[j]];
          const rx = p.x * ca - p.z * sa;
          const rz = p.x * sa + p.z * ca;
          const ry = p.y - camY;
          const rz2 = ry * st + rz * ct;
          const depth = rz2 + camZ;
          if (depth < 0.25) continue;
          const inv = 1 / depth;
          const sx = cx + rx * fscale * inv;
          const sy = cy + (ry * ct - rz * st) * fscale * inv;
          if (sx < -20 || sx > W + 20 || sy < -20 || sy > H + 20) continue;
          const size = Math.max(0.6, p.s * fscale * inv * 0.009);
          g.fillRect(sx, sy, size, size);
        }
      }
    };

    const loop = (tms: number) => {
      raf = requestAnimationFrame(loop);
      if (document.hidden) return;
      if (frameMs && tms - last < frameMs) return;
      last = tms;
      draw(tms / 1000);
    };

    resize();
    ro.observe(document.body);
    if (reduce) draw(0);
    else raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="nebula-bg" aria-hidden="true" />;
}
