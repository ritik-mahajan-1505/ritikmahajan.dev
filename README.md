# ritikmahajan.dev

A staged personal portfolio for a full-stack AI engineer and product builder.

## Current implementation: Phase 3

The homepage includes the approved first-screen composition plus the broader homepage narrative. Each selected project has a reusable detail route at `/work/<slug>`. It uses the **Independent Product Workshop** visual direction: warm paper surfaces, editorial display typography, ink-like text, restrained green/rust/gold accents, and original geometric artwork.

The page is responsive, uses semantic HTML, includes keyboard skip navigation and visible focus styles, and respects reduced-motion preferences. Project content is kept in `src/content/projects.ts`, separate from page presentation. Detail pages use the reusable layout in `src/pages/ProjectPage.tsx`. Long-form copy is explicitly marked as illustrative placeholder text derived only from each supplied project title and short description; it must be reviewed and replaced with verified facts before publication.

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

The project index and detail pages are driven by `src/content/projects.ts`. Each record includes a name, stable slug, known status, category, supplied summary, provisional positioning, draft narrative sections and details to confirm. All provisional copy is visibly identified and is not represented as verified product behavior.

## Future project-page architecture

As product details are supplied, project content should live separately from its page presentation. The planned shape is:

- A typed project content record for title, slug, status, summary, confirmed details, contribution, technical decisions, media, and approved external links.
- A reusable project-detail layout that can present each project without forcing identical visual treatments.
- One route per project, for example `/work/open-pane`, `/work/interview-pilot-ai`, and `/work/agentops-mcp`.
- Work-in-progress projects must retain an explicit status and must not be described as shipped products.

Dedicated project routes and detailed showcases are intentionally **not implemented yet**. They will be added when the actual product information is available and reviewed.

## Design decisions

See [docs/creative-direction.md](docs/creative-direction.md) for the approved visual identity, desktop/mobile composition, rationale, constraints, and unresolved content questions.
