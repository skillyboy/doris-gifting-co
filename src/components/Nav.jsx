import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';

export default function Nav({ page, go, mobile, onMenu, transparent }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showBg = !transparent || scrolled;
  const linkColor = showBg ? 'var(--ink)' : '#fff';
  const padX = mobile ? 18 : 56;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `${mobile ? 16 : 24}px ${padX}px`,
        background: showBg ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: showBg ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: showBg ? 'blur(8px)' : 'none',
        borderBottom: showBg ? '1px solid var(--line)' : 'none',
        transition: 'background 320ms ease, border-color 320ms ease',
      }}
    >
      <button
        onClick={() => go('home')}
        style={{ background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}
        aria-label="Doris Home"
      >
        <Logo size={0.95} />
      </button>

      {mobile ? (
        <button
          onClick={onMenu}
          aria-label="Open menu"
          style={{
            width: 40,
            height: 40,
            border: 0,
            background: 'transparent',
            display: 'grid',
            placeItems: 'center',
            padding: 0,
            cursor: 'pointer',
          }}
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
            <line x1="1" y1="2" x2="21" y2="2" stroke={linkColor} strokeWidth="1.6" strokeLinecap="round"/>
            <line x1="1" y1="12" x2="21" y2="12" stroke={linkColor} strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>
      ) : (
        <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {NAV_ITEMS.map((n) => {
            const active = n.id === page;
            return (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                style={{
                  background: 'transparent',
                  border: 0,
                  padding: '0 0 2px',
                  fontFamily: 'var(--sans)',
                  fontSize: 14,
                  fontWeight: active ? 600 : 500,
                  color: linkColor,
                  opacity: active ? 1 : 0.85,
                  letterSpacing: '0.01em',
                  cursor: 'pointer',
                  borderBottom: active
                    ? `1px solid ${showBg ? 'var(--bronze)' : '#fff'}`
                    : '1px solid transparent',
                }}
              >
                {n.label}
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
