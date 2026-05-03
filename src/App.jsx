import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Services from './pages/Services';

function useWindowWidth() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  useEffect(() => {
    const onR = () => setW(window.innerWidth);
    window.addEventListener('resize', onR, { passive: true });
    return () => window.removeEventListener('resize', onR);
  }, []);
  return w;
}

// Time of day → accent. Day of week → heading font.
//   morning   05–11  Bronze   warm, fresh start
//   afternoon 12–16  Olive    natural, grounded
//   evening   17–20  Plum     rich, golden hour
//   night     21–04  Ink      quiet, deep
function autoTheme(now = new Date()) {
  const h = now.getHours();
  const accent =
    h >= 5  && h < 12 ? '#967259' :
    h >= 12 && h < 17 ? '#6f6a3d' :
    h >= 17 && h < 21 ? '#6b3a4a' :
                        '#2c2520';
  // Mon–Thu → Cormorant (editorial weekday). Fri–Sun → Playfair (display weekend).
  const dow = now.getDay();
  const headingFont = dow >= 1 && dow <= 4 ? 'Cormorant Garamond' : 'Playfair Display';
  return { accent, headingFont };
}

function useAutoTheme() {
  const [theme, setTheme] = useState(() => autoTheme());
  useEffect(() => {
    const id = setInterval(() => setTheme(autoTheme()), 60_000);
    return () => clearInterval(id);
  }, []);
  return theme;
}

const PAGES = { home: Home, services: Services, about: About, gallery: Gallery, contact: Contact };

export default function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const { accent, headingFont } = useAutoTheme();

  const winW = useWindowWidth();
  const mobile = winW < 720;
  const transparentNav = page === 'home' || page === 'about' || page === 'services';

  const go = (id) => {
    setPage(id);
    setMenuOpen(false);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--bronze', accent);
  }, [accent]);

  useEffect(() => {
    let el = document.getElementById('__doris-serif-override');
    if (!el) {
      el = document.createElement('style');
      el.id = '__doris-serif-override';
      document.head.appendChild(el);
    }
    el.textContent = `.serif { font-family: '${headingFont}', 'Cormorant Garamond', serif !important; }`;
  }, [headingFont]);

  const PageComp = PAGES[page] || Home;

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
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
  );
}
