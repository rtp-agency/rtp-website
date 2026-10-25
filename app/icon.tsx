import { ImageResponse } from "next/og";
import { LOGO_PATH, LOGO_VIEWBOX } from "@/lib/logo";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

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
          background: "#0a0a0a",
          color: "#fafafa",
          borderRadius: 14,
        }}
      >
        <svg width="42" height="42" viewBox={LOGO_VIEWBOX}>
          <path d={LOGO_PATH} fillRule="evenodd" fill="#fafafa" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
