# Diego Remicio — Portfolio

Personal portfolio built with Next.js 15, React 19, and Tailwind CSS 4. Dark-first design with a technical, developer-culture aesthetic.

## Tech Stack

- **Framework:** Next.js 15.5 (App Router)
- **UI:** React 19, Tailwind CSS 4
- **Language:** TypeScript
- **i18n:** next-intl (English, Spanish, Portuguese)
- **Theming:** next-themes (dark/light)
- **Fonts:** Geist Sans, Geist Mono
- **Package Manager:** pnpm
- **Deployment:** Vercel

## Features

- Internationalized content (EN/ES/PT) with locale-based routing
- Dark/light theme toggle with system preference detection
- Scroll-driven animations via IntersectionObserver (respects `prefers-reduced-motion`)
- Hash-based navigation with URL sync (`/#about`, `/#experience`, etc.)
- Responsive navbar with contextual Download CV button
- Featured project cards with live site links
- Accessible: semantic HTML, focus rings, keyboard navigable

## Sections

| Section    | Component         |
|------------|-------------------|
| Hero       | `Hero.tsx`        |
| About      | `About.tsx`       |
| Experience | `Experience.tsx`  |
| Skills     | `Skills.tsx`      |
| Projects   | `Projects.tsx`    |
| Contact    | `Contact.tsx`     |

## Project Structure

```
src/
├── app/[locale]/       # Locale-based pages & layout
├── components/         # UI components
├── data/               # Project data
├── i18n/               # i18n configuration
messages/               # Translation files (en, es, pt)
public/                 # Static assets, images, CVs, favicon
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `master` triggers automatic deployment via Git integration.

## License

Private project. All rights reserved.
