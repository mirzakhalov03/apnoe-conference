import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Dictionary } from "./translations";

export const LANGUAGES = [
  { code: "uz", label: "O'zbekcha", short: "UZ" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "en", label: "English", short: "EN" },
] as const;

export type Language = (typeof LANGUAGES)[number]["code"];

/** The page is pre-rendered in this language; others are applied after hydration. */
export const DEFAULT_LANGUAGE: Language = "uz";

const STORAGE_KEY = "lang";

function isLanguage(value: unknown): value is Language {
  return LANGUAGES.some((l) => l.code === value);
}

/** `?lang=` wins (shareable links), then the saved choice, then the browser's languages. */
function detectLanguage(): Language {
  const fromQuery = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(fromQuery)) return fromQuery;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }

  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split("-")[0];
    if (isLanguage(base)) return base;
  }
  return DEFAULT_LANGUAGE;
}

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
};

// The default value lets components render (in Uzbek) even outside the provider.
const I18nContext = createContext<I18nContextValue>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: translations[DEFAULT_LANGUAGE],
});

export function I18nProvider({ children }: { children: ReactNode }) {
  // Start with the default so the client's first render matches the pre-rendered HTML.
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    setLanguageState(detectLanguage());
  }, []);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore — the choice still applies for this visit.
    }
  }, []);

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [language, t]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
