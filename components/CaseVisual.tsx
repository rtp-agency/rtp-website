"use client";

import { motion } from "framer-motion";
import type { CaseVisual as CaseVisualData } from "@/lib/cases";
import { ui, type Lang } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;
const CYCLE = 5; // seconds

function Pipeline({ stages }: { stages: { label: string; sub: string }[] }) {
  const n = stages.length;
  return (
    <div className="vp">
      <div className="vp-line">
        <span className="vp-beam" style={{ animationDuration: `${CYCLE}s` }} />
      </div>
      {stages.map((s, i) => {
        const delay = `${(i / Math.max(n - 1, 1)) * (CYCLE * 0.82) - 0.2}s`;
        return (
          <div className="vp-step" key={s.label}>
            <span
              className="vp-node"
              style={{ animationDelay: delay, animationDuration: `${CYCLE}s` }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="vp-text">
              <span
                className="vp-label"
                style={{
                  animationDelay: delay,
                  animationDuration: `${CYCLE}s`,
                }}
              >
                {s.label}
              </span>
              <span className="vp-sub">{s.sub}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CostBars({
  beforeLabel,
  beforeValue,
  afterLabel,
  afterValue,
  afterPct,
  reduction,
  lang,
}: Extract<CaseVisualData, { kind: "cost" }> & { lang: Lang }) {
  return (
    <div className="cv-cost">
      <div className="cv-row">
        <div className="cv-meta">
          <span className="cv-name">{beforeLabel}</span>
          <span className="cv-val">{beforeValue}</span>
        </div>
        <div className="cv-track">
          <motion.div
            className="cv-bar cv-bar-before"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: EASE }}
          />
        </div>
      </div>
      <div className="cv-row">
        <div className="cv-meta">
          <span className="cv-name">{afterLabel}</span>
          <span className="cv-val cv-val-hi">{afterValue}</span>
        </div>
        <div className="cv-track">
          <motion.div
            className="cv-bar cv-bar-after"
            initial={{ width: 0 }}
            whileInView={{ width: `${afterPct}%` }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
          />
        </div>
      </div>
      <motion.div
        className="cv-reduction"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
      >
        −{reduction}
        <span> {ui[lang].toCosts}</span>
      </motion.div>
    </div>
  );
}

export function CaseVisual({
  visual,
  lang,
}: {
  visual: CaseVisualData;
  lang: Lang;
}) {
  return (
    <div className="case-visual">
      {visual.kind === "pipeline" ? (
        <Pipeline stages={visual.stages} />
      ) : (
        <CostBars {...visual} lang={lang} />
      )}
    </div>
  );
}
