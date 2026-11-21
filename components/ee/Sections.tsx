import { Rise } from "@/components/Rise";
import { Faq } from "@/components/Faq";
import { CapArt } from "./CapArt";
import { Arrow } from "./Arrow";
import { HeroDiagram } from "./HeroDiagram";
import { lp, type Locale } from "@/lib/locale";
import { studio, caseMeta, featuredSlugs } from "@/lib/studio";
import type { Content } from "@/lib/content";

function Crosses() {
  return (
    <>
      <span className="xcross xcross-l" aria-hidden="true" />
      <span className="xcross xcross-r" aria-hidden="true" />
    </>
  );
}

function SecHead({ index, title, lead, id }: { index: string; title: string; lead?: string; id: string }) {
  return (
    <Rise className="xsec-head">
      <p className="xlabel">{index}</p>
      <h2 id={id}>{title}</h2>
      {lead ? <p>{lead}</p> : <span />}
    </Rise>
  );
}

export function HeroSection({ locale }: { locale: Locale }) {
  const h = studio[locale].hero;
  const io = locale === "ru" ? ["Входы", "Результаты"] : ["Inputs", "Outcomes"];
  return (
    <section className="xhero" aria-labelledby="hero-title">
      <div className="xhero-copy">
        <p className="xlabel">{h.index}</p>
        <p className="xhero-eyebrow">{h.eyebrow}</p>
        <h1 id="hero-title">
          <span>{h.line1}</span>
          <span className="is-signal">{h.line2}</span>
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

      <figure className="xhero-fig" style={{ margin: 0 }}>
        <div className="xhero-fig-head mono">
          <span>{h.figLabel}</span>
          <span>Fig. 01</span>
        </div>
        <div className="xhero-fig-body">
          <HeroDiagram
            title={`${h.figLabel}. ${h.figCaption}`}
            inputs={h.inputs}
            outputs={h.outputs}
            inLabel={`${io[0]} / 06`}
            outLabel={`${io[1]} / 04`}
          />
          <aside className="xproof" aria-label={h.proofLabel}>
            <div className="xproof-hatch" aria-hidden="true" />
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
        </div>
        <figcaption className="xhero-fig-cap">{h.figCaption}</figcaption>
      </figure>
      <span className="xcross xcross-signal" aria-hidden="true" style={{ right: -5, bottom: -5 }} />
    </section>
  );
}

