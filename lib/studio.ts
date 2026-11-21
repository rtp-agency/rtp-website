import type { Locale } from "./locale";

// Copy and case metadata for the Editorial Engineering home page.
// Every number here is taken from the published case studies in lib/cases.ts
// and lib/en/cases.ts; nothing is new. Open factual questions are in REVIEW.

export type Discipline = "automate" | "connect" | "build";

export type CaseMeta = {
  discipline: Discipline[];
  // What kind of work it was, in a few words.
  kind: string;
  // Public client name, or a neutral description when the client is anonymous.
  client: string;
  clientPublic: boolean;
  outcome: { value: string; label: string }[];
};

type NodeLabel = { id: string; label: string; sub: string };

type StudioCopy = {
  nav: { work: string; services: string; approach: string; about: string; cta: string; menu: string; close: string };
  tagline: string;
  hero: {
    index: string;
    eyebrow: string;
    line1: string;
    line2: string;
    lead: string;
    cta: string;
    secondary: string;
    figLabel: string;
    figCaption: string;
    inputs: NodeLabel[];
    outputs: NodeLabel[];
    core: string;
    proofLabel: string;
    proof: { value: string; label: string; source: string; href: string }[];
  };
  capabilities: {
    index: string;
    title: string;
    lead: string;
    items: { n: string; key: Discipline; title: string; body: string; examples: string[] }[];
    note: string;
  };
  work: {
    index: string;
    title: string;
    lead: string;
    read: string;
    allTitle: string;
    alsoTitle: string;
    outcome: string;
    client: string;
    stack: string;
    discipline: Record<Discipline, string>;
  };
  demo: {
    index: string;
    title: string;
    lead: string;
    tag: string;
    disclaimer: string;
    scenariosLabel: string;
    scenarios: { id: string; label: string; detail: string }[];
    nodes: Record<string, string>;
    run: string;
    replay: string;
    approve: string;
    reject: string;
    waiting: string;
    logTitle: string;
    idle: string;
    steps: Record<string, string>;
  };
  approach: {
    index: string;
    title: string;
    steps: { n: string; title: string; body: string }[];
  };
  about: {
    index: string;
    title: string;
    body: string[];
    principles: { title: string; body: string }[];
    quotesTitle: string;
  };
  contact: {
    index: string;
    title: string;
    lead: string;
    emailLabel: string;
    tgLabel: string;
    tgNote: string;
  };
  faqIndex: string;
};

