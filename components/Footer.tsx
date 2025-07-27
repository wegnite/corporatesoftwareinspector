import Link from 'next/link'
import { Shield, Mail, MapPin, Globe } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">Corporate Software Inspector</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              专业的企业软件安全漏洞检查工具，为企业提供全面的安全风险评估和修复建议，保护您的数字资产安全。
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@corporatesoftwareinspector.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 产品链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">产品功能</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-300 hover:text-primary-400 transition-colors">
                  功能介绍
                </Link>
              </li>
              <li>
                <Link href="/cve-analyzer" className="text-gray-300 hover:text-primary-400 transition-colors">
                  CVE分析工具
                </Link>
              </li>
              <li>
                <Link href="/vulnerability-scanner" className="text-gray-300 hover:text-primary-400 transition-colors">
                  漏洞扫描
                </Link>
              </li>
              <li>
                <Link href="/patch-management" className="text-gray-300 hover:text-primary-400 transition-colors">
                  补丁管理
                </Link>
              </li>
            </ul>
          </div>

          {/* 资源链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">资源</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary-400 transition-colors">
                  安全博客
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-300 hover:text-primary-400 transition-colors">
                  技术文档
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-primary-400 transition-colors">
                  技术支持
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Corporate Software Inspector. 保留所有权利。
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                服务条款
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Cookie政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 