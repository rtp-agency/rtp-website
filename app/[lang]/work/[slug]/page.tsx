import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CaseVisual } from "@/components/CaseVisual";
import { getCase, caseSlugs, type Block } from "@/lib/cases";
import { isLang, ui, htmlLang, languages, type Lang } from "@/lib/i18n";

export function generateStaticParams() {
  return languages.flatMap((lang) =>
    caseSlugs.map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return {};
  const c = getCase(lang, slug);
  if (!c) return {};
  const t = ui[lang];
  return {
    title: `${c.title} ${t.casePage.titleSuffix}`,
    description: c.lead,
    keywords: [...t.casePage.keywords],
    alternates: {
      canonical: `/${lang}/work/${c.slug}`,
      languages: {
        uk: `/uk/work/${c.slug}`,
        en: `/en/work/${c.slug}`,
        "x-default": `/uk/work/${c.slug}`,
      },
    },
    openGraph: {
      title: c.title,
      description: c.lead,
      type: "article",
      url: `https://rtp-agency.com/${lang}/work/${c.slug}`,
    },
  };
}

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

export default async function CasePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const l: Lang = lang;
  const c = getCase(l, slug);
  if (!c) notFound();
  const t = ui[l];

  // prev/next hrefs are stored language-neutral ("/work/...", "/#work"); prefix the locale.
  const localizeHref = (href: string) =>
    href.startsWith("/#") ? `/${l}${href.slice(1)}` : `/${l}${href}`;

  const base = "https://rtp-agency.com";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.title,
      description: c.lead,
      image: `${base}/${l}/work/${c.slug}/opengraph-image`,
      inLanguage: htmlLang[l],
      author: { "@type": "Organization", name: "RTP Agency", url: base },
      publisher: { "@type": "Organization", name: "RTP Agency" },
      mainEntityOfPage: `${base}/${l}/work/${c.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: t.casePage.breadcrumbHome,
          item: `${base}/${l}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: t.casePage.breadcrumbWork,
          item: `${base}/${l}#work`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: c.title,
          item: `${base}/${l}/work/${c.slug}`,
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
      <Nav variant="case" lang={l} />

      <div className="case-detail">
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
                  <strong>{t.casePage.role}</strong> {c.meta.role}
                </span>
                <span className="case-meta-divider">·</span>
                <span className="case-meta-item">
                  <strong>{t.casePage.timeline}</strong> {c.meta.timeline}
                </span>
                <span className="case-meta-divider">·</span>
                <span className="case-meta-item">
                  <strong>{t.casePage.status}</strong> {c.meta.status}
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

          {c.visual && (
            <Reveal>
              <CaseVisual visual={c.visual} lang={l} />
            </Reveal>
          )}

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
            <h2>{t.casePage.ctaHeading}</h2>
            <p>{t.casePage.ctaBody}</p>
            <Link href={`/${l}#contact`} className="btn btn-primary">
              {t.casePage.ctaButton} <span className="arrow">→</span>
            </Link>
          </div>
        </section>

        <div className="case-nav">
          <div className="case-nav-inner">
            <Link href={localizeHref(c.prev.href)} className="case-nav-link">
              {c.prev.label}
            </Link>
            <Link href={localizeHref(c.next.href)} className="case-nav-link">
              {c.next.label}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
