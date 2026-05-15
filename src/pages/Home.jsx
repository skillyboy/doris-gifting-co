import React from 'react';
import { IMG } from '../constants';
import SectionTitle from '../components/SectionTitle';
import CTABanner from '../components/CTABanner';
import Reveal from '../components/Reveal';
import ServicesAccordion from '../components/ServicesAccordion';

const TESTIMONIALS = [
  { name: 'Adaeze O.', role: 'Marketing Lead', avatar: IMG.a1, text: 'The team made our client appreciation feel like a brand moment. Every detail was considered.' },
  { name: 'Marcus R.', role: 'Founder', avatar: IMG.a3, text: 'Sent these to our 40 best customers — the response was instant. We will be back every quarter.' },
  { name: 'Liana P.', role: 'Bride', avatar: IMG.a2, text: 'Our welcome boxes were the conversation of the weekend. Thoughtful from box to ribbon.' },
  { name: 'James K.', role: 'COO', avatar: IMG.a4, text: 'Onboarding boxes that new hires actually open and post about. Quality is unmatched.' },
  { name: 'Esi A.', role: 'Stylist', avatar: IMG.a5, text: 'Beautiful, intentional, and personal. Doris translates a vibe better than anyone we worked with.' },
  { name: 'Theo M.', role: 'Investor', avatar: IMG.a6, text: 'A holiday gift that earned three thank-you calls. That is rare.' },
];

const HERO_BANNER_IMAGES = [
  IMG.giftWall,
  IMG.g3,
  IMG.g4,
  IMG.g6,
];

export default function Home({ mobile, go }) {
  const [heroIndex, setHeroIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((index) => (index + 1) % HERO_BANNER_IMAGES.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div>
      <section style={{
        background: 'var(--cream)',
        position: 'relative',
        paddingTop: mobile ? 112 : 131,
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
              fontSize: mobile ? 40 : 64,
              lineHeight: mobile ? 1.05 : 1.1,
              fontWeight: 400,
              letterSpacing: '-0.02em',
            }}>
              <span style={{ whiteSpace: 'nowrap' }}>Thoughtful Gifting</span><br />
              <span style={{ whiteSpace: 'nowrap' }}>Elevated</span>
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

        <Reveal>
          <div style={{
            position: 'relative',
            width: '100%',
            height: mobile ? 260 : 520,
            overflow: 'hidden',
            background: 'var(--cream)',
          }}>
            {HERO_BANNER_IMAGES.map((src, index) => (
              <div
                key={src + index}
                aria-hidden={index !== heroIndex}
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url(' + src + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: index === heroIndex ? 1 : 0,
                  transform: index === heroIndex ? 'scale(1)' : 'scale(1.025)',
                  transition: 'opacity 1200ms ease, transform 5200ms ease',
                }}
              />
            ))}
          </div>
        </Reveal>
      </section>

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
            <br />
            <span style={{ display: 'block', marginTop: 12 }}>
              We specialize in creating premium, curated gift boxes designed to elevate both personal and professional experiences.
            </span>
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

      <section style={{ background: '#fff', padding: mobile ? '0 24px 64px' : '0 80px 96px' }}>
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

      <section style={{ background: '#E7E0D6', padding: mobile ? '64px 0' : '80px 0 96px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: mobile ? 28 : 40, padding: mobile ? '0 24px' : '0 80px' }}>
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

        <div className="carousel-viewport">
          <div className="carousel-track" style={{ gap: mobile ? 12 : 18 }}>
            {[IMG.g3, IMG.g2, IMG.g4, IMG.g5, IMG.g6, IMG.g7, IMG.g3, IMG.g2, IMG.g4, IMG.g5, IMG.g6, IMG.g7].map((src, i) => (
              <div
                key={i}
                onClick={() => go('gallery')}
                className="gallery-cell"
                style={{
                  flex: 'none',
                  width: mobile ? 260 : 380,
                  aspectRatio: '4 / 5',
                  backgroundImage: 'url(' + src + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 20,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: mobile ? '64px 24px' : '96px 80px' }}>
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
                backgroundImage: 'url(' + IMG.g1 + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
            </Reveal>
          )}
        </div>
      </section>

      <section style={{ background: '#8A6A4A', padding: mobile ? '56px 24px' : '80px 80px', color: '#fff' }}>
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

      <CTABanner mobile={mobile} go={go} />
    </div>
  );
}
