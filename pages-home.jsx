/* Home page */

function HomePage() {
  /* animate bars when in view */
  const barsRef = useRef(null);
  const [barsVisible, setBarsVisible] = useState(false);
  const news = useNews();
  useEffect(() => {
    if (!barsRef.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setBarsVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(barsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <main className="home-main">
      {/* HERO */}
      <section className="hero">
        <div className="hero-photo" style={{backgroundImage:`url(${PHOTOS.hero})`}}></div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-kicker">Asia Interchange Cooperative Business Union</div>
            <h1 className="hero-title">
              高い技術と安全性、<br/>
              <span className="accent">やり遂げる</span>自信があります。
            </h1>
            <p className="hero-sub">
              日本語学校併設の組合だから安心。育成就労制度から特定技能制度まで、<br/>
              受入から定着までを、グループ一貫でご支援いたします。
            </p>
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

      {/* 3 ASSURANCES — overlapping below hero */}
      <AssuranceBar />

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
              <div className="intro-vlabel">「人」を真ん中に、未来へ。</div>
              <div className="intro-en-big">
                One<span className="accent">.</span><br/>
                Stop<span className="accent">.</span>
              </div>
            </div>
            <FadeUp className="intro-body">
              <h2>「人」を真ん中に置いた、<br/>誠実なご縁づくりを。</h2>
              <p>
                亜細亜交流事業協同組合は、ベトナム・カンボジア・タイ・インドネシア・中国・モンゴル・バングラデシュ・スリランカ・ラオスの9カ国から、若く意欲ある人材を、日本の中小企業様にお繋ぎしてまいりました。
              </p>
              <p>
                単なる「人材紹介」ではなく、入国前の日本語教育から、入国後の生活立ち上げ、配属先での定着支援、そしてキャリア形成までを、グループ法人４社で一貫してご支援する「ワンストップ体制」が、私たちの強みです。
              </p>
              <p>
                {/* 「実習生」はA-4の用語ルールに従い「育成就労外国人」に正規化。送出し機関は§4-1の要確認→「運営」で確定 */}
                当組合は、グループ内で日本語学校（認定日本語教育機関）、送出し機関（ベトナム、インドネシア）を運営。育成就労外国人・特定技能制度のプロフェッショナルとして、企業様と育成就労外国人の双方に寄り添ったサポートを提供しています。長年の実績と専門知識をもとに、受入から帰国まで一貫してお支えします。
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SITUATION ENTRIES — 6 cards */}
      <section className="section tight">
        <div className="container">
          <FadeUp className="section-head center">
            <div className="section-num">QUICK GUIDE</div>
            <h2 className="section-title">お探しの情報はこちらから</h2>
            <div className="section-en">FIND WHAT YOU NEED</div>
          </FadeUp>
          <div className="entries">
            {[
              { num: "01", title: "初めて外国人材の\n受入をご検討の方", desc: "制度の違いから受入までの全体像を、わかりやすくご紹介いたします。", to: "ikusei" },
              { num: "02", title: "新制度（育成就労）\nへの対応を相談したい", desc: "2027年施行の育成就労制度のポイントと、受入に向けた準備をご説明します。", to: "ikusei" },
              { num: "03", title: "特定技能で\n即戦力を採用したい", desc: "登録支援機関による法定10項目の支援内容と、受入の流れをご案内します。", to: "tokutei" },
              { num: "04", title: "活躍事例を\n見てみたい", desc: "業種別・国別の受入事例と、現場で働く外国人材ご本人の声をご紹介。", to: "cases" },
              { num: "05", title: "資料請求・\n無料相談を希望", desc: "業種・人数・希望時期を伺い、最適な受入プランをご提案いたします。", to: "contact" },
              { num: "06", title: "組合の体制を\n知りたい", desc: "代表挨拶・グループ法人体系・沿革など、組合の全体像をご確認いただけます。", to: "about" },
            ].map((e, i) => (
              <FadeUp key={i} delay={i * 40} className="entry-card" onClick={() => navigate(e.to)}>
                <div className="entry-num">FOR / {e.num}</div>
                <div className="entry-title">{e.title.split("\n").map((l, j) => <span key={j}>{l}<br/></span>)}</div>
                <div className="entry-desc">{e.desc}</div>
                <div className="entry-arrow">
                  READ MORE <Icon name="arrow" size={14}/>
                </div>
              </FadeUp>
            ))}
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
                <h3 className="strength-title">{s.title.split("\n").map((l, j) => <span key={j}>{l}<br/></span>)}</h3>
                <p className="strength-body">{s.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* DATA section */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">DATA</div>
              <h2 className="section-title">業界別 人手不足の現状</h2>
            </div>
          </FadeUp>
          <div className="data-grid">
            <FadeUp className="data-intro">
              <h3>2030年、日本の労働力は<br/>644万人不足するといわれています。</h3>
              <p>
                少子高齢化を背景に、中小企業の人手不足は深刻さを増しています。特に建設・介護・製造・農業分野では、外国人材の活躍が事業継続のために欠かせません。
              </p>
              <p style={{color:"var(--ink-mute)", fontSize:12, marginTop:24}}>
                出典：パーソル総合研究所・中央大学「労働市場の未来推計2030」、厚生労働省 雇用動向調査ほか（推計値）
              </p>
            </FadeUp>
            <div ref={barsRef}>
              <div className="bar-chart">
                {INDUSTRY_DATA.map((d, i) => (
                  <div className="bar-row" key={i}>
                    <div className="bar-label">{d.name}</div>
                    <div className="bar-track">
                      <div
                        className={`bar-fill ${i === 0 ? "accent" : ""}`}
                        style={{ width: barsVisible ? `${d.pct}%` : "0%", transitionDelay: `${i * 120}ms` }}
                      ></div>
                    </div>
                    <div className={`bar-value ${i === 0 ? "accent" : ""}`}>
                      {d.pct}<span className="pct">%</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{fontSize:11, color:"var(--ink-mute)", letterSpacing:"0.15em", marginTop:24}}>
                ＊ 各業界 採用予定企業のうち「人手不足」と回答した割合
              </div>
            </div>
          </div>
          <FadeUp className="stat-row">
            <div className="stat">
              <div className="stat-num">9<span className="unit">カ国</span></div>
              <div className="stat-label">対応送出国</div>
            </div>
            <div className="stat">
              <div className="stat-num">1,821<span className="unit">人</span></div>
              <div className="stat-label">累計 受入実績</div>
            </div>
            {/* 要確認: このタイルは「創業年数」を指す前提。別の数値を意図する場合は差し替え。 */}
            <div className="stat">
              <div className="stat-num">創業 17<span className="unit">年</span></div>
              <div className="stat-label">2009年 設立</div>
            </div>
            {/* TODO(client): 受入企業 継続率は数値未提供のため保留。組合から数値提供があり次第反映。
                提供が無ければタイルごと削除を別途判断。 */}
            <div className="stat">
              <div className="stat-num todo">{`{{TODO}}`}</div>
              <div className="stat-label">受入企業 継続率</div>
            </div>
          </FadeUp>
          {/* 主な受入分野（農業・製造・建設）をアイコン／イラストで表現 */}
          <FadeUp>
            <IndustryIcons />
          </FadeUp>
        </div>
      </section>

      {/* TWO SYSTEMS */}
      <section className="section section-soft">
        <div className="container">
          <FadeUp className="section-head center">
            <div className="section-num">SUPPORT PROGRAMS</div>
            <h2 className="section-title">取り扱う 2 つの制度</h2>
            <div className="section-en">TRAINING & SPECIFIED SKILLED WORKER</div>
          </FadeUp>
          <div className="two-systems">
            <FadeUp className="sys-card" onClick={() => navigate("ikusei")}>
              <div className="sys-cover" style={{backgroundImage:`url(${PHOTOS.ikuseiCover})`}}>
                <div className="sys-tag">PROGRAM 01</div>
              </div>
              <div className="sys-body">
                <div className="en-sub">TRAINING ＆ EMPLOYMENT</div>
                <h3>育成就労制度</h3>
                <p>2027年4月から開始される新制度。「人材育成」と「人材確保」を目的とし、3年間で特定技能1号水準の技能習得を目指します。</p>
                <div className="sys-meta">
                  <div className="sys-meta-item"><span className="k">在留期間</span><span className="v">最大 3 年</span></div>
                  <div className="sys-meta-item"><span className="k">対応分野</span><span className="v">特定技能と同一</span></div>
                </div>
                <a className="sys-link">制度の詳細を見る <span className="arrow"><Icon name="arrow" size={14}/></span></a>
              </div>
            </FadeUp>
            <FadeUp delay={100} className="sys-card" onClick={() => navigate("tokutei")}>
              <div className="sys-cover" style={{backgroundImage:`url(${PHOTOS.tokuteiCover})`}}>
                <div className="sys-tag">PROGRAM 02</div>
              </div>
              <div className="sys-body">
                <div className="en-sub">SPECIFIED SKILLED WORKER</div>
                <h3>特定技能制度</h3>
                <p>即戦力となる外国人材を受け入れる制度。グループ内に登録支援機関を保有し、法定10項目の支援を一貫してご提供します。</p>
                <div className="sys-meta">
                  <div className="sys-meta-item"><span className="k">在留期間</span><span className="v">1号 最大5年</span></div>
                  <div className="sys-meta-item"><span className="k">対応分野</span><span className="v">16 特定産業分野</span></div>
                </div>
                <a className="sys-link">制度の詳細を見る <span className="arrow"><Icon name="arrow" size={14}/></span></a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* GROUP */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-head center">
            <div className="section-num">GROUP STRUCTURE</div>
            <h2 className="section-title">グループ法人体系</h2>
            <div className="section-en">4 COMPANIES — ONE MISSION</div>
          </FadeUp>
          <FadeUp className="group-chart">
            {GROUP.map((g, i) => (
              <div key={i} className={`group-card ${i === 0 ? "parent" : ""}`}>
                <div className="role">{g.role}</div>
                <div className="name">{g.name}</div>
                <div className="desc">{g.desc}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* USP: One-stop flow — moved to lower area (お知らせ上部 / ワンストップ下部) */}
      <section className="usp-block">
        <div className="usp-text">
          <FadeUp>
            <div className="section-num">ONE-STOP SUPPORT</div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2>通算 最大 8 年。<br/>育成就労から特定技能まで、<br/>切れ目のないご支援を。</h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p>
              育成就労制度（3年）と特定技能1号（5年）を組み合わせれば、通算で最大8年間、同じ人材に活躍いただくことが可能です。
            </p>
            <p>
              当組合では、両制度の橋渡しを「同一グループ内」で完結できるため、本人にとっては心理的な負担が少なく、企業様にとっては引き継ぎロスのない、安定した人材活用が実現します。
            </p>
            <button className="btn btn-outline" style={{marginTop:24}} onClick={() => navigate("ikusei")}>
              制度の詳細を見る <span className="arrow"><Icon name="arrow" size={14}/></span>
            </button>
          </FadeUp>
        </div>
        <div className="usp-image" style={{backgroundImage:`url(${PHOTOS.oneStop})`}}></div>
      </section>

      {/* TIMELINE DIAGRAM — 8 years */}
      <section className="section tight">
        <div className="container">
          <FadeUp>
            <TimelineDiagram />
          </FadeUp>
        </div>
      </section>

      <CTABand />
    </main>
  );
}

Object.assign(window, { HomePage });
