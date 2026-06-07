/* Shared data — photos, content fragments, news, cases */

// TODO(client): 写真はすべて仮のストック画像（Unsplash）です。実素材の到着後に差し替えてください。
const PHOTOS = {
  hero:        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=85&auto=format&fit=crop",
  heroAlt:     "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=2000&q=85&auto=format&fit=crop",
  intro:       "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&q=80&auto=format&fit=crop",
  ikuseiCover: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&q=80&auto=format&fit=crop",
  tokuteiCover:"https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1400&q=80&auto=format&fit=crop",
  oneStop:     "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80&auto=format&fit=crop",
  classroom:   "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&q=80&auto=format&fit=crop",
  construction:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80&auto=format&fit=crop",
  factory:     "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&q=80&auto=format&fit=crop",
  agriculture: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80&auto=format&fit=crop",
  care:        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&q=80&auto=format&fit=crop",
  food:        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80&auto=format&fit=crop",
  ctaBg:       "https://images.unsplash.com/photo-1542013936693-884638332954?w=2000&q=80&auto=format&fit=crop",
  portrait:    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&q=85&auto=format&fit=crop",
  aboutHero:   "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=2000&q=80&auto=format&fit=crop",
  ikuseiHero:  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=80&auto=format&fit=crop",
  tokuteiHero: "https://images.unsplash.com/photo-1542219550-37153d387c27?w=2000&q=80&auto=format&fit=crop",
  caseHero:    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=2000&q=80&auto=format&fit=crop",
  newsHero:    "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=2000&q=80&auto=format&fit=crop",
  contactHero: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=2000&q=80&auto=format&fit=crop",
  case1: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
  case2: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80&auto=format&fit=crop",
  case3: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80&auto=format&fit=crop",
  case4: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&auto=format&fit=crop",
  case5: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop",
  case6: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&q=80&auto=format&fit=crop",
};

const NAV = [
  { id: "home",    label: "ホーム",       en: "HOME" },
  { id: "ikusei",  label: "育成就労",     en: "TRAINING" },
  { id: "tokutei", label: "特定技能",     en: "SSW" },
  { id: "about",   label: "組合案内",     en: "ABOUT" },
  { id: "cases",   label: "活躍事例",     en: "CASES" },
  { id: "news",    label: "お知らせ",     en: "NEWS" },
  { id: "faq",     label: "よくあるご質問", en: "FAQ" },
  { id: "contact", label: "お問い合わせ", en: "CONTACT" },
];

const STRENGTHS = [
  {
    num: "01",
    title: "日本語学校を\nグループ内に保有",
    body: "入国後講習から日々の日本語教育まで、グループ内日本語学校が一貫対応。N4・N3取得を見据えた体系的なカリキュラムで、現場で「伝わる日本語」を育てます。",
    icon: "book",
  },
  {
    num: "02",
    title: "登録支援機関を\nグループ内に保有",
    body: "特定技能への移行・直接受入も、グループ内登録支援機関がそのまま支援を継続。法定10項目の支援を、引き継ぎロスなく安定して提供します。",
    icon: "shield",
  },
  {
    num: "03",
    title: "監理から定着まで\nワンストップ",
    body: "受入準備・入国手続・配属後の監理・面談・転籍支援まで、組合・日本語学校・登録支援機関が一体運用。窓口を分散させず、一貫した品質で伴走します。",
    icon: "flow",
  },
];

// TODO(client): 業界別 人手不足データ。下記の％は出典の最終確認が必要です（パーソル総研・厚労省ほかの推計値）。
// 確定した数値・出典に差し替えてください。
const INDUSTRY_DATA = [
  { name: "建設業",   pct: 78, count: "約 90 万人" },
  { name: "介護",     pct: 72, count: "約 38 万人" },
  { name: "飲食料品", pct: 68, count: "約 22 万人" },
  { name: "宿泊",     pct: 65, count: "約 14 万人" },
  { name: "製造業",   pct: 60, count: "約 38 万人" },
  { name: "農業",     pct: 55, count: "約 13 万人" },
];

