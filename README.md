# ritikmahajan.dev — Independent Creative Studio

A responsive, static-first personal studio website built with semantic HTML, CSS and vanilla JavaScript.

## Project structure

```text
.
├── index.html
├── _headers
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── src/
    ├── main.js
    └── styles.css
```

## Run locally

No build tooling is required. Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy to Cloudflare Pages

1. Connect this repository in **Workers & Pages → Create → Pages → Connect to Git**.
2. Select this repository and set the framework preset to **None**.
3. Leave the build command empty.
4. Set the build output directory to `/` (the repository root).
5. Deploy, then add `ritikmahajan.dev` under **Custom domains**.
6. Follow Cloudflare's DNS instructions and verify HTTPS.

This is a static site; no build-time environment variables or server secrets are required.

## Before launch

- [ ] Replace illustrative work previews with real case studies.
- [ ] Confirm that `hello@ritikmahajan.dev` is active and monitored.
- [ ] Add social profile links when available.
- [ ] Review biography, copy and service descriptions for accuracy.
- [ ] Test mobile navigation and links on real devices.
- [ ] Add a social preview image if desired.
- [ ] Connect the custom domain and verify HTTPS.

The visual system uses warm paper tones, deep ink, muted green and terracotta accents, editorial typography, original inline vector artwork, and restrained motion. Reduced-motion preferences and keyboard focus states are supported.