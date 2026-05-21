// project-modal.jsx — Full-detail project overlay
// Opens when user clicks a Reference card. Click backdrop / × / Esc to close.
// Reads the project object passed in and shows long-form scope details.

const PROJECT_LONG = {
  djerba_airport: {
    scopeFr: "Extension des installations électriques pour l'Office de l'Aviation Civile et des Aéroports (OACA) : équipement MT 9×1000 kVA + 2×800 kVA, équipement BT avec groupe électrogène 2×630 kVA, TGBT, armoires, et système de gestion technique centralisé (GTC).",
    scopeEn: "Electrical extension for the Office of Civil Aviation and Airports (OACA): MV equipment 9×1000 kVA + 2×800 kVA, LV with 2×630 kVA backup gensets, main switchboard, cabinets, and centralised technical management (BMS).",
    yearsFr: "2002 – 2005", yearsEn: "2002 – 2005",
    amount: "5 425 036 DT",
    tags: ["MT 9×1000+2×800 kVA", "BT 2×630 kVA", "TGBT", "GTC"],
  },
  nour_palace: {
    scopeFr: "Hôtel 5★ de 1 100 lits à Mahdia. Lot électricité complet : MT 2×1000 kVA, groupe électrogène 400 kVA, TGBT, sécurité incendie adressable CDI 1024 points avec CMSI et détecteurs, réseaux informatiques (câblage, switchers) et système GTC.",
    scopeEn: "Five-star, 1,100-bed hotel in Mahdia. Full electrical scope: MV 2×1000 kVA, 400 kVA backup genset, main switchboard, addressable fire safety with 1024-point CDI, CMSI and detectors, IT networks (cabling, switches) and BMS.",
    yearsFr: "2007 – 2009", yearsEn: "2007 – 2009",
    amount: "2 276 393 DT",
    tags: ["MT 2×1000 kVA", "1100 lits", "CDI 1024", "GTC"],
  },
  laico_maya: {
    scopeFr: "Rénovation et extension de l'hôtel LAICO Maya Maya à Brazzaville pour CERI Tunisie. Scope intégré : MT 2×1000 kVA, groupe électrogène 880 kVA, onduleurs 2×10 kVA, TGBT, sécurité incendie CDI/CMSI, réseaux RIA et sprinklers, réseaux informatiques, téléphonie Alcatel, CCTV, contrôle d'accès, télédistribution TV et système de sonorisation/téléconférence.",
    scopeEn: "Renovation and extension of LAICO Maya Maya Hotel in Brazzaville for CERI Tunisie. Integrated scope: MV 2×1000 kVA, 880 kVA backup genset, 2×10 kVA UPS, switchboards, CDI/CMSI fire safety, RIA and sprinkler networks, IT networks, Alcatel telephony, CCTV, access control, TV distribution and sound/teleconferencing.",
    yearsFr: "2010 – 2012", yearsEn: "2010 – 2012",
    amount: "2 224 251 €",
    tags: ["MT 2×1000 kVA", "Genset 880 kVA", "RIA + sprinklers", "Alcatel", "CCTV"],
  },
  sonede_pumping: {
    scopeFr: "Renforcement de la production d'eau potable pour le Sahel et Sfax à partir des eaux du Nord, extension du réseau de Mahdia et de la station de pompage d'eau brute de Billy (lot n°6 SONEDE). MT 2×2500 kVA, 3 pompes 550 kW–6600 V, vannes et anti-bélier 50 m³, télégestion radio TBT et GTC.",
    scopeEn: "Reinforcement of potable water for the Sahel and Sfax from northern sources, Mahdia network extension and Billy raw-water pumping station (SONEDE Lot 6). MV 2×2500 kVA, three 550 kW / 6.6 kV pumps, valves, 50 m³ anti-water-hammer, radio telemetry (TBT) and BMS.",
    yearsFr: "2014 – 2016", yearsEn: "2014 – 2016",
    amount: "2 732 056 DT",
    tags: ["MT 2×2500 kVA", "3×550 kW · 6.6 kV", "Anti-bélier 50 m³", "Télégestion"],
  },
  supcom: {
    scopeFr: "Lot électricité de l'extension de l'École Supérieure des Communications. MT 2×630 kVA, groupe électrogène 350 kVA, TGBT, onduleurs 160 + 2×100 + 2×40 kVA, réseaux informatiques structurés et sonorisation des amphithéâtres.",
    scopeEn: "Electrical lot for the extension of the Higher School of Communications. MV 2×630 kVA, 350 kVA backup genset, switchboards, UPS 160 + 2×100 + 2×40 kVA, structured IT networks and amphitheatre sound systems.",
    yearsFr: "2016 – 2017", yearsEn: "2016 – 2017",
    amount: "1 605 668 DT",
    tags: ["MT 2×630 kVA", "UPS 160+2×100+2×40", "Sonorisation", "Public"],
  },
  igh_pointe_noire: {
    scopeFr: "Tour de bureaux R+8 à Pointe-Noire (SCI Lincoln Immoco / Consul honoraire du Bénin). MT 800 kVA, groupe électrogène 3×400 kVA, TGBT, sécurité incendie adressable CDI/CMSI, RIA, réseaux informatiques et télésurveillance par caméras.",
    scopeEn: "R+8 office tower in Pointe-Noire (SCI Lincoln Immoco / Honorary Consul of Benin). MV 800 kVA, 3×400 kVA backup gensets, switchboards, addressable CDI/CMSI fire safety, RIA, IT networks and CCTV surveillance.",
    yearsFr: "2011 – 2013", yearsEn: "2011 – 2013",
    amount: "1 322 457 €",
    tags: ["MT 800 kVA", "Genset 3×400 kVA", "R+8", "CDI/CMSI", "CCTV"],
  },
  autoroute: {
    scopeFr: "Travaux d'éclairage et d'alimentation MT/BT sur la liaison autoroutière Sfax–Gabès, y compris postes péage et stations service.",
    scopeEn: "Lighting and MV/LV supply for the Sfax–Gabès motorway, including toll stations and service areas.",
    yearsFr: "2018 – 2020", yearsEn: "2018 – 2020",
    tags: ["Éclairage", "MT/BT", "Péage", "Linéaire"],
  },
  bardo: {
    scopeFr: "Siège de la Chambre des Conseillers à Bardo pour SOMATRA. MT 2×630 kVA, groupe électrogène 800 kVA, TGBT, armoires, onduleurs, sécurité incendie CDI/CMSI avec détecteurs, réseaux informatiques (câblage, switchers) et réseaux téléphoniques.",
    scopeEn: "Headquarters of the Chamber of Advisors in Bardo for SOMATRA. MV 2×630 kVA, 800 kVA backup genset, main switchboard, cabinets, UPS, CDI/CMSI fire safety with detectors, IT (cabling, switches) and telephone networks.",
    yearsFr: "2013", yearsEn: "2013",
    amount: "1 488 053 DT",
    tags: ["MT 2×630 kVA", "Genset 800 kVA", "CDI/CMSI", "Téléphonie"],
  },
  bizerte: {
    scopeFr: "Lot 3 d'éclairage public pour la municipalité de Bizerte. Pose de candélabres, armoires de commande, réseaux et mise en service.",
    scopeEn: "Public lighting Lot 3 for the municipality of Bizerte. Pole installation, control cabinets, network and commissioning.",
    yearsFr: "2019", yearsEn: "2019",
    tags: ["Éclairage public", "Candélabres", "Lot 3"],
  },
  sfax_thyna: {
    scopeFr: "Extension des installations électriques de l'Aéroport International de Sfax-Thyna pour l'OACA. MT 2×800 kVA, groupe électrogène 630 kVA et groupe de sécurité 125 kVA, TGBT et armoires, sécurité incendie adressable CDI/CMSI avec détecteurs, système de gestion technique centralisée (GTC).",
    scopeEn: "Electrical extension of Sfax-Thyna International Airport for OACA. MV 2×800 kVA, 630 kVA backup genset and 125 kVA safety genset, switchboards and cabinets, addressable CDI/CMSI fire safety with detectors, centralised technical management (BMS).",
    yearsFr: "2008 – 2010", yearsEn: "2008 – 2010",
    amount: "2 236 253 DT",
    tags: ["MT 2×800 kVA", "Genset 630 kVA", "Secours 125 kVA", "CDI/CMSI", "GTC"],
  },
  maternite_monastir: {
    scopeFr: "Centre de Maternité et de Néonatologie de Monastir, pour le Ministère de la Santé Publique. MT 2×630 kVA, groupe électrogène 500 kVA, TGBT et armoires, système d'appel malade, et système de gestion technique centralisée (GTC) pour la supervision médicale.",
    scopeEn: "Maternity and Neonatology Centre in Monastir, for the Ministry of Public Health. MV 2×630 kVA, 500 kVA backup genset, switchboards and cabinets, patient-call system, and centralised technical management (BMS) for medical supervision.",
    yearsFr: "2015 – 2017", yearsEn: "2015 – 2017",
    amount: "885 547 DT",
    tags: ["MT 2×630 kVA", "Genset 500 kVA", "Appel malade", "GTC"],
  },
  topnet: {
    scopeFr: "Aménagement de l'agence commerciale siège des sociétés TOPNET & HOTLINE. MT 1×1000 kVA, groupe électrogène 400 kVA, TGBT et armoires, et sécurité incendie adressable CDI/CMSI avec détecteurs.",
    scopeEn: "Fit-out of the commercial agency headquarters for TOPNET & HOTLINE. MV 1×1000 kVA, 400 kVA backup genset, switchboards and cabinets, addressable CDI/CMSI fire safety with detectors.",
    yearsFr: "2016", yearsEn: "2016",
    amount: "816 321 DT",
    tags: ["MT 1000 kVA", "Genset 400 kVA", "CDI/CMSI"],
  },
  elbo_brazzaville: {
    scopeFr: "Immeuble R+9 type HQU (ELBO) à Brazzaville pour BEN'TSI IMMO. MT 1×1250 kVA, groupe électrogène 2×630 kVA en parallèle et groupe de sécurité 400 kVA, TGBT, onduleurs 2×80 kVA en parallèle, sécurité incendie CDI/CMSI, réseaux informatiques (Cisco) et téléphoniques (Cisco), télésurveillance, contrôle d'accès, anti-intrusion, équipement photovoltaïque, télédistribution TV, sonorisation/téléconférence et GTC.",
    scopeEn: "R+9 HQU-type building (ELBO) in Brazzaville for BEN'TSI IMMO. MV 1×1250 kVA, 2×630 kVA parallel backup gensets and 400 kVA safety genset, switchboards, 2×80 kVA parallel UPS, CDI/CMSI fire safety, Cisco IT and telephony networks, CCTV, access control, anti-intrusion, photovoltaic equipment, TV distribution, sound/teleconferencing and BMS.",
    yearsFr: "2018 – 2020", yearsEn: "2018 – 2020",
    amount: "2 250 784 €",
    tags: ["MT 1250 kVA", "2×630 kVA parallèle", "UPS 2×80 kVA", "PV", "GTC"],
  },
};

