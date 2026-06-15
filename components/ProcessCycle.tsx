"use client";

import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STEPS = [
  { n: "01", label: "Аудит", desc: "Анализируем стек, находим потери" },
  { n: "02", label: "Архитектура", desc: "Проектируем дешёвую надёжную систему" },
  { n: "03", label: "Запуск", desc: "Выкатываем в продакшен, доказываем" },
];

const DURATION = 4200;

function AuditScene() {
  return (
    <div className="sc sc-audit">
      <div className="sc-bars">
        {[44, 70, 100, 58, 34].map((h, i) => (
          <span
            key={i}
            style={{ height: `${h}%` }}
            className={i === 2 ? "flag" : ""}
          />
        ))}
      </div>
      <span className="sc-scan" />
    </div>
  );
}

function ArchScene() {
  const nodes: [number, number, number][] = [
    [40, 32, 0],
    [158, 42, 0.3],
    [92, 74, 0.6],
    [44, 116, 0.9],
    [162, 112, 1.2],
  ];
  return (
    <div className="sc sc-arch">
      <svg viewBox="0 0 200 148" fill="none">
        <line x1="40" y1="32" x2="92" y2="74" className="ln" style={{ animationDelay: "0s" }} />
        <line x1="158" y1="42" x2="92" y2="74" className="ln" style={{ animationDelay: "0.2s" }} />
        <line x1="92" y1="74" x2="44" y2="116" className="ln" style={{ animationDelay: "0.4s" }} />
        <line x1="92" y1="74" x2="162" y2="112" className="ln" style={{ animationDelay: "0.6s" }} />
        <line x1="40" y1="32" x2="158" y2="42" className="ln" style={{ animationDelay: "0.8s" }} />
        {nodes.map(([x, y, d], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="7"
            className="nd"
            style={{ animationDelay: `${d}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

function ShipScene() {
  return (
    <div className="sc sc-ship">
      <div className="sc-deploy-track">
        <span className="sc-deploy-fill" />
      </div>
      <div className="sc-deploy-status">
        <span className="sc-check">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="15" className="sc-check-ring" />
            <path d="M9,16.5 l4.5,4.5 l9.5,-10.5" className="sc-check-path" />
          </svg>
          <span className="sc-live-pulse" />
        </span>
        <span className="sc-live-text">LIVE</span>
      </div>
    </div>
  );
}

export function ProcessCycle() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % 3), DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pc">
      <div className="pc-head">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pc-head-label">{STEPS[active].label}</div>
            <div className="pc-head-desc">{STEPS[active].desc}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pc-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="pc-scene"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {active === 0 && <AuditScene />}
            {active === 1 && <ArchScene />}
            {active === 2 && <ShipScene />}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pc-hexes">
        {STEPS.map((s, i) => (
          <Fragment key={s.n}>
            {i > 0 && (
              <span className={`pc-hex-conn ${active >= i ? "on" : ""}`} />
            )}
            <button
              type="button"
              className={`pc-hex ${active === i ? "on" : ""}`}
              onClick={() => setActive(i)}
              aria-label={s.label}
            >
              <svg viewBox="0 0 54 60" aria-hidden="true">
                <polygon points="27,2 52,16 52,44 27,58 2,44 2,16" />
              </svg>
              <span className="pc-hex-num">{s.n}</span>
            </button>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
