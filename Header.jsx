// Header.jsx — top navigation bar
const TRANSLATIONS = {
  fr: {
    nav: ["L'entreprise", "Services", "Références", "International", "Contact"],
    cta: "Demander un devis →",
  },
  en: {
    nav: ["Company", "Services", "References", "International", "Contact"],
    cta: "Request a quote →",
  },
};

const Header = ({ lang = "fr", onLangChange }) => {
  const [active, setActive] = React.useState(0);
  const navRef = React.useRef(null);
  const itemRefs = React.useRef([]);
  const [indicator, setIndicator] = React.useState({ left: 0, width: 0, ready: false });

  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  const targets = ["company", "services", "references", "references", "contact"];
  const links = t.nav.map((label, i) => ({ label, target: targets[i] }));

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  const measureIndicator = () => {
    const el = itemRefs.current[active];
    const nav = navRef.current;
    if (!el || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const itemRect = el.getBoundingClientRect();
    setIndicator({
      left: itemRect.left - navRect.left,
      width: itemRect.width,
      ready: true,
    });
  };

  React.useLayoutEffect(() => {
    measureIndicator();
  }, [active, lang]);

  React.useEffect(() => {
    window.addEventListener("resize", measureIndicator);
    return () => window.removeEventListener("resize", measureIndicator);
  }, [active]);

  const toggleLang = () => onLangChange && onLangChange(lang === "fr" ? "en" : "fr");

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.96)",
      backdropFilter: "blur(6px)",
      borderBottom: "1px solid var(--border-1)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 32px",
        height: 72, display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: "smooth"}); }}
          style={{display: "flex", alignItems: "center", gap: 10, textDecoration: "none"}}>
          <img src="assets/logo_ele.png" alt="ELE"
            style={{height: 36}}
            onError={(e) => { e.target.src = "assets/logo_ele_transparent.png"; }} />
        </a>

        <nav ref={navRef} style={{display: "flex", gap: 28, position: "relative", alignItems: "center"}}>
          {/* Sliding red indicator */}
          {indicator.ready && (
            <span style={{
              position: "absolute",
              bottom: -2,
              left: indicator.left,
              width: indicator.width,
              height: 2,
              background: "var(--ele-red)",
              transition: "left 280ms cubic-bezier(0.2,0,0,1), width 280ms cubic-bezier(0.2,0,0,1)",
              borderRadius: 1,
            }} />
          )}
          {links.map((l, i) => (
            <a key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              href={`#${l.target}`}
              onClick={(e) => { e.preventDefault(); setActive(i); scrollTo(l.target); }}
              style={{
                color: active === i ? "var(--ele-navy)" : "var(--ele-ink-1)",
                textDecoration: "none",
                fontSize: 14, fontWeight: active === i ? 600 : 500,
                paddingBottom: 4, cursor: "pointer",
                transition: "color 200ms, font-weight 200ms",
              }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{display: "flex", gap: 10, alignItems: "center"}}>
          <button onClick={toggleLang} aria-label="Toggle language" style={{
            background: "transparent",
            border: "1px solid var(--border-2)",
            borderRadius: 4,
            color: "var(--fg-2)",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer",
            fontFamily: "var(--font-sans)",
            padding: "5px 10px",
          }}>
            <span style={{color: lang === "fr" ? "var(--ele-navy)" : "var(--fg-3)"}}>FR</span>
            <span style={{margin: "0 4px", color: "var(--border-2)"}}>·</span>
            <span style={{color: lang === "en" ? "var(--ele-navy)" : "var(--fg-3)"}}>EN</span>
          </button>
          <button onClick={() => scrollTo("contact")} style={{
            background: "var(--ele-red)", color: "#fff", border: "none",
            padding: "10px 18px", borderRadius: 4, fontWeight: 600, fontSize: 13,
            cursor: "pointer", fontFamily: "var(--font-sans)"
          }}>{t.cta}</button>
        </div>
      </div>
    </header>
  );
};
window.Header = Header;
