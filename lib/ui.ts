import type { Locale } from "./locale";

// Strings used by components and page shells (everything that is not a content
// collection). Content collections live in lib/*.ts (ru) and lib/en/*.ts (en).

type Dict = {
  skip: string;
  nav: {
    home: string;
    services: string;
    work: string;
    clients: string;
    blog: string;
    contact: string;
    cta: string;
    langSwitch: string;
    langLabel: string;
  };
  hero: {
    sub: [string, string, string];
    facts: [string, string, string];
    cta: string;
    cases: string;
  };
  intro: { scroll: string };
  services: { eyebrow: string; title: string; lead: string; write: string };
  stack: { eyebrow: string; title: string; lead: string; all: string; tabs: string };
  marquee: { title: string; label: string };
  work: { eyebrow: string; title: string; label: string; prev: string; next: string };
  gallery: { open: string; close: string; prev: string; next: string };
  footer: {
    blurb: string;
    sections: string;
    contact: string;
    base: string;
    blog: string;
  };
  faq: { eyebrow: string; title: string; lead: string };
  blog: {
    eyebrow: string;
    title: string;
    lead: string;
    read: string;
    minutes: string;
    all: string;
    toc: string;
    related: string;
    faq: string;
    ctaTitle: string;
    ctaLead: string;
    ctaButton: string;
    by: string;
    updated: string;
    published: string;
    breadcrumbHome: string;
    breadcrumbBlog: string;
    metaTitle: string;
    metaDescription: string;
    org: string;
  };
  partner: {
    breadcrumbHome: string;
    breadcrumbPartners: string;
    back: string;
    eyebrow: string;
    titleSuffix: string;
    goSite: string;
    start: string;
    whatTheyDo: string;
    infra: string;
    infraLead: string;
    infraFor: string;
    why: (n: string) => string;
    useCases: string;
    agents: string;
    pricing: string;
    tiersTitle: string;
    tierCols: [string, string, string];
    payments: string;
    steps: string;
    faq: string;
    ready: (n: string) => string;
    promo: string;
    goTo: (label: string) => string;
    allPartners: string;
  };
  hreflangHome: string;
  partnersLabel: string;
  notFound: { title: string; body: string; home: string };
};

