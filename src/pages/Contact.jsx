import React, { useState } from 'react';
import { IMG } from '../constants';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

export default function Contact({ mobile }) {
  const [sent, setSent] = useState(false);

  return (
    <div>

      {/* TOP SECTION — 1440×904, padding 80px, gap 50px, bg #E7E0D6 */}
      <section style={{
        background: '#E7E0D6',
        minHeight: mobile ? 'auto' : 904,
        padding: mobile
          ? '120px 24px 56px'
          : '170px 80px 80px',   /* 170 = 90px nav + 80px spec padding */
        display: 'flex',
        flexDirection: 'column',
        gap: mobile ? 32 : 50,
        boxSizing: 'border-box',
      }}>

        {/* Header row */}
        <Reveal>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 12,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--ink-soft)',
              marginBottom: 14,
              fontWeight: 500,
            }}>
              Contact
            </div>
            <SectionTitle mobile={mobile} size="lg">Contact Us</SectionTitle>
            <p style={{
              maxWidth: 600,
              margin: mobile ? '20px auto 0' : '24px auto 0',
              fontSize: mobile ? 15 : 17,
              color: 'var(--ink-soft)',
              lineHeight: 1.625,
            }}>
              We respond in five minutes. Whether you are appreciating clients,
              welcoming employees, or celebrating special moments — we are here.
            </p>
          </div>
        </Reveal>

        {/* Image + Get In Touch split */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
          gap: mobile ? 32 : 80,
          alignItems: 'start',
          flex: 1,
        }}>

          {/* Left: photo */}
          <Reveal>
            <div style={{
              width: '100%',
              aspectRatio: '4 / 5',
              backgroundImage: 'url(' + IMG.contactHand + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
          </Reveal>

          {/* Right: contact info */}
          <Reveal delay={120}>
            <div>
              <div style={{
                fontSize: 12,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--ink-soft)',
                marginBottom: 14,
                fontWeight: 500,
              }}>
                Get In Touch
              </div>
              <h3 className="serif" style={{
                margin: 0,
                color: 'var(--brown-mid)',
                fontSize: mobile ? 28 : 36,
                fontWeight: 400,
                lineHeight: 1.1,
              }}>
                Send us a note
              </h3>
              <p style={{
                marginTop: 14,
                color: 'var(--ink-soft)',
                fontSize: mobile ? 14 : 15,
                lineHeight: 1.65,
              }}>
                Tell us about your project, occasion, or recipients — we will compose
                a thoughtful proposal within one business day.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--brown-deep)', marginBottom: 4 }}>Email</div>
                  <div style={{ color: 'var(--ink-soft)', fontSize: 14 }}>dorisgiftingco@gmail.com</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--brown-deep)', marginBottom: 4 }}>Phone Number</div>
                  <div style={{ color: 'var(--ink-soft)', fontSize: 14 }}>+1 (713) 000-7393</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--brown-deep)', marginBottom: 4 }}>Address</div>
                  <div style={{ color: 'var(--ink-soft)', fontSize: 14 }}>Houston, Texas</div>
                </div>
              </div>

              <button
                onClick={() => { window.location.href = 'mailto:dorisgiftingco@gmail.com'; setSent(true); }}
                className="btn-primary"
                style={{ marginTop: 28 }}
              >
                Email Us
              </button>
              {sent && (
                <div style={{ marginTop: 12, fontSize: 12, color: 'var(--ink-mute)' }}>
                  Opening your mail app…
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOTTOM SECTION — 1440×648, padding 80px, bg #E7E0D6, curved image */}
      <section style={{
        background: '#E7E0D6',
        minHeight: mobile ? 'auto' : 648,
        padding: mobile ? '48px 24px' : '80px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'stretch',
      }}>
        <Reveal style={{ width: '100%' }}>
          <div style={{
            width: '100%',
            minHeight: mobile ? 240 : 488,
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url(' + IMG.giftWall + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: mobile ? 16 : 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: mobile ? 24 : 40,
            overflow: 'hidden',
          }}>
            <h3 className="serif" style={{
              margin: 0,
              color: '#fff',
              fontSize: mobile ? 28 : 48,
              fontWeight: 400,
              lineHeight: 1.1,
            }}>
              Let's Create something thoughtful for you
            </h3>
            <p style={{
              color: '#fff',
              opacity: 0.9,
              fontSize: mobile ? 13 : 15,
              marginTop: mobile ? 12 : 18,
            }}>
              We respond in five minutes.
            </p>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
