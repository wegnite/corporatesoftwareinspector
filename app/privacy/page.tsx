'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">隐私政策</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            最后更新日期：2024年1月1日
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 信息收集</h2>
            <p className="text-gray-700 mb-4">
              我们收集您主动提供的信息，包括但不限于：
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>姓名、邮箱地址、电话号码等联系信息</li>
              <li>公司名称、职位、行业信息</li>
              <li>您上传的软件清单和分析数据</li>
              <li>与我们的沟通记录</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 信息使用</h2>
            <p className="text-gray-700 mb-4">
              我们使用收集的信息用于：
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>提供和改进我们的服务</li>
              <li>与您就服务相关事宜进行沟通</li>
              <li>发送产品更新和安全公告</li>
              <li>进行技术支持</li>
              <li>遵守法律法规要求</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 信息保护</h2>
            <p className="text-gray-700 mb-4">
              我们采用行业标准的安全措施保护您的个人信息：
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>数据传输采用SSL/TLS加密</li>
              <li>数据存储采用加密技术</li>
              <li>严格的访问控制和身份认证</li>
              <li>定期安全审计和漏洞扫描</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookie使用</h2>
            <p className="text-gray-700 mb-4">
              我们使用Cookie来改善用户体验：
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>记住您的登录状态</li>
              <li>保存您的偏好设置</li>
              <li>分析网站使用情况</li>
              <li>提供个性化内容</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 信息共享</h2>
            <p className="text-gray-700 mb-4">
              我们不会向第三方出售、交易或转让您的个人信息，除非：
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>获得您的明确同意</li>
              <li>法律法规要求</li>
              <li>保护我们的合法权益</li>
              <li>与可信的第三方服务提供商合作（仍受保密协议约束）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 您的权利</h2>
            <p className="text-gray-700 mb-4">
              您对个人信息享有以下权利：
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>访问和查看您的个人信息</li>
              <li>更正不准确的信息</li>
              <li>删除您的个人信息</li>
              <li>限制信息处理</li>
              <li>数据可携带权</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 政策更新</h2>
            <p className="text-gray-700">
              我们可能会不时更新本隐私政策。重要变更将通过邮件或网站公告的方式通知您。
              建议您定期查看本政策以了解最新信息。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 联系我们</h2>
            <p className="text-gray-700">
              如果您对本隐私政策有任何问题或建议，请通过以下方式联系我们：
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">邮箱：privacy@corporatesoftwareinspector.com</p>
              <p className="text-gray-700">电话：400-123-4567</p>
              <p className="text-gray-700">地址：北京市朝阳区建国门外大街1号国贸大厦A座32层</p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 