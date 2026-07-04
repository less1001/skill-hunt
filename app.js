// Translation Dictionary
const i18n = {
  en: {
    brand_tagline: "Discover the best agent skills",
    search_placeholder: "Search skills by name, tagline, or author...",
    submit_skill: "Submit Skill",
    cat_all: "All Skills",
    cat_frontend: "Frontend",
    cat_backend: "Backend",
    cat_database: "Database",
    cat_automation: "Automation",
    cat_science: "Science",
    cat_accessibility: "Accessibility",
    sort_popular: "Popular",
    sort_newest: "Newest",
    feed_title_default: "Trending Today",
    what_is_skill: "What is a Skill?",
    what_is_skill_desc: "Skills are modular, executable prompt playbooks and scripts that empower AI agents like Hermes to master specific developer tasks. Add a skill to your project repository and see your agent run circles around complex workflows.",
    explore_framework: "Explore Hermes Agent Framework",
    top_hunters: "Top Hunters",
    pro_tip: "PRO TIP",
    integrate_ide: "Integrate with your IDE",
    integrate_ide_desc: "You can run any of these skills using the command line adapter in VS Code or Zed.",
    footer_text: "© 2026 Skill Hunt. Built with 🍊 style for the AI Agent Community.",
    submit_title: "Submit a New Skill",
    submit_subtitle: "Share an agent skill with the developer community.",
    label_name: "Skill Name *",
    label_author: "Your Name / Organization *",
    help_tagline: "Clear, concise description shown on the homepage list.",
    label_description: "Full Description *",
    label_category: "Primary Category *",
    label_github: "GitHub Repository URL",
    label_tags: "Sub-tags (comma-separated)",
    label_logo: "Logo Icon Preview & Color",
    btn_cancel: "Cancel",
    btn_submit: "Submit Skill",
    select_category: "Select Category",
    empty_state_title: "No skills found",
    empty_state_desc: "Try resetting filters or adjusting your search query.",
    discussion: "Discussion",
    leave_comment: "Leave a comment",
    post_comment: "Post Comment",
    input_username: "Your username (e.g. DevHacker)",
    input_thoughts: "Write your thoughts...",
    no_comments: "No comments yet. Start the conversation!",
    submitted_by: "Submitted by",
    github_repo: "GitHub Repository",
    comments_suffix: "comments",
    rank_suffix: "submitted",
    upvote_btn: "Upvote",
    loading: "Loading...",
    just_now: "just now",
    mins_ago: "m ago",
    hours_ago: "h ago",
    days_ago: "d ago"
  },
  zh: {
    brand_tagline: "发现最优秀的 AI 代理技能库",
    search_placeholder: "搜索技能名称、介绍、作者...",
    submit_skill: "提交新技能",
    cat_all: "全部技能",
    cat_frontend: "前端",
    cat_backend: "后端",
    cat_database: "数据库",
    cat_automation: "自动化",
    cat_science: "科学",
    cat_accessibility: "无障碍",
    sort_popular: "最热门",
    sort_newest: "最新发布",
    feed_title_default: "今日趋势",
    what_is_skill: "什么是 Skill 技能库？",
    what_is_skill_desc: "Skill 是模块化、可执行的提示指南和脚本，它能赋予像 Hermes 这样的 AI 代理掌握特定开发任务的能力。将技能加入你的项目仓库中，看你的代理高效处理复杂的开发流程。",
    explore_framework: "探索 Hermes 代理框架",
    top_hunters: "热门贡献榜",
    pro_tip: "专业提示",
    integrate_ide: "集成至 IDE 中",
    integrate_ide_desc: "你可以在 VS Code 或 Zed 中使用命令行适配器运行这些技能。",
    footer_text: "© 2026 Skill Hunt. 用 🍊 风格为 AI 代理社区打造。",
    submit_title: "提交新 Skill 技能库",
    submit_subtitle: "与开发者社区分享一个代理技能。",
    label_name: "Skill 技能名称 *",
    label_author: "你的名字 / 组织名称 *",
    help_tagline: "显示在首页列表中的简明介绍。",
    label_description: "详细描述 *",
    label_category: "主分类 *",
    label_github: "GitHub 仓库地址",
    label_tags: "子标签 (以英文逗号分隔)",
    label_logo: "图标预览与颜色",
    btn_cancel: "取消",
    btn_submit: "提交技能库",
    select_category: "请选择分类",
    empty_state_title: "未找到相关技能",
    empty_state_desc: "请尝试重置筛选器或修改搜索内容。",
    discussion: "讨论板块",
    leave_comment: "发表评论",
    post_comment: "提交评论",
    input_username: "你的用户名 (例如: DevHacker)",
    input_thoughts: "写下你的想法...",
    no_comments: "暂无评论。快来发表第一条评论吧！",
    submitted_by: "提交者",
    github_repo: "GitHub 仓库",
    comments_suffix: "条评论",
    rank_suffix: "个技能已提交",
    upvote_btn: "点赞",
    loading: "加载中...",
    just_now: "刚刚",
    mins_ago: "分钟前",
    hours_ago: "小时前",
    days_ago: "天前"
  }
};

