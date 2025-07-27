'use client'

import Link from 'next/link'
import { Shield, Search, AlertTriangle, CheckCircle, ArrowRight, Zap, Users, TrendingUp } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* 英雄区域 */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-primary-600">{t('home.hero.title')}</span>
              <br />
              {t('home.hero.subtitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cve-analyzer"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold flex items-center justify-center"
              >
                {t('home.hero.startAnalysis')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/features"
                className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-semibold"
              >
                {t('home.hero.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 核心功能特色 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('home.features.cveAnalysis.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('home.features.cveAnalysis.description')}
              </p>
              <Link href="/cve-analyzer" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                {t('home.features.cveAnalysis.cta')} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100">
              <div className="w-16 h-16 bg-security-high rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('home.features.riskAssessment.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('home.features.riskAssessment.description')}
              </p>
              <Link href="/features" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                {t('home.features.riskAssessment.cta')} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100">
              <div className="w-16 h-16 bg-security-low rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('home.features.remediation.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('home.features.remediation.description')}
              </p>
              <Link href="/blog" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                {t('home.features.remediation.cta')} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">{t('home.stats.accuracy')}</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">{t('home.stats.users')}</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50000+</div>
              <div className="text-gray-600">{t('home.stats.database')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-20 security-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trial"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              {t('home.cta.freeTrial')}
            </Link>
            <Link
              href="/contact"
              className="bg-primary-800 text-white border-2 border-primary-400 px-8 py-4 rounded-lg hover:bg-primary-900 transition-colors duration-200 font-semibold"
            >
              {t('home.cta.contactUs')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 