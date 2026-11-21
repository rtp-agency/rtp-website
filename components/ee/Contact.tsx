import { ContactForm } from "@/components/ContactForm";
import type { Locale } from "@/lib/locale";
import { studio } from "@/lib/studio";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

export function ContactSection({ locale }: { locale: Locale }) {
  const c = studio[locale].contact;
  return (
    <section id="contact" className="xcontact" aria-labelledby="contact-title">
      <svg className="xcontact-lines" viewBox="0 0 1440 640" preserveAspectRatio="none" aria-hidden="true">
        <path d="M760 640C900 420 1080 300 1440 250" />
        <path d="M900 640C1010 470 1160 380 1440 360" />
        <path d="M0 120H1440" />
        <path d="M720 0V640" />
      </svg>
      <div className="xcontact-in">
        <div>
          <p className="xlabel">{c.index}</p>
          <h2 id="contact-title">{c.title}</h2>
          <p className="xcontact-lead">{c.lead}</p>
          <ul className="xcontact-direct">
            <li>
              <span className="mono">{c.emailLabel}</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <span className="mono">{c.tgLabel}</span>
              <span>
                <a href={TG_URL} target="_blank" rel="noopener noreferrer">
                  @rtp_agency
                </a>
                <small>{c.tgNote}</small>
              </span>
            </li>
          </ul>
        </div>
        <ContactForm locale={locale} />
      </div>
    </section>
  );
}
