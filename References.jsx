// References.jsx
const projects = [
  { title: "Aéroport International Djerba-Zarzis", country: "Tunisie", client: "OACA", sector: "Aéroport", specs: ["MT 9×1000 kVA", "BT 2×630 kVA", "GTC"], featured: true, img: "assets/projects/djerba_airport.jpg" },
  { title: "Hôtel Nour Palace ★★★★★", country: "Tunisie · Mahdia", client: "Société Hôtel Palace · 1 100 lits", sector: "Hôtellerie", specs: ["MT 2×1000 kVA", "CDI 1024", "GTC"], img: "assets/projects/nour_palace.jpg" },
  { title: "Hôtel LAICO Maya Maya", country: "Congo · Brazzaville", client: "Rénovation et extension", sector: "Hôtellerie", specs: ["MT/BT", "UPS", "Alcatel", "CCTV"], img: "assets/projects/laico_maya.jpg" },
  { title: "Station de pompage de Billy", country: "Tunisie · Sahel/Sfax", client: "SONEDE · lot n°6", sector: "Eau", specs: ["MT 2×2500 kVA", "3 pompes 550 kW", "Télégestion"], img: "assets/projects/sonede_pumping.jpg" },
  { title: "SUPCOM — extension électricité", country: "Tunisie · Tunis", client: "Min. des Technologies", sector: "Université", specs: ["UPS", "Réseaux info", "Sonorisation"], img: "assets/projects/supcom.jpg" },
  { title: "IGH R+8 office building", country: "Congo · Pointe-Noire", client: "Tour de bureaux", sector: "Tertiaire", specs: ["MT/BT", "Sécurité incendie", "CCTV"], img: "assets/projects/igh_pointe_noire.jpg" },
  { title: "Autoroute Sfax-Gabès", country: "Tunisie", client: "Ministère de l'Équipement", sector: "Autoroute", specs: ["Éclairage", "MT/BT", "Postes péage"], img: "assets/projects/autoroute.jpg" },
  { title: "Bardo — Chambre des Conseillers", country: "Tunisie · Tunis", client: "Assemblée parlementaire", sector: "Public", specs: ["BT", "CCTV", "Sonorisation"], img: "assets/projects/bardo.jpg" },
  { title: "Éclairage public Bizerte", country: "Tunisie · Bizerte", client: "Municipalité de Bizerte", sector: "Public", specs: ["Éclairage", "Lot 3"], img: "assets/projects/bizerte.jpg" },
];

const filterDefs = {
  fr: ["Tous", "Tunisie", "International", "Aéroport", "Hôtellerie", "Eau", "Public"],
  en: ["All",  "Tunisia", "International", "Airport",  "Hospitality","Water","Public"],
};

