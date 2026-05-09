import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';

export default function Nav({ page, go, mobile, onMenu, transparent }) {
  const linkColor = 'var(--brown-mid)';
  const padX = mobile ? 24 : 80;

  return (
    <header style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: mobile ? '20px 24px' : '40px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'transparent',
    }}>
      <div onClick={() => go('home')} style={{ cursor: 'pointer' }}>
        <Logo size={mobile ? 'sm' : 'md'} />
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
                  fontSize: 16,
                  fontFamily: 'var(--sans)',
                  fontWeight: 400,
                  letterSpacing: 0,
                  padding: '4px 0',
                  borderBottom: active ? '1px solid ' + linkColor : '1px solid transparent',
                  cursor: 'pointer',
                  lineHeight: 1.5,
                }}
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
