import type { Locale } from "./locale";

// Copy and case metadata for the Editorial Engineering pages.
// Every number here is taken from the published case studies (lib/cases.ts,
// lib/en/cases.ts) or the captions of their real screenshots (lib/shots.ts).

export type Discipline = "automate" | "connect" | "build";

// How a project is shown on the home page / work index.
export type CaseVisualKind = "beforeAfter" | "product" | "workflow" | "scale" | "shot" | "cost" | "stages";

export type CaseMeta = {
  discipline: Discipline[];
  // Short project name for cards (the full title lives on the case page).
  name: string;
  // What kind of work it was, in a few words.
  kind: string;
  // One sentence for cards.
  line: string;
  // Public client name, or a neutral description when the client is anonymous.
  client: string;
  clientPublic: boolean;
  outcome: { value: string; label: string }[];
  visual: CaseVisualKind;
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
    layer: string;
    inputs: NodeLabel[];
    outputs: NodeLabel[];
    proofLabel: string;
    proof: { value: string; label: string; source: string; href: string }[];
  };
  capabilities: {
    index: string;
    title: string;
    items: { n: string; key: Discipline; title: string; body: string; link: { text: string; href: string } }[];
    art: {
      automate: { before: string; trigger: string; after: string };
      connect: { apps: string[]; core: string; synced: string };
      build: { app: string; kpis: string[]; table: string };
    };
  };
  work: {
    index: string;
    title: string;
    read: string;
    allLink: string;
    moreTitle: string;
    allTitle: string;
    alsoTitle: string;
    outcome: string;
    client: string;
    stack: string;
    discipline: Record<Discipline, string>;
    fig: { manual: string; manualValue: string; automated: string; perVideo: string; bots: string; regions: string; approved: string };
  };
  interlude: { from: string; to: string; caption: string };
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
    body: string;
    principles: { title: string; body: string }[];
    quoteName: string;
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
  workPage: { title: string; lead: string; metaTitle: string; metaDescription: string };
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
    lead: "We automate operations, connect your tools and build custom software.",
    cta: "Tell us what you need",
    secondary: "See our work",
    figLabel: "Systems orchestration",
    figCaption: "Your systems stay where they are. We connect them and coordinate the work between them.",
    layer: "Orchestration layer",
    inputs: [
      { id: "crm", label: "CRM", sub: "contacts · deals" },
      { id: "email", label: "Email", sub: "requests" },
      { id: "projects", label: "Projects", sub: "tasks" },
      { id: "finance", label: "Finance", sub: "invoices" },
      { id: "docs", label: "Documents", sub: "files · forms" },
      { id: "apps", label: "Custom apps", sub: "internal tools" },
    ],
    outputs: [
      { id: "done", label: "Actions completed", sub: "" },
      { id: "approved", label: "Decisions approved", sub: "" },
      { id: "records", label: "Records updated", sub: "" },
      { id: "reports", label: "Reports delivered", sub: "" },
    ],
    proofLabel: "Delivered",
    proof: [
      { value: "~3 min", label: "per video, was ~1 hour of manual editing", source: "Black Camel", href: "/work/black-camel" },
      { value: "99.98%", label: "uptime across 142 production bots", source: "Receipts platform", href: "/work/telegram-receipts" },
      { value: "770K", label: "views on a single post", source: "Threads Autopilot", href: "/work/threads-content-system" },
    ],
  },
  capabilities: {
    index: "01 / Services",
    title: "Automate. Connect. Build.",
    items: [
      {
        n: "01",
        key: "automate",
        title: "Automate",
        body: "Repetitive work becomes a workflow that runs on its own, with people approving what matters.",
        link: { text: "Black Camel", href: "/work/black-camel" },
      },
      {
        n: "02",
        key: "connect",
        title: "Connect",
        body: "Disconnected tools exchange data and stay in sync through one coordinating layer.",
        link: { text: "Clothing storefront", href: "/work/sinner-threads" },
      },
      {
        n: "03",
        key: "build",
        title: "Build",
        body: "Internal apps, dashboards and backend services shaped around how you actually operate.",
        link: { text: "Metra AI", href: "/work/metra-ai" },
      },
    ],
    art: {
      automate: { before: "Repeated tasks", trigger: "Trigger", after: "Workflow" },
      connect: { apps: ["CRM", "Finance", "Support", "Inventory"], core: "Sync", synced: "synced" },
      build: { app: "Operations", kpis: ["Open orders", "Approved", "Avg. cycle"], table: "Recent activity" },
    },
  },
  work: {
    index: "02 / Selected work",
    title: "Real systems, running in production.",
    read: "Read the case",
    allLink: "All work",
    moreTitle: "More work",
    allTitle: "All case studies",
    alsoTitle: "Also built",
    outcome: "Outcome",
    client: "Client",
    stack: "Stack",
    discipline: { automate: "Automate", connect: "Connect", build: "Build" },
    fig: { manual: "Manual edit", manualValue: "~1 h", automated: "Automated", perVideo: "per video", bots: "bots", regions: "regions", approved: "approved by a person" },
  },
  interlude: { from: "Routine", to: "Profit.", caption: "RTP stands for Routine to Profit." },
  demo: {
    index: "03 / System flow",
    title: "One request, six systems.",
    lead: "Pick a scenario, press Run, and step in when an approval is needed.",
    tag: "Concept · Interactive demonstration",
    disclaimer: "Sample data. Not connected to any live system or client environment.",
    scenariosLabel: "Scenario",
    scenarios: [
      { id: "auto", label: "Order · $1,200", detail: "Within limits, runs end to end" },
      { id: "approval", label: "Order · $18,400", detail: "Over $5,000, needs approval" },
      { id: "invalid", label: "Order · missing tax ID", detail: "Fails validation" },
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
    title: "From problem to result.",
    steps: [
      { n: "01", title: "Understand", body: "Map the workflow as it really runs." },
      { n: "02", title: "Design", body: "The smallest system that removes the bottleneck." },
      { n: "03", title: "Build", body: "Tested on your data, rolled out in stages." },
      { n: "04", title: "Support", body: "Monitored and improved as you change." },
    ],
  },
  about: {
    index: "05 / About",
    title: "An independent studio with engineering discipline.",
    body: "We turn the repetitive, fragile parts of a business into systems that work reliably: sometimes a workflow between your tools, sometimes the software underneath.",
    principles: [
      { title: "Engineering first", body: "Tested code, monitoring, fallbacks." },
      { title: "People in control", body: "A person approves where judgment matters." },
      { title: "Measured results", body: "Agreed up front, checked after launch." },
    ],
    quoteName: "Yappi Agency",
    quotesTitle: "What clients say",
  },
  contact: {
    index: "07 / Let's talk",
    title: "Let's make your systems work better.",
    lead: "Tell us what's slowing you down. A few sentences is enough.",
    emailLabel: "Email",
    tgLabel: "Telegram",
    tgNote: "optional",
  },
  faqIndex: "06 / Questions",
  workPage: {
    title: "Work",
    lead: "Everything we've shipped and can show: case studies, smaller builds, and what clients said about them.",
    metaTitle: "Work — case studies · RTP — Routine to Profit",
    metaDescription:
      "Case studies from RTP: video production automation, a Telegram operations platform, a production SaaS, AI content systems, storefront integrations and more.",
  },
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
    lead: "Автоматизируем операции, связываем ваши инструменты и разрабатываем софт под задачу.",
    cta: "Расскажите, что нужно",
    secondary: "Наши работы",
    figLabel: "Оркестрация систем",
    figCaption: "Ваши системы остаются на месте. Мы связываем их и координируем работу между ними.",
    layer: "Слой оркестрации",
    inputs: [
      { id: "crm", label: "CRM", sub: "контакты · сделки" },
      { id: "email", label: "Почта", sub: "запросы" },
      { id: "projects", label: "Проекты", sub: "задачи" },
      { id: "finance", label: "Финансы", sub: "счета" },
      { id: "docs", label: "Документы", sub: "файлы · формы" },
      { id: "apps", label: "Свои сервисы", sub: "внутренние" },
    ],
    outputs: [
      { id: "done", label: "Действия выполнены", sub: "" },
      { id: "approved", label: "Решения согласованы", sub: "" },
      { id: "records", label: "Данные обновлены", sub: "" },
      { id: "reports", label: "Отчёты доставлены", sub: "" },
    ],
    proofLabel: "Сделано",
    proof: [
      { value: "~3 мин", label: "на видео вместо ~1 часа ручного монтажа", source: "Black Camel", href: "/work/black-camel" },
      { value: "99,98%", label: "аптайм у 142 ботов в продакшене", source: "Платформа чеков", href: "/work/telegram-receipts" },
      { value: "770K", label: "просмотров у одного поста", source: "Threads Autopilot", href: "/work/threads-content-system" },
    ],
  },
  capabilities: {
    index: "01 / Услуги",
    title: "Автоматизируем. Связываем. Разрабатываем.",
    items: [
      {
        n: "01",
        key: "automate",
        title: "Автоматизация",
        body: "Повторяющаяся работа становится процессом, который идёт сам, а важное согласует человек.",
        link: { text: "Black Camel", href: "/work/black-camel" },
      },
      {
        n: "02",
        key: "connect",
        title: "Интеграция",
        body: "Разрозненные инструменты обмениваются данными и остаются синхронными через один слой.",
        link: { text: "Магазин одежды", href: "/work/sinner-threads" },
      },
      {
        n: "03",
        key: "build",
        title: "Разработка",
        body: "Внутренние приложения, дашборды и бэкенд-сервисы под то, как вы работаете на самом деле.",
        link: { text: "Metra AI", href: "/work/metra-ai" },
      },
    ],
    art: {
      automate: { before: "Повторяющиеся задачи", trigger: "Триггер", after: "Процесс" },
      connect: { apps: ["CRM", "Финансы", "Поддержка", "Склад"], core: "Синхр.", synced: "ок" },
      build: { app: "Операции", kpis: ["Открытые заказы", "Согласовано", "Цикл"], table: "Последние события" },
    },
  },
  work: {
    index: "02 / Работы",
    title: "Реальные системы в продакшене.",
    read: "Читать кейс",
    allLink: "Все работы",
    moreTitle: "Ещё работы",
    allTitle: "Все кейсы",
    alsoTitle: "Также делали",
    outcome: "Результат",
    client: "Клиент",
    stack: "Стек",
    discipline: { automate: "Автоматизация", connect: "Интеграция", build: "Разработка" },
    fig: { manual: "Ручной монтаж", manualValue: "~1 ч", automated: "Автоматически", perVideo: "на видео", bots: "ботов", regions: "регионов", approved: "согласует человек" },
  },
  interlude: { from: "Routine", to: "Profit.", caption: "RTP — это Routine to Profit: из рутины в прибыль." },
  demo: {
    index: "03 / Поток",
    title: "Один запрос, шесть систем.",
    lead: "Выберите сценарий, нажмите «Запустить» и вмешайтесь, когда понадобится согласование.",
    tag: "Концепт · Интерактивная демонстрация",
    disclaimer: "Демо-данные. Не подключено ни к одной живой системе или среде клиента.",
    scenariosLabel: "Сценарий",
    scenarios: [
      { id: "auto", label: "Заказ · $1 200", detail: "В пределах лимита, проходит сам" },
      { id: "approval", label: "Заказ · $18 400", detail: "Выше $5 000, нужно согласование" },
      { id: "invalid", label: "Заказ · нет ИНН", detail: "Не проходит проверку" },
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
    title: "От задачи к результату.",
    steps: [
      { n: "01", title: "Разбираемся", body: "Смотрим, как процесс идёт на самом деле." },
      { n: "02", title: "Проектируем", body: "Минимальная система, снимающая узкое место." },
      { n: "03", title: "Разрабатываем", body: "Тестируем на ваших данных, запускаем поэтапно." },
      { n: "04", title: "Поддерживаем", body: "Следим и дорабатываем вместе с вами." },
    ],
  },
  about: {
    index: "05 / О студии",
    title: "Независимая студия с инженерной дисциплиной.",
    body: "Превращаем повторяющиеся и хрупкие части бизнеса в системы, которые работают надёжно: иногда это связка ваших инструментов, иногда — софт под ними.",
    principles: [
      { title: "Сначала инженерия", body: "Тесты, мониторинг, запасные сценарии." },
      { title: "Контроль за людьми", body: "Где нужно суждение, решает человек." },
      { title: "Мерим результатом", body: "Договариваемся заранее, проверяем после." },
    ],
    quoteName: "Yappi Agency",
    quotesTitle: "Что говорят клиенты",
  },
  contact: {
    index: "07 / Связаться",
    title: "Сделаем ваши системы лучше.",
    lead: "Расскажите, что вас тормозит. Достаточно пары предложений.",
    emailLabel: "Email",
    tgLabel: "Telegram",
    tgNote: "по желанию",
  },
  faqIndex: "06 / Вопросы",
  workPage: {
    title: "Работы",
    lead: "Всё, что мы сделали и можем показать: кейсы, проекты поменьше и отзывы клиентов.",
    metaTitle: "Работы — кейсы · RTP — Routine to Profit",
    metaDescription:
      "Кейсы RTP: автоматизация видеопродакшена, операционная платформа в Telegram, production-SaaS, ИИ-контент, интеграции интернет-магазина и другое.",
  },
};

