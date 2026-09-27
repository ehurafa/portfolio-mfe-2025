# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and tech leads evaluating Rafael Gomes for a Senior Front-end role (CLT or PJ). They arrive from LinkedIn, GitHub or a job application, spend a few minutes, and want to confirm stack, seniority, real experience and code quality before deciding on an interview.

## Product Purpose

Personal portfolio of Rafael Gomes, Senior Front-end Developer. Success means an evaluator leaves convinced he can own front-end architecture at scale and has a direct path to LinkedIn or GitHub.

## Positioning

Front-end architecture is the differentiator: micro-frontends, design systems and large-scale platforms (Ouribank, Mercado Bitcoin, VML, Infracommerce). The site itself is a working micro-frontend host (iframe runtime integration, EventBus, Error Boundaries), so the portfolio is part of the evidence, not only a container for it.

## Operating Context

- Host app in React + TypeScript + SCSS, Vite, npm workspaces monorepo (`apps/host`, `apps/projects`).
- Projects page reads posts from a WordPress REST API (ACF fields), with mock data fallback in `src/api/mockData.ts`.
- Laboratory page (hidden from the menu, route `/laboratorio`) embeds external projects in Angular, Vue, React and plain JavaScript via iframe; registry in `src/pages/projectsData.ts`.
- Routes: `/` Início, `/projetos`, `/projeto/:slug`, `/sobre-mim`, `/certificados`, `/laboratorio`.
- Content language: Portuguese (pt-BR).

## Capabilities and Constraints

- Keep the iframe micro-frontend architecture, EventBus, Mediator (Laboratory), Error Boundaries, project Registry and React Router page controller.
- CSS must stay standardized in SCSS tokens; media queries only through the mixins in `src/styles/tokens/_breakpoints.scss`, written inside the element's own block.
- SOLID and Clean Code; commits in English, semantic.
- Laboratory projects are external and do not follow the host's lint rules.
- Open: years of experience appear as both "14+" and "15+" in About; the correct figure is not confirmed.
- Open: Contact page still uses a placeholder e-mail (`contato@exemplo.com`) and is not routed.

## Brand Commitments

- Signature logo `src/assets/brand.png` ("Rafael Gomes") is required.
- Illustrated avatar `src/assets/vibrant-avatar.png` is required.
- Social links required: LinkedIn (linkedin.com/in/rflrafa), GitHub (github.com/ehurafa), Pinterest (br.pinterest.com/ehurafa/jobs).
- Role label: "Front-end Developer".
- Standing preference (2026-09-27 redesign): the category-standard developer portfolio, executed at the craft level of brittanychiang.com. Nothing flashy: no neon, glow or gradient text.

## Evidence on Hand

- Career timeline and stack in `src/pages/About.tsx` (Ouribank 2026, bycoders_/Mercado Bitcoin 2024–2026, VML 2023–2024, Maitha Tech/Infracommerce 2022).
- Project registry with screenshots in `public/screenshots/` and `src/pages/projectsData.ts`.
- Certificates page.
- No testimonials, client logos or metrics beyond those in About; do not invent them.

## Product Principles

1. An evaluator must find seniority, stack and current role within the first screen of Home and About.
2. Architecture claims are backed by something visible: a working project, a diagram or the site's own structure.
3. Every page offers a short path to GitHub or LinkedIn.
4. Keep claims factual; no invented numbers, clients or quotes.