export function CapabilitiesSection({ locale }: { locale: Locale }) {
  const c = studio[locale].capabilities;
  return (
    <section id="services" className="xsec" aria-labelledby="services-title">
      <Crosses />
      <div className="xwrap">
        <SecHead index={c.index} title={c.title} lead={c.lead} id="services-title" />
        <Rise className="xcap">
          {c.items.map((it) => (
            <article className="xcap-item" key={it.key}>
              <div className="xcap-top">
                <span className="xcap-n">{it.n}</span>
                <CapArt kind={it.key} />
              </div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
              <ul>
                {it.examples.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </article>
          ))}
        </Rise>
        <p className="xcap-note">{c.note}</p>
      </div>
    </section>
  );
}

export function WorkSection({ C }: { C: Content }) {
  const locale = C.locale;
  const w = studio[locale].work;
  const meta = caseMeta[locale];
  const all = C.site.work;
  const featured = featuredSlugs
    .map((slug) => all.find((c) => c.slug === slug))
    .filter((c): c is (typeof all)[number] => !!c);
  const rest = all.filter((c) => !featuredSlugs.includes(c.slug));
  const caseNo = (slug: string) => String(all.findIndex((c) => c.slug === slug) + 1).padStart(2, "0");

  return (
    <section id="work" className="xsec" aria-labelledby="work-title">
      <Crosses />
      <div className="xwrap">
        <SecHead index={w.index} title={w.title} lead={w.lead} id="work-title" />

        <div className="xfeat">
          {featured.map((c) => {
            const m = meta[c.slug];
            const cover = C.getShots(c.slug)?.cover;
            const href = lp(locale, `/work/${c.slug}`);
            const full = C.getCase(c.slug);
            return (
              <article className="xcase-row" key={c.slug}>
                <a href={href} className="xcase-media" tabIndex={-1} aria-hidden="true">
                  <span className="xcross" style={{ left: -5 }} />
                  <div className="xcase-shot">
                    {cover && (
                      <img src={cover.src} width={cover.w} height={cover.h} alt="" loading="lazy" decoding="async" />
                    )}
                  </div>
                  <div className="xcase-fig">
                    <span>Fig. {caseNo(c.slug)}</span>
                    <span>{cover?.chrome ?? m.kind}</span>
                  </div>
                </a>
                <div className="xcase-body">
                  <div className="xcase-top">
                    <p className="xcase-tags mono">
                      {m.discipline.map((d) => (
                        <span key={d}>{w.discipline[d]}</span>
                      ))}
                      <span>{m.kind}</span>
                    </p>
                    <a href={href} className="xcase-arrow" aria-label={`${w.read}: ${c.title}`}>
                      <Arrow />
                    </a>
                  </div>
                  <span className="xcase-num">{caseNo(c.slug)}</span>
                  <h3>
                    <a href={href}>{full?.title ?? c.title}</a>
                  </h3>
                  <p>{c.summary}</p>
                  <dl className="xcase-out">
                    {m.outcome.map((o) => (
                      <div key={o.label}>
                        <dt>{o.value}</dt>
                        <dd>{o.label}</dd>
                      </div>
                    ))}
                  </dl>
                  <dl className="xcase-spec">
                    <dt>{w.client}</dt>
                    <dd>
                      {m.clientPublic && full?.meta.link ? (
                        <a href={full.meta.link.href} target="_blank" rel="noopener noreferrer">
                          {m.client}
                        </a>
                      ) : (
                        m.client
                      )}
                    </dd>
                    <dt>{w.stack}</dt>
                    <dd>{c.tech}</dd>
                  </dl>
                </div>
              </article>
            );
          })}
        </div>

        <div className="xindex">
          <div className="xindex-head">
            <h3>{w.allTitle}</h3>
            <span className="mono">
              {String(all.length).padStart(2, "0")} / {String(all.length).padStart(2, "0")}
            </span>
          </div>
          <ol>
            {rest.map((c) => {
              const m = meta[c.slug];
              const full = C.getCase(c.slug);
              return (
                <li key={c.slug}>
                  <a href={lp(locale, `/work/${c.slug}`)}>
                    <span className="xindex-n">{caseNo(c.slug)}</span>
                    <span className="xindex-t">{full?.title ?? c.title}</span>
                    <span className="xindex-k">{m.kind}</span>
                    <span className="xindex-o">
                      <b>{m.outcome[0].value}</b>
                      {m.outcome[0].label}
                    </span>
                    <span className="xindex-a">
                      <Arrow />
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="xalso">
          <p className="xlabel">{w.alsoTitle}</p>
          <ul>
            {C.site.additional.map((a) => (
              <li key={a.title}>
                <b>{a.title}</b>
                <span>{a.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
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
  const [lead, rest] = a.title.split(" Routine to Profit");
  return (
    <section id="about" className="xsec" aria-labelledby="about-title">
      <Crosses />
      <div className="xwrap xabout">
        <div>
          <p className="xlabel">{a.index}</p>
          <h2 id="about-title">
            {lead} <em>Routine to Profit</em>
            {rest}
          </h2>
        </div>
        <div className="xabout-body">
          {a.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <ul className="xabout-pr">
            {a.principles.map((p) => (
              <li key={p.title}>
                <b>{p.title}</b>
                <span>{p.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="xquotes">
          <p className="xlabel">{a.quotesTitle}</p>
          <div className="xquotes-grid">
            {C.site.testimonials.map((t) => (
              <figure key={t.name}>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <b>
                    {t.link ? (
                      <a href={t.link} target="_blank" rel="noopener noreferrer">
                        {t.name}
                      </a>
                    ) : (
                      t.name
                    )}
                  </b>
                  <span>{t.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
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
        <Faq items={C.faq} />
      </div>
    </section>
  );
}
