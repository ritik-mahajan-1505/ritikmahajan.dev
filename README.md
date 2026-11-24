# ritikmahajan.dev

A staged personal portfolio for a full-stack AI engineer and product builder.

## Current implementation: Phase 3

The homepage now includes the approved first-screen composition plus the broader homepage narrative: an approach to product building, a selected-work index, engineering practice, and a GitHub-based closing invitation. It uses the **Independent Product Workshop** visual direction: warm paper surfaces, editorial display typography, ink-like text, restrained green/rust/gold accents, and original geometric artwork.

The page is responsive, uses semantic HTML, includes keyboard skip navigation and visible focus styles, and respects reduced-motion preferences. Project summaries are kept in `src/content/projects.ts`, separate from the page presentation, and contain only confirmed high-level facts. No detailed case studies, empty project routes, placeholder content, or unsupported claims have been added.

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

## Project content model

The current high-level project index is driven by `src/content/projects.ts`. It is intentionally small: name, stable slug, known status, category label, and a factual summary. Detailed case-study fields and routes are deferred until project-specific information is supplied and reviewed.

## Future project-page architecture

As product details are supplied, project content should live separately from its page presentation. The planned shape is:

- A typed project content record for title, slug, status, summary, confirmed details, contribution, technical decisions, media, and approved external links.
- A reusable project-detail layout that can present each project without forcing identical visual treatments.
- One route per project, for example `/work/open-pane`, `/work/interview-pilot-ai`, and `/work/agentops-mcp`.
- Work-in-progress projects must retain an explicit status and must not be described as shipped products.

Dedicated project routes and detailed showcases are intentionally **not implemented yet**. They will be added when the actual product information is available and reviewed.

## Design decisions

See [docs/creative-direction.md](docs/creative-direction.md) for the approved visual identity, desktop/mobile composition, rationale, constraints, and unresolved content questions.
