"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

/* Apple-style "Liquid Glass": a canvas-generated displacement map bends the
   backdrop only along a rounded "bezel" (the rim), like a real lens, plus a
   specular highlight map. Ported from archisvaze/liquid-glass. */

const SURFACE_FNS = {
  convex_squircle: (x: number) => Math.pow(1 - Math.pow(1 - x, 4), 0.25),
};

function calculateRefractionProfile(
  glassThickness: number,
  bezelWidth: number,
  heightFn: (x: number) => number,
  ior: number,
  samples: number
) {
  const eta = 1 / ior;
  function refract(nx: number, ny: number): [number, number] | null {
    const dot = ny;
    const k = 1 - eta * eta * (1 - dot * dot);
    if (k < 0) return null;
    const sq = Math.sqrt(k);
    return [-(eta * dot + sq) * nx, eta - (eta * dot + sq) * ny];
  }
  const profile = new Float64Array(samples);
  for (let i = 0; i < samples; i++) {
    const x = i / samples;
    const y = heightFn(x);
    const dx = x < 1 ? 0.0001 : -0.0001;
    const y2 = heightFn(x + dx);
    const deriv = (y2 - y) / dx;
    const mag = Math.sqrt(deriv * deriv + 1);
    const ref = refract(-deriv / mag, -1 / mag);
    if (!ref) {
      profile[i] = 0;
      continue;
    }
    profile[i] = ref[0] * ((y * bezelWidth + glassThickness) / ref[1]);
  }
  return profile;
}

