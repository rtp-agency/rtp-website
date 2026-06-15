// Faint moving geometry behind a section — same language as the hero deco,
// repeated down the page so no block is a flat empty background. Each section
// gets a large slowly-rotating shape plus a smaller drifting/breathing one.
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
    </div>
  );
}
