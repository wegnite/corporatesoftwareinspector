'use client'

import { useState } from 'react'
import { Search, Upload, AlertTriangle, CheckCircle, ExternalLink, Download } from 'lucide-react'

interface AnalysisResult {
  cve: string
  severity: string
  score: number
  description: string
  affectedSoftware: string[]
  solution: string
  references: string[]
}

interface AnalysisSectionProps {
  analysisType: string
}

export default function AnalysisSection({ analysisType }: AnalysisSectionProps) {
  const [inputValue, setInputValue] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)

  // 模拟分析功能
  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    // 模拟API调用延迟
    setTimeout(() => {
      setAnalysisResult({
        cve: inputValue || 'CVE-2023-12345',
        severity: 'HIGH',
        score: 8.5,
        description: '这是一个高风险的远程代码执行漏洞，攻击者可以通过构造特殊的HTTP请求来执行任意代码。',
        affectedSoftware: ['Apache Tomcat 9.0.0-9.0.62', 'Spring Framework 5.3.0-5.3.21'],
        solution: '升级到最新版本或应用安全补丁',
        references: ['https://nvd.nist.gov/vuln/detail/CVE-2023-12345']
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  const getSeverityColor = (severity: string) => {
    switch (severity?.toLowerCase()) {
      case 'critical': return 'security-critical'
      case 'high': return 'security-high'
      case 'medium': return 'security-medium'
      case 'low': return 'security-low'
      default: return 'bg-gray-500'
    }
  }

  return (
    <>
      {/* 输入区域 */}
      <div className="mb-8">
        {analysisType === 'cve' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CVE编号 (例如: CVE-2023-12345)
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="请输入CVE编号..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              上传软件清单文件
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors duration-200">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">拖拽文件到此处或点击上传</p>
              <p className="text-sm text-gray-500">支持 .txt, .csv, .json 格式</p>
              <input
                type="file"
                className="hidden"
                accept=".txt,.csv,.json"
              />
            </div>
          </div>
        )}
      </div>

      {/* 分析按钮 */}
      <button
        onClick={handleAnalyze}
        disabled={isAnalyzing || (!inputValue && analysisType === 'cve')}
        className="w-full bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-semibold flex items-center justify-center"
      >
        {isAnalyzing ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            分析中...
          </>
        ) : (
          <>
            <Search className="h-5 w-5 mr-2" />
            开始安全分析
          </>
        )}
      </button>

      {/* 分析结果 */}
      {analysisResult && (
        <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">分析结果</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 漏洞基本信息 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">漏洞信息</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-600">CVE编号:</span>
                  <p className="text-lg font-mono text-gray-900">{analysisResult.cve}</p>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-600">严重程度:</span>
                  <div className="flex items-center mt-1">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getSeverityColor(analysisResult.severity)}`}>
                      {analysisResult.severity}
                    </span>
                    <span className="ml-3 text-lg font-bold text-gray-900">
                      {analysisResult.score}/10
                    </span>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-600">漏洞描述:</span>
                  <p className="text-gray-700 mt-1">{analysisResult.description}</p>
                </div>
              </div>
            </div>

            {/* 影响和解决方案 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">影响与解决方案</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-600">受影响软件:</span>
                  <ul className="mt-1 space-y-1">
                    {analysisResult.affectedSoftware.map((software: string, index: number) => (
                      <li key={index} className="text-gray-700 flex items-center">
                        <AlertTriangle className="h-4 w-4 text-security-high mr-2" />
                        {software}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-600">修复建议:</span>
                  <p className="text-gray-700 mt-1 flex items-start">
                    <CheckCircle className="h-4 w-4 text-security-low mr-2 mt-0.5 flex-shrink-0" />
                    {analysisResult.solution}
                  </p>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-600">参考链接:</span>
                  <ul className="mt-1 space-y-1">
                    {analysisResult.references.map((ref: string, index: number) => (
                      <li key={index}>
                        <a
                          href={ref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          查看详细信息
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium flex items-center justify-center">
                <Download className="h-4 w-4 mr-2" />
                下载报告
              </button>
              <button
                onClick={() => {
                  setAnalysisResult(null)
                  setInputValue('')
                }}
                className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
              >
                重新分析
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 