// 4法人の役割。資本・親子関係・各社の住所などの詳細は別途確認。
// 要確認：登録支援機関の帰属が資料間で矛盾（Checklist3=ループ管財／Checklist2hanei・現行サイト=日本語学校）。
//         確定まで凍結。ループ管財の事業内容も未確定（管財＝不動産/資産管理の可能性）。
//         → 登録支援機関の断定はどちらの法人にも置かない。
const GROUP = [
  { role: "組合本体",  name: "亜細亜交流事業協同組合",       desc: "監理支援機関。育成就労制度における受入監理・支援を担う中核です。" },
  { role: "グループ会社", name: "株式会社ループ",            desc: "建築・建設業。" },
  // 要確認：登録支援機関の帰属が資料間で矛盾（Checklist3=ループ管財／Checklist2hanei・現行サイト=日本語学校）。確定まで凍結。ループ管財の事業内容も未確定（管財＝不動産/資産管理の可能性）
  { role: "グループ会社", name: "株式会社ループ管財",        desc: "{{TODO: 事業内容｜要確認}}" },
  // 要確認：登録支援機関の帰属が資料間で矛盾（Checklist3=ループ管財／Checklist2hanei・現行サイト=日本語学校）。確定まで「登録支援機関」の断定をどちらの法人にも置かない
  { role: "グループ会社", name: "ループインターナショナル日本語学校", desc: "認定日本語教育機関。入国後講習および留学生等への日本語教育を担当します。" },
];

// お知らせのカテゴリ（承認案 A-6）。フィルタと記事 cat はこの体系に揃える。
const NEWS_CATS = ["すべて", "制度改正・行政情報", "組合からのお知らせ", "セミナー・イベント案内", "受入実績", "グループから", "その他"];

// カテゴリ → タグ配色クラス（cat-org=赤／cat-system=濃赤／cat-event=ゴールド）
function newsCatClass(cat) {
  switch (cat) {
    case "制度改正・行政情報":   return "cat-system";
    case "セミナー・イベント案内": return "cat-event";
    case "受入実績":             return "cat-org";
    case "グループから":         return "cat-org";
    default:                     return "cat-org"; // 組合からのお知らせ／その他
  }
}

// TODO(client): お知らせの実記事は Supabase（AI公開記事）から取得します。下記は接続できない場合のフォールバック見本です。
// 要確認：技能実習の制度情報は削除方針（Checklist2hanei 3-11）。お知らせの技能実習記事（「外国人技能実習生の受け入れ手順…」等）を
//         残す/再分類/削除するか要判断。記事の自動削除・自動改題はしない。
const NEWS = [
  { date: "{{TODO: 日付}}", cat: "組合からのお知らせ", catClass: newsCatClass("組合からのお知らせ"), title: "{{TODO: お知らせのタイトル①（これは仮の見本です）}}" },
  { date: "{{TODO: 日付}}", cat: "制度改正・行政情報", catClass: newsCatClass("制度改正・行政情報"), title: "{{TODO: お知らせのタイトル②（これは仮の見本です）}}" },
];

// TODO(client): 受入企業の実事例（3〜5件）・受入企業名の公開方法は未確定のため、事例は掲載していません。
// 確定後、{ country（対応送出国9カ国のみ）, industry, title, photo, company } 形式で追加してください。
const CASES = [];

const IKUSEI_STEPS = [
  { label: "①  ご加入・制度説明（〜1ヶ月）",        body: "受入分野・職種・人数・希望時期を伺い、最適な受入計画をご提案します。" },
  { label: "②  募集・選抜（1〜3ヶ月）",            body: "提携送出機関より候補者を選定。書類審査・オンライン面接を実施します。" },
  { label: "③  現地での事前教育（約6ヶ月）",       body: "入国前に、現地にて日本語・生活ルールの基礎教育を実施します。", accent: true },
  { label: "④  入国・入国後講習（約1ヶ月）",       body: "入国後、日本語・生活ルール・職種別講習を集中的に実施します。" },
  { label: "⑤  配属・育成就労開始（1年目〜）",     body: "受入企業様への配属。組合担当が初期定着まで継続的にフォローします。" },
  { label: "⑥  技能検定・継続（3年目以降）",       body: "定期巡回・面談・キャリア相談・技能習得状況の確認を実施します。" },
  { label: "⑦  帰国または特定技能1号への移行",     body: "本人の希望とスキルに応じて、登録支援機関がそのまま支援を継続します。" },
];

