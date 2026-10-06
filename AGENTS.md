# AGENTS.md — Global Knowledge Base

> **Project:** Pizzería Pedestales
> **Role:** Frontend Website
> **Framework:** Nuxt 4 / Vue 3

---

## 1. Overview

This repository contains the frontend application for **Pizzería Pedestales**, an interactive digital menu and landing page. It showcases the pizza catalog, handles category filtering, and displays promotions.

AI agents act as **frontend co-authors** and **design assistants**: they generate Vue components, optimize UI/UX, apply Tailwind CSS styling, and maintain architecture consistency.

---

## 2. Commands & Verification

> **⚠️ Important:** The application runs on Nuxt 4 and is strictly 100% TypeScript.

```bash
# Start the development server
npm run dev

# Build the application for production
npm run build

# Rebuild the Graphify architecture knowledge graph (Run this after ANY file modification)
npm run graphify:rebuild

# 🛡️ CI/CD & Auditing (Run these validation scripts constantly to ensure stability)
npm run verify     # Runs typecheck -> lint -> build. ALWAYS run this after making changes to guarantee a green exit code 0.
npm run analyze    # Opens the bundle analyzer to debug library sizes and performance.
npm run lint:fix   # Auto-fixes Vue HTML formatting and ESLint rules.
npm run typecheck  # Runs strict TS validation via vue-tsc.
```

---

## 3. Technologies and versions

| Package                  | Version           |
|--------------------------|-------------------|
| `nuxt`                   | `^4.0.3`          |
| `vue`                    | `^3.5.18`         |
| `typescript`             | `^5.9.2`          |
| `tailwindcss`            | `^3.4.17`         |
| `@iconify/vue`           | `^5.0.0`          |
| `@nuxt/image`            | `^1.11.0`         |
| `swiper`                 | `^14.2.0`         |
| `@vueuse/motion`         | `^3.0.3`          |
| `nuxt-gtag`              | `^4.0.0`          |

**Architecture Details:**
- **Vue 3 Composition API**: Strict use of `<script setup lang="ts">`.
- **TypeScript**: 100% Coverage. All configs (`tailwind.config.ts`, `nuxt.config.ts`, scripts) MUST be `.ts`.
- **Styling**: Tailwind CSS via `@nuxtjs/tailwindcss` with custom brand colors. Ensure WCAG AA contrast ratios (4.5:1).
- **Animations**: Uses `@vueuse/motion` (e.g. `v-motion-slide-visible-bottom`). Do NOT install other heavy animation libraries unless requested.
- **Analytics**: Handled via `nuxt-gtag`. Custom events use `useTrackEvent('event_name')`.
- **Images**: `@nuxt/image` (`<NuxtImg>`) auto-converts heavy `public/` PNGs to WebP formats. Always use the `sizes` attribute for responsive sizing and optimal LCP.
- **Accessibility**: All interactive elements (buttons, links, inputs) must have discernible text or `aria-label` attributes to maintain a 100 Lighthouse Accessibility score.

---

## 4. Controlled Errors, Warnings & Known Bugs

As an AI Agent, **DO NOT attempt to "fix" or override the following issues**. They are controlled and safely ignored in this environment. Attempting to fix them will break the system.

- **NPM Audit Vulnerabilities**: `npm audit fix` is safe. **NEVER run `npm audit fix --force`**. The high-severity vulnerabilities flagged (in `braces`, `sharp`, `node-forge`) belong strictly to the local dev environment (Tailwind compilation / CLI). Forcing fixes will downgrade and break Nuxt and Tailwind major versions. Do not panic about them.
- **Nuxt-OG-Image Warning**: You might see `WARN No OG image renderer is installed, so OG images are off.`. This is expected. Do not install additional renderers like `takumi` unless explicitly asked.
- **SEO module (`@nuxtjs/seo`) Auto-Imports**: In Nuxt 4 SSR, the `useSchemaOrg` auto-import might throw a 500 error (`useSchemaOrg is not defined`). **Workaround:** We write standard `JSON-LD` objects inside standard `useHead({ script: [{ type: 'application/ld+json', innerHTML: ... }] })` inside `app.vue`. Do not revert to `useSchemaOrg`.
- **Typecheck NuxtImage Bug**: `node_modules/@nuxt/image` currently has a type-mismatch bug (`TS2537`) with `NonNullable<ResolvableArray<ResolvableLink>>` due to `@unhead/vue` updates. This has been manually patched in `node_modules` to keep `npm run verify` green. If a user runs `npm install` and the bug returns, **ignore it**, or carefully re-apply the patch to `node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue`.

---

## 5. Code conventions

- **Language Policy (CRITICAL)**: All codebase elements (variable names, functions, file names, code comments, markdown documentation, PR descriptions, and console logs) **MUST be in English**. ONLY the final user-facing text (copy) inside Vue templates must be in Spanish.
- **Vue 3 Composition API**: Always use `<script setup lang="ts">`. Avoid the Options API.
- **Business Logic Separation**: Complex logic, states, and raw data should be kept in `composables/` and `types/` (e.g. `useMenu.ts`, `pizza.ts`). Do NOT hardcode massive arrays of data directly in Vue component templates.
- **Tailwind CSS**: Use utility classes directly in the `<template>`. Avoid writing custom CSS in `<style scoped>`.
- **UI Consistency**: Maintain the established design system (warm backgrounds, specific border treatments, typographic scales). Reference existing components like `Card.vue` before creating new ones.

---

## 6. Global Limits

```text
Always:
  - Run `npm run verify` to check type safety, linting, and build stability after ANY changes.
  - Run `npm run graphify:rebuild` after modifying code files to keep the AI knowledge graph updated.
  - Keep responsive design in mind (mobile-first approach). Use `sm:`, `md:`, `lg:` prefixes.
  - Optimize images using `<NuxtImg>` with `format="webp"`.

Ask:
  - Before modifying `nuxt.config.ts` or Tailwind configuration, as it affects the entire app globally.
  - Before introducing new third-party libraries or dependencies into `package.json`.

Never:
  - Write comments or codebase documentation in Spanish (except UI text).
  - Use `npm audit fix --force`.
  - Override ESLint rules blindly without checking if the code can be fixed properly.
  - Try to "fix" the controlled vulnerabilities or expected warnings listed in Section 4.
```

---

## 7. Execution policy

After completing a UI or logic change, **you MUST ALWAYS automatically run `npm run graphify:rebuild`** to keep the project's knowledge base synced. 

Additionally, run `npm run verify` to ensure you didn't break the build or introduce TS/Lint errors. If errors arise, fix them immediately. Only instruct the user to verify visually in their local browser (`http://localhost:3000`) once the verification suite passes.
