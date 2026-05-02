// Doris — root app: page state, nav, mobile menu, viewport simulation, tweaks.

const DORIS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "viewport": "auto",
  "page": "home",
  "accent": "#967259",
  "headingFont": "Cormorant Garamond",
  "showFrame": false
}/*EDITMODE-END*/;

const VP_OPTIONS = [
  { label: 'Auto',    value: 'auto' },
  { label: 'Mobile',  value: 'mobile' },
  { label: 'Tablet',  value: 'tablet' },
  { label: 'Desktop', value: 'desktop' },
];

// Hook: track real window width so layout follows the actual device when in auto mode.
function useWindowWidth() {
  const [w, setW] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  React.useEffect(() => {
    const onR = () => setW(window.innerWidth);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
  return w;
}
const PAGE_OPTIONS = [
  { label: 'Home',    value: 'home' },
  { label: 'About',   value: 'about' },
  { label: 'Gallery', value: 'gallery' },
  { label: 'Contact', value: 'contact' },
];
const ACCENT_OPTIONS = [
  { label: 'Bronze', value: '#967259' },
  { label: 'Olive',  value: '#6f6a3d' },
  { label: 'Plum',   value: '#6b3a4a' },
  { label: 'Ink',    value: '#2c2520' },
];
const FONT_OPTIONS = [
  { label: 'Cormorant', value: 'Cormorant Garamond' },
  { label: 'Playfair',  value: 'Playfair Display' },
];

function App() {
  const [tweaks, setTweak] = useTweaks(DORIS_DEFAULTS);
  const [menuOpen, setMenuOpen] = React.useState(false);

  // page state mirrors the tweak so user nav clicks update the persisted tweak
  const page = tweaks.page || 'home';
  const go = (id) => {
    setTweak('page', id);
    // scroll the frame back to top on navigation
    requestAnimationFrame(() => window.scrollTo({ top: 0 }));
  };

  // accent color → CSS var
  React.useEffect(() => {
    document.documentElement.style.setProperty('--bronze', tweaks.accent);
  }, [tweaks.accent]);

  // heading font override
  React.useEffect(() => {
    let el = document.getElementById('__doris-serif-override');
    if (!el) {
      el = document.createElement('style');
      el.id = '__doris-serif-override';
      document.head.appendChild(el);
    }
    el.textContent = `.serif { font-family: '${tweaks.headingFont}', 'Cormorant Garamond', serif !important; }`;
  }, [tweaks.headingFont]);

  // Resolve viewport: 'auto' follows real window width; otherwise honor the tweak override.
  const winW = useWindowWidth();
  const requestedVp = tweaks.viewport || 'auto';
  const autoVp = winW < 720 ? 'mobile' : winW < 1100 ? 'tablet' : 'desktop';
  const vp = requestedVp === 'auto' ? autoVp : requestedVp;
  const mobile = vp === 'mobile';
  const transparentNav = (page === 'home' || page === 'about'); // overlays the hero image

  // close menu when page changes
  React.useEffect(() => { setMenuOpen(false); }, [page]);

  let PageComp = HomePage;
  if (page === 'about')   PageComp = AboutPage;
  if (page === 'gallery') PageComp = GalleryPage;
  if (page === 'contact') PageComp = ContactPage;
  if (page === 'services') PageComp = HomePage; // services uses Home for now

  return (
    <React.Fragment>
      <div className={`doris-stage ${tweaks.showFrame ? '' : 'bare'}`}>
        <div className={`doris-frame vp-${requestedVp === 'auto' ? 'auto' : vp}`} style={{ position: 'relative' }}>
          {/* nav (overlays hero on Home/About; otherwise sits on cream/white) */}
          <Nav
            page={page}
            go={go}
            mobile={mobile}
            onMenu={() => setMenuOpen(true)}
            transparent={transparentNav}
          />

          <PageComp mobile={mobile} go={go} />

          <Footer mobile={mobile} go={go} />

          {mobile && menuOpen && (
            <MobileMenu page={page} go={go} onClose={() => setMenuOpen(false)} />
          )}
        </div>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Preview" />
        <TweakRadio
          label="Viewport"
          value={tweaks.viewport}
          onChange={(v) => setTweak('viewport', v)}
          options={VP_OPTIONS}
        />
        <TweakSelect
          label="Page"
          value={tweaks.page}
          onChange={(v) => setTweak('page', v)}
          options={PAGE_OPTIONS}
        />
        <TweakToggle
          label="Show frame"
          value={tweaks.showFrame}
          onChange={(v) => setTweak('showFrame', v)}
        />

        <TweakSection label="Brand" />
        <TweakRadio
          label="Accent"
          value={tweaks.accent}
          onChange={(v) => setTweak('accent', v)}
          options={ACCENT_OPTIONS}
        />
        <TweakSelect
          label="Heading serif"
          value={tweaks.headingFont}
          onChange={(v) => setTweak('headingFont', v)}
          options={FONT_OPTIONS}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