const en: StudioCopy = {
  nav: {
    work: "Work",
    services: "Services",
    approach: "Approach",
    about: "About",
    cta: "Get in touch",
    menu: "Menu",
    close: "Close",
  },
  tagline: "Routine to Profit",
  hero: {
    index: "00 / Studio",
    eyebrow: "Automation & Engineering Studio",
    line1: "Less busywork.",
    line2: "Better business.",
    lead: "We design automations, connect your tools, and build custom systems that turn everyday operations into measurable results.",
    cta: "Tell us what you need",
    secondary: "See our work",
    figLabel: "Systems orchestration",
    figCaption: "Your systems stay where they are. We connect them and coordinate the work between them.",
    inputs: [
      { id: "crm", label: "CRM", sub: "contacts · deals" },
      { id: "email", label: "Email", sub: "requests · replies" },
      { id: "projects", label: "Projects", sub: "tasks · owners" },
      { id: "finance", label: "Finance", sub: "invoices · payments" },
      { id: "docs", label: "Documents", sub: "files · forms" },
      { id: "apps", label: "Custom apps", sub: "internal tools" },
    ],
    outputs: [
      { id: "done", label: "Actions completed", sub: "" },
      { id: "approved", label: "Decisions approved", sub: "" },
      { id: "records", label: "Records updated", sub: "" },
      { id: "reports", label: "Reports delivered", sub: "" },
    ],
    core: "rtp.",
    proofLabel: "Delivered",
    proof: [
      {
        value: "~3 min",
        label: "of automated processing per video, instead of ~1 hour of manual editing",
        source: "Black Camel Productions",
        href: "/work/black-camel",
      },
      {
        value: "99.98%",
        label: "uptime across 142 production bots and 2.4M messages a month",
        source: "Receipts platform",
        href: "/work/telegram-receipts",
      },
    ],
  },
  capabilities: {
    index: "01 / Capabilities",
    title: "Three ways we turn routine into profit.",
    lead: "The categories make the work easier to describe. They are not a limit on what we take on: if it needs careful engineering, ask.",
    items: [
      {
        n: "01",
        key: "automate",
        title: "Automate",
        body: "Remove repetitive work and build workflows you can rely on.",
        examples: [
          "Document processing",
          "Communication routing",
          "AI-assisted operations",
          "Approval workflows",
          "Repetitive task automation",
        ],
      },
      {
        n: "02",
        key: "connect",
        title: "Connect",
        body: "Make disconnected business systems work together.",
        examples: [
          "API integrations",
          "Data synchronization",
          "Cross-system workflows",
          "Middleware",
          "Operational orchestration",
        ],
      },
      {
        n: "03",
        key: "build",
        title: "Build",
        body: "Develop custom tools around the way your business actually operates.",
        examples: [
          "Internal applications",
          "Custom dashboards",
          "Specialized backend services",
          "Business software",
          "Custom integrations and infrastructure",
        ],
      },
    ],
    note: "Also: AI agents and LLM pipelines, video and media processing, Telegram bots, storefronts, self-hosted infrastructure.",
  },
  work: {
    index: "02 / Selected work",
    title: "Real systems, running in production.",
    lead: "Every project below was delivered and is described as it was built. Client names appear only where we have permission.",
    read: "Read the case",
    allTitle: "All case studies",
    alsoTitle: "Also built",
    outcome: "Outcome",
    client: "Client",
    stack: "Stack",
    discipline: { automate: "Automate", connect: "Connect", build: "Build" },
  },
  demo: {
    index: "03 / System flow",
    title: "One request, six systems.",
    lead: "Pick a scenario and watch a request move through a typical set of business tools: validated, recorded, approved when needed, and closed out.",
    tag: "Concept · Interactive demonstration",
    disclaimer: "Sample data. Not connected to any live system or client environment.",
    scenariosLabel: "Scenario",
    scenarios: [
      { id: "auto", label: "Order · $1,200", detail: "Within limits, so it runs end to end" },
      { id: "approval", label: "Order · $18,400", detail: "Above $5,000, so a person approves" },
      { id: "invalid", label: "Order · missing tax ID", detail: "Fails validation, so it goes back" },
    ],
    nodes: {
      inbox: "Email",
      validate: "Validate",
      crm: "CRM",
      finance: "Finance",
      approval: "Approval",
      projects: "Projects",
      log: "Record",
    },
    run: "Run",
    replay: "Run again",
    approve: "Approve",
    reject: "Reject",
    waiting: "Waiting for a manager",
    logTitle: "Event log",
    idle: "Choose a scenario and press Run.",
    steps: {
      received: "Order email received and parsed",
      valid: "Required fields and tax ID checked",
      invalid: "Tax ID missing. Request returned to sender with what's needed",
      crm: "Customer and deal updated in CRM",
      finance: "Draft invoice created in Finance",
      needsApproval: "Amount over $5,000. Approval requested",
      approved: "Approved by manager",
      rejected: "Rejected by manager. Customer notified, deal paused",
      projects: "Fulfilment task assigned in Projects",
      logged: "Result recorded, team notified",
    },
  },
  approach: {
    index: "04 / Approach",
    title: "A clear path from problem to result.",
    steps: [
      { n: "01", title: "Understand", body: "We map the workflow as it really runs, the tools involved and where time is lost." },
      { n: "02", title: "Design", body: "We propose the smallest system that removes the bottleneck, with costs in numbers." },
      { n: "03", title: "Build", body: "We develop, test against your real data and roll out in stages." },
      { n: "04", title: "Support", body: "We keep it running, watch it and improve it as your operations change." },
    ],
  },
  about: {
    index: "05 / About",
    title: "RTP is short for Routine to Profit.",
    body: [
      "We're an independent automation and engineering studio. We take the repetitive, fragile parts of how a business runs and turn them into systems that work reliably.",
      "Sometimes that's a workflow between tools you already use. Sometimes it's an internal application, a backend service or the infrastructure underneath. We pick whatever fits the problem.",
    ],
    principles: [
      { title: "Engineering first", body: "Tested code, monitoring and fallbacks, not a chain of fragile no-code steps." },
      { title: "People stay in control", body: "Where judgment matters, a person approves. Automation does the preparation." },
      { title: "Measured in results", body: "We agree what should get faster or cheaper, then check it after launch." },
    ],
    quotesTitle: "What clients say",
  },
  contact: {
    index: "06 / Let's talk",
    title: "Tell us what's slowing you down.",
    lead: "A few sentences is enough: what your business does, what's taking too long, and which tools are involved.",
    emailLabel: "Email",
    tgLabel: "Telegram",
    tgNote: "optional",
  },
  faqIndex: "07 / Questions",
};

