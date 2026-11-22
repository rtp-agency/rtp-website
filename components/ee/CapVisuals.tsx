// Three distinct compositions for Automate / Connect / Build.
// Fine-line SVG; the "is-in" state on the parent (InView) runs the motion.

const v = (i: number) => ({ ["--i" as string]: i });

// Automate — scattered repeated tasks pass a trigger and line up as a workflow.
export function AutomateArt({ labels }: { labels: { before: string; trigger: string; after: string } }) {
  const scattered: [number, number, number][] = [
    [18, 54, -8], [86, 36, 5], [40, 104, 4], [118, 92, -6], [12, 156, 7],
    [80, 148, -3], [140, 152, 9], [46, 206, -5], [112, 206, 3],
  ];
  const lanes = [86, 140, 194];
  return (
    <svg className="xart xart-auto" viewBox="0 0 600 260" role="img" aria-label={`${labels.before} → ${labels.trigger} → ${labels.after}`}>
      <text className="xart-label" x="12" y="18">{labels.before}</text>
      <text className="xart-label" x="300" y="18" textAnchor="middle">{labels.trigger}</text>
      <text className="xart-label" x="588" y="18" textAnchor="end">{labels.after}</text>

      {scattered.map(([x, y, r], i) => (
        <g key={i} className="xa-scatter" transform={`translate(${x} ${y}) rotate(${r} 26 14)`} style={v(i)}>
          <rect width="52" height="28" />
          <path d="M8 10h22M8 18h32" />
        </g>
      ))}

      <path className="xa-in" d="M196 130H282" />
      <g className="xa-trigger">
        <rect x="288" y="118" width="24" height="24" transform="rotate(45 300 130)" />
        <path d="M302 121l-6 10h6l-2 8 7-11h-6z" />
      </g>
      {lanes.map((y, k) => (
        <path key={k} className="xa-lane" d={`M318 130C350 130 340 ${y} 372 ${y}H584`} pathLength={100} style={v(k)} />
      ))}
      {lanes.map((y, k) => (
        <path key={`p${k}`} className="xa-pulse" d={`M318 130C350 130 340 ${y} 372 ${y}H584`} pathLength={100} style={v(k)} />
      ))}
      {lanes.flatMap((y, k) =>
        [0, 1, 2].map((j) => (
          <g key={`${k}${j}`} transform={`translate(${384 + j * 66} ${y - 14})`}>
            <g className="xa-card" style={v(k * 3 + j)}>
              <rect width="52" height="28" />
              <path d="M8 10h22M8 18h32" />
            </g>
          </g>
        ))
      )}
      {lanes.map((y, k) => (
        <g key={`c${k}`} className="xa-done" style={v(9 + k)}>
          <rect x="580" y={y - 5} width="10" height="10" />
          <path d={`M582 ${y}l2.2 2.4 3.6-4.4`} />
        </g>
      ))}
    </svg>
  );
}

// Connect — four independent systems exchange data through one sync layer.
export function ConnectArt({ labels }: { labels: { apps: string[]; core: string; synced: string } }) {
  const cx = 210;
  const cy = 170;
  const apps: [number, number][] = [[14, 16], [286, 16], [14, 250], [286, 250]];
  const routes = [
    `M134 58H${cx - 22}V${cy - 40}`,
    `M286 58H${cx + 22}V${cy - 40}`,
    `M134 292H${cx - 22}V${cy + 40}`,
    `M286 292H${cx + 22}V${cy + 40}`,
  ];
  return (
    <svg className="xart xart-conn" viewBox="0 0 420 340" role="img" aria-label={`${labels.apps.join(", ")} ↔ ${labels.core}`}>
      {routes.map((d, i) => (
        <path key={i} className="xc-route" d={d} pathLength={100} style={v(i)} />
      ))}
      {routes.map((d, i) => (
        <path key={`p${i}`} className="xc-pulse" d={d} pathLength={100} style={v(i)} />
      ))}
      <circle className="xc-ring" cx={cx} cy={cy} r="58" />
      <g className="xc-core">
        <rect x={cx - 40} y={cy - 40} width="80" height="80" />
        <path d={`M${cx - 14} ${cy - 6}a14 14 0 0 1 26 -4m2 -6v6h-6M${cx + 14} ${cy + 6}a14 14 0 0 1 -26 4m-2 6v-6h6`} />
        <text className="xart-label" x={cx} y={cy + 30} textAnchor="middle">{labels.core}</text>
      </g>
      {apps.map(([x, y], i) => (
        <g key={i} className="xc-app" style={v(i)}>
          <rect x={x} y={y} width="120" height="76" />
          <path d={`M${x} ${y + 16}H${x + 120}`} />
          <circle cx={x + 9} cy={y + 8} r="2" />
          <circle cx={x + 16} cy={y + 8} r="2" />
          <text className="xart-label" x={x + 112} y={y + 11} textAnchor="end">{labels.apps[i]}</text>
          <path className="xc-rows" d={`M${x + 10} ${y + 30}H${x + 80}M${x + 10} ${y + 42}H${x + 96}M${x + 10} ${y + 54}H${x + 64}`} />
          <circle className="xc-state" cx={x + 12} cy={y + 66} r="3" style={v(i)} />
          <text className="xart-label xc-state-t" x={x + 20} y={y + 69}>{labels.synced}</text>
        </g>
      ))}
    </svg>
  );
}

