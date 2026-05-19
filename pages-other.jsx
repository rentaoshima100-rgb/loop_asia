/* About / Cases / News / Contact pages */

function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="ABOUT"
        title="組合案内"
        lead="2008年の設立以来、誠実なご縁づくりを大切にしてまいりました。私たちの想い、組織、グループ法人について、ご紹介いたします。"
        photo={PHOTOS.aboutHero}
        crumbs="組合案内"
      />

      {/* Message from president */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">MESSAGE</div>
              <h2 className="section-title">代表ご挨拶</h2>
            </div>
          </FadeUp>
          <div className="message-section">
            <FadeUp>
              <div className="message-portrait" style={{backgroundImage:`url(${PHOTOS.portrait})`}}></div>
            </FadeUp>
            <FadeUp delay={120} className="message-body">
              <h2>「人」と「人」をつなぐ仕事に、<br/>誇りと責任を。</h2>
              <p>
                外国人材の受入は、企業様にとって「人手不足の解決策」であると同時に、若く意欲ある方々にとって「人生の大きな決断」でもあります。私たちはその両方の重みを、決して忘れることなく、誠実に向き合ってまいりました。
              </p>
              <p>
                グループ内に日本語学校と登録支援機関を持つことの強みは、単に「ワンストップで便利だから」ではありません。本人の成長を、入国前から特定技能2号取得まで、同じ顔ぶれで見守れること。困ったときに、いつでも同じ窓口に相談できること。この「変わらない安心」こそが、私たちが提供できる最大の価値だと考えています。
              </p>
              <p>
                2027年4月から始まる育成就労制度においても、私たちのスタンスは変わりません。「人」を真ん中に置いた誠実なご縁づくりで、企業様の事業発展と、外国人材ご本人のキャリア形成の、両方に貢献してまいります。
              </p>
              <div className="message-sign">
                <div className="pos">代表理事</div>
                <div className="nm">小久保 健一</div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 組合概要 */}
      <section className="section section-soft">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">OVERVIEW</div>
              <h2 className="section-title">組合概要</h2>
            </div>
          </FadeUp>
          <FadeUp>
            <table className="info-table">
              <tbody>
                <tr><th>名称</th><td>亜細亜交流事業協同組合（Asia Exchange Cooperative）</td></tr>
                <tr><th>所在地</th><td>〒564-XXXX 大阪府吹田市江坂町X丁目X番X号　江坂センタービル X階</td></tr>
                <tr><th>代表理事</th><td>小久保 健一</td></tr>
                <tr><th>設立</th><td>2008年4月</td></tr>
                <tr><th>事業内容</th><td>育成就労制度における監理支援事業／組合員企業の共同事業（共同購買・教育研修等）／外国人材受入に関する各種コンサルティング</td></tr>
                <tr><th>許可番号</th><td>許 第XXXXXXXXX号（出入国在留管理庁）</td></tr>
                <tr><th>加盟組合員数</th><td>180 社（2026年4月現在）</td></tr>
                <tr><th>主要送出国</th><td>ベトナム／インドネシア／フィリピン／ミャンマー／ネパール</td></tr>
                <tr><th>対応分野</th><td>建設・製造・農業・介護・宿泊・飲食料品ほか</td></tr>
              </tbody>
            </table>
          </FadeUp>
        </div>
      </section>

      {/* 沿革 */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">HISTORY</div>
              <h2 className="section-title">沿革</h2>
            </div>
          </FadeUp>
          <FadeUp>
            {[
              { year: "2008", label: "設立", body: "亜細亜交流事業協同組合として大阪府吹田市にて設立。技能実習生の受入監理を開始。" },
              { year: "2012", label: "送出国 拡大", body: "ベトナム・インドネシアに加え、フィリピン・ミャンマーの送出機関と提携契約を締結。" },
              { year: "2015", label: "日本語学校 設立", body: "グループ会社「亜細亜日本語学院」を設立。入国後講習の自社運営体制を構築。" },
              { year: "2019", label: "登録支援機関 設立", body: "特定技能制度の開始に伴い、グループ会社「アジアサポート（株）」を登録支援機関として設立。" },
              { year: "2022", label: "累計1,000名 達成", body: "受入累計 1,000名を達成。受入企業様の継続率 98%を維持。" },
              { year: "2026", label: "育成就労 準備", body: "2027年4月の新制度施行に向け、監理支援機関への移行準備および研修体制を整備。" },
            ].map((h, i) => (
              <div key={i} className="history-row">
                <div style={{fontFamily:"var(--font-display-en)", fontSize:28, color:"var(--primary)", letterSpacing:"0.06em"}}>{h.year}</div>
                <div className="serif" style={{fontSize:17, letterSpacing:"0.08em", color:"var(--accent)"}}>{h.label}</div>
                <div style={{fontSize:14.5, lineHeight:1.9, color:"var(--ink-soft)"}}>{h.body}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="section section-soft">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">SERVICES</div>
              <h2 className="section-title">事業内容</h2>
            </div>
          </FadeUp>
          <FadeUp className="service-grid">
            {[
              { num: "01", title: "育成就労 監理支援事業", body: "監理支援機関として、育成就労実習生の受入計画策定・在留資格申請・入国後監理・定期面談・行政対応までを一貫して担います。" },
              { num: "02", title: "特定技能 登録支援事業", body: "グループ内登録支援機関（アジアサポート株式会社）にて、特定技能外国人の法定10項目の支援業務を実施いたします。" },
              { num: "03", title: "日本語教育 提供事業", body: "グループ内日本語学校（亜細亜日本語学院）にて、入国後講習および継続的なオンライン日本語教育を提供しています。" },
              { num: "04", title: "海外人材紹介・送出提携事業", body: "ベトナム・インドネシア・フィリピン・ミャンマー・ネパールの送出機関とのネットワークを構築し、現地で候補者の選定・面接を実施します。" },
              { num: "05", title: "組合員 共同事業", body: "教育研修・共同購買・情報交換会の運営など、組合員企業様向けの相互扶助事業を運営しています。" },
              { num: "06", title: "コンサルティング・セミナー", body: "受入制度に関するセミナー開催、企業様個別ご相談、行政動向の情報提供を継続的に実施しています。" },
            ].map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-num">BIZ / {s.num}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-body">{s.body}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* Group */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">GROUP</div>
              <h2 className="section-title">グループ法人体系</h2>
            </div>
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

      {/* アクセス */}
      <section className="section section-soft">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">ACCESS</div>
              <h2 className="section-title">本部・江坂事務所</h2>
            </div>
          </FadeUp>
          <FadeUp className="access-grid">
            <div className="access-info">
              <h3>所在地</h3>
              <div className="addr">
                〒564-XXXX<br/>
                大阪府吹田市江坂町X丁目X番X号<br/>
                江坂センタービル X階
              </div>
              <h3 style={{fontSize:14, letterSpacing:"0.12em", marginBottom:14, marginTop:8}}>アクセス</h3>
              <ul className="access-list">
                <li>
                  <span className="badge">地下鉄</span>
                  <span>大阪メトロ御堂筋線「江坂駅」5番出口より徒歩 3 分</span>
                </li>
                <li>
                  <span className="badge">JR</span>
                  <span>JR新大阪駅より地下鉄で約 5 分</span>
                </li>
                <li>
                  <span className="badge">空港</span>
                  <span>大阪国際空港よりタクシーで約 25 分</span>
                </li>
                <li>
                  <span className="badge">車</span>
                  <span>名神高速 吹田IC より約 10 分（提携駐車場あり）</span>
                </li>
              </ul>
              <div style={{marginTop:32, paddingTop:24, borderTop:"1px solid var(--line)", fontSize:13, lineHeight:1.9, color:"var(--ink-soft)"}}>
                TEL：06-6388-XXXX<br/>
                受付時間：平日 9:00 – 18:00（土日祝休）
              </div>
            </div>
            <div className="access-map">
              <div className="access-map-grid"></div>
              <div className="access-map-road h"></div>
              <div className="access-map-road v"></div>
              <div className="access-map-road d"></div>
              <div className="access-map-name" style={{top:"36%", left:"6%"}}>SUITA STATION</div>
              <div className="access-map-name" style={{top:"60%", right:"6%"}}>ESAKA AVENUE</div>
              <div className="access-map-label">亜細亜交流事業協同組合</div>
              <div className="access-map-pin"></div>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand/>
    </main>
  );
}

function CasesPage() {
  const [filter, setFilter] = useState("すべて");
  const [country, setCountry] = useState("ALL");
  const cats = ["すべて","建設業","製造業","農業","介護","宿泊","食品製造","飲食料品"];
  const countries = ["ALL","VIETNAM","INDONESIA","PHILIPPINES","MYANMAR","NEPAL"];
  let filtered = filter === "すべて" ? CASES : CASES.filter(c => c.industry === filter);
  if (country !== "ALL") filtered = filtered.filter(c => c.country === country);

  const VOICES = [
    { name: "Tran Van H.", info: "VIETNAM ／ 建設業 ／ 在留3年目", avatar: PHOTOS.case1, body: "技能実習から始まり、今は特定技能で同じ会社で働いています。日本に来てすぐの2ヶ月、日本語学校で勉強できたのが今でも役立っています。" },
    { name: "Putri A.",     info: "INDONESIA ／ 介護 ／ 在留2年目", avatar: PHOTOS.case3, body: "利用者さんの名前と顔をすぐに覚えるよう、先輩から教えていただきました。N3に合格できたのは、組合の先生のサポートのおかげです。" },
    { name: "Maria S.",     info: "PHILIPPINES ／ 農業 ／ 在留3年目", avatar: PHOTOS.case2, body: "3年目から作業の段取りを任せてもらっています。日本の四季と作物について、こんなに学べるとは思いませんでした。" },
    { name: "Aung K.",      info: "MYANMAR ／ 食品製造 ／ 在留1年目", avatar: PHOTOS.case4, body: "毎月の面談で組合の方が来てくれるので、困ったことを母国語で相談できて安心です。家族にも仕送りができ、家族みんなが喜んでいます。" },
  ];

  return (
    <main>
      <PageHero
        kicker="CASE STUDIES"
        title="活躍事例"
        lead="受入企業様の現場で、外国人材がどのように活躍しているのか。業種別の事例と、本人たちの声をご紹介いたします。"
        photo={PHOTOS.caseHero}
        crumbs="活躍事例"
      />

      <section className="section">
        <div className="container">
          <FadeUp className="stat-row" style={{marginTop:0, marginBottom:64}}>
            <div className="stat">
              <div className="stat-num">1,240<span className="unit">名</span></div>
              <div className="stat-label">累計 受入実績</div>
            </div>
            <div className="stat">
              <div className="stat-num">180<span className="unit">社</span></div>
              <div className="stat-label">加盟組合員数</div>
            </div>
            <div className="stat">
              <div className="stat-num">12<span className="unit">業種</span></div>
              <div className="stat-label">受入対応業種</div>
            </div>
            <div className="stat">
              <div className="stat-num">5<span className="unit">カ国</span></div>
              <div className="stat-label">送出国ネットワーク</div>
            </div>
          </FadeUp>

          <FadeUp>
            <div style={{fontSize:11, letterSpacing:"0.25em", color:"var(--ink-mute)", marginBottom:14}}>BY INDUSTRY</div>
            <div className="news-filters" style={{marginBottom:24, paddingBottom:20}}>
              {cats.map(c => (
                <div key={c} className={`news-filter ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>{c}</div>
              ))}
            </div>
            <div style={{fontSize:11, letterSpacing:"0.25em", color:"var(--ink-mute)", marginBottom:14}}>BY COUNTRY</div>
            <div className="news-filters">
              {countries.map(c => (
                <div key={c} className={`news-filter ${country === c ? "active" : ""}`} onClick={() => setCountry(c)} style={{fontFamily:"var(--font-display-en)", letterSpacing:"0.2em"}}>{c}</div>
              ))}
            </div>
          </FadeUp>

          <div className="case-grid">
            {filtered.length === 0 ? (
              <div style={{gridColumn:"1/-1", textAlign:"center", padding:"80px 0", color:"var(--ink-mute)", fontSize:14}}>
                該当する事例がありません。フィルターを変更してご覧ください。
              </div>
            ) : filtered.map((c, i) => (
              <FadeUp key={i} delay={i * 60} className="case-card" onClick={() => { window.location.hash = `case-detail=${CASES.indexOf(c)}`; window.scrollTo({top:0, behavior:"instant"}); }}>
                <div className="case-photo" style={{backgroundImage:`url(${c.photo})`}}>
                  <div className="tag">{c.industry}</div>
                </div>
                <div className="country">{c.country}</div>
                <h3>{c.title}</h3>
                <p style={{marginTop:8, fontSize:12, color:"var(--ink-mute)", letterSpacing:"0.1em"}}>{c.company}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 外国人材のお声 */}
      <section className="section section-soft">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">VOICES</div>
              <h2 className="section-title">外国人材のお声</h2>
            </div>
          </FadeUp>
          <div className="voice-grid">
            {VOICES.map((v, i) => (
              <FadeUp key={i} delay={i * 80} className="voice-card">
                <div className="voice-meta">
                  <div className="voice-avatar" style={{backgroundImage:`url(${v.avatar})`}}></div>
                  <div className="voice-who">
                    <div className="nm">{v.name}</div>
                    <div className="info">{v.info}</div>
                  </div>
                </div>
                <div className="voice-body">{v.body}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABand/>
    </main>
  );
}

function NewsPage() {
  const [filter, setFilter] = useState("すべて");
  const filtered = filter === "すべて" ? NEWS : NEWS.filter(n => n.cat === filter);
  return (
    <main>
      <PageHero
        kicker="NEWS & INFORMATION"
        title="お知らせ"
        lead="制度改正情報、組合からのお知らせ、セミナー・イベント情報など、外国人材の受入にまつわる最新情報をお届けいたします。"
        photo={PHOTOS.newsHero}
        crumbs="お知らせ"
      />

      <section className="section">
        <div className="container">
          <FadeUp className="news-filters">
            {NEWS_CATS.map(c => (
              <div key={c} className={`news-filter ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>{c}</div>
            ))}
          </FadeUp>
          <div className="news-list">
            {filtered.map((n, i) => (
              <FadeUp key={i} className="news-row" delay={i * 40} onClick={() => { window.location.hash = `news-detail=${NEWS.indexOf(n)}`; window.scrollTo({top:0, behavior:"instant"}); }}>
                <div className="news-date">{n.date}</div>
                <div className={`news-tag ${n.catClass}`}>{n.cat}</div>
                <div className="news-title">{n.title}</div>
                <div className="arrow"><Icon name="arrow" size={14}/></div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABand/>
    </main>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main>
      <PageHero
        kicker="CONTACT US"
        title="お問い合わせ"
        lead="受入のご検討、制度に関するご相談、資料請求まで、お気軽にお問い合わせください。専任担当者より3営業日以内にご返信いたします。"
        photo={PHOTOS.contactHero}
        crumbs="お問い合わせ"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <FadeUp>
              {submitted ? (
                <div style={{padding:"80px 40px", textAlign:"center", border:"1px solid var(--line)", background:"var(--bg-soft)"}}>
                  <div className="section-num" style={{justifyContent:"center", textAlign:"center"}}>THANK YOU</div>
                  <h2 className="section-title" style={{marginTop:24, marginBottom:24}}>送信が完了いたしました。</h2>
                  <p style={{color:"var(--ink-soft)", lineHeight:2, marginBottom:32}}>
                    お問い合わせいただき、誠にありがとうございます。<br/>
                    3営業日以内に、ご担当者よりご連絡いたします。
                  </p>
                  <button className="btn btn-ghost" onClick={() => { setSubmitted(false); navigate("home"); }}>
                    トップへ戻る <span className="arrow"><Icon name="arrow" size={14}/></span>
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); window.scrollTo({top:0, behavior:"smooth"}); }}>
                  <div className="field">
                    <label>御社名 <span className="req">必須</span></label>
                    <input type="text" required placeholder="例：株式会社 山田製作所" />
                  </div>
                  <div className="field">
                    <label>ご担当者名 <span className="req">必須</span></label>
                    <input type="text" required placeholder="例：山田 太郎" />
                  </div>
                  <div className="field">
                    <label>メールアドレス <span className="req">必須</span></label>
                    <input type="email" required placeholder="example@company.co.jp" />
                  </div>
                  <div className="field">
                    <label>お電話番号</label>
                    <input type="tel" placeholder="000-0000-0000" />
                  </div>
                  <div className="field">
                    <label>業種 <span className="req">必須</span></label>
                    <select required defaultValue="">
                      <option value="" disabled>選択してください</option>
                      <option>建設業</option><option>製造業</option><option>農業</option>
                      <option>介護</option><option>宿泊</option><option>飲食料品製造</option>
                      <option>外食業</option><option>その他</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>ご希望の受入人数</label>
                    <select defaultValue="">
                      <option value="" disabled>選択してください</option>
                      <option>1〜3名</option><option>4〜10名</option><option>11〜20名</option><option>21名以上</option><option>未定</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label>ご希望の受入時期</label>
                    <select defaultValue="">
                      <option value="" disabled>選択してください</option>
                      <option>3ヶ月以内</option><option>半年以内</option><option>1年以内</option><option>1年以上先</option><option>未定／情報収集中</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label>お問い合わせ内容 <span className="req">必須</span></label>
                    <textarea required placeholder="ご質問・ご相談内容をご記入ください。"></textarea>
                  </div>
                  <div className="contact-actions">
                    <button type="submit" className="btn btn-dark">
                      上記内容で送信する <span className="arrow"><Icon name="arrow" size={16}/></span>
                    </button>
                  </div>
                </form>
              )}
            </FadeUp>

            <FadeUp delay={120}>
              <div className="contact-side">
                <h3>お電話でのお問い合わせ</h3>
                <div className="ph">06-6388-XXXX</div>
                <div className="hours">受付時間 平日 9:00 – 18:00（土日祝休）</div>

                <h3 style={{marginTop:8}}>本部・江坂事務所</h3>
                <div style={{fontSize:13.5, lineHeight:2, color:"var(--ink-soft)"}}>
                  〒564-XXXX<br/>
                  大阪府吹田市江坂町X-X-X<br/>
                  江坂センタービル X階<br/><br/>
                  ・地下鉄御堂筋線「江坂駅」徒歩3分
                </div>

                <div style={{marginTop:32, paddingTop:24, borderTop:"1px solid var(--line)"}}>
                  <h3 style={{marginTop:0}}>主なお問い合わせ内容</h3>
                  <ul style={{listStyle:"none", padding:0, margin:0, fontSize:13.5, lineHeight:2.1, color:"var(--ink-soft)"}}>
                    <li>・ 育成就労制度のご相談</li>
                    <li>・ 特定技能の受入相談</li>
                    <li>・ 資料請求・無料説明</li>
                    <li>・ セミナーへのお申込み</li>
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { AboutPage, CasesPage, NewsPage, ContactPage });
