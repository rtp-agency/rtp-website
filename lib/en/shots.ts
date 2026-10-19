// English captions for case showcase screenshots. Files live in /public/work/<folder>/.
// Client-identifying details (names, avatars, handles, links) are blurred.
import type { Shot, CaseShots } from "../shots";

export type { Shot, ShotGroup, CaseShots } from "../shots";

const threadsDashboard: Shot = {
  src: "/work/threads/dashboard.jpg",
  w: 1280,
  h: 662,
  alt: "Threads Autopilot dashboard: 2.9M views in 90 days",
  caption: "Client dashboard over 90 days: 2.9M views, +4,687 followers",
  frame: "browser",
  chrome: "Threads Autopilot",
};

export const caseShots: Record<string, CaseShots> = {
  "threads-content-system": {
    cover: threadsDashboard,
    groups: [
      {
        title: "The system from the inside",
        lead: "The whole cycle, from the news feed to measuring each post, on one screen.",
        layout: "stack",
        shots: [
          {
            src: "/work/threads/pipeline.jpg",
            w: 1280,
            h: 643,
            alt: "Content pipeline: 8 stages from the news feed to post measurement",
            caption: "The pipeline: 8 stages, every post approved by a human in Telegram",
            frame: "browser",
            chrome: "Content pipeline",
          },
        ],
      },
      {
        title: "What it produced in the feed",
        lead: "Real posts from the client's account. Published with their permission, personal data hidden.",
        layout: "grid",
        shots: [
          {
            src: "/work/threads/post-viral.jpg",
            w: 1320,
            h: 1135,
            alt: "Post with 770 thousand views and 36.5 thousand likes",
            caption: "770K views · 36.5K likes · 546 replies",
            frame: "card",
          },
          {
            src: "/work/threads/post-1.jpg",
            w: 1320,
            h: 1299,
            alt: "Post with 10.3 thousand likes",
            caption: "10.3K likes · 64 replies",
            frame: "card",
          },
          {
            src: "/work/threads/post-2.jpg",
            w: 1320,
            h: 1000,
            alt: "Post with 3.4 thousand likes",
            caption: "3.4K likes · 39 replies",
            frame: "card",
          },
          {
            src: "/work/threads/profile.jpg",
            w: 1320,
            h: 621,
            alt: "Client profile: 5,534 followers, 448K views",
            caption: "Profile: 5,534 followers · 448K views",
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
      alt: "Video editor: render queue, cutting tools and repeat detection",
      caption:
        "The editor the agency works in: render queue, cutting, repeat detection, upload to Drive",
      frame: "browser",
      chrome: "Video editor",
    },
    groups: [],
  },
  "sinner-threads": {
    cover: {
      src: "/work/sinner/hero.jpg",
      w: 1800,
      h: 1035,
      alt: "sinnerThreads online store: home page with real in-stock products",
      caption: "sinnerThreads: storefront with in-stock products, UA / EN",
      frame: "browser",
      chrome: "sinner-threads.vercel.app",
    },
    groups: [],
  },
  "open-source-lipsync": {
    cover: {
      src: "/work/lipsync/comfyui.jpg",
      w: 1800,
      h: 1037,
      alt: "ComfyUI lipsync workflow: Wan 2.1 and InfiniteTalk model loaders, audio processing",
      caption: "Lipsync pipeline in ComfyUI: Wan 2.1 and InfiniteTalk models, audio embeddings, render",
      frame: "browser",
      chrome: "ComfyUI",
    },
    groups: [],
  },
  "metra-ai": {
    cover: {
      src: "/work/metra/hero.jpg",
      w: 1800,
      h: 1045,
      alt: "Metra AI: Telegram platform, content and lead handling in one place",
      caption: "Metra AI: a platform for automating content and leads in Telegram",
      frame: "browser",
      chrome: "metra-ai.org",
    },
    groups: [],
  },
  "telegram-receipts": {
    cover: {
      src: "/work/receipts/dashboard.jpg",
      w: 1280,
      h: 697,
      alt: "Operations dashboard: 142 bots, 2.41M messages, 99.98% uptime",
      caption: "Operations dashboard over 30 days",
      frame: "browser",
      chrome: "Operations",
    },
    groups: [
      {
        title: "Load and capabilities",
        lead: "When the platform is busiest and what it can do.",
        layout: "stack",
        shots: [
          {
            src: "/work/receipts/activity.jpg",
            w: 1280,
            h: 604,
            alt: "Activity heatmap by hour and day of the week, platform capabilities",
            caption: "Activity by hour and day · platform capabilities",
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
