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

const ICON_SIZE = 20;

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dorisgiftingco',
    icon: (
      <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    icon: (
      <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 3c.32 2.13 1.62 3.58 3.5 3.86v2.55c-1.43 0-2.74-.41-3.84-1.12v6.55c0 3.2-2.37 5.66-5.42 5.66-3.05 0-5.24-2.46-5.24-5.66 0-2.93 2.1-5.27 4.96-5.46v2.59c-1.32.18-2.36 1.29-2.36 2.66 0 1.58 1.16 2.82 2.7 2.82 1.53 0 2.7-1.24 2.7-2.82V3h3z" />
      </svg>
    ),
  },
];

export default function Footer({ mobile, go }) {
  return (
    <footer style={{ background: '#fff', padding: mobile ? '40px 24px 20px' : '64px 80px 20px', borderTop: '1px solid var(--line)' }}>
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
          }}>Follow Us</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {SOCIALS.map((s) => {
              const base = {
                color: 'var(--ink-soft)',
                display: 'inline-flex',
                transition: 'color 0.2s',
              };
              return s.href ? (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  style={base}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brown-deep)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-soft)')}
                >
                  {s.icon}
                </a>
              ) : (
                <span key={s.label} aria-label={s.label} title={s.label} style={base}>
                  {s.icon}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid var(--line)',
        paddingTop: 18,
        textAlign: 'center',
        color: 'var(--ink-mute)',
        fontSize: 12,
      }}>
        &copy; 2026 Doris Gifting Co. All rights reserved.
      </div>
    </footer>
  );
}
