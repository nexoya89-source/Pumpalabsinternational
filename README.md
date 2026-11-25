# PUMPALABS — International Digital Solutions & Business Intelligence

**From Business Intelligence to Digital Solutions.**

Official corporate website for **PUMPALABS**, operating from **Argentina** across **United States, Canada, United Kingdom, Spain, Chile, and Uruguay**.

## Divisions

- **PUMPALABS Intelligence**: Commercial intelligence, market research, B2B prospecting, buyer & supplier identification, and international opportunity analysis.
- **PUMPALABS Digital**: Web development, digital catalogs, automations, client acquisition, and enterprise digital solutions.

## Demonstration Projects

- **Demo Uñas**: https://pumpalabs-ar.github.io/Demo-unas/
- **Demo Taller AR**: https://pumpalabs-ar.github.io/Demo-taller-ar/

## Tech Stack & Deliverables

- **Core**: Vanilla TypeScript + Vite (`npm run build` outputs static bundle to `dist/`)
- **Languages**: Bilingual — English (`en`, default) and Spanish (`es`)
- **Contact Dispatch**: Client-side validated inquiry form generating structured `mailto:nexoya89@gmail.com` drafts with one-tap copy fallback (zero paid backend or API required)
- **SEO & Hosting**: `index.html` (OpenGraph, Twitter Cards, Schema.org JSON-LD), `public/sitemap.xml`, `public/robots.txt`, `public/favicon.svg`, `netlify.toml`

## Local Development & Build

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Publishing on Netlify from Android

You can publish this site to `https://pumpalabs.netlify.app/` directly from an Android phone without paid tools or a desktop PC:

### Option A — Deploy via GitHub + Netlify (Recommended)

1. Download or export the project ZIP from AI Studio to your Android device (**Downloads** folder).
2. Extract the ZIP using your Android **Files** app (or **ZArchiver**).
3. Open **Chrome** on Android, log into **GitHub** (`github.com`), and create or open your repository.
4. Upload the extracted project files (`index.html`, `package.json`, `netlify.toml`, `tsconfig.json`, `types.d.ts`, `public/`, `src/`, `README.md`) to the repository (exclude `node_modules/` and `dist/`).
5. Open **app.netlify.com** in Chrome on Android and sign in.
6. Select **Add new site → Import an existing project → GitHub** and pick your repository.
7. Verify the build settings (detected automatically from `netlify.toml`):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
8. Tap **Deploy site**. Once live, go to **Site configuration → Change site name** and set `pumpalabs` (if not already connected to `pumpalabs.netlify.app`).

### Option B — Manual Drag & Drop (`dist/` folder)

If you already built the static `dist/` folder (via `npm run build` in Termux or a build environment):

1. Open **app.netlify.com/drop** in Chrome on Android (enable **Desktop site** in Chrome's 3-dot menu if needed).
2. Select or drop the compiled `dist/` folder.
3. Netlify deploys immediately to your free `.netlify.app` URL.
