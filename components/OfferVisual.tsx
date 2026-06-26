// Distinct animated visual per play:
// - replies: pulsing concentric signal rings (an always-on, living channel)
// - content: a rising row of bars (output going up) with a sweeping sheen
// - assistant: a hub node wired to satellite systems (CRM, Telegram, sheets…)
const CONTENT_HEIGHTS = [22, 34, 48, 64, 82, 100];

export function OfferVisual({
  kind,
}: {
  kind: "replies" | "content" | "assistant";
}) {
  if (kind === "content") {
    return (
      <div className="ov ov-cost" aria-hidden="true">
        {CONTENT_HEIGHTS.map((h, i) => (
          <span
            className="ov-bar"
            key={i}
            style={{ height: `${h}%`, animationDelay: `${i * 0.14}s` }}
          />
        ))}
      </div>
    );
  }

  if (kind === "assistant") {
    const sats: [number, number, number][] = [
      [40, 20, 0],
      [40, 60, 0.15],
      [160, 20, 0.3],
      [160, 60, 0.45],
    ];
    return (
      <div className="oa" aria-hidden="true">
        <svg viewBox="0 0 200 80" fill="none">
          {sats.map(([x, y, d], i) => (
            <line
              key={`l${i}`}
              x1="100"
              y1="40"
              x2={x}
              y2={y}
              className="oa-ln"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
          {sats.map(([x, y, d], i) => (
            <circle
              key={`n${i}`}
              cx={x}
              cy={y}
              r="6"
              className="oa-nd"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
          <circle cx="100" cy="40" r="9" className="oa-core" />
        </svg>
      </div>
    );
  }

  // replies → signal rings
  return (
    <div className="or" aria-hidden="true">
      <span className="or-ring" />
      <span className="or-ring" />
      <span className="or-ring" />
      <span className="or-core" />
    </div>
  );
}
