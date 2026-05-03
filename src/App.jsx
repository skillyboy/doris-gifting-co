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

const PAGES = { home: Home, services: Services, about: About, gallery: Gallery, contact: Contact };

export default function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const winW = useWindowWidth();
  const mobile = winW < 720;
  const transparentNav = page === 'home' || page === 'about' || page === 'services';

  const go = (id) => {
    setPage(id);
    setMenuOpen(false);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  };

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
