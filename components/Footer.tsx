import { LogoMark } from "@/components/LogoMark";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-brand">
          <div className="foot-logo">
            <LogoMark />
            <span>RTP Agency</span>
          </div>
          <p>
            Автоматизируем рутину бизнеса с помощью ИИ: берём один процесс и
            делаем так, чтобы он работал сам.
          </p>
        </div>

        <div className="foot-col" role="navigation" aria-label="Разделы">
          <h4>Разделы</h4>
          <a href="/#services">Услуги</a>
          <a href="/#work">Кейсы</a>
          <a href="/#testimonials">Клиенты</a>
          <a href="/#contact">Контакты</a>
        </div>

        <div className="foot-col">
          <h4>Связаться</h4>
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
        <span>Бесплатный разбор — 30 минут, без обязательств</span>
      </div>
    </footer>
  );
}
