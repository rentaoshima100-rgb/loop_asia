/* Detail & legal pages: お知らせ詳細, 活躍事例詳細, プライバシーポリシー, 各種規定 */

function NewsDetailPage() {
  /* sample: pick a featured news item; pass via hash like #news-detail=0 if needed */
  const idxMatch = window.location.hash.match(/news-detail=(\d+)/);
  const idx = idxMatch ? parseInt(idxMatch[1], 10) : 0;
  const news = useNews();
  const item = news[idx] || news[0];

  /* Related: 3 most recent excl. current */
  const related = news.filter((_, i) => i !== idx).slice(0, 3);

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

          {/* Article body: rendered from the AI-published post (Supabase), or the
              placeholder while no real article exists yet. */}
          <FadeUp delay={120} className="prose">
            {item.body
              ? <div dangerouslySetInnerHTML={{ __html: renderNewsHTML(item.body) }} />
              : <div className="data-todo">{`{{TODO: お知らせ本文（実記事の確定後に掲載します）}}`}</div>}
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

  // TODO(client): 実事例が未確定のため、事例詳細は準備中です。CASES の確定後に表示されます。
  if (!item) {
    return (
      <main>
        <section className="section" style={{paddingTop:140}}>
          <div className="container" style={{textAlign:"center"}}>
            <div className="data-todo">{`{{TODO: 受入企業の実事例は確定情報の確認後に掲載します}}`}</div>
            <div style={{marginTop:32}}>
              <button className="btn btn-ghost" onClick={() => navigate("cases")}>← 事例一覧へ戻る</button>
            </div>
          </div>
        </section>
      </main>
    );
  }

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
                  <tr><th style={{width:120, fontSize:12}}>所在地</th><td style={{fontSize:13.5}}>{`{{TODO}}`}</td></tr>
                  <tr><th style={{width:120, fontSize:12}}>受入人数</th><td style={{fontSize:13.5}}>{`{{TODO}}`}</td></tr>
                  <tr><th style={{width:120, fontSize:12}}>受入開始</th><td style={{fontSize:13.5}}>{`{{TODO}}`}</td></tr>
                </tbody>
              </table>
            </FadeUp>
            {/* TODO(client): 事例本文・受入企業様/本人のコメントは、実事例の確定後に掲載します。 */}
            <FadeUp delay={100} className="prose">
              <div className="data-todo">
                {`{{TODO: 受入の背景・ご支援内容・導入後の変化・コメントは確定情報の確認後に掲載します}}`}
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
            <p>亜細亜交流事業協同組合（以下「当組合」といいます。）は、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の関係法令およびガイドラインを遵守し、お客様および当組合が取り扱う個人情報を適切に保護・管理いたします。</p>

            <h2>第1条（個人情報の定義）</h2>
            <p>本ポリシーにおいて「個人情報」とは、個人情報保護法に定める「個人情報」をいい、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。）、および個人識別符号が含まれるものをいいます。</p>

            <h2>第2条（事業者の名称等）</h2>
            <ul>
              <li>名称：亜細亜交流事業協同組合</li>
              <li>所在地：〒564-0063 大阪府吹田市江坂町1丁目6-3 ループ江坂</li>
              {/* 要確認: 代表理事の氏名を組合に確認のうえ記載。 */}
              <li>代表者：代表理事　【氏名を記載】</li>
            </ul>

            <h2>第3条（個人情報の取得方法）</h2>
            <p>当組合は、お問い合わせフォーム、お電話、対面でのご相談、各種お申込み、資料請求等を通じて、適正な手段により個人情報を取得します。なお、要配慮個人情報を取得する場合には、法令に基づく場合を除き、あらかじめご本人の同意を得たうえで取得します。</p>

            <h2>第4条（個人情報の利用目的）</h2>
            <p>当組合は、取得した個人情報を以下の目的の範囲内で利用します。</p>
            <ul>
              <li>お問い合わせ・ご相談への対応、資料送付およびサービスのご提供</li>
              <li>育成就労制度・特定技能制度に関する情報のご提供</li>
              <li>セミナー・イベント等のご案内</li>
              <li>当組合の事業運営および各種統計データの作成（個人を特定しない形に加工して利用します。）</li>
              <li>法令に基づく行政機関等への報告および対応</li>
              <li>上記利用目的に付随する業務の遂行</li>
            </ul>
            <p>利用目的を変更する場合は、変更前の利用目的と関連性を有すると合理的に認められる範囲内で行い、変更後の利用目的を本サイトへの掲載その他の方法により通知または公表します。</p>

            <h2>第5条（個人情報の第三者提供）</h2>
            <p>当組合は、以下のいずれかに該当する場合を除き、あらかじめご本人の同意を得ることなく個人データを第三者に提供することはありません。</p>
            <ul>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
            </ul>

            <h2>第6条（個人情報の取扱いの委託）</h2>
            <p>当組合は、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を外部に委託する場合があります。この場合、当組合は、委託先について必要かつ適切な監督を行います。</p>

            <h2>第7条（外国にある第三者への提供・外的環境の把握）</h2>
            <p>当組合は、サービスの提供にあたり、外国に所在するクラウドサービス等を利用して個人データを保管する場合があります。当該サービスを通じて個人データが保存されるサーバーの所在国は【アメリカ合衆国 ／ ※実際の利用環境に合わせて記載（特定できない場合はその旨・理由・候補国を記載）】であり、当組合は、当該国における個人情報の保護に関する制度等を把握したうえで、必要かつ適切な安全管理措置を講じます。</p>
            <p>外国にある第三者に個人データの取扱いを委ねる場合であって、ご本人の同意取得が必要となるときは、あらかじめ当該外国の名称、適切かつ合理的な方法により得られた当該外国の個人情報保護制度に関する情報等を提供したうえで、同意を取得します。</p>

            <h2>第8条（安全管理措置）</h2>
            <p>当組合は、取り扱う個人データの漏えい、滅失または毀損の防止その他の安全管理のために、以下を含む必要かつ適切な措置を講じます。なお、各措置の具体的な内容については、ご本人からのお求めに応じて遅滞なくご説明します（ただし、これを開示することにより当該個人データの安全管理に支障を及ぼすおそれがある事項を除きます。）。</p>
            <ul>
              <li>基本方針の策定</li>
              <li>個人データの取扱いに係る規律の整備</li>
              <li>組織的安全管理措置（取扱責任者の設置、取扱状況の点検等）</li>
              <li>人的安全管理措置（従業者に対する教育・監督等）</li>
              <li>物理的安全管理措置（取扱区域の管理、機器・電子媒体等の管理等）</li>
              <li>技術的安全管理措置（アクセス制御、不正アクセス防止策等）</li>
              <li>外的環境の把握（外国において個人データを取り扱う場合の、当該国の制度等の把握）</li>
            </ul>

            <h2>第9条（漏えい等が発生した場合の対応）</h2>
            <p>当組合は、個人データの漏えい、滅失、毀損その他の個人データの安全の確保に係る事態が生じた場合には、法令に従い、個人情報保護委員会への報告およびご本人への通知を行うなど、適切に対応します。</p>

            <h2>第10条（クッキー等の利用）</h2>
            <p>本サイトでは、サービスの利便性向上および利用状況の把握のために、クッキー等を利用する場合があります。お客様は、ご利用のブラウザの設定によりクッキーの受け取りを拒否することができますが、その場合、本サイトの一部の機能をご利用いただけないことがあります。</p>
            {/* 要確認: Google アナリティクス等のアクセス解析を利用する場合は、収集情報・利用目的・オプトアウト方法を追記。 */}
            <p>【アクセス解析ツール（例：Google アナリティクス）を利用する場合は、その旨、収集される情報、利用目的およびオプトアウトの方法を記載】</p>

            <h2>第11条（保有個人データの開示等の請求）</h2>
            <p>お客様は、当組合に対し、ご自身の保有個人データについて、利用目的の通知、開示（第三者提供記録の開示を含みます。）、内容の訂正・追加または削除、利用の停止・消去および第三者への提供の停止を請求することができます。当組合は、ご本人であることを確認のうえ、法令に従い、合理的な範囲で速やかに対応いたします。</p>
            <p>請求は、第12条のお問い合わせ窓口までご連絡ください。【手数料を定める場合は、その旨および金額を記載】</p>

            <h2>第12条（お問い合わせ・苦情の窓口）</h2>
            <p>個人情報の取扱いに関するお問い合わせ、開示等の請求および苦情のお申出は、下記までお願いいたします。</p>
            <p>
              {/* 要確認: kanri@asiakumiai.jp は管理用アドレス。公開窓口がこれでよいか組合に確認。 */}
              亜細亜交流事業協同組合　個人情報保護担当（江坂事務所）<br/>
              〒564-0063 大阪府吹田市江坂町1丁目6-3 ループ江坂<br/>
              TEL：06-6879-1790 ／ MAIL：kanri@asiakumiai.jp
            </p>

            <h2>第13条（本ポリシーの改定）</h2>
            <p>当組合は、法令の改正等に応じて、必要に応じて本ポリシーの内容を改定することがあります。改定後の内容は、本サイトに掲載した時点から効力を生じるものとします。</p>

            <div style={{textAlign:"right", marginTop:48, color:"var(--ink-mute)", fontSize:12, letterSpacing:"0.1em"}}>
              制定日：【YYYY年MM月DD日】<br/>
              最終改定日：【YYYY年MM月DD日】
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand/>
    </main>
  );
}

