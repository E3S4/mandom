# mandom

> Time should be remembered, not merely counted.

![GitHub stars](https://img.shields.io/github/stars/E3S4/mandom?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/E3S4/mandom?style=for-the-badge&logo=github) ![GitHub issues](https://img.shields.io/github/issues/E3S4/mandom?style=for-the-badge&logo=github) ![Last commit](https://img.shields.io/github/last-commit/E3S4/mandom?style=for-the-badge&logo=github) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) ![License](https://img.shields.io/badge/License-GPLv3-blue?style=for-the-badge)

##  Description

Mandom is a lightweight desktop activity tracker designed to help users understand exactly where their time goes. Instead of gamifying productivity or pushing for constant optimization, it acts as an unobtrusive companion that logs daily sessions, tasks, and hours. By focusing on awareness, the application allows users to treat their productivity as a continuous timeline that can be reviewed and reflected upon later.

##  Key Features

- **Activity-Based Session Timer** — Start and stop sessions manually to track and record specific intervals of work or tasks throughout the day.
- **Chronological Timeline Reconstruction** — Visualize your logged activities sequentially as traces of time in a minimalist timeline view.
- **Daily and Weekly Statistics** — Review visual summaries and insights of your logged activities to observe long-term trends.
- **Local Data Storage** — Keep all your tracking history completely private by storing session records locally on your machine.
- **Lightweight Electron Desktop Experience** — Runs as a dedicated desktop application built with a clean HTML, CSS, and JavaScript interface.

##  Use Cases

- Users seeking a private, local-first alternative to cloud-based time trackers to analyze their daily workflow.
- Developers looking for a lightweight desktop timer to log session durations and tasks directly from their desktop.
- Individuals wanting a visual daily timeline to reflect on their habits without gamified distraction or optimization metrics.

##  Tech Stack

-  **Electron**
-  **JavaScript**

##  Quick Start

```bash

# 1. Clone the repository
git clone https://github.com/E3S4/mandom.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run start
```


## Available Scripts

- **start** — `npm run start`

## 📁 Project Structure

```
.
├── LICENSE
├── index.html
├── main.js
├── package.json
├── preload.js
├── script.js
└── style.css
```

##  Development Setup

### Node.js / JavaScript
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` (or `yarn` / `pnpm install` / `bun install`)
3. Start Mandom: see the **Quick Start** above

##  Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/E3S4/mandom.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style and include tests for new behavior where applicable.

## License

Licensed under the GNU General Public License v3.0 (GPL-3.0).

See the LICENSE file for details.

