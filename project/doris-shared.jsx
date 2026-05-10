// Doris — shared layout pieces (Nav, Footer, CTA banner, image map)

const IMG = {
  // hero / banners — real Doris assets
  storeInterior: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1600&q=80&auto=format&fit=crop',
  giftWall:      '../public/img/cta-wall.png',
  giftWall2:     '../public/img/cta-wall.png',
  contactHand:   '../public/img/g-casa.jpg',
  founder:       '../public/img/founder.png',
  workshop:      '../public/img/cta-wall.png',
  // gallery items — real product photography
  g1: '../public/img/g-vmo.jpg',         // Corporate Gifting (VMO + miniwood)
  g2: '../public/img/g-arhaus.jpg',      // Bulk Orders (Arhaus tote rows)
  g3: '../public/img/g-huxley.jpg',      // Custom Gift Boxes (Huxley)
  g4: '../public/img/g-casa.jpg',        // Bulk Orders (Casa Nahua)
  g5: '../public/img/g-refy.jpg',        // Custom Gift Boxes (Refy)
  g6: '../public/img/g-happybday.jpg',   // Special Occasion (Happy Birthday)
  g7: '../public/img/g-vmo.jpg',
  g8: '../public/img/g-huxley.jpg',
  g9: '../public/img/g-casa.jpg',
  g10:'../public/img/g-refy.jpg',
  // testimonial avatars
  a1: 'https://i.pravatar.cc/120?img=47',
  a2: 'https://i.pravatar.cc/120?img=32',
  a3: 'https://i.pravatar.cc/120?img=12',
  a4: 'https://i.pravatar.cc/120?img=5',
  a5: 'https://i.pravatar.cc/120?img=20',
  a6: 'https://i.pravatar.cc/120?img=49',
};

const NAV = [
  { id: 'home',    label: 'Home' },
  { id: 'services',label: 'Services' },
  { id: 'about',   label: 'About Us' },
  { id: 'contact', label: 'Contact Us' },
];

// ─── Top Nav (desktop + mobile) ──────────────────────────────────

