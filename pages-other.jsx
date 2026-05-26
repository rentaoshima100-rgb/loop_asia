/* About / Cases / News / Contact pages */

function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="ABOUT"
        title="組合案内"
        lead="中小事業者が結束し、共同の力で経営の安定と経済的地位の向上を目指す。私たちの想い、組織、グループ法人について、ご紹介いたします。"
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
          <div className="message-section message-section-right">
            <FadeUp delay={120} className="message-body">
              <h2>共同の力で、経営の安定と<br/>経済的地位の向上を。</h2>
              <p>
                我が国の経済はバブル経済崩壊以降、かつてない不況に見舞われ、景気も上昇の兆しが見えません。資本力・営業力の弱い我々中小企業事業者にとって、大手からの受注額の減少・工事単価の引き下げなど厳しい状況が続いており、個々の経営努力だけでは事業継続が限界となっています。
              </p>
              <p>
                中小事業者が結束し、各事業者それぞれの得意とする分野に最大限の能力を発揮することで、共同の力で受注の拡大・工事原価の引き下げを目指し、資材の共同購買によるコスト削減などを行うことで各組合員の経営を安定・経済的地位の向上を目的として当組合を設立いたしました。
              </p>
              <div className="message-sign">
                <div className="pos">代表理事</div>
                <div className="nm">貝塚 亜起良</div>
              </div>
            </FadeUp>
            {/* TODO(client): 代表写真は未支給のためプレースホルダです。画像が用意でき次第、
                PHOTOS.portrait に設定し、下記を <div className="message-portrait" style={{backgroundImage:`url(${PHOTOS.portrait})`}}></div> へ差し替えてください。 */}
            <FadeUp delay={60} className="message-portrait-ph">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 21v-1a7 7 0 0 1 16 0v1"/>
              </svg>
              <div className="mp-label">代表写真</div>
              <div className="mp-todo">{`{{TODO: 代表の写真}}`}</div>
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
            {/* TODO(client): 設立年月日・出資金額・組合員企業数は未確定です。確定後に反映してください。 */}
            <table className="info-table">
              <tbody>
                <tr><th>名称</th><td>亜細亜交流事業協同組合（Asia Interchange Cooperative Business Union）</td></tr>
                <tr><th>代表者</th><td>代表理事　貝塚 亜起良</td></tr>
                <tr><th>本部</th><td>〒532-0002 大阪府大阪市淀川区東三国2丁目32-17 ループ大阪<br/>TEL 06-6394-7770 ／ FAX 06-6394-7772</td></tr>
                <tr><th>江坂事務所</th><td>〒564-0063 大阪府吹田市江坂町1丁目6-3 ループ江坂<br/>TEL 06-6879-1790 ／ FAX 06-6879-1791<br/><span style={{color:"var(--ink-mute)", fontSize:12}}>※ご来所は江坂事務所までお願いいたします</span></td></tr>
                <tr><th>営業時間</th><td>9:00〜18:00（定休日：土曜・日曜・祝日）</td></tr>
                <tr><th>設立</th><td>{`{{TODO: 設立年月日}}`}</td></tr>
                <tr><th>許可番号</th><td>届出受理番号 27-特-000055（監理支援機関および職業紹介事業）</td></tr>
                <tr><th>組合員企業数</th><td>{`{{TODO: 組合員企業数}}`}</td></tr>
                <tr><th>事業内容</th><td>育成就労制度における監理支援事業／特定技能の登録支援事業／日本語教育／組合員企業の共同事業（資材共同購買等）／ETCコーポレートカード／海外ビジネス支援</td></tr>
                <tr><th>対応送出国</th><td>ベトナム／カンボジア／タイ／インドネシア／中国／モンゴル／バングラデシュ／スリランカ／ラオス（9カ国）</td></tr>
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
          {/* TODO(client): 設立年・沿革（各年の出来事）は未確定です。確定後に { year, label, body } の配列で反映してください。 */}
          <FadeUp>
            <div className="data-todo">
              {`{{TODO: 沿革（設立年・主な出来事）は確定情報の確認後に掲載します}}`}
            </div>
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
              { num: "01", title: "育成就労 監理支援事業", body: "監理支援機関として、育成就労外国人の受入計画策定・在留資格申請・入国後監理・定期面談・行政対応までを一貫して担います。" },
              { num: "02", title: "特定技能 登録支援事業", body: "グループ内登録支援機関（ループインターナショナル日本語学校）にて、特定技能外国人の法定10項目の支援業務を実施いたします。" },
              { num: "03", title: "日本語教育 提供事業", body: "グループ内日本語学校（ループインターナショナル日本語学校）にて、入国後講習および継続的な日本語教育を提供しています。" },
              { num: "04", title: "海外人材紹介・送出提携事業", body: "ベトナム・カンボジア・タイ・インドネシア・中国・モンゴル・バングラデシュ・スリランカ・ラオスの9カ国の送出機関とのネットワークを構築し、現地で候補者の選定・面接を実施します。" },
              { num: "05", title: "資材共同購買・ETCコーポレートカード", body: "資材の共同購買によるコスト削減や、ETCコーポレートカードの取り扱いなど、組合員企業様向けの相互扶助事業を運営しています。" },
              { num: "06", title: "海外ビジネス支援", body: "組合員企業様の海外取引・海外展開に関する各種支援を行っています。" },
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
          {/* 住所と地図を同じカードに対にして、どの住所がどの地図か一目で分かるように */}
          <FadeUp className="access-pair">
            <div className="access-loc">
              <div className="access-loc-head">
                <span className="loc-badge">本部</span>
                <span className="loc-name">ループ大阪</span>
              </div>
              <div className="access-loc-addr">
                〒532-0002 大阪府大阪市淀川区東三国2丁目32-17 ループ大阪
                <div className="tel">TEL 06-6394-7770 ／ FAX 06-6394-7772</div>
              </div>
              <iframe
                className="access-iframe"
                title="本部 ループ大阪の地図"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=大阪府大阪市淀川区東三国2丁目32-17&z=16&output=embed"
              ></iframe>
            </div>
            <div className="access-loc">
              <div className="access-loc-head">
                <span className="loc-badge visit">江坂事務所</span>
                <span className="loc-name">ループ江坂</span>
                <span className="loc-visit">※ご来所はこちら</span>
              </div>
              <div className="access-loc-addr">
                〒564-0063 大阪府吹田市江坂町1丁目6-3 ループ江坂
                <div className="tel">TEL 06-6879-1790 ／ FAX 06-6879-1791</div>
              </div>
              <iframe
                className="access-iframe"
                title="江坂事務所 ループ江坂の地図"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=大阪府吹田市江坂町1丁目6-3&z=16&output=embed"
              ></iframe>
            </div>
          </FadeUp>
          <FadeUp className="access-hours">
            ※ご来所は<strong>江坂事務所</strong>までお願いいたします。　営業時間：9:00 – 18:00（定休日：土曜・日曜・祝日）
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
  const cats = ["すべて","建設","製造","農業","介護","宿泊","飲食料品製造業","外食業"];
  const countries = ["ALL","VIETNAM","CAMBODIA","THAILAND","INDONESIA","CHINA","MONGOLIA","BANGLADESH","SRI LANKA","LAOS"];
  let filtered = filter === "すべて" ? CASES : CASES.filter(c => c.industry === filter);
  if (country !== "ALL") filtered = filtered.filter(c => c.country === country);

  // TODO(client): 外国人材の実際の声（6〜10名）は未確定のため、掲載していません。
  // 確定後、{ name, info, avatar, body } 形式で追加してください。国は対応送出国9カ国のみ。
  const VOICES = [];

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
          {/* TODO(client): 受入実績の累計人数・組合員企業数・受入対応業種数は未確定のため非表示。 */}
          <FadeUp className="stat-row" style={{marginTop:0, marginBottom:64}}>
            <div className="stat">
              <div className="stat-num">9<span className="unit">カ国</span></div>
              <div className="stat-label">対応送出国</div>
            </div>
            <div className="stat">
              <div className="stat-num">16<span className="unit">分野</span></div>
              <div className="stat-label">特定産業分野</div>
            </div>
            <div className="stat">
              <div className="stat-num todo">{`{{TODO}}`}</div>
              <div className="stat-label">累計 受入実績</div>
            </div>
            <div className="stat">
              <div className="stat-num todo">{`{{TODO}}`}</div>
              <div className="stat-label">組合員企業数</div>
            </div>
          </FadeUp>

          {CASES.length === 0 ? (
            /* TODO(client): 実事例の確定後、フィルター（cats / countries）と CASES を有効化してください。 */
            <FadeUp>
              <div className="data-todo">
                {`{{TODO: 受入企業の実事例（3〜5件）は確定情報の確認後に掲載します}}`}
              </div>
            </FadeUp>
          ) : (
            <>
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
            </>
          )}
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
          {VOICES.length === 0 ? (
            <FadeUp>
              <div className="data-todo">
                {`{{TODO: 外国人材の声（6〜10名）は確定情報の確認後に掲載します}}`}
              </div>
            </FadeUp>
          ) : (
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
          )}
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
                    <label>業種 <span className="opt">任意</span></label>
                    <select defaultValue="">
                      <option value="">選択してください</option>
                      <option>建設</option><option>製造</option><option>農業</option>
                      <option>介護</option><option>宿泊</option><option>飲食料品製造業</option>
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
                <div className="ph">06-6394-7770</div>
                <div className="hours">本部／受付時間 9:00 – 18:00（土日祝休）</div>

                <h3 style={{marginTop:8}}>本部</h3>
                <div style={{fontSize:13.5, lineHeight:2, color:"var(--ink-soft)"}}>
                  〒532-0002 大阪府大阪市淀川区東三国2丁目32-17 ループ大阪<br/>
                  TEL 06-6394-7770 ／ FAX 06-6394-7772
                </div>

                <h3 style={{marginTop:8}}>江坂事務所</h3>
                <div style={{fontSize:13.5, lineHeight:2, color:"var(--ink-soft)"}}>
                  〒564-0063 大阪府吹田市江坂町1丁目6-3 ループ江坂<br/>
                  TEL 06-6879-1790 ／ FAX 06-6879-1791<br/>
                  <span style={{color:"var(--ink-mute)"}}>※ご来所は江坂事務所までお願いいたします</span>
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
