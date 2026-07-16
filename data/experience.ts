import type { Localized } from "@/lib/i18n/config";

export type ExperienceItem = {
  id: string;
  role: Localized<string>;
  company: string;
  period: Localized<string>;
  summary: Localized<string>;
  responsibilities: Localized<string[]>;
  stack?: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "solid",
    role: {
      en: "Senior iOS Developer",
      ru: "Senior iOS Developer",
    },
    company: "SOLID — Product IT Company",
    period: {
      en: "Feb 2025 – Jan 2026",
      ru: "Фев 2025 – Янв 2026",
    },
    summary: {
      en: "Technical lead for the iOS direction and owner of the product’s mobile architecture.",
      ru: "Технический лидер iOS-направления и владелец мобильной архитектуры продукта.",
    },
    responsibilities: {
      en: [
        "Building production iOS applications from idea to App Store",
        "Creating scalable architecture and technical strategy",
        "Working with SwiftUI, Vision, and Photos frameworks",
        "Code reviews and engineering quality ownership",
        "Product development with monetization and analytics",
        "Optimizing media libraries with 10,000+ photos and videos",
      ],
      ru: [
        "Разработка production iOS-приложений от идеи до App Store",
        "Масштабируемая архитектура и техническая стратегия",
        "Работа со SwiftUI, Vision и Photos frameworks",
        "Code review и ответственность за качество кода",
        "Продуктовая разработка, монетизация и аналитика",
        "Оптимизация медиатек с 10 000+ фото и видео",
      ],
    },
    stack: ["Swift", "SwiftUI", "MVVM", "Coordinator", "Apphud", "Firebase"],
  },
  {
    id: "aa001",
    role: {
      en: "iOS Developer",
      ru: "iOS Developer",
    },
    company: "AA001Team — Startup Development",
    period: {
      en: "Oct 2023 – Jan 2025",
      ru: "Окт 2023 – Янв 2025",
    },
    summary: {
      en: "Built performance-marketing products and advanced product scenarios with analytics and attribution.",
      ru: "Разработка performance-marketing продуктов и продуктовых сценариев с аналитикой и атрибуцией.",
    },
    responsibilities: {
      en: [
        "Developing and shipping commercial iOS applications",
        "Integrating analytics, attribution, and advertising SDKs",
        "Implementing push notifications and deep linking",
        "Participating in product launches and hypothesis testing",
      ],
      ru: [
        "Разработка и релиз коммерческих iOS-приложений",
        "Интеграция аналитики, атрибуции и рекламных SDK",
        "Push-уведомления и deep linking",
        "Участие в запусках продуктов и проверке гипотез",
      ],
    },
    stack: ["Swift", "SwiftUI", "UIKit", "AppsFlyer", "Firebase"],
  },
  {
    id: "extfo",
    role: {
      en: "Lead iOS Developer",
      ru: "Lead iOS Developer",
    },
    company: "EXTFO — Product & Outsourcing",
    period: {
      en: "Jun 2022 – Aug 2023",
      ru: "Июн 2022 – Авг 2023",
    },
    summary: {
      en: "Led mobile development for a startup team of up to 10 engineers as technical owner of the iOS direction.",
      ru: "Руководил мобильной разработкой в стартап-команде до 10 человек как технический владелец iOS-направления.",
    },
    responsibilities: {
      en: [
        "Defining architecture and technical strategy",
        "Shipping multiple mobile products and MVPs in 1–4 weeks",
        "Owning App Review, releases, and App Store publishing",
        "Driving product decisions with design, marketing, and backend",
      ],
      ru: [
        "Определение архитектуры и технической стратегии",
        "Запуск продуктов и MVP за 1–4 недели",
        "App Review, релизы и публикация в App Store",
        "Продуктовые решения вместе с дизайном, маркетингом и backend",
      ],
    },
    stack: ["Swift", "SwiftUI", "Clean Architecture", "CI/CD"],
  },
  {
    id: "pulsetraffic",
    role: {
      en: "iOS Developer",
      ru: "iOS Developer",
    },
    company: "PulseTraffic — Performance Marketing",
    period: {
      en: "Jul 2020 – May 2022",
      ru: "Июл 2020 – Май 2022",
    },
    summary: {
      en: "Developed and maintained commercial iOS applications for product and marketing projects.",
      ru: "Разработка и поддержка коммерческих iOS-приложений для продуктовых и маркетинговых проектов.",
    },
    responsibilities: {
      en: [
        "Building client-side business logic and REST integrations",
        "Shaping interfaces and evolving app architecture",
        "Supporting production releases and product iterations",
      ],
      ru: [
        "Клиентская бизнес-логика и REST-интеграции",
        "Проектирование интерфейсов и развитие архитектуры",
        "Поддержка production-релизов и итераций продукта",
      ],
    },
    stack: ["Swift", "UIKit", "REST API"],
  },
  {
    id: "opensolutions",
    role: {
      en: "iOS Developer",
      ru: "iOS Developer",
    },
    company: "Open Solutions — Outsourcing",
    period: {
      en: "Dec 2018 – May 2020",
      ru: "Дек 2018 – Май 2020",
    },
    summary: {
      en: "Started commercial iOS development, building and supporting client applications end to end.",
      ru: "Старт коммерческой iOS-разработки: создание и поддержка клиентских приложений end-to-end.",
    },
    responsibilities: {
      en: [
        "Developing feature-complete iOS applications",
        "Collaborating with clients on requirements and delivery",
        "Establishing foundations in Swift and UIKit",
      ],
      ru: [
        "Разработка полноценных iOS-приложений",
        "Работа с клиентами по требованиям и поставке",
        "Закладка основ на Swift и UIKit",
      ],
    },
    stack: ["Swift", "UIKit"],
  },
];
