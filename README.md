# Furniro — Furniture E-commerce Landing Page

A responsive, single-page furniture e-commerce landing page built with **React** and
**Vite**, recreated from a UI design screenshot. Clean component-based architecture,
reusable components, data-driven rendering, and fully responsive layout — no CSS
frameworks.

## ✨ Features

- **Sticky header** with logo, navigation, action icons, and a mobile hamburger menu
- **Hero section** with full-bleed image and a cream content card
- **Browse The Range** — Dining / Living / Bedroom category cards
- **Our Products** — 8 product cards with discount / "New" badges, hover overlay
  (Add to cart, Share, Compare, Like), and strikethrough pricing
- **Show More** toggle to reveal an extended product grid
- **Room inspiration carousel** with featured image, thumbnails, arrow, and dots
- **`#FuniroFurniture` masonry gallery**
- **Footer** with company info, link columns, and a working newsletter form
- **Responsive** across desktop, tablet, and mobile

## 🛠 Tech Stack

- [React 18](https://react.dev/) — component-based UI
- [Vite 5](https://vitejs.dev/) — dev server & build tool
- Plain CSS (one stylesheet per component) with CSS custom properties for design tokens
- Google Fonts (Poppins)

No extra runtime libraries — only `react` and `react-dom`.

## 🚀 Getting Started

```bash
# clone
git clone https://github.com/ahmadistatieh/oppotrain-web-whith-claude.git
cd oppotrain-web-whith-claude

# install dependencies
npm install

# start the dev server → http://localhost:5173
npm run dev
```

### Other scripts

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## 📁 Project Structure

```
src/
├── main.jsx                  # React entry; imports the global stylesheet
├── App.jsx                   # composes all sections in page order
├── styles/index.css          # design tokens + shared button / heading styles
├── assets/                   # local images (hero, categories, products, gallery)
├── utils/icons.jsx           # reusable inline SVG icon components
├── data/                     # presentation data (products, nav, gallery, footer…)
└── components/               # one folder per component (jsx + css + barrel index.js)
    ├── Header/
    ├── HeroSection/
    ├── BrowseRange/
    ├── ProductsSection/
    ├── ProductCard/
    ├── InspirationSection/
    ├── GallerySection/
    └── Footer/
```

Each component folder holds `Component.jsx`, `Component.css`, and an `index.js` barrel
so imports read `./components/Header` instead of `./components/Header/Header`.
Presentation data lives in `src/data/` and shared SVGs in `src/utils/icons.jsx`, keeping
components focused on markup and behavior.

See [`CLAUDE.md`](./CLAUDE.md) for a deeper breakdown of components, skills practiced,
and future-improvement notes.

## 📝 Notes

- Images are high-quality placeholder furniture/interior photos stored locally in
  `src/assets/`. Swap them for licensed product photography as needed.
- This is a front-end only project (no backend).

## 📄 License

For educational / portfolio use.
