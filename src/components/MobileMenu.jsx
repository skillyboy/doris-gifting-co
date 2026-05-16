import React, { useEffect } from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';

export default function MobileMenu({ page, go, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'var(--cream)',
      zIndex: 100,
      animation: 'doris-fade 240ms ease',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Logo size="sm" />
        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{ background: 'transparent', border: 0, color: 'var(--brown-mid)', fontSize: 26, padding: 4, cursor: 'pointer' }}
        >
          ×
        </button>
      </div>
      <nav style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 28,
      }}>
        {NAV_ITEMS.map((it) => (
          <button
            key={it.id}
            onClick={() => go(it.id)}
            className="serif"
            style={{
              background: 'transparent',
              border: 0,
              color: page === it.id ? 'var(--brown-deep)' : 'var(--brown-mid)',
              fontSize: 32,
              cursor: 'pointer',
            }}
          >
            {it.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
