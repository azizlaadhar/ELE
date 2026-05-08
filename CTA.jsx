// CTA.jsx — quote band with working contact form
const CTA = ({ email = "inquiry.laadhar@gmail.com", subject = "Demande de devis — site ELE", lang = "fr" }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const labels = {
    fr: {
      eyebrow: "Travaillons ensemble",
      headline: "Un projet d'infrastructure ?",
      lead: "Décrivez-nous votre site, votre cahier des charges, votre échéance — un ingénieur ELE vous répond sous 48 h.",
      orDirect: "Ou directement",
      name: "Nom *", company: "Société", emailLbl: "Email *", phone: "Téléphone",
      projectType: "Type de projet",
      projectSelect: "Sélectionner…",
      projectOptions: ["Courant fort (MT/BT)", "Courant faible / Réseaux", "Sécurité incendie", "Pompage / Hydraulique", "Photovoltaïque", "GTC / BMS", "Autre"],
      message: "Votre message *",
      placeholder: "Site, échéance, puissance estimée, contraintes particulières…",
      send: "Envoyer la demande →",
      sending: "Envoi en cours…",
      successTitle: "Message reçu",
      successBody: "Merci. Un ingénieur ELE vous répondra sous 48 h.",
      sendAnother: "Envoyer une autre demande",
    },
    en: {
      eyebrow: "Let's work together",
      headline: "An infrastructure project?",
      lead: "Tell us about your site, your specifications and your deadline — an ELE engineer will reply within 48 hours.",
      orDirect: "Or reach us directly",
      name: "Name *", company: "Company", emailLbl: "Email *", phone: "Phone",
      projectType: "Project type",
      projectSelect: "Select…",
      projectOptions: ["Strong-current (MV/LV)", "Low-current / Networks", "Fire safety", "Pumping / Hydraulics", "Photovoltaic", "BMS / GTC", "Other"],
      message: "Your message *",
      placeholder: "Site, deadline, estimated power, special constraints…",
      send: "Send inquiry →",
      sending: "Sending…",
      successTitle: "Message received",
      successBody: "Thank you. An ELE engineer will reply within 48 hours.",
      sendAnother: "Send another inquiry",
    },
  };

  const lbl = labels[lang] || labels.fr;

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const data = new FormData(form);
    const isLocal = window.location.protocol === "file:";
    if (!isLocal) {
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: data,
        });
        if (res.ok) { setSubmitted(true); setSubmitting(false); return; }
      } catch (_) {}
    }
    // Fallback: open mailto
    const body = `${lbl.name.replace(" *","")}: ${data.get("name")}\nEmail: ${data.get("email")}\n${lbl.phone}: ${data.get("phone")}\n${lbl.company}: ${data.get("company")}\n${lbl.projectType}: ${data.get("project")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitting(false);
  };

  const inputStyle = {
    width: "100%", boxSizing: "border-box",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: 4, padding: "12px 14px",
    color: "#fff", fontSize: 14, fontFamily: "var(--font-sans)",
    outline: "none",
  };
  const labelStyle = {
    display: "block",
    fontSize: 11, fontWeight: 600, letterSpacing: "0.14em",
    textTransform: "uppercase", color: "rgba(255,255,255,0.6)",
    marginBottom: 6,
  };

  return (
  <section id="contact" style={{
    position: "relative", overflow: "hidden",
    background: "var(--ele-navy)", color: "#fff",
    padding: "80px 32px"
  }}>
    <div style={{position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
    <div style={{maxWidth: 1280, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start"}}>
      <div>
        <div style={{color: "var(--ele-red)", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16}}>{lbl.eyebrow}</div>
        <h2 style={{fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, lineHeight: 1.05, textTransform: "uppercase", margin: "0 0 20px"}}>
          {lbl.headline}
        </h2>
        <p style={{fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.5, color: "rgba(255,255,255,0.85)", margin: "0 0 32px", maxWidth: 520}}>
          {lbl.lead}
        </p>
        <div style={{borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24, fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7}}>
          <div style={{fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ele-red)", marginBottom: 12}}>{lbl.orDirect}</div>
          ELE — Etablissement Laadhar d'Electricité<br/>
          10, Rue Zaafrana 2073, Borj Louzir, Ariana, Tunisie<br/>
          <a href="tel:+21670689320" style={{color: "rgba(255,255,255,0.95)", textDecoration: "none"}}>+216 70 689 320</a>{" · "}
          <a href={`mailto:${email}`} style={{color: "rgba(255,255,255,0.95)", textDecoration: "none"}}>{email}</a>
        </div>
      </div>

      {submitted ? (
        <div style={{
          background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 8, padding: "48px 32px", textAlign: "center"
        }}>
          <div style={{fontSize: 48, marginBottom: 12, color: "var(--ele-red)", fontFamily: "var(--font-display)"}}>✓</div>
          <h3 style={{fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, textTransform: "uppercase", margin: "0 0 12px"}}>{lbl.successTitle}</h3>
          <p style={{fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: "rgba(255,255,255,0.8)", margin: "0 0 24px"}}>
            {lbl.successBody}
          </p>
          <button onClick={() => setSubmitted(false)} style={{
            background: "transparent", color: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.2)", padding: "8px 16px",
            borderRadius: 4, cursor: "pointer", fontSize: 13, fontFamily: "var(--font-sans)"
          }}>{lbl.sendAnother}</button>
        </div>
      ) : (
        <form onSubmit={onSubmit} style={{
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 8, padding: 28, display: "grid", gap: 16
        }}>
          <input type="hidden" name="_subject" value={subject} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{display: "none"}} />

          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12}}>
            <div>
              <label style={labelStyle}>{lbl.name}</label>
              <input style={inputStyle} type="text" name="name" required />
            </div>
            <div>
              <label style={labelStyle}>{lbl.company}</label>
              <input style={inputStyle} type="text" name="company" />
            </div>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12}}>
            <div>
              <label style={labelStyle}>{lbl.emailLbl}</label>
              <input style={inputStyle} type="email" name="email" required />
            </div>
            <div>
              <label style={labelStyle}>{lbl.phone}</label>
              <input style={inputStyle} type="tel" name="phone" />
            </div>
          </div>
          <div>
            <label style={labelStyle}>{lbl.projectType}</label>
            <select style={{...inputStyle, appearance: "none"}} name="project" defaultValue="">
              <option value="" disabled style={{color: "#000"}}>{lbl.projectSelect}</option>
              {lbl.projectOptions.map((opt, i) => (
                <option key={i} style={{color: "#000"}}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>{lbl.message}</label>
            <textarea style={{...inputStyle, minHeight: 110, resize: "vertical", fontFamily: "var(--font-sans)"}} name="message" required placeholder={lbl.placeholder} />
          </div>
          <button type="submit" disabled={submitting} style={{
            background: "var(--ele-red)", color: "#fff", border: "none",
            padding: "14px 24px", borderRadius: 4, fontWeight: 600, fontSize: 15,
            cursor: submitting ? "wait" : "pointer", fontFamily: "var(--font-sans)",
            opacity: submitting ? 0.7 : 1, marginTop: 4
          }}>{submitting ? lbl.sending : lbl.send}</button>
        </form>
      )}
    </div>
  </section>
  );
};
window.CTA = CTA;
