"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/locale";
import { studio } from "@/lib/studio";

// FIG. 02 — a concept demonstration with sample data. A request walks through
// seven steps; one scenario stops for a human approval, one fails validation.

type NodeId = "inbox" | "validate" | "crm" | "finance" | "approval" | "projects" | "log";
type NodeState = "idle" | "active" | "done" | "wait" | "error" | "skip";
type WireId = "a" | "b" | "c" | "d" | "e" | "f" | "back";
type Step = { node: NodeId; state: NodeState; msg?: string; warn?: boolean; wire?: WireId };

const W = 112;
const H = 46;
const POS: Record<NodeId, [number, number]> = {
  inbox: [8, 60],
  validate: [146, 60],
  crm: [284, 60],
  finance: [422, 60],
  approval: [422, 214],
  projects: [284, 214],
  log: [146, 214],
};
const WIRES: Record<WireId, string> = {
  a: `M${8 + W} 83H146`,
  b: `M${146 + W} 83H284`,
  c: `M${284 + W} 83H422`,
  d: `M478 ${60 + H}V214`,
  e: `M422 237H${284 + W}`,
  f: `M284 237H${146 + W}`,
  back: `M202 60C202 22 64 22 64 60`,
};
const ORDER: NodeId[] = ["inbox", "validate", "crm", "finance", "approval", "projects", "log"];

const STATUS: Record<Locale, Record<NodeState, string>> = {
  en: { idle: "idle", active: "running", done: "ok", wait: "waiting", error: "failed", skip: "not needed" },
  ru: { idle: "ожидание", active: "в работе", done: "готово", wait: "ждём", error: "ошибка", skip: "не нужно" },
};

function script(id: string, s: Record<string, string>): { pre: Step[]; approve?: Step[]; reject?: Step[] } {
  const head: Step[] = [
    { node: "inbox", state: "active", msg: s.received },
    { node: "validate", state: "active", wire: "a" },
  ];
  if (id === "invalid") {
    return {
      pre: [...head, { node: "validate", state: "error", msg: s.invalid, warn: true, wire: "back" }],
    };
  }
  const mid: Step[] = [
    { node: "validate", state: "done", msg: s.valid },
    { node: "crm", state: "active", wire: "b" },
    { node: "crm", state: "done", msg: s.crm },
    { node: "finance", state: "active", wire: "c" },
    { node: "finance", state: "done", msg: s.finance },
  ];
  const tail: Step[] = [
    { node: "projects", state: "active", wire: "e" },
    { node: "projects", state: "done", msg: s.projects },
    { node: "log", state: "active", wire: "f" },
    { node: "log", state: "done", msg: s.logged },
  ];
  if (id === "auto") {
    return { pre: [...head, ...mid, { node: "approval", state: "skip", wire: "d" }, ...tail] };
  }
  return {
    pre: [...head, ...mid, { node: "approval", state: "wait", msg: s.needsApproval, wire: "d" }],
    approve: [{ node: "approval", state: "done", msg: s.approved }, ...tail],
    reject: [
      { node: "approval", state: "error", msg: s.rejected, warn: true },
      { node: "projects", state: "skip" },
      { node: "log", state: "active" },
      { node: "log", state: "done", msg: s.logged },
    ],
  };
}