/* 組合によるサポート（Support）— 6項目。番号・タイトルは将来変更の可能性あり。
   出典：追加コンテンツ.pdf（A-4の用語ルールに従い「実習生」「技能実習」等を修正済み／
   送出国は9カ国で確定。ネパールは含まない）。 */
const SUPPORT = [
  { num: "01", title: "豊富な実績と信頼", icon: "shield",
    body: "設立以来、多数の受入企業様・外国人材（旧制度を含む）をサポートしてきた実績があります。蓄積されたノウハウと信頼ネットワークにより、スムーズな人材受入れを実現します。" },
  { num: "02", title: "入国前〜帰国後まで一貫サポート", icon: "flow",
    body: "ビザ申請・渡航準備・入国後講習・在留資格更新・帰国手続きまで、全プロセスを一括でサポート。企業様の事務負担を大幅に軽減します。" },
  { num: "03", title: "専任担当制による迅速な対応", icon: "phone",
    body: "受入企業様ごとに専任の担当者が付き、日常的な相談から緊急対応まで素早く対処します。育成就労外国人が母国語で相談できる外国人スタッフも在籍しています。些細なトラブルも初動が肝心。安心してお任せください。" },
  { num: "04", title: "日本語教育・試験対策等のサポート", icon: "book",
    /* 原文「技能評価試験」→育成就労ページの表記に合わせ「技能検定」に統一 */
    body: "入国後講習での日本語指導に加え、職場での実践的な日本語・ビジネスマナー教育を継続的にサポート。技能検定関連の対策も実施しています。" },
  { num: "05", title: "コンプライアンス重視の運営", icon: "shield",
    /* 原文「適正な技能実習制度の運営」→A-4に従い修正 */
    body: "法令遵守を最優先に、監理責任のある団体として適正な育成就労制度・特定技能制度の運営を行います。書類管理・定期監査・改善指導まで、法的リスクを低減します。" },
  { num: "06", title: "多様な送り出し国とのネットワーク", icon: "globe",
    /* 送出国は9カ国で確定（Checklist2hanei 3-6。ネパールは含まない） */
    body: "ベトナム・カンボジア・タイ・インドネシア・中国・モンゴル・バングラデシュ・スリランカ・ラオスの9カ国と連携。企業様のニーズに合った人材を安定的に供給できるネットワークを有しています。" },
];

/* FAQ（よくあるご質問）— カテゴリ別。Q&Aはこの配列で保持し、差し替えを容易に。
   依頼書7問＋追加2問を、A-4の用語ルール・事実に合わせて修正済み。
   要確認メモは各項目の note（実装時 <!-- --> 相当のコメント）に残す。 */