const Reference = ({ p, lang }) => {
  const [imgOk, setImgOk] = React.useState(true);
  const featured = lang === "en" ? "★ Featured project" : "★ Référence phare";
  return (
  <article style={{
    background: "#fff",
    border: p.featured ? "2px solid var(--ele-navy)" : "1px solid var(--border-1)",
    borderRadius: p.featured ? 14 : 8,
    overflow: "hidden",
    boxShadow: p.featured ? "none" : "var(--shadow-1)",
    transition: "all 200ms cubic-bezier(0.2,0,0,1)",
    cursor: "pointer"
  }}>
    <div style={{
      aspectRatio: "16 / 9", position: "relative",
      background: "linear-gradient(135deg, #2E4F8C 0%, #1A3668 70%)",
      display: "flex", alignItems: "flex-end", padding: 14,
      overflow: "hidden"
    }}>
      {imgOk && p.img && (
        <img src={p.img} alt={p.title} onError={() => setImgOk(false)}
          style={{position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover"}} />
      )}
      <div style={{position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15, 36, 71, 0.7) 0%, rgba(15, 36, 71, 0.1) 50%, transparent 100%)"}}/>
      <span style={{
        position: "relative",
        fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.95)",
        letterSpacing: "0.08em", textTransform: "uppercase",
        padding: "4px 10px", border: "1px solid rgba(255,255,255,0.45)", borderRadius: 999,
        backdropFilter: "blur(4px)", background: "rgba(15,36,71,0.25)"
      }}>{p.country}</span>
      {p.featured && (
        <span style={{
          position: "absolute", top: 14, left: 14,
          fontSize: 10, fontWeight: 700, color: "#fff",
          letterSpacing: "0.18em", textTransform: "uppercase",
          background: "var(--ele-red)", padding: "4px 8px", borderRadius: 2
        }}>{featured}</span>
      )}
    </div>
    <div style={{padding: "18px 20px 20px"}}>
      <div style={{fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ele-red)", marginBottom: 6}}>{p.sector}</div>
      <h3 style={{margin: "0 0 6px", fontSize: 18, lineHeight: 1.25, color: "var(--ele-ink-1)"}}>{p.title}</h3>
      <div style={{fontSize: 13, color: "var(--fg-3)", marginBottom: 14}}>{p.client}</div>
      <div style={{display: "flex", flexWrap: "wrap", gap: 6}}>
        {p.specs.map((s, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
            color: "var(--ele-navy)", background: "var(--ele-mist)",
            padding: "3px 8px", borderRadius: 4
          }}>{s}</span>
        ))}
      </div>
    </div>
  </article>
  );
};

const References = ({ lang = "fr" }) => {
  const labels = filterDefs[lang] || filterDefs.fr;
  const [filterIdx, setFilterIdx] = React.useState(0);

  const sectorMap = {
    fr: { "Aéroport": "Aéroport", "Hôtellerie": "Hôtellerie", "Eau": "Eau", "Public": "Public" },
    en: { "Airport": "Aéroport", "Hospitality": "Hôtellerie", "Water": "Eau", "Public": "Public" },
  };
  const sm = sectorMap[lang] || sectorMap.fr;
  const label = labels[filterIdx];

  const filtered =
    filterIdx === 0 ? projects :
    label === "Tunisie" || label === "Tunisia" ? projects.filter(p => p.country.startsWith("Tunisie")) :
    label === "International" ? projects.filter(p => !p.country.startsWith("Tunisie")) :
    projects.filter(p => p.sector === (sm[label] || label));

  const eyebrow = lang === "en" ? "Selected references" : "Références sélectionnées";
  const headline = lang === "en" ? "Trusted on critical infrastructure" : "De confiance sur les infrastructures critiques";

  return (
    <section id="references" style={{padding: "96px 32px", background: "var(--bg-page)"}}>
      <div style={{maxWidth: 1280, margin: "0 auto"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 24}}>
          <div>
            <div style={{color: "var(--ele-red)", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase"}}>{eyebrow}</div>
            <h2 style={{fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, lineHeight: 1.05, color: "var(--ele-navy)", textTransform: "uppercase", margin: "12px 0 0"}}>
              {headline}
            </h2>
          </div>
          <div style={{display: "flex", gap: 6, flexWrap: "wrap"}}>
            {labels.map((f, i) => (
              <button key={i} onClick={() => setFilterIdx(i)} style={{
                padding: "6px 14px", borderRadius: 999,
                fontSize: 13, fontWeight: 500,
                background: i === filterIdx ? "var(--ele-navy)" : "transparent",
                color: i === filterIdx ? "#fff" : "var(--ele-navy)",
                border: i === filterIdx ? "1px solid var(--ele-navy)" : "1px solid var(--border-2)",
                cursor: "pointer", fontFamily: "var(--font-sans)"
              }}>{f}</button>
            ))}
          </div>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24}}>
          {filtered.map((p, i) => <Reference key={i} p={p} lang={lang} />)}
        </div>
      </div>
    </section>
  );
};
window.References = References;
