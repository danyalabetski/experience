import type { Localized } from "@/lib/i18n/config";

export type AppRole = "lead" | "contributor";

export type PortfolioApp = {
  id: string;
  name: string;
  tagline: Localized<string>;
  description: Localized<string>;
  category: Localized<string>;
  technologies: string[];
  role: AppRole;
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
  accent: string;
};

export const apps: PortfolioApp[] = [
  {
    id: "bass-booster",
    name: "Bass Booster",
    tagline: {
      en: "Volume amplifier for richer sound",
      ru: "Усилитель громкости и баса",
    },
    description: {
      en: "Audio utility for amplifying volume and enhancing bass — tuned for everyday listening with a clean, responsive native experience.",
      ru: "Аудио-утилита для усиления громкости и баса — чистый и отзывчивый нативный опыт для повседневного прослушивания.",
    },
    category: {
      en: "Audio · Utilities",
      ru: "Аудио · Утилиты",
    },
    technologies: ["Swift", "AVFoundation", "UIKit"],
    role: "contributor",
    accent: "from-zinc-300/30 via-stone-500/10 to-transparent",
  },
  {
    id: "parcel-tracking",
    name: "Parcel Tracking",
    tagline: {
      en: "Delivery tracking in one place",
      ru: "Отслеживание доставок в одном месте",
    },
    description: {
      en: "Package tracking product that consolidates shipment status and delivery updates into a clear, reliable mobile experience.",
      ru: "Приложение для трекинга посылок: статусы отправлений и обновления доставки в понятном и надёжном интерфейсе.",
    },
    category: {
      en: "Logistics · Utilities",
      ru: "Логистика · Утилиты",
    },
    technologies: ["Swift", "REST API", "UIKit"],
    role: "contributor",
    accent: "from-neutral-200/25 via-slate-500/10 to-transparent",
  },
  {
    id: "spaceup",
    name: "SpaceUp",
    tagline: {
      en: "Storage cleaner & device optimizer",
      ru: "Очистка памяти и оптимизация устройства",
    },
    description: {
      en: "All-in-one storage cleaner for duplicate media, contacts, video compression, and a private vault — built for fast cleanup and subscription monetization.",
      ru: "Комплексный cleaner: дубликаты медиа, контакты, сжатие видео и приватное хранилище — быстрая очистка и подписочная монетизация.",
    },
    category: {
      en: "Utilities",
      ru: "Утилиты",
    },
    technologies: ["Swift", "SwiftUI", "Photos", "StoreKit"],
    role: "contributor",
    featured: true,
    rating: 4.4,
    reviewCount: 157,
    accent: "from-gray-200/30 via-zinc-400/10 to-transparent",
  },
  {
    id: "led-controller",
    name: "LED Light Controller",
    tagline: {
      en: "Smart lighting control",
      ru: "Управление умным освещением",
    },
    description: {
      en: "Controller app for LED lighting setups — focused on device connectivity, responsive controls, and a polished utility interface.",
      ru: "Приложение для управления LED-освещением: подключение устройств, отзывчивые контролы и аккуратный utility-интерфейс.",
    },
    category: {
      en: "Smart Devices",
      ru: "Умные устройства",
    },
    technologies: ["Swift", "BLE", "UIKit"],
    role: "contributor",
    accent: "from-zinc-200/25 via-neutral-500/10 to-transparent",
  },
  {
    id: "astrohd",
    name: "AstroHD",
    tagline: {
      en: "Human Design charts & insights",
      ru: "Human Design карты и инсайты",
    },
    description: {
      en: "Lifestyle product delivering personalized Human Design bodygraphs, natal charts, and compatibility insights — owned end-to-end as lead iOS developer.",
      ru: "Lifestyle-продукт с персональными bodygraph, натальными картами и совместимостью — полный ownership как ведущий iOS-разработчик.",
    },
    category: {
      en: "Lifestyle · Product",
      ru: "Lifestyle · Product",
    },
    technologies: ["SwiftUI", "MVVM", "StoreKit", "Charts"],
    role: "lead",
    featured: true,
    rating: 3.6,
    reviewCount: 16,
    accent: "from-silver/20 via-zinc-500/10 to-transparent",
  },
  {
    id: "alice-baby-monitor",
    name: "Alice",
    tagline: {
      en: "Video baby monitor for parents",
      ru: "Видеоняня для родителей",
    },
    description: {
      en: "Wi‑Fi and cellular baby monitor connecting parent and camera devices with live audio/video, real-time alerts, and multi-parent support.",
      ru: "Видеоняня по Wi‑Fi и мобильной сети: live аудио/видео, мгновенные уведомления и поддержка нескольких родительских устройств.",
    },
    category: {
      en: "Lifestyle · Streaming",
      ru: "Lifestyle · Стриминг",
    },
    technologies: ["SwiftUI", "WebRTC", "AVFoundation", "Push"],
    role: "lead",
    featured: true,
    accent: "from-zinc-300/25 via-stone-400/10 to-transparent",
  },
  {
    id: "invitation-maker",
    name: "Invitation Maker",
    tagline: {
      en: "Party invites & greeting cards",
      ru: "Приглашения и открытки на мероприятия",
    },
    description: {
      en: "Design tool for creating and sharing event invitations — templates, rich customization, and instant sharing for weddings, birthdays, and celebrations.",
      ru: "Инструмент для создания и отправки приглашений: шаблоны, гибкая кастомизация и быстрый шаринг для свадеб, дней рождения и праздников.",
    },
    category: {
      en: "Graphics & Design",
      ru: "Дизайн",
    },
    technologies: ["SwiftUI", "Core Graphics", "StoreKit"],
    role: "lead",
    featured: true,
    accent: "from-neutral-200/30 via-zinc-500/10 to-transparent",
  },
  {
    id: "ai-song-generator",
    name: "AI Song Generator",
    tagline: {
      en: "Create music & covers with AI",
      ru: "Создание музыки и каверов с AI",
    },
    description: {
      en: "AI music product for generating original tracks and covers from prompts, genres, and instrument preferences — built around generative APIs and subscriptions.",
      ru: "AI-продукт для генерации треков и каверов по промптам, жанрам и инструментам — generative API и подписочная модель.",
    },
    category: {
      en: "Music · AI",
      ru: "Музыка · AI",
    },
    technologies: ["SwiftUI", "AI APIs", "AVFoundation", "StoreKit"],
    role: "lead",
    featured: true,
    accent: "from-gray-200/25 via-slate-400/10 to-transparent",
  },
  {
    id: "heady",
    name: "Heady",
    tagline: {
      en: "AI portrait & fashion studio",
      ru: "AI-студия портретов и fashion-съёмок",
    },
    description: {
      en: "AI portrait studio for professional headshots and styled photoshoots — prompt-to-image flows, curated themes, and HD export for creators and professionals.",
      ru: "AI-студия для профессиональных headshot и стилизованных съёмок: prompt-to-image, готовые темы и HD-экспорт.",
    },
    category: {
      en: "Photo & Video · AI",
      ru: "Фото и видео · AI",
    },
    technologies: ["SwiftUI", "AI APIs", "Photos", "StoreKit"],
    role: "lead",
    featured: true,
    accent: "from-titanium/20 via-zinc-500/10 to-transparent",
  },
  {
    id: "take-or-not",
    name: "Take Or Not",
    tagline: {
      en: "Food & cosmetic ingredient scanner",
      ru: "Сканер состава еды и косметики",
    },
    description: {
      en: "Health-focused scanner that scores food, cosmetics, and household products by ingredients — clear verdicts so users buy only what fits their standards.",
      ru: "Сканер для осознанного выбора: оценка еды, косметики и бытовой химии по составу — понятный вердикт перед покупкой.",
    },
    category: {
      en: "Health · AI",
      ru: "Здоровье · AI",
    },
    technologies: ["SwiftUI", "Vision", "AI", "StoreKit"],
    role: "lead",
    featured: true,
    accent: "from-zinc-200/30 via-neutral-400/10 to-transparent",
  },
];

export const projects = apps.filter((app) => app.featured);
export const showcaseApps = apps;
