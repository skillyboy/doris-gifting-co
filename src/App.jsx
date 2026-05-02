import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';
import TweaksPanel from './components/TweaksPanel';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function useWindowWidth() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  useEffect(() => {
    const onR = () => setW(window.innerWidth);
    window.addEventListener('resize', onR, { passive: true });
    return () => window.removeEventListener('resize', onR);
  }, []);
  return w;
}

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

const PAGES = { home: Home, about: About, gallery: Gallery, contact: Contact };

export default function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [accent, setAccent] = useState('#967259');
  const [headingFont, setHeadingFont] = useState('Cormorant Garamond');

  const winW = useWindowWidth();
  const mobile = winW < 720;
  const transparentNav = page === 'home' || page === 'about';

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
    <>
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

      <TweaksPanel
        accent={accent}
        onAccent={setAccent}
        accentOptions={ACCENT_OPTIONS}
        headingFont={headingFont}
        onHeadingFont={setHeadingFont}
        fontOptions={FONT_OPTIONS}
      />
    </>
  );
}
