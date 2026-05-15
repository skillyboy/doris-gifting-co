import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';

/* Figma spec:
   Height: 90px | Padding: 30px top/bottom, 80px left/right
   Border-bottom: 1px | Flow: Horizontal | Justify: space-between */

export default function Nav({ page, go, mobile, onMenu }) {
  const onAbout = page === 'about' && !mobile;
  const linkColor = onAbout ? '#fff' : 'var(--brown-mid)';
  const borderColor = onAbout ? 'rgba(255,255,255,0.25)' : 'var(--line)';

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      height: mobile ? 'auto' : 90,
      padding: mobile ? '16px 24px' : '30px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${borderColor}`,
      background: onAbout
        ? 'transparent'
        : mobile
          ? 'var(--cream)'
          : 'rgba(231,224,214,0.92)',
      backdropFilter: mobile ? 'none' : 'blur(8px)',
      WebkitBackdropFilter: mobile ? 'none' : 'blur(8px)',
    }}>
      <div onClick={() => go('home')} style={{ cursor: 'pointer' }}>
        <Logo size={mobile ? 'sm' : 'md'} tone={onAbout ? 'light' : 'dark'} />
      </div>

      {mobile ? (
        <button
          onClick={onMenu}
          aria-label="Open menu"
          style={{
            background: 'transparent',
            border: 0,
            color: linkColor,
            fontSize: 22,
            padding: 4,
            cursor: 'pointer',
          }}
        >
          ☰
        </button>
      ) : (
        <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {NAV_ITEMS.map((it) => {
            const active = page === it.id;
            return (
              <button
                key={it.id}
                onClick={() => go(it.id)}
                style={{
                  background: 'transparent',
                  border: 0,
                  color: linkColor,
                  fontSize: 15,
                  fontFamily: 'var(--sans)',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  padding: '4px 0',
                  borderBottom: active
                    ? `1px solid ${linkColor}`
                    : '1px solid transparent',
                  cursor: 'pointer',
                  lineHeight: 1.5,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => !active && (e.currentTarget.style.opacity = '0.6')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {it.label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}
