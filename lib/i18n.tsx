'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'id' | 'en'

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'id',
  toggleLang: () => {},
})

const STORAGE_KEY = 'shidokan-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'id' || stored === 'en') setLang(stored)
  }, [])

  function toggleLang() {
    setLang((prev) => {
      const next: Lang = prev === 'id' ? 'en' : 'id'
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