// Build — an operational interface assembling from modules, with dimension marks.
export function BuildArt({ labels }: { labels: { app: string; kpis: string[]; table: string } }) {
  const chart = "M190 248L222 232L254 238L286 212L318 218L350 190L382 196L414 168L446 172";
  return (
    <svg className="xart xart-build" viewBox="0 12 740 306" role="img" aria-label={labels.app}>
      <g className="xb-frame">
        <rect x="10" y="22" width="720" height="288" />
        <path d="M10 46H730" />
        <circle cx="22" cy="34" r="2.4" />
        <circle cx="31" cy="34" r="2.4" />
        <circle cx="40" cy="34" r="2.4" />
        <text className="xart-label" x="56" y="37">{labels.app}</text>
      </g>
      <g className="xb-mod" style={v(0)}>
        <path className="xb-side" d="M150 46V310" />
        <rect className="xb-fill" x="24" y="60" width="40" height="10" />
        {[0, 1, 2, 3, 4].map((k) => (
          <path key={k} d={`M24 ${94 + k * 24}H${k === 1 ? 118 : 104}`} className={k === 1 ? "xb-active" : undefined} />
        ))}
        <rect className="xb-hot" x="14" y="114" width="3" height="12" />
      </g>
      {labels.kpis.map((k, i) => (
        <g key={k} className="xb-mod" style={v(1 + i)}>
          <rect x={170 + i * 186} y="62" width="170" height="64" className={i === 1 ? "xb-tile xb-tile-hot" : "xb-tile"} />
          {i === 1 && <rect className="xb-hot" x={170 + i * 186} y="62" width="170" height="3" />}
          <text className="xart-label" x={182 + i * 186} y="80">{k}</text>
          <rect className="xb-fill" x={182 + i * 186} y="94" width={i === 2 ? 56 : 72} height="16" />
          <path className="xb-spark" d={`M${262 + i * 186} 112l12-8 10 4 12-12 14 6 14-10`} />
        </g>
      ))}
      <g className="xb-mod" style={v(4)}>
        <rect x="170" y="142" width="290" height="152" />
        <path className="xb-axis" d="M190 270H446M190 160V270" />
        <path className="xb-line" d={chart} pathLength={100} />
        {[0, 1, 2, 3].map((k) => (
          <path key={k} className="xb-grid" d={`M190 ${180 + k * 24}H446`} />
        ))}
      </g>
      <g className="xb-mod" style={v(5)}>
        <rect x="476" y="142" width="240" height="152" />
        <text className="xart-label" x="488" y="160">{labels.table}</text>
        {[0, 1, 2, 3, 4].map((k) => (
          <g key={k}>
            <path d={`M488 ${178 + k * 22}H704`} className="xb-grid" />
            <path d={`M488 ${191 + k * 22}H${560 + (k % 3) * 18}`} />
            <rect className={k === 0 ? "xb-chip xb-chip-hot" : "xb-chip"} x="664" y={183 + k * 22} width="36" height="11" />
          </g>
        ))}
      </g>
    </svg>
  );
}
