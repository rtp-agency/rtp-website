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
    promise: "Резко сокращаем ваши расходы на ИИ — без потери качества.",
    problem: "Большинство команд переплачивают за ИИ в разы и даже не замеряют, где именно.",
    does: [
      "Находим, где в ИИ-стеке утекают деньги",
      "Заменяем дорогие компоненты на дешёвые аналоги",
      "Показываем экономию в конкретных цифрах",
      "Внедряем и продолжаем оптимизировать",
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
      "Добавляем проверки, которые ловят ошибки",
      "Ставим ограничители для стабильного результата",
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
    body: "Разбираемся, куда уходят ваши деньги на ИИ и где модели дают сбои — с конкретными цифрами. Вы видите проблему ещё до того, как платить за её решение.",
  },
  {
    num: "02",
    title: "Архитектура",
    icon: "graph" as const,
    body: "Проектируем самый дешёвый стек, который держит вашу планку качества, и оркестрацию, которая делает модели надёжными.",
  },
  {
    num: "03",
    title: "Запуск и результат",
    icon: "check" as const,
    body: "Собираем всё под ключ, запускаем в продакшен и показываем результат в цифрах «до/после» — по стоимости и надёжности.",
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
      "Заменили премиум-сервис видео-ИИ ($3–5 за минуту) на кастомный ComfyUI-воркфлоу на базе Infinity Talk и Wan 2.1. Стоимость одного видео упала с долларов до центов.",
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
      "Заменили премиум-сервисы motion-control видео на кастомный ComfyUI-воркфлоу на Wan 2.2. Около $12 000 годовой экономии на объёмах клиента.",
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
      "Спроектировали сложный мультимодельный ИИ-пайплайн: генерация семантических эмбеддингов, транскрибация речи на своём хостинге, переписывание сценария на LLM и многоязычный синтез голоса.",
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
      "Построили под ключ SaaS-платформу, которая автоматизирует создание контента для Telegram-каналов. Сделали мультиагентную LLM-оркестрацию с перекрёстной проверкой, которая отсекает типичные сбои ИИ.",
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
    body: "Контент на потоке (цель — 100+ видео в час): motion-control воркфлоу плюс автоматические пайплайны вариаций изображений.",
  },
  {
    title: "Мультитенантная бот-платформа — финансовые сервисы",
    body: "Мультитенантная инфраструктура Telegram-ботов со строгой изоляцией клиентов, системой создания суб-ботов и мультивалютным учётом транзакций.",
  },
  {
    title: "B2B-пайплайн аутрича на ИИ",
    body: "Автоматический агрегатор лидов с оценкой релевантности на LLM и персонализированной генерацией сообщений на ИИ.",
  },
  {
    title: "Инфраструктура Telegram-CRM (YappiGram)",
    body: "Мультиаккаунтная CRM с управлением сессиями на Telethon/MTProto, ролевым доступом и шифрованным хранением сообщений.",
  },
  {
    title: "Инструмент обработки видеоконтента",
    body: "Медиа-пайплайн на FFmpeg с 60+ режимами трансформации для массовой вариации видео.",
  },
  {
    title: "Интеграция приёма платежей для продакшена",
    body: "Мультишлюзовая система выставления счетов (Stripe, PayPal, CryptoCloud) с автогенерацией чеков.",
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
      "Ребята из RTP Agency незаменимы, когда нужно собрать сложные воркфлоу для генерации картинок и видео на ИИ. Всегда быстро на связи, оперативно решают задачи, и работать с ними легко.",
  },
  {
    avatar: "M",
    name: "Mark",
    title: "Владелец, агентство по производству контента",
    quote:
      "Любой вопрос по ИИ или инженерным деталям — решён. RTP стабильно находят заметно более дешёвые варианты под наши ИИ-задачи. Очень рекомендую.",
  },
  {
    avatar: "A",
    name: "A.",
    title: "Основатель, медиа-агентство",
    quote:
      "Долго искал такое ИИ-решение — и тут появились вы. Сильные, с чётким видением, с вами легко и приятно работать. Толковая команда, всегда на связи и держат слово. Спасибо за всё, продолжаем в том же духе.",
  },
  {
    avatar: "Y",
    name: "Yappi Agency",
    title: "Креативное дизайн-агентство",
    link: "https://yappi-agency.com",
    quote:
      "RTP помогли решить кучу задач по автоматизации. Берут инициативу без напоминаний, честно оценивают работу и чинят проблемы даже спустя время после сдачи — без доплат. Они реально решают проблему, а не просто выставляют счёт.",
  },
];
