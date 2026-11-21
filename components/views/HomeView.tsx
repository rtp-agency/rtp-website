import { Nav } from "@/components/Nav";
import { Rise } from "@/components/Rise";
import { SystemDemo } from "@/components/ee/SystemDemo";
import { ContactSection } from "@/components/ee/Contact";
import {
  HeroSection,
  CapabilitiesSection,
  WorkSection,
  ApproachSection,
  AboutSection,
  FaqSection,
} from "@/components/ee/Sections";
import { getContent } from "@/lib/content";
import { lp, type Locale } from "@/lib/locale";
import { studio } from "@/lib/studio";

export function HomeView({ locale }: { locale: Locale }) {
  const C = getContent(locale);
  const d = studio[locale].demo;
  const alt = lp(locale === "ru" ? "en" : "ru", "/");

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: C.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(C.jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Nav locale={locale} variant="home" altHref={alt} />

      <main id="main" className="xframe">
        <HeroSection locale={locale} />
        <CapabilitiesSection locale={locale} />
        <WorkSection C={C} />

        <section id="system" className="xsec" aria-labelledby="system-title">
          <span className="xcross xcross-l" aria-hidden="true" />
          <span className="xcross xcross-r" aria-hidden="true" />
          <div className="xwrap">
            <Rise className="xsec-head">
              <p className="xlabel">{d.index}</p>
              <h2 id="system-title">{d.title}</h2>
              <p>{d.lead}</p>
            </Rise>
            <SystemDemo locale={locale} />
            <div className="xdemo-foot">
              <span className="xlabel">{d.tag}</span>
              <span>{d.disclaimer}</span>
            </div>
          </div>
        </section>

        <ApproachSection locale={locale} />
        <AboutSection C={C} />
        <FaqSection C={C} />
      </main>
      <ContactSection locale={locale} />
    </>
  );
}
