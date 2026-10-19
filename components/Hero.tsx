import { CountUp } from "./CountUp";
import { stats, home } from "@/lib/site";

const FACTS = ["дешевле ручной работы", "сэкономлено клиентам", "систем в продакшене"];

export function Hero() {
  return (
    <section className="hero3" id="top">
      <svg className="hero3-mark" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="15.6" className="m-disc" />
        <polygon points="16,3.6 27,9.8 27,22.2 16,28.4 5,22.2 5,9.8" className="m-hex" />
        <polyline points="10,13 16,19 22,13" className="m-chev" />
        <polyline points="10,18 16,24 22,18" className="m-chev" />
      </svg>

      <div className="hero3-body">
        <h1>
          {home.heroTitle.pre}
          {home.heroTitle.em}
          {home.heroTitle.post}
        </h1>
        <p className="hero3-sub">
          <span>быстро.</span> <span>надёжно.</span> <span>недорого.</span>
        </p>
        <div className="hero3-actions">
          <a href="#contact" className="pill pill-paper">
            Бесплатный разбор
          </a>
          <a href="#work" className="pill pill-line">
            Смотреть кейсы
          </a>
        </div>
      </div>

      <ul className="hero3-facts">
        {stats.map((s, i) => (
          <li key={s.label}>
            <b>
              <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </b>
            {FACTS[i]}
          </li>
        ))}
      </ul>
    </section>
  );
}
