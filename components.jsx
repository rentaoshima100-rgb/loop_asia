/* Shared components: Header, Footer, FadeUp, Icon, CTABand */

const { useState, useEffect, useRef } = React;

/* navigation helper */
function navigate(id) {
  window.location.hash = id;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function useHash() {
  const [hash, setHash] = useState(() => (window.location.hash.replace("#","") || "home"));
  useEffect(() => {
    const onChange = () => setHash(window.location.hash.replace("#","") || "home");
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

/* IntersectionObserver fade-up */
function FadeUp({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`fade-up ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* Tiny SVG icons */
function Icon({ name, size = 22 }) {
  const s = { width: size, height: size, stroke: "currentColor", fill: "none", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "book":   return (<svg viewBox="0 0 24 24" {...s}><path d="M4 5v14a1 1 0 0 0 1 1h6V6a1 1 0 0 0-1-1H4z"/><path d="M20 5v14a1 1 0 0 1-1 1h-6V6a1 1 0 0 1 1-1h6z"/><path d="M4 5l8 1 8-1"/></svg>);
    case "shield": return (<svg viewBox="0 0 24 24" {...s}><path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>);
    case "flow":   return (<svg viewBox="0 0 24 24" {...s}><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 6h10M6 8l5 8M18 8l-5 8"/></svg>);
    case "arrow":  return (<svg viewBox="0 0 24 24" {...s}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case "phone":  return (<svg viewBox="0 0 24 24" {...s}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
    case "mail":   return (<svg viewBox="0 0 24 24" {...s}><path d="M4 4h16v16H4z"/><path d="M4 6l8 6 8-6"/></svg>);
    case "globe":  return (<svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>);
    default: return null;
  }
}

/* Header */
function Header() {
  const hash = useHash();
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand" onClick={() => navigate("home")}>
          <div className="brand-mark">亜</div>
          <div className="brand-name">
            亜細亜交流事業協同組合
            <span className="small">ASIA EXCHANGE COOPERATIVE</span>
          </div>
        </div>
        <nav className="nav">
          {NAV.slice(0, 6).map(n => (
            <a
              key={n.id}
              className={`nav-link ${hash === n.id ? "active" : ""}`}
              onClick={() => navigate(n.id)}
            >{n.label}</a>
          ))}
          <a className="nav-cta" onClick={() => navigate("contact")}>お問い合わせ</a>
        </nav>
      </div>
    </header>
  );
}

/* CTA band — shared between many pages */
function CTABand() {
  return (
    <section className="cta-band">
      <div className="cta-band-photo" style={{backgroundImage:`url(${PHOTOS.ctaBg})`}}></div>
      <div className="container cta-band-inner">
        <FadeUp>
          <div className="section-num" style={{color:"var(--accent-soft)"}}>—  CONTACT</div>
        </FadeUp>
        <FadeUp delay={100}>
          <h2>受入のご検討・ご相談、<br/>まずはお気軽にお問い合わせください。</h2>
        </FadeUp>
        <FadeUp delay={200}>
          <p>業種・人数・ご希望時期をお伺いし、最適な受入プランをご提案いたします。資料請求のみのご相談も歓迎しております。</p>
          <button className="btn btn-primary" onClick={() => navigate("contact")}>
            お問い合わせフォーム <span className="arrow"><Icon name="arrow" size={16}/></span>
          </button>
        </FadeUp>
        <div className="cta-band-contact">
          <div className="cta-contact-item">
            <div className="label">TEL</div>
            <div className="value">06-6388-XXXX</div>
            <div className="label" style={{marginTop:8, color:"rgba(255,255,255,0.45)"}}>平日 9:00 – 18:00</div>
          </div>
          <div className="cta-contact-item">
            <div className="label">MAIL</div>
            <div className="value">info@asiakumiai.com</div>
            <div className="label" style={{marginTop:8, color:"rgba(255,255,255,0.45)"}}>24時間受付</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Footer */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <div className="brand-mark">亜</div>
              <div className="brand-name" style={{color:"#fff"}}>
                亜細亜交流事業協同組合
                <span className="small" style={{color:"rgba(255,255,255,0.5)"}}>ASIA EXCHANGE COOPERATIVE</span>
              </div>
            </div>
            <div className="footer-addr">
              〒564-XXXX 大阪府吹田市江坂町X-X-X<br/>
              江坂センタービル X階<br/>
              TEL 06-6388-XXXX ／ FAX 06-6388-XXXX
            </div>
          </div>
          <div>
            <h4>制度のご案内</h4>
            <div className="footer-links">
              <a onClick={() => navigate("ikusei")}>育成就労制度</a>
              <a onClick={() => navigate("tokutei")}>特定技能制度</a>
              <a onClick={() => navigate("cases")}>活躍事例</a>
            </div>
          </div>
          <div>
            <h4>組合について</h4>
            <div className="footer-links">
              <a onClick={() => navigate("about")}>組合案内</a>
              <a onClick={() => navigate("about")}>代表メッセージ</a>
              <a onClick={() => navigate("about")}>グループ法人</a>
              <a onClick={() => navigate("news")}>お知らせ</a>
            </div>
          </div>
          <div>
            <h4>お問い合わせ</h4>
            <div className="footer-links">
              <a onClick={() => navigate("contact")}>お問い合わせフォーム</a>
              <a onClick={() => { window.location.hash = "privacy"; window.scrollTo({top:0, behavior:"instant"}); }}>プライバシーポリシー</a>
              <a onClick={() => { window.location.hash = "regulations"; window.scrollTo({top:0, behavior:"instant"}); }}>各種規定</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 ASIA EXCHANGE COOPERATIVE. ALL RIGHTS RESERVED.</div>
          <div>SITE BY NORTIQ LAB</div>
        </div>
      </div>
    </footer>
  );
}

/* Inner page hero */
function PageHero({ kicker, title, lead, photo, crumbs }) {
  return (
    <section className="page-hero">
      <div className="page-hero-photo" style={{backgroundImage:`url(${photo})`}}></div>
      <div className="page-hero-inner">
        {crumbs && (
          <div className="crumbs">
            <a onClick={() => navigate("home")} style={{cursor:"pointer"}}>HOME</a>
            <span>/</span>
            <span style={{color:"#fff"}}>{crumbs}</span>
          </div>
        )}
        <div className="kicker">— {kicker}</div>
        <h1 className="serif">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}

Object.assign(window, { navigate, useHash, FadeUp, Icon, Header, Footer, CTABand, PageHero });
