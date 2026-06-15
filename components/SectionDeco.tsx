// Calm animated background for every section down the whole page — quieter than
// the hero: large slowly-rotating outlines, a smaller drifting one, plus a field
// of floating dots so no block is ever a flat empty background.
export function SectionDeco({ variant = 0 }: { variant?: number }) {
  const even = variant % 2 === 0;
  const HEX = "100,5 182,52 182,148 100,195 18,148 18,52";
  const TRI = "100,14 186,176 14,176";
  return (
    <div className={`sd ${even ? "sd-0" : "sd-1"}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="sd-shape sd-shape-a">
        {even ? <polygon points={HEX} /> : <circle cx="100" cy="100" r="96" />}
      </svg>
      <svg viewBox="0 0 200 200" className="sd-shape sd-shape-b">
        {even ? <circle cx="100" cy="100" r="80" /> : <polygon points={TRI} />}
      </svg>
      <svg viewBox="0 0 200 200" className="sd-shape sd-shape-c">
        {even ? <polygon points={TRI} /> : <polygon points={HEX} />}
      </svg>
      <span className="sd-dot sd-d1" />
      <span className="sd-dot sd-d2" />
      <span className="sd-dot sd-d3" />
      <span className="sd-dot sd-d4" />
      <span className="sd-dot sd-d5" />
      <span className="sd-dot sd-d6" />
      <span className="sd-dot sd-d7" />
      <span className="sd-dot sd-d8" />
      <span className="sd-dot sd-d9" />
      <span className="sd-dot sd-d10" />
      <span className="sd-dot sd-d11" />
      <span className="sd-dot sd-d12" />
    </div>
  );
}
