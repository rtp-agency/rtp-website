// Single-locale site (Russian). Shared chrome / UI strings, page metadata,
// and JSON-LD live here as plain constants — no locale routing.

export const ui = {
  nav: {
    services: "Услуги",
    work: "Кейсы",
    testimonials: "Клиенты",
    contact: "Контакты",
    back: "← Назад к кейсам",
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
    titleSuffix: "— Кейс · RTP Agency",
    role: "Роль:",
    timeline: "Сроки:",
    status: "Статус:",
    ctaHeading: "Похожая задача?",
    ctaBody: "Расскажите, что вы строите — будем рады обсудить.",
    ctaButton: "Обсудить",
    breadcrumbHome: "Главная",
    breadcrumbWork: "Кейсы",
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
  title: "RTP Agency — автоматизация бизнес-процессов с помощью ИИ",
  description:
    "Автоматизируем рутину вашего бизнеса: заявки, ответы клиентам, контент, документы, отчёты. Надёжно, недорого и в привычных вам инструментах. Бесплатный разбор.",
  keywords: [
    "автоматизация бизнес-процессов",
    "ИИ для бизнеса",
    "автоматизация заявок",
    "чат-бот поддержки",
    "автоматизация контента",
    "ИИ-помощник",
    "автоматизация для малого бизнеса",
    "Telegram-бот для бизнеса",
    "RTP Agency",
  ],
  ogTitle: "RTP Agency — автоматизация бизнес-процессов с помощью ИИ",
  ogDescription:
    "Автоматизируем рутину вашего бизнеса: заявки, ответы клиентам, контент, документы, отчёты. Надёжно, недорого и в привычных вам инструментах.",
  twitterDescription:
    "Автоматизируем рутину вашего бизнеса с помощью ИИ. Бесплатный разбор.",
  ogAlt: "RTP Agency — автоматизация бизнес-процессов с помощью ИИ",
  ogHeroLine1: "Автоматизируем рутину",
  ogHeroLine2: "бизнеса с помощью ИИ.",
  ogTagline: "Автоматизация бизнес-процессов с помощью ИИ",
  ogCta: "Бесплатный разбор →",
  caseOgTagline: "Автоматизация бизнес-процессов",
  caseFallback: "Кейс",
} as const;

// JSON-LD structured data.
export const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://rtp-agency.com/#service",
  name: "RTP Agency — автоматизация бизнес-процессов с помощью ИИ",
  url: "https://rtp-agency.com",
  description:
    "Автоматизируем рутинные бизнес-процессы с помощью ИИ: обработка заявок, ответы клиентам, контент, документы и отчёты. Надёжно, недорого и в привычных инструментах.",
  image: "https://rtp-agency.com/opengraph-image",
  priceRange: "$$",
  areaServed: "Worldwide",
  sameAs: ["https://github.com/rtp-agency"],
  knowsAbout: [
    "автоматизация бизнес-процессов",
    "ИИ для бизнеса",
    "автоматизация заявок",
    "чат-бот поддержки",
    "автоматизация контента",
    "ИИ-помощник",
    "Telegram-бот для бизнеса",
  ],
  serviceType: [
    "Автоматизация бизнес-процессов",
    "Чат-бот поддержки клиентов",
    "Автоматизация контента",
    "ИИ-помощник для бизнеса",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги автоматизации",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Общение с клиентами и обработка заявок",
          description:
            "ИИ-помощник отвечает клиентам 24/7, принимает и квалифицирует заявки и передаёт менеджеру только то, что требует человека.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Контент и рутина на потоке",
          description:
            "Генерируем посты, описания товаров и рассылки под ваш стиль, готовим типовые документы и отчёты автоматически — с проверкой качества.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ИИ-помощник, подключённый к вашим системам",
          description:
            "Цифровой сотрудник, подключённый к вашей CRM, таблицам и Telegram, который сам готовит ответы и документы и выполняет действия.",
        },
      },
    ],
  },
};
