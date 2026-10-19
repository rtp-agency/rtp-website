import { ImageResponse } from "next/og";
import type { Locale } from "./locale";
import { getContent } from "./content";

export const ogSize = { width: 1200, height: 630 };

async function font(weight: number, subset: "cyrillic" | "latin") {
  const res = await fetch(
    `https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-${subset}-${weight}-normal.woff`
  );
  return res.arrayBuffer();
}

// Cyrillic + Latin subsets under one family so both languages render.
async function fonts() {
  const w = [400, 600, 700];
  const data = await Promise.all(
    w.flatMap((x) => [font(x, "cyrillic"), font(x, "latin")])
  );
  return w.flatMap((x, i) => [
    { name: "Inter", data: data[i * 2], weight: x as 400 | 600 | 700, style: "normal" as const },
    { name: "Inter", data: data[i * 2 + 1], weight: x as 400 | 600 | 700, style: "normal" as const },
  ]);
}

const RED = "#ff3b3b";

function Eyebrow({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        color: RED,
        fontSize: 24,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
    >
      <div style={{ width: 40, height: 2, background: RED }} />
      {text}
    </div>
  );
}

export async function homeOg(locale: Locale) {
  const { meta } = getContent(locale);
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
        <Eyebrow text="RTP Agency" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#fafafa",
            fontSize: 76,
            lineHeight: 1.08,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          <span>{meta.ogHeroLine1}</span>
          <span style={{ color: RED }}>{meta.ogHeroLine2}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", color: "#8a8a8a", fontSize: 24 }}>{meta.ogTagline}</div>
          <div
            style={{
              display: "flex",
              background: RED,
              color: "#0a0a0a",
              fontSize: 26,
              fontWeight: 600,
              padding: "18px 32px",
              borderRadius: 999,
            }}
          >
            {meta.ogCta}
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() }
  );
}

export async function pageOg({
  locale,
  eyebrow,
  title,
  metric,
  metricLabel,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  metric?: string | null;
  metricLabel?: string;
}) {
  const { meta } = getContent(locale);
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
        <Eyebrow text={`RTP Agency · ${eyebrow}`} />
        <div
          style={{
            display: "flex",
            color: "#fafafa",
            fontSize: title.length > 70 ? 46 : 54,
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            maxWidth: 1040,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", color: "#8a8a8a", fontSize: 26 }}>{meta.caseOgTagline}</div>
          {metric && (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                color: RED,
                fontSize: 68,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {metric}
              {metricLabel && <span style={{ fontSize: 22, color: "#8a8a8a" }}>{metricLabel}</span>}
            </div>
          )}
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() }
  );
}

export async function caseOg(locale: Locale, slug: string) {
  const C = getContent(locale);
  const c = C.getCase(slug);
  const metric = c?.visual?.kind === "cost" ? `−${c.visual.reduction}` : null;
  return pageOg({
    locale,
    eyebrow: c?.eyebrow ?? C.meta.caseFallback,
    title: c?.title ?? C.meta.caseFallback,
    metric,
    metricLabel: metric ? C.ui.toCosts : undefined,
  });
}

export async function postOg(locale: Locale, slug: string) {
  const C = getContent(locale);
  const p = C.getPost(slug);
  return pageOg({
    locale,
    eyebrow: `${C.t.blog.eyebrow} · ${p?.tag ?? ""}`,
    title: p?.title ?? C.t.blog.title,
  });
}
