'use client'

import { LanguageProvider } from '../contexts/LanguageContext'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
} 