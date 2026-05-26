/* Systems pages: 育成就労 and 特定技能 */

function IkuseiPage() {
  return (
    <main>
      <PageHero
        kicker="TRAINING & EMPLOYMENT PROGRAM"
        title="育成就労制度"
        lead="2027年4月から開始される新しい外国人材受入制度。「人材育成」と「人材確保」の2つを目的に再設計された制度です。"
        photo={PHOTOS.ikuseiHero}
        crumbs="育成就労制度"
      />

      <section className="section">
        <div className="container">
          <div className="data-grid">
            <FadeUp>
              <div className="section-num">OVERVIEW</div>
              <h2 className="section-title" style={{marginTop:16, fontSize:"clamp(28px, 3.6vw, 44px)"}}>
                「育成」と「就労」を、<br/>同じ場所で両立する制度。
              </h2>
            </FadeUp>
            <FadeUp delay={100} className="prose">
              <p>
                育成就労制度は、2027年4月の施行に向けて準備が進められている、新しい外国人材受入制度です。本制度では、「人材育成」と「人材確保」の2軸を目的に掲げ、原則3年間の在留期間の中で、特定技能1号水準の技能習得を目指します。
              </p>
              <p>
                当組合は、監理支援機関として、受入企業様および外国人材ご本人の双方を、入国前のマッチングから3年後のキャリア選択まで、ワンストップでご支援いたします。
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3 features diagram */}
      <section className="section tight">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">FEATURES</div>
              <h2 className="section-title">本制度の 3 つの特徴</h2>
            </div>
          </FadeUp>
          <FadeUp>
            <FeaturesDiagram />
          </FadeUp>
        </div>
      </section>

      {/* 制度の要点 */}
      <section className="section section-soft">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">KEY POINTS</div>
              <h2 className="section-title">制度の要点</h2>
            </div>
          </FadeUp>
          <FadeUp>
            <table className="info-table">
              <tbody>
                <tr><th style={{width:"28%"}}>目的</th><td>「人材確保」と「人材育成」の2軸</td></tr>
                <tr><th>在留期間</th><td>原則3年。修了後、特定技能1号へ移行すれば通算最大8年の就労が可能</td></tr>
                <tr><th>入国時の日本語要件</th><td>A1相当（日本語能力試験 N5レベル）を新たに要件化</td></tr>
                <tr><th>転籍</th><td>一定条件下で、同一業種内・本人意向による転籍が可能</td></tr>
                <tr><th>監理体制</th><td>監理支援機関（要件・監督が強化）</td></tr>
              </tbody>
            </table>
          </FadeUp>
        </div>
      </section>

      {/* 7-step flow */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">PROCESS</div>
              <h2 className="section-title">受入から帰国までの 7 ステップ</h2>
            </div>
          </FadeUp>
          <FadeUp>
            <ProcessDiagram />
          </FadeUp>
        </div>
      </section>

      {/* 入国後講習のご案内 */}
      <section className="section section-soft">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">CURRICULUM</div>
              <h2 className="section-title">入国後講習のご案内</h2>
            </div>
          </FadeUp>
          <FadeUp className="data-grid">
            <div>
              <h3 className="serif" style={{fontSize:"clamp(22px, 2.8vw, 30px)", lineHeight:1.7, marginBottom:24, letterSpacing:"0.08em"}}>
                約 1 ヶ月の<br/>体系的な入国後講習
              </h3>
              <p style={{fontSize:16, lineHeight:2.05, color:"var(--ink-soft)", marginBottom:20}}>
                グループ内日本語学校「ループインターナショナル日本語学校」にて、入国直後の約1ヶ月間、外国人材を専属的にお預かりし、日本語・生活・職種別の集中講習を実施いたします。
              </p>
              <p style={{fontSize:16, lineHeight:2.05, color:"var(--ink-soft)", marginBottom:0}}>
                配属前にN5（A1）相当の日本語力と、日本の生活ルール・労働安全の基礎を身につけたうえで、企業様の現場へお引き渡しします。
              </p>
              {/* TODO(client): 学校の所在地・定員・講師数などの詳細は未確定です。 */}
              <div style={{marginTop:32, padding:"24px 28px", background:"#fff", border:"1px solid var(--line)"}}>
                <div style={{fontSize:11, letterSpacing:"0.25em", color:"var(--accent)", marginBottom:8}}>OUR FACILITY</div>
                <div className="serif" style={{fontSize:16, letterSpacing:"0.08em", color:"var(--primary)", marginBottom:6}}>ループインターナショナル日本語学校</div>
                <div style={{fontSize:12.5, color:"var(--ink-soft)", lineHeight:1.9}}>
                  {`{{TODO: 所在地・定員・講師数}}`}
                </div>
              </div>
            </div>
            <div>
              {/* TODO(client): 入国後講習（約1ヶ月）の各回の時間数・詳細カリキュラムは未確定です。下記は項目の見本です。 */}
              {[
                { wk: "1週目", ttl: "オリエンテーション・生活立ち上げ", body: "在留カード手続き、住居案内、銀行口座開設、生活ルール、緊急連絡先の確認。" },
                { wk: "2〜3週目", ttl: "日本語講習（基礎）", body: "基礎会話、N5（A1）相当の文法・語彙。生活シーンでのロールプレイ。" },
                { wk: "4週目", ttl: "業種別語彙・労働安全", body: "受入分野に応じた専門語彙・安全標識、労働基準・相談窓口・コンプライアンスの基礎。" },
              ].map((c, i) => (
                <div key={i} className="curriculum">
                  <div className="wk">{c.wk}</div>
                  <div>
                    <div className="ttl">{c.ttl}</div>
                    <div className="body">{c.body}</div>
                  </div>
                  <div className="hours">{`{{TODO}}`}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Our strength callout */}
      <section className="usp-block">
        <div className="usp-image" style={{backgroundImage:`url(${PHOTOS.classroom})`}}></div>
        <div className="usp-text">
          <FadeUp>
            <div className="section-num">OUR ADVANTAGE</div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2>入国後講習を、<br/>グループ内日本語学校が直接運営。</h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p>
              新制度で重要視される「日本語能力」。当組合では、グループ内日本語学校「ループインターナショナル日本語学校」が入国後講習を直接運営しているため、講習内容と現場のニーズを密に連動させることができます。
            </p>
            <p>
              N4取得を見据えた段階的なカリキュラム、業種別の専門語彙、そして生活適応支援まで、外部委託では実現できない一貫した教育品質をお届けします。
            </p>
            <button className="btn btn-outline" style={{marginTop:24}} onClick={() => navigate("about")}>
              グループ法人について <span className="arrow"><Icon name="arrow" size={14}/></span>
            </button>
          </FadeUp>
        </div>
      </section>

      <CTABand/>
    </main>
  );
}

function TokuteiPage() {
  return (
    <main>
      <PageHero
        kicker="SPECIFIED SKILLED WORKER PROGRAM"
        title="特定技能制度"
        lead="即戦力となる外国人材を受け入れる在留資格。当組合では、グループ内に登録支援機関を保有し、法定10項目の支援を一貫してご提供しています。"
        photo={PHOTOS.tokuteiHero}
        crumbs="特定技能制度"
      />

      <section className="section">
        <div className="container">
          <div className="data-grid">
            <FadeUp>
              <div className="section-num">OVERVIEW</div>
              <h2 className="section-title" style={{marginTop:16, fontSize:"clamp(24px, 3vw, 36px)"}}>
                即戦力人材を、<br/>支援機関ごと、ご一緒に。
              </h2>
            </FadeUp>
            <FadeUp delay={100} className="prose">
              <p>
                特定技能制度は、2019年に新設された在留資格で、深刻な人手不足が認められた特定産業分野で、一定の専門性・技能を持つ外国人材の受入を可能にする制度です。
              </p>
              <p>
                受入企業様には法定10項目の支援を実施する義務がありますが、これを「登録支援機関」に委託することが可能です。当組合のグループ会社「ループインターナショナル日本語学校」が登録支援機関として、すべての支援業務を引き受けます。
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* PATHWAY DIAGRAM — 2 routes to SSW */}
      <section className="section section-soft tight">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">PATTERNS</div>
              <h2 className="section-title">特定技能になるには</h2>
            </div>
          </FadeUp>
          <FadeUp>
            <PathwayDiagram />
          </FadeUp>
        </div>
      </section>

      {/* RELATION DIAGRAM — 登録支援機関の役割 */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">ROLE</div>
              <h2 className="section-title">登録支援機関の役割</h2>
            </div>
          </FadeUp>
          <FadeUp>
            <RelationDiagram />
          </FadeUp>
        </div>
      </section>

      {/* 受入の流れ */}
      <section className="section section-soft">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">PROCESS</div>
              <h2 className="section-title">受入の流れ（直接受入の場合）</h2>
            </div>
          </FadeUp>
          <FadeUp className="hflow">
            {[
              { label: "ご相談・要件整理", body: "業種・人数・時期を伺い、適切な受入計画を策定します。" },
              { label: "候補者選定・面接", body: "現地候補者リストより、書類審査・オンライン面接を実施。", accent: true },
              { label: "雇用契約・在留資格申請", body: "雇用契約締結後、在留資格認定証明書を申請します。" },
              { label: "入国・配属", body: "空港送迎・住居手配・生活オリエンテーションを実施。" },
              { label: "支援・定着フォロー", body: "法定10項目の支援を継続的に実施。定期面談・行政手続きも対応。" },
            ].map((s, i) => (
              <div key={i} className={`hstep ${s.accent ? "accent" : ""}`}>
                <div className="hstep-circle">{String(i+1).padStart(2,"0")}</div>
                <div className="hstep-label">{s.label}</div>
                <div className="hstep-body">{s.body}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* 法定10項目 */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">SUPPORT</div>
              <h2 className="section-title">法定 10 項目の支援内容</h2>
            </div>
          </FadeUp>
          <FadeUp>
            <SupportDiagram />
          </FadeUp>
        </div>
      </section>

      {/* 16 fields */}
      <section className="section section-soft">
        <div className="container">
          <FadeUp className="section-head">
            <div>
              <div className="section-num">FIELDS</div>
              <h2 className="section-title">対応する 16 特定産業分野</h2>
            </div>
          </FadeUp>
          <FadeUp>
            <FieldsDiagram />
          </FadeUp>
        </div>
      </section>

      {/* Link to case studies */}
      <section className="section tight">
        <div className="container">
          <FadeUp className="case-link-block">
            <div>
              <div className="section-num" style={{marginBottom:12}}>CASE STUDIES</div>
              <h3 className="serif" style={{fontSize:"clamp(22px, 2.8vw, 30px)", letterSpacing:"0.08em", lineHeight:1.6, marginBottom:14}}>
                実際の受入企業様の事例を、ご覧いただけます。
              </h3>
              <p style={{fontSize:14, lineHeight:2, color:"var(--ink-soft)", margin:0}}>
                業種別の事例と、現場で活躍する外国人材ご本人の声をご紹介しています。
              </p>
            </div>
            <button className="btn btn-ghost" onClick={() => navigate("cases")}>
              活躍事例を見る <span className="arrow"><Icon name="arrow" size={14}/></span>
            </button>
          </FadeUp>
        </div>
      </section>

      <CTABand/>
    </main>
  );
}

Object.assign(window, { IkuseiPage, TokuteiPage });
