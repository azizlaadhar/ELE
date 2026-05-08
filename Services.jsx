// Services.jsx
const ServiceIcon = ({ name }) => {
  const paths = {
    bolt: <g><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M14 5l-6 8h4l-2 6 6-8h-4z" fill="currentColor" stroke="none"/></g>,
    flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.3-2.5-.7-5 1-7-1 5 4 5 4 9.5a4 4 0 1 1-8 0c0-1 .5-2 1-3"/>,
    network: <g><path d="m9 17-5-5 5-5M15 17l5-5-5-5"/></g>,
    droplets: <g><path d="M7.21 15A5 5 0 0 0 12 18a5 5 0 0 0 4.79-3"/><path d="M12 2c-3 4-6 8-6 11a6 6 0 0 0 12 0c0-3-3-7-6-11z"/></g>,
    sun: <g><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></g>,
    cpu: <g><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></g>,
  };
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      {paths[name]}
    </svg>
  );
};

const Services = ({ lang = "fr" }) => {
  const content = {
    fr: {
      eyebrow: "Ce que nous faisons",
      headline: "Solutions électriques & techniques intégrées",
      services: [
        { icon: "bolt",     title: "Courant fort", body: "Moyenne tension, distribution BT, groupes électrogènes, onduleurs, tableaux TGBT et postes de transformation." },
        { icon: "flame",    title: "Sécurité incendie", body: "Détection adressable, alarme, CMSI/CDI, réseaux sprinklers et extincteurs automatiques." },
        { icon: "network",  title: "Courant faible & réseaux", body: "Câblage structuré, commutation, téléphonie, CCTV, contrôle d'accès, anti-intrusion." },
        { icon: "droplets", title: "Stations de pompage", body: "Alimentation MT, variation de vitesse, armoires de pompage, anti-bélier, télégestion." },
        { icon: "sun",      title: "Énergie renouvelable", body: "Centrales photovoltaïques et systèmes hybrides pour bâtiments et raccordement réseau." },
        { icon: "cpu",      title: "GTC / BMS", body: "Gestion technique centralisée pour bâtiments complexes : supervision, monitoring énergétique." },
      ],
    },
    en: {
      eyebrow: "What we do",
      headline: "Integrated electrical & technical packages",
      services: [
        { icon: "bolt",     title: "Strong-current systems", body: "Medium-voltage, low-voltage distribution, generators, UPS, main switchboards and transformer substations." },
        { icon: "flame",    title: "Fire safety & protection", body: "Addressable detection, alarm, CMSI/CDI, sprinkler networks and automatic suppression systems." },
        { icon: "network",  title: "IT & low-current networks", body: "Structured cabling, switches, telephony, CCTV, access control, anti-intrusion systems." },
        { icon: "droplets", title: "Pumping stations", body: "MV power supply, variable speed drives, pump control panels, anti-water-hammer, telemetry." },
        { icon: "sun",      title: "Renewable energy", body: "Photovoltaic plants and hybrid systems for buildings and grid connection." },
        { icon: "cpu",      title: "BMS / GTC", body: "Centralised technical management for complex buildings: supervision and energy monitoring." },
      ],
    },
  };

  const c = content[lang] || content.fr;

  return (
    <section id="services" style={{padding: "96px 32px", background: "var(--bg-surface)"}}>
      <div style={{maxWidth: 1280, margin: "0 auto"}}>
        <div style={{color: "var(--ele-red)", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase"}}>{c.eyebrow}</div>
        <h2 style={{fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, lineHeight: 1.05, color: "var(--ele-navy)", textTransform: "uppercase", margin: "12px 0 48px", maxWidth: 800}}>
          {c.headline}
        </h2>
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24}}>
          {c.services.map((s, i) => (
            <article key={i} style={{
              padding: 28, border: "1px solid var(--border-1)", borderRadius: 8,
              background: "#fff", transition: "all 200ms cubic-bezier(0.2,0,0,1)"
            }}>
              <div style={{color: "var(--ele-navy)", marginBottom: 20}}><ServiceIcon name={s.icon} /></div>
              <h3 style={{margin: "0 0 8px", fontSize: 20, fontWeight: 700, color: "var(--ele-ink-1)"}}>{s.title}</h3>
              <p style={{margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--fg-2)"}}>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
window.Services = Services;
