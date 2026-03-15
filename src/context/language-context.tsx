"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { translations, Locale } from "@/lib/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "es",
  setLocale: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("etherial-lang") as Locale | null;
    if (stored && (stored === "es" || stored === "en")) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("etherial-lang", newLocale);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[locale]?.[key] ?? key;
  }, [locale]);

  if (!mounted) return <>{children}</>;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