const ru: StudioCopy = {
  nav: {
    work: "Работы",
    services: "Услуги",
    approach: "Подход",
    about: "О студии",
    cta: "Связаться",
    menu: "Меню",
    close: "Закрыть",
  },
  tagline: "Routine to Profit",
  hero: {
    index: "00 / Студия",
    eyebrow: "Студия автоматизации и разработки",
    line1: "Меньше рутины.",
    line2: "Больше бизнеса.",
    lead: "Проектируем автоматизации, связываем ваши инструменты и разрабатываем собственные системы, которые превращают ежедневные операции в измеримый результат.",
    cta: "Расскажите, что нужно",
    secondary: "Наши работы",
    figLabel: "Оркестрация систем",
    figCaption: "Ваши системы остаются на месте. Мы связываем их и координируем работу между ними.",
    inputs: [
      { id: "crm", label: "CRM", sub: "контакты · сделки" },
      { id: "email", label: "Почта", sub: "запросы · ответы" },
      { id: "projects", label: "Проекты", sub: "задачи · исполнители" },
      { id: "finance", label: "Финансы", sub: "счета · оплаты" },
      { id: "docs", label: "Документы", sub: "файлы · формы" },
      { id: "apps", label: "Свои приложения", sub: "внутренние сервисы" },
    ],
    outputs: [
      { id: "done", label: "Действия выполнены", sub: "" },
      { id: "approved", label: "Решения согласованы", sub: "" },
      { id: "records", label: "Данные обновлены", sub: "" },
      { id: "reports", label: "Отчёты доставлены", sub: "" },
    ],
    core: "rtp.",
    proofLabel: "Сделано",
    proof: [
      {
        value: "~3 мин",
        label: "автоматической обработки на видео вместо ~1 часа ручного монтажа",
        source: "Black Camel Productions",
        href: "/work/black-camel",
      },
      {
        value: "99,98%",
        label: "аптайма у 142 ботов в продакшене и 2,4 млн сообщений в месяц",
        source: "Платформа учёта чеков",
        href: "/work/telegram-receipts",
      },
    ],
  },
  capabilities: {
    index: "01 / Возможности",
    title: "Три способа превратить рутину в прибыль.",
    lead: "Категории помогают описать работу, но не ограничивают её. Если задача требует аккуратной инженерии — спрашивайте.",
    items: [
      {
        n: "01",
        key: "automate",
        title: "Автоматизация",
        body: "Убираем повторяющуюся работу и строим процессы, на которые можно положиться.",
        examples: [
          "Обработка документов",
          "Маршрутизация обращений",
          "Операции с помощью ИИ",
          "Согласования",
          "Автоматизация рутинных задач",
        ],
      },
      {
        n: "02",
        key: "connect",
        title: "Интеграция",
        body: "Заставляем разрозненные системы работать вместе.",
        examples: [
          "API-интеграции",
          "Синхронизация данных",
          "Сквозные процессы между системами",
          "Middleware",
          "Оркестрация операций",
        ],
      },
      {
        n: "03",
        key: "build",
        title: "Разработка",
        body: "Создаём инструменты под то, как ваш бизнес работает на самом деле.",
        examples: [
          "Внутренние приложения",
          "Дашборды",
          "Специализированные бэкенд-сервисы",
          "Бизнес-софт",
          "Интеграции и инфраструктура под задачу",
        ],
      },
    ],
    note: "А также: ИИ-агенты и LLM-пайплайны, обработка видео, Telegram-боты, интернет-магазины, собственная инфраструктура.",
  },
  work: {
    index: "02 / Работы",
    title: "Реальные системы, работающие в продакшене.",
    lead: "Каждый проект ниже сдан и описан так, как был сделан. Имена клиентов — только там, где есть их согласие.",
    read: "Читать кейс",
    allTitle: "Все кейсы",
    alsoTitle: "Также делали",
    outcome: "Результат",
    client: "Клиент",
    stack: "Стек",
    discipline: { automate: "Автоматизация", connect: "Интеграция", build: "Разработка" },
  },
  demo: {
    index: "03 / Поток",
    title: "Один запрос, шесть систем.",
    lead: "Выберите сценарий и посмотрите, как запрос проходит через типичный набор бизнес-инструментов: проверка, запись, согласование при необходимости и закрытие.",
    tag: "Концепт · Интерактивная демонстрация",
    disclaimer: "Демо-данные. Не подключено ни к одной живой системе или среде клиента.",
    scenariosLabel: "Сценарий",
    scenarios: [
      { id: "auto", label: "Заказ · $1 200", detail: "В пределах лимита — проходит сам" },
      { id: "approval", label: "Заказ · $18 400", detail: "Выше $5 000 — согласует человек" },
      { id: "invalid", label: "Заказ · нет ИНН", detail: "Не проходит проверку — возвращается" },
    ],
    nodes: {
      inbox: "Почта",
      validate: "Проверка",
      crm: "CRM",
      finance: "Финансы",
      approval: "Согласование",
      projects: "Проекты",
      log: "Запись",
    },
    run: "Запустить",
    replay: "Ещё раз",
    approve: "Согласовать",
    reject: "Отклонить",
    waiting: "Ждём менеджера",
    logTitle: "Журнал событий",
    idle: "Выберите сценарий и нажмите «Запустить».",
    steps: {
      received: "Письмо с заказом получено и разобрано",
      valid: "Обязательные поля и ИНН проверены",
      invalid: "Нет ИНН. Запрос возвращён отправителю со списком недостающего",
      crm: "Клиент и сделка обновлены в CRM",
      finance: "Черновик счёта создан в финансах",
      needsApproval: "Сумма выше $5 000. Запрошено согласование",
      approved: "Согласовано менеджером",
      rejected: "Отклонено менеджером. Клиент уведомлён, сделка на паузе",
      projects: "Задача на исполнение назначена в проектах",
      logged: "Результат записан, команда уведомлена",
    },
  },
  approach: {
    index: "04 / Подход",
    title: "Понятный путь от задачи к результату.",
    steps: [
      { n: "01", title: "Разбираемся", body: "Смотрим, как процесс устроен на самом деле, какие инструменты задействованы и где теряется время." },
      { n: "02", title: "Проектируем", body: "Предлагаем минимальную систему, которая снимает узкое место, — со стоимостью в цифрах." },
      { n: "03", title: "Разрабатываем", body: "Пишем, тестируем на ваших реальных данных и запускаем поэтапно." },
      { n: "04", title: "Поддерживаем", body: "Следим за работой и дорабатываем систему, когда меняются ваши процессы." },
    ],
  },
  about: {
    index: "05 / О студии",
    title: "RTP — это Routine to Profit.",
    body: [
      "Мы независимая студия автоматизации и разработки. Берём повторяющиеся и хрупкие части работы бизнеса и превращаем их в системы, которые работают надёжно.",
      "Иногда это связка между инструментами, которые у вас уже есть. Иногда — внутреннее приложение, бэкенд-сервис или инфраструктура под ним. Выбираем то, что подходит задаче.",
    ],
    principles: [
      { title: "Сначала инженерия", body: "Тесты, мониторинг и запасные сценарии, а не цепочка хрупких no-code шагов." },
      { title: "Контроль за людьми", body: "Где нужно суждение, решает человек. Автоматизация делает подготовку." },
      { title: "Мерим результатом", body: "Договариваемся, что должно стать быстрее или дешевле, и проверяем после запуска." },
    ],
    quotesTitle: "Что говорят клиенты",
  },
  contact: {
    index: "06 / Связаться",
    title: "Расскажите, что вас тормозит.",
    lead: "Достаточно пары предложений: чем занимается бизнес, что занимает слишком много времени и какие инструменты задействованы.",
    emailLabel: "Email",
    tgLabel: "Telegram",
    tgNote: "по желанию",
  },
  faqIndex: "07 / Вопросы",
};

