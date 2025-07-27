# Corporate Software Inspector

企业软件安全漏洞检查工具 - 专业的CVE分析和安全风险评估平台

## 🛡️ 项目简介

Corporate Software Inspector 是一个专为企业设计的软件安全漏洞检查工具，提供：

- **智能CVE分析**：基于AI技术的漏洞智能分析
- **风险等级评估**：精准的安全风险评级和优先级排序  
- **修复建议方案**：专业的安全修复指导和最佳实践
- **自动化扫描**：持续监控和实时告警
- **合规性报告**：符合行业标准的安全报告生成

## 🚀 技术栈

- **前端框架**：Next.js 14 (React 18)
- **样式系统**：TailwindCSS 3.3
- **开发语言**：TypeScript 5.2
- **图标组件**：Lucide React
- **动画效果**：Framer Motion
- **表单处理**：React Hook Form

## 📦 安装和运行

### 1. 克隆项目

```bash
git clone git@github.com:wegnite/corporatesoftwareinspector.git
cd corporatesoftwareinspector
```

### 2. 安装依赖

```bash
npm install
# 或
yarn install
```

### 3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

### 4. 打开浏览器

访问 [http://localhost:3000](http://localhost:3000) 查看应用

## 🏗️ 项目结构

```
corporatesoftwareinspector/
├── app/                    # Next.js 13+ App Router
│   ├── blog/              # 安全博客页面
│   ├── contact/           # 联系我们页面
│   ├── cve-analyzer/      # CVE分析工具页面
│   ├── features/          # 产品功能页面
│   ├── privacy/           # 隐私政策页面
│   ├── trial/             # 免费试用页面
│   ├── globals.css        # 全局样式文件
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 首页组件
├── components/            # 可复用组件
│   ├── Header.tsx         # 网站头部导航
│   └── Footer.tsx         # 网站底部
├── public/                # 静态资源文件
├── package.json           # 项目依赖配置
├── tailwind.config.js     # TailwindCSS 配置
├── tsconfig.json          # TypeScript 配置
└── next.config.js         # Next.js 配置
```

## 🎯 核心功能

### 1. CVE漏洞分析工具
- 输入CVE编号快速查询漏洞信息
- 上传软件清单进行批量分析
- AI驱动的智能风险评估
- 生成详细的安全分析报告

### 2. 企业安全博客
- 最新安全威胁趋势分析
- CVE漏洞详解和防护方案
- 企业安全最佳实践指南
- 行业安全合规要求解读

### 3. 用户交互功能
- 联系表单和技术支持
- 免费试用申请流程
- 响应式设计，完美适配移动端
- 现代化UI/UX设计

## 🔧 开发指南

### 添加新页面

1. 在 `app/` 目录下创建新的文件夹
2. 添加 `page.tsx` 文件
3. 导入并使用 Header 和 Footer 组件

### 样式开发

- 使用 TailwindCSS 工具类
- 自定义样式在 `app/globals.css` 中定义
- 响应式设计优先

### 组件开发

- 可复用组件放在 `components/` 目录
- 使用 TypeScript 进行类型检查
- 遵循 React 最佳实践

## 🌐 部署

### Vercel 部署（推荐）

```bash
npm install -g vercel
vercel
```

### 其他平台部署

```bash
npm run build
npm start
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- 邮箱：contact@corporatesoftwareinspector.com
- 网站：https://corporatesoftwareinspector.com
- 技术支持：support@corporatesoftwareinspector.com

## 🎉 致谢

感谢所有为企业软件安全做出贡献的开发者和安全研究人员。

---

© 2024 Corporate Software Inspector. 保留所有权利。 