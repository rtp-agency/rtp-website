export const stats = [
  { value: 99, prefix: "", suffix: "%+", label: "Максимальное снижение расходов на ИИ" },
  { value: 30, prefix: "$", suffix: "K+", label: "Сэкономили клиентам на ИИ-инфраструктуре за год" },
  { value: 4, prefix: "", suffix: "", label: "ИИ-систем работают в продакшене у клиентов" },
];

// Scrolling credibility strip under the hero.
export const marqueeTech = [
  "Multi-agent LLM",
  "FastAPI",
  "React",
  "ComfyUI",
  "Whisper",
  "Gemini",
  "Vertex AI",
  "Qdrant",
  "Wan 2.2",
  "FFmpeg",
  "Docker",
  "PostgreSQL",
  "Celery",
  "Redis",
];

export type Offer = {
  num: string;
  name: string;
  promise: string;
  problem: string;
  does: string[];
  metric: string;
  metricLabel: string;
  visual: "cost" | "reliability";
};

export const offers: Offer[] = [
  {
    num: "01",
    name: "Оптимизация расходов на ИИ",
    promise: "Резко сокращаем расходы на ИИ — без потери качества.",
    problem: "Большинство команд переплачивают за ИИ в разы и даже не замеряют, где именно.",
    does: [
      "Находим, где в стеке утекают деньги",
      "Меняем дорогие компоненты на дешёвые аналоги",
      "Показываем экономию в цифрах",
    ],
    metric: "80–99%",
    metricLabel: "экономия на ИИ",
    visual: "cost",
  },
  {
    num: "02",
    name: "Надёжность ИИ-систем",
    promise: "Заставляем ИИ работать стабильно там, где он обычно ломается.",
    problem: "В демо всё красиво, а на объёме — галлюцинации и нестабильность.",
    does: [
      "Находим, где ИИ даёт сбои",
      "Разбиваем сложные задачи на чёткие шаги",
      "Добавляем проверки и ограничители",
    ],
    metric: "−90%",
    metricLabel: "меньше ошибок",
    visual: "reliability",
  },
];

export const process = [
  {
    num: "01",
    title: "Аудит",
    icon: "scan" as const,
    body: "Показываем в цифрах, куда уходят деньги на ИИ и где модели дают сбои — ещё до того, как платить за решение.",
  },
  {
    num: "02",
    title: "Архитектура",
    icon: "graph" as const,
    body: "Проектируем самый дешёвый стек, который держит вашу планку качества, и надёжную оркестрацию моделей.",
  },
  {
    num: "03",
    title: "Запуск и результат",
    icon: "check" as const,
    body: "Собираем под ключ, запускаем в продакшен и показываем результат «до/после» — по цене и надёжности.",
  },
];

export type WorkItem = {
  slug: string;
  number: string;
  title: string;
  meta: string[];
  summary: string;
  highlights: { number: string; label: string }[];
  tech: string;
  costBar?: { reduction: string; afterPct: number };
};

