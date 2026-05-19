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
              <path d="M8 12l3 3 5-6"/>
            </svg>
          </div>
          <div>
            <div className="assurance-label">ASSURANCE / 03</div>
            <div className="assurance-title">
              <strong>受入企業 継続率 98%</strong><br/>
              <span style={{fontSize:12, color:"var(--ink-soft)", letterSpacing:"0.06em"}}>18年・1,240名の受入実績に裏打ちされた安心</span>
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
          <h3>育成就労 経験者</h3>
          <div className="sub-cond">（旧・技能実習経験者を含む）</div>
          <div className="pathway-req">
            <span className="lbl">REQUIREMENT</span>
            育成就労を 3 年間（または技能実習 2 号を）<br/>
            <strong>良好に修了</strong> していること<br/>
            <span style={{fontSize:11.5, color:"var(--ink-mute)"}}>※ 技能試験・日本語試験は免除</span>
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
            <div className="desc">監理団体（当組合）による監理。N4・特定技能1号水準の技能習得を目標。</div>
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

        <div style={{marginTop:32, padding:"20px 28px", background:"var(--bg-soft)", borderRadius:6, fontSize:13.5, lineHeight:1.9, color:"var(--ink)", textAlign:"center", letterSpacing:"0.06em"}}>
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
   PROCESS — 7-step VERTICAL TIMELINE (育成就労)
   ============================================================ */
function ProcessDiagram() {
  const props = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const steps = [
    { h: "事前ご相談・要件整理", p: "業種・職種・人数・希望時期を伺い、最適な受入計画をご提案いたします。",
      icon: <svg {...props}><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg> },
    { h: "送出機関とのマッチング", p: "提携している送出機関より候補者を選定。書類審査・オンライン面接を実施します。",
      icon: <svg {...props}><circle cx="8" cy="10" r="3"/><circle cx="16" cy="14" r="3"/><path d="M5 21v-2a3 3 0 0 1 3-3M16 17h.5A2.5 2.5 0 0 1 19 19.5V21"/></svg> },
    { h: "雇用契約・在留資格申請", p: "受入企業様と候補者で雇用契約を締結。在留資格認定証明書を申請します。",
      icon: <svg {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/></svg> },
    { h: "入国・入国後講習（2ヶ月）", p: "グループ内日本語学校にて、日本語・生活ルール・職種別講習を集中的に実施します。", accent: true,
      icon: <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg> },
    { h: "配属・実務開始", p: "受入企業様への配属。初期の定着まで組合担当者が継続的にフォローいたします。",
      icon: <svg {...props}><path d="M2 20h20"/><path d="M5 20V8l5 4V8l5 4V8l4 4v8"/></svg> },
    { h: "監理・継続支援（3年間）", p: "定期巡回・面談・キャリア相談・トラブル対応をワンストップで実施します。",
      icon: <svg {...props}><path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg> },
    { h: "特定技能への移行 or 帰国", p: "本人の希望とスキルに応じて、グループ内登録支援機関がそのまま支援を継続します。",
      icon: <svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg> },
  ];
  return (
    <div className="ptl">
      {steps.map((s, i) => (
        <div key={i} className={`ptl-row ${s.accent ? "accent" : ""}`}>
          <div className="ptl-badge">{String(i+1).padStart(2,"0")}</div>
          <div className="ptl-card">
            <div className="ptl-card-text">
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
            <div className="ptl-card-icon">{s.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
Object.assign(window, { ProcessDiagram });

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
  const zones = [
    {
      cls: "z1", en: "BUILD & MANUFACTURING", jp: "建設・製造業界",
      icon: <svg {...props}><path d="M2 20h20"/><path d="M5 20V8l5 4V8l5 4V8l4 4v8"/></svg>,
      items: ["建設", "造船・舶用工業", "自動車整備", "素形材・産業機械・電気電子"]
    },
    {
      cls: "z2", en: "CARE & SERVICE", jp: "介護・サービス業界",
      icon: <svg {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
      items: ["介護", "ビルクリーニング", "宿泊", "外食業"]
    },
    {
      cls: "z3", en: "FOOD & AGRICULTURE", jp: "農林水産・食品業界",
      icon: <svg {...props}><path d="M12 2v8M12 14a4 4 0 0 1-4-4V6a4 4 0 0 1 8 0v4a4 4 0 0 1-4 4z"/><path d="M5 22h14M7 22V14M17 22V14"/></svg>,
      items: ["農業", "漁業", "飲食料品製造業", "木材産業"]
    },
    {
      cls: "z4", en: "TRANSPORT & MOVE", jp: "運輸・移動関連業界",
      icon: <svg {...props}><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg>,
      items: ["自動車運送業", "鉄道", "航空", "林業"]
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
          <div className="fz-chips">
            {z.items.map((it, j) => (
              <div key={j} className="fz-chip">
                <span className="dot"></span>{it}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
Object.assign(window, { FieldsDiagram });
