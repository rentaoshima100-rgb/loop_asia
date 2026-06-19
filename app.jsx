/* Main app — router + Tweaks panel */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#C8102E", "#8E0B20", "#FBECEE"],
  "headingFont": "mincho",
  "showTweaks": false
}/*EDITMODE-END*/;

const PALETTE_OPTIONS = [
  ["#C8102E", "#8E0B20", "#FBECEE"], // Red & white — Loop brand (default)
  ["#0E8276", "#F25C3D", "#DDEFE9"], // Pop: vivid teal + coral
  ["#0B6B92", "#F5B221", "#DAEBF2"], // Pop: deep blue + gold
  ["#7A2D7D", "#FF8A65", "#F1E6F1"], // Pop: plum + peach
  ["#1F4438", "#C75D3E", "#F6F3EC"], // Editorial: forest & terracotta
  ["#0B2545", "#C9A961", "#F2EFE7"], // Formal: navy & gold
];

/* CSS variable maps for each palette option */
function applyPalette(palette) {
  const [primary, accent, bgSoft] = palette;
  const root = document.documentElement;
  root.style.setProperty("--primary", primary);
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--bg-soft", bgSoft);
  /* derived: lighten toward white so soft tones stay legible on dark sections
     (--accent-soft is used on dark hero / CTA / footer backgrounds). */
  root.style.setProperty("--primary-soft", mixColors(primary, "#FFFFFF", 0.16));
  root.style.setProperty("--accent-soft", mixColors(accent, "#FFFFFF", 0.5));
  /* deep bg slightly tinted toward primary */
  const tinted = mixColors(primary, "#0A0E0D", 0.55);
  root.style.setProperty("--bg-deep", tinted);
}

function applyFont(name) {
  const root = document.documentElement;
  if (name === "mincho") {
    root.style.setProperty("--font-serif", `"Shippori Mincho B1","Noto Serif JP","Hiragino Mincho ProN","Yu Mincho",serif`);
  } else if (name === "gothic") {
    /* use gothic for headings */
    root.style.setProperty("--font-serif", `"Noto Sans JP","Hiragino Kaku Gothic ProN","Yu Gothic",system-ui,sans-serif`);
  } else if (name === "notoserif") {
    root.style.setProperty("--font-serif", `"Noto Serif JP","Shippori Mincho B1","Yu Mincho",serif`);
  }
}

function mixColors(a, b, t) {
  const pa = parseHex(a), pb = parseHex(b);
  const r = Math.round(pa[0]*(1-t) + pb[0]*t);
  const g = Math.round(pa[1]*(1-t) + pb[1]*t);
  const bl = Math.round(pa[2]*(1-t) + pb[2]*t);
  return `rgb(${r},${g},${bl})`;
}
function parseHex(h) {
  const x = h.replace("#","");
  return [parseInt(x.slice(0,2),16), parseInt(x.slice(2,4),16), parseInt(x.slice(4,6),16)];
}

/* ページ毎の <title> / meta description。ハッシュルーティングでも、JS を実行する
   クローラー（Google 等）が各ページに応じた title/description を取得できるようにする。 */
