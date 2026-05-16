import React from 'react';
import { IMG } from '../constants';
import SectionTitle from '../components/SectionTitle';
import CTABanner from '../components/CTABanner';
import Reveal from '../components/Reveal';

export default function About({ mobile, go }) {
  const B = import.meta.env.BASE_URL;

  return (
    <div>
      {/* HERO BANNER — 1440×913 */}
      <Reveal>
        <section style={{
          position: 'relative',
          width: '100%',
          height: mobile ? 400 : 913,
          overflow: 'hidden',
        }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src={`${B}img/about-bg.mp4`} type="video/mp4" />
          </video>
        </section>
      </Reveal>

      {/* ABOUT DORIS — 1440×391, padding 80px, gap 50px, bg #FFFFFF */}
      <section style={{
        background: '#FFFFFF',
        padding: mobile ? '64px 24px' : '80px',
        textAlign: 'center',
        minHeight: mobile ? 'auto' : 391,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
            our goal is to help you leave a lasting impression. Built on a foundation of thoughtfulness,
            quality, and attention to detail, each box is carefully curated to reflect elegance and purpose.
          </p>
        </Reveal>
      </section>

      {/* MEET THE FOUNDER — 1440×735, max-width 1920px, padding 80px, gap 80px, bg #FFFFFF */}
      <section style={{
        background: '#FFFFFF',
        padding: mobile ? '64px 24px' : '80px',
        minHeight: mobile ? 'auto' : 735,
        maxWidth: 1920,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
          gap: mobile ? 32 : 80,
          alignItems: 'center',
          width: '100%',
        }}>

          {/* Left: label + title + body */}
          <div>
            <div style={{
              fontSize: 12,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--ink-soft)',
              marginBottom: 14,
              fontWeight: 500,
            }}>
              Our Story
            </div>
            <Reveal>
              <SectionTitle mobile={mobile} align="left" style={{ marginBottom: 24 }}>
                Meet The Founder
              </SectionTitle>
            </Reveal>
            <Reveal delay={80}>
              <p style={{
                margin: '16px 0 0',
                fontSize: mobile ? 15 : 18,
                lineHeight: 1.625,
                color: 'var(--ink-soft)',
              }}>
                Doris Gifting Co. was founded with a passion for thoughtful details and meaningful experiences.
                Led by a vision of elevated gifting, delivering quality, creativity, and professionalism in every box we create,
                I want every client to feel valued through gifts that are not only beautiful but intentional.
              </p>
            </Reveal>
          </div>

          {/* Right: founder photo */}
          <Reveal delay={120}>
            <div style={{
              width: '100%',
              aspectRatio: '4 / 5',
              backgroundImage: 'url(' + IMG.founder + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }} />
          </Reveal>

        </div>
      </section>

      {/* CTA SECTION — 1440×648, padding 80px, bg #E7E0D6 */}
      <CTABanner mobile={mobile} go={go} />
    </div>
  );
}
