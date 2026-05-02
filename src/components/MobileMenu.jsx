import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';

export default function MobileMenu({ page, go, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 24px 32px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Logo size={0.95} />
        <button
          aria-label="Close menu"
          onClick={onClose}
          style={{
            width: 40,
            height: 40,
            border: 0,
            background: 'transparent',
            padding: 0,
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <line x1="3" y1="3" x2="19" y2="19" stroke="var(--bronze)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="19" y1="3" x2="3" y2="19" stroke="var(--bronze)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 28,
        paddingLeft: 4,
      }}>
        {NAV_ITEMS.map((n) => (
          <button
            key={n.id}
            onClick={() => { go(n.id); onClose(); }}
            style={{
              background: 'transparent',
              border: 0,
              padding: 0,
              textAlign: 'left',
              fontFamily: 'var(--sans)',
              fontSize: 30,
              color: 'var(--bronze-deep)',
              fontWeight: page === n.id ? 600 : 400,
              cursor: 'pointer',
            }}
          >
            {n.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => { go('contact'); onClose(); }}
        style={{
          background: 'var(--bronze)',
          color: '#fff',
          border: 0,
          padding: '20px 0',
          borderRadius: 12,
          fontSize: 22,
          fontFamily: 'var(--sans)',
          fontWeight: 400,
          cursor: 'pointer',
        }}
      >
        Let's Talk
      </button>
    </div>
  );
}
