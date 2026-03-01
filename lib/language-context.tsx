"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Locale } from "./i18n"

type LanguageContextType = {
  locale: Locale
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  toggleLocale: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "pt" : "en"))
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