export const strings: Record<Locale, Dict> = {
  ru: {
    skip: "К содержимому",
    nav: {
      home: "Главная",
      services: "Услуги",
      work: "Кейсы",
      clients: "Клиенты",
      blog: "Блог",
      contact: "Контакты",
      cta: "Бесплатный разбор",
      langSwitch: "English",
      langLabel: "Switch to English",
    },
    hero: {
      sub: ["быстро.", "надёжно.", "недорого."],
      facts: ["дешевле ручной работы", "сэкономлено клиентам", "систем в продакшене"],
      cta: "Бесплатный разбор",
      cases: "Смотреть кейсы",
    },
    intro: { scroll: "СКРОЛЛ" },
    services: {
      eyebrow: "Услуги",
      title: "Разработка под задачу.",
      lead: "Не «ИИ-консалтинг» вообще, а конкретные вещи, которые собираем под ключ.",
      write: "Написать по услуге",
    },
    stack: {
      eyebrow: "Интеграции",
      title: "Работаем с тем, что у вас уже есть.",
      lead: "Подключаем ИИ к вашим сервисам, мессенджерам и данным. Ничего переносить не нужно.",
      all: "Все",
      tabs: "Категории интеграций",
    },
    marquee: {
      title: "С чем мы работаем",
      label: "Технологии и сервисы, с которыми мы работаем",
    },
    work: {
      eyebrow: "Кейсы",
      title: "Что мы уже автоматизировали.",
      label: "Кейсы",
      prev: "Предыдущий кейс",
      next: "Следующий кейс",
    },
    gallery: { open: "Открыть", close: "Закрыть", prev: "Предыдущий", next: "Следующий" },
    footer: {
      blurb:
        "Автоматизируем рутину бизнеса с помощью ИИ: берём один процесс и делаем так, чтобы он работал сам.",
      sections: "Разделы",
      contact: "Связаться",
      base: "Бесплатный разбор — 30 минут, без обязательств",
      blog: "Блог",
    },
    faq: {
      eyebrow: "Вопросы",
      title: "Частые вопросы.",
      lead: "Коротко о том, как мы работаем.",
    },
    blog: {
      eyebrow: "Блог",
      title: "Автоматизация без лишних слов.",
      lead: "Практические разборы: что автоматизировать, как это устроено и сколько человеческих часов это освобождает.",
      read: "Читать",
      minutes: "мин чтения",
      all: "Все статьи",
      toc: "В статье",
      related: "Читайте также",
      faq: "Частые вопросы",
      ctaTitle: "Разберём ваш процесс бесплатно.",
      ctaLead:
        "30 минут: найдём, что выгоднее отдать ИИ первым, и посчитаем экономию в цифрах.",
      ctaButton: "Записаться на разбор",
      by: "Команда RTP Agency",
      updated: "Обновлено",
      published: "Опубликовано",
      breadcrumbHome: "Главная",
      breadcrumbBlog: "Блог",
      metaTitle: "Блог об автоматизации бизнеса с помощью ИИ — RTP Agency",
      metaDescription:
        "Практические статьи об автоматизации бизнес-процессов с помощью ИИ: заявки, ответы клиентам, контент, видео, интеграции с CRM и Telegram.",
      org: "RTP Agency",
    },
    partner: {
      breadcrumbHome: "Главная",
      breadcrumbPartners: "Партнёры",
      back: "← Партнёры",
      eyebrow: "Партнёр RTP",
      titleSuffix: "Партнёр RTP Agency",
      goSite: "Перейти на сайт",
      start: "Начать",
      whatTheyDo: "Чем занимаются",
      infra: "Как устроена инфраструктура",
      infraLead:
        "Никаких арендованных пулов и общих IP с чужими — вот что реально стоит за сетью:",
      infraFor: "Для чего",
      why: (n) => `Почему выбирают ${n}`,
      useCases: "Под какие задачи",
      agents: "Создано для AI-агентов",
      pricing: "Цены и биллинг",
      tiersTitle: "Бесплатные параллельные подключения растут с объёмом",
      tierCols: ["Тир", "Куплено трафика", "Бесплатных подключений"],
      payments: "Оплата и безопасность",
      steps: "С чего начать",
      faq: "Частые вопросы",
      ready: (n) => `Готовы попробовать ${n}?`,
      promo: "Промокод",
      goTo: (l) => `Перейти на ${l}`,
      allPartners: "← Все партнёры",
    },
    hreflangHome: "Главная",
    partnersLabel: "Партнёры",
    notFound: {
      title: "Страница не найдена.",
      body: "Похоже, страница переехала или никогда не существовала.",
      home: "На главную",
    },
  },
  en: {
    skip: "Skip to content",
    nav: {
      home: "Home",
      services: "Services",
      work: "Cases",
      clients: "Clients",
      blog: "Blog",
      contact: "Contact",
      cta: "Free teardown",
      langSwitch: "Русский",
      langLabel: "Переключить на русский",
    },
    hero: {
      sub: ["fast.", "reliable.", "affordable."],
      facts: ["cheaper than manual work", "saved for clients", "systems in production"],
      cta: "Free teardown",
      cases: "See cases",
    },
    intro: { scroll: "SCROLL" },
    services: {
      eyebrow: "Services",
      title: "Built around your task.",
      lead: "Not generic “AI consulting”, but specific things we build end to end.",
      write: "Ask about this service",
    },
    stack: {
      eyebrow: "Integrations",
      title: "We work with what you already use.",
      lead: "We connect AI to your services, messengers and data. Nothing has to be migrated.",
      all: "All",
      tabs: "Integration categories",
    },
    marquee: {
      title: "What we work with",
      label: "Technologies and services we work with",
    },
    work: {
      eyebrow: "Cases",
      title: "What we have already automated.",
      label: "Cases",
      prev: "Previous case",
      next: "Next case",
    },
    gallery: { open: "Open", close: "Close", prev: "Previous", next: "Next" },
    footer: {
      blurb:
        "We automate the routine of your business with AI: we take one process and make it run on its own.",
      sections: "Sections",
      contact: "Contact",
      base: "Free teardown: 30 minutes, no strings attached",
      blog: "Blog",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions.",
      lead: "A short summary of how we work.",
    },
    blog: {
      eyebrow: "Blog",
      title: "Automation, no filler.",
      lead: "Practical write-ups: what to automate, how it works and how many human hours it frees up.",
      read: "Read",
      minutes: "min read",
      all: "All articles",
      toc: "In this article",
      related: "Keep reading",
      faq: "FAQ",
      ctaTitle: "We will review your process for free.",
      ctaLead:
        "30 minutes: we find what is worth handing to AI first and put the savings in numbers.",
      ctaButton: "Book a teardown",
      by: "RTP Agency team",
      updated: "Updated",
      published: "Published",
      breadcrumbHome: "Home",
      breadcrumbBlog: "Blog",
      metaTitle: "Blog on AI business process automation — RTP Agency",
      metaDescription:
        "Practical articles on automating business processes with AI: lead handling, customer replies, content, video, CRM and Telegram integrations.",
      org: "RTP Agency",
    },
    partner: {
      breadcrumbHome: "Home",
      breadcrumbPartners: "Partners",
      back: "← Partners",
      eyebrow: "RTP partner",
      titleSuffix: "RTP Agency partner",
      goSite: "Visit website",
      start: "Get started",
      whatTheyDo: "What they do",
      infra: "How the infrastructure works",
      infraLead: "No rented pools and no shared IPs with strangers. This is what is behind the network:",
      infraFor: "Used for",
      why: (n) => `Why choose ${n}`,
      useCases: "Use cases",
      agents: "Built for AI agents",
      pricing: "Pricing and billing",
      tiersTitle: "Free concurrent connections grow with volume",
      tierCols: ["Tier", "Traffic purchased", "Free connections"],
      payments: "Payments and security",
      steps: "How to start",
      faq: "FAQ",
      ready: (n) => `Ready to try ${n}?`,
      promo: "Promo code",
      goTo: (l) => `Go to ${l}`,
      allPartners: "← All partners",
    },
    hreflangHome: "Home",
    partnersLabel: "Partners",
    notFound: {
      title: "Page not found.",
      body: "The page may have moved or never existed.",
      home: "Back to home",
    },
  },
};

