import { LogoMark } from "@/components/LogoMark";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <LogoMark />
            <span>RTP Agency</span>
          </div>
          <p>
            Автоматизируем рутину бизнеса с помощью ИИ: берём один процесс и
            делаем так, чтобы он работал сам.
          </p>
        </div>

        <div className="footer-col" role="navigation" aria-label="Разделы">
          <h4>Разделы</h4>
          <ul className="footer-links">
            <li>
              <a href="/#services">Услуги</a>
            </li>
            <li>
              <a href="/#work">Кейсы</a>
            </li>
            <li>
              <a href="/#testimonials">Клиенты</a>
            </li>
            <li>
              <a href="/#contact">Контакты</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Связаться</h4>
          <ul className="footer-links">
            <li>
              <a href={TG_URL} target="_blank" rel="noopener noreferrer">
                Telegram @rtp_agency
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/david-chistiy-01a3a2376/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/rtp-agency">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-base">
        <span>© 2026 RTP Agency</span>
        <span>Бесплатный разбор — 30 минут, без обязательств</span>
      </div>
    </footer>
  );
}
