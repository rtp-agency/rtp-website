import { Rise } from "@/components/Rise";
import { Faq } from "@/components/Faq";
import { Arrow } from "./Arrow";
import { InView } from "./InView";
import { HeroDiagram } from "./HeroDiagram";
import { AutomateArt, ConnectArt, BuildArt } from "./CapVisuals";
import { CaseVisualFor } from "./WorkVisuals";
import { lp, type Locale } from "@/lib/locale";
import { studio, caseMeta, featuredSlugs, homeFaqPick } from "@/lib/studio";
import type { Content } from "@/lib/content";

// Registration crosses were retired in the unslop pass; kept as a no-op so
// section markup stays the same.
export function Crosses() {
  return null;
}

function SecHead({ index, title, id, aside }: { index: string; title: string; id: string; aside?: React.ReactNode }) {
  return (
    <Rise className="xsec-head">
      <p className="xlabel">{index}</p>
      <h2 id={id}>{title}</h2>
      {aside ?? <span />}
    </Rise>
  );
}

export function HeroSection({ locale }: { locale: Locale }) {
  const h = studio[locale].hero;
  const io = locale === "ru" ? ["Входы / 06", "Результаты / 04"] : ["Inputs / 06", "Outcomes / 04"];
  return (
    <>
      <section className="xhero" aria-labelledby="hero-title">
        <div className="xhero-copy">
          <p className="xlabel">{h.index}</p>
          <p className="xhero-eyebrow">{h.eyebrow}</p>
          <h1 id="hero-title">
            <span>{h.line1}</span>
            <span className="is-second">
              {h.line2.replace(/\.$/, "")}
              <span className="xdot">.</span>
            </span>
          </h1>
          <p className="xhero-lead">{h.lead}</p>
          <div className="xhero-actions">
            <a href={lp(locale, "/#contact")} className="xbtn">
              {h.cta} <Arrow />
            </a>
            <a href={lp(locale, "/#work")} className="xlink">
              {h.secondary}
            </a>
          </div>
        </div>

        <figure className="xhero-fig">
          <div className="xhero-fig-head mono">
            <span>{h.figLabel}</span>
          </div>
          <HeroDiagram
            title={`${h.figLabel}. ${h.figCaption}`}
            inputs={h.inputs}
            outputs={h.outputs}
            inLabel={io[0]}
            outLabel={io[1]}
            layer={h.layer}
          />
        </figure>
      </section>

      <aside className="xproof" aria-label={h.proofLabel}>
        <p className="xlabel">{h.proofLabel}</p>
        {h.proof.map((p) => (
          <a key={p.value} href={lp(locale, p.href)}>
            <b>{p.value}</b>
            <span>{p.label}</span>
            <small>
              {p.source} <Arrow />
            </small>
          </a>
        ))}
      </aside>
    </>
  );
}

export function CapabilitiesSection({ locale }: { locale: Locale }) {
  const c = studio[locale].capabilities;
  const [a, k, b] = c.items;
  const Text = ({ it }: { it: (typeof c.items)[number] }) => (
    <div className="xcap-text">
      <span className="xcap-n mono">{it.n}</span>
      <h3>{it.title}</h3>
      <p>{it.body}</p>
      <a className="xcap-link mono" href={lp(locale, it.link.href)}>
        {it.link.text} <Arrow />
      </a>
    </div>
  );
  return (
    <section id="services" className="xsec" aria-labelledby="services-title">
      <Crosses />
      <div className="xwrap">
        <SecHead index={c.index} title={c.title} id="services-title" />
        <div className="xcaps">
          <InView as="article" className="xcap xcap-a">
            <AutomateArt labels={c.art.automate} />
            <Text it={a} />
          </InView>
          <InView as="article" className="xcap xcap-c">
            <ConnectArt labels={c.art.connect} />
            <Text it={k} />
          </InView>
          <InView as="article" className="xcap xcap-b">
            <Text it={b} />
            <BuildArt labels={c.art.build} />
          </InView>
        </div>
      </div>
    </section>
  );
}

function CaseLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="xlink">
      {label} <Arrow />
    </a>
  );
}

