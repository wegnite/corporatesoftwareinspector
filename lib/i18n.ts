// 简单的i18n实现
export const locales = ['zh', 'en'] as const;
export type Locale = typeof locales[number];

// 翻译数据
export const translations = {
  zh: {
    nav: {
      home: '首页',
      features: '产品功能', 
      cveAnalyzer: 'CVE分析工具',
      blog: '安全博客',
      contact: '联系我们',
      trial: '免费试用'
    },
    home: {
      hero: {
        title: '企业软件安全',
        subtitle: '全方位保护解决方案',
        description: 'Professional Corporate Software Inspector 为您的企业提供全面的软件安全漏洞检查、CVE分析、风险评估和修复建议。守护您的数字资产安全，让企业运营无忧。',
        startAnalysis: '开始免费分析',
        learnMore: '了解更多功能'
      },
      features: {
        title: '为什么选择 Corporate Software Inspector？',
        subtitle: '我们提供专业级的企业软件安全解决方案，帮助您识别、分析和修复潜在的安全风险',
        cveAnalysis: {
          title: '智能CVE分析',
          description: '基于AI技术的CVE漏洞智能分析，快速识别软件安全风险，提供详细的威胁评估报告',
          cta: '立即体验'
        },
        riskAssessment: {
          title: '风险等级评估',
          description: '自动化风险等级分类，从低风险到严重风险，为企业提供清晰的安全威胁优先级排序',
          cta: '了解详情'
        },
        remediation: {
          title: '修复建议方案',
          description: '提供专业的安全修复建议和补丁管理方案，帮助企业快速响应和处理安全威胁',
          cta: '查看案例'
        }
      },
      stats: {
        accuracy: '检测准确率',
        users: '企业用户信赖',
        database: 'CVE数据库'
      },
      cta: {
        title: '立即开始保护您的企业软件安全',
        subtitle: '加入已经信赖我们的1000+企业用户，体验专业级的软件安全检查服务',
        freeTrial: '免费试用 30 天',
        contactUs: '联系我们'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      cveAnalyzer: 'CVE Analyzer', 
      blog: 'Security Blog',
      contact: 'Contact',
      trial: 'Free Trial'
    },
    home: {
      hero: {
        title: 'Enterprise Software Security',
        subtitle: 'Comprehensive Protection Solutions',
        description: 'Professional Corporate Software Inspector provides comprehensive software security vulnerability checking, CVE analysis, risk assessment and remediation recommendations for your enterprise. Protecting your digital assets and ensuring worry-free business operations.',
        startAnalysis: 'Start Free Analysis',
        learnMore: 'Learn More Features'
      },
      features: {
        title: 'Why Choose Corporate Software Inspector?',
        subtitle: 'We provide professional-grade enterprise software security solutions to help you identify, analyze and remediate potential security risks',
        cveAnalysis: {
          title: 'Intelligent CVE Analysis',
          description: 'AI-powered intelligent CVE vulnerability analysis that quickly identifies software security risks and provides detailed threat assessment reports',
          cta: 'Try Now'
        },
        riskAssessment: {
          title: 'Risk Level Assessment',
          description: 'Automated risk level classification from low to critical risks, providing clear security threat prioritization for enterprises',
          cta: 'Learn More'
        },
        remediation: {
          title: 'Remediation Recommendations',
          description: 'Professional security remediation recommendations and patch management solutions to help enterprises respond quickly to security threats',
          cta: 'View Cases'
        }
      },
      stats: {
        accuracy: 'Detection Accuracy',
        users: 'Trusted by Enterprises',
        database: 'CVE Database'
      },
      cta: {
        title: 'Start Protecting Your Enterprise Software Security Now',
        subtitle: 'Join 1000+ enterprise users who trust us and experience professional-grade software security inspection services',
        freeTrial: '30-Day Free Trial',
        contactUs: 'Contact Us'
      }
    }
  }
};

// Get nested translation
export function getTranslation(locale: Locale, key: string) {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return value || key;
} 