import React, { useState, useMemo } from 'react';
import { GALLERY_FILTERS, GALLERY_ITEMS } from '../constants';
import SectionTitle from '../components/SectionTitle';
import CTABanner from '../components/CTABanner';
import Reveal from '../components/Reveal';
import Lightbox from '../components/Lightbox';

export default function Gallery({ mobile, go }) {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const items = useMemo(() => {
    if (filter === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((i) => i.cat === filter);
  }, [filter]);

  return (
    <div>
      {/* Header */}
      <section style={{
        background: '#E7E0D6',
        padding: mobile ? '120px 24px 56px' : '160px 80px 80px',
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
            Gallery
          </div>
          <SectionTitle mobile={mobile} size="lg">A Study in Thoughtful Details</SectionTitle>
          <p style={{
            maxWidth: 640,
            margin: mobile ? '20px auto 0' : '28px auto 0',
            fontSize: mobile ? 15 : 17,
            color: 'var(--ink-soft)',
            lineHeight: 1.625,
          }}>
            A curated selection of recent gift compositions across corporate, custom, and special occasion work.
          </p>
        </Reveal>
      </section>

      {/* Filters */}
      <section style={{ background: '#E7E0D6', padding: mobile ? '24px 24px 8px' : '40px 80px 16px' }}>
        <div className="pillrow" style={{
          display: 'flex',
          gap: 10,
          overflowX: 'auto',
          padding: '4px 0',
          justifyContent: mobile ? 'flex-start' : 'center',
        }}>
          {GALLERY_FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  background: active ? 'var(--brown-deep)' : 'transparent',
                  color: active ? '#fff' : 'var(--brown-deep)',
                  border: '1px solid var(--brown-deep)',
                  padding: '8px 18px',
                  fontSize: 13,
                  borderRadius: 999,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  fontFamily: 'var(--sans)',
                  fontWeight: 400,
                }}
              >
                {f}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: '#E7E0D6', padding: mobile ? '24px 24px 64px' : '40px 80px 96px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: mobile ? 8 : 14,
        }}>
          {items.map((it, i) => (
            <Reveal
              key={i}
              delay={i * 30}
              style={{
                gridColumn: it.span === 2 && !mobile ? 'span 2' : 'span 1',
              }}
            >
              <div
                onClick={() => setLightbox(it.src)}
                className="gallery-cell"
                style={{
                  width: '100%',
                  aspectRatio: it.ratio,
                  backgroundImage: 'url(' + it.src + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner mobile={mobile} go={go} />

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}
