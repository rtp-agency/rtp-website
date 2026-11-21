import { WORDMARK as W } from "@/lib/brand";
import { NODE_ICONS } from "./icons";

type Node = { id: string; label: string; sub: string };

// FIG. 01 — business systems feed a coordinating layer, which produces outcomes.
// Pure SVG + CSS: lines draw in on load, small orange signals travel the wires.
// Two drawings: a wide one for desktop and a stacked one for phones.

function Core({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const b = 10; // bracket offset
  const l = 12; // bracket arm
  const mw = w * 0.62;
  const mh = (mw * 108) / 182;
  return (
    <g className="xdg-core" style={{ ["--i" as string]: 3 }}>
      <path
        className="xdg-bracket"
        d={`M${x - b} ${y - b + l}V${y - b}H${x - b + l}M${x + w + b - l} ${y - b}H${x + w + b}V${y - b + l}M${x + w + b} ${y + h + b - l}V${y + h + b}H${x + w + b - l}M${x - b + l} ${y + h + b}H${x - b}V${y + h + b - l}`}
      />
      <rect x={x} y={y} width={w} height={h} rx="3" />
      <svg x={x + (w - mw) / 2} y={y + (h - mh) / 2 + 2} width={mw} height={mh} viewBox={W.viewBox}>
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

function Icon({ id, x, y }: { id: string; x: number; y: number }) {
  return <path className="xdg-ico" transform={`translate(${x} ${y})`} d={NODE_ICONS[id]} />;
}

function Wire({ d, i }: { d: string; i: number }) {
  return (
    <>
      <path className="xdg-wire" d={d} pathLength={100} style={{ ["--i" as string]: i }} />
      <path className="xdg-pulse" d={d} pathLength={100} style={{ ["--i" as string]: i }} />
    </>
  );
}

function Desktop({ inputs, outputs, inLabel, outLabel }: Props) {
  const top = 30;
  const nh = 46;
  const gap = 66;
  const core = { x: 292, y: top + 160, w: 120, h: 80 };
  const coreCy = core.y + core.h / 2;
  const outY = (i: number) => top + 46 + i * 92;
  return (
    <svg className="xdg-d" viewBox="0 0 660 450" role="img" aria-labelledby="xdg-title">
      <text className="xdg-note" x="8" y="14">{inLabel}</text>
      <text className="xdg-note" x="652" y="14" textAnchor="end">{outLabel}</text>
      <line className="xdg-tick" x1="8" y1="20" x2="40" y2="20" />
      <line className="xdg-tick" x1="620" y1="20" x2="652" y2="20" />

      {inputs.map((n, i) => {
        const y = top + i * gap;
        const cy = y + nh / 2;
        const ey = coreCy - 25 + i * 10;
        return (
          <g key={n.id}>
            <Wire d={`M172 ${cy}C232 ${cy} 236 ${ey} ${core.x} ${ey}`} i={i} />
            <g className="xdg-node" style={{ ["--i" as string]: i }}>
              <rect x="8" y={y} width="164" height={nh} rx="3" />
              <Icon id={n.id} x={20} y={y + 15} />
              <text x="46" y={y + 21}>{n.label}</text>
              <text className="xdg-sub" x="46" y={y + 34}>{n.sub}</text>
              <circle className="xdg-port" cx="172" cy={cy} r="2.6" />
            </g>
          </g>
        );
      })}

      <Core {...core} />

      {outputs.map((n, i) => {
        const y = outY(i);
        const cy = y + 20;
        const sy = coreCy - 13 + i * 9;
        return (
          <g key={n.id}>
            <Wire d={`M${core.x + core.w} ${sy}C462 ${sy} 446 ${cy} 482 ${cy}`} i={i + 6} />
            <g className="xdg-out" style={{ ["--i" as string]: i + 5 }}>
              <circle className="xdg-port xdg-port-out" cx="482" cy={cy} r="2.6" />
              <rect x="486" y={y} width="170" height="40" rx="3" />
              <Icon id={["done", "approved", "records", "reports"][i]} x={497} y={y + 12} />
              <text x="521" y={y + 24}>{n.label}</text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}

function Mobile({ inputs, outputs, inLabel, outLabel }: Props) {
  const core = { x: 110, y: 214, w: 120, h: 70 };
  return (
    <svg className="xdg-m" viewBox="0 0 340 470" role="img" aria-labelledby="xdg-title">
      <text className="xdg-note" x="6" y="12">{inLabel}</text>
      {inputs.map((n, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const sx = 6 + col * 168 + 80;
        const y = 22 + row * 50;
        const ex = core.x + 20 + i * 16;
        return <Wire key={n.id} d={`M${sx} ${y + 38}C${sx} ${core.y - 30} ${ex} ${core.y - 40} ${ex} ${core.y}`} i={i} />;
      })}
      {outputs.map((n, i) => {
        const x = 6 + (i % 2) * 168;
        const y = 352 + Math.floor(i / 2) * 52;
        const sx = core.x + 30 + i * 20;
        return <Wire key={n.id} d={`M${sx} ${core.y + core.h}C${sx} ${y - 20} ${x + 80} ${y - 30} ${x + 80} ${y}`} i={i + 6} />;
      })}
      {inputs.map((n, i) => {
        const x = 6 + (i % 2) * 168;
        const y = 22 + Math.floor(i / 2) * 50;
        return (
          <g key={n.id} className="xdg-node" style={{ ["--i" as string]: i }}>
            <rect x={x} y={y} width="160" height="38" rx="3" />
            <Icon id={n.id} x={x + 10} y={y + 11} />
            <text x={x + 34} y={y + 24}>{n.label}</text>
          </g>
        );
      })}
      <Core {...core} />
      {outputs.map((n, i) => {
        const x = 6 + (i % 2) * 168;
        const y = 352 + Math.floor(i / 2) * 52;
        return (
          <g key={n.id} className="xdg-out xdg-out-m" style={{ ["--i" as string]: i + 5 }}>
            <rect x={x} y={y} width="160" height="40" rx="3" />
            <Icon id={["done", "approved", "records", "reports"][i]} x={x + 8} y={y + 12} />
            <text x={x + 30} y={y + 24}>{n.label}</text>
          </g>
        );
      })}
      <text className="xdg-note" x="6" y="464">{outLabel}</text>
    </svg>
  );
}

type Props = { inputs: Node[]; outputs: Node[]; inLabel: string; outLabel: string };

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
