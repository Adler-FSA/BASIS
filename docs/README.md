# Template 02 Master v2.4.1

Hero ≈ 3/4 VH • Zweispaltiges Grid • Adler‑Look • CTA „Jetzt starten“ • Quote‑Chips • E‑Mail‑Platzhalter via `?email=` oder `manifest/config.json`.

## Dateien
- `index.html` – Seite
- `assets/css/styles.css` – Styles
- `assets/js/main.js` – Logik (E‑Mail‑Platzhalter, aktive Pill‑Navigation)
- `manifest/config.json` – Fallback‑E‑Mail (`defaultEmail`)
- `media/playlist.json` – Platzhalter für künftigen Video/Musik‑Pool

## Personalisierung
- **Per URL**: `?email=dein.name@example.com`
- **Per Config**: `manifest/config.json`

## Testlinks (Beispiele)
> Passe ggf. den Repo‑Namen an. `?nocache=2025-10-12-070316` verhindert Browser‑Cache.
- GitHub Pages: `https://adler-fsa.github.io/LP-Generator/LP-Template-02-Master-v2.4.1/index.html?nocache=2025-10-12-070316`
- Rohansicht (dev, ohne Assets‑Handling): `https://raw.githubusercontent.com/Adler-FSA/LP-Generator/main/LP-Template-02-Master-v2.4.1/index.html?nocache=2025-10-12-070316`

## Deploy
1. Ordner ins Repository (z. B. `Adler-FSA/LP-Generator/LP-Template-02-Master-v2.4.1/`) hochladen.
2. GitHub Pages: Source auf `main` (root oder `/docs`) stellen. Root muss eine `index.html` haben.
3. Nach dem Publish ggf. **hard reload** + `?nocache=2025-10-12-070316`.

## 404‑Hinweis
Falls `404` auftritt, ist entweder der Build noch nicht durch, oder `index.html` liegt nicht im Pages‑Root/Docs. Prüfe die Pages‑Einstellung (Save‑Button) oder deploye manuell.