export const studio: Record<Locale, StudioCopy> = { en, ru };

// Per-case presentation data. Discipline tags describe what the work was,
// not what we'd like it to have been.
const caseMetaEn: Record<string, CaseMeta> = {
  "black-camel": {
    discipline: ["automate"],
    name: "Black Camel Productions",
    kind: "Video production automation",
    line: "A pipeline that edits recorded lessons in brand style, with a person approving the cuts.",
    client: "Black Camel Productions",
    clientPublic: true,
    outcome: [
      { value: "~3 min", label: "per video, was ~1 h by hand" },
      { value: "25+", label: "videos processed in batches" },
    ],
    visual: "beforeAfter",
  },
  "metra-ai": {
    discipline: ["build"],
    name: "Metra AI",
    kind: "SaaS · multi-agent LLM",
    line: "A SaaS platform for automating Telegram content, built end to end.",
    client: "Metra AI",
    clientPublic: true,
    outcome: [
      { value: "3 mo", label: "from start to launch" },
      { value: "16", label: "containers in production" },
    ],
    visual: "product",
  },
  "threads-content-system": {
    discipline: ["automate"],
    name: "Threads Autopilot",
    kind: "AI content workflow",
    line: "A content system that writes in the author's voice and publishes after one tap of approval.",
    client: "Independent tutor",
    clientPublic: false,
    outcome: [
      { value: "770K", label: "views on a single post" },
      { value: "2.9M", label: "views in 90 days" },
    ],
    visual: "workflow",
  },
  "telegram-receipts": {
    discipline: ["build", "automate"],
    name: "Receipts platform",
    kind: "Operations platform · Telegram",
    line: "Every team logs receipts in its own bot, a person checks each one, reconciliations build themselves.",
    client: "Financial service, 12 regions",
    clientPublic: false,
    outcome: [
      { value: "142", label: "bots in production" },
      { value: "99.98%", label: "uptime over 90 days" },
    ],
    visual: "scale",
  },
  "open-source-lipsync": {
    discipline: ["build"],
    name: "Lip-sync pipeline",
    kind: "AI video infrastructure",
    line: "Our own lip-sync pipeline in place of a premium video API.",
    client: "Commercial deployments, unnamed",
    clientPublic: false,
    outcome: [{ value: "99%+", label: "lower cost vs. a proprietary API" }],
    visual: "shot",
  },
  "motion-control": {
    discipline: ["build"],
    name: "Motion Control",
    kind: "AI video infrastructure",
    line: "A custom motion-control video workflow instead of a premium service.",
    client: "Two commercial clients, unnamed",
    clientPublic: false,
    outcome: [{ value: "84%", label: "lower cost at the client's volume" }],
    visual: "cost",
  },
  "video-localization": {
    discipline: ["automate", "connect"],
    name: "Video localization",
    kind: "Multi-model media pipeline",
    line: "One video in, dozens of localized versions out.",
    client: "Client unnamed",
    clientPublic: false,
    outcome: [{ value: "< $1", label: "per 20-minute video" }],
    visual: "stages",
  },
  "sinner-threads": {
    discipline: ["connect", "build"],
    name: "Clothing storefront",
    kind: "Storefront · supplier API sync",
    line: "Catalog, sizes and stock sync from the supplier; only what's in stock is shown.",
    client: "Clothing reseller, Ukraine",
    clientPublic: false,
    outcome: [{ value: "15 min", label: "catalog refresh from the supplier" }],
    visual: "shot",
  },
};

