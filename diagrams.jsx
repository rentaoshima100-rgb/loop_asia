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
            <div className="assurance-label">ASSURANCE / 01</div>
            <div className="assurance-title">
              グループ内に<strong>日本語学校</strong>を保有<br/>
              <span style={{fontSize:12, color:"var(--ink-soft)", letterSpacing:"0.06em"}}>入国後講習を自社運営、現場で「伝わる」日本語へ</span>
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
            <div className="assurance-label">ASSURANCE / 02</div>
            <div className="assurance-title">
              グループ内に<strong>登録支援機関</strong>を保有<br/>
              <span style={{fontSize:12, color:"var(--ink-soft)", letterSpacing:"0.06em"}}>育成就労 → 特定技能の橋渡しも同じ窓口で</span>
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
            <div className="assurance-label">ASSURANCE / 03</div>
            <div className="assurance-title">
              <strong>対応送出国 9 カ国</strong><br/>
              <span style={{fontSize:12, color:"var(--ink-soft)", letterSpacing:"0.06em"}}>ベトナム・カンボジア・タイなどアジア9カ国に対応</span>
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
      <div className="dgm-sub">— TWO PATHS TO BECOME A SPECIFIED SKILLED WORKER —</div>

      <div className="pathway">
        <div className="pathway-route">
          <div className="pathway-badge">① 国内ルート</div>
          <h3>育成就労 修了者</h3>
          <div className="sub-cond">（国内からの移行ルート）</div>
          <div className="pathway-req">
            <span className="lbl">REQUIREMENT</span>
            育成就労を <strong>3 年間 良好に修了</strong> していること<br/>
            <span style={{fontSize:11.5, color:"var(--ink-mute)"}}>※ 試験免除で特定技能1号へ移行可能</span><br/>
            <span style={{fontSize:11.5, color:"var(--ink-mute)"}}>※ 技能実習修了者も当面の間、経過措置により移行が認められます</span>
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
          <div className="badge">SSW Type 1</div>
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
      <div className="dgm-sub">— RELATIONSHIP & SUPPORT STRUCTURE —</div>

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
      <div className="dgm-title">通算 最大 <span style={{color:"var(--accent)"}}>8 年</span> ＋ α の在留が可能</div>
      <div className="dgm-sub">— ONE-STOP CAREER PATH: 8+ YEARS IN JAPAN —</div>

      <div className="timeline">
        <div className="timeline-track">
          <div className="timeline-phase p1">
            <div>
              <div className="ph-label">育成就労</div>
              <div className="ph-years">3 YEARS</div>
            </div>
          </div>
          <div className="timeline-phase p2">
            <div>
              <div className="ph-label">特定技能 1 号</div>
              <div className="ph-years">UP TO 5 YEARS</div>
            </div>
          </div>
          <div className="timeline-phase p3">
            <div>
              <div className="ph-label">特定技能 2 号</div>
              <div className="ph-years">RENEWABLE</div>
            </div>
          </div>
        </div>

        <div className="timeline-years">
          {[0,1,2,3,4,5,6,7,8,"…","∞"].map((y, i) => (
            <div key={i} className="timeline-year">{y}年</div>
          ))}
        </div>

        <div className="timeline-cap">
          <div className="timeline-cap-item p1">
            <div className="num">3<span style={{fontSize:14, marginLeft:4, color:"var(--ink-mute)"}}>年</span></div>
            <div className="lbl">育成就労 期間</div>
            <div className="desc">監理支援機関（当組合）による監理。N4・特定技能1号水準の技能習得を目標。</div>
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
          <strong style={{color:"var(--primary)"}}>当組合のワンストップ支援だから、</strong>
          フェーズが変わっても <strong>同じ顔ぶれ・同じ窓口</strong> で伴走します。
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
      h: "「人材育成」と「人材確保」の両立",
      p: "これまで明確に区別されてきた「育成」と「就労」を統合。日本側にとっても、本人にとってもメリットのある、新しい受入制度として再設計された制度です。"
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
    <div className="features-bold">
      {items.map((it, i) => (
        <div key={i} className={`feat-panel ${it.cls}`}>
          <div className="feat-bignum">{it.num}</div>
          <div className="feat-tag">{it.tag}</div>
          <div className="feat-h">{it.h}</div>
          <div className="feat-p">{it.p}</div>
        </div>
      ))}
    </div>
  );
}
Object.assign(window, { FeaturesDiagram });

/* ============================================================
   PROCESS — 7-step JOURNEY (育成就労)
   Desktop: arc journey (>960px) / Mobile: vertical snaking timeline (<=960px)
   ============================================================ */
