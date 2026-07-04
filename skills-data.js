const initialSkills = [
  {
    id: "modern-web-guidance",
    name: "Modern Web Guidance",
    tagline: "Instant check for modern web development best practices & standard web APIs",
    description: "A highly specialized Agent Skill that allows developer agents to query Baseline web APIs, CSS practices, user experience patterns, and modern scroll/motion APIs. Keeps frontend implementations clean and dependency-free.",
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
    name: "Chrome DevTools MCP",
    tagline: "Automate, debug, and audit web pages directly through Chrome DevTools",
    description: "An agent tool that exposes the Chrome DevTools Protocol to large language models. Allows agents to inspect the DOM, run console scripts, capture screenshots, measure performance, and diagnose network requests in real-time.",
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
    name: "Firebase Firestore Manager",
    tagline: "Manage Cloud Firestore instances, indexes, and security rules seamlessly",
    description: "A developer skill designed for provisioning and maintaining Firestore databases. It simplifies setting up security rules, analyzing query performances, and managing collections through command-line helpers and prompt guides.",
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
    name: "AlphaFold Database Fetcher",
    tagline: "Fetch and analyze AlphaFold 3D protein structures with confidence metrics",
    description: "Retrieve structural confidence metrics (pLDDT), analyze domain boundaries, and assess disorder regions of proteins directly by UniProt ID using the AlphaFold API.",
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
    name: "A11y Debugger",
    tagline: "Run automated accessibility audits on websites based on web.dev rules",
    description: "Inspect DOM elements, run color contrast checks, review keyboard navigation traps, verify ARIA roles, and generate WCAG-compliant accessibility reports automatically.",
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
    name: "Clinical Trials Explorer",
    tagline: "Search, filter, and extract ClinicalTrials.gov study records easily",
    description: "Query ClinicalTrials.gov via modern REST APIs. Look up NCT IDs, track eligibility criteria, map recruiting centers, and aggregate trial portfolios for conditions or sponsors.",
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
