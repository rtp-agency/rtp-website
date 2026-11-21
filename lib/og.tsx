import { ImageResponse } from "next/og";
import type { Locale } from "./locale";
import { getContent } from "./content";
import { WORDMARK as W, BRAND } from "./brand";
import { caseMeta } from "./studio";

export const ogSize = { width: 1200, height: 630 };

async function font(weight: number, subset: "cyrillic" | "latin") {
  const res = await fetch(
    `https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-${subset}-${weight}-normal.woff`
  );
  return res.arrayBuffer();
}

// Latin + Cyrillic subsets under one family so both languages render.
// Separate family names so each weight resolves per script (fontFamily lists both).
async function fonts() {
  const w = [400, 600, 700];
  const data = await Promise.all(
    w.flatMap((x) => [font(x, "latin"), font(x, "cyrillic")])
  );
  return w.flatMap((x, i) => [
    { name: "Inter", data: data[i * 2], weight: x as 400 | 600 | 700, style: "normal" as const },
    { name: "Inter Cyrillic", data: data[i * 2 + 1], weight: x as 400 | 600 | 700, style: "normal" as const },
  ]);
}

const INK = BRAND.ink;
const PAPER = BRAND.paper;
const SIGNAL = BRAND.signal;
const LINE = "#D8D5CD";
const MUTED = "#666967";

function Mark({ height = 46 }: { height?: number }) {
  const width = (height * 182) / 108;
  return (
    <svg width={width} height={height} viewBox={W.viewBox}>
      {W.paths.map((d) => (
        <path key={d} d={d} fill="none" stroke={INK} strokeWidth={W.stroke} />
      ))}
      <circle cx={W.bowl.cx} cy={W.bowl.cy} r={W.bowl.r} fill="none" stroke={INK} strokeWidth={W.stroke} />
      <circle cx={W.dot.cx} cy={W.dot.cy} r={W.dot.r} fill={SIGNAL} />
    </svg>
  );
}

// Paper card with the page frame: hairline border, registration ticks, header row.
function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: PAPER,
        padding: 28,
        fontFamily: "Inter, Inter Cyrillic",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: `1px solid ${LINE}`,
          padding: "40px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Mark />
            <div
              style={{
                display: "flex",
                borderLeft: `1px solid ${LINE}`,
                paddingLeft: 24,
                fontSize: 17,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: INK,
              }}
            >
              ROUTINE TO PROFIT
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 17, letterSpacing: "0.1em", color: MUTED }}>{label}</div>
        </div>
        {children}
      </div>
    </div>
  );
}

function Eyebrow({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        color: "#B23E1C",
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      <div style={{ width: 8, height: 8, background: SIGNAL }} />
      {text}
    </div>
  );
}

export async function homeOg(locale: Locale) {
  const { meta } = getContent(locale);
  return new ImageResponse(
    (
      <Frame label="FIG. 00">
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <Eyebrow text={meta.ogTagline} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: INK,
              fontSize: 96,
              lineHeight: 0.98,
              fontWeight: 700,
              letterSpacing: "-0.045em",
            }}
          >
            <span>{meta.ogHeroLine1}</span>
            <span style={{ color: SIGNAL }}>{meta.ogHeroLine2}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", color: MUTED, fontSize: 20 }}>rtp-agency.com</div>
          <div
            style={{
              display: "flex",
              background: INK,
              color: PAPER,
              fontSize: 22,
              fontWeight: 600,
              padding: "16px 26px",
              borderRadius: 2,
            }}
          >
            {meta.ogCta}
          </div>
        </div>
      </Frame>
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
      <Frame label={eyebrow.toUpperCase()}>
        <div
          style={{
            display: "flex",
            color: INK,
            fontSize: title.length > 70 ? 50 : 60,
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-0.035em",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 22,
          }}
        >
          <div style={{ display: "flex", color: MUTED, fontSize: 22 }}>{meta.caseOgTagline}</div>
          {metric && (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 12,
                color: INK,
                fontSize: 60,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              {metric}
              {metricLabel && <span style={{ fontSize: 20, fontWeight: 400, color: MUTED, letterSpacing: 0 }}>{metricLabel}</span>}
            </div>
          )}
        </div>
      </Frame>
    ),
    { ...ogSize, fonts: await fonts() }
  );
}

export async function caseOg(locale: Locale, slug: string) {
  const C = getContent(locale);
  const c = C.getCase(slug);
  const out = caseMeta[locale][slug]?.outcome[0];
  return pageOg({
    locale,
    eyebrow: c?.eyebrow ?? C.meta.caseFallback,
    title: c?.title ?? C.meta.caseFallback,
    metric: out?.value ?? null,
    metricLabel: out?.label,
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
