// Cyclical Audit → Architect → Ship pipeline. A light beam travels the line and
// each stage lights up in sequence, looping. Pure CSS — on-brand, not a blob.
const STEPS = [
  { n: "01", label: "Audit" },
  { n: "02", label: "Architect" },
  { n: "03", label: "Ship" },
];

export function ProcessFlow() {
  return (
    <div className="flow" aria-hidden="true">
      <div className="flow-inner">
        <div className="flow-line">
          <span className="flow-beam" />
        </div>
        {STEPS.map((s, i) => (
          <div className={`flow-step flow-step-${i + 1}`} key={s.n}>
            <span className="flow-node">{s.n}</span>
            <span className="flow-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
