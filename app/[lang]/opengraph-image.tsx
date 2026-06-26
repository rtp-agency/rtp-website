import { ImageResponse } from "next/og";
import { languages, isLang, meta as metaDict, defaultLang } from "@/lib/i18n";

export const alt = "RTP Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

async function loadFont(weight: number) {
  const res = await fetch(
    `https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-cyrillic-${weight}-normal.woff`
  );
  return res.arrayBuffer();
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const m = metaDict[isLang(lang) ? lang : defaultLang];
  const [w400, w600] = await Promise.all([loadFont(400), loadFont(600)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "72px",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#d8d8d8",
            fontSize: 26,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 40, height: 2, background: "#d8d8d8" }} />
          RTP Agency
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#fafafa",
            fontSize: 72,
            lineHeight: 1.08,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          <span>{m.ogHeroLine1}</span>
          <span style={{ color: "#d8d8d8" }}>{m.ogHeroLine2}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", color: "#7d7d7d", fontSize: 24 }}>
            {m.ogTagline}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fafafa",
              color: "#0a0a0a",
              fontSize: 26,
              fontWeight: 600,
              padding: "18px 32px",
              borderRadius: 999,
            }}
          >
            {m.ogCta}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: w400, weight: 400, style: "normal" },
        { name: "Inter", data: w600, weight: 600, style: "normal" },
      ],
    }
  );
}
