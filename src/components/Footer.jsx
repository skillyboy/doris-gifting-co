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
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/dorisgiftingco' },
    { label: 'Instagram', href: 'https://www.instagram.com/dorisgiftingco' },
    { label: 'WhatsApp', href: 'https://wa.me/13013646072' },
  ],
};

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
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: 12 }}>
            <li>
              <a
                href="https://www.facebook.com/dorisgiftingco"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--brown-deep)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  textDecoration: 'none',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#c9a24d'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--brown-deep)'}
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dorisgiftingco"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--brown-deep)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  textDecoration: 'none',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#c9a24d'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--brown-deep)'}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/13013646072"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--brown-deep)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  textDecoration: 'none',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#c9a24d'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--brown-deep)'}
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
          </ul>
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