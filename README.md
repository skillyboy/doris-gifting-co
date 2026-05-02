# Doris Gifting Co.

Marketing site for Doris Gifting Co. — premium, curated gift boxes.

**Live:** https://skillyboy.github.io/doris-gifting-co/

## Stack

- Vite + React 18
- Plain CSS variables (no UI framework)
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deploy

Pushes to `main` trigger the GitHub Actions workflow, which builds and publishes `dist/` to GitHub Pages. The Vite `base` is set to `/doris-gifting-co/` to match the project page path.

**One-time repo setup:** Settings → Pages → Source = **GitHub Actions**.

## Pages

- `/` Home — hero, featured products, about snippet, gallery teaser, services accordion, testimonials
- Services — services accordion + four-step process
- About — founder story
- Gallery — filterable grid with lightbox
- Contact — get-in-touch with mailto button
