/* =====================================================================
   2026-11 デザイン刷新：トップページ・育成就労制度ページ
   - 10.26／11.05／11.11／11.16 の修正依頼で確定したデザインを実装。
   - 旧 HomePage / IkuseiPage はそれぞれのファイルに残してある。
     app.jsx の割り当てを戻せば旧デザインに戻せる。
   - クラス名はすべて rx- 始まり（スタイルは redesign.css）。
   ===================================================================== */

/* ページ切替（ハッシュルーティング）と、ページ内の見出しへのスクロール */
function rxGo(id) {
  return (e) => { e.preventDefault(); navigate(id); };
}
function rxScrollTo(id) {
  return (e) => {
    e.preventDefault();
    const el = document.getElementById("rx-" + id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}
/* 文節で区切った文章（「|」区切り、改行は "\n"）を、区切りの位置でだけ折り返す */
function rxPh(s) {
  const out = [];
  s.split("\n").forEach((line, li) => {
    if (li) out.push(<br key={"br" + li} />);
    line.split("|").forEach((c, ci) => { if (c) out.push(<span className="rx-w" key={li + "-" + ci}>{c}</span>); });
  });
  return out;
}

/* お問い合わせ帯（トップ・育成就労制度で共通） */
function RxCTA() {
  return (
    <section className="rx-cta-sec" data-screen-label="CTA">
      <img src="uploads/redesign/cta-room.jpg" alt="" />
      <div className="rx-wrap">
        <h2>{rxPh("外国人材の|受入、\nまずは|ご相談ください。")}</h2>
        <div className="rx-cta-box">
          <a href="#contact" onClick={rxGo("contact")}>お問い合わせ <span aria-hidden="true">→</span></a>
          <div className="rx-tel"><small>TEL</small><span className="rx-num">06-6394-7770</span><small>9:00–18:00</small></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- トップページ ---------- */
const RX_SLIDES = [
  { img: "uploads/redesign/top-3.jpg", alt: "組合担当者と企業様の打ち合わせの様子", pos: "50% 30%" },
  { img: "uploads/redesign/top-4.jpg", alt: "日本語の教材を持つ外国人材の集合写真", pos: "50% 100%" },
  { img: "uploads/redesign/top-1.jpg", alt: "足場の上で作業する外国人材", pos: "50% 50%" },
  { img: "uploads/redesign/top-2.jpg", alt: "工場で機械を扱う外国人材", pos: "50% 30%" },
];

function RxHero() {
  const [cur, setCur] = useState(0);
  /* 自動で切り替わるスライドには一時停止ボタンを付ける（WCAG 2.2.2）。
     「視差効果を減らす」設定の端末では最初から止めておく。 */
  const reduce = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [playing, setPlaying] = useState(!reduce);
  const [hold, setHold] = useState(false);   // マウスを載せている・キーボード操作中は止める
  useEffect(() => {
    if (!playing || hold) return undefined;
    const t = setInterval(() => setCur((s) => (s + 1) % RX_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [playing, hold, cur]);
  const go = (n) => setCur((n + RX_SLIDES.length) % RX_SLIDES.length);
  const icon = (d) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
  );
  return (
    <section className="rx-hero" data-screen-label="Hero" aria-roledescription="carousel" aria-label="トップの写真"
      onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHold(false); }}>
      {RX_SLIDES.map((s, k) => (
        <img key={k} className="rx-hero-img" src={s.img} alt={k === cur ? s.alt : ""} aria-hidden={k === cur ? undefined : "true"}
          fetchpriority={k === 0 ? "high" : undefined} decoding="async"
          style={{ objectPosition: s.pos, opacity: k === cur ? 1 : 0 }} />
      ))}
      <div className="rx-hero-veil"></div>
      <svg className="rx-hero-curve" viewBox="0 0 1600 110" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,110 L0,100 C520,104 1060,70 1600,0 L1600,110 Z" fill="#9E1B2A"></path>
        <path d="M0,110 L0,8 C380,40 860,74 1220,70 C1400,68 1520,56 1600,44 L1600,110 Z" fill="#fff"></path>
      </svg>
      <div className="rx-hero-txt">
        <div className="rx-hero-kicker">Asia Interchange Cooperative Business Union</div>
        <h1><span className="rx-w">アジアの力を</span><span className="rx-w">企業の未来に</span></h1>
        <p className="rx-hero-lead">{rxPh("人と企業をつなぎ、|ともに成長できる|未来を創る。")}</p>
        <div className="rx-hero-btns">
          <a href="#contact" className="rx-hbtn rx-hbtn-p" onClick={rxGo("contact")}>受入のご相談 <span aria-hidden="true">→</span></a>
          <a href="#about" className="rx-hbtn rx-hbtn-o" onClick={rxGo("about")}>組合案内 <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <button type="button" className="rx-hero-arw rx-l" aria-label="前の写真" onClick={() => go(cur - 1)}>{icon(<polyline points="15 6 9 12 15 18"></polyline>)}</button>
      <button type="button" className="rx-hero-arw rx-r" aria-label="次の写真" onClick={() => go(cur + 1)}>{icon(<polyline points="9 6 15 12 9 18"></polyline>)}</button>
      <div className="rx-hero-ctrl">
        <button type="button" className="rx-hero-play" onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? "スライドを一時停止" : "スライドを再生"}>
          {playing
            ? icon(<g><line x1="9" y1="6" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="18"></line></g>)
            : icon(<polygon points="8 5 19 12 8 19 8 5" fill="currentColor"></polygon>)}
        </button>
        <div className="rx-hero-dots">
          {RX_SLIDES.map((s, k) => (
            <button type="button" key={k} aria-label={(k + 1) + "枚目の写真を表示"} aria-current={k === cur ? "true" : "false"} onClick={() => go(k)}></button>
          ))}
        </div>
      </div>
    </section>
  );
}

const RX_FOUNDATION = [
  { name: "送り出し機関", img: "uploads/redesign/fnd-mensetsu.jpg",
    catch: "現地との|強い連携で、|信頼できる|人材を確保",
    body: "長年培ってきた|ネットワークを活かした|人材の募集・選考" },
  { name: "講習センター", img: "uploads/redesign/fnd-kosyu.jpg",
    catch: "充実した|教育環境で、|円滑な|受入れを支援",
    body: "自社運営の|講習施設による、|安心の教育体制" },
  { name: "日本語学校", group: true, img: "uploads/redesign/fnd-jyugyo.jpg",
    catch: "日本語教育の|専門性を活かした、|充実の支援体制",
    body: "グループ企業|「ループインターナショナル|日本語学校」との|連携により、|豊富な教育経験と|専門的なノウハウを|活かした人材育成を|支援。" },
  { name: "登録支援機関", group: true, img: "uploads/redesign/fnd-shienkikan.jpg",
    catch: "育成就労から|特定技能へ、|切れ目のない|支援体制",
    body: "グループ企業の|登録支援機関と|連携し、|育成就労から|特定技能への|円滑な移行と、|移行後の職場定着を|継続的にサポート。" },
];

const RX_PROGRAMS = [
  { name: "育成就労制度", go: "ikusei", en: "EMPLOYMENT FOR SKILL DEVELOPMENT", img: "uploads/redesign/prg-ikusei.jpg", pos: "50% 33%",
    catch: "人材育成と|人材確保を両立する、|新たな|外国人材受入れ制度",
    body: "外国人材の|募集・選考から|入国準備、|受入れ後の|育成・定着まで、|長年培った経験と|国内外の|ネットワークを活かし、|企業と外国人材の|双方を|総合的に|サポートします。" },
  { name: "特定技能制度", go: "tokutei", en: "SPECIFIED SKILLED WORKER", img: "uploads/redesign/prg-tokutei.jpg", pos: "50% 50%",
    catch: "育成就労で|培った技能を活かし、|さらなる活躍に|つなげる制度",
    body: "育成就労から|特定技能への|円滑な移行を支援。|グループ企業の|登録支援機関と連携し、|外国人材の|継続的な活躍と、|企業の安定した|人材確保を|サポートします。" },
];

const RX_COUNTRIES = ["ベトナム", "インドネシア", "カンボジア", "タイ", "中国", "モンゴル", "ラオス", "スリランカ", "バングラデシュ"];

function RxHomePage() {
  const news = useNews();
  const openNews = (i) => (e) => { e.preventDefault(); window.location.hash = `news-detail=${i}`; window.scrollTo({ top: 0, behavior: "instant" }); };
  return (
    <main className="rx">
      <RxHero />

      <section className="rx-news" data-screen-label="News">
        <div className="rx-wrap">
          <div className="rx-news-head">
            <div className="rx-head"><div className="rx-eyebrow">NEWS</div><h2 className="rx-h2m">お知らせ</h2></div>
            <a href="#news" className="rx-more" onClick={rxGo("news")}>お知らせ一覧へ <span aria-hidden="true">→</span></a>
          </div>
          <div className="rx-news-list">
            {news.slice(0, 3).map((n, i) => (
              <a key={i} href={`#news-detail=${i}`} className="rx-news-row" onClick={openNews(i)}>
                <span className="rx-news-date">{n.date}</span>
                <span className="rx-news-cat">{n.cat}</span>
                <span className="rx-news-title">{n.title}</span>
                <span className="rx-news-arw" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="rx-fnd" data-screen-label="Foundation">
        <div className="rx-wrap">
          <div className="rx-fnd-head"><h2>{rxPh("企業、|外国人を支える\n確かな基礎")}</h2></div>
          <div>
            <div className="rx-fnd-grid">
              {RX_FOUNDATION.map((s) => (
                <div className="rx-fnd-card" key={s.name}>
                  <div className="rx-fnd-pic"><img src={s.img} alt={s.name} /></div>
                  <div className="rx-fnd-tx">
                    <div className="rx-fnd-name"><b>{s.name}</b>{s.group && <small>グループ企業</small>}</div>
                    <span className="rx-fnd-catch">{rxPh(s.catch)}</span>
                    <span className="rx-fnd-body">{rxPh(s.body)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="rx-fnd-band">
              <div><b>2009</b><span>年設立</span></div>
              <div>{rxPh("長年の実績が築いた、|信頼の支援体制")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rx-prg" data-screen-label="Programs">
        <div className="rx-wrap">
          <div className="rx-prg-head">
            <div className="rx-eyebrow">PROGRAMS</div>
            <h2 className="rx-h2m">外国人材受入れ支援</h2>
            <p>{rxPh("育成就労から特定技能まで、|企業と外国人材の成長を|継続的にサポート")}</p>
          </div>
          <div className="rx-prg-grid">
            {RX_PROGRAMS.map((p) => (
              <a key={p.name} href={"#" + p.go} className="rx-prg-card" onClick={rxGo(p.go)}>
                <div className="rx-prg-pic"><img src={p.img} alt={p.name} style={{ objectPosition: p.pos }} /></div>
                <div className="rx-prg-tx">
                  <span className="rx-prg-en">{p.en}</span>
                  <span className="rx-prg-name">{p.name}</span>
                  <span className="rx-prg-catch">{rxPh(p.catch)}</span>
                  <p className="rx-prg-body">{rxPh(p.body)}</p>
                  <span className="rx-prg-more">詳しく見る<span aria-hidden="true">→</span></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="rx-res" data-screen-label="Results">
        <div className="rx-wrap">
          <div className="rx-head"><div className="rx-eyebrow">RESULTS</div><h2 className="rx-h2m">受け入れ実績</h2></div>
          <div className="rx-res-box">
            <div className="rx-res-pic"><img src="uploads/redesign/res-building.jpg" alt="ループ大阪の建物" /></div>
            <div className="rx-res-tx">
              <div className="rx-res-row">
                <span className="rx-res-n">9<em>ヵ国</em></span>
                <div className="rx-res-k"><b>対応送出国</b><span>{RX_COUNTRIES.map((c, i) => <span className="rx-w" key={c}>{c}{i < RX_COUNTRIES.length - 1 ? "・" : ""}</span>)}</span></div>
              </div>
              <div className="rx-res-row">
                <span className="rx-res-n">1,821<em>人</em></span>
                <div className="rx-res-k"><b>累計 受入実績</b></div>
              </div>
              <div className="rx-res-row">
                <span className="rx-res-n"><small>設立から</small>17<em>年</em></span>
                <div className="rx-res-k"><b>2009年設立</b></div>
              </div>
              <div className="rx-res-ind">
                <b>受け入れ実績業種</b>
                <span>{rxPh("建設、|工業製品製造業、|自動車整備、|介護、|食料品製造業、|家具製造、等")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RxCTA />
    </main>
  );
}

/* ---------- 育成就労制度ページ（11.16 修正依頼で確定） ---------- */
function RxIkuseiPage() {
  return (
    <main className="rx">
<section className="rx-ttl" data-screen-label="Page Title"><img className="rx-ttl-img" src="uploads/redesign/ik-title.jpg" alt="工場で作業する外国人材" /><div className="rx-ttl-veil"></div><div className="rx-wrap rx-ttl-in"><div className="rx-crumb"><a href="#home" onClick={rxGo("home")}>トップ</a><span>／</span><span>育成就労制度</span></div><h1>育成就労制度</h1><p className="rx-ttl-lead"><span className="rx-w">人材育成と</span><span className="rx-w">人材確保を</span><span className="rx-w">両立する、</span><br/><span className="rx-w">新たな</span><span className="rx-w">外国人材</span><span className="rx-w">受入れ制度</span></p></div></section>
<div className="rx-wrap rx-facts-wrap"><div className="rx-facts"><div><span className="rx-k">制度の開始</span><span className="rx-v"><span className="rx-num">2027</span>年<span className="rx-num">4</span>月</span></div><div><span className="rx-k">就労期間</span><span className="rx-v">原則<span className="rx-num">3</span>年間</span></div><div><span className="rx-k">対象</span><span className="rx-v"><span className="rx-num">17</span>の産業分野</span></div></div>
</div><nav className="rx-pnav" aria-label="ページ内メニュー"><div className="rx-wrap"><div className="rx-row"><a href="#about" onClick={rxScrollTo("about")}><span>育成就労制度とは</span><span aria-hidden="true">↓</span></a><a href="#fields" onClick={rxScrollTo("fields")}><span>職種</span><span aria-hidden="true">↓</span></a><a href="#flow" onClick={rxScrollTo("flow")}><span>受入れまでの流れ</span><span aria-hidden="true">↓</span></a><a href="#support" onClick={rxScrollTo("support")}><span>組合のサポート</span><span aria-hidden="true">↓</span></a><a href="#japanese" onClick={rxScrollTo("japanese")}><span><span className="rx-w">日本語能力の</span><span className="rx-w">要件と支援体制</span></span><span aria-hidden="true">↓</span></a></div></div>
</nav>
<div id="rx-about" className="rx-anchor"></div><section className="rx-abt rx-sec" data-screen-label="About"><div className="rx-wrap"><div className="rx-abt-head"><h2 className="rx-h2">育成就労制度とは</h2></div><p className="rx-abt-lead"><span className="rx-w">育成就労制度は、</span><br/><span className="rx-w">外国人材の育成と</span><span className="rx-w">人材確保を目的とした、</span><br/><span className="rx-w">2027年4月開始の</span><span className="rx-w">新しい制度です</span></p><div className="rx-band"><div className="rx-a"><b>育成就労</b><span>原則<span className="rx-num">3</span>年間</span></div><div className="rx-b"><b>特定技能1号</b><span>への移行を目指す</span></div></div>
<p className="rx-abt-body"><span className="rx-w">原則3年間の就労を通じて、</span><span className="rx-w">専門的な技能や</span><span className="rx-w">日本語能力を身につけ、</span><span className="rx-w">特定技能1号への</span><span className="rx-w">移行を目指します。</span><br/><span className="rx-w">外国人材の成長と</span><span className="rx-w">企業の安定した</span><span className="rx-w">人材確保につながる</span><span className="rx-w">制度です。</span></p><div className="rx-feat"><h3>特徴</h3><div className="rx-feat-grid"><div className="rx-feat-item"><span className="rx-num">1</span><p><span className="rx-w">3年間の</span><span className="rx-w">育成を通じて、</span><br/><span className="rx-w">特定技能1号への</span><span className="rx-w">移行を目指す</span></p></div><div className="rx-feat-item"><span className="rx-num">2</span><p><span className="rx-w">技能と</span><span className="rx-w">日本語能力を</span><span className="rx-w">計画的に習得</span></p></div><div className="rx-feat-item"><span className="rx-num">3</span><p><span className="rx-w">一定の条件を</span><span className="rx-w">満たせば、</span><br/><span className="rx-w">本人希望による</span><span className="rx-w">転籍が可能</span></p></div><div className="rx-feat-item"><span className="rx-num">4</span><p><span className="rx-w">製造業・</span><span className="rx-w">建設業・</span><span className="rx-w">介護など</span><span className="rx-w">17の産業分野が対象</span></p></div><div className="rx-feat-item"><span className="rx-num">5</span><p><span className="rx-w">外国人材の</span><span className="rx-w">権利保護と</span><span className="rx-w">監理・支援体制を強化</span></p></div></div>
</div></div>
</section>
<div id="rx-fields" className="rx-anchor"></div><section className="rx-fld rx-sec" data-screen-label="Fields"><div className="rx-wrap"><div className="rx-fld-l"><div className="rx-head"><h2 className="rx-h2">職種</h2></div><div className="rx-big17"><span className="rx-num">17</span><span>の<br/>産業分野</span></div><p><span className="rx-w">育成就労制度では、</span><span className="rx-w">製造業・建設業・</span><br/><span className="rx-w">農業・介護など、</span><span className="rx-w">17の産業分野で</span><br/><span className="rx-w">外国人材を</span><span className="rx-w">受け入れることができます。</span></p><p className="rx-note"><span className="rx-w">各分野によって</span><span className="rx-w">対象業務や</span><span className="rx-w">受入れ条件が</span><span className="rx-w">異なります。</span><br/><span className="rx-w">外国人材の受入れを</span><span className="rx-w">ご検討中の企業様は、</span><br/><span className="rx-w">お気軽に</span><span className="rx-w">弊組合まで</span><span className="rx-w">お問い合わせください。</span></p><a className="rx-btn" data-go="contact">お問い合わせ <span aria-hidden="true">→</span></a></div><div className="rx-fld-r"><h3>対象となる17分野</h3><div className="rx-fld-list"><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25"></path><path d="M12.5 15.5l2 2"></path><path d="M15 13l2 2"></path></svg></span><b>介護</b><span className="rx-num">01</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10m0 2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z"></path><path d="M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4"></path><path d="M15 7h.01"></path><path d="M18 9h.01"></path><path d="M18 5h.01"></path><path d="M21 3h.01"></path><path d="M21 7h.01"></path><path d="M21 11h.01"></path><path d="M10 7h1"></path></svg></span><b>ビルクリーニング</b><span className="rx-num">02</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path><path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M8 6h.01"></path><path d="M11 6h.01"></path><path d="M14 6h2"></path><path d="M8 14c1.333 -.667 2.667 -.667 4 0c1.333 .667 2.667 .667 4 0"></path></svg></span><b>リネンサプライ</b><span className="rx-num">03</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18"></path><path d="M5 21v-12l5 4v-4l5 4h4"></path><path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582"></path><path d="M9 17h1"></path><path d="M14 17h1"></path></svg></span><b>工業製品製造業</b><span className="rx-num">04</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 21h6"></path><path d="M9 21v-18l-6 6h18"></path><path d="M9 3l10 6"></path><path d="M17 9v4a2 2 0 1 1 -2 2"></path></svg></span><b>建設</b><span className="rx-num">05</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1"></path><path d="M4 18l-1 -5h18l-2 4"></path><path d="M5 13v-6h8l4 6"></path><path d="M7 7v-4h-1"></path></svg></span><b>造船・舶用工業</b><span className="rx-num">06</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path><path d="M3 6l9 -4l9 4"></path></svg></span><b>自動車整備</b><span className="rx-num">07</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M22 17v-3h-20"></path><path d="M2 8v9"></path><path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z"></path></svg></span><b>宿泊</b><span className="rx-num">08</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 13c0 -3.87 -3.37 -7 -10 -7h-8"></path><path d="M3 15h16a2 2 0 0 0 2 -2"></path><path d="M3 6v5h17.5"></path><path d="M3 10l0 4"></path><path d="M8 11l0 -5"></path><path d="M13 11l0 -4.5"></path><path d="M3 19l18 0"></path></svg></span><b>鉄道</b><span className="rx-num">09</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M14 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M7 17l5 0"></path><path d="M3 17v-6h13v6"></path><path d="M5 11v-4h4"></path><path d="M9 11v-6h4l3 6"></path><path d="M22 15h-3v-10"></path><path d="M16 13l3 0"></path></svg></span><b>物流倉庫</b><span className="rx-num">10</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M7 15l0 .01"></path><path d="M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M10.5 17l6.5 0"></path><path d="M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5"></path><path d="M18 5h-1a1 1 0 0 0 -1 1v4"></path></svg></span><b>農業</b><span className="rx-num">11</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571"></path><path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504"></path><path d="M18 11v.01"></path><path d="M11.5 10.5c-.667 1 -.667 2 0 3"></path></svg></span><b>漁業</b><span className="rx-num">12</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z"></path><path d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537"></path><path d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805"></path></svg></span><b>飲食料品製造業</b><span className="rx-num">13</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3"></path></svg></span><b>外食業</b><span className="rx-num">14</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9"></path><path d="M15 21l0 -3"></path><path d="M8 13l-2 -2"></path><path d="M8 12l2 -2"></path><path d="M8 21v-13"></path><path d="M5.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z"></path></svg></span><b>林業</b><span className="rx-num">15</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5.5m-6 0a6 2.5 0 1 0 12 0a6 2.5 0 1 0 -12 0"></path><path d="M18 5.5v4.626a1.415 1.415 0 0 1 1.683 2.18l-.097 .108l-1.586 1.586v4c0 1.61 -2.54 2.925 -5.725 3l-.275 0c-3.314 0 -6 -1.343 -6 -3v-2l-1.586 -1.586a1.414 1.414 0 0 1 1.586 -2.287v-6.627"></path><path d="M10 12.5v1.5"></path><path d="M14 16v1"></path></svg></span><b>木材産業</b><span className="rx-num">16</span></div><div className="rx-fld-row"><span className="rx-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 17l-2 2l2 2"></path><path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1"></path><path d="M8.536 11l-.732 -2.732l-2.732 .732"></path><path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024"></path><path d="M15.464 11l2.732 .732l.732 -2.732"></path><path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976"></path></svg></span><b>資源循環</b><span className="rx-num">17</span></div></div>
</div></div>
</section>
<div id="rx-flow" className="rx-anchor"></div><section className="rx-flw rx-sec" data-screen-label="Flow"><div className="rx-wrap"><div className="rx-head"><h2 className="rx-h2">受入れまでの流れ</h2></div><div className="rx-flow"><div className="rx-ph rx-gap"><div className="rx-ph-per">約1ヶ月</div><div className="rx-ph-brk" aria-hidden="true"></div><div><div className="rx-step"><span className="rx-c"><small>STEP</small><span className="rx-num">01</span></span><div><h3><span className="rx-w">お問い合わせ・</span><span className="rx-w">ご相談</span></h3><p><span className="rx-w">受入れ人数や仕事内容、</span><span className="rx-w">ご希望の条件を</span><span className="rx-w">確認します。</span></p></div></div>
<div className="rx-arr" aria-hidden="true"><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><polygon points="0,2 26,2 13,17" fill="#9E1B2A"></polygon></svg></div></div>
</div><div className="rx-ph rx-gap"><div className="rx-ph-per">約6ヶ月</div><div className="rx-ph-brk" aria-hidden="true"></div><div><div className="rx-step"><span className="rx-c"><small>STEP</small><span className="rx-num">02</span></span><div><h3><span className="rx-w">人材募集・</span><span className="rx-w">面接</span></h3><p><span className="rx-w">企業様のご希望に合った</span><span className="rx-w">人材の募集・選考を</span><span className="rx-w">支援します。</span></p></div></div>
<div className="rx-arr" aria-hidden="true"><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><polygon points="0,2 26,2 13,17" fill="#9E1B2A"></polygon></svg></div><div className="rx-step"><span className="rx-c"><small>STEP</small><span className="rx-num">03</span></span><div><h3><span className="rx-w">雇用契約・</span><span className="rx-w">各種申請</span></h3><p><span className="rx-w">雇用契約の締結や</span><span className="rx-w">必要な申請手続きを</span><span className="rx-w">進めます。</span></p></div></div>
<div className="rx-arr" aria-hidden="true"><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><polygon points="0,2 26,2 13,17" fill="#9E1B2A"></polygon></svg></div></div>
</div><div className="rx-ph rx-gap"><div className="rx-ph-per">約1ヶ月</div><div className="rx-ph-brk" aria-hidden="true"></div><div><div className="rx-step"><span className="rx-c"><small>STEP</small><span className="rx-num">04</span></span><div><h3><span className="rx-w">入国・</span><span className="rx-w">入国後講習</span></h3><p><span className="rx-w">入国後、</span><span className="rx-w">日本語や生活ルールなどの</span><span className="rx-w">講習を受講します。</span></p></div></div>
<div className="rx-arr" aria-hidden="true"><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><polygon points="0,2 26,2 13,17" fill="#9E1B2A"></polygon></svg></div></div>
</div><div className="rx-ph"><div className="rx-ph-per">3年間</div><div className="rx-ph-brk" aria-hidden="true"></div><div><div className="rx-step"><span className="rx-c"><small>STEP</small><span className="rx-num">05</span></span><div><h3><span className="rx-w">企業配属・</span><span className="rx-w">就労開始</span></h3><p><span className="rx-w">講習修了後、</span><span className="rx-w">企業様での就労を</span><span className="rx-w">開始します。</span></p></div></div>
<div className="rx-arr" aria-hidden="true"><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><polygon points="0,2 26,2 13,17" fill="#9E1B2A"></polygon></svg></div><div className="rx-step"><span className="rx-c"><small>STEP</small><span className="rx-num">06</span></span><div><h3><span className="rx-w">育成就労</span><span className="rx-w">（原則3年間）</span></h3><p><span className="rx-w">実務経験を</span><span className="rx-w">積みながら、</span><span className="rx-w">専門技能や日本語能力を</span><span className="rx-w">高め、</span><span className="rx-w">特定技能への</span><span className="rx-w">移行を目指します。</span></p></div></div>
<div className="rx-arr" aria-hidden="true"><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><polygon points="0,2 26,2 13,17" fill="#9E1B2A"></polygon></svg></div><div className="rx-step"><span className="rx-c"><small>STEP</small><span className="rx-num">07</span></span><div><h3><span className="rx-w">育成就労修了・</span><span className="rx-w">特定技能へ移行</span></h3><p><span className="rx-w">原則3年間の</span><span className="rx-w">育成就労を修了し、</span><span className="rx-w">所定の要件を</span><span className="rx-w">満たした場合、</span><span className="rx-w">特定技能1号へ</span><span className="rx-w">移行できます。</span></p></div></div>
</div></div>
</div></div>
</section>
<div id="rx-support" className="rx-anchor"></div><section className="rx-sup rx-sec" data-screen-label="Support"><div className="rx-wrap"><div className="rx-sec-top"><div className="rx-head"><h2 className="rx-h2">組合のサポート</h2></div><p className="rx-lead"><span className="rx-w">弊組合では、</span><span className="rx-w">外国人材と企業様が</span><span className="rx-w">安心して働ける</span><span className="rx-w">環境づくりを</span><span className="rx-w">支援します。</span></p></div><div className="rx-sup-grid"><div className="rx-card"><div className="rx-pic"><img src="uploads/redesign/sup-mensetsu.jpg" alt="現地での面接の様子" style={{objectPosition:'50% 45%'}} /></div><div className="rx-tx"><b>人材募集・採用支援</b><span className="rx-d"><span className="rx-w">企業様のニーズに合った</span><span className="rx-w">人材の確保</span></span></div></div>
<div className="rx-card"><div className="rx-pic"><img src="uploads/redesign/sup-shienkikan.jpg" alt="申請書類を確認する様子" style={{objectPosition:'50% 62%'}} /></div><div className="rx-tx"><b>各種申請手続き支援</b><span className="rx-d"><span className="rx-w">受入れに必要な</span><span className="rx-w">書類作成・手続き</span></span></div></div>
<div className="rx-card"><div className="rx-pic"><img src="uploads/redesign/sup-soudan.jpg" alt="面談の様子" style={{objectPosition:'50% 46%'}} /></div><div className="rx-tx"><b>通訳・相談対応</b><span className="rx-d"><span className="rx-w">母国語による</span><span className="rx-w">コミュニケーション支援</span></span></div></div>
<div className="rx-card"><div className="rx-pic"><div className="rx-tbd" role="img" aria-label="写真は後日差し替え"><svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M9 14l2 2l4 -4"></path></svg><strong>写真は後日差し替え</strong></div></div>
<div className="rx-tx"><b>定期訪問・監理支援</b><span className="rx-d"><span className="rx-w">就労状況の確認と</span><span className="rx-w">職場定着の支援</span></span></div></div>
<div className="rx-card"><div className="rx-pic"><div className="rx-tbd" role="img" aria-label="写真は後日差し替え"><svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304"></path><path d="M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z"></path></svg><strong>写真は後日差し替え</strong></div></div>
<div className="rx-tx"><b>生活支援</b><span className="rx-d"><span className="rx-w">日本での生活に関する</span><span className="rx-w">相談・サポート</span></span></div></div>
<div className="rx-card"><div className="rx-pic"><img src="uploads/redesign/sup-tokutei.jpg" alt="溶接作業をする外国人材" style={{objectPosition:'50% 50%'}} /></div><div className="rx-tx"><b>特定技能への移行支援</b><span className="rx-d"><span className="rx-w">継続雇用に向けた</span><span className="rx-w">相談・手続き支援</span></span></div></div>
</div></div>
</section>
<div id="rx-japanese" className="rx-anchor"></div><section className="rx-jp rx-sec" data-screen-label="Japanese"><div className="rx-wrap"><div className="rx-head"><h2 className="rx-h2"><span className="rx-w">日本語能力の</span><span className="rx-w">要件と</span><span className="rx-w">支援体制</span></h2></div><div className="rx-row"><h3 className="rx-s">日本語能力の要件</h3><p><span className="rx-w">育成就労制度では、</span><span className="rx-w">段階的な日本語能力の</span><span className="rx-w">向上が求められます。</span></p></div><div className="rx-req-grid"><div className="rx-req"><div className="rx-hd">就労開始前</div><div className="rx-bd"><span className="rx-lv"><span className="rx-num">A1</span>相当<small>（N5相当）</small></span><span className="rx-rq"><span className="rx-w">試験合格、</span><span className="rx-w">または所定の</span><span className="rx-w">日本語講習の受講</span></span></div><span className="rx-go" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 6 15 12 9 18"></polyline></svg></span></div><div className="rx-req"><div className="rx-hd">1年目</div><div className="rx-bd"><span className="rx-lv"><span className="rx-num">A1</span>相当<small>（N5相当）</small></span><span className="rx-rq"><span className="rx-w">日本語試験の受験</span></span></div><span className="rx-go" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 6 15 12 9 18"></polyline></svg></span></div><div className="rx-req"><div className="rx-hd">3年間修了時</div><div className="rx-bd"><span className="rx-lv"><span className="rx-num">A2.2</span>相当<small>（N4相当）</small></span><span className="rx-rq"><span className="rx-w">試験合格を目指す</span></span></div></div>
</div><div className="rx-jsup"><h3 className="rx-s"><span className="rx-w">弊組合の</span><span className="rx-w">日本語教育・</span><span className="rx-w">支援体制</span></h3><div className="rx-jsup-grid"><div className="rx-jcard"><div className="rx-pic"><img src="uploads/redesign/jp-class.jpg" alt="日本語を学ぶ外国人材" style={{objectPosition:'50% 40%'}} /></div><div className="rx-tx"><b><span className="rx-w">自社施設での</span><span className="rx-w">入国後講習</span></b><span className="rx-d"><span className="rx-w">外国人材が</span><span className="rx-w">安心して</span><span className="rx-w">日本での生活と</span><span className="rx-w">仕事を</span><span className="rx-w">始められるよう、</span><span className="rx-w">日本語、</span><span className="rx-w">生活習慣、</span><span className="rx-w">労働関係法令、</span><span className="rx-w">安全衛生などについて、</span><span className="rx-w">自社施設において</span><span className="rx-w">講習を行います。</span></span></div></div>
<div className="rx-jcard"><div className="rx-pic"><div className="rx-tbd" role="img" aria-label="オンライン授業の写真は後日差し替え"><svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 19l18 0"></path><path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path></svg><strong>写真は後日差し替え</strong><small>オンライン授業の写真が入ります</small></div></div>
<div className="rx-tx"><b><span className="rx-w">グループ内の</span><span className="rx-w">日本語学校との連携</span></b><span className="rx-d"><span className="rx-w">グループ内に</span><span className="rx-w">日本語学校を有しており、</span><span className="rx-w">日本語教育に関する</span><span className="rx-w">専門的な知識と</span><span className="rx-w">教育ノウハウを活かした</span><span className="rx-w">学習支援が可能です。</span></span></div></div>
</div></div>
<p className="rx-src"><span className="rx-w">※制度の内容は</span><span className="rx-w">2026年11月時点の情報です。</span><span className="rx-w">出典：出入国在留管理庁・</span><span className="rx-w">厚生労働省の公表資料。</span><span className="rx-w">分野ごとの詳しい要件は、</span><span className="rx-w">最新の公表資料を</span><span className="rx-w">ご確認ください。</span></p></div></section>
<RxCTA />
    </main>
  );
}