const projectKey = (p) => {
  // derive the long-form lookup key from the image filename
  if (!p.img) return null;
  const m = p.img.match(/projects\/([^.]+)\.jpg$/);
  return m ? m[1] : null;
};

const ProjectModal = ({ project, lang, onClose, onInquire }) => {
  React.useEffect(() => {
    if (!project) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) return null;

  const key = projectKey(project);
  const long = key && PROJECT_LONG[key] ? PROJECT_LONG[key] : null;
  const scope = long ? (lang === "en" ? long.scopeEn : long.scopeFr) : null;
  const years = long ? (lang === "en" ? long.yearsEn : long.yearsFr) : null;
  const tags = long ? long.tags : project.specs;

  const lbl = lang === "en"
    ? { close: "Close", scope: "Scope of work", client: "Client", sector: "Sector", location: "Location", years: "Years", value: "Project value", cta: "Inquire about a similar project →" }
    : { close: "Fermer", scope: "Périmètre des travaux", client: "Client", sector: "Secteur", location: "Localisation", years: "Année", value: "Montant des travaux", cta: "Demander un projet similaire →" };

  return (
    <div onClick={onClose} role="dialog" aria-modal="true"
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(10, 15, 24, 0.78)",
        backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        padding: "5vh 16px 16px",
        overflowY: "auto",
        animation: "modalFadeIn 200ms cubic-bezier(0.2,0,0,1)",
      }}>
      <style>{`
        @keyframes modalFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalSlideIn { from { transform: translateY(12px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "#fff",
        width: "min(960px, 100%)",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
        animation: "modalSlideIn 240ms cubic-bezier(0.2,0,0,1)",
      }}>
        <div style={{
          position: "relative", aspectRatio: "16 / 7",
          background: "linear-gradient(135deg, #2E4F8C 0%, #1A3668 70%)",
        }}>
          {project.img && (
            <img src={project.img} alt={project.title}
              style={{position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover"}} />
          )}
          <div style={{position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15, 36, 71, 0.92) 0%, rgba(15, 36, 71, 0.35) 50%, rgba(15, 36, 71, 0.15) 100%)"}}/>
          <button onClick={onClose} aria-label={lbl.close} style={{
            position: "absolute", top: 14, right: 14,
            width: 36, height: 36, borderRadius: 999,
            background: "rgba(0,0,0,0.5)", color: "#fff",
            border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer",
            display: "grid", placeItems: "center", fontSize: 18, lineHeight: 1,
            backdropFilter: "blur(4px)",
          }}>×</button>
          <div style={{position: "absolute", left: 28, right: 28, bottom: 24, color: "#fff"}}>
            <div style={{fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ele-red)", marginBottom: 8}}>
              {project.sector} · {project.country}
            </div>
            <h3 style={{fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.05, margin: 0, textTransform: "uppercase", letterSpacing: "0.005em"}}>
              {project.title}
            </h3>
          </div>
        </div>
        <div style={{padding: "32px 28px 28px"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 18, marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid var(--border-1)"}}>
            <Spec label={lbl.client} value={project.client} />
            <Spec label={lbl.sector} value={project.sector} />
            <Spec label={lbl.location} value={project.country} />
            {years && <Spec label={lbl.years} value={years} />}
            {(project.amount || (long && long.amount)) && <Spec label={lbl.value} value={project.amount || long.amount} mono />}
          </div>
          {scope && (
            <>
              <div style={{fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ele-red)", marginBottom: 10}}>{lbl.scope}</div>
              <p style={{fontFamily: "var(--font-serif)", fontSize: 16, lineHeight: 1.65, color: "var(--fg-2)", margin: "0 0 24px"}}>{scope}</p>
            </>
          )}
          <div style={{display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28}}>
            {tags.map((s, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600,
                color: "var(--ele-navy)", background: "var(--ele-mist)",
                padding: "5px 10px", borderRadius: 4
              }}>{s}</span>
            ))}
          </div>
          <button onClick={() => { onInquire && onInquire(project); onClose(); }} style={{
            background: "var(--ele-red)", color: "#fff", border: "none",
            padding: "12px 22px", borderRadius: 4, fontWeight: 600, fontSize: 14,
            cursor: "pointer", fontFamily: "var(--font-sans)",
          }}>{lbl.cta}</button>
        </div>
      </div>
    </div>
  );
};

const Spec = ({ label, value, mono = false }) => (
  <div>
    <div style={{fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 4}}>{label}</div>
    <div style={{fontSize: 14, color: "var(--ele-ink-1)", lineHeight: 1.4, fontFamily: mono ? "var(--font-mono)" : "inherit", fontWeight: mono ? 600 : 400}}>{value}</div>
  </div>
);

window.ProjectModal = ProjectModal;
window.PROJECT_LONG = PROJECT_LONG;
window.projectKey = projectKey;