export function SystemDemo({ locale }: { locale: Locale }) {
  const d = studio[locale].demo;
  const [scenario, setScenario] = useState("approval");
  const [nodes, setNodes] = useState<Record<NodeId, NodeState>>(() => blank());
  const [wires, setWires] = useState<Partial<Record<WireId, boolean>>>({});
  const [log, setLog] = useState<{ t: string; msg: string; warn?: boolean }[]>([]);
  const [phase, setPhase] = useState<"idle" | "running" | "waiting" | "done">("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const clock = useRef(0);

  function blank() {
    return Object.fromEntries(ORDER.map((n) => [n, "idle"])) as Record<NodeId, NodeState>;
  }
  function clear() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }
  useEffect(() => clear, []);

  function play(steps: Step[], after: "waiting" | "done") {
    setPhase("running");
    steps.forEach((st, i) => {
      timers.current.push(
        setTimeout(() => {
          clock.current += 0.4 + (st.msg ? 0.3 : 0);
          setNodes((n) => ({ ...n, [st.node]: st.state }));
          if (st.wire) setWires((w) => ({ ...w, [st.wire as WireId]: true }));
          if (st.msg) {
            const t = `+${clock.current.toFixed(1)}s`;
            setLog((l) => [...l, { t, msg: st.msg as string, warn: st.warn }]);
          }
          if (i === steps.length - 1) setPhase(after);
        }, (i + 1) * 520)
      );
    });
  }

  function run() {
    clear();
    clock.current = 0;
    setNodes(blank());
    setWires({});
    setLog([]);
    const s = script(scenario, d.steps);
    // inbox has no explicit "done" step: mark it done once validation starts
    const pre = s.pre.flatMap((st) => (st.node === "validate" && st.state === "active" ? [{ node: "inbox", state: "done" } as Step, st] : [st]));
    play(pre, s.approve ? "waiting" : "done");
  }

  function decide(ok: boolean) {
    const s = script(scenario, d.steps);
    play((ok ? s.approve : s.reject) ?? [], "done");
  }

  const st = STATUS[locale];

  return (
    <div className="xdemo">
      <div className="xdemo-ctrl">
        <fieldset disabled={phase === "running"}>
          <legend className="mono">{d.scenariosLabel}</legend>
          {d.scenarios.map((sc) => (
            <label className="xdemo-opt" key={sc.id}>
              <input
                type="radio"
                name="xdemo-scenario"
                value={sc.id}
                checked={scenario === sc.id}
                onChange={() => {
                  setScenario(sc.id);
                  if (phase !== "running") {
                    clear();
                    setNodes(blank());
                    setWires({});
                    setLog([]);
                    setPhase("idle");
                  }
                }}
              />
              <b>{sc.label}</b>
              <span>{sc.detail}</span>
            </label>
          ))}
        </fieldset>
        <button type="button" className="xbtn" onClick={run} disabled={phase === "running"}>
          {phase === "idle" ? d.run : d.replay}
        </button>
      </div>

      <div className="xdemo-stage">
        <div className="xdemo-stage-head" aria-hidden="true">
          <span>Fig. 02</span>
          <span>{d.tag}</span>
        </div>
        <svg viewBox="0 0 542 280" role="img" aria-label={`${d.title} ${d.tag}`}>
          {(Object.keys(WIRES) as WireId[]).map((w) =>
            w === "back" && !wires.back ? null : (
              <path
                key={w}
                className="xdw"
                d={WIRES[w]}
                data-s={wires[w] ? (w === "back" ? "back" : "on") : "off"}
              />
            )
          )}
          {ORDER.map((n) => {
            const [x, y] = POS[n];
            return (
              <g key={n} className="xdn" data-s={nodes[n]}>
                <rect x={x} y={y} width={W} height={H} rx="2" />
                <text x={x + 12} y={y + 20}>
                  {d.nodes[n]}
                </text>
                <text className="xdn-st" x={x + 12} y={y + 35}>
                  {st[nodes[n]]}
                </text>
              </g>
            );
          })}
          <text className="xdg-note" x="8" y="272">
            {locale === "ru" ? "Демо-данные" : "Sample data"}
          </text>
        </svg>
        <ol className="xdemo-list" aria-hidden="true">
          {ORDER.map((n, i) => (
            <li key={n} className="xdn-row" data-s={nodes[n]}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <b>{d.nodes[n]}</b>
              <i>{st[nodes[n]]}</i>
            </li>
          ))}
        </ol>
        <div className="xdemo-approve" aria-live="polite">
          {phase === "waiting" && (
            <>
              <p className="mono">{d.waiting}</p>
              <button type="button" className="xbtn xbtn-sm" onClick={() => decide(true)}>
                {d.approve}
              </button>
              <button
                type="button"
                className="xbtn xbtn-sm"
                style={{ background: "transparent", color: "var(--ink)" }}
                onClick={() => decide(false)}
              >
                {d.reject}
              </button>
            </>
          )}
        </div>
      </div>

      <div className="xdemo-log">
        <h3 className="mono">{d.logTitle}</h3>
        {log.length === 0 ? (
          <p className="xdemo-idle">{d.idle}</p>
        ) : (
          <ol aria-live="polite">
            {log.map((l, i) => (
              <li key={i} className={l.warn ? "is-warn" : undefined}>
                <time>{l.t}</time>
                <span>{l.msg}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
