'use client'

import Link from 'next/link'
import { Shield, Search, AlertTriangle, CheckCircle, FileText, Database, Cpu, Lock, Users, Clock, TrendingUp, BarChart3 } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Features() {
  const features = [
    {
      icon: Search,
      title: 'CVE漏洞智能分析',
      description: '基于AI技术深度分析CVE数据库，自动识别软件组件中的安全漏洞，提供详细的威胁评估报告。',
      benefits: ['自动化漏洞识别', '智能风险评级', 'AI驱动分析', '实时数据更新']
    },
    {
      icon: AlertTriangle,
      title: '风险等级评估',
      description: '根据CVSS评分系统和企业环境特点，为每个漏洞提供精准的风险等级评估和优先级排序。',
      benefits: ['CVSS标准评分', '环境相关评估', '优先级排序', '风险量化分析']
    },
    {
      icon: CheckCircle,
      title: '修复建议方案',
      description: '针对发现的安全漏洞，提供专业的修复建议、补丁信息和最佳实践指导。',
      benefits: ['专业修复指导', '补丁管理建议', '最佳实践推荐', '修复验证方案']
    },
    {
      icon: FileText,
      title: '合规性报告',
      description: '生成符合行业标准的安全合规报告，满足审计要求和监管需求。',
      benefits: ['标准化报告格式', '合规性检查', '审计支持', '多格式导出']
    },
    {
      icon: Database,
      title: '软件资产管理',
      description: '全面管理企业软件资产，跟踪软件版本、许可证和安全状态。',
      benefits: ['资产清单管理', '版本跟踪', '许可证监控', '依赖关系分析']
    },
    {
      icon: Cpu,
      title: '自动化扫描',
      description: '定期自动扫描企业软件环境，及时发现新出现的安全威胁和漏洞。',
      benefits: ['定时自动扫描', '持续监控', '实时告警', '增量更新检测']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-primary-600">强大功能</span>
              <br />
              全方位保护您的企业软件安全
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Corporate Software Inspector 提供企业级的软件安全检查解决方案，
              帮助您识别、分析和修复软件安全漏洞，保护企业数字资产安全。
            </p>
          </div>
        </div>
      </section>

      {/* 功能特性详情 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-security-low mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 技术优势 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              技术优势
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们采用先进的技术架构和算法，为您提供最可靠的企业软件安全保护
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">企业级安全</h3>
              <p className="text-gray-600">
                采用银行级安全标准，确保您的数据和分析结果完全安全，符合各种合规要求。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">高性能处理</h3>
              <p className="text-gray-600">
                高效的分析引擎，能够快速处理大规模软件资产，为大型企业提供可靠的性能保障。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">智能分析</h3>
              <p className="text-gray-600">
                基于机器学习的智能分析算法，持续优化检测准确性，减少误报和漏报。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 使用流程 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              简单三步，开始安全检查
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              无需复杂配置，轻松上手使用我们的企业软件安全检查工具
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">上传软件信息</h3>
              <p className="text-gray-600">
                上传您的软件清单或使用我们的自动扫描工具识别企业环境中的软件组件
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">智能分析检测</h3>
              <p className="text-gray-600">
                我们的AI系统自动分析软件组件，识别潜在的安全漏洞和风险点
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">获取修复建议</h3>
              <p className="text-gray-600">
                获得详细的安全报告和专业的修复建议，快速解决发现的安全问题
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-20 security-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好开始保护您的企业了吗？
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            立即体验我们的专业企业软件安全检查服务，免费试用30天
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cve-analyzer"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              开始免费分析
            </Link>
            <Link
              href="/trial"
              className="bg-primary-800 text-white border-2 border-primary-400 px-8 py-4 rounded-lg hover:bg-primary-900 transition-colors duration-200 font-semibold"
            >
              申请试用
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 