const JOURNEY_STEPS = [
  { n: 1, phase: "p1", dur: "〜 1ヶ月",        h: "ご加入・制度説明",       p: "受入分野・職種・人数・希望時期を伺い、最適な受入計画をご提案いたします。", sx: 11, sy: 60, bx: 11, by: 83, delay: ".35s" },
  { n: 2, phase: "p1", dur: "1 〜 3ヶ月",      h: "募集・選抜",             p: "提携している送出機関より候補者を選定。書類審査・オンライン面接を実施します。", sx: 24, sy: 25, bx: 24, by: 48, delay: ".5s" },
  { n: 3, phase: "p1", dur: "約 6ヶ月",        h: "現地での事前教育",       p: "入国前に、現地にて日本語・生活ルール・労働安全の基礎教育を実施します。", sx: 37, sy: 65, bx: 37, by: 33, delay: ".65s" },
  { n: 4, phase: "p2", dur: "約 1ヶ月",        h: "入国・入国後講習",       p: "入国後、日本語・生活ルール・職種別講習を集中的に実施します。", sx: 50, sy: 30, bx: 50, by: 15.5, delay: ".8s" },
  { n: 5, phase: "p2", dur: "1 年目 〜",       h: "配属・育成就労開始",     p: "受入企業様への配属。初期の定着まで組合担当者が継続的にフォローいたします。", sx: 63, sy: 65, bx: 63, by: 38, delay: ".95s" },
  { n: 6, phase: "p3", dur: "3 年目以降",      h: "技能検定・継続",         p: "定期巡回・面談・キャリア相談・技能習得状況の確認をワンストップで実施します。", sx: 76, sy: 25, bx: 76, by: 46, delay: "1.1s" },
  { n: 7, phase: "p3", dur: "修了 — 帰国 / 移行", h: "帰国 または 特定技能 1号へ", p: "本人の希望とスキルに応じて、登録支援機関がそのまま支援を継続します。", sx: 89, sy: 60, bx: 89, by: 83, delay: "1.25s" },
];

