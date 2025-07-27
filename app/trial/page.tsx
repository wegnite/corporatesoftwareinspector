'use client'

import { useState } from 'react'
import { CheckCircle, Star, ArrowRight, Users, Shield, Zap } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Trial() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    industry: '',
    use_case: '',
    current_solution: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const features = [
    '完整的CVE漏洞数据库访问',
    'AI驱动的智能分析引擎',
    '自动化漏洞扫描工具',
    '详细的安全报告生成',
    '专业的修复建议方案',
    '24/7技术支持服务'
  ]

  const testimonials = [
    {
      name: '张经理',
      company: '某大型制造企业',
      content: '使用Corporate Software Inspector后，我们的安全漏洞发现效率提升了300%，风险响应时间从几天缩短到几小时。'
    },
    {
      name: '李总监',
      company: '某金融科技公司',
      content: '这个工具帮助我们建立了完善的软件资产安全管理体系，符合监管要求，大大降低了合规风险。'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-2xl mx-auto px-4">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-6">试用申请提交成功！</h1>
            <p className="text-xl text-gray-600 mb-8">
              感谢您对Corporate Software Inspector的信任！我们的专业团队将在24小时内与您联系，
              为您开通专属的试用账户并提供详细的产品演示。
            </p>
            <div className="bg-primary-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">接下来的步骤：</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  我们将通过邮件发送试用账户信息
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  安排一对一的产品演示和培训
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  提供专业的技术支持和咨询服务
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  phone: '',
                  employees: '',
                  industry: '',
                  use_case: '',
                  current_solution: ''
                })
              }}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              返回首页
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-primary-600">免费试用</span>
              <br />
              体验专业的企业软件安全保护
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              30天免费试用，无需信用卡，享受完整功能。专业团队一对一支持，
              助您快速上手并体验企业级软件安全检查服务。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 试用表单 */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">申请免费试用</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      企业邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="请使用企业邮箱地址"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      公司名称 *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="请输入公司名称"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      联系电话 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="请输入联系电话"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                      公司规模 *
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      required
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">请选择公司规模</option>
                      <option value="1-50">1-50人</option>
                      <option value="51-200">51-200人</option>
                      <option value="201-1000">201-1000人</option>
                      <option value="1000+">1000人以上</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      所属行业 *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">请选择行业</option>
                      <option value="finance">金融服务</option>
                      <option value="technology">科技互联网</option>
                      <option value="manufacturing">制造业</option>
                      <option value="healthcare">医疗健康</option>
                      <option value="education">教育培训</option>
                      <option value="government">政府机构</option>
                      <option value="retail">零售电商</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="use_case" className="block text-sm font-medium text-gray-700 mb-2">
                    主要使用场景 *
                  </label>
                  <textarea
                    id="use_case"
                    name="use_case"
                    required
                    rows={4}
                    value={formData.use_case}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="请描述您希望解决的安全问题或使用场景..."
                  />
                </div>

                <div>
                  <label htmlFor="current_solution" className="block text-sm font-medium text-gray-700 mb-2">
                    当前使用的安全工具
                  </label>
                  <input
                    type="text"
                    id="current_solution"
                    name="current_solution"
                    value={formData.current_solution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="如：Nessus、OpenVAS、其他工具或暂无"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-semibold flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      提交中...
                    </>
                  ) : (
                    <>
                      立即申请免费试用
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* 试用权益 */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">试用权益</h2>
              
              <div className="bg-primary-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">30天免费试用包含：</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 统计数据 */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">企业用户</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">检测准确率</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">5min</div>
                  <div className="text-sm text-gray-600">快速上手</div>
                </div>
              </div>

              {/* 用户评价 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">用户评价</h3>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4">{testimonial.content}</p>
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">{testimonial.name}</span>
                        <span className="text-gray-600"> - {testimonial.company}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 