export const studio: Record<Locale, StudioCopy> = { en, ru };

// Per-case presentation data. Discipline tags describe what the work was,
// not what we'd like it to have been.
const caseMetaEn: Record<string, CaseMeta> = {
  "black-camel": {
    discipline: ["automate"],
    kind: "Video production automation",
    client: "Black Camel Productions",
    clientPublic: true,
    outcome: [
      { value: "~3 min", label: "per video, was ~1 h by hand" },
      { value: "25+", label: "videos processed in batches" },
    ],
  },
  "telegram-receipts": {
    discipline: ["build", "automate"],
    kind: "Operations platform · Telegram",
    client: "Financial service, 12 regions",
    clientPublic: false,
    outcome: [
      { value: "142", label: "bots in production" },
      { value: "99.98%", label: "uptime over 90 days" },
    ],
  },
  "threads-content-system": {
    discipline: ["automate"],
    kind: "AI content workflow",
    client: "Independent tutor",
    clientPublic: false,
    outcome: [
      { value: "770K", label: "views on a single post" },
      { value: "1 tap", label: "to approve and publish" },
    ],
  },
  "metra-ai": {
    discipline: ["build"],
    kind: "SaaS · multi-agent LLM",
    client: "Metra AI",
    clientPublic: true,
    outcome: [
      { value: "3 mo", label: "from start to launch" },
      { value: "16", label: "containers in production" },
    ],
  },
  "open-source-lipsync": {
    discipline: ["build"],
    kind: "AI video infrastructure",
    client: "Commercial deployments, unnamed",
    clientPublic: false,
    outcome: [{ value: "99%+", label: "lower cost vs. a proprietary API" }],
  },
  "motion-control": {
    discipline: ["build"],
    kind: "AI video infrastructure",
    client: "Two commercial clients, unnamed",
    clientPublic: false,
    outcome: [{ value: "84%", label: "lower cost at the client's volume" }],
  },
  "video-localization": {
    discipline: ["automate", "connect"],
    kind: "Multi-model media pipeline",
    client: "Client unnamed",
    clientPublic: false,
    outcome: [{ value: "< $1", label: "per 20-minute video" }],
  },
  "sinner-threads": {
    discipline: ["connect", "build"],
    kind: "Storefront · supplier API sync",
    client: "Clothing reseller, Ukraine",
    clientPublic: false,
    outcome: [{ value: "15 min", label: "catalog refresh from the supplier" }],
  },
};

