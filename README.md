# 🍕 Pizzería Pedestales Frontend

![Nuxt 4](https://img.shields.io/badge/Nuxt-4.0.3-00DC82?logo=nuxt.js)
![Vue.js](https://img.shields.io/badge/Vue.js-3.5.18-4FC08D?logo=vuedotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-100%25-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?logo=tailwindcss)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

Interactive frontend website and digital catalog for **Pizzería Pedestales**. Built with modern web technologies to deliver a fast, responsive, and SEO-optimized experience. 

## ✨ Key Features

*   **Interactive Catalog:** Dynamic pizza filtering and rendering without page reloads.
*   **Advanced Technical SEO:** Integration of `@nuxtjs/seo`, native JSON-LD structured data in `app.vue`, dynamic sitemaps, and auto-generated robots.txt.
*   **Integrated Analytics:** Event tracking (e.g., WhatsApp button clicks) using `nuxt-gtag`.
*   **Accessibility & Performance:** Fully compliant with WCAG AA contrast, semantic ARIA labels, responsive image sizing (`<NuxtImg>`), and PWA baseline metadata (manifest, theme colors).
*   **Smooth Animations:** Scroll-reveal effects powered by `@vueuse/motion`.
*   **Strict Typing:** 100% TypeScript architecture.

## 🛠️ Tech Stack

*   **Framework:** [Nuxt 4](https://nuxt.com/) / Vue 3 (Composition API)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Iconify](https://iconify.design/)
*   **Images:** Nuxt Image (On-the-fly WebP optimization from original PNGs)
*   **Carousels:** Swiper

---

## 🚀 Installation

Ensure you have **Node.js (v20 or higher)** installed on your system.

1.  Clone the repository or download the source code.
2.  Install project dependencies:

```bash
npm install
```

---

## 🛡️ Development & Audit Commands

### Development
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Auditing & Performance
Keep the codebase clean and audit the application bundle using these scripts:

*   `npm run verify`: Runs the full CI/CD validation suite (`typecheck` -> `lint` -> `build`). Run this before any deployment.
*   `npm run analyze`: Builds the app and opens the Bundle Analyzer map in the browser to debug library weights.
*   `npm run lint`: Checks for styling issues and bad practices in Vue/TS.
*   `npm run lint:fix`: Auto-fixes minor formatting and tagging issues.
*   `npm run typecheck`: Strictly validates TypeScript definitions across the entire architecture.

### Build
Compile the application for production (Server-Side Rendering):
```bash
npm run build
```
Preview the final build:
```bash
npm run preview
```

---

## 📂 Project Structure

```text
PizzeriaPedestales/
├── assets/          # Global CSS files and assets
├── components/      # Vue Components (e.g., ui/Card.vue)
├── pages/           # File-based routing views
├── plugins/         # Nuxt plugins
├── public/          # Static files (original images, PDFs, favicon)
├── types/           # Global TypeScript interfaces and types (pizza.ts)
├── composables/     # Reusable logic and state management (useMenu.ts)
├── .agents/         # AI agent rules
├── AGENTS.md        # Technical boundaries and knowledge base for AI
├── graphify-out/    # AI-generated architecture graph
├── nuxt.config.ts   # Module configuration, SEO, Nuxt settings
├── package.json     # npm scripts and dependencies
├── rebuild-graph.ts # TS script to generate the architectural graph
└── tailwind.config.ts # Typed Tailwind design system configuration
```

---

## 🤖 AI-Driven Architecture

This project heavily utilizes **Artificial Intelligence** (Google Antigravity/Gemini) as a core co-author. 
The `AGENTS.md` file serves as the internal rulebook and must be the primary source of truth for any agent interacting with the codebase.

When adding, renaming, or modifying structural components, you **must** update the AI knowledge graph by running:
```bash
npm run graphify:rebuild
```
