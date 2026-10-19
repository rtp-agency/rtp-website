import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CaseVisual } from "@/components/CaseVisual";
import { ShotFrame } from "@/components/ShotFrame";
import { CaseGallery } from "@/components/CaseGallery";
import { getContent } from "@/lib/content";
import { abs, lp, type Locale } from "@/lib/locale";
import type { Block } from "@/lib/cases";

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return <p dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case "quote":
      return <div className="case-quote-block">{block.text}</div>;
    case "stats":
      return (
        <div className="case-stats-grid">
          {block.items.map((s) => (
            <div key={s.label}>
              <div className="case-stat-number">{s.number}</div>
              <div className="case-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <table className="tech-table">
          <tbody>
            {block.rows.map(([k, v]) => (
              <tr key={k}>
                <td>{k}</td>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    default:
      return null;
  }
}

export function CaseView({ locale, slug }: { locale: Locale; slug: string }) {
  const C = getContent(locale);
  const { ui } = C;
  const c = C.getCase(slug);
  if (!c) notFound();
  const shots = C.getShots(c.slug);
  const alt = lp(locale === "ru" ? "en" : "ru", `/work/${c.slug}`);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.title,
      description: c.lead,
      image: abs(locale, `/work/${c.slug}/opengraph-image`),
      inLanguage: locale,
      author: { "@type": "Organization", name: "RTP Agency", url: abs(locale, "/") },
      publisher: { "@type": "Organization", name: "RTP Agency" },
      mainEntityOfPage: abs(locale, `/work/${c.slug}`),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: ui.casePage.breadcrumbHome,
          item: abs(locale, "/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: ui.casePage.breadcrumbWork,
          item: abs(locale, "/#work"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: c.title,
          item: abs(locale, `/work/${c.slug}`),
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
      <Nav locale={locale} variant="case" altHref={alt} back={{ href: lp(locale, "/#work"), label: ui.nav.back }} />

      <div className="case-detail dark-page" id="main">
        <div className="container">
          <section className="case-hero">
            <Reveal>
              <div className="case-eyebrow">{c.eyebrow}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1>{c.title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">{c.lead}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="case-meta">
                <span className="case-meta-item">
                  <strong>{ui.casePage.role}</strong> {c.meta.role}
                </span>
                <span className="case-meta-divider">·</span>
                <span className="case-meta-item">
                  <strong>{ui.casePage.timeline}</strong> {c.meta.timeline}
                </span>
                <span className="case-meta-divider">·</span>
                <span className="case-meta-item">
                  <strong>{ui.casePage.status}</strong> {c.meta.status}
                </span>
                {c.meta.link && (
                  <>
                    <span className="case-meta-divider">·</span>
                    <a href={c.meta.link.href}>{c.meta.link.text}</a>
                  </>
                )}
              </div>
            </Reveal>
          </section>

          {shots && (
            <Reveal>
              <div className="shot-hero">
                <span className="shot-hero-glow" aria-hidden="true" />
                <ShotFrame shot={shots.cover} priority />
                {shots.cover.caption && (
                  <p className="shot-hero-cap">{shots.cover.caption}</p>
                )}
              </div>
            </Reveal>
          )}

          {c.visual && (
            <Reveal>
              <CaseVisual visual={c.visual} toCosts={ui.toCosts} />
            </Reveal>
          )}

        </div>

        {shots && shots.groups.length > 0 && (
          <div className="gallery-wrap">
            <div className="container-wide">
              <CaseGallery groups={shots.groups} labels={C.t.gallery} />
            </div>
          </div>
        )}

        <div className="container">
          {c.sections.map((sec) => (
            <Reveal key={sec.heading} as="section" className="case-section">
              <h2>{sec.heading}</h2>
              {sec.blocks.map((block, i) => (
                <BlockView key={i} block={block} />
              ))}
            </Reveal>
          ))}
        </div>

        <section className="case-cta">
          <div className="container-narrow">
            <h2>{ui.casePage.ctaHeading}</h2>
            <p>{ui.casePage.ctaBody}</p>
            <Link href={lp(locale, "/#contact")} className="btn btn-primary">
              {ui.casePage.ctaButton} <span className="arrow">→</span>
            </Link>
          </div>
        </section>

        <div className="case-nav">
          <div className="case-nav-inner">
            <Link href={c.prev.href} className="case-nav-link">
              {c.prev.label}
            </Link>
            <Link href={c.next.href} className="case-nav-link">
              {c.next.label}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
