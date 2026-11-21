import type { Discipline } from "@/lib/studio";

// Small isometric drawings: stacked layers (automate), linked cubes (connect),
// an assembly of blocks (build). Hairline outlines, one orange element each.

const C30 = 0.866;

function faces(cx: number, cy: number, s: number, t: number) {
  const w = s * C30;
  const h = s / 2;
  const p = (pts: number[][]) => pts.map((q) => q.join(",")).join(" ");
  return {
    top: p([[cx, cy - h], [cx + w, cy], [cx, cy + h], [cx - w, cy]]),
    left: p([[cx - w, cy], [cx, cy + h], [cx, cy + h + t], [cx - w, cy + t]]),
    right: p([[cx, cy + h], [cx + w, cy], [cx + w, cy + t], [cx, cy + h + t]]),
  };
}

function Block({ cx, cy, s, t, hot }: { cx: number; cy: number; s: number; t?: number; hot?: boolean }) {
  const f = faces(cx, cy, s, t ?? s);
  return (
    <g>
      <polygon className={hot ? "s" : "f"} points={f.left} />
      <polygon className={hot ? "s" : "f"} points={f.right} />
      <polygon className={hot ? "s2" : "f"} points={f.top} />
    </g>
  );
}

export function CapArt({ kind }: { kind: Discipline }) {
  return (
    <svg className="xcap-art" viewBox="0 0 112 96" aria-hidden="true">
      {kind === "automate" && (
        <>
          <Block cx={56} cy={64} s={40} t={4} />
          <Block cx={56} cy={50} s={40} t={4} />
          <g className="lift">
            <Block cx={56} cy={34} s={40} t={4} hot />
          </g>
        </>
      )}
      {kind === "connect" && (
        <>
          <path className="l" d="M30 40 56 54M82 40 56 54" />
          <Block cx={30} cy={30} s={20} />
          <Block cx={82} cy={30} s={20} />
          <g className="lift">
            <Block cx={56} cy={56} s={20} hot />
          </g>
        </>
      )}
      {kind === "build" && (
        <>
          <Block cx={56} cy={20} s={20} />
          <Block cx={39} cy={30} s={20} />
          <Block cx={73} cy={30} s={20} />
          <Block cx={56} cy={40} s={20} />
          <Block cx={39} cy={50} s={20} />
          <g className="lift">
            <Block cx={73} cy={50} s={20} hot />
          </g>
        </>
      )}
    </svg>
  );
}
