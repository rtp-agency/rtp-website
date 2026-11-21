import type { Content } from "@/lib/content";
import type { Shot } from "@/lib/shots";
import type { CaseVisual } from "@/lib/cases";
import { caseMeta, studio } from "@/lib/studio";

// Visuals for project cards. Screenshots are real (lib/shots.ts); the diagrams
// around them only restate numbers and stages from the published case studies.

function findShot(C: Content, slug: string, part?: string): Shot | undefined {
  const s = C.getShots(slug);
  if (!s) return undefined;
  if (!part) return s.cover;
  return [s.cover, ...s.groups.flatMap((g) => g.shots)].find((x) => x.src.includes(part));
}

export function Frame({ shot, className = "", eager }: { shot: Shot; className?: string; eager?: boolean }) {
  return (
    <figure className={`xshot ${shot.frame === "card" ? "xshot-card" : ""} ${className}`}>
      {shot.frame === "browser" && (
        <div className="xshot-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          {shot.chrome && <span>{shot.chrome}</span>}
        </div>
      )}
      <img src={shot.src} width={shot.w} height={shot.h} alt={shot.alt} loading={eager ? "eager" : "lazy"} decoding="async" />
    </figure>
  );
}

// Black Camel: the real editor + a to-scale comparison of time per video.
function BeforeAfter({ C, slug }: { C: Content; slug: string }) {
  const f = studio[C.locale].work.fig;
  const m = caseMeta[C.locale][slug];
  const shot = findShot(C, slug);
  return (
    <div className="xv xv-ba">
      {shot && <Frame shot={shot} />}
      <div className="xv-ba-chart" aria-label={`${f.manual} ${f.manualValue} · ${f.automated} ${m.outcome[0].value}`}>
        <div className="xv-ba-row">
          <span className="mono">{f.manual}</span>
          <i className="xv-ba-bar xv-ba-before" />
          <b>{f.manualValue}</b>
        </div>
        <div className="xv-ba-row">
          <span className="mono">{f.automated}</span>
          <i className="xv-ba-bar xv-ba-after" />
          <b>{m.outcome[0].value}</b>
        </div>
        <p className="mono">
          {f.perVideo} · {f.approved}
        </p>
      </div>
    </div>
  );
}

// Metra AI: the product site + the content pipeline from the case study.
function Product({ C, slug, stages }: { C: Content; slug: string; stages: { label: string }[] }) {
  const shot = findShot(C, slug);
  return (
    <div className="xv xv-product">
      {shot && <Frame shot={shot} />}
      <ol className="xv-stages" aria-label="Pipeline">
        {stages.map((s, i) => (
          <li key={s.label} style={{ ["--i" as string]: i }}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {s.label}
          </li>
        ))}
      </ol>
    </div>
  );
}

// Threads: the client dashboard with a real published post laid over it.
function Workflow({ C, slug }: { C: Content; slug: string }) {
  const base = findShot(C, slug);
  const post = findShot(C, slug, "post-viral");
  return (
    <div className="xv xv-flow">
      {base && <Frame shot={base} className="xv-flow-base" />}
      {post && (
        <div className="xv-flow-post">
          <Frame shot={post} />
          {post.caption && <p className="mono">{post.caption}</p>}
        </div>
      )}
    </div>
  );
}

// Receipts: the operations dashboard + one mark per production bot.
function Scale({ C, slug }: { C: Content; slug: string }) {
  const f = studio[C.locale].work.fig;
  const shot = findShot(C, slug);
  return (
    <div className="xv xv-scale">
      {shot && <Frame shot={shot} />}
      <div className="xv-scale-panel">
        <div className="xv-dots" aria-hidden="true">
          {Array.from({ length: 142 }, (_, i) => (
            <i key={i} style={{ ["--i" as string]: i }} />
          ))}
        </div>
        <p>
          <b>142</b> {f.bots} · <b>12</b> {f.regions}
        </p>
      </div>
    </div>
  );
}

function Cost({ v }: { v: Extract<CaseVisual, { kind: "cost" }> }) {
  return (
    <div className="xv xv-cost">
      <div className="xv-cost-row">
        <span>{v.beforeLabel}</span>
        <i className="xv-cost-bar" style={{ ["--w" as string]: "100%" }} />
        <b>{v.beforeValue}</b>
      </div>
      <div className="xv-cost-row">
        <span>{v.afterLabel}</span>
        <i className="xv-cost-bar xv-cost-after" style={{ ["--w" as string]: `${Math.max(v.afterPct, 2)}%` }} />
        <b>{v.afterValue}</b>
      </div>
      <strong>−{v.reduction}</strong>
    </div>
  );
}

function Stages({ stages }: { stages: { label: string; sub: string }[] }) {
  return (
    <ol className="xv xv-mini-stages">
      {stages.map((s, i) => (
        <li key={s.label} style={{ ["--i" as string]: i }}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          <b>{s.label}</b>
          <small>{s.sub}</small>
        </li>
      ))}
    </ol>
  );
}

export function CaseVisualFor({ C, slug, compact }: { C: Content; slug: string; compact?: boolean }) {
  const m = caseMeta[C.locale][slug];
  const c = C.getCase(slug);
  const stages = c?.visual?.kind === "pipeline" ? c.visual.stages : [];
  // Small cards get the plain screenshot instead of the composed treatments.
  const kind = compact && ["beforeAfter", "product", "workflow", "scale"].includes(m?.visual) ? "shot" : m?.visual;
  switch (kind) {
    case "beforeAfter":
      return <BeforeAfter C={C} slug={slug} />;
    case "product":
      return <Product C={C} slug={slug} stages={stages} />;
    case "workflow":
      return <Workflow C={C} slug={slug} />;
    case "scale":
      return <Scale C={C} slug={slug} />;
    case "cost":
      return c?.visual?.kind === "cost" ? <Cost v={c.visual} /> : null;
    case "stages":
      return <Stages stages={stages} />;
    case "shot": {
      const shot = findShot(C, slug);
      return shot ? (
        <div className="xv xv-thumb">
          <Frame shot={shot} />
        </div>
      ) : null;
    }
    default:
      return null;
  }
}