const tagTranslations = {
  en: {
    "Frontend": "Frontend",
    "Backend": "Backend",
    "Database": "Database",
    "Automation": "Automation",
    "Science": "Science",
    "Accessibility": "Accessibility",
    "Best Practices": "Best Practices",
    "Agent Skill": "Agent Skill",
    "Testing": "Testing",
    "MCP": "MCP",
    "Firebase": "Firebase",
    "Bioinformatics": "Bioinformatics",
    "API": "API",
    "Audit": "Audit",
    "UX": "UX",
    "Healthcare": "Healthcare",
    "Data": "Data"
  },
  zh: {
    "Frontend": "前端",
    "Backend": "后端",
    "Database": "数据库",
    "Automation": "自动化",
    "Science": "科学",
    "Accessibility": "无障碍测试",
    "Best Practices": "最佳实践",
    "Agent Skill": "代理技能",
    "Testing": "测试",
    "MCP": "MCP",
    "Firebase": "Firebase",
    "Bioinformatics": "生物信息",
    "API": "API接口",
    "Audit": "安全审计",
    "UX": "用户体验",
    "Healthcare": "医疗健康",
    "Data": "数据科学"
  }
};

class SkillHuntApp {
  constructor() {
    this.skills = [];
    this.upvotedIds = [];
    this.currentCategory = "all";
    this.currentSort = "popular"; // "popular" | "newest"
    this.searchQuery = "";
    this.currentLang = "en";

    // Cache DOM Elements
    this.skillsListEl = document.getElementById("skills-list");
    this.searchEl = document.getElementById("search-input");
    this.themeToggleEl = document.getElementById("theme-toggle");
    this.sunIconEl = this.themeToggleEl.querySelector(".sun-icon");
    this.moonIconEl = this.themeToggleEl.querySelector(".moon-icon");
    
    // Language Toggle
    this.langToggleEl = document.getElementById("lang-toggle");
    
    // Modal Elements
    this.detailModal = document.getElementById("detail-modal");
    this.submitModal = document.getElementById("submit-modal");
    
    // Forms
    this.submitForm = document.getElementById("submit-skill-form");

    this.init();
  }

  init() {
    // 1. Detect and Init Language
    this.initLanguage();

    // 2. Load Data
    this.loadData();

    // 3. Setup Theme
    this.initTheme();

    // 4. Render Layout Texts & Components
    this.updateStaticTranslations();
    this.populateCategorySelect();
    this.render();
    this.renderLeaderboard();

    // 5. Bind Events
    this.bindEvents();
  }

