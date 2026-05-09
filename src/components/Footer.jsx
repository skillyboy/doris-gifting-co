import React from 'react';
import Logo from './Logo';

const links = {
  important: [
    { label: 'About Us', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
  ],
  company: [
    { label: 'Privacy Policy' },
    { label: 'Terms of Service' },
  ],
};

export default function Footer({ mobile, go }) {
  return (
    <footer style={{ background: '#fff', padding: mobile ? '40px 24px 24px' : '64px 80px 32px', borderTop: '1px solid #E5E1DA' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1.4fr 1fr 1fr 1fr',
        gap: mobile ? 28 : 60,
        alignItems: 'start',
        marginBottom: mobile ? 28 : 48,
      }}>
        <div>
          <Logo size="md" />
        </div>

        <div>
          <div style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--brown-deep)',
            marginBottom: 14,
            letterSpacing: '0.02em',
          }}>Important Links</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {links.important.map((l, i) => (
              <li key={i}>
                <button
                  onClick={() => l.id && go(l.id)}
                  style={{ background: 'transparent', border: 0, padding: 0, color: 'var(--ink-soft)', fontSize: 14, cursor: 'pointer', fontFamily: 'var(--sans)' }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--brown-deep)',
            marginBottom: 14,
            letterSpacing: '0.02em',
          }}>Company</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {links.company.map((l, i) => (
              <li key={i} style={{ color: 'var(--ink-soft)', fontSize: 14 }}>{l.label}</li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--brown-deep)',
            marginBottom: 14,
            letterSpacing: '0.02em',
          }}>Find us On Social Media</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Facebook', 'Instagram', 'Tiktok'].map((l) => (
              <li key={l} style={{ color: 'var(--ink-soft)', fontSize: 14 }}>{l}</li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid #E5E1DA',
        paddingTop: 18,
        textAlign: 'center',
        color: 'var(--ink-mute)',
        fontSize: 12,
      }}>
        © 2026 Doris Gifting. All rights reserved.
      </div>
    </footer>
  );
}