const caseMetaRu: Record<string, CaseMeta> = {
  "black-camel": {
    ...caseMetaEn["black-camel"],
    kind: "Автоматизация видеопродакшена",
    outcome: [
      { value: "~3 мин", label: "на видео, было ~1 ч вручную" },
      { value: "25+", label: "видео обработано пакетами" },
    ],
  },
  "telegram-receipts": {
    ...caseMetaEn["telegram-receipts"],
    kind: "Операционная платформа · Telegram",
    client: "Финансовый сервис, 12 регионов",
    outcome: [
      { value: "142", label: "бота в продакшене" },
      { value: "99,98%", label: "аптайм за 90 дней" },
    ],
  },
  "threads-content-system": {
    ...caseMetaEn["threads-content-system"],
    kind: "ИИ-процесс для контента",
    client: "Частный преподаватель",
    outcome: [
      { value: "770K", label: "просмотров у одного поста" },
      { value: "1 тап", label: "чтобы одобрить и опубликовать" },
    ],
  },
  "metra-ai": {
    ...caseMetaEn["metra-ai"],
    kind: "SaaS · мультиагентные LLM",
    outcome: [
      { value: "3 мес", label: "от старта до запуска" },
      { value: "16", label: "контейнеров в продакшене" },
    ],
  },
  "open-source-lipsync": {
    ...caseMetaEn["open-source-lipsync"],
    kind: "Инфраструктура видео-ИИ",
    client: "Коммерческие внедрения, без имён",
    outcome: [{ value: "99%+", label: "дешевле проприетарного API" }],
  },
  "motion-control": {
    ...caseMetaEn["motion-control"],
    kind: "Инфраструктура видео-ИИ",
    client: "Два коммерческих клиента, без имён",
    outcome: [{ value: "84%", label: "дешевле на объёме клиента" }],
  },
  "video-localization": {
    ...caseMetaEn["video-localization"],
    kind: "Мультимодельный медиа-пайплайн",
    client: "Клиент без имени",
    outcome: [{ value: "< $1", label: "за 20-минутное видео" }],
  },
  "sinner-threads": {
    ...caseMetaEn["sinner-threads"],
    kind: "Магазин · синхронизация с API поставщика",
    client: "Реселлер одежды, Украина",
    outcome: [{ value: "15 мин", label: "обновление каталога у поставщика" }],
  },
};

export const caseMeta: Record<Locale, Record<string, CaseMeta>> = { en: caseMetaEn, ru: caseMetaRu };

// The three cases shown large on the home page; the rest are listed below them.
export const featuredSlugs = ["black-camel", "telegram-receipts", "threads-content-system"];
