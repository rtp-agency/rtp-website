import { Wordmark } from "@/components/Wordmark";
import { lp, type Locale } from "@/lib/locale";
import { strings } from "@/lib/ui";
import { studio } from "@/lib/studio";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

export function Footer({ locale }: { locale: Locale }) {
  const t = strings[locale];
  const s = studio[locale];
  return (
    <footer className="xfoot">
      <div className="xfoot-in">
        <div className="xfoot-top">
          <div className="xfoot-brand">
            <Wordmark title="rtp." />
            <p>
              {s.tagline}. {s.hero.eyebrow}. {s.hero.lead}
            </p>
          </div>

          <nav className="xfoot-col" aria-label={t.footer.sections}>
            <h2 className="xlabel">{t.footer.sections}</h2>
            <ul>
              <li><a href={lp(locale, "/work")}>{s.nav.work}</a></li>
              <li><a href={lp(locale, "/#services")}>{s.nav.services}</a></li>
              <li><a href={lp(locale, "/#approach")}>{s.nav.approach}</a></li>
              <li><a href={lp(locale, "/#about")}>{s.nav.about}</a></li>
              <li><a href={lp(locale, "/blog")}>{t.footer.blog}</a></li>
            </ul>
          </nav>

          <div className="xfoot-col">
            <h2 className="xlabel">{t.footer.contact}</h2>
            <ul>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href={TG_URL} target="_blank" rel="noopener noreferrer">Telegram @rtp_agency</a></li>
            </ul>
          </div>

          <div className="xfoot-col">
            <h2 className="xlabel">{locale === "ru" ? "Ещё" : "Elsewhere"}</h2>
            <ul>
              <li><a href="https://github.com/rtp-agency" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li>
                <a href="https://www.linkedin.com/in/david-chistiy-01a3a2376/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={lp(locale === "ru" ? "en" : "ru", "/")} hrefLang={locale === "ru" ? "en" : "ru"}>
                  {locale === "ru" ? "English" : "Русский"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="xfoot-base mono">
          <span>© 2026 RTP — Routine to Profit</span>
          <span>{s.hero.eyebrow}</span>
        </div>
      </div>
    </footer>
  );
}