function Nav({ page, go, mobile, onMenu, transparent }) {
  const linkColor = transparent ? '#fff' : 'var(--ink)';
  const padX = mobile ? 18 : 56;
  return (
    <div
      style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 5,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: `${mobile ? 18 : 28}px ${padX}px`,
      }}
    >
      <button
        onClick={() => go('home')}
        style={{ background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}
        aria-label="Doris Home"
      >
        <DorisLogo size={mobile ? 0.6 : 0.75} color={transparent ? '#fff' : 'var(--bronze)'} />
      </button>

      {mobile ? (
        <button
          onClick={onMenu}
          aria-label="Menu"
          style={{
            width: 40, height: 40, border: 0, background: 'transparent',
            display: 'grid', placeItems: 'center', padding: 0, cursor: 'pointer',
          }}
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
            <line x1="1" y1="2" x2="21" y2="2" stroke={linkColor} strokeWidth="1.6" strokeLinecap="round"/>
            <line x1="1" y1="12" x2="21" y2="12" stroke={linkColor} strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {NAV.map((n) => {
            const active = n.id === page;
            return (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                style={{
                  background: 'transparent', border: 0, padding: 0,
                  fontFamily: 'var(--sans)', fontSize: 14, fontWeight: active ? 600 : 500,
                  color: linkColor, opacity: active ? 1 : 0.85, letterSpacing: '0.01em',
                  cursor: 'pointer',
                  borderBottom: active ? `1px solid ${transparent ? '#fff' : 'var(--bronze)'}` : '1px solid transparent',
                  paddingBottom: 2,
                }}
              >
                {n.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Mobile menu overlay ─────────────────────────────────────────

function MobileMenu({ go, onClose, page }) {
  return (
    <div
      style={{
        position: 'absolute', inset: 0, zIndex: 50,
        background: '#fff',
        display: 'flex', flexDirection: 'column',
        padding: '24px 24px 32px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <DorisLogo size={0.95} />
        <button
          aria-label="Close menu"
          onClick={onClose}
          style={{
            width: 40, height: 40, border: 0, background: 'transparent', padding: 0,
            display: 'grid', placeItems: 'center', cursor: 'pointer',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <line x1="3" y1="3" x2="19" y2="19" stroke="var(--bronze)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="19" y1="3" x2="3" y2="19" stroke="var(--bronze)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28, paddingLeft: 4 }}>
        {NAV.map((n) => (
          <button
            key={n.id}
            onClick={() => { go(n.id); onClose(); }}
            style={{
              background: 'transparent', border: 0, padding: 0, textAlign: 'left',
              fontFamily: 'var(--sans)',
              fontSize: 30, color: 'var(--bronze-deep)',
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
          background: 'var(--bronze)', color: '#fff', border: 0,
          padding: '20px 0', borderRadius: 12,
          fontSize: 22, fontFamily: 'var(--sans)', fontWeight: 400,
          cursor: 'pointer',
        }}
      >
        Let's Talk
      </button>
    </div>
  );
}

// ─── CTA banner ("Plan your dream event" / "Let's Create…") ───────

function CTABanner({ headline, sub, button, mobile, go }) {
  const h = mobile ? 280 : 360;
  return (
    <div style={{ background: 'var(--cream)', padding: mobile ? '0' : '0 56px' }}>
      <div
        style={{
          position: 'relative', height: h,
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.50), rgba(0,0,0,0.55)), url(${IMG.giftWall})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          borderRadius: mobile ? 0 : 4,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            color: '#fff', textAlign: 'center', padding: '0 24px', gap: 12,
          }}
        >
          <div className="serif" style={{ fontSize: mobile ? 32 : 44, lineHeight: 1.1 }}>{headline}</div>
          <div style={{ fontSize: 14, color: '#fff', opacity: 0.9 }}>{sub}</div>
          <button
            onClick={() => go && go('contact')}
            style={{
              marginTop: 14,
              background: '#fff', color: 'var(--ink)', border: 0,
              padding: '12px 30px', borderRadius: 6, fontSize: 14, fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────

function Footer({ mobile, go }) {
  const cols = (
    <React.Fragment>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 14 }}>Important Links</div>
        <button onClick={() => go('about')} style={footLinkStyle}>About Us</button>
        <button onClick={() => go('gallery')} style={footLinkStyle}>Gallery</button>
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 14 }}>Company</div>
        <div style={footLinkStyle}>Privacy Policy</div>
        <div style={footLinkStyle}>Terms of Service</div>
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 14 }}>Find us On Social Media</div>
        <div style={footLinkStyle}>Facebook</div>
        <div style={footLinkStyle}>Instagram</div>
        <div style={footLinkStyle}>Tiktok</div>
      </div>
    </React.Fragment>
  );

  return (
    <div style={{ background: 'var(--cream)', padding: mobile ? '40px 24px 24px' : '64px 56px 28px' }}>
      {mobile ? (
        <React.Fragment>
          <DorisLogo size={0.85} />
          <div style={{ height: 36 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 24, rowGap: 28 }}>
            {cols}
          </div>
        </React.Fragment>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', columnGap: 48, alignItems: 'start' }}>
          <DorisLogo size={0.95} />
          {cols}
        </div>
      )}
      <div
        style={{
          borderTop: '1px solid var(--line)',
          marginTop: mobile ? 32 : 56, paddingTop: 18,
          fontSize: 12, color: 'var(--ink-mute)', textAlign: 'center',
        }}
      >
        &copy; 2026 Doris Gifting Co. All rights reserved.
      </div>
    </div>
  );
}

const footLinkStyle = {
  display: 'block',
  background: 'transparent', border: 0, padding: 0, textAlign: 'left',
  fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-soft)',
  marginBottom: 10, cursor: 'pointer',
};

// ─── Section title (italic bronze, centered) ─────────────────────

function SectionTitle({ children, eyebrow, align = 'center', mobile, color }) {
  return (
    <div style={{ textAlign: align, marginBottom: 24 }}>
      {eyebrow && (
        <div style={{
          fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--ink-soft)', marginBottom: 14,
        }}>{eyebrow}</div>
      )}
      <h2 className="serif" style={{
        margin: 0, color: color || 'var(--bronze)',
        fontSize: mobile ? 32 : 40, lineHeight: 1.1, fontWeight: 500,
      }}>{children}</h2>
    </div>
  );
}

Object.assign(window, {
  IMG, NAV, Nav, MobileMenu, CTABanner, Footer, SectionTitle,
});
