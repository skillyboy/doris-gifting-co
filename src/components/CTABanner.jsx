import React from 'react';
import { IMG } from '../constants';

export default function CTABanner({ headline, sub, button, mobile, go }) {
  const h = mobile ? 280 : 360;
  return (
    <div style={{ background: 'var(--cream)', padding: mobile ? '0' : '0 56px' }}>
      <div
        style={{
          position: 'relative',
          height: h,
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.50), rgba(0,0,0,0.55)), url(${IMG.giftWall})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: mobile ? 0 : 4,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '0 24px',
            gap: 12,
          }}
        >
          <div className="serif" style={{ fontSize: mobile ? 32 : 44, lineHeight: 1.1 }}>
            {headline}
          </div>
          <div style={{ fontSize: 14, color: '#fff', opacity: 0.9 }}>{sub}</div>
          <button
            onClick={() => go && go('contact')}
            style={{
              marginTop: 14,
              background: '#fff',
              color: 'var(--ink)',
              border: 0,
              padding: '12px 30px',
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 500,
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
