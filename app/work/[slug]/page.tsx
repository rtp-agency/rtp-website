import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CaseVisual } from "@/components/CaseVisual";
import { cases, getCase, type Block } from "@/lib/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return {
    title: `${c.title} — Кейс · RTP Agency`,
    description: c.lead,
    keywords: [
      "оптимизация расходов на ИИ",
      "снижение расходов на ИИ",
      "внедрение ИИ",
      "кейс ИИ-консалтинга",
      "production ИИ",
    ],
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: {
      title: c.title,
      description: c.lead,
      type: "article",
      url: `https://rtp-agency.com/work/${c.slug}`,
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const base = "https://rtp-agency.com";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.title,
      description: c.lead,
      image: `${base}/work/${c.slug}/opengraph-image`,
      inLanguage: "ru",
      author: { "@type": "Organization", name: "RTP Agency", url: base },
      publisher: { "@type": "Organization", name: "RTP Agency" },
      mainEntityOfPage: `${base}/work/${c.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: base },
        { "@type": "ListItem", position: 2, name: "Кейсы", item: `${base}/#work` },
        {
          "@type": "ListItem",
          position: 3,
          name: c.title,
          item: `${base}/work/${c.slug}`,
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
      <Nav variant="case" />

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
                  <strong>Роль:</strong> {c.meta.role}
                </span>
                <span className="case-meta-divider">·</span>
                <span className="case-meta-item">
                  <strong>Сроки:</strong> {c.meta.timeline}
                </span>
                <span className="case-meta-divider">·</span>
                <span className="case-meta-item">
                  <strong>Статус:</strong> {c.meta.status}
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
              <CaseVisual visual={c.visual} />
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
            <h2>Похожая задача?</h2>
            <p>Расскажите, что вы строите — будем рады обсудить.</p>
            <Link href="/#contact" className="btn btn-primary">
              Обсудить <span className="arrow">→</span>
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
