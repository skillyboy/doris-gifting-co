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
    <div className="gallery-page">
      <section className="gallery-header">
        <Reveal>
          <div className="section-kicker">Gallery</div>
          <SectionTitle mobile={mobile} size="lg">A Study in Thoughtful Details</SectionTitle>
        </Reveal>
      </section>

      <section className="gallery-filters">
        <div className="pillrow gallery-filter-row">
          {GALLERY_FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={active ? 'gallery-filter active' : 'gallery-filter'}
              >
                {f}
              </button>
            );
          })}
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="gallery-grid">
          {items.map((it, i) => (
            <Reveal
              key={i}
              delay={i * 30}
              style={{ gridColumn: it.span === 2 && !mobile ? 'span 2' : 'span 1' }}
            >
              <button
                onClick={() => setLightbox(it.src)}
                className="gallery-cell gallery-page-cell"
                style={{ aspectRatio: it.ratio }}
              >
                <img src={it.src} alt={`Doris Gifting Co. ${it.cat}`} className="gallery-page-image" loading="lazy" decoding="async" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner mobile={mobile} go={go} />

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}
