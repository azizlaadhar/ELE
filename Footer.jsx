// Footer.jsx
const Footer = ({ lang = "fr" }) => {
  const content = {
    fr: {
      cols: [
        { title: "Services", links: [
          { label: "Courant fort", href: "#services" },
          { label: "Courant faible", href: "#services" },
          { label: "Sécurité incendie", href: "#services" },
          { label: "Pompage", href: "#services" },
          { label: "Photovoltaïque", href: "#services" },
          { label: "GTC / BMS", href: "#services" },
        ]},
        { title: "Entreprise", links: [
          { label: "Histoire depuis 1976", href: "#company" },
          { label: "Direction", href: "#company" },
          { label: "Carrières", href: "mailto:ele.laadhar@yahoo.fr?subject=Carri%C3%A8res" },
          { label: "Certifications", href: "#company" },
        ]},
        { title: "Présence", links: [
          { label: "Tunisie", href: "#references" },
          { label: "Congo Brazzaville", href: "#references" },
          { label: "Pointe-Noire", href: "#references" },
          { label: "Mauritanie", href: "#references" },
          { label: "Belgique", href: "#references" },
        ]},
      ],
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      tagline: "Etablissement Laadhar d'Electricité — Since 1976.",
    },
    en: {
      cols: [
        { title: "Services", links: [
          { label: "Strong-current systems", href: "#services" },
          { label: "Low-current / IT", href: "#services" },
          { label: "Fire safety", href: "#services" },
          { label: "Pumping stations", href: "#services" },
          { label: "Photovoltaic", href: "#services" },
          { label: "BMS / GTC", href: "#services" },
        ]},
        { title: "Company", links: [
          { label: "History since 1976", href: "#company" },
          { label: "Management", href: "#company" },
          { label: "Careers", href: "mailto:ele.laadhar@yahoo.fr?subject=Careers" },
          { label: "Certifications", href: "#company" },
        ]},
        { title: "Presence", links: [
          { label: "Tunisia", href: "#references" },
          { label: "Congo Brazzaville", href: "#references" },
          { label: "Pointe-Noire", href: "#references" },
          { label: "Mauritania", href: "#references" },
          { label: "Belgium", href: "#references" },
        ]},
      ],
      legal: "Legal notice",
      privacy: "Privacy policy",
      tagline: "Etablissement Laadhar d'Electricité — Since 1976.",
    },
  };

  const c = content[lang] || content.fr;

  const handleClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <footer style={{background: "var(--ele-navy-deep)", color: "#fff"}}>
      <div style={{maxWidth: 1280, margin: "0 auto", padding: "64px 32px 32px"}}>
        <div style={{display: "grid", gridTemplateColumns: "1.4fr repeat(3, 1fr)", gap: 48, marginBottom: 48}}>
          <div>
            <img
              src="assets/logo_ele_white.png"
              alt="ELE"
              style={{height: 36, marginBottom: 16, display: "block"}}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "assets/logo_ele_transparent.png";
                e.target.style.filter = "brightness(0) invert(1)";
              }}
            />
            <div style={{fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.7)"}}>
              Etablissement Laadhar d'Electricité<br/>
              10, Rue Zaafrana 2073<br/>
              Borj Louzir · Ariana · Tunisie<br/>
              <a href="tel:+21670689320" style={{color: "rgba(255,255,255,0.85)", textDecoration: "none"}}>+216 70 689 320</a><br/>
              <a href="mailto:ele.laadhar@yahoo.fr" style={{color: "rgba(255,255,255,0.85)", textDecoration: "none"}}>ele.laadhar@yahoo.fr</a>
            </div>
          </div>
          {c.cols.map((col, i) => (
            <div key={i}>
              <div style={{fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ele-red)", marginBottom: 16}}>{col.title}</div>
              <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                {col.links.map((l, j) => (
                  <a key={j} href={l.href} onClick={(e) => handleClick(e, l.href)}
                    style={{color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: 14, cursor: "pointer"}}>{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16}}>
          <div style={{fontFamily: "var(--font-serif)", fontStyle: "italic", color: "rgba(255,255,255,0.6)", fontSize: 14}}>
            {c.tagline}
          </div>
          <div style={{display: "flex", gap: 24, fontSize: 12, color: "rgba(255,255,255,0.5)"}}>
            <a href="#" style={{color: "inherit", textDecoration: "none"}}>{c.legal}</a>
            <a href="#" style={{color: "inherit", textDecoration: "none"}}>{c.privacy}</a>
            <span>© 2026 ELE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
window.Footer = Footer;
