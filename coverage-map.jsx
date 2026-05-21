// coverage-map.jsx — Engineering-blueprint coverage map
// Tunis HQ at the centre with stylised routes radiating out to every project
// city. No hand-drawn continent silhouette — instead a navy grid + labelled
// reference lines that matches the rest of the site's blueprint vibe.

const PINS = [
  // {x, y} in % of the 1000×600 viewBox. Origin (Tunis) is at ~50/30 so the
  // viewer's eye reads "Tunisia at top, Africa expanding below" without
  // forcing a literal continent shape.
  { id: "tunis",       label: { fr: "Tunis",        en: "Tunis"        }, country: "Tunisie",    region: "north",  x: 50,   y: 30, hq: true,  count: 3 },
  { id: "bizerte",     label: { fr: "Bizerte",      en: "Bizerte"      }, country: "Tunisie",    region: "north",  x: 46,   y: 23, count: 1 },
  { id: "monastir",    label: { fr: "Monastir",     en: "Monastir"     }, country: "Tunisie",    region: "north",  x: 54,   y: 35, count: 1 },
  { id: "mahdia",      label: { fr: "Mahdia",       en: "Mahdia"       }, country: "Tunisie",    region: "north",  x: 58,   y: 39, count: 1 },
  { id: "sfax",        label: { fr: "Sfax",         en: "Sfax"         }, country: "Tunisie",    region: "north",  x: 53,   y: 45, count: 2 },
  { id: "djerba",      label: { fr: "Djerba",       en: "Djerba"       }, country: "Tunisie",    region: "north",  x: 60,   y: 51, count: 1 },
  { id: "brazzaville", label: { fr: "Brazzaville",  en: "Brazzaville"  }, country: "Congo",      region: "south",  x: 56,   y: 85, count: 2 },
  { id: "pointenoire", label: { fr: "Pointe-Noire", en: "Pointe-Noire" }, country: "Congo",      region: "south",  x: 46,   y: 90, count: 1 },
];

const HQ = PINS.find(p => p.hq);