export function WorkSection({ C }: { C: Content }) {
  const locale = C.locale;
  const w = studio[locale].work;
  const meta = caseMeta[locale];
  const all = C.site.work;
  const no = (slug: string) => String(all.findIndex((c) => c.slug === slug) + 1).padStart(2, "0");
  const rest = all.filter((c) => !featuredSlugs.includes(c.slug));

  return (
    <section id="work" className="xsec" aria-labelledby="work-title">
      <Crosses />
      <div className="xwrap">
        <SecHead
          index={w.index}
          title={w.title}
          id="work-title"
          aside={<CaseLink href={lp(locale, "/work")} label={w.allLink} />}
        />

        <div className="xfeat">
          {featuredSlugs.map((slug, i) => {
            const m = meta[slug];
            const href = lp(locale, `/work/${slug}`);
            return (
              <InView as="article" className={`xfeat-row xfeat-${m.visual}${i % 2 ? " is-flip" : ""}`} key={slug} threshold={0.15}>
                <a href={href} className="xfeat-media" tabIndex={-1} aria-hidden="true">
                  <CaseVisualFor C={C} slug={slug} />
                  <span className="xfeat-fig mono">{m.kind}</span>
                </a>
                <div className="xfeat-body">
                  <p className="xfeat-tags mono">
                    <span>{no(slug)}</span>
                    {m.discipline.map((d) => (
                      <span key={d}>{w.discipline[d]}</span>
                    ))}
                  </p>
                  <h3>
                    <a href={href}>{m.name}</a>
                  </h3>
                  <p>{m.line}</p>
                  <dl className="xfeat-out">
                    {m.outcome.map((o) => (
                      <div key={o.label}>
                        <dt>{o.value}</dt>
                        <dd>{o.label}</dd>
                      </div>
                    ))}
                  </dl>
                  <CaseLink href={href} label={w.read} />
                </div>
              </InView>
            );
          })}
        </div>

        <div className="xmore">
          <div className="xmore-head">
            <h3 className="xlabel">{w.moreTitle}</h3>
            <CaseLink href={lp(locale, "/work")} label={w.allLink} />
          </div>
          <WorkGrid C={C} slugs={rest.map((c) => c.slug)} lines={false} />
        </div>
      </div>
    </section>
  );
}

export function WorkGrid({ C, slugs, lines = true }: { C: Content; slugs: string[]; lines?: boolean }) {
  const meta = caseMeta[C.locale];
  const all = C.site.work;
  const no = (slug: string) => String(all.findIndex((c) => c.slug === slug) + 1).padStart(2, "0");
  return (
    <div className="xgrid">
      {slugs.map((slug) => {
        const m = meta[slug];
        return (
          <InView as="article" className="xgrid-item" key={slug}>
            <a href={lp(C.locale, `/work/${slug}`)}>
              <div className="xgrid-vis">
                <CaseVisualFor C={C} slug={slug} compact />
              </div>
              <p className="xgrid-meta mono">
                <span>{no(slug)}</span>
                <span>{m.kind}</span>
              </p>
              <h4>
                {m.name} <Arrow />
              </h4>
              {lines && <p className="xgrid-line">{m.line}</p>}
              <p className="xgrid-out">
                <b>{m.outcome[0].value}</b> {m.outcome[0].label}
              </p>
            </a>
          </InView>
        );
      })}
    </div>
  );
}

export function Interlude({ locale }: { locale: Locale }) {
  const t = studio[locale].interlude;
  return (
    <InView as="section" className="xinter" threshold={0.4}>
      <div className="xinter-in" aria-label={t.caption}>
        <span className="xinter-from" aria-hidden="true">
          {t.from}
        </span>
        <svg className="xinter-line" viewBox="0 0 400 20" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 10H392" />
          <path className="xinter-head" d="M384 4l8 6-8 6" />
          <circle className="xinter-dot" cx="0" cy="10" r="4" />
        </svg>
        <span className="xinter-to" aria-hidden="true">
          {t.to}
        </span>
      </div>
      <p className="xinter-cap mono">{t.caption}</p>
    </InView>
  );
}

export function ApproachSection({ locale }: { locale: Locale }) {
  const a = studio[locale].approach;
  return (
    <section id="approach" className="xsec" aria-labelledby="approach-title">
      <Crosses />
      <div className="xwrap">
        <SecHead index={a.index} title={a.title} id="approach-title" />
        <Rise as="ol" className="xsteps">
          {a.steps.map((s) => (
            <li key={s.n}>
              <span>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </Rise>
      </div>
    </section>
  );
}

export function AboutSection({ C }: { C: Content }) {
  const a = studio[C.locale].about;
  const q = C.site.testimonials.find((t) => t.name === a.quoteName) ?? C.site.testimonials[0];
  return (
    <section id="about" className="xsec" aria-labelledby="about-title">
      <Crosses />
      <div className="xwrap xabout">
        <div>
          <p className="xlabel">{a.index}</p>
          <h2 id="about-title">{a.title}</h2>
          <p className="xabout-body">{a.body}</p>
          <ul className="xabout-pr">
            {a.principles.map((p) => (
              <li key={p.title}>
                <b>{p.title}</b>
                <span>{p.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="xquote">
          <blockquote>“{q.quote}”</blockquote>
          <figcaption>
            <b>
              {q.link ? (
                <a href={q.link} target="_blank" rel="noopener noreferrer">
                  {q.name}
                </a>
              ) : (
                q.name
              )}
            </b>
            <span>{q.title}</span>
            <a className="xquote-more mono" href={lp(C.locale, "/work#clients")}>
              {a.quotesTitle} <Arrow />
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function homeFaqItems(C: Content) {
  return homeFaqPick.map((i) => C.faq[i]).filter(Boolean);
}

export function FaqSection({ C }: { C: Content }) {
  return (
    <section id="faq" className="xsec" aria-labelledby="faq-title">
      <Crosses />
      <div className="xwrap xfaq">
        <div>
          <p className="xlabel">{studio[C.locale].faqIndex}</p>
          <h2 id="faq-title">{C.t.faq.title}</h2>
        </div>
        <Faq items={homeFaqItems(C)} />
      </div>
    </section>
  );
}
