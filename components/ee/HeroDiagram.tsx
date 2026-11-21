import { WORDMARK as W } from "@/lib/brand";

type Node = { id: string; label: string; sub: string };
type Props = { inputs: Node[]; outputs: Node[]; inLabel: string; outLabel: string; layer: string };

// FIG. 01 — business systems feed a coordinating layer, which produces outcomes.
// Boxless nodes, a dashed orchestration ring, small orange event markers.
// Pure SVG + CSS: wires draw in on load, signals travel the wires.
// Two drawings: a wide one for desktop and a stacked one for phones.

function Core({ cx, cy, w, h }: { cx: number; cy: number; w: number; h: number }) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  const b = 9;
  const l = 11;
  const mw = w * 0.6;
  const mh = (mw * 108) / 182;
  return (
    <g className="xdg-core" style={{ ["--i" as string]: 3 }}>
      <path
        className="xdg-bracket"
        d={`M${x - b} ${y - b + l}V${y - b}H${x - b + l}M${x + w + b - l} ${y - b}H${x + w + b}V${y - b + l}M${x + w + b} ${y + h + b - l}V${y + h + b}H${x + w + b - l}M${x - b + l} ${y + h + b}H${x - b}V${y + h + b - l}`}
      />
      <rect x={x} y={y} width={w} height={h} rx="2" />
      <svg x={cx - mw / 2} y={cy - mh / 2 + 2} width={mw} height={mh} viewBox={W.viewBox}>
        <g className="wm" strokeWidth={W.stroke}>
          {W.paths.map((d) => (
            <path key={d} d={d} />
          ))}
          <circle cx={W.bowl.cx} cy={W.bowl.cy} r={W.bowl.r} />
        </g>
        <circle className="wm-dot" cx={W.dot.cx} cy={W.dot.cy} r={W.dot.r} />
      </svg>
    </g>
  );
}

function Wire({ d, i }: { d: string; i: number }) {
  return (
    <>
      <path className="xdg-wire" d={d} pathLength={100} style={{ ["--i" as string]: i }} />
      <path className="xdg-pulse" d={d} pathLength={100} style={{ ["--i" as string]: i }} />
    </>
  );
}

function Ring({ cx, cy, r, label }: { cx: number; cy: number; r: number; label: string }) {
  const ticks = Array.from({ length: 24 }, (_, k) => {
    const a = (k / 24) * Math.PI * 2;
    const r2 = k % 6 === 0 ? r + 7 : r + 3.5;
    return `M${(cx + Math.cos(a) * r).toFixed(1)} ${(cy + Math.sin(a) * r).toFixed(1)}L${(cx + Math.cos(a) * r2).toFixed(1)} ${(cy + Math.sin(a) * r2).toFixed(1)}`;
  }).join("");
  return (
    <g className="xdg-ring">
      <circle cx={cx} cy={cy} r={r} />
      <circle className="xdg-ring-in" cx={cx} cy={cy} r={r - 26} />
      <path d={ticks} />
      <text className="xdg-note" x={cx} y={cy - r - 16} textAnchor="middle">
        {label}
      </text>
    </g>
  );
}

