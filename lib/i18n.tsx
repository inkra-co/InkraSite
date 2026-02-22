"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import es from "@/locales/es.json"
import en from "@/locales/en.json"
import de from "@/locales/de.json"

export type Locale = "es" | "en" | "de"

const translations: Record<Locale, typeof es> = { es, en, de }

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  de: "Deutsch",
}

type TranslationValue = string | TranslationObject | TranslationValue[]
interface TranslationObject {
  [key: string]: TranslationValue
}

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  tArray: <T = Record<string, string>>(key: string) => T[]
}

const I18nContext = createContext<I18nContextType | null>(null)

function getNestedValue(obj: TranslationObject, path: string): TranslationValue | undefined {
  const keys = path.split(".")
  let current: TranslationValue = obj
  for (const key of keys) {
    if (current && typeof current === "object" && !Array.isArray(current)) {
      current = (current as TranslationObject)[key]
    } else {
      return undefined
    }
  }
  return current
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es")

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(translations[locale] as unknown as TranslationObject, key)
      if (typeof value === "string") return value
      return key
    },
    [locale]
  )

  const tArray = useCallback(
    <T = Record<string, string>,>(key: string): T[] => {
      const value = getNestedValue(translations[locale] as unknown as TranslationObject, key)
      if (Array.isArray(value)) return value as T[]
      return []
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tArray }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}
