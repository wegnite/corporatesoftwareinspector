'use client'

import { Search, Upload } from 'lucide-react'

interface AnalysisTypeSelectorProps {
  analysisType: string
  onTypeChange: (type: string) => void
}

export default function AnalysisTypeSelector({ analysisType, onTypeChange }: AnalysisTypeSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">选择分析类型</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => onTypeChange('cve')}
          className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
            analysisType === 'cve' 
              ? 'border-primary-600 bg-primary-50 text-primary-700' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <Search className="h-6 w-6 mx-auto mb-2" />
          <div className="font-semibold">CVE编号查询</div>
          <div className="text-sm text-gray-600">输入具体CVE编号进行分析</div>
        </button>
        
        <button
          onClick={() => onTypeChange('upload')}
          className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
            analysisType === 'upload' 
              ? 'border-primary-600 bg-primary-50 text-primary-700' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <Upload className="h-6 w-6 mx-auto mb-2" />
          <div className="font-semibold">软件清单分析</div>
          <div className="text-sm text-gray-600">上传软件清单进行批量分析</div>
        </button>
      </div>
    </div>
  )
} 