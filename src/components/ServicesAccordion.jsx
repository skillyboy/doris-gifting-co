import React, { useState } from 'react';
import { SERVICES, IMG } from '../constants';

export default function ServicesAccordion({ mobile }) {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ width: '100%' }}>
      {SERVICES.map((s, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderTop: '1px solid #E5E1DA', padding: '20px 0' }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                padding: 0,
                color: 'var(--brown-deep)',
                fontFamily: 'var(--sans)',
                fontSize: mobile ? 20 : 24,
                fontWeight: 500,
                letterSpacing: '-0.04em',
                lineHeight: 1.4,
              }}
            >
              <span>{s.title}</span>
              <span style={{ fontSize: 22, color: 'var(--brown-deep)', fontWeight: 300 }}>
                {isOpen ? '×' : '+'}
              </span>
            </button>
            {isOpen && (
              <div style={{ paddingTop: 14 }}>
                <div style={{ color: 'var(--ink-soft)', fontSize: 14, marginBottom: 8, lineHeight: 1.6 }}>
                  {s.intro}
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--ink-soft)', fontSize: 14, lineHeight: 1.8 }}>
                  {s.bullets.map((b, k) => <li key={k}>{b}</li>)}
                </ul>
                {mobile && (
                  <div style={{
                    marginTop: 18,
                    height: 220,
                    backgroundImage: 'url(' + IMG.g6 + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 4,
                  }} />
                )}
              </div>
            )}
          </div>
        );
      })}
      <div style={{ borderTop: '1px solid #E5E1DA' }} />
    </div>
  );
}
