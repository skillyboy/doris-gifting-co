import React from 'react';
import { IMG } from '../constants';
import CTABanner from '../components/CTABanner';
import Reveal from '../components/Reveal';

const EMAIL = 'hello@dorisgifting.co';
const PHONE_DISPLAY = '+1 (301) 364-6072';
const PHONE_HREF    = '+13013646072';

export default function Contact({ mobile, go }) {
  return (
    <div>
      <div style={{
        background: 'var(--cream)',
        padding: mobile ? '110px 24px 24px' : '140px 80px 32px',
        textAlign: 'center',
      }}>
        <Reveal>
          <h1 className="serif" style={{
            margin: 0,
            color: 'var(--bronze)',
            fontSize: mobile ? 36 : 44,
            fontWeight: 500,
          }}>
            Contact Us
          </h1>
        </Reveal>
      </div>

      <div style={{ background: 'var(--cream)', padding: mobile ? '24px' : '0 80px 80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
          gap: mobile ? 28 : 80,
          alignItems: 'flex-start',
        }}>
          <Reveal>
            <div style={{
              width: '100%',
              aspectRatio: mobile ? '4 / 5' : '5 / 6',
              backgroundImage: `url(${IMG.contactHand})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
            }} />
          </Reveal>

          <Reveal delay={100}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--ink)', marginBottom: 16 }}>
              GET IN TOUCH
            </div>
            <p style={{ margin: '0 0 36px', fontSize: 14, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 460 }}>
              Whether you're curating a special gift, planning a corporate order, or need help bringing your vision to life,
              we're here to help. Reach out today and let us create something thoughtful, beautiful, and truly memorable.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              rowGap: 26,
              columnGap: 32,
              marginBottom: 40,
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Email</div>
                <a
                  href={`mailto:${EMAIL}`}
                  style={{ fontSize: 13, color: 'var(--ink-soft)', textDecoration: 'none' }}
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Address</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Houston, Texas</div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Phone Number</div>
                <a
                  href={`tel:${PHONE_HREF}`}
                  style={{ fontSize: 13, color: 'var(--ink-soft)', textDecoration: 'none' }}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: 'inline-block',
                background: 'var(--bronze)',
                color: '#fff',
                border: 0,
                padding: '14px 32px',
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.02em',
                cursor: 'pointer',
                textDecoration: 'none',
                fontFamily: 'var(--sans)',
              }}
            >
              Email Us
            </a>
          </Reveal>
        </div>
      </div>

      <CTABanner
        headline="Let's Create something thoughtful for you"
        sub="Will respond in few minutes"
        button="Email Us"
        mobile={mobile}
        go={go}
      />
    </div>
  );
}
