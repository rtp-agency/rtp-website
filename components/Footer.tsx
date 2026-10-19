import { LogoMark } from "@/components/LogoMark";
import { lp, type Locale } from "@/lib/locale";
import { strings } from "@/lib/ui";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

export function Footer({ locale }: { locale: Locale }) {
  const t = strings[locale];
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-brand">
          <div className="foot-logo">
            <LogoMark />
            <span>RTP Agency</span>
          </div>
          <p>{t.footer.blurb}</p>
        </div>

        <div className="foot-col" role="navigation" aria-label={t.footer.sections}>
          <h4>{t.footer.sections}</h4>
          <a href={lp(locale, "/#services")}>{t.nav.services}</a>
          <a href={lp(locale, "/#work")}>{t.nav.work}</a>
          <a href={lp(locale, "/#testimonials")}>{t.nav.clients}</a>
          <a href={lp(locale, "/blog")}>{t.footer.blog}</a>
          <a href={lp(locale, "/#contact")}>{t.nav.contact}</a>
        </div>

        <div className="foot-col">
          <h4>{t.footer.contact}</h4>
          <a href={TG_URL} target="_blank" rel="noopener noreferrer">
            Telegram @rtp_agency
          </a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href="https://www.linkedin.com/in/david-chistiy-01a3a2376/">LinkedIn</a>
          <a href="https://github.com/rtp-agency">GitHub</a>
        </div>
      </div>
      <div className="foot-base">
        <span>© 2026 RTP Agency</span>
        <span>{t.footer.base}</span>
      </div>
    </footer>
  );
}
