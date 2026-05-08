// Hero.jsx — primary hero
const Hero = ({ eyebrow, headline, accent, lead, lang = "fr" }) => {
  const labels = {
    fr: { cta: "Demander un devis →", refs: "Voir nos références" },
    en: { cta: "Request a quote →",   refs: "View our references" },
  };
  const lbl = labels[lang] || labels.fr;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };
  return (
  <section style={{
    position: "relative", overflow: "hidden",
    background: "linear-gradient(135deg, #0F2447 0%, #1A3668 60%, #2E4F8C 100%)",
    color: "#fff",
    padding: "96px 32px 120px"
  }}>
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
      pointerEvents: "none"
    }}/>
    <div style={{
      position: "absolute", right: -120, top: -80,
      width: 480, height: 480, borderRadius: 24,
      border: "5px solid rgba(227, 6, 19, 0.25)",
      transform: "rotate(8deg)", pointerEvents: "none"
    }}/>
    <div style={{maxWidth: 1280, margin: "0 auto", position: "relative"}}>
      <div style={{
        color: "var(--ele-red)", fontSize: 12, fontWeight: 700,
        letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20
      }}>{eyebrow}</div>
      <h1 style={{
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "clamp(56px, 7vw, 104px)",
        lineHeight: 0.92, letterSpacing: "-0.005em",
        textTransform: "uppercase", margin: "0 0 32px",
        maxWidth: 1100
      }}>
        {headline}{" "}
        <span style={{fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--ele-red)", textTransform: "none", letterSpacing: 0}}>
          {accent}
        </span>
      </h1>
      <p style={{
        fontFamily: "var(--font-serif)", fontStyle: "italic",
        fontSize: 22, lineHeight: 1.5, color: "rgba(255,255,255,0.85)",
        maxWidth: 720, margin: "0 0 40px"
      }}>
        {lead}
      </p>
      <div style={{display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap"}}>
        <button onClick={() => scrollTo("contact")} style={{
          background: "var(--ele-red)", color: "#fff", border: "none",
          padding: "14px 26px", borderRadius: 4, fontWeight: 600, fontSize: 15,
          cursor: "pointer"
        }}>{lbl.cta}</button>
        <button onClick={() => scrollTo("references")} style={{
          background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.4)",
          padding: "14px 26px", borderRadius: 4, fontWeight: 600, fontSize: 15,
          cursor: "pointer"
        }}>{lbl.refs}</button>
      </div>
    </div>
  </section>
  );
};
window.Hero = Hero;
