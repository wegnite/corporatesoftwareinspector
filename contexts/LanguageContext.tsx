'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, getTranslation } from '../lib/i18n'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('zh')

  // Load locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem('language') as Locale
    if (savedLocale && ['zh', 'en'].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  // Save locale to localStorage when it changes
  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem('language', newLocale)
    
    // Update document language
    document.documentElement.lang = newLocale === 'zh' ? 'zh-CN' : 'en'
  }

  // Translation function
  const t = (key: string) => getTranslation(locale, key)

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 