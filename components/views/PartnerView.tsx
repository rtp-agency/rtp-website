import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { getContent } from "@/lib/content";
import { SITE_URL, abs, lp, type Locale } from "@/lib/locale";

export function PartnerView({ locale, slug }: { locale: Locale; slug: string }) {
  const C = getContent(locale);
  const pt = C.t.partner;
  const p = C.getPartner(slug);
  if (!p) notFound();
  const base = SITE_URL;
  const alt = lp(locale === "ru" ? "en" : "ru", `/partners/${p.slug}`);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: p.name,
      url: p.website,
      logo: `${base}${p.logoWhite}`,
      description: p.intro,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: pt.breadcrumbHome, item: abs(locale, "/") },
        {
          "@type": "ListItem",
          position: 2,
          name: pt.breadcrumbPartners,
          item: abs(locale, "/#partners"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: p.name,
          item: abs(locale, `/partners/${p.slug}`),
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav locale={locale} variant="case" altHref={alt} back={{ href: lp(locale, "/#partners"), label: pt.back }} />

      <div className="case-detail partner-detail dark-page" id="main">
        <div className="container">
          {/* hero */}
          <section className="partner-hero">
            <Reveal>
              <div className="partner-eyebrow">{pt.eyebrow}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <img
                className="partner-logo"
                src={p.logoWhite}
                alt={p.name}
                width={520}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="partner-cats">
                {p.category.map((c) => (
                  <span className="partner-cat" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <h1 className="partner-tagline">{p.tagline}</h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead partner-intro">{p.intro}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="partner-actions">
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                >
                  {pt.goSite} <span className="arrow">→</span>
                </a>
                <a
                  href={p.ctaUrl}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-secondary"
                >
                  {pt.start}
                </a>
              </div>
            </Reveal>
            {p.promo && (
              <Reveal delay={0.26}>
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener"
                  className="partner-promo"
                >
                  <span className="partner-promo-code">{p.promo.code}</span>
                  <span className="partner-promo-text">{p.promo.text}</span>
                </a>
              </Reveal>
            )}
          </section>

          {/* stats infographic */}
          <Reveal as="section" className="partner-stats">
            {p.stats.map((s) => (
              <div className="partner-stat" key={s.label}>
                <div className="partner-stat-num">{s.number}</div>
                <div className="partner-stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal>

          {/* about */}
          <Reveal as="section" className="case-section">
            <h2>{pt.whatTheyDo}</h2>
            {p.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          {/* infrastructure — 2 pools */}
          <Reveal as="section" className="case-section">
            <h2>{pt.infra}</h2>
            <p>{pt.infraLead}</p>
            <div className="pt-cards pt-cards-2">
              {p.infra.map((it) => (
                <div className="pt-card" key={it.pool}>
                  <h3>{it.pool}</h3>
                  <p className="pt-card-includes">{it.includes}</p>
                  <div className="pt-card-for">
                    <span className="pt-card-for-label">{pt.infraFor}</span>
                    {it.usedFor}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* why choose — checklist */}
          <Reveal as="section" className="case-section">
            <h2>{pt.why(p.name)}</h2>
            <ul className="pt-checklist">
              {p.whyChoose.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </Reveal>

          {/* use cases */}
          <Reveal as="section" className="case-section">
            <h2>{pt.useCases}</h2>
            <div className="pt-usecases">
              {p.useCases.map((u) => (
                <div className="pt-usecase" key={u.case}>
                  <div className="pt-usecase-title">{u.case}</div>
                  <div className="pt-usecase-cap">{u.cap}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* AI agents */}
          <Reveal as="section" className="case-section">
            <h2>{pt.agents}</h2>
            <div className="pt-cards pt-cards-3">
              {p.aiAgents.map((a) => (
                <div className="pt-card" key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* pricing + free tiers */}
          <Reveal as="section" className="case-section">
            <h2>{pt.pricing}</h2>
            <ul className="pt-checklist">
              {p.pricing.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <h3>{pt.tiersTitle}</h3>
            <div className="pt-table-wrap">
              <table className="pt-table">
                <thead>
                  <tr>
                    <th>{pt.tierCols[0]}</th>
                    <th>{pt.tierCols[1]}</th>
                    <th>{pt.tierCols[2]}</th>
                  </tr>
                </thead>
                <tbody>
                  {p.tiers.map((tr) => (
                    <tr key={tr.tier}>
                      <td>{tr.tier}</td>
                      <td>{tr.gb}</td>
                      <td>{tr.conns}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* payments + security */}
          <Reveal as="section" className="case-section">
            <h2>{pt.payments}</h2>
            <div className="pt-payments">
              {p.payments.map((pm) => (
                <div className="pt-payment" key={pm.method}>
                  <div className="pt-payment-method">{pm.method}</div>
                  <div className="pt-payment-detail">{pm.detail}</div>
                </div>
              ))}
            </div>
            <ul className="pt-checklist pt-checklist-tight">
              {p.security.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>

          {/* getting started — steps */}
          <Reveal as="section" className="case-section">
            <h2>{pt.steps}</h2>
            <ol className="pt-steps">
              {p.steps.map((s, i) => (
                <li key={s}>
                  <span className="pt-step-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* FAQ */}
          <Reveal as="section" className="case-section">
            <h2>{pt.faq}</h2>
            <div className="pt-faq">
              {p.faq.map((f) => (
                <details className="pt-faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>

        {/* backlink CTA */}
        <section className="case-cta partner-cta">
          <div className="container-narrow">
            <h2>{pt.ready(p.name)}</h2>
            {p.promo && (
              <p>
                {pt.promo} <strong>{p.promo.code}</strong> — {p.promo.text}.
              </p>
            )}
            <div className="partner-actions partner-actions-center">
              <a
                href={p.website}
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                {pt.goTo(p.websiteLabel)} <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        <div className="case-nav">
          <div className="case-nav-inner">
            <Link href={lp(locale, "/#partners")} className="case-nav-link">
              {pt.allPartners}
            </Link>
            <a
              href={p.website}
              target="_blank"
              rel="noopener"
              className="case-nav-link"
            >
              {p.websiteLabel} →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
