import React from 'react';
import { IMG } from '../constants';
import SectionTitle from '../components/SectionTitle';
import CTABanner from '../components/CTABanner';
import Reveal from '../components/Reveal';
import ServicesAccordion from '../components/ServicesAccordion';

const TESTIMONIALS = [
  { name: 'Adaeze O.', role: 'Marketing Lead', avatar: IMG.a1, text: "The team made our client appreciation feel like a brand moment. Every detail was considered." },
  { name: 'Marcus R.', role: 'Founder', avatar: IMG.a3, text: "Sent these to our 40 best customers — the response was instant. We will be back every quarter." },
  { name: 'Liana P.', role: 'Bride', avatar: IMG.a2, text: "Our welcome boxes were the conversation of the weekend. Thoughtful from box to ribbon." },
  { name: 'James K.', role: 'COO', avatar: IMG.a4, text: "Onboarding boxes that new hires actually open and post about. Quality is unmatched." },
  { name: 'Esi A.', role: 'Stylist', avatar: IMG.a5, text: "Beautiful, intentional, and personal. Doris translates a vibe better than anyone we worked with." },
  { name: 'Theo M.', role: 'Investor', avatar: IMG.a6, text: "A holiday gift that earned three thank-you calls. That is rare." },
];

export default function Home({ mobile, go }) {
  return (
    <div>
      {/* HERO — cream bg, text band over, gift wall image below */}
      <section style={{
        background: 'var(--cream)',
        position: 'relative',
        paddingTop: mobile ? 100 : 131,
        paddingBottom: 0,
      }}>
        <div style={{
          padding: mobile ? '0 24px 32px' : '0 80px 40px',
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1.05fr 1fr',
          gap: mobile ? 20 : 80,
          alignItems: 'start',
        }}>
          <Reveal>
            <h1 className="serif" style={{
              margin: 0,
              color: 'var(--brown-mid)',
              fontSize: mobile ? 44 : 64,
              lineHeight: mobile ? 1.05 : 1.1,
              fontWeight: 400,
              letterSpacing: '-0.02em',
            }}>
              Thoughtful Gifting<br/>Elevated
            </h1>
          </Reveal>
          <Reveal delay={120} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: mobile ? 'auto' : 141, gap: 20 }}>
            <p style={{
              fontSize: mobile ? 15 : 18,
              lineHeight: 1.625,
              color: 'var(--ink-soft)',
              margin: 0,
              maxWidth: 440,
            }}>
              Every gift should be intentional and memorable. We curate bespoke experiences that articulate gratitude and celebrate connections with quiet sophistication.
            </p>
            <button onClick={() => go('contact')} className="btn-link" style={{ alignSelf: mobile ? 'flex-start' : 'flex-end' }}>
              Send us a message
            </button>
          </Reveal>
        </div>

        {/* Gift wall image strip */}
        <Reveal>
          <div style={{
            width: '100%',
            height: mobile ? 260 : 520,
            backgroundImage: 'url(' + IMG.giftWall + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </Reveal>
      </section>

      {/* ABOUT DORIS — white bg, centered text, learn more link */}
      <section style={{ background: '#fff', padding: mobile ? '64px 24px' : '96px 80px', textAlign: 'center' }}>
        <Reveal>
          <SectionTitle mobile={mobile}>About Doris</SectionTitle>
        </Reveal>
        <Reveal delay={80}>
          <p style={{
            maxWidth: 1036,
            margin: mobile ? '24px auto 0' : '50px auto 0',
            fontSize: mobile ? 15 : 18,
            lineHeight: 1.625,
            color: 'var(--ink-soft)',
            textAlign: 'center',
          }}>
            At Doris Gifting Co., we believe that every gift should be intentional, meaningful, and memorable.
            We specialize in creating premium, curated gift boxes designed to elevate both personal and professional experiences.
            Whether you are appreciating clients, welcoming employees, or celebrating special moments,
            our goal is to help you leave a lasting impression.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <button onClick={() => go('about')} className="btn-link" style={{ marginTop: mobile ? 24 : 32 }}>
            Learn More
          </button>
        </Reveal>
      </section>

      {/* STORE INTERIOR — light grey bg, image */}
      <section style={{ background: 'var(--cream-2)', padding: mobile ? '0 24px 64px' : '0 80px 96px' }}>
        <Reveal>
          <div style={{
            width: '100%',
            height: mobile ? 240 : 520,
            backgroundImage: 'url(' + IMG.storeInterior + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </Reveal>
      </section>

      {/* GALLERY TEASER — white bg */}
      <section style={{ background: '#fff', padding: mobile ? '64px 24px' : '80px 80px 96px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: mobile ? 28 : 40 }}>
          <div style={{
            fontSize: 12,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: 12,
            fontWeight: 500,
          }}>
            Gallery
          </div>
          <SectionTitle mobile={mobile} size="md">A Study in Thoughtful Details</SectionTitle>
          <button onClick={() => go('gallery')} className="btn-link" style={{ marginTop: 20 }}>
            View Gallery
          </button>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr 1fr' : '1.15fr 1fr 1fr',
          gridTemplateRows: mobile ? 'auto' : 'repeat(2, 1fr)',
          gap: mobile ? 8 : 14,
          height: mobile ? 'auto' : 520,
        }}>
          {[
            { src: IMG.g3, large: true },
            { src: IMG.g2 },
            { src: IMG.g5 },
            { src: IMG.g4 },
            { src: IMG.g7 },
          ].map(({ src, large }, i) => (
            <Reveal
              key={i}
              delay={i * 40}
              style={{
                gridColumn: large ? (mobile ? '1 / -1' : '1 / 2') : undefined,
                gridRow: large && !mobile ? '1 / 3' : undefined,
              }}
            >
              <div
                onClick={() => go('gallery')}
                className="gallery-cell"
                style={{
                  width: '100%',
                  height: mobile ? 'auto' : '100%',
                  aspectRatio: mobile ? (large ? '4 / 5' : '1 / 1') : 'auto',
                  backgroundImage: 'url(' + src + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIDEO GALLERY — under Gallery teaser */}
      <section style={{ background: '#fff', padding: mobile ? '0 24px 32px' : '0 80px 56px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: mobile ? 8 : 14,
        }}>
          {[
            // Drive direct-download URLs — files must be set to "Anyone with the link" → Viewer
            'https://drive.google.com/uc?export=download&id=1sxijd3s_3gbR3MTaAorkuTOtqSgW_SN6',
            'https://drive.google.com/uc?export=download&id=1fMlDXOrYcDBtXwVw3g8knz5wis4a2eGu',
            'https://drive.google.com/uc?export=download&id=1BMTA5qWrcoXJUunEWBRsjep7APP8GUBz',
            'https://drive.google.com/uc?export=download&id=1C-eAL0VPjklhil2WIlrYRypCoHWm63m4',
          ].map((src, i) => (
            <Reveal key={src} delay={i * 60}>
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  objectFit: 'cover',
                  display: 'block',
                  background: 'var(--cream)',
                }}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES — accordion + image */}
      <section style={{ background: '#fff', padding: mobile ? '0 24px 64px' : '0 80px 96px' }}>
        <div style={{ marginBottom: mobile ? 24 : 36 }}>
          <div style={{
            fontSize: 12,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: 12,
            fontWeight: 500,
          }}>
            Services
          </div>
          <h2 className="serif" style={{
            margin: 0,
            color: 'var(--brown-mid)',
            fontSize: mobile ? 28 : 40,
            fontWeight: 400,
            maxWidth: 720,
            lineHeight: 1.1,
            letterSpacing: 0,
          }}>
            How we craft meaningful gifting experiences
          </h2>
        </div>
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
                height: 480,
                backgroundImage: 'url(' + IMG.g6 + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
            </Reveal>
          )}
        </div>
      </section>

      {/* TESTIMONIALS — bronze bg */}
      <section style={{ background: 'var(--brown-bronze)', padding: mobile ? '56px 24px' : '80px 80px', color: '#fff' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: mobile ? 28 : 48 }}>
          <h2 className="serif" style={{ margin: 0, fontSize: mobile ? 32 : 48, fontWeight: 400, color: '#fff', letterSpacing: 0 }}>
            What Our Clients Say
          </h2>
        </Reveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
          gap: mobile ? 16 : 24,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{
                background: 'rgba(255,255,255,0.08)',
                padding: mobile ? 18 : 24,
                border: '1px solid rgba(255,255,255,0.12)',
                height: '100%',
              }}>
                <div style={{ color: '#f3d9bd', fontSize: 13, marginBottom: 10, letterSpacing: '0.1em' }}>★★★★★</div>
                <p style={{ color: '#fff', opacity: 0.95, fontSize: 14, lineHeight: 1.65, margin: '0 0 18px' }}>
                  {t.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    backgroundImage: 'url(' + t.avatar + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: '#fff', opacity: 0.7 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA — gift wall + email us */}
      <CTABanner mobile={mobile} go={go} />
    </div>
  );
}
