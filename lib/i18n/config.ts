export type Locale = "en" | "ru";

export const locales: Locale[] = ["en", "ru"];
export const defaultLocale: Locale = "en";
export const localeStorageKey = "portfolio-locale";

export type Localized<T> = Record<Locale, T>;

export function pick<T>(locale: Locale, value: Localized<T>): T {
  return value[locale] ?? value.en;
}
