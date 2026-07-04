// Application State Management
class SkillHuntApp {
  constructor() {
    this.skills = [];
    this.upvotedIds = [];
    this.currentCategory = "all";
    this.currentSort = "popular"; // "popular" | "newest"
    this.searchQuery = "";

    // Cache DOM Elements
    this.skillsListEl = document.getElementById("skills-list");
    this.searchEl = document.getElementById("search-input");
    this.themeToggleEl = document.getElementById("theme-toggle");
    this.sunIconEl = this.themeToggleEl.querySelector(".sun-icon");
    this.moonIconEl = this.themeToggleEl.querySelector(".moon-icon");
    
    // Modal Elements
    this.detailModal = document.getElementById("detail-modal");
    this.submitModal = document.getElementById("submit-modal");
    
    // Forms
    this.submitForm = document.getElementById("submit-skill-form");

    this.init();
  }

  init() {
    // 1. Load Data
    this.loadData();

    // 2. Setup Theme
    this.initTheme();

    // 3. Render Initial State
    this.render();
    this.renderLeaderboard();

    // 4. Bind Events
    this.bindEvents();
  }

  loadData() {
    // Load skills
    const storedSkills = localStorage.getItem("skill_hunt_skills");
    if (storedSkills) {
      try {
        this.skills = JSON.parse(storedSkills);
      } catch (e) {
        console.error("Error parsing stored skills, fallback to initial", e);
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

    // Category Filter Navigation
    const categoryContainer = document.getElementById("category-filters");
    categoryContainer.addEventListener("click", (e) => {
      const button = e.target.closest(".cat-pill");
      if (!button) return;

      // Update UI active class
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
    const tagline = document.getElementById("submit-tagline").value.trim();
    const description = document.getElementById("submit-description").value.trim();
    const category = document.getElementById("submit-category").value;
    const githubUrl = document.getElementById("submit-github").value.trim();
    const subTagsInput = document.getElementById("submit-tags").value.trim();
    const logoText = document.getElementById("submit-logo-text").value.trim().toUpperCase() || "SK";
    const logoBg = document.getElementById("submit-logo-bg").value;

    const tags = [category];
    if (subTagsInput) {
      subTagsInput.split(",").forEach(t => {
        const cleaned = t.trim();
        if (cleaned && !tags.includes(cleaned)) tags.push(cleaned);
      });
    }

    const newSkill = {
      id: "skill-" + Date.now(),
      name,
      tagline,
      description,
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
    if (event) event.stopPropagation(); // Avoid opening modal when clicking vote inside card

    const skill = this.skills.find(s => s.id === skillId);
    if (!skill) return;

    const index = this.upvotedIds.indexOf(skillId);
    let upvoted = false;

    if (index === -1) {
      // Upvote
      this.upvotedIds.push(skillId);
      skill.votes++;
      upvoted = true;
    } else {
      // Cancel Upvote
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
    
    // Track active skill ID in modal element
    detailBody.dataset.skillId = skill.id;

    // Render HTML inside modal
    let commentsHtml = "";
    if (skill.comments && skill.comments.length > 0) {
      // Sort comments newest first
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
      commentsHtml = `<p class="no-comments">No comments yet. Start the conversation!</p>`;
    }

    const githubButton = skill.githubUrl ? `
      <a href="${skill.githubUrl}" target="_blank" class="secondary-btn">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
        </svg>
        GitHub Repository
      </a>
    ` : "";

    detailBody.innerHTML = `
      <div class="detail-header">
        <div class="detail-logo" style="background-color: ${skill.logoBg || '#ff6154'};">
          ${this.escapeHTML(skill.logoText || skill.name.slice(0,2).toUpperCase())}
        </div>
        <div class="detail-header-info">
          <h2>${this.escapeHTML(skill.name)}</h2>
          <div class="detail-author-row">Submitted by <strong>@${this.escapeHTML(skill.author)}</strong></div>
          <div class="detail-badges">
            ${skill.tags.map(t => `<span class="meta-badge">${this.escapeHTML(t)}</span>`).join("")}
          </div>
        </div>
      </div>

      <p class="detail-desc">${this.escapeHTML(skill.description)}</p>

      <div class="detail-actions">
        <button class="upvote-btn ${isUpvoted ? 'upvoted' : ''}" onclick="app.handleUpvote('${skill.id}', event)">
          <svg class="vote-arrow" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
          </svg>
          Upvote
          <span class="vote-count">${skill.votes}</span>
        </button>
        ${githubButton}
      </div>

      <div class="comments-section">
        <h3>Discussion <span class="comment-count-badge" id="modal-comment-count">${skill.comments ? skill.comments.length : 0}</span></h3>
        
        <div class="comments-list" id="modal-comments-list">
          ${commentsHtml}
        </div>

        <div class="comment-form">
          <h4>Leave a comment</h4>
          <form id="add-comment-form">
            <div class="comment-form-grid">
              <input type="text" id="comment-author" required placeholder="Your username (e.g. DevHacker)">
              <textarea id="comment-text" required placeholder="Write your thoughts..." rows="3"></textarea>
              <button type="submit" class="primary-btn" style="justify-content: center;">Post Comment</button>
            </div>
          </form>
        </div>
      </div>
    `;

    // Bind Comments Form event handler
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

    // Reset fields
    textEl.value = "";

    // Refresh detail modal content / list without closing
    this.showSkillDetails(skillId);

    // Refresh list behind
    this.render();
  }

  render() {
    this.skillsListEl.innerHTML = "";

    // Filter Skills
    let filtered = this.skills.filter(s => {
      // Search match
      const nameMatch = s.name.toLowerCase().includes(this.searchQuery);
      const taglineMatch = s.tagline.toLowerCase().includes(this.searchQuery);
      const authorMatch = s.author.toLowerCase().includes(this.searchQuery);
      const descMatch = s.description.toLowerCase().includes(this.searchQuery);
      const tagsMatch = s.tags.some(tag => tag.toLowerCase().includes(this.searchQuery));
      
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
      // Newest (custom id prefix/timestamp or position in array)
      filtered.sort((a, b) => {
        const timeA = a.timestamp ? new Date(a.timestamp) : new Date(0);
        const timeB = b.timestamp ? new Date(b.timestamp) : new Date(0);
        return timeB - timeA;
      });
    }

    if (filtered.length === 0) {
      this.skillsListEl.innerHTML = `
        <div class="empty-state">
          <h3>No skills found</h3>
          <p>Try resetting filters or adjusting your search query.</p>
        </div>
      `;
      return;
    }

    // Update main section title
    const count = filtered.length;
    const titleEl = document.getElementById("feed-title");
    titleEl.textContent = this.currentCategory === "all" 
      ? `Trending Today (${count})` 
      : `${this.capitalizeFirstLetter(this.currentCategory)} Skills (${count})`;

    // Generate HTML
    filtered.forEach(skill => {
      const isUpvoted = this.upvotedIds.includes(skill.id);
      const card = document.createElement("div");
      card.className = "skill-card";
      card.dataset.id = skill.id;
      
      // Click card to open modal
      card.addEventListener("click", () => this.showSkillDetails(skill.id));

      // Extract primary tag (category badge)
      const primaryCategory = skill.tags[0] || "General";
      const secondaryTags = skill.tags.slice(1).slice(0, 2); // Show at most 2 secondary badges

      card.innerHTML = `
        <div class="skill-logo" style="background-color: ${skill.logoBg || '#ff6154'};">
          ${this.escapeHTML(skill.logoText || skill.name.slice(0, 2).toUpperCase())}
        </div>
        <div class="skill-details-brief">
          <div class="skill-title-row">
            <span class="skill-name">${this.escapeHTML(skill.name)}</span>
            <span class="skill-author">by @${this.escapeHTML(skill.author)}</span>
          </div>
          <p class="skill-tagline">${this.escapeHTML(skill.tagline)}</p>
          <div class="skill-meta">
            <span class="meta-badge category-badge">${this.escapeHTML(primaryCategory)}</span>
            ${secondaryTags.map(tag => `<span class="meta-badge">${this.escapeHTML(tag)}</span>`).join("")}
            <span class="comments-link">
              <svg viewBox="0 0 24 24" width="12" height="12">
                <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9,22M10,16V19.08L13.08,16H20V4H4V16H10Z" />
              </svg>
              ${skill.comments ? skill.comments.length : 0} comments
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
    // Generate contributor leaderboard stats
    const stats = {};
    this.skills.forEach(s => {
      stats[s.author] = (stats[s.author] || 0) + 1;
    });

    const sortedHunters = Object.entries(stats)
      .map(([author, count]) => ({ author, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3); // top 3

    // Preset avatar bg colors
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
          <span class="hunter-meta">${hunter.count} skill${hunter.count > 1 ? 's' : ''} submitted</span>
        </div>
      </div>
    `).join("");
  }

  // Helpers
  escapeHTML(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  formatDate(isoString) {
    if (!isoString) return "just now";
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  }
}

// Instantiate App globally for access in HTML inline event handlers (like onclick)
window.app = new SkillHuntApp();
