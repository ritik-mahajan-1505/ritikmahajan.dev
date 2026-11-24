# Approved creative direction — Phase 0

## Decision

**Concept A: The Independent Product Workshop**

A digital workshop belonging to an engineer who makes useful things. The experience should feel practical, tactile, curious, personal, and carefully organized—not like a software dashboard or a generic developer portfolio.

### Why this direction

- It makes a product-builder mindset tangible without pretending the portfolio is itself a product dashboard.
- It gives technical work a personal, authored setting.
- It supports future product case studies without requiring repetitive card grids.
- It can remain lightweight, responsive, accessible, and maintainable.

### Alternatives considered

- **B — Technical Field Journal:** strong editorial storytelling, but a reading-first journal is less suitable as the primary first impression for a product builder.
- **C — Experimental Interface Gallery:** potentially memorable, but risks making interaction and interface spectacle more prominent than the products and engineering.

The selected direction is A only; the visual language will not combine all three concepts.

## Visual identity specification

### Brand attributes

Tactile, useful, curious, precise, independent, thoughtful.

### Intended first impression

“This is an engineer who enjoys taking ideas seriously enough to make them real.”

### Color palette

| Token | Value | Usage |
|---|---|---|
| Paper | `#F1EEE5` | Main page surface |
| Deep ink | `#252720` | Primary text and controls |
| Muted ink | `#77766E` | Secondary labels |
| Workshop green | `#344B3D` | Structural illustration accent |
| Signal rust | `#B65E42` | Emphasis and small annotations |
| Utility gold | `#E9B95F` | Small highlights |
| Study paper | `#E6E0D3` | Illustration surface |

Color is used to establish hierarchy and identify annotations. No neon-on-dark treatment, ambient glow, gradient decoration, glass panels, or dashboard-like UI.

### Typography

- **Display:** DM Serif Display, regular and italic. Used for the main statement and expressive emphasis.
- **Body:** DM Sans. Used for readable supporting copy and controls.
- **Technical labels:** DM Mono. Used sparingly for metadata and small annotations.

Display typography is expressive but restrained. Body copy uses a comfortable measure and line height. Technical labels are supporting details, not visual noise.

### Layout and spacing

- Desktop: centered page shell with a maximum width of 1600px and generous responsive side gutters.
- Desktop hero: asymmetric two-column composition; text occupies the wider left column, original workbench study the right.
- Mobile: a deliberate single-column sequence—identity and headline first, supporting copy and primary action next, then the visual study.
- Whitespace is used to establish hierarchy, not to imply missing content.
- The header is compact and conventional. No unusual navigation model is required.

### Surfaces and graphic language

- Flat paper-like surfaces.
- Fine rules and grid lines.
- Square-edged controls and illustration frames.
- Original inline geometric artwork: layered forms, construction lines, annotations, and a restrained palette.
- No stock photography or invented product screenshots.

### Motion and interaction

- Only subtle button feedback.
- No scroll hijacking, hover-dependent content, animated hero dependency, or motion-heavy libraries.
- Honor `prefers-reduced-motion`.
- The page remains understandable with motion disabled and on touch devices.

### Explicitly prohibited

- Generic skill clouds or technology badge collections.
- Fake metrics, testimonials, customer logos, or adoption claims.
- Placeholder project cards or filler content.
- Decorative gradients, glows, blobs, and glass panels.
- Complex animation or 3D effects without a demonstrated need.

## First-screen composition

### Desktop

1. Compact header: lowercase wordmark, workshop descriptor, GitHub link.
2. Small engineering/product metadata line.
3. Left: short kicker, large multi-line statement, concise supporting paragraph, one primary action.
4. Right: original geometric workbench study with restrained annotations.
5. Bottom: quiet typographic footer rule and discipline labels.

### Mobile

1. Compact header with wordmark and a single external profile link.
2. Small discipline label.
3. Headline and supporting paragraph.
4. Primary action.
5. Workbench illustration and caption.
6. Minimal footer metadata.

The mobile layout is intentionally re-composed rather than compressed from desktop. No content depends on hover.

## Content rules

The public positioning is grounded in the roadmap: full-stack engineer and product builder working across practical AI and software products. No years-of-experience claim, business impact, scale, adoption, customer, or performance metric is added.

The known project names and statuses are reserved for later phases:
- Open-Pane — built product.
- Interview-Pilot-AI — built product.
- AgentOps MCP — built product.
- Real-Time Voice Conversion — work in progress / upcoming.

The initial screen does not pretend to explain these projects before their details are supplied.

## Scalability for future project pages

When product details are uploaded, add a content-first project model separate from presentation. Each project should have a stable slug and its own route (for example, `/work/open-pane`). A reusable case-study foundation can share structural conventions while allowing each project's visual treatment to differ.

Potential project content fields include:
- Name, slug, current status, and concise summary.
- Problem or opportunity and intended user.
- Confirmed product behavior.
- Owner's actual contribution.
- Confirmed system/architecture details and technical decisions.
- Challenges, trade-offs, learnings.
- Authorized screenshots, diagrams, demos, repository and product links.

Do not create empty routes, placeholder pages, or speculative project details now. Add the content model and routes when the supplied project information is ready, in the relevant later roadmap phase.

## Unresolved content questions

The supplied roadmap does not establish the preferred public title beyond the portfolio positioning, whether years of experience should be shown, exact personal contribution and implementation details per project, public demo/repository URLs, contact email, or professional profile links. These remain unclaimed until confirmed.

## Phase 1 implementation decisions

- React + TypeScript with Vite, as specified by the roadmap's technical approach.
- Modern CSS for layout, responsive behavior, typography, and motion.
- No animation library, 3D engine, backend, CMS, or state-management dependency.
- The only interactive behavior is a small copy-contact affordance if a confirmed address is added later; no contact affordance is shipped in this first-screen build.
- Cloudflare Pages build target: `npm run build`, output `dist`. Deployment and domain verification remain separate tasks.


## Phase 3 homepage narrative implementation

The homepage now extends below the approved first screen with:
- An approach section describing the confirmed problem-to-product mindset.
- A selected-work overview populated from a separate typed content file at `src/content/projects.ts`.
- A concise engineering-practice section grounded in the confirmed full-stack, AI/agent, and infrastructure experience.
- A closing invitation that links to the confirmed GitHub profile; no unverified email or profile is invented.

The project index uses only supplied names, broad descriptions, and statuses. Dedicated case-study routes and detailed content remain deferred until project documentation is supplied. Personal-curiosity content is omitted until details are provided.

The implementation remains responsive and uses semantic section landmarks, a skip link, keyboard-visible focus, and reduced-motion handling. Production build verification, browser QA, and deployment are intentionally deferred until the code is ready for the combined release review.
