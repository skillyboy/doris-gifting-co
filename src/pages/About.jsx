import React from 'react';
import { IMG } from '../constants';
import SectionTitle from '../components/SectionTitle';
import CTABanner from '../components/CTABanner';
import Reveal from '../components/Reveal';

export default function About({ mobile, go }) {
  const heroH = mobile ? 380 : 520;

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          position: 'relative',
          height: heroH,
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.10) 35%, rgba(0,0,0,0.10) 65%, rgba(0,0,0,0.40) 100%), url(${IMG.storeInterior})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
            gap: 12,
          }}
        >
          <div className="serif" style={{
            fontSize: mobile ? 48 : 72,
            lineHeight: 1,
            textShadow: '0 2px 24px rgba(0,0,0,0.3)',
          }}>
            About Doris
          </div>
          <div style={{ fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', opacity: 0.85 }}>
            Scroll down ↓
          </div>
        </div>
      </div>

      {/* About copy */}
      <div style={{
        background: '#fff',
        padding: mobile ? '56px 24px 32px' : '96px 80px 48px',
        textAlign: 'center',
      }}>
        <Reveal>
          <SectionTitle mobile={mobile}>About Doris</SectionTitle>
        </Reveal>
        <Reveal delay={80}>
          <p style={{
            maxWidth: 760,
            margin: '0 auto 18px',
            fontSize: mobile ? 14 : 15,
            lineHeight: 1.75,
            color: 'var(--ink-soft)',
          }}>
            At Doris Gifting Co., we believe that every gift should be intentional, meaningful, and memorable.
            We specialize in creating premium, curated gift boxes designed to elevate both personal and professional experiences.
            Whether you are appreciating clients, welcoming employees, or celebrating special moments,
            our goal is to help you leave a lasting impression.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p style={{
            maxWidth: 760,
            margin: '0 auto',
            fontSize: mobile ? 14 : 15,
            lineHeight: 1.75,
            color: 'var(--ink-soft)',
          }}>
            Built on a foundation of thoughtfulness, quality, and attention to detail,
            each box is carefully curated to reflect elegance and purpose.
          </p>
        </Reveal>
      </div>

      {/* Founder */}
      <div style={{ background: '#fff', padding: mobile ? '32px 24px 56px' : '48px 80px 96px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1.1fr',
          gap: mobile ? 28 : 64,
          alignItems: 'center',
        }}>
          <Reveal style={{ order: mobile ? 1 : 0 }}>
            <h2 className="serif" style={{
              margin: '0 0 18px',
              color: 'var(--bronze)',
              fontSize: mobile ? 32 : 40,
              fontWeight: 500,
            }}>
              Meet The Founder
            </h2>
            <p style={{ fontSize: mobile ? 14 : 15, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
              Doris Gifting Co. was founded with a passion for thoughtful details and meaningful experiences.
              Led by a vision of elevated gifting, delivering quality, creativity, and professionalism in
              every box we create. I want every client to feel valued through gifts that are not only beautiful
              but intentional.
            </p>
            <div style={{ height: 14 }} />
            <div style={{
              fontSize: 12,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--bronze)',
            }}>
              — Doris, Founder
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{
              width: '100%',
              aspectRatio: mobile ? '4 / 5' : '5 / 6',
              backgroundImage: `url(${IMG.founder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 4,
            }} />
          </Reveal>
        </div>
      </div>

      <CTABanner mobile={mobile} go={go} />
    </div>
  );
}
