// Faint rotating geometric outline behind a section — same language as the hero
// deco, repeated down the page so no block is a flat empty background.
export function SectionDeco({ variant = 0 }: { variant?: number }) {
  const even = variant % 2 === 0;
  return (
    <div className={`sd ${even ? "sd-0" : "sd-1"}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="sd-shape">
        {even ? (
          <polygon points="100,5 182,52 182,148 100,195 18,148 18,52" />
        ) : (
          <circle cx="100" cy="100" r="96" />
        )}
      </svg>
    </div>
  );
}
