/* Detail & legal pages: お知らせ詳細, 活躍事例詳細, プライバシーポリシー, 各種規定 */

function NewsDetailPage() {
  /* sample: pick a featured news item; pass via hash like #news-detail=0 if needed */
  const idxMatch = window.location.hash.match(/news-detail=(\d+)/);
  const idx = idxMatch ? parseInt(idxMatch[1], 10) : 0;
  const item = NEWS[idx] || NEWS[0];

  /* Related: 3 most recent excl. current */
  const related = NEWS.filter((_, i) => i !== idx).slice(0, 3);

  return (
    <main>
      <section style={{paddingTop:72, paddingBottom:24, background:"var(--bg-soft)"}}>
        <div className="container">
          <div className="crumbs" style={{color:"var(--ink-soft)", marginBottom:0}}>
            <a onClick={() => navigate("home")} style={{cursor:"pointer"}}>HOME</a>
            <span>/</span>
            <a onClick={() => navigate("news")} style={{cursor:"pointer"}}>NEWS</a>
            <span>/</span>
            <span style={{color:"var(--primary)"}}>記事詳細</span>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container" style={{maxWidth:880}}>
          <FadeUp>
            <div style={{display:"flex", alignItems:"center", gap:16, marginBottom:24}}>
              <div className="news-date">{item.date}</div>
              <div className={`news-tag ${item.catClass}`}>{item.cat}</div>
            </div>
            <h1 className="serif" style={{fontSize:"clamp(28px, 3.6vw, 40px)", lineHeight:1.6, letterSpacing:"0.06em", marginBottom:32, paddingBottom:32, borderBottom:"1px solid var(--line)"}}>
              {item.title}
            </h1>
          </FadeUp>

          <FadeUp delay={80}>
            <div style={{aspectRatio:"16/9", backgroundSize:"cover", backgroundPosition:"center", backgroundImage:`url(${PHOTOS.classroom})`, marginBottom:48}}></div>
          </FadeUp>

          <FadeUp delay={120} className="prose">
            <p>
              いつも当組合の活動にご理解・ご協力を賜り、誠にありがとうございます。本日は、2027年4月施行を予定されております「育成就労制度」に関する政省令・告示の最新動向について、組合員企業の皆様にお知らせいたします。
            </p>
            <h2>主な改正のポイント</h2>
            <p>
              出入国在留管理庁および厚生労働省より、本制度の運用詳細に関する政省令案が公表され、現在パブリックコメント期間中となっております。当組合では、内容を精査のうえ、組合員企業の皆様への影響を整理しております。
            </p>
            <ul>
              <li>監理支援機関の許可要件が、現行の監理団体より一段と厳格化される方向</li>
              <li>受入企業（実習実施者）にも、新たに「育成就労計画」の認定取得が求められる見込み</li>
              <li>本人意思による転籍について、業種ごとに「就労期間1〜2年経過後」を基本としつつ、地域ごとの調整余地を残す案</li>
              <li>日本語要件は、入国時 N5相当・3年経過時 N4取得を「努力義務」から「目標」として明文化</li>
            </ul>
            <h2>当組合の対応方針</h2>
            <p>
              当組合では、新制度施行に先立ち、監理支援機関への移行準備を順次進めております。また、組合員企業の皆様に向けて、6月14日（土）にオンライン説明会を開催する予定です。お申込みについては、別途、組合員専用ページにてご案内いたします。
            </p>
            <h3>お問い合わせ</h3>
            <p>
              本件に関するご質問・ご相談は、組合担当者まで直接ご連絡いただくか、お問い合わせフォームよりご連絡ください。
            </p>
            <div style={{marginTop:32}}>
              <button className="btn btn-ghost" onClick={() => navigate("news")}>
                ← 一覧へ戻る
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Related */}
      <section className="section section-soft tight">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">RELATED</div>
              <h2 className="section-title">関連記事</h2>
            </div>
          </FadeUp>
          <div className="news-list">
            {related.map((n, i) => (
              <FadeUp key={i} className="news-row" delay={i * 60} onClick={() => { window.location.hash = `news-detail=${NEWS.indexOf(n)}`; window.scrollTo({top:0, behavior:"instant"}); }}>
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

function CaseDetailPage() {
  const idxMatch = window.location.hash.match(/case-detail=(\d+)/);
  const idx = idxMatch ? parseInt(idxMatch[1], 10) : 0;
  const item = CASES[idx] || CASES[0];

  const related = CASES.filter((_, i) => i !== idx).slice(0, 3);

  return (
    <main>
      <section className="page-hero" style={{height:"60vh"}}>
        <div className="page-hero-photo" style={{backgroundImage:`url(${item.photo})`}}></div>
        <div className="page-hero-inner">
          <div className="crumbs">
            <a onClick={() => navigate("home")} style={{cursor:"pointer"}}>HOME</a>
            <span>/</span>
            <a onClick={() => navigate("cases")} style={{cursor:"pointer"}}>CASES</a>
            <span>/</span>
            <span style={{color:"#fff"}}>事例詳細</span>
          </div>
          <div className="kicker">— {item.country} ／ {item.industry}</div>
          <h1 className="serif">{item.title}</h1>
          <p className="lead">{item.company}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="case-detail-grid">
            <FadeUp>
              <div className="section-num">PROFILE</div>
              <h2 className="section-title" style={{fontSize:"clamp(22px, 2.8vw, 30px)", marginTop:16, marginBottom:32, lineHeight:1.6}}>
                受入企業様 概要
              </h2>
              <table className="info-table">
                <tbody>
                  <tr><th style={{width:120, fontSize:12}}>企業名</th><td style={{fontSize:13.5}}>{item.company}</td></tr>
                  <tr><th style={{width:120, fontSize:12}}>業種</th><td style={{fontSize:13.5}}>{item.industry}</td></tr>
                  <tr><th style={{width:120, fontSize:12}}>所在地</th><td style={{fontSize:13.5}}>関西圏</td></tr>
                  <tr><th style={{width:120, fontSize:12}}>受入人数</th><td style={{fontSize:13.5}}>累計 12名</td></tr>
                  <tr><th style={{width:120, fontSize:12}}>受入開始</th><td style={{fontSize:13.5}}>2019年〜</td></tr>
                </tbody>
              </table>
            </FadeUp>
            <FadeUp delay={100} className="prose">
              <h2>受入の背景</h2>
              <p>
                慢性的な人手不足の中で、若手の確保が経営上の最重要課題となっていました。日本人の採用が難しい状況が続く中、当組合より外国人材の受入をご提案させていただきました。
              </p>
              <h2>当組合のご支援内容</h2>
              <ul>
                <li>送出機関3社からの候補者選定および現地面接の運営</li>
                <li>グループ内日本語学校による入国後2ヶ月講習</li>
                <li>住居・口座開設・行政手続の同行支援</li>
                <li>月1回の定期面談および現場巡回</li>
                <li>3年経過後、特定技能1号への移行サポート</li>
              </ul>
              <h2>導入後の変化</h2>
              <p>
                受入当初は言葉の壁による戸惑いもありましたが、グループ日本語学校での継続的なフォローを通じて、半年程度で現場でのコミュニケーションが安定しました。3年目には作業班長を任せられる人材が育ち、現在では新人指導や安全管理の一翼も担っています。
              </p>
              <h3>受入企業様より</h3>
              <div style={{padding:"24px 28px", background:"var(--bg-soft)", borderLeft:`3px solid var(--accent)`, fontSize:14.5, lineHeight:2, color:"var(--ink)", margin:"24px 0"}}>
                「最初は不安もありましたが、組合さんが入国前から定着までずっと同じ顔ぶれで見てくれる安心感が大きい。日本語学校と支援機関が同じグループなので、相談窓口が一本化されていて、忙しい現場には本当に助かります。」
              </div>
              <h3>本人より</h3>
              <div style={{padding:"24px 28px", background:"var(--bg-soft)", borderLeft:`3px solid var(--primary)`, fontSize:14.5, lineHeight:2, color:"var(--ink)", margin:"24px 0"}}>
                「日本に来てすぐの2ヶ月、学校で日本語と仕事のルールを教えてもらえたのが大きかった。現場でも組合の人が定期的に話を聞きに来てくれるので、何かあっても安心して相談できます。これからも長く日本で頑張りたいです。」
              </div>
              <div style={{marginTop:32}}>
                <button className="btn btn-ghost" onClick={() => navigate("cases")}>
                  ← 事例一覧へ戻る
                </button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section section-soft tight">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">RELATED</div>
              <h2 className="section-title">他の事例</h2>
            </div>
          </FadeUp>
          <div className="case-grid">
            {related.map((c, i) => (
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

      <CTABand/>
    </main>
  );
}

function PrivacyPage() {
  return (
    <main>
      <PageHero
        kicker="PRIVACY POLICY"
        title="プライバシーポリシー"
        lead="亜細亜交流事業協同組合（以下「当組合」）は、個人情報の保護に関する法律および関係法令を遵守し、お客様の個人情報を適切に取り扱います。"
        photo={PHOTOS.aboutHero}
        crumbs="プライバシーポリシー"
      />

      <section className="section">
        <div className="container" style={{maxWidth:880}}>
          <FadeUp className="prose">
            <h2>第1条　個人情報の定義</h2>
            <p>本ポリシーにおいて「個人情報」とは、個人情報の保護に関する法律（以下「個人情報保護法」）に定める「個人情報」をいい、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できるものを指します。</p>

            <h2>第2条　個人情報の収集方法</h2>
            <p>当組合は、お問い合わせフォーム、お電話、対面でのご相談、各種お申込み、資料請求等を通じて、お客様の個人情報を収集する場合があります。</p>

            <h2>第3条　個人情報の利用目的</h2>
            <p>当組合は、収集した個人情報を以下の目的の範囲内で利用いたします。</p>
            <ul>
              <li>お問い合わせ・ご相談への対応、資料送付、サービスのご提供</li>
              <li>育成就労制度・特定技能制度に関する情報のご提供</li>
              <li>セミナー・イベント等のご案内</li>
              <li>当組合の事業運営および各種統計データの作成（個人を特定しない形）</li>
              <li>法令に基づく行政機関への報告</li>
            </ul>

            <h2>第4条　個人情報の第三者提供</h2>
            <p>当組合は、以下の場合を除き、お客様の同意を得ることなく個人情報を第三者に提供することはありません。</p>
            <ul>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>

            <h2>第5条　個人情報の安全管理</h2>
            <p>当組合は、収集した個人情報の漏洩・滅失・毀損の防止、その他の安全管理のために必要かつ適切な措置を講じます。</p>

            <h2>第6条　個人情報の開示・訂正・削除</h2>
            <p>お客様ご自身の個人情報について、開示・訂正・削除をご希望の場合は、下記お問い合わせ窓口までご連絡ください。本人確認のうえ、合理的な範囲で速やかに対応いたします。</p>

            <h2>第7条　お問い合わせ窓口</h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、下記までお願いいたします。<br/><br/>
              亜細亜交流事業協同組合　個人情報保護担当<br/>
              〒564-XXXX 大阪府吹田市江坂町X-X-X 江坂センタービル X階<br/>
              TEL：06-6388-XXXX ／ MAIL：info@asiakumiai.com
            </p>

            <h2>第8条　本ポリシーの改定</h2>
            <p>当組合は、必要に応じて本ポリシーの内容を改定することがあります。改定後の内容は、本サイトに掲載した時点から効力を生じるものとします。</p>

            <div style={{textAlign:"right", marginTop:48, color:"var(--ink-mute)", fontSize:12, letterSpacing:"0.1em"}}>
              制定：2008年4月1日<br/>
              最終改定：2026年4月1日
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand/>
    </main>
  );
}

function RegulationsPage() {
  const docs = [
    { title: "組合定款", body: "当組合の組織・目的・運営に関する基本規則を定めたもの。" },
    { title: "監理事業に関する規定", body: "外国人技能実習生・育成就労実習生の監理業務に関する内部規定。" },
    { title: "個人情報保護規程", body: "個人情報の取得・利用・管理に関する社内規程。" },
    { title: "ハラスメント防止規程", body: "受入企業・実習生・組合職員間のハラスメント防止に関する規程。" },
    { title: "母国語相談対応規程", body: "実習生からの母国語による相談に関する対応手順と体制。" },
    { title: "監査・内部統制規程", body: "監理団体としての監査体制および内部統制に関する規程。" },
  ];
  return (
    <main>
      <PageHero
        kicker="REGULATIONS & DISCLOSURE"
        title="各種規定"
        lead="監理団体として、外国人技能実習機構および出入国在留管理庁が定める情報公開事項に基づき、各種規定・関連情報を公開しております。"
        photo={PHOTOS.aboutHero}
        crumbs="各種規定"
      />

      <section className="section">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">DOCUMENTS</div>
              <h2 className="section-title">公開文書一覧</h2>
            </div>
          </FadeUp>
          <FadeUp>
            <div style={{borderTop:"1px solid var(--line)"}}>
              {docs.map((d, i) => (
                <div key={i} className="doc-row"
                onMouseEnter={e => e.currentTarget.style.paddingLeft = "12px"}
                onMouseLeave={e => e.currentTarget.style.paddingLeft = "0"}
                >
                  <div style={{fontFamily:"var(--font-display-en)", fontSize:22, color:"var(--accent)", letterSpacing:"0.05em"}}>
                    {String(i+1).padStart(2,"0")}
                  </div>
                  <div>
                    <div className="serif" style={{fontSize:17, letterSpacing:"0.08em", marginBottom:6, color:"var(--ink)"}}>{d.title}</div>
                    <div style={{fontSize:13, color:"var(--ink-soft)", lineHeight:1.8}}>{d.body}</div>
                  </div>
                  <div style={{
                    padding:"10px 20px", border:"1px solid var(--primary)", color:"var(--primary)",
                    fontSize:11, letterSpacing:"0.2em",
                  }}>
                    PDF ダウンロード
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={120} style={{marginTop:64, padding:"40px 48px", background:"var(--bg-soft)"}}>
            <h3 className="serif" style={{fontSize:18, letterSpacing:"0.08em", color:"var(--primary)", marginBottom:16}}>
              情報公開について
            </h3>
            <p style={{fontSize:13.5, lineHeight:2, color:"var(--ink-soft)", margin:0}}>
              本ページに掲載していない事項につきましては、外国人技能実習法施行規則第53条に基づき、組合員企業様および関係行政機関より閲覧のご請求をいただいた際にご対応いたします。お問い合わせは「組合事務局」までお願いいたします。
            </p>
          </FadeUp>
        </div>
      </section>

      <CTABand/>
    </main>
  );
}

Object.assign(window, { NewsDetailPage, CaseDetailPage, PrivacyPage, RegulationsPage });
