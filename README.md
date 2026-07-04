# 🍊 Skill Hunt

A beautiful, high-fidelity, Product Hunt-style directory for discovering, upvoting, and sharing AI Agent Skills. Built for the AI developer community as a lightweight, zero-dependency Minimum Viable Product (MVP).

![Skill Hunt Interface Concept](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80)

## Features

- **🍊 Product Hunt Style Aesthetics**: Modern styling, orange brand theme, sleek glassmorphic details, custom SVGs, and card alignments.
- **🌓 Theme Engine**: Switch between Dark Mode (default) and Light Mode. Remembers preferences across sessions using `localStorage`.
- **🗳️ Dynamic Voting**: Increment and decrement votes on cards and inside detail views. Persisted in browser memory.
- **💬 Detailed Discussions**: Open modal views of skills to read descriptions, click GitHub repositories, and write comments.
- **🔍 Real-Time Search**: Fast instant filter for skills by name, taglines, description, author, or specific tags.
- **🏷️ Category Filtering**: Categorized pills (Frontend, Backend, Database, Automation, Science, Accessibility) to segment findings.
- **➕ Community Submission**: Submit new skills dynamically using a multi-field form modal. Newly submitted skills show up instantly in the feed and update the hunter leaderboard.

## Tech Stack

- **HTML5**: Semantic tags (`<header>`, `<main>`, `<aside>`, `<section>`, `<dialog>`).
- **CSS3**: Custom HSL color variables, CSS transitions, keyframe animations, glassmorphism, responsive CSS grid/flex layouts.
- **ES6 JavaScript**: LocalStorage state management, standard event bindings, custom date formatting, search/sorting algorithms.

## Running Locally

Because the project uses standard ES6 modules (and references local scripts in standard fashion), you can open the file directly in your browser or run a simple local web server:

### Option 1: Double Click
Simply double-click the `index.html` file in your file browser.

### Option 2: Python (Built-in)
Run the following in the project root:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

### Option 3: Node.js (npx)
Run the following in the project root:
```bash
npx -y serve
```

## GitHub Pages Deployment

To host this site for free on GitHub Pages:
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial MVP release of Skill Hunt"
   gh repo create skill-hunt --public --source=. --push
   ```
2. Go to your repository settings on GitHub: **Settings -> Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose `main` (or `master`) and `/ (root)`, then click **Save**.
5. Your site will be live at `https://<your-username>.github.io/skill-hunt/` within a few minutes!