function ProcessDiagram() {
  const arcRef = useRef(null);
  useEffect(() => {
    const arc = arcRef.current;
    if (!arc || typeof arc.getTotalLength !== "function") return;
    try {
      const len = arc.getTotalLength();
      arc.style.strokeDasharray = len;
      arc.style.strokeDashoffset = len;
      requestAnimationFrame(() => {
        arc.style.transition = "stroke-dashoffset 2.2s cubic-bezier(.65,.05,.36,1)";
        requestAnimationFrame(() => { arc.style.strokeDashoffset = 0; });
      });
    } catch (e) { /* getTotalLength unsupported (hidden/headless) — arc stays drawn */ }
  }, []);

  return (
    <div className="journey7">
      {/* ===== DESKTOP — arc journey ===== */}
      <div className="j7-stage">
        <svg className="j7-path" viewBox="0 0 1600 720" preserveAspectRatio="none">
          <defs>
            <linearGradient id="j7grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c8102e"/>
              <stop offset="50%" stopColor="#e25a3a"/>
              <stop offset="100%" stopColor="#7a0a1b"/>
            </linearGradient>
            <pattern id="j7dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" fill="#c8102e" opacity=".25"/>
            </pattern>
            <marker id="j7arrow" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="5" markerHeight="5" orient="auto-start-reverse" markerUnits="strokeWidth">
              <path d="M 0 0 L 12 6 L 0 12 L 3 6 Z" fill="#7a0a1b"/>
            </marker>
          </defs>
          <line x1="0" y1="640" x2="1600" y2="640" stroke="#1a0a0a" strokeWidth="2"/>
          <line x1="0" y1="648" x2="1600" y2="648" stroke="#c8102e" strokeWidth="1" strokeDasharray="3 6"/>
          <path d="M 80 600 Q 400 -120 800 120 Q 1200 360 1520 600" fill="url(#j7dots)" stroke="none" opacity=".45" transform="translate(0,-20)"/>
          <path ref={arcRef} id="j7arc"
            d="M 80 600 C 260 600, 280 250, 470 240 C 640 232, 660 110, 800 110 C 940 110, 980 250, 1130 280 C 1290 312, 1320 540, 1520 600"
            fill="none" stroke="url(#j7grad)" strokeWidth="6" strokeLinecap="round" markerEnd="url(#j7arrow)"/>
          <path d="M 80 612 C 260 612, 280 262, 470 252 C 640 244, 660 122, 800 122 C 940 122, 980 262, 1130 292 C 1290 324, 1310 540, 1490 595"
            fill="none" stroke="#c8102e" strokeWidth="2" opacity=".18"/>
        </svg>

        <div className="j7-ground left">
          <div className="ico">出</div>
          <div><small>Origin Country</small>現地（送出国）</div>
        </div>
        <div className="j7-ground right">
          <div><small>Return / Transition</small>帰国 ・ 特定技能 1 号</div>
          <div className="ico">帰</div>
        </div>

        {JOURNEY_STEPS.map((s) => (
          <React.Fragment key={s.n}>
            <div className={`j7-step ${s.phase}`} style={{ left: `${s.sx}%`, top: `${s.sy}%`, "--delay": s.delay }}>
              <div className="j7-card">
                <span className="j7-duration">{s.dur}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </div>
            <div className={`j7-badge ${s.phase}`} style={{ left: `${s.bx}%`, top: `${s.by}%`, "--delay": s.delay }}>
              <span className="n">{s.n}</span><span className="dot"></span>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* ===== MOBILE — vertical snaking timeline ===== */}
      <div className="j7-stage-m">
        <div className="j7-chip">
          <div className="ico">出</div>
          <div><small>Origin Country</small>現地（送出国）</div>
        </div>
        <ol className="j7-journey">
          <svg className="j7-spine" viewBox="0 0 56 980" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="j7gradM" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c8102e"/>
                <stop offset="55%" stopColor="#e25a3a"/>
                <stop offset="100%" stopColor="#7a0a1b"/>
              </linearGradient>
              <marker id="j7arrowM" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="5" markerHeight="5" orient="auto-start-reverse" markerUnits="strokeWidth">
                <path d="M 0 0 L 12 6 L 0 12 L 3 6 Z" fill="#7a0a1b"/>
              </marker>
            </defs>
            <path d="M 28 10 C 50 80, 6 140, 28 210 C 50 280, 6 340, 28 410 C 50 480, 6 540, 28 610 C 50 680, 6 740, 28 810 C 50 880, 28 940, 28 970"
              fill="none" stroke="url(#j7gradM)" strokeWidth="4" strokeLinecap="round" markerEnd="url(#j7arrowM)"/>
          </svg>
          {JOURNEY_STEPS.map((s) => (
            <li key={s.n} className={`j7-step-m ${s.phase}`}>
              <div className="j7-badge-m"><span className="n">{s.n}</span><span className="dot"></span></div>
              <div className="j7-card-m">
                <span className="j7-duration">{s.dur}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="j7-chip">
          <div className="ico">帰</div>
          <div><small>Return / Transition</small>帰国 ・ 特定技能 1 号</div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { ProcessDiagram, JOURNEY_STEPS });

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
function FieldsDiagram() {
  const props = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const ip = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const zones = [
    {
      cls: "z1", en: "BUILD & MANUFACTURING", jp: "建設・製造業界",
      icon: <svg {...props}><path d="M2 20h20"/><path d="M5 20V8l5 4V8l5 4V8l4 4v8"/></svg>,
      items: [
        { label: "建設", icon: <svg {...ip}><path d="M4 16a8 8 0 0 1 16 0"/><path d="M2.5 16h19v2.4h-19z"/><path d="M9.5 8.4V8a2.5 2.5 0 0 1 5 0v.4"/></svg> },
        { label: "造船・舶用工業", icon: <svg {...ip}><path d="M3 15l1.5 4.3a1 1 0 0 0 .95.7h13.1a1 1 0 0 0 .95-.7L21 15z"/><path d="M5.5 15V9h5.5l4 6"/><path d="M9 9V5"/><path d="M5.5 9h5.5"/></svg> },
        { label: "自動車整備", icon: <svg {...ip}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-5.3 5.3 3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.3-.6-.6-2.3z"/></svg> },
        { label: "工業製品製造業", icon: <svg {...ip}><circle cx="12" cy="12" r="3.2"/><path d="M12 4.5V7M12 17v2.5M4.5 12H7M17 12h2.5M6.7 6.7l1.8 1.8M15.5 15.5l1.8 1.8M17.3 6.7l-1.8 1.8M8.5 15.5l-1.8 1.8"/></svg> },
      ]
    },
    {
      cls: "z2", en: "CARE & SERVICE", jp: "介護・サービス業界",
      icon: <svg {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
      items: [
        { label: "介護", icon: <svg {...ip}><path d="M12 9.3C12 7.5 10.5 6 8.6 6 6.8 6 5.3 7.5 5.3 9.3c0 2.4 3.4 4.7 6.7 6.7 3.3-2 6.7-4.3 6.7-6.7C18.7 7.5 17.2 6 15.4 6 13.5 6 12 7.5 12 9.3z"/><path d="M3.5 20c2.4-1.8 14.6-1.8 17 0"/></svg> },
        { label: "ビルクリーニング", icon: <svg {...ip}><path d="M9 9.5h4.5a1 1 0 0 1 1 1V19a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2v-8.5a1 1 0 0 1 1-1z"/><path d="M9 9.5V6.5h3v3"/><path d="M12 6.5h3.5"/><path d="M16 5.3l1.6-.6M16 7.7l1.6.6M17.5 6.5h1.6"/></svg> },
        { label: "宿泊", icon: <svg {...ip}><path d="M3 18v-4.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2V18"/><path d="M3 18v2M21 18v2"/><path d="M3 14.5h18"/><path d="M7 11.5v-2h5v2"/></svg> },
        { label: "外食業", icon: <svg {...ip}><path d="M6 3v6a2 2 0 0 0 4 0V3"/><path d="M8 11v10"/><path d="M16.5 3c-1.6 0-2.6 2.4-2.6 5.5 0 2.5 1.1 3.5 2.6 3.5v9"/></svg> },
      ]
    },
    {
      cls: "z3", en: "FOOD & AGRICULTURE", jp: "農林水産・食品業界",
      icon: <svg {...props}><path d="M12 2v8M12 14a4 4 0 0 1-4-4V6a4 4 0 0 1 8 0v4a4 4 0 0 1-4 4z"/><path d="M5 22h14M7 22V14M17 22V14"/></svg>,
      items: [
        { label: "農業", icon: <svg {...ip}><path d="M12 21v-9"/><path d="M12 13c-4 0-6.5-2.5-6.5-6.5C9.5 6.5 12 9 12 13z"/><path d="M12 11c0-3.5 2.5-5.5 6-5.5C18 9 15.5 11 12 11z"/></svg> },
        { label: "漁業", icon: <svg {...ip}><path d="M3.5 12c2.6-4.2 9.4-4.2 12 0-2.6 4.2-9.4 4.2-12 0z"/><path d="M15.5 12 21 8v8z"/><circle cx="7" cy="11" r="0.9"/></svg> },
        { label: "飲食料品製造業", icon: <svg {...ip}><ellipse cx="12" cy="6" rx="5" ry="1.8"/><path d="M7 6v12c0 1 2.2 1.8 5 1.8s5-.8 5-1.8V6"/><path d="M7 10.5c0 1 2.2 1.8 5 1.8s5-.8 5-1.8"/></svg> },
        { label: "木材産業", icon: <svg {...ip}><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.8"/></svg> },
      ]
    },
    {
      cls: "z4", en: "TRANSPORT & MOVE", jp: "運輸・移動関連業界",
      icon: <svg {...props}><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg>,
      items: [
        { label: "自動車運送業", icon: <svg {...ip}><path d="M2 7h11v8.5H2z"/><path d="M13 10h4l3 3v2.5h-7z"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg> },
        { label: "鉄道", icon: <svg {...ip}><rect x="6" y="4" width="12" height="13" rx="2.5"/><path d="M6 11h12"/><path d="M9.5 7h5"/><path d="M8.5 21l2-3M15.5 21l-2-3"/><circle cx="9" cy="14" r="0.7"/><circle cx="15" cy="14" r="0.7"/></svg> },
        { label: "航空", icon: <svg {...ip}><path d="M21 15.5v-1.8L13.5 9V4.3a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.2l-2 1.4v1.3l3.5-1 3.5 1v-1.3l-2-1.4v-4.2z"/></svg> },
        { label: "林業", icon: <svg {...ip}><path d="M12 3l4 6h-2.5l3 5H14v4h-4v-4H7.5l3-5H8z"/><path d="M12 18v3"/></svg> },
      ]
    }
  ];
  return (
    <div className="fz-grid">
      {zones.map((z, i) => (
        <div key={i} className={`fz-zone ${z.cls}`}>
          <div className="fz-head">
            <div className="fz-icon">{z.icon}</div>
            <div className="fz-title">
              <span className="en">{z.en}</span>
              <span className="jp">{z.jp}</span>
            </div>
          </div>
          <div className="fz-items">
            {z.items.map((it, j) => (
              <div key={j} className="fz-item">
                <div className="fz-item-icon">{it.icon}</div>
                <div className="fz-item-label">{it.label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="fz-note">※現時点で16分野。将来の制度改正により、分野の追加・名称変更の可能性があります。</div>
    </div>
  );
}
Object.assign(window, { FieldsDiagram });

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
      <div className="ind-icons-note">建設・製造・農業をはじめ、特定産業16分野に対応しています。<br/>※具体的な数値データは出典確認後に掲載します。</div>
    </div>
  );
}
Object.assign(window, { IndustryIcons });
