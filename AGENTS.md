# Repository Guidelines

## Project Structure & Module Organization
`app/` contains Next.js App Router entry points, route segments, `layout.tsx`, and global styles in `globals.css`. Put reusable UI in `components/`, and keep page-sized content blocks in `sections/`. Store typed portfolio data in `data/` such as `data/resume.ts`. Static assets belong in `public/`. Root-level config lives in `tailwind.config.ts`, `tsconfig.json`, and `next.config.mjs`. Treat `.new.tsx` and `.phase3.tsx` files as draft variants until they are intentionally promoted.

## Build, Test, and Development Commands
Run `npm install` once to sync dependencies. Use `npm run dev` for local development at `http://localhost:3000`. Use `npm run build` to produce a production build and catch compile-time issues, then `npm run start` to smoke-test the built app. Run `npm run lint` before opening a PR; it applies the configured Next.js ESLint rules.

## Coding Style & Naming Conventions
This repo uses strict TypeScript and React function components. Follow the existing 2-space indentation and prefer double quotes to match current files. Export components in PascalCase (`HomeHorizontal`) while keeping filenames and route segments kebab-case (`site-nav.tsx`, `app/about`). Use the `@/` path alias for internal imports instead of long relative paths. Keep styling in Tailwind utility classes, and place shared tokens or theme extensions in `globals.css` and `tailwind.config.ts`.

## Testing Guidelines
There is no dedicated automated test suite yet. Until one is added, treat `npm run lint` and `npm run build` as required checks. For UI work, manually verify `/`, `/about`, and `/contact` on both desktop and mobile widths, especially scroll, animation, and navigation behavior. If you introduce tests later, prefer colocated `*.test.tsx` files near the component they cover.

## Commit & Pull Request Guidelines
Recent commits use short, lowercase subjects such as `email-updated` and `portfolio-initial`. Keep commit messages concise, imperative, and scoped to one logical change. PRs should include a brief description, verification steps, and linked issues when applicable. For visual updates, attach before/after screenshots or a short recording so layout and animation changes can be reviewed quickly.

## Security & Content Notes
Do not commit secrets or API keys. Keep personal profile content centralized in `data/` so copy changes do not drift across components.
