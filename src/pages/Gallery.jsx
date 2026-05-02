import React, { useState } from 'react';
import { GALLERY_FILTERS, GALLERY_ITEMS } from '../constants';
import CTABanner from '../components/CTABanner';
import Lightbox from '../components/Lightbox';
import Reveal from '../components/Reveal';

export default function Gallery({ mobile, go }) {
  const [filter, setFilter] = useState('All');
  const [lbIndex, setLbIndex] = useState(null);

  const items = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.cat === filter);

  const lbImages = items.map((i) => i.src);

  return (
    <div>
      {/* Title block */}
      <div style={{
        background: '#fff',
        padding: mobile ? '110px 24px 24px' : '140px 80px 40px',
        textAlign: 'center',
      }}>
        <Reveal>
          <div style={{
            fontSize: 11,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: 14,
          }}>
            Gallery
          </div>
          <h1 className="serif" style={{
            margin: 0,
            color: 'var(--bronze)',
            fontSize: mobile ? 30 : 40,
            fontWeight: 500,
          }}>
            A Study in Thoughtful Details
          </h1>
        </Reveal>
      </div>

      {/* Filters */}
      <div style={{ background: '#fff', padding: mobile ? '0 16px 28px' : '0 80px 40px' }}>
        {mobile ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, maxWidth: 320, margin: '0 auto' }}>
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '14px 12px',
                  fontSize: 13,
                  border: '1px solid var(--bronze)',
                  background: filter === f ? 'var(--bronze)' : 'transparent',
                  color: filter === f ? '#fff' : 'var(--bronze)',
                  borderRadius: 2,
                  fontFamily: 'var(--sans)',
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                }}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '12px 22px',
                  fontSize: 12,
                  letterSpacing: '0.14em',
                  border: '1px solid var(--bronze)',
                  background: filter === f ? 'var(--bronze)' : 'transparent',
                  color: filter === f ? '#fff' : 'var(--bronze)',
                  borderRadius: 2,
                  fontFamily: 'var(--sans)',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid */}
      <div style={{ background: '#fff', padding: mobile ? '0 16px 32px' : '0 80px 64px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
          gap: mobile ? 12 : 16,
        }}>
          {items.map((it, i) => (
            <Reveal key={`${filter}-${i}`} delay={i * 40}>
              <div
                className="gallery-cell"
                onClick={() => setLbIndex(i)}
                style={{
                  gridColumn: !mobile && it.span === 2 ? 'span 2' : 'span 1',
                  width: '100%',
                  aspectRatio: it.ratio,
                  backgroundImage: `url(${it.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                }}
              />
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: mobile ? 28 : 48 }}>
          <button style={{
            background: 'transparent',
            color: 'var(--ink)',
            border: '1px solid var(--ink)',
            padding: '12px 28px',
            borderRadius: 2,
            fontSize: 13,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}>
            View more
          </button>
        </div>
      </div>

      <CTABanner
        headline="Let's Create something thoughtful for you"
        sub="Will respond in few minutes"
        button="Email Us"
        mobile={mobile}
        go={go}
      />

      {lbIndex != null && (
        <Lightbox
          images={lbImages}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onIndex={setLbIndex}
        />
      )}
    </div>
  );
}
