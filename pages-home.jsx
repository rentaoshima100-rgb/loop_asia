/* Home page */

/* 実績と対応分野（NORTIQ Stats Section v2）— スクロール表示時に数値をカウントアップ */
function CountUp({ to, run, format }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) { setVal(0); return; }
    let raf;
    const dur = 1100;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <span className="sv-big">{format ? val.toLocaleString("en-US") : val}</span>;
}

function StatsSection() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setRun(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const sectors = [
    { idx: "01", name: "建設", en: "Construction", icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21h16"/><path d="M6 21V6l11 -2"/><path d="M6 6l13 4"/><path d="M17 8v2"/><rect x="9" y="13" width="6" height="8"/>
      </svg>) },
    { idx: "02", name: "製造", en: "Manufacturing", icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7"/>
      </svg>) },
    { idx: "03", name: "農業", en: "Agriculture", icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21v-9"/><path d="M12 12c0 -3.3 2.7 -6 6 -6 0 3.3 -2.7 6 -6 6Z"/><path d="M12 13c0 -2.8 -2.2 -5 -5 -5 0 2.8 2.2 5 5 5Z"/>
      </svg>) },
  ];

  return (
    <div className="statsv2" ref={ref}>
      <div className="sv-head">
        <div className="sv-head-left">
          <span className="sv-accent"></span>
          <div className="sv-jp">実績と対応分野</div>
        </div>
        <div className="sv-meta">亜細亜交流事業協同組合 — Since 2009</div>
      </div>

      <div className="sv-stats">
        <div className="sv-stat">
          <div className="sv-tick">COUNTRIES</div>
          <div className="sv-num"><CountUp to={9} run={run}/><span className="sv-unit">ヵ国</span></div>
          <div className="sv-label">対応送出国</div>
        </div>
        <div className="sv-stat">
          <div className="sv-tick">PLACEMENTS</div>
          <div className="sv-num"><CountUp to={1821} run={run} format/><span className="sv-unit">人</span></div>
          <div className="sv-label">累計 受入実績</div>
        </div>
        <div className="sv-stat">
          <div className="sv-tick">EXPERIENCE</div>
          {/* 修正依頼 p.5：組合に「創業」はなじまないため「設立から」に変更 */}
          <div className="sv-num"><span className="sv-pre">設立から</span><CountUp to={17} run={run}/><span className="sv-unit">年</span></div>
          <div className="sv-label">2009年 設立</div>
        </div>
      </div>

      {/* 修正依頼 p.5：「N分野に対応」と言いながら3分野しか出ていなかったため、
          ①主な受入分野（3枠）と ②対応可能な全分野一覧（カテゴリ別）の2段構成に変更。
          全分野をカードで並べると煩雑になるため、下段はカテゴリ別のテキスト一覧で整理している。 */}
      <div className="sv-band">
        <div className="sv-intro">
          <div className="sv-kicker">Industries</div>
          <div className="sv-intro-big">特定産業<br/>{SSW_FIELD_COUNT}分野に対応</div>
          <span className="sv-chip">{SSW_FIELD_COUNT} FIELDS</span>
        </div>
        {sectors.map((s, i) => (
          <div key={i} className="sv-sector">
            <div className="sv-idx">MAIN {s.idx}</div>
            <div className="sv-icon">{s.icon}</div>
            <div className="sv-name">{s.name}</div>
            <div className="sv-en">{s.en}</div>
          </div>
        ))}
      </div>

      <div className="sv-fields">
        <div className="sv-fields-head">
          <div className="sv-fields-title">
            <span className="sv-fields-en">All Fields</span>
            対応可能な全 {SSW_FIELD_COUNT} 分野
          </div>
          <a className="sv-fields-link" onClick={() => navigate("tokutei")}>
            分野の詳細を見る <Icon name="arrow" size={13}/>
          </a>
        </div>
        <div className="sv-fields-grid">
          {FIELD_CATS.map((c) => {
            const items = SSW_FIELDS.filter(f => f.cat === c.key);
            if (!items.length) return null;
            return (
              <div key={c.key} className="sv-fcat">
                <div className="sv-fcat-name">{c.title.replace("業界", "")}</div>
                <ul className="sv-fcat-list">
                  {items.map((f) => (
                    <li key={f.name} className={SSW_CORE_FIELDS.includes(f.name) ? "is-core" : ""}>{f.name}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="sv-note">
        <div className="sv-note-main"><b>建設・製造・農業</b>をはじめ、特定産業{SSW_FIELD_COUNT}分野に対応しています。</div>
        <div className="sv-note-sub">※分野は令和8年1月23日 閣議決定の分野別運用方針に基づきます。</div>
      </div>
    </div>
  );
}

function HomePage() {
  const news = useNews();

  return (
    <main className="home-main">
      {/* HERO */}
      <section className="hero">
        <div className="hero-photo" style={{backgroundImage:`url(${PHOTOS.hero})`}}></div>
        {/* 修正依頼 #31：新ヒーロー画像は左側が白のため、スローガンは濃色文字で左の余白に配置（styles.css の Hero 参照） */}
        <div className="hero-inner" data-nq-fix="31">
          <div className="hero-content">
            <div className="hero-kicker">Asia Interchange Cooperative Business Union</div>
            {/* 修正依頼（第1回）p.2：メインタイトル差し替え。サブタイトルは原文のまま */}
            <h1 className="hero-title">
              <span className="accent">安心の支援体制</span>、<br/>確かなサポートを提供
            </h1>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate("contact")}>
                受入のご相談 <span className="arrow"><Icon name="arrow" size={16}/></span>
              </button>
              <button className="btn btn-outline" onClick={() => navigate("about")}>
                組合案内を見る <span className="arrow"><Icon name="arrow" size={16}/></span>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-meta">
          <span className="num">9<sup style={{fontSize:18, marginLeft:6}}>カ国</sup></span>
          ASIA 9 COUNTRIES
        </div>
      </section>

      {/* NEWS — お知らせを最上部（One.Stop. 導入＝ワンストップ訴求より上）に配置 */}
      <section className="section section-soft tight">
        <div className="container">
          <FadeUp className="section-head" style={{justifyContent:"space-between", display:"flex", alignItems:"baseline"}}>
            <div>
              <div className="section-num">INFORMATION</div>
              <h2 className="section-title">お知らせ</h2>
            </div>
            <a onClick={() => navigate("news")} className="btn btn-ghost" style={{padding:"14px 24px"}}>
              一覧を見る <span className="arrow"><Icon name="arrow" size={14}/></span>
            </a>
          </FadeUp>
          <div className="news-list">
            {news.slice(0,3).map((n, i) => (
              <FadeUp key={i} className="news-row" delay={i * 60} onClick={() => { window.location.hash = `news-detail=${i}`; window.scrollTo({top:0, behavior:"instant"}); }}>
                <div className="news-date">{n.date}</div>
                <div className={`news-tag ${n.catClass}`}>{n.cat}</div>
                <div className="news-title">{n.title}</div>
                <div className="arrow"><Icon name="arrow" size={14}/></div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="intro">
            <div className="intro-side">
              <div className="intro-en-big">
                One<span className="accent">.</span><br/>
                Stop<span className="accent">.</span>
              </div>
            </div>
            {/* 修正依頼（第1回）p.3：見出し・第1段落・第3段落を差し替え。第2段落は原文のまま */}
            <FadeUp className="intro-body">
              <h2>安心のワンストップ体制</h2>
              <p>
                亜細亜交流事業協同組合は、<strong>2009年の設立以来、累計1,800人以上の受け入れ実績</strong>を積み重ねてまいりました。
              </p>
              <p>
                単なる「人材紹介」ではなく、入国前の日本語教育から、入国後の生活立ち上げ、配属先での定着支援、そしてキャリア形成までを、グループ法人４社で一貫してご支援する「ワンストップ体制」が、私たちの強みです。
              </p>
              <p>
                {/* 依頼書の「グループ内で･････････を運営」は省略表記のため、原文の運営対象（日本語学校・送出し機関）を維持 */}
                当組合は、グループ内で日本語学校（認定日本語教育機関）、送出し機関（ベトナム、インドネシア）を運営。アジア9か国（ベトナム・カンボジア・タイ・インドネシア・中国・モンゴル・バングラデシュ・スリランカ・ラオス）からの送出しに対応。受入から帰国まで、企業様と外国人材の双方が安心して一歩を踏み出せるよう、プロフェッショナルとして一貫してお支えします。
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="section section-soft">
        <div className="container">
          <FadeUp className="section-head center">
            <div className="section-num">STRENGTHS</div>
            <h2 className="section-title">他組合にはない、グループ一貫の支援体制</h2>
            <div className="section-en">3 STRUCTURAL ADVANTAGES</div>
          </FadeUp>
          <div className="strengths">
            {STRENGTHS.map((s, i) => (
              <FadeUp key={i} className="strength" delay={i * 100}>
                <div className="strength-num">STRENGTH / {s.num}</div>
                <div className="strength-icon"><Icon name={s.icon} size={26}/></div>
                <h3 className="strength-title" data-nq-fix={i === 0 ? "28" : i === 1 ? "38" : undefined}>{s.title.split("\n").map((l, j) => <span key={j}>{l}<br/></span>)}</h3>
                <p className="strength-body">{s.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TWO SYSTEMS */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-head center">
            <div className="section-num">SUPPORT PROGRAMS</div>
            <h2 className="section-title">取り扱う 2 つの制度</h2>
            {/* 英語表記：法務省 日本法令外国語訳DB「育成就労＝Employment for Skill Development」／
                出入国在留管理庁「特定技能＝Specified Skilled Worker」に準拠 */}
            <div className="section-en">EMPLOYMENT FOR SKILL DEVELOPMENT & SPECIFIED SKILLED WORKER</div>
          </FadeUp>
          <div className="two-systems">
            <FadeUp className="sys-card" onClick={() => navigate("ikusei")}>
              <div className="sys-cover" data-nq-fix="32" style={{backgroundImage:`url(${PHOTOS.ikuseiCover})`}}>
                <div className="sys-tag">PROGRAM 01</div>
              </div>
              <div className="sys-body">
                <div className="en-sub">EMPLOYMENT FOR SKILL DEVELOPMENT</div>
                <h3>育成就労制度</h3>
                <p>2027年4月から開始される新制度。「人材育成」と「人材確保」を目的とし、3年間で特定技能1号水準の技能習得を目指します。</p>
                <div className="sys-meta">
                  {/* 依頼 #29：在留期間の表記は「原則3年」に統一 */}
                  <div className="sys-meta-item"><span className="k">在留期間</span><span className="v" data-nq-fix="29">原則3年</span></div>
                  {/* 修正依頼 p.7：「特定技能と同一」→「特定技能（1号）と原則同一」 */}
                  <div className="sys-meta-item"><span className="k">対応分野</span><span className="v">特定技能（1号）と原則同一</span></div>
                </div>
                <a className="sys-link">制度の詳細を見る <span className="arrow"><Icon name="arrow" size={14}/></span></a>
              </div>
            </FadeUp>
            <FadeUp delay={100} className="sys-card" onClick={() => navigate("tokutei")}>
              <div className="sys-cover" data-nq-fix="33" style={{backgroundImage:`url(${PHOTOS.tokuteiCover})`}}>
                <div className="sys-tag">PROGRAM 02</div>
              </div>
              <div className="sys-body">
                {/* 修正依頼 p.7：カードは1号を説明しているため「特定技能（1号）制度」に統一。
                    英語表記は出入国在留管理庁の "Specified Skilled Worker (i)" に準拠 */}
                <div className="en-sub">SPECIFIED SKILLED WORKER (i)</div>
                <h3>特定技能（1号）制度</h3>
                {/* 修正依頼 #38：「保有」表現を廃止（→運営） */}
                <p>即戦力となる外国人材を受け入れる制度。グループ内で登録支援機関を運営し、法定10項目の支援を一貫してご提供します。</p>
                <div className="sys-meta">
                  <div className="sys-meta-item"><span className="k">在留期間</span><span className="v">特定技能（1号）原則5年</span></div>
                  <div className="sys-meta-item"><span className="k">対応分野</span><span className="v">{SSW_FIELD_COUNT} 特定産業分野</span></div>
                </div>
                <a className="sys-link">制度の詳細を見る <span className="arrow"><Icon name="arrow" size={14}/></span></a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SUPPORT — サポート内容（TOP構成 01-06） */}
      <section className="section section-soft">
        <div className="container">
          <FadeUp className="section-head center">
            <div className="section-num">SUPPORT</div>
            {/* 見出しが長く nowrap では収まらないため、この見出しのみ折り返しを許可 */}
            <h2 className="section-title" style={{whiteSpace:"normal"}}>受入れから就労・生活まで、きめ細かくサポート</h2>
          </FadeUp>
          <div className="home-support">
            {HOME_SUPPORT.map((s, i) => (
              <FadeUp key={i} className="hspt-item" delay={i * 60}>
                <div className="hspt-icon"><Icon name={s.icon} size={26}/></div>
                <div className="hspt-title">{s.title}</div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="hspt-more">
            {/* btn-outline（暗背景用の白）は section-soft の薄ピンク上では読めないため、
                明背景用の btn-ghost（赤枠・赤文字）を使用 */}
            <button className="btn btn-ghost" onClick={() => navigate("ikusei")}>
              サポート内容を見る <span className="arrow"><Icon name="arrow" size={14}/></span>
            </button>
          </FadeUp>
        </div>
      </section>

      {/* 実績と対応分野（TOP構成 01-07） */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <StatsSection />
          </FadeUp>
        </div>
      </section>

      <CTABand />
    </main>
  );
}

Object.assign(window, { HomePage });
