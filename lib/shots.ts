// Showcase screenshots per case. Files live in /public/work/<folder>/.
// Client-identifying details (names, avatars, handles, links) are blurred.

export type Shot = {
  src: string;
  w: number;
  h: number;
  alt: string;
  caption?: string;
  // browser = window chrome (dashboards, tools); card = bare rounded frame (social posts)
  frame: "browser" | "card";
  chrome?: string; // label shown in the browser bar
};

export type ShotGroup = {
  title: string;
  lead?: string;
  layout: "stack" | "grid";
  shots: Shot[];
};

export type CaseShots = { cover: Shot; groups: ShotGroup[] };

const threadsDashboard: Shot = {
  src: "/work/threads/dashboard.jpg",
  w: 1280,
  h: 662,
  alt: "Дашборд Threads Autopilot: 2,9 млн просмотров за 90 дней",
  caption: "Дашборд клиента за 90 дней: 2,9 млн просмотров, +4 687 подписчиков",
  frame: "browser",
  chrome: "Threads Autopilot",
};

export const caseShots: Record<string, CaseShots> = {
  "threads-content-system": {
    cover: threadsDashboard,
    groups: [
      {
        title: "Система изнутри",
        lead: "Весь цикл — от новостной ленты до замера каждого поста — на одном экране.",
        layout: "stack",
        shots: [
          {
            src: "/work/threads/pipeline.jpg",
            w: 1280,
            h: 643,
            alt: "Конвейер контента: 8 этапов от ленты новостей до измерения поста",
            caption: "Конвейер: 8 этапов, каждый пост одобряется человеком в Telegram",
            frame: "browser",
            chrome: "Content pipeline",
          },
        ],
      },
      {
        title: "Что получилось в ленте",
        lead: "Реальные посты с аккаунта клиента. Публикуем с его разрешения, личные данные скрыты.",
        layout: "grid",
        shots: [
          {
            src: "/work/threads/post-viral.jpg",
            w: 1320,
            h: 1135,
            alt: "Пост с 770 тысячами просмотров и 36,5 тысячами лайков",
            caption: "770K просмотров · 36,5K лайков · 546 ответов",
            frame: "card",
          },
          {
            src: "/work/threads/post-1.jpg",
            w: 1320,
            h: 1299,
            alt: "Пост с 10,3 тысячами лайков",
            caption: "10,3K лайков · 64 ответа",
            frame: "card",
          },
          {
            src: "/work/threads/post-2.jpg",
            w: 1320,
            h: 1000,
            alt: "Пост с 3,4 тысячами лайков",
            caption: "3,4K лайков · 39 ответов",
            frame: "card",
          },
          {
            src: "/work/threads/profile.jpg",
            w: 1320,
            h: 621,
            alt: "Профиль клиента: 5 534 подписчика, 448K просмотров",
            caption: "Профиль: 5 534 подписчика · 448K просмотров",
            frame: "card",
          },
        ],
      },
    ],
  },
  "black-camel": {
    cover: {
      src: "/work/black-camel/editor.jpg",
      w: 1280,
      h: 690,
      alt: "Редактор видео: очередь рендера, инструменты нарезки и поиск повторов",
      caption:
        "Редактор, в котором работает агентство: очередь рендера, нарезка, поиск повторов, выгрузка на Drive",
      frame: "browser",
      chrome: "Video editor",
    },
    groups: [],
  },
  "telegram-receipts": {
    cover: {
      src: "/work/receipts/dashboard.jpg",
      w: 1280,
      h: 697,
      alt: "Операционный дашборд: 142 бота, 2,41 млн сообщений, 99,98% аптайма",
      caption: "Операционный дашборд за 30 дней",
      frame: "browser",
      chrome: "Operations",
    },
    groups: [
      {
        title: "Нагрузка и возможности",
        lead: "Когда платформа загружена сильнее всего и что она умеет.",
        layout: "stack",
        shots: [
          {
            src: "/work/receipts/activity.jpg",
            w: 1280,
            h: 604,
            alt: "Тепловая карта активности по часам и дням недели, возможности платформы",
            caption: "Активность по часам и дням · возможности платформы",
            frame: "browser",
            chrome: "Activity",
          },
        ],
      },
    ],
  },
};

export function getShots(slug: string): CaseShots | undefined {
  return caseShots[slug];
}