  initLanguage() {
    const savedLang = localStorage.getItem("skill_hunt_lang");
    if (savedLang) {
      this.currentLang = savedLang;
    } else {
      // Auto-detect browser language
      const browserLang = (navigator.language || navigator.userLanguage).toLowerCase();
      this.currentLang = browserLang.startsWith("zh") ? "zh" : "en";
      localStorage.setItem("skill_hunt_lang", this.currentLang);
    }
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === "en" ? "zh" : "en";
    localStorage.setItem("skill_hunt_lang", this.currentLang);
    
    // Refresh texts
    this.updateStaticTranslations();
    this.populateCategorySelect();
    this.render();
    this.renderLeaderboard();
    
    // If detail modal is open, refresh its content to reflect the selected language
    const detailBody = document.getElementById("detail-modal-body");
    if (this.detailModal.open && detailBody.dataset.skillId) {
      this.showSkillDetails(detailBody.dataset.skillId);
    }
  }

  updateStaticTranslations() {
    const translations = i18n[this.currentLang];
    
    // Translate all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });

    // Translate placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[key]) {
        el.setAttribute("placeholder", translations[key]);
      }
    });

    // Translate Category filter pills text
    const categoryMapping = {
      all: "cat_all",
      frontend: "cat_frontend",
      backend: "cat_backend",
      database: "cat_database",
      automation: "cat_automation",
      science: "cat_science",
      accessibility: "cat_accessibility"
    };

    document.querySelectorAll("#category-filters .cat-pill").forEach(pill => {
      const cat = pill.getAttribute("data-category");
      const translationKey = categoryMapping[cat];
      if (translationKey && translations[translationKey]) {
        pill.textContent = translations[translationKey];
      }
    });

    // Update lang toggle display
    this.langToggleEl.textContent = this.currentLang === "en" ? "中文" : "EN";
  }

  populateCategorySelect() {
    const categorySelect = document.getElementById("submit-category");
    const currentVal = categorySelect.value;
    
    const categories = [
      { val: "Frontend", key: "cat_frontend" },
      { val: "Backend", key: "cat_backend" },
      { val: "Database", key: "cat_database" },
      { val: "Automation", key: "cat_automation" },
      { val: "Science", key: "cat_science" },
      { val: "Accessibility", key: "cat_accessibility" }
    ];

    let html = `<option value="">${i18n[this.currentLang].select_category}</option>`;
    categories.forEach(cat => {
      html += `<option value="${cat.val}">${i18n[this.currentLang][cat.key]}</option>`;
    });

    categorySelect.innerHTML = html;
    categorySelect.value = currentVal;
  }

  loadData() {
    // Load skills
    const storedSkills = localStorage.getItem("skill_hunt_skills");
    if (storedSkills) {
      try {
        this.skills = JSON.parse(storedSkills);
      } catch (e) {
        this.skills = [...window.initialSkills];
      }
    } else {
      this.skills = [...window.initialSkills];
      localStorage.setItem("skill_hunt_skills", JSON.stringify(this.skills));
    }

    // Load upvoted IDs
    const storedVotes = localStorage.getItem("skill_hunt_voted_ids");
    if (storedVotes) {
      try {
        this.upvotedIds = JSON.parse(storedVotes);
      } catch (e) {
        this.upvotedIds = [];
      }
    } else {
      this.upvotedIds = [];
      localStorage.setItem("skill_hunt_voted_ids", JSON.stringify(this.upvotedIds));
    }
  }

  saveSkills() {
    localStorage.setItem("skill_hunt_skills", JSON.stringify(this.skills));
  }

  saveVotes() {
    localStorage.setItem("skill_hunt_voted_ids", JSON.stringify(this.upvotedIds));
  }

  initTheme() {
    const savedTheme = localStorage.getItem("skill_hunt_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeIcons(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("skill_hunt_theme", newTheme);
    this.updateThemeIcons(newTheme);
  }

  updateThemeIcons(theme) {
    if (theme === "dark") {
      this.sunIconEl.style.display = "block";
      this.moonIconEl.style.display = "none";
    } else {
      this.sunIconEl.style.display = "none";
      this.moonIconEl.style.display = "block";
    }
  }

  bindEvents() {
    // Search
    this.searchEl.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.render();
    });

    // Theme Toggle
    this.themeToggleEl.addEventListener("click", () => this.toggleTheme());

    // Language Toggle
    this.langToggleEl.addEventListener("click", () => this.toggleLanguage());

    // Category Filter Navigation
    const categoryContainer = document.getElementById("category-filters");
    categoryContainer.addEventListener("click", (e) => {
      const button = e.target.closest(".cat-pill");
      if (!button) return;

      categoryContainer.querySelectorAll(".cat-pill").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      this.currentCategory = button.dataset.category;
      this.render();
    });

    // Sort buttons
    document.getElementById("sort-votes").addEventListener("click", (e) => {
      document.getElementById("sort-newest").classList.remove("active");
      e.target.classList.add("active");
      this.currentSort = "popular";
      this.render();
    });

    document.getElementById("sort-newest").addEventListener("click", (e) => {
      document.getElementById("sort-votes").classList.remove("active");
      e.target.classList.add("active");
      this.currentSort = "newest";
      this.render();
    });

    // Submit Skill Modals
    document.getElementById("open-submit-btn").addEventListener("click", () => {
      this.submitModal.showModal();
    });

    document.getElementById("close-submit-btn").addEventListener("click", () => {
      this.submitModal.close();
    });

    document.getElementById("cancel-submit-btn").addEventListener("click", () => {
      this.submitModal.close();
    });

    // Handle Submit Form
    this.submitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });

    // Close Modals on click outside content
    [this.detailModal, this.submitModal].forEach(modal => {
      modal.addEventListener("click", (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          modal.close();
        }
      });
    });

    // Close detail modal
    document.getElementById("close-detail-btn").addEventListener("click", () => {
      this.detailModal.close();
    });
  }

  handleFormSubmit() {
    const name = document.getElementById("submit-name").value.trim();
    const author = document.getElementById("submit-author").value.trim();
    const taglineEn = document.getElementById("submit-tagline-en").value.trim();
    const taglineZh = document.getElementById("submit-tagline-zh").value.trim();
    const descEn = document.getElementById("submit-desc-en").value.trim();
    const descZh = document.getElementById("submit-desc-zh").value.trim();
    const category = document.getElementById("submit-category").value;
    const githubUrl = document.getElementById("submit-github").value.trim();
    const subTagsInput = document.getElementById("submit-tags").value.trim();
    const logoText = document.getElementById("submit-logo-text").value.trim().toUpperCase() || "SK";
    const logoBg = document.getElementById("submit-logo-bg").value;

    const tags = [category];
    if (subTagsInput) {
      subTagsInput.split(",").forEach(t => {
        const cleaned = t.trim();
        // Capitalize tag to store standardized key
        if (cleaned) {
          const capitalized = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
          if (!tags.includes(capitalized)) tags.push(capitalized);
        }
      });
    }

    const newSkill = {
      id: "skill-" + Date.now(),
      name_en: name,
      name_zh: name, // Custom name uses exact input
      tagline_en: taglineEn,
      tagline_zh: taglineZh,
      description_en: descEn,
      description_zh: descZh,
      author,
      tags,
      votes: 1, // Start with 1 vote (author's vote)
      commentsCount: 0,
      githubUrl: githubUrl || "",
      logoBg,
      logoText,
      comments: [],
      timestamp: new Date().toISOString()
    };

    // Prepend new skill to state
    this.skills.unshift(newSkill);
    
    // Automatically upvote own submission
    this.upvotedIds.push(newSkill.id);

    // Save
    this.saveSkills();
    this.saveVotes();

    // Reset Form
    this.submitForm.reset();
    this.submitModal.close();

    // Re-render
    this.render();
    this.renderLeaderboard();
  }

  handleUpvote(skillId, event) {
    if (event) event.stopPropagation(); // Avoid opening modal

    const skill = this.skills.find(s => s.id === skillId);
    if (!skill) return;

    const index = this.upvotedIds.indexOf(skillId);
    let upvoted = false;

    if (index === -1) {
      this.upvotedIds.push(skillId);
      skill.votes++;
      upvoted = true;
    } else {
      this.upvotedIds.splice(index, 1);
      skill.votes = Math.max(0, skill.votes - 1);
    }

    this.saveSkills();
    this.saveVotes();

    // Render list
    this.render();

    // If detail modal is open and displaying this skill, update it
    const activeModalBody = document.getElementById("detail-modal-body");
    const activeSkillIdAttr = activeModalBody.dataset.skillId;
    if (this.detailModal.open && activeSkillIdAttr === skillId) {
      const modalVoteBtn = activeModalBody.querySelector(".upvote-btn");
      if (modalVoteBtn) {
        modalVoteBtn.classList.toggle("upvoted", upvoted);
        modalVoteBtn.querySelector(".vote-count").textContent = skill.votes;
      }
    }
  }

  showSkillDetails(skillId) {
    const skill = this.skills.find(s => s.id === skillId);
    if (!skill) return;

    const isUpvoted = this.upvotedIds.includes(skill.id);
    const detailBody = document.getElementById("detail-modal-body");
    
    detailBody.dataset.skillId = skill.id;

    // Resolve translations
    const name = this.currentLang === "zh" ? (skill.name_zh || skill.name_en) : skill.name_en;
    const description = this.currentLang === "zh" ? (skill.description_zh || skill.description_en) : skill.description_en;
    
    // Render comments list
    let commentsHtml = "";
    if (skill.comments && skill.comments.length > 0) {
      const sortedComments = [...skill.comments].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      commentsHtml = sortedComments.map(c => `
        <div class="comment-item">
          <div class="comment-meta">
            <span class="comment-author">${this.escapeHTML(c.author)}</span>
            <span class="comment-date">${this.formatDate(c.timestamp)}</span>
          </div>
          <div class="comment-text">${this.escapeHTML(c.text)}</div>
        </div>
      `).join("");
    } else {
      commentsHtml = `<p class="no-comments">${i18n[this.currentLang].no_comments}</p>`;
    }

    const githubButton = skill.githubUrl ? `
      <a href="${skill.githubUrl}" target="_blank" class="secondary-btn">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
        </svg>
        ${i18n[this.currentLang].github_repo}
      </a>
    ` : "";

    detailBody.innerHTML = `
      <div class="detail-header">
        <div class="detail-logo" style="background-color: ${skill.logoBg || '#ff6154'};">
          ${this.escapeHTML(skill.logoText || name.slice(0,2).toUpperCase())}
        </div>
        <div class="detail-header-info">
          <h2>${this.escapeHTML(name)}</h2>
          <div class="detail-author-row">${i18n[this.currentLang].submitted_by} <strong>@${this.escapeHTML(skill.author)}</strong></div>
          <div class="detail-badges">
            ${skill.tags.map(t => `<span class="meta-badge">${this.escapeHTML(this.translateTag(t))}</span>`).join("")}
          </div>
        </div>
      </div>

      <p class="detail-desc">${this.escapeHTML(description)}</p>

      <div class="detail-actions">
        <button class="upvote-btn ${isUpvoted ? 'upvoted' : ''}" onclick="app.handleUpvote('${skill.id}', event)">
          <svg class="vote-arrow" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
          </svg>
          ${i18n[this.currentLang].upvote_btn}
          <span class="vote-count">${skill.votes}</span>
        </button>
        ${githubButton}
      </div>

      <div class="comments-section">
        <h3>${i18n[this.currentLang].discussion} <span class="comment-count-badge" id="modal-comment-count">${skill.comments ? skill.comments.length : 0}</span></h3>
        
        <div class="comments-list" id="modal-comments-list">
          ${commentsHtml}
        </div>

        <div class="comment-form">
          <h4>${i18n[this.currentLang].leave_comment}</h4>
          <form id="add-comment-form">
            <div class="comment-form-grid">
              <input type="text" id="comment-author" required placeholder="${i18n[this.currentLang].input_username}">
              <textarea id="comment-text" required placeholder="${i18n[this.currentLang].input_thoughts}" rows="3"></textarea>
              <button type="submit" class="primary-btn" style="justify-content: center;">${i18n[this.currentLang].post_comment}</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const commentForm = document.getElementById("add-comment-form");
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleCommentSubmit(skill.id);
    });

    this.detailModal.showModal();
  }

  handleCommentSubmit(skillId) {
    const authorEl = document.getElementById("comment-author");
    const textEl = document.getElementById("comment-text");
    const author = authorEl.value.trim();
    const text = textEl.value.trim();

    if (!author || !text) return;

    const skill = this.skills.find(s => s.id === skillId);
    if (!skill) return;

    if (!skill.comments) skill.comments = [];
    
    const newComment = {
      id: "comment-" + Date.now(),
      author,
      text,
      timestamp: new Date().toISOString()
    };

    skill.comments.push(newComment);
    skill.commentsCount = skill.comments.length;

    this.saveSkills();

    // Refresh details modal content
    this.showSkillDetails(skillId);

    // Refresh list behind
    this.render();
  }

  render() {
    this.skillsListEl.innerHTML = "";

    // Filter Skills
    let filtered = this.skills.filter(s => {
      const name = this.currentLang === "zh" ? (s.name_zh || s.name_en) : s.name_en;
      const tagline = this.currentLang === "zh" ? (s.tagline_zh || s.tagline_en) : s.tagline_en;
      const desc = this.currentLang === "zh" ? (s.description_zh || s.description_en) : s.description_en;

      // Search match
      const nameMatch = name.toLowerCase().includes(this.searchQuery);
      const taglineMatch = tagline.toLowerCase().includes(this.searchQuery);
      const authorMatch = s.author.toLowerCase().includes(this.searchQuery);
      const descMatch = desc.toLowerCase().includes(this.searchQuery);
      const tagsMatch = s.tags.some(tag => {
        const translatedTag = this.translateTag(tag).toLowerCase();
        return tag.toLowerCase().includes(this.searchQuery) || translatedTag.includes(this.searchQuery);
      });
      
      const queryMatches = nameMatch || taglineMatch || authorMatch || descMatch || tagsMatch;

      // Category match
      let categoryMatches = true;
      if (this.currentCategory !== "all") {
        categoryMatches = s.tags.some(tag => tag.toLowerCase() === this.currentCategory);
      }

      return queryMatches && categoryMatches;
    });

    // Sort Skills
    if (this.currentSort === "popular") {
      filtered.sort((a, b) => b.votes - a.votes);
    } else {
      filtered.sort((a, b) => {
        const timeA = a.timestamp ? new Date(a.timestamp) : new Date(0);
        const timeB = b.timestamp ? new Date(b.timestamp) : new Date(0);
        return timeB - timeA;
      });
    }

    if (filtered.length === 0) {
      this.skillsListEl.innerHTML = `
        <div class="empty-state">
          <h3>${i18n[this.currentLang].empty_state_title}</h3>
          <p>${i18n[this.currentLang].empty_state_desc}</p>
        </div>
      `;
      return;
    }

    // Update main section title
    const count = filtered.length;
    const titleEl = document.getElementById("feed-title");
    if (this.currentCategory === "all") {
      titleEl.textContent = `${i18n[this.currentLang].feed_title_default} (${count})`;
    } else {
      const catKey = "cat_" + this.currentCategory;
      const catTranslated = i18n[this.currentLang][catKey] || this.currentCategory;
      titleEl.textContent = `${catTranslated} (${count})`;
    }

    // Generate HTML
    filtered.forEach(skill => {
      const isUpvoted = this.upvotedIds.includes(skill.id);
      const card = document.createElement("div");
      card.className = "skill-card";
      card.dataset.id = skill.id;
      
      card.addEventListener("click", () => this.showSkillDetails(skill.id));

      const name = this.currentLang === "zh" ? (skill.name_zh || skill.name_en) : skill.name_en;
      const tagline = this.currentLang === "zh" ? (skill.tagline_zh || skill.tagline_en) : skill.tagline_en;

      const primaryCategory = skill.tags[0] || "General";
      const secondaryTags = skill.tags.slice(1).slice(0, 2);

      card.innerHTML = `
        <div class="skill-logo" style="background-color: ${skill.logoBg || '#ff6154'};">
          ${this.escapeHTML(skill.logoText || name.slice(0, 2).toUpperCase())}
        </div>
        <div class="skill-details-brief">
          <div class="skill-title-row">
            <span class="skill-name">${this.escapeHTML(name)}</span>
            <span class="skill-author">by @${this.escapeHTML(skill.author)}</span>
          </div>
          <p class="skill-tagline">${this.escapeHTML(tagline)}</p>
          <div class="skill-meta">
            <span class="meta-badge category-badge">${this.escapeHTML(this.translateTag(primaryCategory))}</span>
            ${secondaryTags.map(tag => `<span class="meta-badge">${this.escapeHTML(this.translateTag(tag))}</span>`).join("")}
            <span class="comments-link">
              <svg viewBox="0 0 24 24" width="12" height="12">
                <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9,22M10,16V19.08L13.08,16H20V4H4V16H10Z" />
              </svg>
              ${skill.comments ? skill.comments.length : 0} ${i18n[this.currentLang].comments_suffix}
            </span>
          </div>
        </div>
        <div class="upvote-container">
          <button class="upvote-btn ${isUpvoted ? 'upvoted' : ''}" onclick="app.handleUpvote('${skill.id}', event)">
            <svg class="vote-arrow" viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
            </svg>
            <span class="vote-count">${skill.votes}</span>
          </button>
        </div>
      `;

      this.skillsListEl.appendChild(card);
    });
  }

  renderLeaderboard() {
    const stats = {};
    this.skills.forEach(s => {
      stats[s.author] = (stats[s.author] || 0) + 1;
    });

    const sortedHunters = Object.entries(stats)
      .map(([author, count]) => ({ author, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);

    const colors = ["#ff6154", "#3b82f6", "#10b981"];

    const leaderboardListEl = document.querySelector(".leaderboard-list");
    if (!leaderboardListEl) return;

    leaderboardListEl.innerHTML = sortedHunters.map((hunter, index) => `
      <div class="leaderboard-item">
        <div class="hunter-rank">${index + 1}</div>
        <div class="hunter-avatar" style="background-color: ${colors[index] || '#6b7280'};">
          ${hunter.author.slice(0, 1).toUpperCase()}
        </div>
        <div class="hunter-info">
          <span class="hunter-name">${this.escapeHTML(hunter.author)}</span>
          <span class="hunter-meta">${hunter.count} ${i18n[this.currentLang].rank_suffix}</span>
        </div>
      </div>
    `).join("");
  }

  // Helpers
  translateTag(tag) {
    const dict = tagTranslations[this.currentLang];
    return dict[tag] || tag;
  }

  escapeHTML(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  formatDate(isoString) {
    if (!isoString) return i18n[this.currentLang].just_now;
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return i18n[this.currentLang].just_now;
    if (diffMins < 60) return `${diffMins}${i18n[this.currentLang].mins_ago}`;
    if (diffHours < 24) return `${diffHours}${i18n[this.currentLang].hours_ago}`;
    if (diffDays < 7) return `${diffDays}${i18n[this.currentLang].days_ago}`;

    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  }
}

// Instantiate App globally
window.app = new SkillHuntApp();
