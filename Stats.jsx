// Stats.jsx — heritage strip
const Stats = ({ lang = "fr" }) => {
  const items = {
    fr: [
      { n: "1976", l: "Année de fondation" },
      { n: "48+", l: "Années d'expérience" },
      { n: "14", l: "Pays · Tunisie & Afrique" },
      { n: "200+", l: "Projets livrés" },
    ],
    en: [
      { n: "1976", l: "Year founded" },
      { n: "48+", l: "Years of experience" },
      { n: "14", l: "Countries · Tunisia & Africa" },
      { n: "200+", l: "Projects delivered" },
    ],
  };
  const data = items[lang] || items.fr;
  return (
    <section style={{background: "var(--ele-paper)", padding: "48px 32px", borderTop: "1px solid var(--border-1)", borderBottom: "1px solid var(--border-1)"}}>
      <div style={{maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32}}>
        {data.map((it, i) => (
          <div key={i} style={{borderLeft: i === 0 ? "none" : "1px solid var(--border-1)", paddingLeft: i === 0 ? 0 : 24}}>
            <div style={{fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, lineHeight: 1, color: "var(--ele-navy)"}}>{it.n}</div>
            <div style={{marginTop: 8, fontSize: 13, color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600}}>{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
window.Stats = Stats;
