// utils.jsx — small reusable hooks & floating UI
// Shared by the rest of the page: scroll progress bar, in-view animated counter,
// back-to-top button, scroll-spy hook, useDebouncedValue.

// ── useInView ────────────────────────────────────────────────────────────────
function useInView(opts = { threshold: 0.2, once: true }) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          if (opts.once) io.disconnect();
        } else if (!opts.once) {
          setInView(false);
        }
      });
    }, { threshold: opts.threshold ?? 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

// ── useScrollSpy ─────────────────────────────────────────────────────────────
// Returns the id of the section currently overlapping the viewport's top band.
function useScrollSpy(ids, offset = 96) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join("|"), offset]);
  return active;
}

// ── useDebouncedValue ────────────────────────────────────────────────────────
function useDebouncedValue(value, ms = 200) {
  const [v, setV] = React.useState(value);
  React.useEffect(() => {
    const t = setTimeout(() => setV(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return v;
}

// ── AnimatedCounter ──────────────────────────────────────────────────────────
// Counts up from 0 → target over ~1.6s when scrolled into view. Strips the
// numeric prefix off labels like "200+", "48+", "1978" and re-applies the
// suffix once animation finishes. Non-numeric strings render as-is.
const AnimatedCounter = ({ value, duration = 1600, ...rest }) => {
  const match = String(value).match(/^(\d+)(.*)$/);
  const [ref, inView] = useInView();
  const [n, setN] = React.useState(0);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  React.useEffect(() => {
    if (!inView || !match) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView]);

  if (!match) return <span ref={ref} {...rest}>{value}</span>;
  return <span ref={ref} {...rest}>{n}{suffix}</span>;
};

// ── ScrollProgress ───────────────────────────────────────────────────────────
const ScrollProgress = () => {
  const [pct, setPct] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
      setPct(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, height: 2,
      background: "transparent", zIndex: 60, pointerEvents: "none",
    }}>
      <div style={{
        height: "100%", width: `${pct * 100}%`,
        background: "var(--ele-red)",
        transition: "width 80ms linear",
        boxShadow: "0 0 6px rgba(227, 6, 19, 0.5)",
      }}/>
    </div>
  );
};

// ── BackToTop ────────────────────────────────────────────────────────────────
const BackToTop = () => {
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 40,
        width: 44, height: 44, borderRadius: 999, padding: 0,
        background: "var(--ele-navy)", color: "#fff",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 8px 24px rgba(15, 36, 71, 0.25)",
        display: "grid", placeItems: "center",
        cursor: "pointer",
        opacity: shown ? 1 : 0,
        pointerEvents: shown ? "auto" : "none",
        transform: shown ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 220ms, transform 220ms",
      }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  );
};

// ── StickyQuoteCTA ───────────────────────────────────────────────────────────
// Hides until the hero is past, vanishes again when the contact form scrolls
// into view (we're at the destination — no need to bug the user).
const StickyQuoteCTA = ({ lang = "fr" }) => {
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("company-hero");
      const contact = document.getElementById("contact");
      if (!hero) { setShown(window.scrollY > 600); return; }
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const contactTop = contact ? contact.offsetTop - window.innerHeight + 200 : Infinity;
      setShown(window.scrollY > heroBottom - 100 && window.scrollY < contactTop);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const lbl = lang === "en" ? "Request a quote" : "Demander un devis";
  return (
    <button
      onClick={() => {
        const el = document.getElementById("contact");
        if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
      }}
      aria-label={lbl}
      style={{
        position: "fixed", bottom: 24, left: 24, zIndex: 40,
        background: "var(--ele-red)", color: "#fff",
        border: "none", borderRadius: 999, padding: "12px 20px",
        fontWeight: 600, fontSize: 14, cursor: "pointer",
        fontFamily: "var(--font-sans)",
        display: "flex", alignItems: "center", gap: 8,
        boxShadow: "0 8px 24px rgba(227, 6, 19, 0.35)",
        opacity: shown ? 1 : 0,
        pointerEvents: shown ? "auto" : "none",
        transform: shown ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 220ms, transform 220ms",
      }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 5l-6 8h4l-2 6 6-8h-4z"/>
      </svg>
      {lbl}
    </button>
  );
};

Object.assign(window, {
  useInView, useScrollSpy, useDebouncedValue,
  AnimatedCounter, ScrollProgress, BackToTop, StickyQuoteCTA,
});
