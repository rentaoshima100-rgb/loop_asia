/* Diagrams — illustrative SVG/CSS info-graphics */

function AssuranceBar() {
  return (
    <div className="container">
      <div className="assurance-bar">
        <div className="assurance-item">
          <div className="assurance-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5v14a1 1 0 0 0 1 1h6V6a1 1 0 0 0-1-1H4z"/>
              <path d="M20 5v14a1 1 0 0 1-1 1h-6V6a1 1 0 0 1 1-1h6z"/>
              <path d="M4 5l8 1 8-1"/>
            </svg>
          </div>
          <div>
            <div className="assurance-title">
              グループ内で<strong>日本語学校</strong>を運営
            </div>
          </div>
        </div>
        <div className="assurance-item">
          <div className="assurance-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <div>
            <div className="assurance-title">
              <strong>特定技能</strong>への移行も同じ窓口で
            </div>
          </div>
        </div>
        <div className="assurance-item">
          <div className="assurance-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9"/>
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
            </svg>
          </div>
          <div>
            <div className="assurance-title">
              <strong>9か国から送出し対応</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AssuranceBar });

/* ============================================================
   PATHWAY DIAGRAM — 特定技能になるには（2ルート → 1号 → 2号）
   ============================================================ */
function PathwayDiagram() {
  return (
    <div className="dgm-card dgm-card-pop">
      <div className="dgm-title">特定技能外国人になるための 2 つのルート</div>
      <div className="dgm-sub">TWO PATHS TO BECOME A SPECIFIED SKILLED WORKER</div>

      <div className="pathway">
        <div className="pathway-route">
          <div className="pathway-badge">① 国内ルート</div>
          <h3>育成就労 修了者</h3>
          <div className="sub-cond">（国内からの移行ルート）</div>
          <div className="pathway-req">
            <span className="lbl">REQUIREMENT</span>
            育成就労を <strong>3 年間 良好に修了</strong> していること<br/>
            <span style={{fontSize:11.5, color:"var(--ink-mute)"}}>※ 試験免除で特定技能1号へ移行可能</span><br/>
            <span style={{fontSize:11.5, color:"var(--ink-mute)"}}>※ 旧制度（技能実習）の修了者も、当面の間は経過措置により移行が認められます</span>
          </div>
          <div className="pathway-arrow-down">
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
              <path d="M14 4v22M6 20l8 8 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="pathway-route b">
          <div className="pathway-badge">② 海外ルート</div>
          <h3>海外 直接受入</h3>
          <div className="sub-cond">（送出国からの新規招聘）</div>
          <div className="pathway-req">
            <span className="lbl">REQUIREMENT</span>
            <strong>分野別技能試験</strong> に合格<br/>
            <strong>かつ</strong> 日本語試験（<strong>N4 以上</strong>）に合格<br/>
            <span style={{fontSize:11.5, color:"var(--ink-mute)"}}>※ 当組合が現地で候補者選定・面接を実施</span>
          </div>
          <div className="pathway-arrow-down">
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
              <path d="M14 4v22M6 20l8 8 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="pathway-merge">
          <div>
            <h3>特定技能 1 号</h3>
            <p>在留期間：通算 5 年／登録支援機関（グループ会社）による法定 10 項目の支援</p>
          </div>
          {/* 出入国在留管理庁の英語表記に準拠（特定技能1号＝Specified Skilled Worker (i)） */}
          <div className="badge">Specified Skilled Worker (i)</div>
        </div>

        <div className="pathway-next">
          <span className="arrow-up">→</span>
          要件を満たすことで、<strong>特定技能 2 号</strong>（在留期間の制限なし／家族帯同可）への移行も可能
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { PathwayDiagram });

/* ============================================================
   RELATIONSHIP DIAGRAM — 登録支援機関の役割（Pop redesign）
   ============================================================ */
function RelationDiagram() {
  /* Layout: 4-corner with 特定技能1号 top, 入管 bottom, 企業/支援機関 left/right */
  return (
    <div className="dgm-card dgm-card-pop">
      <div className="dgm-title">登録支援機関の役割</div>
      <div className="dgm-sub">RELATIONSHIP & SUPPORT STRUCTURE</div>

      <svg className="relation-svg" viewBox="0 0 1000 720" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="登録支援機関と関係機関の関係図">
        <defs>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.12"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <marker id="arrCoral" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#F25C3D"/>
          </marker>
          <marker id="arrMint" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#0E8276"/>
          </marker>
          <marker id="arrGray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#8A9595"/>
          </marker>
          <marker id="arrGrayDash" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#B2BCBC"/>
          </marker>
        </defs>

        {/* ===== TOP NODE: 特定技能1号 ===== */}
        <g filter="url(#softShadow)">
          <rect x="300" y="40" width="400" height="160" rx="80" fill="#FDD9C7" stroke="#F25C3D" strokeWidth="2.5"/>
        </g>
        {/* Character cluster (LEFT half of box) */}
        <g transform="translate(340, 80)">
          {/* helmet worker */}
          <circle cx="32" cy="50" r="32" fill="#FFF" stroke="#F25C3D" strokeWidth="1.8"/>
          <circle cx="32" cy="54" r="20" fill="#FFD9C2"/>
          <path d="M10 50 Q32 26 54 50 L54 42 Q32 26 10 42 Z" fill="#F25C3D"/>
          <path d="M10 52 Q32 56 54 52" stroke="#C13C20" strokeWidth="1.4" fill="none"/>
          {/* chef */}
          <circle cx="100" cy="50" r="32" fill="#FFF" stroke="#F25C3D" strokeWidth="1.8"/>
          <circle cx="100" cy="54" r="20" fill="#F5C9A8"/>
          <ellipse cx="100" cy="36" rx="22" ry="14" fill="#3A2D24"/>
          <path d="M78 38 Q100 32 122 38 L122 50 L78 50 Z" fill="#3A2D24"/>
        </g>
        {/* Text (RIGHT half of box, centered at x=600) */}
        <text x="600" y="118" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="22" fontWeight="600" fill="#C13C20" letterSpacing="3">特定技能</text>
        <text x="600" y="160" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="36" fontWeight="700" fill="#C13C20" letterSpacing="6">1 号</text>

        {/* ===== LEFT NODE: 受入企業 ===== */}
        <g filter="url(#softShadow)">
          <rect x="20" y="290" width="300" height="160" rx="80" fill="#C9E0EC" stroke="#2E8FCC" strokeWidth="2.5"/>
        </g>
        {/* Character (LEFT third, around cx=80) */}
        <g transform="translate(40, 322)">
          <circle cx="40" cy="44" r="32" fill="#FFF" stroke="#2E8FCC" strokeWidth="1.8"/>
          <circle cx="40" cy="46" r="22" fill="#FFE0CC"/>
          <path d="M18 42 Q40 22 62 42 Q62 30 40 24 Q18 30 18 42 Z" fill="#2C3E50"/>
          {/* suit collar V */}
          <path d="M22 74 L34 66 L40 72 L46 66 L58 74 L58 80 L22 80 Z" fill="#2E8FCC"/>
          <path d="M34 66 L40 86 L46 66" stroke="#FFF" strokeWidth="1.5" fill="none"/>
          <path d="M38 70 L40 86 L42 70" stroke="#F25C3D" strokeWidth="2.5" fill="#F25C3D"/>
        </g>
        {/* Text (RIGHT 2/3, centered at x=220) */}
        <text x="220" y="370" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="22" fontWeight="600" fill="#1F6F9C" letterSpacing="3">受入企業</text>
        <text x="220" y="396" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fill="#3E5762" letterSpacing="1.6">（特定技能 所属機関）</text>

        {/* ===== RIGHT NODE: 登録支援機関 ===== */}
        <g filter="url(#softShadow)">
          <rect x="680" y="290" width="300" height="160" rx="80" fill="#BFDFD8" stroke="#0E8276" strokeWidth="2.5"/>
        </g>
        {/* Character (LEFT third of right box, cx=740) */}
        <g transform="translate(700, 322)">
          <circle cx="40" cy="44" r="32" fill="#FFF" stroke="#0E8276" strokeWidth="1.8"/>
          <circle cx="40" cy="46" r="22" fill="#FFE0CC"/>
          <path d="M18 38 Q40 18 62 38 Q62 26 40 22 Q18 26 18 38 Z" fill="#5A4A36"/>
          {/* headset */}
          <path d="M22 42 Q26 12 40 12 Q54 12 58 42" stroke="#0E8276" strokeWidth="2.2" fill="none"/>
          <circle cx="22" cy="44" r="4" fill="#0E8276"/>
          <circle cx="58" cy="44" r="4" fill="#0E8276"/>
          {/* clipboard */}
          <rect x="46" y="62" width="20" height="22" rx="2" fill="#FFF" stroke="#0E8276" strokeWidth="1.4"/>
          <rect x="52" y="60" width="8" height="4" rx="1" fill="#0E8276"/>
          <path d="M50 70 h12 M50 74 h12 M50 78 h6" stroke="#0E8276" strokeWidth="1.2"/>
          {/* body */}
          <path d="M14 80 Q40 70 66 80" stroke="#0E8276" strokeWidth="1.5" fill="none"/>
        </g>
        {/* Text */}
        <text x="880" y="370" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="22" fontWeight="600" fill="#074F47" letterSpacing="3">登録支援機関</text>
        <text x="880" y="396" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fill="#2D4E48" letterSpacing="1.6">（当組合 グループ会社）</text>

        {/* ===== BOTTOM NODE: 出入国在留管理庁 ===== */}
        <g filter="url(#softShadow)">
          <rect x="300" y="540" width="400" height="160" rx="80" fill="#F4F4F0" stroke="#8A9595" strokeWidth="2.5"/>
        </g>
        {/* Building (LEFT side, cx=380) */}
        <g transform="translate(340, 572)">
          <path d="M0 36 L40 8 L80 36 Z" fill="#8A9595"/>
          <rect x="4" y="36" width="72" height="48" fill="#FFF" stroke="#8A9595" strokeWidth="1.6"/>
          <rect x="10" y="44" width="6" height="34" fill="#8A9595"/>
          <rect x="22" y="44" width="6" height="34" fill="#8A9595"/>
          <rect x="34" y="44" width="6" height="34" fill="#8A9595"/>
          <rect x="46" y="44" width="6" height="34" fill="#8A9595"/>
          <rect x="58" y="44" width="6" height="34" fill="#8A9595"/>
          <rect x="0" y="84" width="80" height="6" fill="#8A9595"/>
          <circle cx="40" cy="22" r="3" fill="#FFF"/>
        </g>
        {/* Text (RIGHT side, centered x=600) */}
        <text x="560" y="620" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="22" fontWeight="600" fill="#3D4848" letterSpacing="3">出入国在留管理庁</text>
        <text x="560" y="648" textAnchor="middle" fontFamily="var(--font-sans-en)" fontSize="10" fill="#7A8585" letterSpacing="1" textLength="240" lengthAdjust="spacingAndGlyphs">IMMIGRATION SERVICES AGENCY</text>

        {/* ========== ARROWS ========== */}
        {/* 1) 受入企業 top → 特定技能1号 bottom-left (curve up-right) */}
        <path d="M170,290 Q260,240 380,200" fill="none" stroke="#F25C3D" strokeWidth="2.8" strokeLinecap="round" markerEnd="url(#arrCoral)"/>

        {/* 2) 登録支援機関 top → 特定技能1号 bottom-right (curve up-left) */}
        <path d="M830,290 Q740,240 620,200" fill="none" stroke="#0E8276" strokeWidth="2.8" strokeLinecap="round" markerEnd="url(#arrMint)"/>

        {/* 3) 受入企業 right → 登録支援機関 left (horizontal) */}
        <path d="M322,370 L676,370" fill="none" stroke="#F25C3D" strokeWidth="2.8" strokeLinecap="round" markerEnd="url(#arrCoral)"/>

        {/* 4) 受入企業 bottom-left → 入管 top-left (solid) */}
        <path d="M90,450 L336,540" fill="none" stroke="#8A9595" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrGray)"/>

        {/* 5) 入管 top → 受入企業 bottom-right (dashed, returning) */}
        <path d="M440,540 L255,450" fill="none" stroke="#B2BCBC" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 5" markerEnd="url(#arrGrayDash)"/>

        {/* 6) 登録支援機関 bottom-right → 入管 top-right (solid) */}
        <path d="M910,450 L664,540" fill="none" stroke="#8A9595" strokeWidth="2.2" strokeLinecap="round" markerEnd="url(#arrGray)"/>

        {/* 7) 入管 top → 登録支援機関 bottom-left (dashed) */}
        <path d="M560,540 L745,450" fill="none" stroke="#B2BCBC" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 5" markerEnd="url(#arrGrayDash)"/>

        {/* ========== LABELS ========== */}
        {/* 雇用契約 (top left curve) */}
        <rect x="218" y="220" width="104" height="34" rx="17" fill="#FFF" stroke="#F25C3D" strokeWidth="2"/>
        <text x="270" y="243" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="15" fontWeight="600" fill="#C13C20" letterSpacing="2">雇用契約</text>

        {/* 義務的支援 (top right curve) */}
        <rect x="676" y="220" width="118" height="34" rx="17" fill="#FFF" stroke="#0E8276" strokeWidth="2"/>
        <text x="735" y="243" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="15" fontWeight="600" fill="#074F47" letterSpacing="2">義務的支援</text>

        {/* 支援委託 (center, on the horizontal line) */}
        <rect x="438" y="352" width="124" height="36" rx="18" fill="#F25C3D"/>
        <text x="500" y="377" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="15" fontWeight="600" fill="#FFF" letterSpacing="2">支援委託</text>

        {/* 届出 (left solid line midpoint ~ 215, 495) */}
        <rect x="178" y="478" width="76" height="28" rx="14" fill="#FFF" stroke="#8A9595" strokeWidth="1.4"/>
        <text x="216" y="497" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="500" fill="#5A6666" letterSpacing="1.5">届出</text>

        {/* 指導・助言 (left dashed line midpoint ~ 345, 495) */}
        <rect x="288" y="478" width="116" height="28" rx="14" fill="#FFF" stroke="#B2BCBC" strokeWidth="1.4"/>
        <text x="346" y="497" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="500" fill="#7A8585" letterSpacing="1.5">指導・助言</text>

        {/* 指導・助言 (right dashed line midpoint ~ 655, 495) */}
        <rect x="596" y="478" width="116" height="28" rx="14" fill="#FFF" stroke="#B2BCBC" strokeWidth="1.4"/>
        <text x="654" y="497" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="500" fill="#7A8585" letterSpacing="1.5">指導・助言</text>

        {/* 届出 (right solid line midpoint ~ 785, 495) */}
        <rect x="746" y="478" width="76" height="28" rx="14" fill="#FFF" stroke="#8A9595" strokeWidth="1.4"/>
        <text x="784" y="497" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="500" fill="#5A6666" letterSpacing="1.5">届出</text>
      </svg>

      <div className="dgm-legend">
        <span className="lg-item"><span className="lg-dot" style={{background:"#F25C3D"}}></span>受入企業に関わる契約・委託</span>
        <span className="lg-item"><span className="lg-dot" style={{background:"#0E8276"}}></span>登録支援機関による支援</span>
        <span className="lg-item"><span className="lg-dot" style={{background:"#8A9595"}}></span>行政への届出</span>
        <span className="lg-item"><span className="lg-dot lg-dot-dash"></span>行政からの指導・助言</span>
      </div>
    </div>
  );
}
Object.assign(window, { RelationDiagram });

/* ============================================================
   TIMELINE DIAGRAM — 育成就労3年 + 特定技能5年 = 通算8年
   ============================================================ */
function TimelineDiagram() {
  return (
    <div className="dgm-card dgm-card-pop">
      {/* 修正依頼 p.6：タイトル／英サブを差し替え */}
      <div className="dgm-title">育成就労から特定技能へ、<span style={{color:"var(--accent)"}}>途切れない長期キャリアパス</span>を構築</div>
      {/* 依頼 #30：英語表記を削除し日本語表記に変更 */}
      <div className="dgm-sub">ワンストップのキャリアパス｜日本での長期就労へ</div>

      {/* 依頼 #30：時間の流れを矢印で明示し、帯内の年数表記を日本語に変更 */}
      <div className="timeline" data-nq-fix="30">
        <div className="timeline-flow">
          <span className="tf-label">時間の流れ</span>
          <span className="tf-arrow"></span>
        </div>
        <div className="timeline-track">
          <div className="timeline-phase p1">
            <div>
              <div className="ph-label">育成就労</div>
              <div className="ph-years">原則3年</div>
            </div>
          </div>
          <div className="timeline-phase p2">
            <div>
              <div className="ph-label">特定技能 1 号</div>
              <div className="ph-years">原則5年</div>
            </div>
          </div>
          <div className="timeline-phase p3">
            <div>
              <div className="ph-label">特定技能 2 号</div>
              <div className="ph-years">更新可能</div>
            </div>
          </div>
        </div>

        {/* 修正依頼 p.6：末尾の「…年／∞年」を「9年目以降｜特定技能2号（更新上限なし）」に集約 */}
        <div className="timeline-years">
          {[0,1,2,3,4,5,6,7,8].map((y, i) => (
            <div key={i} className="timeline-year">{y}年</div>
          ))}
          <div className="timeline-year timeline-year-tail">
            <span className="ty-main">9年目以降</span>
            <span className="ty-sub">特定技能2号（更新上限なし）</span>
          </div>
        </div>

        <div className="timeline-cap">
          <div className="timeline-cap-item p1">
            <div className="num">3<span style={{fontSize:14, marginLeft:4, color:"var(--ink-mute)"}}>年</span></div>
            <div className="lbl">育成就労 期間</div>
            {/* 修正依頼 p.6：技能・日本語の目標を明文化 */}
            <div className="desc">監理支援機関（当組合）による監理。特定技能1号水準の技能習得と、日本語試験（N4以上）の合格を目指します。</div>
          </div>
          <div className="timeline-cap-item p2">
            <div className="num">5<span style={{fontSize:14, marginLeft:4, color:"var(--ink-mute)"}}>年</span></div>
            <div className="lbl">特定技能 1 号 期間</div>
            <div className="desc">登録支援機関（グループ会社）による法定10項目の支援。同じ職場で継続就労が可能。</div>
          </div>
          <div className="timeline-cap-item p3">
            <div className="num">∞</div>
            <div className="lbl">特定技能 2 号</div>
            <div className="desc">在留期間の制限なし、家族帯同可。条件を満たせば永住への道も開かれます。</div>
          </div>
        </div>

        <div style={{marginTop:32, padding:"22px 30px", background:"var(--bg-soft)", borderRadius:6, fontSize:16, lineHeight:1.95, color:"var(--ink)", textAlign:"center", letterSpacing:"0.06em"}}>
          {/* 修正依頼 p.6 */}
          <strong style={{color:"var(--primary)"}}>グループによるワンストップ支援だから、</strong>
          フェーズが変わっても <strong>一貫した体制</strong> で伴走します。
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { TimelineDiagram });

/* ============================================================
   FEATURES — 3つの特徴 (育成就労) — Bold colored panels
   ============================================================ */
function FeaturesDiagram() {
  const items = [
    {
      cls: "c1", num: "01", tag: "BOTH AT ONCE",
      /* h の \n は改行位置の指定（#36の拡大で「人材確／保」と語中で折れるのを防ぐ） */
      h: "「人材育成」と\n「人材確保」の両立",
      /* 修正依頼 #35：01 の説明文を削除（クリック指定は 01 のみ。02・03 の説明文は依頼外のため残置） */
    },
    {
      cls: "c2", num: "02", tag: "SKILL & LANGUAGE",
      h: "3 年で N4・特定技能 1 号水準へ",
      p: "3年間の在留期間の中で、特定技能1号水準の技能習得と、日本語能力（N4 以上）の取得を、段階的に目指す体系的なプログラム。"
    },
    {
      cls: "c3", num: "03", tag: "HUMAN RIGHTS",
      h: "本人意思による転籍が可能に",
      p: "一定条件下で本人意思による転籍を認める制度設計に。人権配慮が大きく強化され、本人にとってより安心して就労できる環境が整います。"
    }
  ];
  return (
    /* data-nq-fix="36"：見出し .feat-h の拡大（CSSのみの変更）。パネルはループ描画のため代表して親に付与 */
    <div className="features-bold" data-nq-fix="36">
      {items.map((it, i) => (
        <div key={i} className={`feat-panel ${it.cls}`}>
          <div className="feat-bignum">{it.num}</div>
          <div className="feat-tag">{it.tag}</div>
          <div className="feat-h">
            {it.h.split("\n").map((l, j, a) => (
              <React.Fragment key={j}>{l}{j < a.length - 1 && <br/>}</React.Fragment>
            ))}
          </div>
          {it.p && <div className="feat-p">{it.p}</div>}
        </div>
      ))}
    </div>
  );
}
Object.assign(window, { FeaturesDiagram });

/* ============================================================
   PROCESS — 受入れ・キャリア形成フロー（育成就労／全7ステップ）

   修正依頼（第1回）p.8 → 修正対応報告書 2-5 で再設計：
   ・「グラフに見えるが何のグラフか分からない」マトリクス／アーチ図を廃止。
   ・番号と説明が必ず縦一列で対応する表形式に統一した。
   簡素化（2026-08 口頭依頼「もうちょいシンプルにわかりやすく」→「もうちょいSimpleに」）：
   ・「期間の目安」の行を廃止し、期間は各ステップの矢羽内のチップに統合。
   ・「支援体制」の行を廃止（内容が実施内容の各ステップとほぼ重複していたため）。
   ・「拠点」の行を廃止（上の「段階」帯の《現地》《日本》とほぼ重複していたため。
     JOURNEY_SEGMENTS は復活できるようデータのみ残置）。
   ・左のラベル列（「ステップの流れ」等）と冒頭の要約2行も削除。
   ・実施内容の文章を体言止めの短文に整理。
   → 現在は 段階帯／ステップ（期間チップ入り）／実施内容 の 3 段構成。
   Desktop（>1000px）: 7 ステップ列のグリッド表
   Mobile（<=1000px）: フェーズ（段階）ごとにまとめた縦積み
   ============================================================ */

/* 上段のフェーズ帯。span = 束ねるステップ数（3 / 3 / 1 の計7） */
const JOURNEY_PHASES = [
  { cls: "p1", label: "《 入国前 ─ 現地／手続き 》",           span: 3 },
  { cls: "p2", label: "《 入国後 ─ 日本での講習・就労 》",      span: 3 },
  { cls: "p3", label: "《 修了 》",                            span: 1 },
];

/* 拠点・支援体制の結合セル定義。簡素化でどちらの行も非表示
   （拠点は「段階」帯と、支援体制は「実施内容」と重複のため）。復活できるようデータは残置 */
const JOURNEY_SEGMENTS = [
  { cls: "g1", phase: "p1", span: 1, place: "日本（組合・受入企業）",
    support: "受入計画のご提案" },
  { cls: "g2", phase: "p1", span: 2, place: "現地（送出国・送出機関）",
    support: "送出機関との連携 ─ 選抜・事前教育の管理" },
  { cls: "g3", phase: "p2", span: 3, place: "日本（受入企業での就労）",
    support: "組合担当者による定期訪問・面談・キャリア相談・技能習得状況の確認と企業様サポート" },
  { cls: "g4", phase: "p3", span: 1, place: "帰国 / 移行",
    support: "登録支援機関が継続" },
];

/* tone は 1〜7 の濃淡（入国前＝ダーク／入国後＝レッド／修了＝白抜き）。styles.css の .t1〜.t7 に対応 */
/* p は体言止めの短文（簡素化）。丁寧語の定型文はセルの行数が嵩むため使わない */
const JOURNEY_STEPS = [
  { n: 1, phase: "p1", seg: "g1", tone: 1, dur: "〜 1ヶ月",   h: "ご加入・制度説明",
    p: "受入分野・職種・人数・希望時期を伺い、受入計画をご提案。" },
  /* 修正依頼 p.8：面接は「現地またはオンライン」。オンライン面接のみと誤解されない表記に */
  { n: 2, phase: "p1", seg: "g2", tone: 2, dur: "1 〜 3ヶ月", h: "募集・選抜",
    p: "送出機関より候補者を選定。書類審査と、現地またはオンラインでの面接。" },
  { n: 3, phase: "p1", seg: "g2", tone: 3, dur: "約 6ヶ月",   h: "現地での事前教育",
    p: "現地にて日本語・生活ルール・労働安全の基礎教育。" },
  { n: 4, phase: "p2", seg: "g3", tone: 4, dur: "約 1ヶ月",   h: "入国・入国後講習",
    p: "日本語・生活ルール・職種別講習を集中的に実施。" },
  /* h の \n は矢羽内の改行位置指定（「開／始」「フォロ／ー」の1文字はみ出しを防ぐ）。モバイルでは無視。
     簡素化で見出しも短縮（配属・育成就労開始→配属・就労開始／技能検定・継続フォロー→技能検定・フォロー。
     詳細は実施内容セルに記載） */
  { n: 5, phase: "p2", seg: "g3", tone: 5, dur: "1年目 〜",   h: "配属・\n就労開始",
    p: "受入企業様へ配属。初期の定着まで組合担当者がフォロー。" },
  /* 修正依頼 p.8：「定期巡回」→「定期訪問」。技能習得状況の確認に加え企業様サポートを明記 */
  { n: 6, phase: "p2", seg: "g3", tone: 6, dur: "3年目以降",  h: "技能検定・\nフォロー",
    p: "定期訪問・面談・キャリア相談・技能習得状況の確認と、企業様のサポート。" },
  { n: 7, phase: "p3", seg: "g4", tone: 7, dur: "修了時",     h: "帰国 または 特定技能1号へ",
    p: "本人の希望とスキルに応じて、登録支援機関がそのまま支援を継続。" },
];

const JOURNEY_LEGEND = [
  { cls: "p1", text: "入国前 ─ 現地・選抜／事前教育" },
  { cls: "p2", text: "入国後 ─ 日本での講習・就労" },
  { cls: "p3", text: "修了 ─ 帰国／特定技能1号へ" },
];

function ProcessDiagram() {
  return (
    <div className="journey7">
      {/* 図のヘッダー（セクション見出しと重複しないよう、図版ラベルとして小さく置く） */}
      <div className="j7-bar">
        <div className="j7-bar-title">育成就労 ─ 受入れ・キャリア形成フロー</div>
        <div className="j7-bar-badge">全 7 ステップ</div>
      </div>
      <div className="j7-rule" aria-hidden="true"></div>

      {/* ===== DESKTOP — 3段（段階帯／ステップ＋期間チップ／実施内容）。ラベル列なし ===== */}
      <div className="j7-matrix">
        {/* 段階 */}
        {JOURNEY_PHASES.map((ph) => (
          <div key={ph.cls} className={`j7-phase ${ph.cls}`} style={{ gridColumn: `span ${ph.span}` }}>{ph.label}</div>
        ))}

        {/* ステップの流れ（期間の目安を含む） */}
        {JOURNEY_STEPS.map((s) => (
          <div key={s.n} className={`j7-step t${s.tone}`} style={{ "--i": s.n }}>
            <span className="j7-step-n">{s.n}</span>
            <span className="j7-step-txt">
              <span className="j7-step-h">
                {s.h.split("\n").map((l, i, a) => (
                  <React.Fragment key={i}>{l}{i < a.length - 1 && <br/>}</React.Fragment>
                ))}
              </span>
              <span className="j7-step-dur">{s.dur}</span>
            </span>
          </div>
        ))}

        {/* 実施内容 */}
        {JOURNEY_STEPS.map((s) => (
          <div key={s.n} className={`j7-desc ${s.phase}`}>{s.p}</div>
        ))}
      </div>

      {/* ===== MOBILE — フェーズ（段階）単位で縦積み（番号は常に左、説明はその下） ===== */}
      <div className="j7-stack">
        {JOURNEY_PHASES.map((ph) => (
          <section key={ph.cls} className={`j7-mseg ${ph.cls}`}>
            <div className="j7-mseg-top">
              <span className="j7-mseg-phase">{ph.label}</span>
            </div>
            <ol className="j7-msteps">
              {JOURNEY_STEPS.filter((s) => s.phase === ph.cls).map((s) => (
                <li key={s.n} className={`j7-mstep t${s.tone}`}>
                  <div className="j7-mstep-top">
                    <span className="j7-mstep-n">{s.n}</span>
                    <h3>{s.h.replace(/\n/g, "")}</h3>
                  </div>
                  <span className="j7-mdur">{s.dur}</span>
                  <p>{s.p}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <p className="j7-note">
        （※）記載の期間はいずれも標準的な目安です。職種・送出国・受入時期により、手続きや期間が前後する場合があります。
      </p>
    </div>
  );
}
Object.assign(window, { ProcessDiagram, JOURNEY_STEPS, JOURNEY_PHASES, JOURNEY_SEGMENTS });

/* ============================================================
   SUPPORT — 10項目 in 2 PHASE COLUMNS (特定技能)
   ============================================================ */
function SupportDiagram() {
  const phases = [
    {
      cls: "a", tag: "PHASE A", title: "入国時の立ち上げ支援",
      items: [
        { h: "事前ガイダンス", p: "雇用契約締結後・入国前の情報提供" },
        { h: "出入国時の送迎", p: "空港〜住居までの安全な移動を確保" },
        { h: "住居の確保・生活契約", p: "賃貸契約・各種ライフライン契約の支援" },
        { h: "生活オリエンテーション", p: "日本での暮らし方を初期段階で丁寧に説明" },
        { h: "公的手続等への同行", p: "住民票・年金・保険等の届出を同行支援" },
      ]
    },
    {
      cls: "b", tag: "PHASE B", title: "継続的な定着支援",
      items: [
        { h: "日本語学習の機会の提供", p: "グループ内日本語学校による継続学習機会" },
        { h: "相談・苦情への対応", p: "母国語での相談窓口を24時間対応" },
        { h: "日本人との交流促進", p: "地域交流イベント・職場コミュニケーション支援" },
        { h: "非自発的離職時の転職支援", p: "再就職先の紹介・手続きサポート" },
        { h: "定期的な面談・行政通報", p: "3ヶ月に1度の面談・行政機関への定期報告" },
      ]
    }
  ];
  let counter = 0;
  return (
    <div className="sup-phases">
      {phases.map((ph, i) => (
        <div key={i} className={`sup-phase ${ph.cls}`}>
          <div className="sup-phase-header">
            <span className="sup-phase-tag">{ph.tag}</span>
            <span className="sup-phase-title">{ph.title}</span>
          </div>
          <div className="sup-phase-body">
            {ph.items.map((it, j) => {
              counter += 1;
              const n = String(counter).padStart(2, "0");
              return (
                <div key={j} className="sup-item">
                  <div className="sup-item-num">{n}</div>
                  <div className="sup-item-text">
                    <div className="h">{it.h}</div>
                    <div className="p">{it.p}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
Object.assign(window, { SupportDiagram });

/* ============================================================
   FIELDS — 16 fields in 4 CATEGORY ZONES (特定技能)
   ============================================================ */
const SP_ICON = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

/* 分野名 → アイコン。SSW_FIELDS（data.jsx）の name をキーにする。
   分野を増減する場合は data.jsx の SSW_FIELDS を編集し、ここに対応アイコンを足すだけでよい。 */
const FIELD_ICONS = {
  "建設": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M8 34V12l24 6"/><path d="M8 12 32 12"/><path d="M14 34V20l8 2v12"/><path d="M22 34V25"/><path d="M8 18l6 0M8 24l6 0M8 30l6 0"/><circle cx="32" cy="13" r="1.4" fill="currentColor"/><path d="M32 14v6l-4 4"/></svg>),
  "造船・舶用工業": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M4 26h32l-3 6H7l-3-6Z" fill="currentColor" fillOpacity="0.15"/><path d="M8 26V18h22v8"/><path d="M14 18v-4h4M20 14h4v4"/><path d="M14 22h6M22 22h6"/><path d="M19 10v8"/><path d="M19 10l5 2"/><path d="M4 32c3 2 5 0 8 0s5 2 8 0 5-2 8 0 5 0 8 0"/></svg>),
  "自動車整備": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M6 26v-4l3-1 3-6h16l3 6 3 1v4"/><path d="M6 26h28v3H6z"/><circle cx="12" cy="29" r="3" fill="#fff" stroke="currentColor"/><circle cx="28" cy="29" r="3" fill="#fff" stroke="currentColor"/><path d="M12 15h16"/><path d="M22 8l3 3-2 2 3 3-3 3-3-3-2 2-3-3 7-7Z" fill="currentColor" fillOpacity="0.25"/></svg>),
  "工業製品製造業": (<svg viewBox="0 0 40 40" {...SP_ICON}><circle cx="15" cy="17" r="6"/><path d="M15 9v-3M15 28v-3M7 17H4M26 17h-3M9.3 11.3 7.2 9.2M22.8 22.8l-2.1-2.1M9.3 22.8l-2.1 2.1M22.8 11.3 24.9 9.2"/><circle cx="15" cy="17" r="2" fill="currentColor"/><circle cx="28" cy="28" r="4"/><path d="M28 22v-2M28 36v-2M22 28h-2M36 28h-2"/></svg>),
  "介護": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M4 28c2-4 6-6 10-6h12c4 0 6 2 8 4" fill="currentColor" fillOpacity="0.18"/><circle cx="20" cy="11" r="4"/><path d="M14 22c0-3 3-5 6-5s6 2 6 5"/><path d="M30 14c1.5-1.5 4-1 4 1.2 0 2-4 4-4 4s-4-2-4-4c0-2.2 2.5-2.7 4-1.2Z" fill="currentColor"/></svg>),
  "ビルクリーニング": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M10 34V8h14v26"/><path d="M24 34V16h6v18"/><path d="M13 12h2M19 12h2M13 17h2M19 17h2M13 22h2M19 22h2M13 27h2M19 27h2M27 20h.01M27 25h.01M27 30h.01"/><path d="M32 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" fill="currentColor"/><path d="M6 16l.6 1.4L8 18l-1.4.6L6 20l-.6-1.4L4 18l1.4-.6L6 16Z" fill="currentColor"/></svg>),
  /* リネンサプライ：たたんだリネン＋洗濯タグ */
  "リネンサプライ": (<svg viewBox="0 0 40 40" {...SP_ICON}><rect x="6" y="9" width="22" height="7" rx="2" fill="currentColor" fillOpacity="0.18"/><rect x="6" y="9" width="22" height="7" rx="2"/><rect x="6" y="18" width="22" height="7" rx="2"/><rect x="6" y="27" width="22" height="7" rx="2"/><path d="M11 12.5h4M11 21.5h4M11 30.5h4"/><path d="M33 8v9l3 3-3 3v9"/></svg>),
  "宿泊": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M5 34V14l15-7 15 7v20"/><path d="M5 34h30"/><path d="M12 28v-4h16v4" fill="currentColor" fillOpacity="0.25"/><path d="M10 28h20v3H10z"/><circle cx="15" cy="22" r="2"/><path d="M19 24h9v-3a2 2 0 0 0-2-2h-7"/><path d="M20 11l.9 1.9 2.1.3-1.5 1.5.4 2.1L20 16l-1.9 1 .4-2.1-1.5-1.5 2.1-.3L20 11Z" fill="currentColor"/></svg>),
  "外食業": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M12 18c-3 0-5-2-5-5s3-5 6-4c1-3 5-4 7-4s6 1 7 4c3-1 6 1 6 4s-2 5-5 5v6H12v-6Z" fill="currentColor" fillOpacity="0.15"/><path d="M12 24h16v3H12z"/><path d="M9 30v4M9 30c-1 0-2-1-2-2v-3h4v3c0 1-1 2-2 2Z"/><path d="M31 30v4M31 25v5M29 25v3M33 25v3"/></svg>),
  "農業": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M6 28V18h10l2-5h6v8" fill="currentColor" fillOpacity="0.15"/><path d="M6 28V18h10l2-5h6v8h6v7"/><path d="M6 28h24"/><circle cx="13" cy="30" r="4" fill="#fff" stroke="currentColor"/><circle cx="13" cy="30" r="1.5" fill="currentColor"/><circle cx="28" cy="31" r="2.5" fill="#fff" stroke="currentColor"/><path d="M34 10c-2 0-3 2-3 3 2 0 3-1 3-3ZM34 10c2 0 3 2 3 3-2 0-3-1-3-3ZM34 13v3"/></svg>),
  "漁業": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M6 20c4-6 10-6 14-3l4-2-1 5 1 5-4-2c-4 3-10 3-14-3Z" fill="currentColor" fillOpacity="0.2"/><circle cx="11" cy="19" r="1" fill="currentColor"/><path d="M16 20h2M19 17h-1M19 23h-1"/><path d="M4 30c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0 4-2 6 0"/><path d="M30 6v6c0 2-2 3-3 1"/></svg>),
  "飲食料品製造業": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M12 6h6v4l2 3v19h-10V13l2-3V6Z" fill="currentColor" fillOpacity="0.18"/><path d="M11 16h8"/><path d="M13 6h4"/><ellipse cx="28" cy="14" rx="5" ry="2"/><path d="M23 14v16c0 1 2 2 5 2s5-1 5-2V14"/><path d="M23 20c0 1 2 2 5 2s5-1 5-2"/><path d="M23 26c0 1 2 2 5 2s5-1 5-2"/></svg>),
  "林業": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M16 6l-7 10h4l-5 8h5l-5 8h16l-5-8h5l-5-8h4l-7-10Z" fill="currentColor" fillOpacity="0.22"/><path d="M16 6l-7 10h4l-5 8h5l-5 8h16l-5-8h5l-5-8h4l-7-10Z"/><path d="M16 32v4"/><path d="M30 10l4-2 2 4-4 2-2-4Z" fill="currentColor"/><path d="M30 10l-6 12"/></svg>),
  "木材産業": (<svg viewBox="0 0 40 40" {...SP_ICON}><circle cx="16" cy="20" r="10" fill="currentColor" fillOpacity="0.12"/><circle cx="16" cy="20" r="10"/><circle cx="16" cy="20" r="6.5"/><circle cx="16" cy="20" r="3"/><path d="M28 14h6M28 20h6M28 26h6"/><path d="M33 9l3 2-2 3"/></svg>),
  "自動車運送業": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M3 27V12h18v15" fill="currentColor" fillOpacity="0.15"/><path d="M21 17h7l4 5v5H21z"/><path d="M3 27h32"/><circle cx="11" cy="29" r="3" fill="#fff" stroke="currentColor"/><circle cx="27" cy="29" r="3" fill="#fff" stroke="currentColor"/><path d="M8 16h8M8 20h8"/></svg>),
  "鉄道": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M10 6h20a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4Z" fill="currentColor" fillOpacity="0.15"/><path d="M10 12h20v8H10z"/><circle cx="13" cy="26" r="1.5" fill="currentColor"/><circle cx="27" cy="26" r="1.5" fill="currentColor"/><path d="M14 16h12"/><path d="M8 34l-2 4M32 34l2 4M14 36h12"/></svg>),
  "航空": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M4 24l30-14-4 16-10-3-4 8-3-5-9-2Z" fill="currentColor" fillOpacity="0.22"/><path d="M4 24l30-14-4 16-10-3-4 8-3-5-9-2Z"/><path d="M20 23l5-10"/><path d="M6 32c4 0 6-2 10-2"/></svg>),
  /* 物流倉庫：ラック＋段ボール */
  "物流倉庫": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M5 15 20 7l15 8"/><path d="M7 15v19h26V15"/><rect x="12" y="20" width="7" height="6" fill="currentColor" fillOpacity="0.2"/><rect x="21" y="20" width="7" height="6"/><rect x="16" y="28" width="8" height="6" fill="currentColor" fillOpacity="0.2"/><path d="M15.5 20v6M24.5 20v6M20 28v6"/></svg>),
  /* 資源循環：リサイクルの三角循環 */
  "資源循環": (<svg viewBox="0 0 40 40" {...SP_ICON}><path d="M20 6l5 9h-10l5-9Z" fill="currentColor" fillOpacity="0.22"/><path d="M20 6l5 9h-10l5-9Z"/><path d="M8 32l5-9 5 3-4.5 8L8 32Z"/><path d="M32 32l-5-9-5 3 4.5 8L32 32Z"/><path d="M12 33h16"/><path d="M26 31l2 2-2 2"/></svg>),
};

const FIELD_CATS = [
  { key: "build", cls: "c1", num: "01", eyebrow: "Build & Manufacturing", title: "建設・製造業界",
    badge: (<svg viewBox="0 0 32 32" {...SP_ICON}><path d="M4 27V14l7 4V14l7 4V9l10 6v12H4Z"/><path d="M8 22h2M14 22h2M20 22h2M26 22h.01"/></svg>) },
  { key: "care", cls: "c2", num: "02", eyebrow: "Care & Service", title: "介護・サービス業界",
    badge: (<svg viewBox="0 0 32 32" {...SP_ICON}><path d="M16 26S6 20 6 13a5 5 0 0 1 10-2 5 5 0 0 1 10 2c0 7-10 13-10 13Z" fill="currentColor" fillOpacity="0.2"/></svg>) },
  { key: "food", cls: "c3", num: "03", eyebrow: "Food, Agriculture & Forestry", title: "農林水産・食品業界",
    badge: (<svg viewBox="0 0 32 32" {...SP_ICON}><path d="M16 28V8"/><path d="M16 12c-3 0-5-2-5-5 3 0 5 2 5 5ZM16 12c3 0 5-2 5-5-3 0-5 2-5 5Z"/><path d="M16 18c-3 0-5-2-5-5 3 0 5 2 5 5ZM16 18c3 0 5-2 5-5-3 0-5 2-5 5Z"/><path d="M16 24c-3 0-5-2-5-5 3 0 5 2 5 5ZM16 24c3 0 5-2 5-5-3 0-5 2-5 5Z"/></svg>) },
  { key: "move", cls: "c4", num: "04", eyebrow: "Transport & Environment", title: "運輸・環境関連業界",
    badge: (<svg viewBox="0 0 32 32" {...SP_ICON}><path d="M4 22c4 0 4-12 8-12s4 12 8 12 4-12 8-12"/><circle cx="6" cy="22" r="2" fill="currentColor"/><circle cx="26" cy="10" r="2" fill="currentColor"/></svg>) },
];

function FieldsDiagram() {
  return (
    <div className="ind16">
      <div className="ind16-grid">
        {FIELD_CATS.map((c, i) => {
          const items = SSW_FIELDS.filter(f => f.cat === c.key);
          if (!items.length) return null;
          return (
            <section key={i} className={`ind-cat ${c.cls}`}>
              {/* 帯レイアウトでは連番を見出しの中に流し込む（背面の巨大数字だと文字と重なるため） */}
              <div className="ind-cat-head">
                <div className="ind-cat-badge">{c.badge}</div>
                <div className="ind-cat-text">
                  <div className="ind-cat-num">{c.num}</div>
                  <div className="ind-eyebrow">{c.eyebrow}</div>
                  <div className="ind-cat-title">{c.title}</div>
                </div>
              </div>
              {/* --cols にその分野数を渡し、カードが常に横幅いっぱいに並ぶようにする。
                  カテゴリごとの分野数（4/5/5/5）の違いで余白が生じないための措置。 */}
              <div className="ind-subs" style={{ "--cols": items.length }}>
                {items.map((it, j) => (
                  <div key={j} className="ind-sub">
                    <div className="ind-sub-icon">{FIELD_ICONS[it.name] || null}</div>
                    <span className="ind-sub-en">{it.en}</span>
                    <span className="ind-sub-name">{it.name}</span>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      {/* 修正対応報告書 6-1：育成就労の対象は17分野（自動車運送業・航空は特定技能のみ）。
          サイト各所の「特定技能（1号）と原則同一」は、この例外を含む表現。 */}
      <div className="ind16-note">
        ※令和8年1月23日 閣議決定の分野別運用方針に基づく{SSW_FIELD_COUNT}分野。うち育成就労の対象は17分野です（自動車運送業・航空は特定技能のみが対象）。将来の制度改正により、分野の追加・名称変更の可能性があります。
      </div>
    </div>
  );
}
Object.assign(window, { FieldsDiagram, FIELD_ICONS, FIELD_CATS });

/* ============================================================
   INDUSTRY ICONS — 主な受入分野（農業・製造・建設）をイラストで表現
   ============================================================ */
function IndustryIcons() {
  const s = { viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round" };
  const items = [
    {
      cls: "ind-build", label: "建設", en: "CONSTRUCTION",
      svg: (
        <svg {...s}>
          <path d="M6 58h52"/>
          <rect x="37" y="30" width="18" height="28"/>
          <path d="M41 36h3M49 36h3M41 44h3M49 44h3M41 52h3M49 52h3"/>
          <path d="M14 58V14"/>
          <path d="M10 18h26"/>
          <path d="M14 14l8 4-8 4z"/>
          <path d="M29 18v7"/>
          <path d="M26 25h6"/>
        </svg>
      )
    },
    {
      cls: "ind-factory", label: "製造", en: "MANUFACTURING",
      svg: (
        <svg {...s}>
          <circle cx="32" cy="32" r="10"/>
          <circle cx="32" cy="32" r="3"/>
          <path d="M32 14v6M32 44v6M14 32h6M44 32h6M19.5 19.5l4 4M40.5 40.5l4 4M44.5 19.5l-4 4M23.5 40.5l-4 4"/>
        </svg>
      )
    },
    {
      cls: "ind-agri", label: "農業", en: "AGRICULTURE",
      svg: (
        <svg {...s}>
          <path d="M32 56V28"/>
          <path d="M32 38c-9 0-15-5-15-15 9 0 15 5 15 15z"/>
          <path d="M32 30c9 0 15-5 15-15-9 0-15 5-15 15z"/>
          <path d="M14 56h36"/>
        </svg>
      )
    },
  ];
  return (
    <div className="ind-icons">
      <div className="ind-icons-row">
        {items.map((it, i) => (
          <div key={i} className={`ind-card ${it.cls}`}>
            <div className="ind-card-icon">{it.svg}</div>
            <div className="ind-card-label">{it.label}</div>
            <div className="ind-card-en">{it.en}</div>
          </div>
        ))}
      </div>
      <div className="ind-icons-note">建設・製造・農業をはじめ、特定産業{SSW_FIELD_COUNT}分野に対応しています。<br/>※分野は令和8年1月23日 閣議決定の分野別運用方針に基づきます。</div>
    </div>
  );
}
Object.assign(window, { IndustryIcons });
