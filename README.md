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

To preview locally: open `index.html` directly in a browser, or serve the folder
(`npx serve .` / `python -m http.server`) since some browsers restrict `fetch`/module
behavior on `file://` — this site doesn't use either, so opening the file directly works too.
