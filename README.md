# Bến Garden Cafe Website ☕🌿

A modern, responsive, bilingual (English & Vietnamese) website built for **Bến Garden Cafe**, located in Cầu Giăng, Túy Loan, Hòa Vang, Đà Nẵng, Vietnam. 

Built with **Astro** and optimized for performance, accessibility, and local SEO.

---

## 🌟 Key Features

- **Bilingual Architecture**: Full route-based i18n support (`/en/` and `/vi/`).
- **Interactive Location Map**: Embedded Google Maps with direct coordinates to the cafe.
- **Categorized Menu**: Itemized pricing, category breakdowns, and official tagline integration.
- **SVG Flag Language Switcher**: Cross-platform support for flag navigation without emoji rendering issues.
- **Headless CMS Ready**: Clean component structure using Astro layouts and assets.

---

## 📁 Project Structure

```text
/
├── public/
│   ├── background-pattern.jpg
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/              # Optimized images, logos, and SVG flags
│   ├── components/          # Reusable UI components (Navbar, Footer, etc.)
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   └── Welcome.astro
│   ├── layouts/             # Page layouts
│   │   └── Layout.astro
│   └── pages/               # Route-based bilingual pages
│       ├── index.astro      # Root redirect
│       ├── en/              # English routes (index, menu, mission, photos, team)
│       └── vi/              # Vietnamese routes (index, menu, mission, photos, team)
├── astro.config.mjs
└── package.json
