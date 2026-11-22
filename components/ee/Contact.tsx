import { ContactForm } from "@/components/ContactForm";
import type { Locale } from "@/lib/locale";
import { studio } from "@/lib/studio";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

export function ContactSection({ locale }: { locale: Locale }) {
  const c = studio[locale].contact;
  return (
    <section id="contact" className="xcontact" aria-labelledby="contact-title">
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