const FAQ_CATS = ["制度・受入全般", "費用", "手続き・スケジュール", "受入後・サポート", "トラブル対応"];
const FAQ_DATA = [
  { cat: "制度・受入全般",
    q: "育成就労と特定技能は何が違いますか？",
    a: "育成就労制度は「人材育成」と「人材確保」を目的とし、原則3年間で特定技能1号水準の技能習得を目指す制度です。一方、特定技能制度は、一定の技能を有する即戦力人材を受け入れる在留資格です。育成就労を修了された方は試験免除で特定技能1号へ移行できるため、当グループでは両制度を一貫してご支援しております。" },
  { cat: "制度・受入全般",
    q: "どんな仕事（職種・業種）に対応していますか？",
    a: "工業製品製造業、建設、自動車整備、飲食料品製造業、介護など、幅広い職種に対応しております。育成就労制度の業務区分に基づき、御社の業種に合った育成就労計画を作成いたします。対応分野の詳細は、出入国在留管理庁「育成就労制度に係る制度の運用に関する基本方針・分野別運用方針」をご確認ください。",
    link: { label: "出入国在留管理庁（分野別運用方針）", href: "https://www.moj.go.jp/isa/" } },
    /* 要確認: リンク先は 001457603.pdf（出入国在留管理庁の該当ページ）に差し替え予定 */
  { cat: "費用",
    q: "受入にかかるコストはどのくらいですか？",
    a: "初期費用（在留資格申請費用・入国後講習費用等）と、月額の監理支援費用が発生いたします。費用は受入人数・職種・送り出し国により異なりますので、まずはお見積りをご依頼ください。" },
  { cat: "手続き・スケジュール",
    q: "受入までにどのくらいの期間がかかりますか？",
    a: "申請手続き、選考、現地での事前教育期間などを含め、一般的に約7ヶ月後の就労開始が目安です。御社のご状況を踏まえた配属開始時期をご相談のうえ調整いたしますので、お気軽にお問い合わせください。" },
  { cat: "受入後・サポート",
    q: "育成就労外国人はすぐに戦力になりますか？",
    a: "入国後講習の修了時点で、基本的な日本語と職場でのマナーは習得しております。専門的な技術については就労開始後の指導が必要となりますが、3〜6ヶ月程度の慣熟期間を経て戦力として活躍されるケースが多くございます。" },
  { cat: "受入後・サポート",
    q: "育成就労外国人の住居はどうすればよいですか？",
    a: "企業様に宿舎をご用意いただく必要がございます。当組合では物件選定のお手伝いも可能ですので、お気軽にご相談ください。" },
    /* 要確認: 不動産事業の一文は、ループ管財の事業内容確定後に復活を検討（現状は削除のまま） */
  { cat: "受入後・サポート",
    q: "受入の途中で本人が転籍を希望した場合はどうなりますか？",
    a: "育成就労制度では、一定の条件を満たした場合に、本人の意思による転籍が可能です。当組合では転籍に関するご相談についても、企業様・ご本人双方のお立場に配慮して対応いたします。" },
  { cat: "トラブル対応",
    q: "技能検定や試験に不合格となった場合はどうなりますか？",
    /* 要確認: 「最長1年延長」等の制度記述は公開前に組合の最終チェックへ。原文の途切れた一文は整文済み。 */
    a: "技能検定や日本語試験に不合格となった場合、最長1年間の在留期間延長が可能です。その期間内の再試験にも合格できなかった場合は、在留資格の更新ができず帰国となります。当組合でも試験対策のサポートを行いますが、企業様による日常的な指導・学習支援も重要となります。" },
  { cat: "トラブル対応",
    q: "トラブルが発生した場合の窓口は？",
    /* 要確認: 原文「24時間対応の緊急連絡先」→「緊急時のご連絡先」に修正。24時間対応が事実なら戻す。 */
    a: "当組合が監理支援機関として、企業様・育成就労外国人双方の窓口となり対応いたします。些細なことでもお気軽にご相談ください。緊急時のご連絡先もご用意しております。" },
];

/* ── Live news from Supabase (AI-published posts) ──────────────────────────
   Published blog posts are written by the WP_AI chat assistant into Supabase.
   loop_asia reads them read-only via the public anon (publishable) key — RLS
   allows SELECT on `blogs` only (see WP_AI supabase/004_rls.sql). If Supabase is
   unreachable, the static NEWS above is used as a fallback. */
const SUPABASE_URL = "https://bqgcaqyorknixsjakyet.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_zk7s0gLx_2PQv8IISZAT-Q_4mwneiEU";
const _supa = (window.supabase && window.supabase.createClient)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

