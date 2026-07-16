import type { Locale } from "./config";

export type Dictionary = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    apps: string;
    contact: string;
    contactCta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    viewProjects: string;
    contactMe: string;
    downloadResume: string;
    age: string;
    experience: string;
    apps: string;
    stack: string;
  };
  about: {
    eyebrow: string;
    title: string;
    summary: string;
    paragraphs: string[];
    highlightsTitle: string;
    achievements: string[];
    tags: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    also: string;
    categories: {
      title: string;
      skills: string[];
    }[];
    extended: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    leadBadge: string;
    published: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
  };
  apps: {
    eyebrow: string;
    title: string;
    description: string;
    leadGroup: string;
    contributorGroup: string;
    appStore: string;
    shipped: string;
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    cards: { title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    writeEmail: string;
  };
  footer: {
    credit: string;
  };
  role: {
    lead: string;
    contributor: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      apps: "Apps",
      contact: "Contact",
      contactCta: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      headline: "Senior iOS Developer building high-quality mobile products",
      subtitle:
        "I create native iOS apps with Swift, UIKit, and SwiftUI — from MVP to scalable production solutions.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadResume: "Download Resume",
      age: "24 years old",
      experience: "7+ years experience",
      apps: "15+ App Store apps",
      stack: "Swift · UIKit · SwiftUI",
    },
    about: {
      eyebrow: "About",
      title: "Building native products that feel inevitable",
      summary:
        "Lead iOS Developer and Product Engineer with 7+ years of experience shipping AI, subscription, and high-load mobile products — from idea and MVP to App Store release, monetization, and scale.",
      paragraphs: [
        "I am a 24-year-old iOS Developer specializing in Swift, SwiftUI and mobile architecture.",
        "I build performant, scalable and beautiful applications.",
        "I have experience creating products from idea to App Store release.",
      ],
      highlightsTitle: "Highlights",
      achievements: [
        "24 years old — 7+ years of commercial mobile development",
        "15+ apps published on the App Store",
        "90%+ first or second-pass App Review success",
        "MVP launches in 1–4 weeks",
        "Products with 100,000+ users",
        "Led mobile teams of up to 10 engineers",
      ],
      tags: [
        "iOS Development",
        "SwiftUI",
        "MVVM + Coordinator",
        "Product Development",
        "AI integrations",
        "App Store publishing",
      ],
    },
    skills: {
      eyebrow: "Expertise",
      title: "A stack built for production iOS",
      description:
        "Focused tools and patterns for shipping reliable, scalable mobile products.",
      also: "Also",
      categories: [
        {
          title: "iOS",
          skills: [
            "Swift",
            "SwiftUI",
            "UIKit",
            "Combine",
            "Core Data",
            "StoreKit",
            "App Store Connect",
          ],
        },
        {
          title: "Architecture",
          skills: [
            "MVVM",
            "Coordinator",
            "Clean Architecture",
            "SOLID",
            "Dependency Injection",
          ],
        },
        {
          title: "Tools",
          skills: [
            "Xcode",
            "Git",
            "Fastlane",
            "SwiftLint",
            "SwiftGen",
            "Cursor AI",
          ],
        },
      ],
      extended: [
        "Swift Concurrency",
        "WidgetKit",
        "AVFoundation",
        "Vision Framework",
        "Apphud / Adapty",
        "Firebase Analytics",
        "REST API",
        "OpenAI API",
      ],
    },
    projects: {
      eyebrow: "Selected Work",
      title: "Products shipped to the App Store",
      description:
        "Native iOS applications across AI, utilities, lifestyle, and creative tools — from contribution roles to full ownership as lead developer.",
      leadBadge: "Lead Developer",
      published: "Published on the App Store",
    },
    experience: {
      eyebrow: "Experience",
      title: "From engineer to product owner",
      description:
        "A career shipping App Store products — architecture, leadership, and full-cycle delivery.",
    },
    apps: {
      eyebrow: "App Store",
      title: "Apps I built",
      description:
        "A selection of production iOS products — contributed early, then owned as lead developer from architecture through App Store release.",
      leadGroup: "Lead iOS Developer",
      contributorGroup: "iOS Development",
      appStore: "App Store",
      shipped: "Shipped",
    },
    why: {
      eyebrow: "Partnership",
      title: "Why work with me",
      description:
        "A blend of engineering rigor and product judgment — built for teams that ship.",
      cards: [
        {
          title: "Product mindset",
          description:
            "Not only writing code, but understanding business goals, monetization, and user retention.",
        },
        {
          title: "Fast MVP Development",
          description:
            "Turning ideas into working products quickly — often shipping MVPs in 1–4 weeks.",
        },
        {
          title: "Quality Engineering",
          description:
            "Clean architecture, maintainable code, and production-ready App Store releases.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build the next product",
      description:
        "Open to senior iOS roles, product engineering partnerships, and high-impact freelance engagements.",
      writeEmail: "Write an email",
    },
    footer: {
      credit: "Developed by Daniel Labetsky",
    },
    role: {
      lead: "Lead Developer",
      contributor: "iOS Developer",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      experience: "Опыт",
      apps: "Приложения",
      contact: "Контакты",
      contactCta: "Связаться",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },
    hero: {
      headline:
        "Senior iOS Developer, создающий качественные мобильные продукты",
      subtitle:
        "Разрабатываю нативные iOS-приложения на Swift | UIKit | SwiftUI — от MVP до масштабируемых production-решений.",
      viewProjects: "Смотреть проекты",
      contactMe: "Связаться",
      downloadResume: "Скачать резюме",
      age: "24 года",
      experience: "7+ лет опыта",
      apps: "15+ приложений в App Store",
      stack: "Swift · UIKit · SwiftUI",
    },
    about: {
      eyebrow: "Обо мне",
      title: "Создаю нативные продукты, которые хочется использовать",
      summary:
        "Lead iOS Developer и Product Engineer с опытом 7+ лет: AI-приложения, подписочные продукты и высоконагруженные сервисы — от идеи и MVP до релиза в App Store, монетизации и роста.",
      paragraphs: [
        "Мне 24 года. Я iOS-разработчик со специализацией на Swift, SwiftUI и мобильной архитектуре.",
        "Создаю производительные, масштабируемые и визуально сильные приложения.",
        "Имею опыт полного цикла: от идеи до публикации в App Store.",
      ],
      highlightsTitle: "Достижения",
      achievements: [
        "24 года — 7+ лет коммерческой мобильной разработки",
        "15+ опубликованных приложений в App Store",
        "Более 90% приложений проходили App Review с 1–2 попытки",
        "Запуск MVP за 1–4 недели",
        "Продукты с аудиторией 100 000+ пользователей",
        "Руководил командами до 10 человек",
      ],
      tags: [
        "iOS-разработка",
        "SwiftUI",
        "MVVM + Coordinator",
        "Продуктовая разработка",
        "AI-интеграции",
        "Публикация в App Store",
      ],
    },
    skills: {
      eyebrow: "Экспертиза",
      title: "Стек для production iOS",
      description:
        "Инструменты и подходы для надёжных и масштабируемых мобильных продуктов.",
      also: "Также",
      categories: [
        {
          title: "iOS",
          skills: [
            "Swift",
            "SwiftUI",
            "UIKit",
            "Combine",
            "Core Data",
            "StoreKit",
            "App Store Connect",
          ],
        },
        {
          title: "Архитектура",
          skills: [
            "MVVM",
            "Coordinator",
            "Clean Architecture",
            "SOLID",
            "Dependency Injection",
          ],
        },
        {
          title: "Инструменты",
          skills: [
            "Xcode",
            "Git",
            "Fastlane",
            "SwiftLint",
            "SwiftGen",
            "Cursor AI",
          ],
        },
      ],
      extended: [
        "Swift Concurrency",
        "WidgetKit",
        "AVFoundation",
        "Vision Framework",
        "Apphud / Adapty",
        "Firebase Analytics",
        "REST API",
        "OpenAI API",
      ],
    },
    projects: {
      eyebrow: "Избранные работы",
      title: "Продукты, опубликованные в App Store",
      description:
        "Нативные iOS-приложения в AI, утилитах, lifestyle и creative — от участия в разработке до полного ownership как lead developer.",
      leadBadge: "Ведущий разработчик",
      published: "Опубликовано в App Store",
    },
    experience: {
      eyebrow: "Опыт",
      title: "От инженера до владельца продукта",
      description:
        "Карьера в запуске App Store продуктов — архитектура, лидерство и полный цикл поставки.",
    },
    apps: {
      eyebrow: "App Store",
      title: "Приложения, которые я сделал",
      description:
        "Production iOS-продукты: сначала вклад в разработку, затем ownership как ведущий iOS-разработчик — от архитектуры до релиза.",
      leadGroup: "Ведущий iOS-разработчик",
      contributorGroup: "iOS-разработка",
      appStore: "App Store",
      shipped: "Выпущено",
    },
    why: {
      eyebrow: "Партнёрство",
      title: "Почему со мной удобно работать",
      description:
        "Сочетание инженерной дисциплины и продуктового мышления — для команд, которые реально шипят.",
      cards: [
        {
          title: "Продуктовое мышление",
          description:
            "Не только код, но понимание бизнес-целей, монетизации и удержания пользователей.",
        },
        {
          title: "Быстрый MVP",
          description:
            "Превращаю идеи в рабочие продукты быстро — часто запускаю MVP за 1–4 недели.",
        },
        {
          title: "Качественная инженерия",
          description:
            "Чистая архитектура, поддерживаемый код и production-ready релизы в App Store.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title: "Давайте сделаем следующий продукт",
      description:
        "Открыт к senior iOS ролям, product engineering партнёрствам и сильным freelance-проектам.",
      writeEmail: "Написать на email",
    },
    footer: {
      credit: "Разработка — Daniel Labetsky",
    },
    role: {
      lead: "Ведущий разработчик",
      contributor: "iOS-разработчик",
    },
  },
};
