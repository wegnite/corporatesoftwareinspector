'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">页面未找到</h2>
            <p className="text-xl text-gray-600 mb-8">
              抱歉，您访问的页面不存在或已被移动。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold flex items-center justify-center"
            >
              <Home className="h-5 w-5 mr-2" />
              返回首页
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-semibold flex items-center justify-center"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              返回上页
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">产品功能</h3>
              <p className="text-gray-600 text-sm mb-3">了解我们的企业软件安全检查工具</p>
              <Link href="/features" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                查看详情 →
              </Link>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">CVE分析</h3>
              <p className="text-gray-600 text-sm mb-3">免费使用我们的CVE漏洞分析工具</p>
              <Link href="/cve-analyzer" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                立即使用 →
              </Link>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">安全博客</h3>
              <p className="text-gray-600 text-sm mb-3">获取最新的安全威胁分析和防护建议</p>
              <Link href="/blog" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                阅读文章 →
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 