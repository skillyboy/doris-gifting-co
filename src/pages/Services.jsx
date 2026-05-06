import React from 'react';
import { IMG } from '../constants';
import CTABanner from '../components/CTABanner';
import Reveal from '../components/Reveal';
import ServicesAccordion from '../components/ServicesAccordion';

export default function Services({ mobile, go }) {
  const px = mobile ? 24 : 80;

  return (
    <div>
      {/* Intro (no hero/banner — page begins with the eyebrow + title) */}
      <div style={{
        background: '#fff',
        padding: mobile ? '110px 24px 24px' : '140px 80px 32px',
        textAlign: 'center',
      }}>
        <Reveal>
          <div style={{
            fontSize: 11,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: 12,
          }}>
            Services
          </div>
          <h1 className="serif" style={{
            margin: '0 auto 18px',
            color: 'var(--bronze)',
            fontSize: mobile ? 28 : 36,
            fontWeight: 500,
            maxWidth: 640,
            lineHeight: 1.15,
          }}>
            How we craft meaningful gifting experiences
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p style={{
            maxWidth: 680,
            margin: '0 auto',
            fontSize: mobile ? 14 : 15,
            lineHeight: 1.75,
            color: 'var(--ink-soft)',
          }}>
            From intimate one-of-one keepsakes to volume programs for global teams, every box is sourced,
            assembled, and finished by hand. Choose the offering that fits your moment — we'll take it from there.
          </p>
        </Reveal>
      </div>

      {/* Accordion + image */}
      <div style={{ background: '#fff', padding: mobile ? '24px 24px 56px' : `48px ${px}px 96px` }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1.1fr 1fr',
          gap: mobile ? 24 : 56,
          alignItems: 'center',
        }}>
          <ServicesAccordion mobile={mobile} />
          <Reveal>
            <div style={{
              height: mobile ? 240 : 420,
              backgroundImage: `url(${IMG.g6})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 4,
            }} />
          </Reveal>
        </div>
      </div>

      {/* Process */}
      <div style={{ background: 'var(--cream)', padding: mobile ? '56px 24px' : '96px 80px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: mobile ? 32 : 56 }}>
          <div style={{
            fontSize: 11,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: 12,
          }}>
            Process
          </div>
          <h2 className="serif" style={{
            margin: 0,
            color: 'var(--bronze)',
            fontSize: mobile ? 28 : 36,
            fontWeight: 500,
          }}>
            From first message to final ribbon
          </h2>
        </Reveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)',
          gap: mobile ? 20 : 24,
        }}>
          {[
            ['01', 'Discover', 'Tell us about the recipient, the moment, and the impression you want to leave.'],
            ['02', 'Curate',   'We propose a palette of objects, materials, and finishes tailored to your brief.'],
            ['03', 'Craft',    'Each box is hand-assembled, finished, and quality-checked in our Houston studio.'],
            ['04', 'Deliver',  'We ship directly, or coordinate white-glove handoff for high-touch moments.'],
          ].map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 80}>
              <div>
                <div style={{
                  fontSize: 11,
                  letterSpacing: '0.32em',
                  color: 'var(--bronze)',
                  marginBottom: 10,
                }}>
                  {n}
                </div>
                <div className="serif" style={{
                  fontSize: mobile ? 22 : 24,
                  color: 'var(--ink)',
                  marginBottom: 8,
                  fontStyle: 'normal',
                }}>
                  {t}
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <CTABanner mobile={mobile} go={go} />
    </div>
  );
}
