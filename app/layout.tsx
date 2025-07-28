import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import ClientLayout from './ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Corporate Software Inspector - 企业软件安全漏洞检查工具',
    template: '%s | Corporate Software Inspector'
  },
  description: '专业的企业软件安全漏洞检查工具，提供CVE分析、风险评估和修复建议。保护您的企业免受安全威胁。',
  keywords: 'corporate software, security, vulnerability, CVE, patch management, enterprise security, 企业软件安全, 漏洞检查',
  authors: [{ name: 'Corporate Software Inspector Team' }],
  creator: 'Corporate Software Inspector',
  publisher: 'Corporate Software Inspector',
  metadataBase: new URL('https://corporatesoftwareinspector.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://corporatesoftwareinspector.com',
    title: 'Corporate Software Inspector - 企业软件安全漏洞检查工具',
    description: '专业的企业软件安全漏洞检查工具，提供CVE分析、风险评估和修复建议。',
    siteName: 'Corporate Software Inspector',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Software Inspector - 企业软件安全漏洞检查工具',
    description: '专业的企业软件安全漏洞检查工具，提供CVE分析、风险评估和修复建议。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
} 