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

// TODO(client): 4法人の資本・親子関係、各社の住所・事業内容の詳細は未確定です。確定後に desc を更新してください。
const GROUP = [
  { role: "組合本体",  name: "亜細亜交流事業協同組合",       desc: "監理支援機関。育成就労制度における受入監理・支援を担う中核です。" },
  { role: "グループ会社", name: "株式会社ループ",            desc: "{{TODO: 事業内容}}" },
  { role: "グループ会社", name: "株式会社ループ管財",        desc: "{{TODO: 事業内容}}" },
  { role: "グループ会社", name: "ループインターナショナル日本語学校", desc: "登録支援機関。特定技能外国人の法定10項目支援を担当します。" },
];

// TODO(client): お知らせの実記事（3〜5件）は未確定です。下記はすべて仮の見本（ダミー）です。実記事の確定後に差し替えてください。
const NEWS = [
  { date: "{{TODO: 日付}}", cat: "お知らせ", catClass: "cat-org",    title: "{{TODO: お知らせのタイトル①（これは仮の見本です）}}" },
  { date: "{{TODO: 日付}}", cat: "お知らせ", catClass: "cat-system", title: "{{TODO: お知らせのタイトル②（これは仮の見本です）}}" },
];

const NEWS_CATS = ["すべて", "制度改正", "組合より", "セミナー", "受入実績", "グループ", "その他"];

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

Object.assign(window, {
  PHOTOS, NAV, STRENGTHS, INDUSTRY_DATA, GROUP, NEWS, NEWS_CATS, CASES, IKUSEI_STEPS
});
