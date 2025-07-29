'use client'

import Link from 'next/link'
import { Shield, Book, AlertTriangle, CheckCircle, FileText, Users, Clock, Search, Tag, ArrowRight } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function SecurityKnowledge() {
  const knowledgeCategories = [
    {
      id: 'vulnerability-basics',
      title: '漏洞基础知识',
      description: '了解软件漏洞的基本概念、分类和影响',
      icon: AlertTriangle,
      articles: [
        {
          title: '什么是CVE？CVE编号系统详解',
          description: '详细介绍CVE（Common Vulnerabilities and Exposures）系统的工作原理、编号规则和查询方法',
          readTime: '8分钟',
          difficulty: '入门',
          tags: ['CVE', '基础知识']
        },
        {
          title: 'CVSS评分系统完全指南',
          description: '深入解析CVSS（通用漏洞评分系统）的计算方法、评分标准和实际应用',
          readTime: '12分钟',
          difficulty: '中级',
          tags: ['CVSS', '风险评估']
        },
        {
          title: '常见漏洞类型及其防护策略',
          description: '介绍SQL注入、XSS、CSRF等常见Web应用漏洞的原理和防护方法',
          readTime: '15分钟',
          difficulty: '中级',
          tags: ['Web安全', '防护策略']
        }
      ]
    },
    {
      id: 'threat-intelligence',
      title: '威胁情报',
      description: '掌握最新的安全威胁情报和攻击趋势',
      icon: Shield,
      articles: [
        {
          title: '2024年全球网络威胁态势报告',
          description: '基于真实数据分析的年度威胁报告，涵盖各行业面临的主要安全挑战',
          readTime: '20分钟',
          difficulty: '中级',
          tags: ['威胁报告', '趋势分析']
        },
        {
          title: 'APT攻击技术演进分析',
          description: '分析高级持续性威胁（APT）的最新攻击技术和防御策略',
          readTime: '18分钟',
          difficulty: '高级',
          tags: ['APT', '高级威胁']
        },
        {
          title: '勒索软件攻击链分析与防护',
          description: '深入分析勒索软件的完整攻击链条和有效的防护措施',
          readTime: '16分钟',
          difficulty: '中级',
          tags: ['勒索软件', '事件响应']
        }
      ]
    },
    {
      id: 'security-practices',
      title: '安全最佳实践',
      description: '学习行业认可的安全管理和技术实践',
      icon: CheckCircle,
      articles: [
        {
          title: '企业信息安全管理体系建设指南',
          description: '基于ISO 27001标准的企业信息安全管理体系构建方法和实施步骤',
          readTime: '25分钟',
          difficulty: '高级',
          tags: ['ISO 27001', '管理体系']
        },
        {
          title: '零信任架构设计与实施',
          description: '详细介绍零信任安全模型的设计原理和企业级实施方案',
          readTime: '22分钟',
          difficulty: '高级',
          tags: ['零信任', '架构设计']
        },
        {
          title: '安全开发生命周期(SDLC)实践',
          description: '在软件开发全生命周期中集成安全实践的方法和工具',
          readTime: '20分钟',
          difficulty: '中级',
          tags: ['SDLC', '安全开发']
        }
      ]
    },
    {
      id: 'compliance-governance',
      title: '合规与治理',
      description: '了解网络安全法规要求和合规管理',
      icon: FileText,
      articles: [
        {
          title: '网络安全法及配套法规解读',
          description: '详细解读《网络安全法》、《数据安全法》等法规的核心要求和合规要点',
          readTime: '30分钟',
          difficulty: '中级',
          tags: ['网络安全法', '合规']
        },
        {
          title: 'GDPR数据保护合规指南',
          description: '面向中国企业的GDPR合规指南，包括数据处理、权利保护等关键要求',
          readTime: '28分钟',
          difficulty: '中级',
          tags: ['GDPR', '数据保护']
        },
        {
          title: '等保2.0建设实施指南',
          description: '网络安全等级保护2.0的建设要求、测评流程和整改建议',
          readTime: '35分钟',
          difficulty: '高级',
          tags: ['等保2.0', '合规建设']
        }
      ]
    }
  ]

  const featuredArticles = [
    {
      title: '企业软件供应链安全风险评估方法',
      description: '系统性的供应链安全风险识别、评估和管控方法，帮助企业建立完善的供应链安全管理体系',
      author: '安全专家团队',
      date: '2024-01-20',
      readTime: '25分钟',
      category: '供应链安全',
      featured: true
    },
    {
      title: '云原生安全架构设计原则',
      description: '面向容器、微服务、DevOps环境的安全架构设计原则和实施建议',
      author: '云安全团队',
      date: '2024-01-18',
      readTime: '22分钟',
      category: '云安全',
      featured: true
    }
  ]

  const securityTools = [
    {
      name: 'OWASP Top 10',
      description: 'Web应用安全风险排行榜',
      type: '风险清单',
      url: '#'
    },
    {
      name: 'NIST网络安全框架',
      description: '网络安全风险管理框架',
      type: '管理框架',
      url: '#'
    },
    {
      name: 'CIS Controls',
      description: '网络安全控制措施',
      type: '控制清单',
      url: '#'
    },
    {
      name: 'MITRE ATT&CK',
      description: '攻击技术知识库',
      type: '威胁建模',
      url: '#'
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
              <span className="text-primary-600">安全知识库</span>
              <br />
              全面的企业安全知识体系
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从基础概念到高级实践，为企业安全专业人员提供系统化的知识体系和实用指南。
              持续更新的安全资讯，助力您构建更安全的企业环境。
            </p>
          </div>
        </div>
      </section>

      {/* 搜索功能 */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="搜索安全知识、最佳实践、合规指南..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 特色文章 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">特色文章</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {article.author} • {article.date}
                    </div>
                    <Link
                      href="#"
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                    >
                      阅读文章
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 知识分类 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              知识分类导航
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              按主题分类的专业安全知识，从入门到高级，系统性地提升您的安全专业能力
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {knowledgeCategories.map((category) => (
              <div key={category.id} className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <category.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.articles.map((article, index) => (
                    <div key={index} className="border-l-2 border-primary-100 pl-4">
                      <h4 className="font-medium text-gray-900 mb-1">{article.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {article.difficulty}
                        </span>
                        <div className="flex gap-1">
                          {article.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    查看{category.title}所有文章
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 安全工具和资源 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              安全工具和资源
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精选的安全工具、框架和标准，为您的安全工作提供专业支持
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityTools.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 card-hover">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Book className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mb-4">
                    {tool.type}
                  </span>
                  <Link
                    href={tool.url}
                    className="block text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    了解详情 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新更新 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              最新更新
            </h2>
            <p className="text-xl text-gray-600">
              持续更新的安全知识和威胁情报，让您始终掌握最新动态
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl p-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                订阅我们的安全知识更新
              </h3>
              <p className="text-gray-600 mb-6">
                每周获取最新的安全威胁情报、技术文章和最佳实践指南
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="输入您的邮箱地址"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold">
                  订阅更新
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 