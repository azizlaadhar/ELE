// About.jsx — company history & heritage
const About = ({ lang = "fr" }) => {
  const content = {
    fr: {
      eyebrow: "À propos",
      headline: "Bientôt cinquante ans",
      headlineAccent: "au service du courant.",
      intro: [
        "Fondée en 1976 à Tunis par M. Laadhar, <strong>l'Etablissement Laadhar d'Electricité</strong> est l'une des sociétés d'installation électrique pionnières de Tunisie. Sa croissance a été construite sur l'excellence technique, jamais sur le marketing — les grands donneurs d'ordre la recommandaient parce qu'elle livrait.",
        "Des décennies d'aéroports internationaux, de palaces hôteliers, d'universités, d'hôpitaux et de stations de pompage ont forgé une réputation qui traverse les frontières. Depuis 2008, ELE opère en Afrique subsaharienne et en Europe, exportant son savoir-faire sur les projets les plus exigeants du continent.",
        "Aujourd'hui, une nouvelle génération d'ingénieurs porte la même exigence d'exécution : <em>livrer une infrastructure fiable, maintenable, dont on peut être fier.</em>",
      ],
      pillarsTitle: "Trois piliers, une identité",
      pillars: [
        { icon: "★", title: "Qualité", body: "Des installations durables, fiables et conformes aux plus hauts standards. La réputation d'ELE s'est bâtie sur la qualité d'exécution et la confiance des clients." },
        { icon: "⊛", title: "Héritage", body: "Près de cinq décennies d'expérience sur les infrastructures les plus critiques de Tunisie — aéroports, hôpitaux, hôtels 5★, universités, stations d'eau." },
        { icon: "→", title: "Ambition internationale", body: "Depuis 2008, ELE exporte son savoir-faire au Congo, en Mauritanie et au-delà. Une capacité prouvée d'opérer hors de son marché d'origine dans des conditions exigeantes." },
      ],
      timelineTitle: "Jalons clés",
      milestones: [
        { y: "1976", t: "Fondation à Tunis", d: "M. Laadhar fonde l'Etablissement Laadhar d'Electricité. L'entreprise s'impose rapidement comme un acteur de référence de l'installation électrique en Tunisie." },
        { y: "1985", t: "Premiers grands chantiers publics", d: "ELE est retenue sur ses premiers projets d'infrastructure publique — bâtiments administratifs, équipements collectifs, réseaux." },
        { y: "1995", t: "Spécialisation MT / BT", d: "Montée en compétence sur la moyenne et basse tension : postes de transformation, TGBT, groupes électrogènes pour hôpitaux et hôtels." },
        { y: "2003", t: "Aéroports & hôtellerie 5★", d: "Aéroport Djerba-Zarzis, Sfax-Thyna, Hôtel Nour Palace — ELE devient une référence nationale sur les sites critiques et l'hôtellerie de luxe." },
        { y: "2008", t: "Expansion africaine", d: "Premiers contrats au Congo (Brazzaville, Pointe-Noire) puis Mauritanie. ELE exporte son savoir-faire au-delà des frontières tunisiennes." },
        { y: "2018", t: "Courant faible & smart-buildings", d: "Intégration complète des métiers GTC/BMS, sécurité incendie adressable, structured cabling, CCTV et contrôle d'accès." },
        { y: "2024", t: "Photovoltaïque & transition énergétique", d: "Diversification vers le PV, les systèmes hybrides et le suivi énergétique pour accompagner la transition énergétique des clients." },
      ],
    },
    en: {
      eyebrow: "About us",
      headline: "Nearly fifty years",
      headlineAccent: "powering infrastructure.",
      intro: [
        "Founded in 1976 in Tunis by Mr. Laadhar, <strong>Etablissement Laadhar d'Electricité (ELE)</strong> is one of Tunisia's pioneering electrical contracting companies. Its growth was built on technical excellence alone — major project owners recommended ELE because it delivered.",
        "Decades of international airports, five-star hotels, universities, hospitals and pumping stations forged a reputation that crosses borders. Since 2008, ELE has operated in sub-Saharan Africa and Europe, exporting its expertise to the continent's most demanding projects.",
        "Today, a new generation of engineers carries the same standard: <em>deliver reliable, maintainable infrastructure that stands the test of time.</em>",
      ],
      pillarsTitle: "Three pillars, one identity",
      pillars: [
        { icon: "★", title: "Quality", body: "Durable, reliable, high-standard installations. ELE's reputation was built on workmanship and trust — the best form of marketing in a demanding industry." },
        { icon: "⊛", title: "Heritage", body: "Nearly five decades of experience on Tunisia's most critical infrastructure — airports, hospitals, five-star hotels, universities and water stations." },
        { icon: "→", title: "International ambition", body: "Since 2008, ELE has exported its expertise to Congo, Mauritania and beyond — proven capability to operate outside its home market in challenging conditions." },
      ],
      timelineTitle: "Key milestones",
      milestones: [
        { y: "1976", t: "Founded in Tunis", d: "Mr. Laadhar establishes Etablissement Laadhar d'Electricité. The company quickly becomes a reference contractor in Tunisian electrical installation." },
        { y: "1985", t: "First major public projects", d: "ELE is selected for its first public infrastructure projects — administrative buildings, public facilities and electrical networks." },
        { y: "1995", t: "MV / LV specialisation", d: "Growing expertise in medium and low voltage: transformer substations, main switchboards, generators for hospitals and hotels." },
        { y: "2003", t: "Airports & 5-star hospitality", d: "Djerba-Zarzis Airport, Sfax-Thyna Airport, Nour Palace Hotel — ELE becomes a national reference for critical sites and luxury hospitality." },
        { y: "2008", t: "African expansion", d: "First contracts in Congo (Brazzaville, Pointe-Noire) then Mauritania. ELE exports its expertise beyond Tunisian borders." },
        { y: "2018", t: "Low-current & smart buildings", d: "Full integration of BMS/GTC, addressable fire safety, structured cabling, CCTV and access control for connected buildings." },
        { y: "2024", t: "Photovoltaic & energy transition", d: "Diversification into PV, hybrid systems and energy monitoring to support clients' energy transition goals." },
      ],
    },
  };

  const c = content[lang] || content.fr;

  return (
    <section id="company" style={{padding: "96px 32px", background: "var(--ele-paper)"}}>
      <div style={{maxWidth: 1280, margin: "0 auto"}}>

        {/* Header + intro */}
        <div style={{display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, marginBottom: 72, alignItems: "start"}}>
          <div>
            <div style={{color: "var(--ele-red)", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16}}>{c.eyebrow}</div>
            <h2 style={{fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, lineHeight: 1.05, color: "var(--ele-navy)", textTransform: "uppercase", margin: "0 0 16px"}}>
              {c.headline}{" "}
              <em style={{fontFamily: "var(--font-serif)", fontWeight: 400, color: "var(--ele-red)", textTransform: "none", letterSpacing: 0}}>{c.headlineAccent}</em>
            </h2>
          </div>
          <div style={{fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.7, color: "var(--fg-2)"}}>
            {c.intro.map((p, i) => (
              <p key={i} style={{margin: i < c.intro.length - 1 ? "0 0 16px" : "0"}}
                dangerouslySetInnerHTML={{__html: p}} />
            ))}
          </div>
        </div>

        {/* Three pillars */}
        <div style={{marginBottom: 72}}>
          <div style={{fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ele-red)", marginBottom: 24}}>{c.pillarsTitle}</div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24}}>
            {c.pillars.map((p, i) => (
              <div key={i} style={{
                padding: "28px 28px 28px",
                background: "#fff",
                border: "1px solid var(--border-1)",
                borderRadius: 8,
                borderTop: "3px solid var(--ele-red)",
              }}>
                <div style={{fontFamily: "var(--font-display)", fontSize: 28, color: "var(--ele-red)", marginBottom: 12, lineHeight: 1}}>{p.icon}</div>
                <h3 style={{fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--ele-navy)", margin: "0 0 10px", textTransform: "uppercase"}}>{p.title}</h3>
                <p style={{fontFamily: "var(--font-serif)", fontSize: 15, lineHeight: 1.6, color: "var(--fg-2)", margin: 0}}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div style={{fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ele-red)", marginBottom: 32}}>{c.timelineTitle}</div>
          <div style={{position: "relative"}}>
            <div style={{position: "absolute", left: 90, top: 8, bottom: 8, width: 2, background: "var(--border-1)"}}/>
            <div style={{display: "flex", flexDirection: "column", gap: 28}}>
              {c.milestones.map((m, i) => (
                <div key={i} style={{display: "grid", gridTemplateColumns: "80px 1fr", gap: 32, alignItems: "start"}}>
                  <div style={{fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 22, color: "var(--ele-red)", textAlign: "right", paddingTop: 4}}>{m.y}</div>
                  <div style={{position: "relative", paddingLeft: 32}}>
                    <span style={{position: "absolute", left: -7, top: 10, width: 16, height: 16, borderRadius: 999, background: "var(--ele-red)", border: "3px solid var(--ele-paper)"}}/>
                    <h3 style={{fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--ele-navy)", margin: "0 0 4px"}}>{m.t}</h3>
                    <p style={{fontFamily: "var(--font-serif)", fontSize: 16, lineHeight: 1.55, color: "var(--fg-2)", margin: 0, maxWidth: 720}}>{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
window.About = About;
