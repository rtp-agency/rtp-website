import { display, sans, mono } from "@/lib/fonts";
import { Footer } from "@/components/Footer";
import { SITE_URL, type Locale } from "@/lib/locale";
import { strings } from "@/lib/ui";

// <html>/<body> for a locale. Each route group's layout renders this.
export function RootShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "RTP Agency",
        url: SITE_URL,
        logo: `${SITE_URL}/icon`,
        email: "solutions@rtp-agency.com",
        sameAs: ["https://github.com/rtp-agency", "https://t.me/rtp_agency"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "solutions@rtp-agency.com",
          availableLanguage: ["Russian", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "RTP Agency",
        inLanguage: ["ru", "en"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
  return (
    <html lang={locale} className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
        <a href="#main" className="skip-link">
          {strings[locale].skip}
        </a>
        <div className="site">
          {children}
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}