function Desktop({ inputs, outputs, inLabel, outLabel, layer }: Props) {
  const cx = 390;
  const cy = 262;
  const core = { w: 128, h: 72 };
  const inY = (i: number) => 74 + i * 76;
  const outY = (i: number) => 136 + i * 84;
  const hot = new Set(["email", "finance"]);
  return (
    <svg className="xdg-d" viewBox="0 0 780 540" role="img" aria-labelledby="xdg-title">
      <Ring cx={cx} cy={cy} r={122} label={layer} />

      {inputs.map((n, i) => {
        const y = inY(i);
        const ey = cy - 22 + i * 9;
        return <Wire key={n.id} d={`M166 ${y}C246 ${y} 262 ${ey} ${cx - core.w / 2} ${ey}`} i={i} />;
      })}
      {outputs.map((n, i) => {
        const y = outY(i);
        const sy = cy - 14 + i * 9;
        return <Wire key={n.id} d={`M${cx + core.w / 2} ${sy}C${540} ${sy} ${560} ${y} ${628} ${y}`} i={i + 6} />;
      })}

      {inputs.map((n, i) => {
        const y = inY(i);
        return (
          <g key={n.id} className="xdg-node" style={{ ["--i" as string]: i }}>
            <text x="148" y={y + 1}>{n.label}</text>
            <text className="xdg-sub" x="148" y={y + 16}>{n.sub}</text>
            <rect x="157" y={y - 4.5} width="9" height="9" />
            {hot.has(n.id) && <circle className="xdg-event" cx="176" cy={y} r="3" />}
          </g>
        );
      })}

      <Core cx={cx} cy={cy} {...core} />

      {outputs.map((n, i) => {
        const y = outY(i);
        return (
          <g key={n.id} className="xdg-out" style={{ ["--i" as string]: i + 5 }}>
            <rect x="628" y={y - 4.5} width="9" height="9" />
            <path className="xdg-check" d={`M630 ${y}l2 2.2 3.4-4`} />
            <text x="648" y={y + 4}>{n.label}</text>
          </g>
        );
      })}

      <g className="xdg-dim">
        <path d="M157 512V522M637 512V522M157 517H637" />
        <text className="xdg-note" x="164" y="508">{inLabel}</text>
        <text className="xdg-note" x="630" y="508" textAnchor="end">{outLabel}</text>
      </g>
    </svg>
  );
}

function Mobile({ inputs, outputs, inLabel, outLabel, layer }: Props) {
  const cx = 170;
  const cy = 250;
  const core = { w: 116, h: 64 };
  const inPos = (i: number) => [i % 2 === 0 ? 14 : 186, 40 + Math.floor(i / 2) * 40] as const;
  const outPos = (i: number) => [i % 2 === 0 ? 14 : 186, 408 + Math.floor(i / 2) * 40] as const;
  return (
    <svg className="xdg-m" viewBox="0 0 340 500" role="img" aria-labelledby="xdg-title">
      <text className="xdg-note" x="14" y="16">{inLabel}</text>
      <Ring cx={cx} cy={cy} r={82} label="" />
      {inputs.map((n, i) => {
        const [x, y] = inPos(i);
        const ex = cx - 40 + i * 16;
        return <Wire key={n.id} d={`M${x + 4.5} ${y + 5}C${x + 4.5} ${cy - 60} ${ex} ${cy - 70} ${ex} ${cy - core.h / 2}`} i={i} />;
      })}
      {outputs.map((n, i) => {
        const [x, y] = outPos(i);
        const sx = cx - 30 + i * 20;
        return <Wire key={n.id} d={`M${sx} ${cy + core.h / 2}C${sx} ${cy + 80} ${x + 4.5} ${y - 50} ${x + 4.5} ${y - 5}`} i={i + 6} />;
      })}
      {inputs.map((n, i) => {
        const [x, y] = inPos(i);
        return (
          <g key={n.id} className="xdg-node" style={{ ["--i" as string]: i }}>
            <rect x={x} y={y - 4.5} width="9" height="9" />
            <text x={x + 18} y={y + 5} textAnchor="start">{n.label}</text>
          </g>
        );
      })}
      <Core cx={cx} cy={cy} {...core} />
      {outputs.map((n, i) => {
        const [x, y] = outPos(i);
        return (
          <g key={n.id} className="xdg-out xdg-out-m" style={{ ["--i" as string]: i + 5 }}>
            <rect x={x} y={y - 4.5} width="9" height="9" />
            <path className="xdg-check" d={`M${x + 2} ${y}l2 2.2 3.4-4`} />
            <text x={x + 18} y={y + 4}>{n.label}</text>
          </g>
        );
      })}
      <text className="xdg-note" x="14" y="492">{outLabel}</text>
    </svg>
  );
}

export function HeroDiagram(props: Props & { title: string }) {
  return (
    <div className="xhero-diagram">
      <span id="xdg-title" hidden>
        {props.title}
      </span>
      <Desktop {...props} />
      <Mobile {...props} />
    </div>
  );
}
