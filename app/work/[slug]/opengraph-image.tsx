import { ImageResponse } from "next/og";
import { getCase, caseSlugs } from "@/lib/cases";
import { meta, ui } from "@/lib/i18n";

export const alt = "RTP Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

async function loadFont(weight: number) {
  const res = await fetch(
    `https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-cyrillic-${weight}-normal.woff`
  );
  return res.arrayBuffer();
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  const title = c?.title ?? meta.caseFallback;
  const eyebrow = c?.eyebrow ?? meta.caseFallback;
  const metric = c?.visual?.kind === "cost" ? `−${c.visual.reduction}` : null;

  const [w600, w700] = await Promise.all([loadFont(600), loadFont(700)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          padding: 72,
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#ff3b3b",
            fontSize: 24,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 40, height: 2, background: "#ff3b3b" }} />
          RTP Agency · {eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            color: "#fafafa",
            fontSize: 52,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", color: "#8a8a8a", fontSize: 26 }}>
            {meta.caseOgTagline}
          </div>
          {metric && (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                color: "#ff3b3b",
                fontSize: 68,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {metric}
              <span style={{ fontSize: 22, color: "#8a8a8a" }}>
                {ui.toCosts}
              </span>
            </div>
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: w600, weight: 600, style: "normal" },
        { name: "Inter", data: w700, weight: 700, style: "normal" },
      ],
    }
  );
}
