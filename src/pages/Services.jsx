import React from 'react';
import { IMG } from '../constants';
import ServicesAccordion from '../components/ServicesAccordion';
import SectionTitle from '../components/SectionTitle';
import CTABanner from '../components/CTABanner';
import Reveal from '../components/Reveal';

export default function Services({ mobile, go }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'var(--cream)',
        padding: mobile ? '120px 24px 64px' : '160px 80px 96px',
        textAlign: 'center',
      }}>
        <Reveal>
          <div style={{
            fontSize: 12,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: 14,
            fontWeight: 500,
          }}>
            Services
          </div>
          <SectionTitle mobile={mobile} size="lg">
            How we craft meaningful<br/>gifting experiences
          </SectionTitle>
          <p style={{
            maxWidth: 720,
            margin: mobile ? '24px auto 0' : '32px auto 0',
            fontSize: mobile ? 15 : 18,
            color: 'var(--ink-soft)',
            lineHeight: 1.625,
          }}>
            From corporate gifting to one-of-one keepsakes, every box is curated with intention.
          </p>
        </Reveal>
      </section>

      {/* Accordion + image */}
      <section style={{ background: '#fff', padding: mobile ? '64px 24px' : '96px 80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1.1fr 1fr',
          gap: mobile ? 24 : 56,
          alignItems: 'start',
        }}>
          <ServicesAccordion mobile={mobile} />
          {!mobile && (
            <Reveal>
              <div style={{
                height: 560,
                backgroundImage: 'url(' + IMG.g1 + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
            </Reveal>
          )}
        </div>
      </section>

      <CTABanner mobile={mobile} go={go} />
    </div>
  );
}
