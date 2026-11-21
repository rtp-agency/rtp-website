import { ImageResponse } from "next/og";
import { WORDMARK as W, BRAND } from "@/lib/brand";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon: the r of the wordmark and its orange period on ink.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND.ink,
        }}
      >
        <svg width="46" height="46" viewBox="-7 22 72 72">
          <path d={W.paths[0]} fill="none" stroke={BRAND.paper} strokeWidth={W.stroke + 2} />
          <circle cx="54" cy={W.dot.cy} r={W.dot.r + 1.5} fill={BRAND.signal} />
        </svg>
      </div>
    ),
    { ...size }
  );
}
