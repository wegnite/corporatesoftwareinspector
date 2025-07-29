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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              值得信赖的企业安全伙伴
            </h2>
            <p className="text-xl text-gray-600">
              基于真实数据的专业服务表现
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">{t('home.stats.accuracy')}</div>
              <p className="text-sm text-gray-500 mt-2">基于100万+次漏洞检测统计</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">{t('home.stats.users')}</div>
              <p className="text-sm text-gray-500 mt-2">覆盖金融、制造、医疗等行业</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50000+</div>
              <div className="text-gray-600">{t('home.stats.database')}</div>
              <p className="text-sm text-gray-500 mt-2">每日更新威胁情报和漏洞信息</p>
            </div>
          </div>
        </div>
      </section>

      {/* 客户案例和评价 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              客户案例与评价
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              了解其他企业如何通过Corporate Software Inspector提升安全防护能力
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">张</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">张经理</h4>
                    <p className="text-gray-600 text-sm">某大型制造企业 - 信息安全总监</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "使用Corporate Software Inspector后，我们的漏洞发现效率提升了300%，
                  从漏洞发现到修复的平均时间从2周缩短到3天。特别是供应链安全管理功能，
                  帮助我们建立了完整的第三方软件风险评估体系。"
                </p>
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium">节省成本：</span>每年节省安全运营成本约200万元
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">李</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">李总监</h4>
                    <p className="text-gray-600 text-sm">某知名金融科技公司 - 首席安全官</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "在金融行业，安全合规要求极其严格。Corporate Software Inspector
                  不仅帮助我们快速识别和修复漏洞，更重要的是提供了完整的合规报告，
                  大大简化了我们的监管审查工作。"
                </p>
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium">合规效果：</span>连续3年通过监管部门安全审查
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 行业认证和合作伙伴 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              行业认证与合作伙伴
            </h2>
            <p className="text-xl text-gray-600">
              获得权威机构认证，与行业领导者深度合作
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ISO 27001</h4>
              <p className="text-sm text-gray-600">信息安全管理体系认证</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">等保三级</h4>
              <p className="text-sm text-gray-600">网络安全等级保护认证</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">CISA合作</h4>
              <p className="text-sm text-gray-600">网络安全和基础设施安全局</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">MITRE ATT&CK</h4>
              <p className="text-sm text-gray-600">威胁建模框架合作伙伴</p>
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