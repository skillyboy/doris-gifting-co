import React from 'react';
import Logo from './Logo';

const footLinkStyle = {
  display: 'block',
  background: 'transparent',
  border: 0,
  padding: 0,
  textAlign: 'left',
  fontFamily: 'var(--sans)',
  fontSize: 13,
  color: 'var(--ink-soft)',
  marginBottom: 10,
  cursor: 'pointer',
};

export default function Footer({ mobile, go }) {
  const cols = (
    <>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 14 }}>
          Important Links
        </div>
        <button onClick={() => go('about')} style={footLinkStyle}>About Us</button>
        <button onClick={() => go('gallery')} style={footLinkStyle}>Portfolio</button>
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 14 }}>
          Company
        </div>
        <div style={footLinkStyle}>Privacy Policy</div>
        <div style={footLinkStyle}>Terms of Service</div>
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 14 }}>
          Find us On Social Media
        </div>
        <div style={footLinkStyle}>Instagram</div>
        <div style={footLinkStyle}>Tiktok</div>
      </div>
    </>
  );

  return (
    <div style={{ background: 'var(--cream)', padding: mobile ? '40px 24px 24px' : '64px 56px 28px' }}>
      {mobile ? (
        <>
          <Logo size={0.85} />
          <div style={{ height: 36 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 24, rowGap: 28 }}>
            {cols}
          </div>
        </>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          columnGap: 48,
          alignItems: 'start',
        }}>
          <Logo size={0.95} />
          {cols}
        </div>
      )}
      <div
        style={{
          borderTop: '1px solid var(--line)',
          marginTop: mobile ? 32 : 56,
          paddingTop: 18,
          fontSize: 12,
          color: 'var(--ink-mute)',
          textAlign: 'center',
        }}
      >
        © 2026 Doris Gifting Co. All rights reserved.
      </div>
    </div>
  );
}
