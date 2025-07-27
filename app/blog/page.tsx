import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '企业软件安全威胁趋势分析：2024年度报告',
      excerpt: '深入分析2024年企业面临的主要软件安全威胁，包括供应链攻击、零日漏洞利用和内部威胁等关键风险领域的发展趋势。',
      author: 'Security Team',
      date: '2024-01-15',
      category: '安全趋势',
      slug: 'enterprise-security-threats-2024',
      featured: true
    },
    {
      id: 2,
      title: 'CVE-2023-44487 HTTP/2 快速重置攻击详解与防护',
      excerpt: '详细解析CVE-2023-44487漏洞的技术原理、影响范围和实际攻击场景，并提供完整的防护和修复方案。',
      author: 'Tech Team',
      date: '2024-01-10',
      category: 'CVE分析',
      slug: 'cve-2023-44487-analysis'
    },
    {
      id: 3,
      title: '开源软件供应链安全最佳实践指南',
      excerpt: '从依赖管理、漏洞监控到应急响应，全面介绍如何构建健壮的开源软件供应链安全体系。',
      author: 'Security Team',
      date: '2024-01-05',
      category: '最佳实践',
      slug: 'open-source-supply-chain-security'
    },
    {
      id: 4,
      title: '自动化漏洞扫描与补丁管理策略',
      excerpt: '探讨如何建立高效的自动化漏洞扫描流程，制定科学的补丁管理策略，最大化降低企业安全风险。',
      author: 'DevOps Team',
      date: '2023-12-28',
      category: '自动化',
      slug: 'automated-vulnerability-scanning'
    },
    {
      id: 5,
      title: 'SBOM在企业软件资产管理中的应用实践',
      excerpt: 'Software Bill of Materials (SBOM) 作为新兴的软件透明度标准，如何在企业环境中有效应用和管理。',
      author: 'Compliance Team',
      date: '2023-12-20',
      category: '合规性',
      slug: 'sbom-enterprise-application'
    },
    {
      id: 6,
      title: '容器安全：从镜像扫描到运行时保护',
      excerpt: '容器化环境下的安全挑战与解决方案，涵盖镜像安全扫描、运行时监控和网络隔离等关键技术。',
      author: 'Cloud Security Team',
      date: '2023-12-15',
      category: '容器安全',
      slug: 'container-security-comprehensive-guide'
    }
  ]

  const categories = ['全部', '安全趋势', 'CVE分析', '最佳实践', '自动化', '合规性', '容器安全']

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-primary-600">安全知识</span>
              <br />
              专业的企业软件安全资讯
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              获取最新的安全威胁分析、漏洞研究、防护策略和行业最佳实践，
              助力企业构建更安全的软件环境。
            </p>
          </div>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 特色文章 */}
      {blogPosts.filter(post => post.featured).length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">特色文章</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                      >
                        阅读全文
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 文章列表 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">最新文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors duration-200">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mt-4"
                  >
                    阅读更多
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 订阅区域 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            订阅安全资讯
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            获取最新的企业软件安全威胁情报和防护策略，助力您的安全决策
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold">
              订阅
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            我们承诺保护您的隐私，不会向第三方分享您的信息
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
} 