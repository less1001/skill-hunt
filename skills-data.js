const initialSkills = [
  {
    id: "modern-web-guidance",
    name_en: "Modern Web Guidance",
    name_zh: "现代 Web 开发指南",
    tagline_en: "Instant check for modern web development best practices & standard web APIs",
    tagline_zh: "快速查询现代 Web 开发最佳实践与标准 Web API，避免冗余依赖",
    description_en: "A highly specialized Agent Skill that allows developer agents to query Baseline web APIs, CSS practices, user experience patterns, and modern scroll/motion APIs. Keeps frontend implementations clean and dependency-free.",
    description_zh: "一个高度专业化的 Agent Skill，允许开发代理查询 Baseline Web API、CSS 最佳实践、用户体验模式以及现代滚动/动画 API。保持前端实现简洁且无多余依赖。",
    author: "NousResearch",
    tags: ["Frontend", "Best Practices", "Agent Skill"],
    votes: 142,
    commentsCount: 3,
    githubUrl: "https://github.com/NousResearch/hermes-agent/tree/main/skills/modern-web-guidance",
    logoBg: "#E34F26",
    logoText: "MWG",
    comments: [
      {
        id: "c1",
        author: "DevHunter",
        text: "This is a lifesaver for agent prompt context. Instead of importing 10 plugins, it just guides the agent to use Baseline APIs.",
        timestamp: "2026-07-01T10:30:00Z"
      },
      {
        id: "c2",
        author: "Alice_JS",
        text: "Using `:has()` and view transitions natively is awesome. Highly recommend checking this out.",
        timestamp: "2026-07-02T14:22:00Z"
      },
      {
        id: "c3",
        author: "AgentCoder",
        text: "Integrates perfectly with my local system prompt.",
        timestamp: "2026-07-03T09:15:00Z"
      }
    ]
  },
  {
    id: "chrome-devtools",
    name_en: "Chrome DevTools MCP",
    name_zh: "Chrome 开发者工具 MCP",
    tagline_en: "Automate, debug, and audit web pages directly through Chrome DevTools",
    tagline_zh: "通过 Chrome 开发者工具直接对网页进行自动化控制、调试与审计",
    description_en: "An agent tool that exposes the Chrome DevTools Protocol to large language models. Allows agents to inspect the DOM, run console scripts, capture screenshots, measure performance, and diagnose network requests in real-time.",
    description_zh: "一个将 Chrome DevTools 协议暴露给大语言模型的 Agent 工具。允许 Agent 实时审查 DOM、运行控制台脚本、捕获屏幕截图、分析页面性能以及诊断网络请求。",
    author: "GoogleChrome",
    tags: ["Testing", "MCP", "Automation"],
    votes: 98,
    commentsCount: 2,
    githubUrl: "https://github.com/google/chrome-devtools-mcp",
    logoBg: "#4285F4",
    logoText: "CDT",
    comments: [
      {
        id: "c4",
        author: "WebTester",
        text: "Makes end-to-end testing with AI feel like magic. The screenshot capabilities are very robust.",
        timestamp: "2026-06-28T08:11:00Z"
      },
      {
        id: "c5",
        author: "StackOverflowed",
        text: "Can this run headless in a Docker container?",
        timestamp: "2026-06-29T11:45:00Z"
      }
    ]
  },
  {
    id: "firebase-firestore",
    name_en: "Firebase Firestore Manager",
    name_zh: "Firebase Firestore 管理器",
    tagline_en: "Manage Cloud Firestore instances, indexes, and security rules seamlessly",
    tagline_zh: "无缝管理 Cloud Firestore 实例、索引与安全规则",
    description_en: "A developer skill designed for provisioning and maintaining Firestore databases. It simplifies setting up security rules, analyzing query performances, and managing collections through command-line helpers and prompt guides.",
    description_zh: "专为配置和维护 Firestore 数据库而设计的开发者技能。它通过命令行助手和提示指南，简化了安全规则设置、查询性能分析和集合管理操作。",
    author: "Firebase",
    tags: ["Database", "Backend", "Firebase"],
    votes: 87,
    commentsCount: 1,
    githubUrl: "https://github.com/firebase/firebase-tools",
    logoBg: "#FFCA28",
    logoText: "FFM",
    comments: [
      {
        id: "c6",
        author: "NoSQL_Fan",
        text: "The security rules auditor feature alone saved me from two major vulnerabilities. Clean implementation!",
        timestamp: "2026-07-02T18:02:00Z"
      }
    ]
  },
  {
    id: "alphafold-analyzer",
    name_en: "AlphaFold Database Fetcher",
    name_zh: "AlphaFold 数据库提取器",
    tagline_en: "Fetch and analyze AlphaFold 3D protein structures with confidence metrics",
    tagline_zh: "获取并分析 AlphaFold 3D 蛋白质结构及其置信度指标",
    description_en: "Retrieve structural confidence metrics (pLDDT), analyze domain boundaries, and assess disorder regions of proteins directly by UniProt ID using the AlphaFold API.",
    description_zh: "通过 AlphaFold API，使用 UniProt ID 直接获取蛋白质的结构置信度指标 (pLDDT)、分析结构域边界并评估无序区域。",
    author: "DeepMind",
    tags: ["Science", "Bioinformatics", "API"],
    votes: 156,
    commentsCount: 4,
    githubUrl: "https://github.com/google-deepmind/alphafold",
    logoBg: "#00C6FF",
    logoText: "AFB",
    comments: [
      {
        id: "c7",
        author: "BioResearcher",
        text: "Extremely useful for high-throughput structural screening before running full simulations.",
        timestamp: "2026-06-30T12:00:00Z"
      },
      {
        id: "c8",
        author: "GeneSplicer",
        text: "Is there a local cache option for downloaded CIF files?",
        timestamp: "2026-07-01T04:30:00Z"
      },
      {
        id: "c9",
        author: "ProteinMaster",
        text: "Yes, it caches it locally in your app data directory.",
        timestamp: "2026-07-01T06:12:00Z"
      },
      {
        id: "c10",
        author: "BioResearcher",
        text: "Thanks! That makes scripting much faster.",
        timestamp: "2026-07-01T08:20:00Z"
      }
    ]
  },
  {
    id: "a11y-debugging",
    name_en: "A11y Debugger",
    name_zh: "A11y 无障碍调试器",
    tagline_en: "Run automated accessibility audits on websites based on web.dev rules",
    tagline_zh: "根据 web.dev 规则在网站上运行自动无障碍审计",
    description_en: "Inspect DOM elements, run color contrast checks, review keyboard navigation traps, verify ARIA roles, and generate WCAG-compliant accessibility reports automatically.",
    description_zh: "自动审查 DOM 元素、运行色彩对比度检查、排查键盘导航陷阱、验证 ARIA 角色，并生成符合 WCAG 标准的网页无障碍报告。",
    author: "A11yAlliance",
    tags: ["Accessibility", "Audit", "UX"],
    votes: 64,
    commentsCount: 1,
    githubUrl: "https://github.com/a11yalliance/debugger",
    logoBg: "#8E24AA",
    logoText: "A11Y",
    comments: [
      {
        id: "c11",
        author: "UX_Guru",
        text: "Ensuring our web app passes screen reader standards is so much easier with this automated debugger.",
        timestamp: "2026-07-03T11:00:00Z"
      }
    ]
  },
  {
    id: "clinical-trials",
    name_en: "Clinical Trials Explorer",
    name_zh: "临床试验探索器",
    tagline_en: "Search, filter, and extract ClinicalTrials.gov study records easily",
    tagline_zh: "轻松搜索、过滤并提取 ClinicalTrials.gov 的研究试验记录",
    description_en: "Query ClinicalTrials.gov via modern REST APIs. Look up NCT IDs, track eligibility criteria, map recruiting centers, and aggregate trial portfolios for conditions or sponsors.",
    description_zh: "通过现代 REST API 查询 ClinicalTrials.gov。查找 NCT ID、跟踪入排标准、定位招募中心并为特定疾病或申办方汇总试验组合。",
    author: "NIH_OpenData",
    tags: ["Science", "Healthcare", "Data"],
    votes: 53,
    commentsCount: 0,
    githubUrl: "https://github.com/nih-data/clinical-trials-api",
    logoBg: "#00796B",
    logoText: "CTE",
    comments: []
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { initialSkills };
} else {
  window.initialSkills = initialSkills;
}