const Coverage = ({ lang = "fr", onCountryClick }) => {
  const [hover, setHover] = React.useState(null);

  const labels = lang === "en"
    ? { eyebrow: "Coverage", headline: "On the ground across Africa",
        lead: "Headquartered in Tunis, ELE has delivered projects across Tunisia for nearly 50 years and has been exporting expertise to Congo and Mauritania since 2008.",
        cities: "Cities", countries: "Countries", projects: "Major projects",
        hq: "HQ · Tunis", viewProjects: "View projects" }
    : { eyebrow: "Présence", headline: "Sur le terrain à travers l'Afrique",
        lead: "Basée à Tunis, ELE livre des projets en Tunisie depuis près de 50 ans et exporte son savoir-faire au Congo et en Mauritanie depuis 2008.",
        cities: "Villes", countries: "Pays", projects: "Projets majeurs",
        hq: "Siège · Tunis", viewProjects: "Voir les projets" };

  // Compute country aggregates for the side list
  const byCountry = PINS.reduce((acc, p) => {
    acc[p.country] = acc[p.country] || { country: p.country, cities: 0, projects: 0 };
    acc[p.country].cities += 1;
    acc[p.country].projects += p.count;
    return acc;
  }, {});
  const countryList = Object.values(byCountry).sort((a, b) => b.projects - a.projects);

  // Pre-compute total city / country / project counts
  const totals = {
    countries: countryList.length,
    cities: PINS.length,
    projects: PINS.reduce((a, p) => a + p.count, 0),
  };

  return (
    <section id="international" style={{padding: "96px 32px", background: "var(--ele-mist)", borderTop: "1px solid var(--border-1)"}} className="ele-section-pad">
      <div style={{maxWidth: 1280, margin: "0 auto"}}>
        <div className="ele-grid-split">
          <div>
            <div style={{color: "var(--ele-red)", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16}}>{labels.eyebrow}</div>
            <h2 style={{fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: 1.05, color: "var(--ele-navy)", textTransform: "uppercase", margin: "0 0 20px"}}>{labels.headline}</h2>
            <p style={{fontFamily: "var(--font-serif)", fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)", margin: "0 0 32px"}}>{labels.lead}</p>

            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32}}>
              {[
                { n: totals.countries, l: labels.countries },
                { n: totals.cities + "+", l: labels.cities },
                { n: "200+", l: labels.projects },
              ].map((s, i) => (
                <div key={i} style={{
                  background: "#fff", border: "1px solid var(--border-1)",
                  borderRadius: 8, padding: "14px 16px",
                }}>
                  <div style={{fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, color: "var(--ele-navy)", lineHeight: 1}}>{s.n}</div>
                  <div style={{fontSize: 11, color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, marginTop: 4}}>{s.l}</div>
                </div>
              ))}
            </div>

            <div style={{display: "flex", flexDirection: "column", borderTop: "1px solid var(--border-1)"}}>
              {countryList.map(c => (
                <button key={c.country} onClick={() => onCountryClick && onCountryClick(c.country)}
                  onMouseEnter={() => setHover(`country:${c.country}`)}
                  onMouseLeave={() => setHover(null)}
                  style={{
                    display: "grid", gridTemplateColumns: "auto 1fr auto auto", gap: 14, alignItems: "center",
                    textAlign: "left", background: "transparent", border: "none",
                    padding: "14px 4px", cursor: "pointer",
                    borderBottom: "1px solid var(--border-1)",
                    color: "var(--ele-ink-1)",
                  }}>
                  <span style={{
                    width: 10, height: 10, borderRadius: 999,
                    background: hover === `country:${c.country}` ? "var(--ele-red)" : "var(--ele-navy)",
                    transition: "background 150ms",
                  }}/>
                  <span style={{fontSize: 15, fontWeight: 600}}>{c.country}</span>
                  <span style={{fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-3)"}}>
                    {c.cities} {c.cities > 1 ? labels.cities.toLowerCase() : labels.cities.toLowerCase().replace(/s$/, "")} · {c.projects} {labels.projects.toLowerCase()}
                  </span>
                  <span style={{color: hover === `country:${c.country}` ? "var(--ele-red)" : "var(--fg-3)", transition: "color 150ms"}}>→</span>
                </button>
              ))}
            </div>
          </div>

          {/* ─── Map panel ───────────────────────────────────────────── */}
          <div style={{
            position: "relative",
            background: "var(--ele-navy-deep)",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(15, 36, 71, 0.25)",
            aspectRatio: "10 / 7", minHeight: 360,
            color: "#fff",
          }}>
            {/* Top-left header strip */}
            <div style={{position: "absolute", top: 14, left: 18, right: 18, display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 3, pointerEvents: "none"}}>
              <div style={{fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)"}}>ELE · OPERATIONAL FOOTPRINT</div>
              <div style={{fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)"}}>{totals.countries} {labels.countries.toUpperCase()} · {totals.projects} {labels.projects.toUpperCase()}</div>
            </div>

            <svg viewBox="0 0 1000 600" preserveAspectRatio="none" style={{position: "absolute", inset: 0, width: "100%", height: "100%"}} aria-hidden="true">
              <defs>
                {/* Subtle grid */}
                <pattern id="cov-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                </pattern>
                {/* Heavier grid (every 5 cells) */}
                <pattern id="cov-grid-major" width="200" height="200" patternUnits="userSpaceOnUse">
                  <path d="M200 0H0V200" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1"/>
                </pattern>
                <radialGradient id="cov-glow" cx="50%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="rgba(46, 79, 140, 0.55)"/>
                  <stop offset="100%" stopColor="rgba(15, 36, 71, 0)"/>
                </radialGradient>
              </defs>
              <rect width="1000" height="600" fill="url(#cov-grid)"/>
              <rect width="1000" height="600" fill="url(#cov-grid-major)"/>
              <rect width="1000" height="600" fill="url(#cov-glow)"/>

              {/* Latitude reference lines */}
              <g style={{fontFamily: "var(--font-mono)"}}>
                <line x1="0" y1="180" x2="1000" y2="180" stroke="rgba(255,255,255,0.10)" strokeDasharray="2 6"/>
                <text x="14" y="174" fontSize="9" fill="rgba(255,255,255,0.35)" letterSpacing="2">30°N — TUNIS</text>
                <line x1="0" y1="540" x2="1000" y2="540" stroke="rgba(255,255,255,0.10)" strokeDasharray="2 6"/>
                <text x="14" y="534" fontSize="9" fill="rgba(255,255,255,0.35)" letterSpacing="2">0° — EQUATOR</text>
              </g>

              {/* HQ → city routes (curved). Drawn first so pins sit on top. */}
              {PINS.filter(p => !p.hq).map((p) => {
                const x1 = (HQ.x / 100) * 1000;
                const y1 = (HQ.y / 100) * 600;
                const x2 = (p.x  / 100) * 1000;
                const y2 = (p.y  / 100) * 600;
                // Control point: midpoint, lifted toward viewer for an arc.
                const mx = (x1 + x2) / 2;
                const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.25 - 30;
                const isHover = hover === p.id;
                const isCountryHover = hover === `country:${p.country}`;
                const active = isHover || isCountryHover;
                return (
                  <path key={p.id}
                    d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`}
                    fill="none"
                    stroke={active ? "var(--ele-red)" : "rgba(255,255,255,0.22)"}
                    strokeWidth={active ? 2 : 1.2}
                    strokeDasharray={active ? "0" : "4 4"}
                    style={{ transition: "stroke 200ms, stroke-width 200ms" }}/>
                );
              })}

              {/* Compass rosette in bottom-right */}
              <g transform="translate(940 540)" opacity="0.45">
                <circle r="22" fill="none" stroke="rgba(255,255,255,0.3)"/>
                <path d="M0 -22 L4 0 L0 22 L-4 0 Z" fill="rgba(255,255,255,0.5)"/>
                <text y="-30" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" style={{fontFamily: "var(--font-mono)"}}>N</text>
              </g>
            </svg>

            {/* City pins (HTML over SVG so labels stay crisp at any scale) */}
            {PINS.map(p => {
              const isHover = hover === p.id;
              const isCountryHover = hover === `country:${p.country}`;
              const active = isHover || isCountryHover;
              // Decide which side the label sits on so it doesn't fall off
              const labelLeft = p.x > 60;
              return (
                <div key={p.id}
                  onMouseEnter={() => setHover(p.id)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(p.id)}
                  onBlur={() => setHover(null)}
                  style={{
                    position: "absolute",
                    left: `${p.x}%`, top: `${p.y}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: active ? 5 : 2,
                  }}>
                  <button
                    onClick={() => onCountryClick && onCountryClick(p.country)}
                    aria-label={`${p.label[lang] || p.label.fr} — ${p.country}`}
                    style={{
                      width: p.hq ? 18 : 14, height: p.hq ? 18 : 14,
                      borderRadius: 999, padding: 0,
                      background: p.hq ? "#fff" : "var(--ele-red)",
                      border: p.hq ? "3px solid var(--ele-red)" : "2px solid #fff",
                      boxShadow: active
                        ? "0 0 0 6px rgba(227, 6, 19, 0.25), 0 4px 12px rgba(0,0,0,0.4)"
                        : (p.hq ? "0 0 0 4px rgba(227, 6, 19, 0.2), 0 2px 6px rgba(0,0,0,0.4)" : "0 2px 6px rgba(0,0,0,0.4)"),
                      cursor: "pointer", display: "block",
                      transition: "box-shadow 180ms, transform 180ms",
                      transform: active ? "scale(1.15)" : "scale(1)",
                    }}/>
                  {/* HQ permanent label */}
                  {p.hq && !active && (
                    <div style={{
                      position: "absolute", left: "calc(100% + 10px)", top: "50%",
                      transform: "translateY(-50%)",
                      whiteSpace: "nowrap",
                      fontFamily: "var(--font-mono)", fontSize: 10,
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.78)",
                      pointerEvents: "none",
                    }}>
                      <span style={{color: "var(--ele-red)", fontWeight: 700}}>● </span>
                      {labels.hq}
                    </div>
                  )}
                  {/* Hover/active label callout */}
                  {active && (
                    <div style={{
                      position: "absolute",
                      [labelLeft ? "right" : "left"]: "calc(100% + 12px)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      whiteSpace: "nowrap",
                      background: "rgba(15, 36, 71, 0.95)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: 6, padding: "8px 12px",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
                      pointerEvents: "none",
                    }}>
                      <div style={{fontWeight: 700, fontSize: 13, color: "#fff"}}>{p.label[lang] || p.label.fr}</div>
                      <div style={{fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 2}}>
                        {p.country} · {p.count} {p.count > 1 ? labels.projects.toLowerCase() : labels.projects.toLowerCase().replace(/s$/, "")}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom-right legend */}
            <div style={{
              position: "absolute", bottom: 14, left: 18,
              display: "flex", gap: 16, alignItems: "center",
              fontFamily: "var(--font-mono)", fontSize: 10,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              zIndex: 3, pointerEvents: "none",
            }}>
              <span style={{display: "flex", alignItems: "center", gap: 6}}>
                <span style={{width: 10, height: 10, borderRadius: 999, background: "#fff", border: "2px solid var(--ele-red)", boxSizing: "border-box"}}/>
                {labels.hq}
              </span>
              <span style={{display: "flex", alignItems: "center", gap: 6}}>
                <span style={{width: 8, height: 8, borderRadius: 999, background: "var(--ele-red)"}}/>
                {labels.projects}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Coverage = Coverage;