// Case studies, ordered cost-first (most relevant proof for the primary visitor first).
export const work: WorkItem[] = [
  {
    slug: "open-source-lipsync",
    number: "01 — Липсинк-система",
    title: "Снижение расходов на 99%+ против премиум видео-ИИ",
    meta: ["RTP Agency", "6+ месяцев в продакшене", "3+ коммерческих внедрений"],
    summary:
      "Заменили премиум видео-ИИ ($3–5/мин) на кастомный ComfyUI-воркфлоу (Infinity Talk + Wan 2.1). Стоимость видео упала с долларов до центов.",
    highlights: [
      { number: "99%+", label: "Снижение расходов против проприетарного API" },
      { number: "6+ мес", label: "Непрерывно работает в продакшене" },
    ],
    tech: "ComfyUI · Infinity Talk · Wan 2.1 · Docker",
    costBar: { reduction: "99%+", afterPct: 2 },
  },
  {
    slug: "motion-control",
    number: "02 — Motion Control",
    title: "Снижение расходов на 84% — и возможности, которых нет у премиум-сервисов",
    meta: ["RTP Agency", "4–5 месяцев в продакшене", "2 коммерческих клиента"],
    summary:
      "Заменили премиум motion-control на кастомный ComfyUI-воркфлоу на Wan 2.2. ~$12 000 экономии в год на объёмах клиента.",
    highlights: [
      { number: "84%", label: "Снижение расходов на объёме клиента" },
      { number: "~$12K", label: "Годовая экономия на клиента" },
    ],
    tech: "ComfyUI · Wan 2.2 · RunningHub · FFmpeg",
    costBar: { reduction: "84%", afterPct: 16 },
  },
  {
    slug: "video-localization",
    number: "03 — Локализация видео",
    title: "Мультимодельный ИИ-пайплайн для локализации видео на потоке",
    meta: ["RTP Agency", "3 месяца в продакшене"],
    summary:
      "Мультимодельный пайплайн: семантические эмбеддинги, транскрибация речи на своём хостинге, переписывание сценария на LLM и многоязычный синтез голоса.",
    highlights: [
      { number: "< $1", label: "За 20-минутное видео" },
      { number: "4+", label: "ИИ-сервисов в одной связке" },
    ],
    tech: "Vertex AI · Whisper · Gemini · Qdrant",
  },
  {
    slug: "metra-ai",
    number: "04 — Metra AI",
    title: "Production-SaaS для автоматизации контента в Telegram",
    meta: ["RTP Agency", "Работает в продакшене", "metra-ai.org"],
    summary:
      "SaaS под ключ для автоматизации контента в Telegram-каналах. Мультиагентная LLM-оркестрация с перекрёстной проверкой, которая отсекает типичные сбои ИИ.",
    highlights: [
      { number: "3 мес", label: "От старта разработки до запуска" },
      { number: "16", label: "Docker-контейнеров в продакшене" },
    ],
    tech: "FastAPI · React · PostgreSQL · Multi-agent LLM",
  },
];

export const additional = [
  {
    title: "Пайплайн AI Reels и бот генерации контента",
    body: "Контент на потоке (100+ видео/час): motion-control воркфлоу и автоматические вариации изображений.",
  },
  {
    title: "Мультитенантная бот-платформа для финтеха",
    body: "Инфраструктура Telegram-ботов со строгой изоляцией клиентов, суб-ботами и мультивалютным учётом.",
  },
  {
    title: "B2B-пайплайн аутрича на ИИ",
    body: "Агрегатор лидов с LLM-оценкой релевантности и персонализированной генерацией сообщений.",
  },
  {
    title: "Инфраструктура Telegram-CRM (YappiGram)",
    body: "Мультиаккаунтная CRM на Telethon/MTProto с ролевым доступом и шифрованным хранением.",
  },
  {
    title: "Инструмент обработки видеоконтента",
    body: "Медиа-пайплайн на FFmpeg с 60+ режимами трансформации для массовой вариации видео.",
  },
  {
    title: "Интеграция приёма платежей",
    body: "Приём платежей через Stripe, PayPal и CryptoCloud с автогенерацией чеков.",
  },
];

export type Testimonial = {
  avatar: string;
  name: string;
  title: string;
  quote: string;
  large?: boolean;
  list?: string[];
  quote2?: string;
  link?: string;
};

export const testimonials: Testimonial[] = [
  {
    avatar: "D",
    name: "Daniel",
    title: "Владелец, агентство цифрового медиа",
    large: true,
    quote:
      "RTP Agency незаменимы, когда нужно собрать сложные ИИ-воркфлоу для картинок и видео. Всегда на связи и решают задачи быстро.",
  },
  {
    avatar: "M",
    name: "Mark",
    title: "Владелец, агентство по производству контента",
    quote:
      "Любой вопрос по ИИ или инженерии — решён. Стабильно находят более дешёвые варианты под наши задачи. Рекомендую.",
  },
  {
    avatar: "A",
    name: "A.",
    title: "Основатель, медиа-агентство",
    quote:
      "Долго искал такое ИИ-решение — и тут появились вы. Сильная команда с чётким видением, всегда на связи и держат слово. С вами легко работать.",
  },
  {
    avatar: "Y",
    name: "Yappi Agency",
    title: "Креативное дизайн-агентство",
    link: "https://yappi-agency.com",
    quote:
      "RTP помогли с кучей задач по автоматизации. Берут инициативу, честно оценивают работу и чинят проблемы даже после сдачи — без доплат. Реально решают задачу, а не просто выставляют счёт.",
  },
];
