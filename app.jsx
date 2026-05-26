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

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const hash = useHash();

  useEffect(() => { applyPalette(t.palette); }, [t.palette]);
  useEffect(() => { applyFont(t.headingFont); }, [t.headingFont]);

  const page = (hash || "home").split("=")[0];
  let PageComp = HomePage;
  if (page === "ikusei") PageComp = IkuseiPage;
  else if (page === "tokutei") PageComp = TokuteiPage;
  else if (page === "about") PageComp = AboutPage;
  else if (page === "cases") PageComp = CasesPage;
  else if (page === "news") PageComp = NewsPage;
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
