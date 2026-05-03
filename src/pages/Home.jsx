import React from 'react';
import { IMG } from '../constants';
import SectionTitle from '../components/SectionTitle';
import CTABanner from '../components/CTABanner';
import Reveal from '../components/Reveal';
import ServicesAccordion from '../components/ServicesAccordion';

const TESTIMONIALS = [
  { name: 'Adaeze O.', role: 'Marketing Lead', avatar: IMG.a1, text: "The team made our client appreciation feel like a brand moment. Every detail was considered." },
  { name: 'Marcus R.',  role: 'Founder',        avatar: IMG.a3, text: "Sent these to our 40 best customers — the response was instant. We’ll be back every quarter." },
  { name: 'Liana P.',   role: 'Bride',          avatar: IMG.a2, text: "Our welcome boxes were the conversation of the weekend. Thoughtful from box to ribbon." },
  { name: 'James K.',   role: 'COO',            avatar: IMG.a4, text: "Onboarding boxes that new hires actually open and post about. Quality is unmatched." },
  { name: 'Esi A.',     role: 'Stylist',        avatar: IMG.a5, text: "Beautiful, intentional, and personal. Doris translates a vibe better than anyone we’ve worked with." },
  { name: 'Theo M.',    role: 'Investor',       avatar: IMG.a6, text: "A holiday gift that earned three thank-you calls. That’s rare." },
];

export default function Home({ mobile, go }) {
  const heroH = mobile ? 480 : 640;
  const px = mobile ? 24 : 80;

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          position: 'relative',
          height: heroH,
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.40) 100%), url(${IMG.workshop})`,
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
            justifyContent: 'center',
            color: '#fff',
            padding: mobile ? '0 24px' : '0 80px',
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <Reveal>
              <div className="serif" style={{ fontSize: mobile ? 40 : 64, lineHeight: 1.05, marginBottom: 12 }}>
                Thoughtful Gifting<br/>Elevated
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p style={{ color: '#fff', opacity: 0.92, fontSize: mobile ? 14 : 16, maxWidth: 460, margin: '0 0 24px' }}>
                Premium, curated gift experiences for the moments that matter most — designed to leave a lasting impression.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <button
                onClick={() => go('contact')}
                style={{
                  background: '#fff',
                  color: 'var(--ink)',
                  border: 0,
                  padding: '12px 28px',
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Send us a message
              </button>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Three featured product cards */}
      <div style={{ background: '#fff', padding: `40px ${px}px` }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1fr 1fr',
          gap: mobile ? 14 : 20,
        }}>
          {[IMG.g1, IMG.g3, IMG.g5].map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{
                height: mobile ? 200 : 280,
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 4,
              }} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* About Doris snippet */}
      <div style={{ background: '#fff', padding: mobile ? '12px 24px 56px' : '24px 80px 96px', textAlign: 'center' }}>
        <Reveal>
          <SectionTitle mobile={mobile}>About Doris</SectionTitle>
        </Reveal>
        <Reveal delay={80}>
          <p style={{
            maxWidth: 720,
            margin: '0 auto',
            fontSize: mobile ? 14 : 15,
            lineHeight: 1.7,
            color: 'var(--ink-soft)',
          }}>
            At Doris Gifting Co., we believe that every gift should be intentional, meaningful, and memorable.
            We specialize in creating premium, curated gift boxes designed to elevate both personal and professional experiences.
            Whether you are appreciating clients, welcoming employees, or celebrating special moments,
            our goal is to help you leave a lasting impression.
          </p>
        </Reveal>
      </div>

      {/* Store interior */}
      <Reveal style={{ background: '#fff', padding: mobile ? '0 24px 56px' : '0 80px 96px' }}>
        <div style={{
          width: '100%',
          height: mobile ? 220 : 460,
          backgroundImage: `url(${IMG.storeInterior})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 4,
        }} />
      </Reveal>

      {/* Gallery teaser */}
      <div style={{ background: '#fff', padding: mobile ? '0 24px 32px' : '0 80px 24px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: mobile ? 20 : 32 }}>
          <div style={{
            fontSize: 11,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: 12,
          }}>
            Gallery
          </div>
          <h2 className="serif" style={{ margin: 0, color: 'var(--bronze)', fontSize: mobile ? 28 : 36, fontWeight: 500 }}>
            A Study in Thoughtful Details
          </h2>
        </Reveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: mobile ? 8 : 14,
        }}>
          {[IMG.g1, IMG.g2, IMG.g3, IMG.g4, IMG.g5, IMG.g6, IMG.g7, IMG.g8].map((src, i) => (
            <Reveal key={i} delay={i * 40}>
              <div
                onClick={() => go('gallery')}
                style={{
                  aspectRatio: '1 / 1',
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'transform 320ms ease',
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Services */}
      <div style={{ background: '#fff', padding: mobile ? '40px 24px' : '96px 80px' }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{
            fontSize: 11,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: 12,
          }}>
            Services
          </div>
          <h2 className="serif" style={{
            margin: 0,
            color: 'var(--bronze)',
            fontSize: mobile ? 26 : 32,
            fontWeight: 500,
            maxWidth: 520,
            lineHeight: 1.15,
          }}>
            How we craft meaningful gifting experiences
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1.1fr 1fr',
          gap: mobile ? 24 : 56,
          alignItems: 'center',
        }}>
          <ServicesAccordion mobile={mobile} />
          <Reveal>
            <div style={{
              height: mobile ? 240 : 380,
              backgroundImage: `url(${IMG.g6})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 4,
            }} />
          </Reveal>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ background: 'var(--bronze)', padding: mobile ? '40px 24px' : '80px 80px', color: '#fff' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: mobile ? 24 : 40 }}>
          <h2 className="serif" style={{ margin: 0, fontSize: mobile ? 28 : 36, fontWeight: 500, color: '#fff' }}>
            What Our Clients Say
          </h2>
        </Reveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1fr 1fr',
          gap: mobile ? 16 : 24,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 8,
                padding: mobile ? 18 : 22,
                border: '1px solid rgba(255,255,255,0.12)',
              }}>
                <div style={{ color: '#f3d9bd', fontSize: 14, marginBottom: 10 }}>★★★★★</div>
                <p style={{ color: '#fff', opacity: 0.95, fontSize: 13, lineHeight: 1.6, margin: '0 0 16px' }}>
                  {t.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    backgroundImage: `url(${t.avatar})`,
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
