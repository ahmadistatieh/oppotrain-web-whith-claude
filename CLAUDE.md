# Furniro — Furniture E-commerce Landing Page

## Project Overview

Furniro is a responsive, single-page furniture e-commerce landing page built as a
faithful reproduction of a provided UI screenshot. It presents a hero banner, product
categories, a product catalog with interactive cards, a room-inspiration carousel, an
Instagram-style gallery, and a footer with a newsletter form. The project is
front-end only (no backend) and focuses on clean component architecture, reusable
pieces, and responsive layout.

## Tech Stack

- **React 18** — component-based UI
- **Vite 5** — dev server and build tool
- **Plain CSS** — one stylesheet per component (co-located), plus a global stylesheet
  with CSS custom properties (design tokens). No CSS frameworks.
- **Google Fonts (Poppins)** — loaded in `index.html`
- No extra runtime libraries — only `react` and `react-dom`.

## Folder Structure

```
furniro/
├── index.html                 # HTML entry; loads fonts + mounts React
├── package.json               # scripts + dependencies (react, react-dom, vite)
├── vite.config.js             # Vite + React plugin config
├── CLAUDE.md                  # this file
├── public/
│   └── favicon.svg            # gold triangle logo mark
└── src/
    ├── main.jsx               # React root; imports the global stylesheet
    ├── App.jsx                # composes all sections in page order
    ├── styles/
    │   └── index.css          # design tokens (--gold, spacing) + shared .btn / .section-head
    ├── assets/                # 24 local .jpg images (hero, categories, products, gallery)
    ├── utils/
    │   └── icons.jsx          # reusable inline SVG icon components (shared, deduped)
    ├── data/
    │   ├── products.js        # 8-product array (imports its own product images)
    │   ├── navLinks.js        # header navigation labels
    │   ├── browseRange.js     # category cards (Dining / Living / Bedroom)
    │   ├── inspirationSlides.js  # carousel slides
    │   ├── galleryImages.js   # masonry gallery photos
    │   └── footerLinks.js     # footer address + link columns
    └── components/            # one folder per component (jsx + css + barrel index.js)
        ├── Header/
        ├── HeroSection/
        ├── BrowseRange/
        ├── ProductsSection/
        ├── ProductCard/
        ├── InspirationSection/
        ├── GallerySection/
        └── Footer/
```

Each component folder contains:
- `Component.jsx` — the component
- `Component.css` — its scoped styles
- `index.js` — a barrel (`export { default } from './Component'`) so imports read
  `./components/Header` instead of `./components/Header/Header`.

## Main Components

| Component | Responsibility |
|-----------|----------------|
| `Header` | Sticky white navbar: logo, nav links (from `navLinks`), account/search/wishlist/cart icons, and a mobile hamburger menu. Adds a shadow on scroll. |
| `HeroSection` | Full-bleed hero image with a cream content card, "Discover Our **New** Collection" heading, and BUY NOW button. |
| `BrowseRange` | Three category cards (Dining / Living / Bedroom) rendered from `browseRange` data, with hover zoom. |
| `ProductCard` | **Reusable** card: product image, discount/new badge, hover overlay with Add to cart + Share / Compare / Like actions, price with optional strikethrough. |
| `ProductsSection` | Maps the `products` array to `ProductCard`s; "Show More" toggles an extended grid. |
| `InspirationSection` | "50+ Beautiful rooms" carousel driven by `inspirationSlides`: featured image, thumbnails, arrow, and pagination dots (state via `useState`). |
| `GallerySection` | Asymmetric CSS-grid masonry of `#FuniroFurniture` photos from `galleryImages`. |
| `Footer` | Company address + link columns (from `footerLinks`) + newsletter form with submit feedback. |

Presentation data lives in `src/data/*` and shared SVGs in `src/utils/icons.jsx`, so
components stay focused on markup and behavior.

## Skills Practiced

- **React.js component-based development** — breaking a UI into small, focused components
- **Vite project setup** — configuring and running a modern React build tool
- **CSS layout and responsive design** — Flexbox, CSS Grid, media queries, design tokens
- **Working with local assets and images** — importing images so the bundler fingerprints them
- **Creating reusable components** — a single `ProductCard` and a shared icon set
- **Managing product data using JavaScript arrays** — data-driven rendering via `.map()`
- **Building a full landing page from a UI screenshot** — translating a design into code
- **Code organization and project structure** — folder-per-component, data/utils separation, barrels
- **Debugging imports and layout issues** — fixing relative paths after restructuring, verifying with builds

## How to Run

```bash
cd furniro
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
```

Other commands:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Notes for Future Improvements

- **Routing** — add React Router for real Shop / About / Contact / product-detail pages.
- **Cart & wishlist state** — implement actual add-to-cart / like behavior (Context or Zustand).
- **Real images** — swap the Unsplash placeholders in `src/assets/` for licensed product photos.
- **Accessibility** — audit focus states, keyboard navigation for the carousel, and color contrast.
- **Performance** — add responsive `srcset`/lazy-loading for images and code-split below-the-fold sections.
- **Testing** — add unit tests (Vitest + React Testing Library) for `ProductCard` and the carousel.
- **Backend integration** — fetch products from an API instead of a static array.
```