const PAGE_META = {
  home:        { title: "亜細亜交流事業協同組合 ｜ 育成就労・特定技能の受入を一貫支援（日本語学校併設）",
                 desc: "監理支援機関として、育成就労・特定技能による外国人材の受入を、入国前の日本語教育から定着まで一貫支援。日本語学校・登録支援機関をグループ内に保有し、アジア9カ国に対応します。" },
  ikusei:      { title: "育成就労制度 ｜ 亜細亜交流事業協同組合",
                 desc: "2027年4月開始の育成就労制度を、監理支援機関としてわかりやすくご案内。在留期間・日本語要件・転籍・受入の流れ、入国後講習までを一貫支援します。" },
  tokutei:     { title: "特定技能制度 ｜ 亜細亜交流事業協同組合",
                 desc: "特定技能制度による即戦力人材の受入を、グループ内登録支援機関が法定10項目の支援も含めて一貫サポート。16の特定産業分野に対応します。" },
  about:       { title: "組合案内 ｜ 亜細亜交流事業協同組合",
                 desc: "代表挨拶・組合概要・グループ法人体系・事業内容・アクセスのご案内。大阪を拠点に、監理支援機関として外国人材の受入を支援する協同組合です。" },
  cases:       { title: "活躍事例 ｜ 亜細亜交流事業協同組合",
                 desc: "受入企業の現場で活躍する外国人材の事例と本人の声。対応送出国9カ国、特定産業16分野、累計受入実績1,821人。" },
  news:        { title: "お知らせ ｜ 亜細亜交流事業協同組合",
                 desc: "制度改正情報・組合からのお知らせ・セミナー/イベント情報など、外国人材の受入にまつわる最新情報をお届けします。" },
  faq:         { title: "よくあるご質問 ｜ 亜細亜交流事業協同組合",
                 desc: "育成就労・特定技能の受入をご検討の企業様から多くいただくご質問を、制度・費用・手続き・サポート等のカテゴリ別にまとめました。" },
  contact:     { title: "お問い合わせ ｜ 亜細亜交流事業協同組合",
                 desc: "受入のご検討・ご相談は、お電話・FAX、またはお問い合わせフォームよりお気軽にご連絡ください。資料請求のみのご相談も歓迎です。" },
  privacy:     { title: "プライバシーポリシー ｜ 亜細亜交流事業協同組合",
                 desc: "亜細亜交流事業協同組合の個人情報保護方針。個人情報の利用目的・第三者提供・安全管理措置・開示等の請求・お問い合わせ窓口について記載しています。" },
  regulations: { title: "各種規定 ｜ 亜細亜交流事業協同組合",
                 desc: "監理支援機関としての各種規定。業務の運営に関する規程の公開、許可番号・許可日のご案内を掲載しています。" },
};

function applyPageMeta(page) {
  const m = PAGE_META[page] || PAGE_META.home;
  document.title = m.title;
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", m.desc);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const hash = useHash();

  useEffect(() => { applyPalette(t.palette); }, [t.palette]);
  useEffect(() => { applyFont(t.headingFont); }, [t.headingFont]);

  const page = (hash || "home").split("=")[0];

  useEffect(() => { applyPageMeta(page); }, [page]);
  let PageComp = HomePage;
  if (page === "ikusei") PageComp = IkuseiPage;
  else if (page === "tokutei") PageComp = TokuteiPage;
  else if (page === "about") PageComp = AboutPage;
  else if (page === "cases") PageComp = CasesPage;
  else if (page === "news") PageComp = NewsPage;
  else if (page === "faq") PageComp = FaqPage;
  else if (page === "contact") PageComp = ContactPage;
  else if (page === "news-detail") PageComp = NewsDetailPage;
  else if (page === "case-detail") PageComp = CaseDetailPage;
  else if (page === "privacy") PageComp = PrivacyPage;
  else if (page === "regulations") PageComp = RegulationsPage;

  return (
    <div data-screen-label={`page: ${page}`}>
      <Header />
      <PageComp key={hash} />
      <Footer />
      {/* 開発用のカラー/フォント切替パネル。公開時は TWEAK_DEFAULTS.showTweaks=false で非表示。 */}
      {t.showTweaks && (
        <TweaksPanel title="Tweaks">
          <TweakSection label="カラーパレット" />
          <TweakColor
            label="Palette (Primary / Accent / Soft)"
            value={t.palette}
            options={PALETTE_OPTIONS}
            onChange={(v) => setTweak("palette", v)}
          />
          <TweakSection label="見出しフォント" />
          <TweakSelect
            label="Heading font"
            value={t.headingFont}
            options={[
              { value: "mincho",    label: "Shippori Mincho B1（明朝・推奨）" },
              { value: "notoserif", label: "Noto Serif JP（明朝・標準的）" },
              { value: "gothic",    label: "Noto Sans JP（ゴシック）" },
            ]}
            onChange={(v) => setTweak("headingFont", v)}
          />
        </TweaksPanel>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