export type HomeFaq = { q: string; a: string }[];

export const homeFaq: Record<Locale, HomeFaq> = {
  ru: [
    {
      q: "Что вы автоматизируете?",
      a: "Повторяющиеся процессы, где команда теряет время: ответы клиентам и обработка заявок, контент, документы и отчёты, видео на потоке, учёт и сверки. Берём один конкретный процесс и делаем так, чтобы он работал сам.",
    },
    {
      q: "Как проходит работа?",
      a: "Три шага: бесплатный разбор (находим процесс и считаем экономию), решение (настраиваем под ваш процесс), запуск и поддержка. Все решения подключаются к вашим текущим инструментам.",
    },
    {
      q: "Сколько это стоит?",
      a: "Стоимость зависит от процесса, поэтому мы считаем её на бесплатном 30-минутном разборе, когда понятен объём работы и ожидаемая экономия.",
    },
    {
      q: "ИИ может ошибаться?",
      a: "Да. Поэтому в наших решениях есть проверки, ограничения на самостоятельные действия, а важные решения подтверждает человек. Сложное всегда передаётся людям.",
    },
    {
      q: "Нужно ли менять наши инструменты?",
      a: "Нет. Мы подключаемся к тому, чем вы уже пользуетесь: Telegram, CRM, таблицам, почте, платёжным сервисам. Часто интерфейсом становится сам Telegram.",
    },
    {
      q: "Сколько времени занимает запуск?",
      a: "Зависит от процесса: простой сценарий можно собрать за считанные дни, сложные системы занимают недели. Точные сроки называем после разбора.",
    },
  ],
  en: [
    {
      q: "What do you automate?",
      a: "Repetitive processes where a team loses time: customer replies and lead handling, content, documents and reports, video at scale, accounting and reconciliations. We take one specific process and make it run on its own.",
    },
    {
      q: "How does the work go?",
      a: "Three steps: a free teardown (we find the process and calculate the savings), the solution (set up around your process), then launch and support. Everything plugs into your current tools.",
    },
    {
      q: "How much does it cost?",
      a: "It depends on the process, so we calculate it during the free 30-minute teardown, when the scope and expected savings are clear.",
    },
    {
      q: "Can AI make mistakes?",
      a: "Yes. That is why our solutions have checks, limits on what AI can do on its own, and a human approving important decisions. Anything complex goes to people.",
    },
    {
      q: "Do we have to change our tools?",
      a: "No. We connect to what you already use: Telegram, CRM, spreadsheets, email, payment services. Often Telegram itself becomes the interface.",
    },
    {
      q: "How long does launch take?",
      a: "It depends on the process: a simple scenario can be built in a matter of days, complex systems take weeks. We give exact timelines after the teardown.",
    },
  ],
};
