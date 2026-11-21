// Single-locale site (Russian). Shared chrome / UI strings, page metadata,
// and JSON-LD live here as plain constants — no locale routing.

export const ui = {
  nav: {
    services: "Услуги",
    work: "Кейсы",
    testimonials: "Клиенты",
    contact: "Контакты",
    back: "← Все работы",
  },
  readCase: "Читать кейс",
  step: "ШАГ",
  toCosts: "к расходам",
  stickyCta: "Написать нам",
  form: {
    name: "Ваше имя",
    business: "Бизнес / ниша",
    message: "Какой процесс хотите автоматизировать?",
    contact: "Контакт: Telegram / email / телефон",
    send: "Отправить",
    sending: "Отправляем…",
    sent: "Отправлено ✓",
    ok: "Спасибо — скоро ответим.",
    error: "Что-то пошло не так. Напишите напрямую на ",
    subject: "Новая заявка (RTP Agency)",
  },
  notFound: {
    title: "Страница не найдена.",
    body: "Похоже, страница переехала или никогда не существовала.",
    home: "На главную",
  },
  casePage: {
    titleSuffix: "— Кейс · RTP",
    role: "Роль:",
    timeline: "Сроки:",
    status: "Статус:",
    ctaHeading: "Похожая задача?",
    ctaBody: "Расскажите, что вас тормозит. Достаточно пары предложений.",
    ctaButton: "Обсудить",
    breadcrumbHome: "Главная",
    breadcrumbWork: "Работы",
    keywords: [
      "автоматизация бизнес-процессов",
      "ИИ для бизнеса",
      "автоматизация заявок",
      "кейс автоматизации",
      "production ИИ",
    ],
  },
} as const;

// Page-level metadata (title / description / keywords / OG).
export const meta = {
  title: "RTP — Routine to Profit · Студия автоматизации и разработки",
  description:
    "RTP — независимая студия автоматизации и разработки. Проектируем автоматизации, связываем бизнес-системы и разрабатываем собственный софт, чтобы операции работали лучше.",
  keywords: [
    "автоматизация бизнес-процессов",
    "интеграция систем",
    "API-интеграции",
    "разработка программного обеспечения на заказ",
    "автоматизация процессов",
    "внутренние инструменты",
    "ИИ для бизнеса",
    "студия автоматизации",
    "RTP",
    "Routine to Profit",
  ],
  ogTitle: "RTP — Меньше рутины. Больше бизнеса.",
  ogDescription:
    "Проектируем автоматизации, связываем ваши инструменты и разрабатываем собственные системы, которые превращают ежедневные операции в измеримый результат.",
  twitterDescription:
    "Студия автоматизации и разработки: автоматизации, интеграции и собственный софт.",
  ogAlt: "RTP — Routine to Profit. Меньше рутины. Больше бизнеса.",
  ogHeroLine1: "Меньше рутины.",
  ogHeroLine2: "Больше бизнеса.",
  ogTagline: "Студия автоматизации и разработки",
  ogCta: "Расскажите, что нужно →",
  caseOgTagline: "Кейс · RTP — Routine to Profit",
  caseFallback: "Кейс",
} as const;

// JSON-LD structured data.
export const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.rtp-agency.com/#service",
  name: "RTP — Routine to Profit",
  alternateName: ["RTP", "RTP Agency"],
  url: "https://www.rtp-agency.com",
  inLanguage: "ru",
  description:
    "Независимая студия автоматизации и разработки: автоматизация бизнес-процессов, интеграции между системами, разработка софта, внутренние приложения и ИИ-процессы.",
  image: "https://www.rtp-agency.com/opengraph-image",
  areaServed: "Worldwide",
  sameAs: ["https://github.com/rtp-agency"],
  knowsAbout: [
    "автоматизация бизнес-процессов",
    "интеграция систем",
    "API-интеграции",
    "middleware",
    "разработка программного обеспечения",
    "внутренние приложения",
    "дашборды",
    "ИИ-процессы",
    "обработка документов",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Автоматизация",
          description:
            "Убираем повторяющуюся работу и строим надёжные процессы: обработка документов, маршрутизация обращений, операции с ИИ, согласования.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Интеграция",
          description:
            "Заставляем разрозненные системы работать вместе: API-интеграции, синхронизация данных, сквозные процессы, middleware.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Разработка",
          description:
            "Инструменты под то, как работает бизнес: внутренние приложения, дашборды, бэкенд-сервисы, бизнес-софт.",
        },
      },
    ],
  },
};