function fmtNewsDate(iso) {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const p = (n) => String(n).padStart(2, "0");
  return d.getFullYear() + "." + p(d.getMonth() + 1) + "." + p(d.getDate());
}
function blogToNews(b) {
  return {
    id: b.id,
    slug: b.slug,
    // Use the scheduled publish time when present (falls back to created_at).
    date: fmtNewsDate(b.publish_at || b.created_at),
    cat: b.category || "組合からのお知らせ",
    catClass: newsCatClass(b.category || "組合からのお知らせ"),
    title: b.title,
    excerpt: b.excerpt || "",
    body: b.content || "",
  };
}
async function loadNewsFromSupabase() {
  if (!_supa) return [];
  try {
    // Scheduled posts (publish_at in the future) are hidden server-side by RLS,
    // so this only ever returns already-published rows. Sort by publish time.
    let { data, error } = await _supa
      .from("blogs")
      .select("id,slug,title,excerpt,content,category,created_at,publish_at")
      .order("publish_at", { ascending: false });
    // Resilient: if publish_at doesn't exist yet (007 not run), fall back to the
    // original created_at query so posts still show.
    if (error) {
      ({ data, error } = await _supa
        .from("blogs")
        .select("id,slug,title,excerpt,content,category,created_at")
        .order("created_at", { ascending: false }));
    }
    if (error || !data) return [];
    return data.map(blogToNews);
  } catch (e) {
    return [];
  }
}

// Hook: published posts (cached on window), falling back to the static NEWS above.
function useNews() {
  const [news, setNews] = React.useState(window.__LOOP_NEWS || NEWS);
  React.useEffect(() => {
    if (window.__LOOP_NEWS) return;
    loadNewsFromSupabase().then((items) => {
      if (items && items.length) { window.__LOOP_NEWS = items; setNews(items); }
    });
  }, []);
  return news;
}

// Minimal, XSS-safe Markdown → HTML for news article bodies (escape first).
function renderNewsHTML(md) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const inline = (s) => {
    let out = esc(s);
    // Images: ![alt](url) → <img>. Escape-first; only allow http(s) URLs and
    // escape quotes so the URL/alt can't break out of the attributes.
    out = out.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_m, alt, url) => {
      if (!/^https?:\/\//i.test(url)) return "";
      const safeUrl = url.replace(/"/g, "%22");
      const safeAlt = String(alt).replace(/"/g, "&quot;");
      return (
        '<img src="' + safeUrl + '" alt="' + safeAlt + '" loading="lazy" ' +
        'style="max-width:100%;height:auto;border-radius:8px;display:block;margin:14px 0" />'
      );
    });
    out = out
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
    return out;
  };
  let html = "", inList = false;
  const close = () => { if (inList) { html += "</ul>"; inList = false; } };
  for (const raw of String(md || "").split(/\r?\n/)) {
    const line = raw.trim();
    let m;
    if (!line) { close(); }
    else if ((m = line.match(/^###\s+(.*)/))) { close(); html += "<h3>" + inline(m[1]) + "</h3>"; }
    else if ((m = line.match(/^##\s+(.*)/)))  { close(); html += "<h2>" + inline(m[1]) + "</h2>"; }
    else if ((m = line.match(/^#\s+(.*)/)))   { close(); html += "<h2>" + inline(m[1]) + "</h2>"; }
    else if ((m = line.match(/^[-*]\s+(.*)/))){ if (!inList) { html += "<ul>"; inList = true; } html += "<li>" + inline(m[1]) + "</li>"; }
    else if ((m = line.match(/^>\s+(.*)/)))   { close(); html += "<blockquote>" + inline(m[1]) + "</blockquote>"; }
    else { close(); html += "<p>" + inline(line) + "</p>"; }
  }
  close();
  return html;
}

Object.assign(window, {
  PHOTOS, NAV, STRENGTHS, INDUSTRY_DATA, GROUP, NEWS, NEWS_CATS, newsCatClass, CASES, IKUSEI_STEPS,
  SUPPORT, FAQ_CATS, FAQ_DATA,
  useNews, renderNewsHTML
});