const caseMetaRu: Record<string, CaseMeta> = {
  "black-camel": {
    ...caseMetaEn["black-camel"],
    kind: "Автоматизация видеопродакшена",
    line: "Пайплайн, который монтирует записанные уроки в фирменном стиле, а нарезку согласует человек.",
    outcome: [
      { value: "~3 мин", label: "на видео, было ~1 ч вручную" },
      { value: "25+", label: "видео обработано пакетами" },
    ],
  },
  "metra-ai": {
    ...caseMetaEn["metra-ai"],
    kind: "SaaS · мультиагентные LLM",
    line: "SaaS-платформа для автоматизации контента в Telegram, сделанная под ключ.",
    outcome: [
      { value: "3 мес", label: "от старта до запуска" },
      { value: "16", label: "контейнеров в продакшене" },
    ],
  },
  "threads-content-system": {
    ...caseMetaEn["threads-content-system"],
    kind: "ИИ-процесс для контента",
    line: "Контент-система пишет голосом автора и публикует после одного тапа одобрения.",
    client: "Частный преподаватель",
    outcome: [
      { value: "770K", label: "просмотров у одного поста" },
      { value: "2,9 млн", label: "просмотров за 90 дней" },
    ],
  },
  "telegram-receipts": {
    ...caseMetaEn["telegram-receipts"],
    name: "Платформа учёта чеков",
    kind: "Операционная платформа · Telegram",
    line: "У каждой команды свой бот, каждый чек проверяет человек, сверки собираются сами.",
    client: "Финансовый сервис, 12 регионов",
    outcome: [
      { value: "142", label: "бота в продакшене" },
      { value: "99,98%", label: "аптайм за 90 дней" },
    ],
  },
  "open-source-lipsync": {
    ...caseMetaEn["open-source-lipsync"],
    name: "Липсинк-пайплайн",
    kind: "Инфраструктура видео-ИИ",
    line: "Собственный липсинк-пайплайн вместо премиального видео-API.",
    client: "Коммерческие внедрения, без имён",
    outcome: [{ value: "99%+", label: "дешевле проприетарного API" }],
  },
  "motion-control": {
    ...caseMetaEn["motion-control"],
    kind: "Инфраструктура видео-ИИ",
    line: "Собственный motion-control процесс вместо премиального сервиса.",
    client: "Два коммерческих клиента, без имён",
    outcome: [{ value: "84%", label: "дешевле на объёме клиента" }],
  },
  "video-localization": {
    ...caseMetaEn["video-localization"],
    name: "Локализация видео",
    kind: "Мультимодельный медиа-пайплайн",
    line: "На входе одно видео, на выходе десятки локализованных версий.",
    client: "Клиент без имени",
    outcome: [{ value: "< $1", label: "за 20-минутное видео" }],
  },
  "sinner-threads": {
    ...caseMetaEn["sinner-threads"],
    name: "Магазин одежды",
    kind: "Магазин · синхронизация с API поставщика",
    line: "Каталог, размеры и остатки приходят от поставщика; на витрине только то, что есть.",
    client: "Реселлер одежды, Украина",
    outcome: [{ value: "15 мин", label: "обновление каталога у поставщика" }],
  },
};

export const caseMeta: Record<Locale, Record<string, CaseMeta>> = { en: caseMetaEn, ru: caseMetaRu };

// Shown large on the home page, in this order; the rest go in the grid below.
export const featuredSlugs = ["black-camel", "metra-ai", "threads-content-system", "telegram-receipts"];

// The FAQ entries kept on the home page (indexes into homeFaq).
export const homeFaqPick = [0, 2, 4, 5];
