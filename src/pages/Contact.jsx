import React, { useState } from 'react';
import { IMG } from '../constants';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

export default function Contact({ mobile }) {
  const [sent, setSent] = useState(false);
  const inputStyle = {
    width: '100%',
    border: '1px solid var(--line)',
    background: '#fff',
    color: 'var(--ink)',
    borderRadius: 6,
    padding: '12px 13px',
    fontFamily: 'var(--sans)',
    fontSize: 14,
    lineHeight: 1.4,
    outline: 'none',
  };
  const labelStyle = {
    display: 'block',
    color: 'var(--brown-deep)',
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 7,
  };

  return (
    <div>

      {/* TOP SECTION — 1440×904, padding 80px, gap 50px, bg #E7E0D6 */}
      <section style={{
        background: '#E7E0D6',
        minHeight: mobile ? 'auto' : 904,
        padding: mobile
          ? '120px 24px 56px'
          : '170px 80px 80px',   /* 170 = 90px nav + 80px spec padding */
        display: 'flex',
        flexDirection: 'column',
        gap: mobile ? 32 : 50,
        boxSizing: 'border-box',
      }}>

        {/* Header row */}
        <Reveal>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 12,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--ink-soft)',
              marginBottom: 14,
              fontWeight: 500,
            }}>
              Contact
            </div>
            <SectionTitle mobile={mobile} size="lg">Contact Us</SectionTitle>
            <p style={{
              maxWidth: 600,
              margin: mobile ? '20px auto 0' : '24px auto 0',
              fontSize: mobile ? 15 : 17,
              color: 'var(--ink-soft)',
              lineHeight: 1.625,
            }}>
              Whether you are appreciating clients, welcoming employees, or
              celebrating special moments. Tell us what you are planning.
            </p>
          </div>
        </Reveal>

        {/* Image + Get In Touch split */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
          gap: mobile ? 32 : 80,
          alignItems: mobile ? 'start' : 'stretch',
          flex: 1,
        }}>

          {/* Left: photo */}
          <Reveal style={{ height: mobile ? 'auto' : '100%' }}>
            <div style={{
              width: '100%',
              height: mobile ? undefined : '100%',
              aspectRatio: mobile ? '4 / 5' : undefined,
              minHeight: mobile ? undefined : 420,
              backgroundImage: 'url(' + IMG.contactHand + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
          </Reveal>

          {/* Right: contact info */}
          <Reveal delay={120}>
            <div>
              <div style={{
                fontSize: 12,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--ink-soft)',
                marginBottom: 14,
                fontWeight: 500,
              }}>
                Get In Touch
              </div>
              <h3 className="serif" style={{
                margin: 0,
                color: 'var(--brown-mid)',
                fontSize: mobile ? 28 : 36,
                fontWeight: 400,
                lineHeight: 1.1,
              }}>
                Send us a note
              </h3>
              <p style={{
                marginTop: 14,
                color: 'var(--ink-soft)',
                fontSize: mobile ? 14 : 15,
                lineHeight: 1.65,
              }}>
                Tell us your gifting goals. Send us a note below, and our team
                will curate a thoughtful custom proposal.
              </p>

              <div style={{
                display: 'flex',
                flexDirection: mobile ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: mobile ? 18 : 24,
                marginTop: 28,
              }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--brown-deep)', marginBottom: 4 }}>Address</div>
                  <div style={{ color: 'var(--ink-soft)', fontSize: 14 }}>Houston, Texas</div>
                  <div style={{ color: 'var(--ink-soft)', fontSize: 14 }}>Victoria Island, Lagos</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--brown-deep)', marginBottom: 10 }}>Reach Us</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                    {[
                      {
                        label: 'WhatsApp',
                        href: 'https://wa.me/2348034567305',
                        icon: (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M.5 23.5l1.65-6.03A11.6 11.6 0 0 1 .56 11.6C.56 5.2 5.76 0 12.16 0a11.55 11.55 0 0 1 8.2 3.4 11.5 11.5 0 0 1 3.4 8.2c0 6.4-5.2 11.6-11.6 11.6a11.6 11.6 0 0 1-5.55-1.41L.5 23.5zM6.9 19.4l.35.2a9.6 9.6 0 0 0 4.9 1.34h.01c5.32 0 9.65-4.32 9.65-9.64a9.58 9.58 0 0 0-2.82-6.82A9.56 9.56 0 0 0 12.16 1.9c-5.32 0-9.64 4.32-9.64 9.64 0 1.82.51 3.6 1.48 5.13l.23.37-.98 3.57 3.66-.96zM17.4 14.3c-.07-.12-.26-.2-.55-.34-.29-.15-1.7-.84-1.97-.94-.26-.1-.46-.14-.65.14-.19.29-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.65-1.57-.9-2.15-.23-.56-.47-.48-.65-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.77 1.17 2.96.14.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36z" />
                          </svg>
                        ),
                      },
                      {
                        label: 'Instagram',
                        href: 'https://www.instagram.com/dorisgiftingco',
                        icon: (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        ),
                      },
                      {
                        label: 'TikTok',
                        icon: (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M16.5 3c.32 2.13 1.62 3.58 3.5 3.86v2.55c-1.43 0-2.74-.41-3.84-1.12v6.55c0 3.2-2.37 5.66-5.42 5.66-3.05 0-5.24-2.46-5.24-5.66 0-2.93 2.1-5.27 4.96-5.46v2.59c-1.32.18-2.36 1.29-2.36 2.66 0 1.58 1.16 2.82 2.7 2.82 1.53 0 2.7-1.24 2.7-2.82V3h3z" />
                          </svg>
                        ),
                      },
                      {
                        label: 'Facebook',
                        icon: (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                          </svg>
                        ),
                      },
                    ].map((s) => {
                      const base = { color: 'var(--ink-soft)', display: 'inline-flex', transition: 'color 0.2s' };
                      return s.href ? (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          title={s.label}
                          style={base}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brown-deep)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-soft)')}
                        >
                          {s.icon}
                        </a>
                      ) : (
                        <span key={s.label} aria-label={s.label} title={s.label} style={base}>
                          {s.icon}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <form
                action="https://formsubmit.co/dorisgiftingco@gmail.com"
                method="POST"
                style={{
                  marginTop: 34,
                  padding: mobile ? 20 : 24,
                  background: 'rgba(255,255,255,0.48)',
                  border: '1px solid rgba(81,60,46,0.14)',
                  borderRadius: 10,
                  display: 'grid',
                  gap: 16,
                }}
                onSubmit={() => setSent(true)}
              >
                <input type="hidden" name="_subject" value="New Doris Gifting Co. Quote Request" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
                  gap: 14,
                }}>
                  <label>
                    <span style={labelStyle}>Full Name</span>
                    <input style={inputStyle} type="text" name="Full Name" required />
                  </label>
                  <label>
                    <span style={labelStyle}>Phone Number</span>
                    <input style={inputStyle} type="tel" name="Phone Number" required />
                  </label>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
                  gap: 14,
                }}>
                  <label>
                    <span style={labelStyle}>Email Address</span>
                    <input style={inputStyle} type="email" name="Email Address" required />
                  </label>
                  <label>
                    <span style={labelStyle}>Schedule Day</span>
                    <input style={inputStyle} type="date" name="Schedule Day" />
                  </label>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
                  gap: 14,
                }}>
                  <label>
                    <span style={labelStyle}>Function</span>
                    <select style={inputStyle} name="Function" required defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>Corporate Gifting</option>
                      <option>Custom Gift Boxes</option>
                      <option>Special Occasion Gifts</option>
                      <option>Bulk Orders</option>
                    </select>
                  </label>
                  <label>
                    <span style={labelStyle}>Quantity</span>
                    <input style={inputStyle} type="number" min="1" name="Quantity" placeholder="How many gifts?" />
                  </label>
                </div>

                <label>
                  <span style={labelStyle}>Tell Us What You Need</span>
                  <textarea
                    style={{ ...inputStyle, minHeight: 108, resize: 'vertical' }}
                    name="Quote Details"
                    required
                    placeholder="Share the occasion, recipient details, preferred colors, branding needs, or delivery notes."
                  />
                </label>

                <button className="btn-primary" type="submit" style={{ justifySelf: 'start' }}>
                  Get a Quote
                </button>
              </form>
              {sent && (
                <div style={{ marginTop: 12, fontSize: 12, color: 'var(--ink-mute)' }}>
                  Sending your quote request...
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOTTOM SECTION — 1440×648, padding 80px, bg #E7E0D6, curved image */}
      <section style={{
        background: '#E7E0D6',
        minHeight: mobile ? 'auto' : 648,
        padding: mobile ? '48px 24px' : '80px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'stretch',
      }}>
        <Reveal style={{ width: '100%' }}>
          <div style={{
            width: '100%',
            minHeight: mobile ? 240 : 488,
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url(' + IMG.giftWall + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: mobile ? 16 : 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: mobile ? 24 : 40,
            overflow: 'hidden',
          }}>
            <h3 className="serif" style={{
              margin: 0,
              color: '#fff',
              fontSize: mobile ? 28 : 48,
              fontWeight: 400,
              lineHeight: 1.1,
            }}>
              Let's Create something thoughtful for you
            </h3>
            <p style={{
              color: '#fff',
              opacity: 0.9,
              fontSize: mobile ? 13 : 15,
              marginTop: mobile ? 12 : 18,
            }}>
              We respond in five minutes.
            </p>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
