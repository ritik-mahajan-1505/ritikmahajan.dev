# ritikmahajan.dev

A staged personal portfolio for a full-stack AI engineer and product builder.

## Current implementation: Phase 1

The current release intentionally contains only the homepage first screen. It establishes the **Independent Product Workshop** visual direction: warm paper surfaces, editorial display typography, ink-like text, restrained green/rust/gold accents, and an original geometric workbench illustration.

The first screen is responsive, uses semantic HTML, supports keyboard focus and reduced-motion preferences, and avoids placeholder project content or unsupported claims.

## Stack

- React + TypeScript
- Vite
- Modern CSS
- No backend or CMS

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Cloudflare Pages

- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

Connect the Git repository in Cloudflare Pages when ready. The repository has not been deployed as part of this implementation.

## Future project-page architecture

As product details are supplied, project content should live separately from its page presentation. The planned shape is:

- A typed project content record for title, slug, status, summary, confirmed details, contribution, technical decisions, media, and approved external links.
- A reusable project-detail layout that can present each project without forcing identical visual treatments.
- One route per project, for example `/work/open-pane`, `/work/interview-pilot-ai`, and `/work/agentops-mcp`.
- Work-in-progress projects must retain an explicit status and must not be described as shipped products.

These routes, content records, and detailed showcases are intentionally **not implemented in Phase 1**. They will be added when the actual product information is available and after the first-screen review gate is approved.

## Design decisions

See [docs/creative-direction.md](docs/creative-direction.md) for the approved visual identity, desktop/mobile composition, rationale, constraints, and unresolved content questions.