function RegulationsPage() {
  return (
    <main>
      <PageHero
        kicker="ABOUT OUR LICENSE"
        title="各種規定"
        lead="当組合は、出入国在留管理庁の許可を受けた監理支援機関です。監理に関する各種規定を整備し、適正な事業運営に努めております。"
        photo={PHOTOS.aboutHero}
        crumbs="各種規定"
      />

      <section className="section">
        <div className="container" style={{maxWidth:880}}>
          <FadeUp className="section-head">
            <div>
              <div className="section-num">OUR POSITION</div>
              <h2 className="section-title">監理支援機関として</h2>
            </div>
          </FadeUp>
          <FadeUp className="prose">
            <p>
              亜細亜交流事業協同組合は、育成就労制度における監理支援機関として、関係法令および出入国在留管理庁の定める基準に基づき事業を運営しております。
            </p>
            <table className="info-table" style={{marginTop:24}}>
              <tbody>
                <tr><th style={{width:"40%"}}>許可番号</th><td>届出受理番号 27-特-000055</td></tr>
                <tr><th>対象</th><td>監理支援機関および職業紹介事業</td></tr>
              </tbody>
            </table>

            {/* B-1: 監理団体（→監理支援機関）の「業務の運営に関する規程」は法令によりインターネット公表が義務。
                掲載方法（PDF提供／別サイトリンク）は組合回答待ちのため、受け皿の枠＋アンカーを用意。 */}
            <h2 id="gyomu-kitei" style={{marginTop:48}}>業務の運営に関する規程の公開</h2>
            <p>
              監理団体（現行制度では監理支援機関）の業務の運営に関する規程は、関係法令に基づき、インターネットを通じて公表することとされています。当組合は、法令の定めに従い、本規程を以下のとおり公開いたします。
            </p>
            {/* PDF（組合提供：docs/gyomu-no-unei-kitei.pdf）を掲載。
                ※提供PDFはスキャン画像のため本文テキスト抽出不可。文書種別が「業務の運営に関する規程」で
                  間違いないか組合に確認（要確認）。別文書（利用規約等）の場合は配置先を調整。 */}
            <div style={{marginTop:16, padding:"24px 28px", background:"var(--bg-soft)", border:"1px solid var(--line)"}}>
              <div style={{fontSize:11, letterSpacing:"0.2em", color:"var(--accent)", marginBottom:10}}>業務の運営に関する規程</div>
              <div style={{display:"flex", alignItems:"center", gap:16, flexWrap:"wrap", marginBottom:18}}>
                <span style={{fontSize:14, color:"var(--ink-soft)", lineHeight:1.8}}>
                  本規程を以下のPDFにて公開しています。
                </span>
                <a href="docs/gyomu-no-unei-kitei.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{padding:"12px 22px"}}>
                  PDFを開く <span className="arrow"><Icon name="arrow" size={14}/></span>
                </a>
              </div>
              <iframe
                title="業務の運営に関する規程（PDF）"
                src="docs/gyomu-no-unei-kitei.pdf"
                loading="lazy"
                style={{width:"100%", height:"70vh", minHeight:480, border:"1px solid var(--line)", background:"#fff"}}
              ></iframe>
            </div>
            {/* 要確認: 2027年4月以降の監理支援機関制度下における公表義務の範囲・様式は別途確認。 */}

            {/* B-2: 許可番号＋日付の公開枠（番号と日付のみ）。許可が下り次第、組合から共有。 */}
            <h2 id="kyoka-sho" style={{marginTop:48}}>許可証（番号・日付）</h2>
            <p>
              {/* 要確認: 登録支援機関の帰属法人は資料間で矛盾のため法人名を断定しない（凍結） */}
              監理支援機関 許可証および登録支援機関 許可証について、許可番号と許可日を以下に掲載いたします。
            </p>
            <table className="info-table" style={{marginTop:16}}>
              <tbody>
                <tr><th style={{width:"40%"}}>監理支援機関 許可番号／許可日</th><td>{`{{TODO: 許可が下り次第、組合から共有}}`}</td></tr>
                <tr><th>登録支援機関 許可番号／許可日<br/><span style={{color:"var(--ink-mute)", fontSize:12}}>（グループ内登録支援機関｜帰属法人は要確認）</span></th><td>{`{{TODO: 許可が下り次第、組合から共有}}`}</td></tr>
              </tbody>
            </table>

            <h2 style={{marginTop:48}}>その他の書類について</h2>
            <p>
              監理費用一覧・役職員名簿・収支報告書・監理事業計画書・職業紹介事業許可証などの書類は、原則として非公開としております。閲覧をご希望の場合は、関係法令の定めに従い、組合員企業様および関係行政機関からのご請求に応じて個別に対応いたします。
            </p>
            <p>
              ご不明な点は、お問い合わせフォームまたはお電話にて、組合事務局までお問い合わせください。
            </p>
          </FadeUp>
        </div>
      </section>

      <CTABand/>
    </main>
  );
}

Object.assign(window, { NewsDetailPage, CaseDetailPage, PrivacyPage, RegulationsPage });
