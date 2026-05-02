import React, { useState } from 'react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';

export default function ServicesAccordion({ mobile, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      {SERVICES.map((s, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={s.title} delay={i * 60}>
            <div
              style={{
                borderBottom: '1px solid var(--line)',
                padding: mobile ? '18px 0' : '22px 0',
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'transparent',
                  border: 0,
                  padding: 0,
                  textAlign: 'left',
                  cursor: 'pointer',
                  gap: 16,
                }}
              >
                <div style={{
                  fontSize: mobile ? 15 : 16,
                  fontWeight: 600,
                  color: 'var(--ink)',
                }}>
                  {s.title}
                </div>
                <span
                  aria-hidden="true"
                  style={{
                    width: 22,
                    height: 22,
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--bronze)',
                    fontSize: 20,
                    lineHeight: 1,
                    flexShrink: 0,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 280ms ease',
                  }}
                >
                  +
                </span>
              </button>

              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  transition: 'grid-template-rows 320ms ease',
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ paddingTop: 12, fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                    {s.intro}
                  </div>
                  <ul style={{
                    margin: '8px 0 4px',
                    paddingLeft: 18,
                    fontSize: 13,
                    color: 'var(--ink-soft)',
                    lineHeight: 1.8,
                  }}>
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
