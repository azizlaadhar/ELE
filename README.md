# ELE Website

Self-contained marketing website for ELE — Etablissement Laadhar d'Electricité.

## Run locally
Open `index.html` directly in any modern browser, or serve the folder:

```
python3 -m http.server 8000
# → http://localhost:8000
```

## Put it on the web

Drop this **entire folder** onto:
- **Netlify Drop** — netlify.app/drop
- **Cloudflare Pages** — pages.cloudflare.com
- **Vercel** — vercel.com/new

Or push the folder to a GitHub repo and enable Pages.

## Replace placeholder project photos

The site looks for project photos at `assets/projects/*.jpg` in this exact list:

```
assets/projects/djerba_airport.jpg     — Aéroport Djerba-Zarzis
assets/projects/sfax_thyna.jpg         — Aéroport Sfax-Thyna           [NEW]
assets/projects/nour_palace.jpg        — Hôtel Nour Palace, Mahdia
assets/projects/laico_maya.jpg         — Hôtel LAICO Maya Maya, Brazzaville
assets/projects/elbo_brazzaville.jpg   — Immeuble R+9 ELBO, Brazzaville [NEW]
assets/projects/sonede_pumping.jpg     — Station de pompage SONEDE, Billy
assets/projects/supcom.jpg             — SUPCOM, Tunis
assets/projects/maternite_monastir.jpg — Maternité & Néonatologie, Monastir [NEW]
assets/projects/topnet.jpg             — TOPNET & HOTLINE, Tunis        [NEW]
assets/projects/igh_pointe_noire.jpg   — IGH R+8, Pointe-Noire
assets/projects/autoroute.jpg          — Autoroute Sfax–Gabès
assets/projects/bardo.jpg              — Bardo, Tunis
assets/projects/bizerte.jpg            — Éclairage public Bizerte
```

Drop your real photos in with the same filenames (1280×720 or larger, 16:9, JPG). The page will pick them up automatically — no rebuild needed.

## Edit copy / sections
Each section is a separate JSX file: `Header`, `Hero`, `Stats`, `Services`, `References`, `CTA`, `Footer`. Edit and refresh.
