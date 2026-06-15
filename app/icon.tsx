import { ImageResponse } from "next/og";

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
        <svg width="40" height="40" viewBox="0 0 32 32">
          <polygon
            points="16,1.6 29,9 29,23 16,30.4 3,23 3,9"
            fill="none"
            stroke="#fafafa"
            strokeWidth="1.3"
            strokeOpacity="0.5"
          />
          <polyline
            points="9.5,12.5 16,19 22.5,12.5"
            fill="none"
            stroke="#fafafa"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="9.5,18 16,24.5 22.5,18"
            fill="none"
            stroke="#fafafa"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
