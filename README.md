# aaguerram.github.io

Personal portfolio — Angel Guerra, Solutions Architect & Senior Backend Developer
(Agentic AI · Python · AWS/Azure · Technical Pre-Sales).

Live at: https://aaguerram.github.io

Plain HTML/CSS/JS, no build step. Bilingual (EN/ES, toggle in the nav, persisted in
`localStorage`), light/dark theme (`prefers-color-scheme` + manual toggle).

```
index.html
assets/
  style.css
  script.js
  Angel_Guerra_CV_EN.pdf
  Angel_Guerra_CV_ES.pdf
```

Projects live in `assets/script.js` (`CONTENT.en.projects` / `CONTENT.es.projects`), ordered
AI-first, then the most recent public repositories, then private work. Set `ai: true` on an item to
get the "Agentic AI" badge; keep both languages in sync.

To preview locally: open `index.html` directly in a browser, or serve the folder
(`npx serve .` / `python -m http.server`) since some browsers restrict `fetch`/module
behavior on `file://` — this site doesn't use either, so opening the file directly works too.
