# Peptide education site

Plain HTML, CSS and JavaScript. No build step, no npm, no framework.

- `config.js` is the only file for branding: name, colors, optional store and community links, supplies list.
- `data.js` holds all peptide content (PEPTIDES, SCHEDULES) plus the shared nav, footer and age gate.
- `index.html`, `library.html`, `peptide.html`, `calculator.html`, `about.html` are the pages.
- `styles.css` is the shared stylesheet. Colors come from config.js.

Rules for edits:
- Keep every page educational. Never add health claims, guarantees, or "buy this" language to peptide pages.
- Never add real person names or medical advice. Keep the disclaimers and the age gate.
- To add a peptide, copy an existing entry in `data.js` and add its schedule to SCHEDULES.
- Hosting is GitHub plus Cloudflare Pages. Deploying = commit and push to the main branch. Cloudflare builds automatically with no build command and the output directory left as the repo root.
- Explain things to the owner in plain language. They are not a developer.
