// Distinct animated visual per offer:
// - cost: a descending staircase of bars (cost coming down) with a sweeping sheen
// - reliability: pulsing concentric signal rings (a steady, living signal)
const COST_HEIGHTS = [100, 76, 54, 38, 26, 18];

export function OfferVisual({ kind }: { kind: "cost" | "reliability" }) {
  if (kind === "cost") {
    return (
      <div className="ov ov-cost" aria-hidden="true">
        {COST_HEIGHTS.map((h, i) => (
          <span
            className="ov-bar"
            key={i}
            style={{ height: `${h}%`, animationDelay: `${i * 0.14}s` }}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="or" aria-hidden="true">
      <span className="or-ring" />
      <span className="or-ring" />
      <span className="or-ring" />
      <span className="or-core" />
    </div>
  );
}
