/* Shared data — photos, content fragments, news, cases */

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

const INDUSTRY_DATA = [
  { name: "建設業",   pct: 78, count: "約 90 万人" },
  { name: "介護",     pct: 72, count: "約 38 万人" },
  { name: "飲食料品", pct: 68, count: "約 22 万人" },
  { name: "宿泊",     pct: 65, count: "約 14 万人" },
  { name: "製造業",   pct: 60, count: "約 38 万人" },
  { name: "農業",     pct: 55, count: "約 13 万人" },
];

const GROUP = [
  { role: "PARENT",      name: "亜細亜交流事業協同組合", desc: "監理団体／組合本体。育成就労の受入監理を担う中核。" },
  { role: "GROUP 02",    name: "亜細亜日本語学院",       desc: "入国後講習およびオンライン日本語教育を提供する認定校。" },
  { role: "GROUP 03",    name: "アジアサポート（株）",   desc: "登録支援機関。特定技能外国人の生活・就労支援を提供。" },
  { role: "GROUP 04",    name: "亜細亜人材紹介（株）",   desc: "送出機関ネットワークの構築と、現地での候補者選定を担当。" },
];

const NEWS = [
  { date: "2026.05.12", cat: "制度改正", catClass: "cat-system", title: "【重要】2027年4月施行 育成就労制度に関する政省令・告示の最新動向について" },
  { date: "2026.04.28", cat: "セミナー", catClass: "cat-event",  title: "建設業向け｜育成就労・特定技能 合同オンライン説明会（6/14開催）受付開始" },
  { date: "2026.04.10", cat: "組合より", catClass: "cat-org",    title: "ベトナム・フエ省の送出機関3社と新たに業務提携契約を締結いたしました" },
  { date: "2026.03.22", cat: "グループ", catClass: "cat-group",  title: "亜細亜日本語学院、2026年度入学式を執り行いました（受入実習生 42名）" },
  { date: "2026.03.05", cat: "制度改正", catClass: "cat-system", title: "特定技能2号、受入分野が拡大されました（11分野→16分野）" },
  { date: "2026.02.18", cat: "受入実績", catClass: "cat-org",    title: "2025年度 受入実績のご報告：累計派遣 1,240名（前年比 +18%）" },
];

const NEWS_CATS = ["すべて", "制度改正", "組合より", "セミナー", "受入実績", "グループ", "その他"];

const CASES = [
  { country: "VIETNAM", industry: "建設業", title: "技能実習から特定技能2号へ。リーダーとして現場を牽引。", photo: PHOTOS.case1, company: "K建設工業株式会社" },
  { country: "INDONESIA", industry: "介護", title: "N3を取得し、利用者ご家族からの信頼を得る存在に。", photo: PHOTOS.case3, company: "社会福祉法人 さくら会" },
  { country: "PHILIPPINES", industry: "農業", title: "繁忙期を支える即戦力。3年目で作業班長を任される。", photo: PHOTOS.case2, company: "JA北信州 提携農家" },
  { country: "MYANMAR", industry: "食品製造", title: "ラインの主力として、新人指導まで担うように。", photo: PHOTOS.case4, company: "山田食品工業株式会社" },
  { country: "VIETNAM", industry: "宿泊", title: "多言語対応で外国人ゲストにも好評の若手スタッフ。", photo: PHOTOS.case5, company: "湯本温泉 老舗旅館" },
  { country: "NEPAL", industry: "飲食料品", title: "勤勉さと丁寧な仕事ぶりが、社内表彰につながる。", photo: PHOTOS.case6, company: "東京デリカ株式会社" },
];

const IKUSEI_STEPS = [
  { label: "①  事前ご相談・要件整理",    body: "受入分野・職種・人数・希望時期を伺い、最適な受入計画をご提案します。" },
  { label: "②  送出機関とのマッチング",  body: "提携送出機関より候補者を選定。書類審査・オンライン面接を実施します。" },
  { label: "③  雇用契約・在留資格申請",  body: "受入企業様と候補者で雇用契約を締結。在留資格認定証明書を申請します。" },
  { label: "④  入国・入国後講習（2ヶ月）", body: "グループ内日本語学校にて、日本語・生活ルール・職種別講習を実施。", accent: true },
  { label: "⑤  配属・実務開始",           body: "受入企業様への配属。組合担当が初期定着までフォローします。" },
  { label: "⑥  監理・継続支援（3年間）",  body: "定期巡回・面談・キャリア相談・トラブル対応をワンストップで実施。" },
  { label: "⑦  特定技能への移行 or 帰国", body: "本人の希望とスキルに応じて、グループ内登録支援機関がそのまま支援を継続。" },
];

Object.assign(window, {
  PHOTOS, NAV, STRENGTHS, INDUSTRY_DATA, GROUP, NEWS, NEWS_CATS, CASES, IKUSEI_STEPS
});
