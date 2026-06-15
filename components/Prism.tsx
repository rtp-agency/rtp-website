// Continuously rotating translucent glass cube/crystal. Pure CSS 3D — no JS.
export function Prism() {
  return (
    <div className="prism" aria-hidden="true">
      <div className="prism-glow" />
      <div className="prism-stage">
        <div className="prism-cube">
          <span className="prism-face pf-front" />
          <span className="prism-face pf-back" />
          <span className="prism-face pf-right" />
          <span className="prism-face pf-left" />
          <span className="prism-face pf-top" />
          <span className="prism-face pf-bottom" />
        </div>
      </div>
    </div>
  );
}