function generateDisplacementMap(
  w: number,
  h: number,
  radius: number,
  bezelWidth: number,
  profile: Float64Array,
  maxDisp: number
) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  const img = ctx.createImageData(w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    d[i] = 128;
    d[i + 1] = 128;
    d[i + 2] = 0;
    d[i + 3] = 255;
  }
  const r = radius;
  const rSq = r * r;
  const r1Sq = (r + 1) ** 2;
  const rBSq = Math.max(r - bezelWidth, 0) ** 2;
  const wB = w - r * 2;
  const hB = h - r * 2;
  const S = profile.length;
  for (let y1 = 0; y1 < h; y1++) {
    for (let x1 = 0; x1 < w; x1++) {
      const x = x1 < r ? x1 - r : x1 >= w - r ? x1 - r - wB : 0;
      const y = y1 < r ? y1 - r : y1 >= h - r ? y1 - r - hB : 0;
      const dSq = x * x + y * y;
      if (dSq > r1Sq || dSq < rBSq) continue;
      const dist = Math.sqrt(dSq);
      const fromSide = r - dist;
      const op =
        dSq < rSq
          ? 1
          : 1 - (dist - Math.sqrt(rSq)) / (Math.sqrt(r1Sq) - Math.sqrt(rSq));
      if (op <= 0 || dist === 0) continue;
      const cos = x / dist;
      const sin = y / dist;
      const bi = Math.min(((fromSide / bezelWidth) * S) | 0, S - 1);
      const disp = profile[bi] || 0;
      const dX = (-cos * disp) / maxDisp;
      const dY = (-sin * disp) / maxDisp;
      const idx = (y1 * w + x1) * 4;
      d[idx] = (128 + dX * 127 * op + 0.5) | 0;
      d[idx + 1] = (128 + dY * 127 * op + 0.5) | 0;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c.toDataURL();
}

function generateSpecularMap(
  w: number,
  h: number,
  radius: number,
  bezelWidth: number,
  angle: number
) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  const img = ctx.createImageData(w, h);
  const d = img.data;
  d.fill(0);
  const r = radius;
  const rSq = r * r;
  const r1Sq = (r + 1) ** 2;
  const rBSq = Math.max(r - bezelWidth, 0) ** 2;
  const wB = w - r * 2;
  const hB = h - r * 2;
  const sv = [Math.cos(angle), Math.sin(angle)];
  for (let y1 = 0; y1 < h; y1++) {
    for (let x1 = 0; x1 < w; x1++) {
      const x = x1 < r ? x1 - r : x1 >= w - r ? x1 - r - wB : 0;
      const y = y1 < r ? y1 - r : y1 >= h - r ? y1 - r - hB : 0;
      const dSq = x * x + y * y;
      if (dSq > r1Sq || dSq < rBSq) continue;
      const dist = Math.sqrt(dSq);
      const fromSide = r - dist;
      const op =
        dSq < rSq
          ? 1
          : 1 - (dist - Math.sqrt(rSq)) / (Math.sqrt(r1Sq) - Math.sqrt(rSq));
      if (op <= 0 || dist === 0) continue;
      const cos = x / dist;
      const sin = -y / dist;
      const dot = Math.abs(cos * sv[0] + sin * sv[1]);
      const edge = Math.sqrt(Math.max(0, 1 - (1 - fromSide) ** 2));
      const coeff = dot * edge;
      const col = (255 * coeff) | 0;
      const alpha = (col * coeff * op) | 0;
      const idx = (y1 * w + x1) * 4;
      d[idx] = col;
      d[idx + 1] = col;
      d[idx + 2] = col;
      d[idx + 3] = alpha;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c.toDataURL();
}

type Maps = { disp: string; spec: string; scale: number; w: number; h: number };

export function LiquidGlass({
  children,
  className = "",
  radius = 28,
  bezel = 16,
  thickness = 16,
  ior = 1.5,
  scaleRatio = 1,
  blur = 0.4,
  specSat = 1.4,
  specOpacity = 0.5,
}: {
  children: ReactNode;
  className?: string;
  radius?: number;
  bezel?: number;
  thickness?: number;
  ior?: number;
  scaleRatio?: number;
  blur?: number;
  specSat?: number;
  specOpacity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rawId = useId();
  const id = "lg" + rawId.replace(/:/g, "");
  const [maps, setMaps] = useState<Maps | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Real-time SVG refraction is GPU-heavy on every scroll frame — only enable
    // it on capable desktops. Touch / small / reduced-motion get frosted glass.
    const capable =
      !!window.matchMedia?.("(min-width: 900px) and (pointer: fine)").matches &&
      !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!capable) return;
    const build = () => {
      const w = Math.round(el.offsetWidth);
      const h = Math.round(el.offsetHeight);
      if (w < 2 || h < 2) return;
      const r = Math.min(radius, h / 2);
      const clampedBezel = Math.min(bezel, r - 1, Math.min(w, h) / 2 - 1);
      const profile = calculateRefractionProfile(
        thickness,
        clampedBezel,
        SURFACE_FNS.convex_squircle,
        ior,
        128
      );
      const maxDisp =
        Math.max(...Array.from(profile).map((v) => Math.abs(v))) || 1;
      const disp = generateDisplacementMap(w, h, r, clampedBezel, profile, maxDisp);
      const spec = generateSpecularMap(w, h, r, clampedBezel * 2.5, Math.PI / 3);
      setMaps({ disp, spec, scale: maxDisp * scaleRatio, w, h });
    };
    build();
    const ro = new ResizeObserver(build);
    ro.observe(el);
    return () => ro.disconnect();
  }, [radius, bezel, thickness, ior, scaleRatio]);

  return (
    <div
      ref={ref}
      className={`lg ${className}`.trim()}
      style={{ borderRadius: radius }}
    >
      {maps && (
        <svg className="lg-svg" aria-hidden="true">
          <filter
            id={id}
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={blur}
              result="blurred_source"
            />
            <feImage
              href={maps.disp}
              x="0"
              y="0"
              width={maps.w}
              height={maps.h}
              result="disp_map"
            />
            <feDisplacementMap
              in="blurred_source"
              in2="disp_map"
              scale={maps.scale}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feColorMatrix
              in="displaced"
              type="saturate"
              values={String(specSat)}
              result="displaced_sat"
            />
            <feImage
              href={maps.spec}
              x="0"
              y="0"
              width={maps.w}
              height={maps.h}
              result="spec_layer"
            />
            <feComposite
              in="displaced_sat"
              in2="spec_layer"
              operator="in"
              result="spec_masked"
            />
            <feComponentTransfer in="spec_layer" result="spec_faded">
              <feFuncA type="linear" slope={specOpacity} />
            </feComponentTransfer>
            <feBlend in="spec_masked" in2="displaced" mode="normal" result="with_sat" />
            <feBlend in="spec_faded" in2="with_sat" mode="normal" />
          </filter>
        </svg>
      )}
      <div
        className="lg-refract"
        style={
          maps
            ? {
                backdropFilter: `url(#${id}) saturate(1.2)`,
                WebkitBackdropFilter: `url(#${id}) saturate(1.2)`,
              }
            : undefined
        }
      />
      <div className="lg-tint" />
      <div className="lg-inner">{children}</div>
    </div>
  );
}
