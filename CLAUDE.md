# Portfolio — Diego Remicio

## Tech Stack
- Next.js 15.5, React 19, TypeScript, Tailwind CSS 4
- next-intl (EN/ES/PT), next-themes (light/dark)
- Fonts: Geist Sans (body), Geist Mono (code)
- Deployed target: Vercel

## Design Context

### Users
Dual audience: enterprise hiring managers/recruiters (United Airlines, JPMorgan-tier companies) AND startup founders/CTOs evaluating senior engineering talent. They arrive via LinkedIn, job boards, or direct referral. The portfolio must instantly communicate senior-level competence while remaining approachable — not intimidating, but undeniably sharp.

### Brand Personality
**Bold · Technical · Sharp**
Strong visual presence backed by substance. The design itself should feel like it was built by someone who cares about craft — precise spacing, intentional hierarchy, zero fluff. Confidence without arrogance.

### Aesthetic Direction
- **Dark-first & technical**: Dark mode is the default and primary experience. Terminal/IDE-inspired accents, selective monospace touches for technical elements (tech pills, dates, code references). Dev-culture aesthetic that signals "this person lives in the code."
- **Reference**: Brittany Chiang (v4) — dark background, clean section layout, single accent color, timeline-style experience, understated but polished.
- **Anti-references**: Generic template portfolios with stock gradients, excessive animations, or rainbow color schemes. Nothing that looks AI-generated or "Bootstrap default."
- **Theme**: Navy-tinted dark (#0C1322 bg) with blue accent (#3B82F6). Light mode exists but is secondary — keep it clean and professional (#F8FAFB bg, #1B4F72 accent).

### Design Principles

1. **Content over chrome** — Every visual element must serve the content. No decorative noise. Whitespace is a feature, not empty space.
2. **Technical authenticity** — The design should feel like it was built by an engineer, not designed by a template. Monospace accents, precise alignment, and developer-culture cues (but not cosplay).
3. **Hierarchy through restraint** — Use typography scale, weight, and color (not borders, boxes, or effects) to create information hierarchy. One accent color, used sparingly.
4. **Motion with purpose** — Animations exist to orient the user (scroll reveals, hover states), never to impress. Respect `prefers-reduced-motion`.
5. **Accessibility is non-negotiable** — WCAG AA minimum. Visible focus rings, sufficient contrast ratios, semantic HTML, keyboard navigable. The dark palette must maintain readable contrast.
