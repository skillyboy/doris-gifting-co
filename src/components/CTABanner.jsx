import React from 'react';
import { IMG } from '../constants';

export default function CTABanner({ mobile, go }) {
  return (
    <section style={{
      width: '100%',
      // top padding gives cream breathing room so the rounded image
      // doesn't fuse with the brown testimonials section above
      padding: mobile ? '56px 24px' : '80px',
      background: '#E7E0D6',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 1440,
        margin: '0 auto',
        height: mobile ? 360 : 648,
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url(' + IMG.giftWall + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: mobile ? 18 : 28,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: mobile ? 24 : 40,
      }}>
        <h2
          className="serif"
          style={{
            margin: 0,
            color: '#fff',
            fontSize: mobile ? 30 : 56,
            lineHeight: 1.05,
            fontWeight: 400,
            maxWidth: 800,
          }}
        >
          Let's Create something thoughtful for you
        </h2>
        <p style={{
          color: '#fff',
          fontSize: mobile ? 13 : 15,
          opacity: 0.9,
          margin: mobile ? '14px 0 22px' : '20px 0 32px',
          maxWidth: 520,
        }}>
          We respond in five minutes.
        </p>
        <button onClick={() => go('contact')} className="btn-filled">
          Email Us
        </button>
      </div>
    </section>
  );
}
