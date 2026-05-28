import React, { useState } from 'react';
import { IMG } from '../constants';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import WhatsAppPopup from '../components/WhatsAppPopup';

export default function Contact({ mobile }) {
  const [sent, setSent] = useState(false);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--brown-deep)', marginBottom: 4 }}>WhatsApp</div>
                  <button
                    type="button"
                    onClick={() => setWhatsAppOpen(true)}
                    style={{
                      background: 'transparent',
                      border: 0,
                      borderBottom: '1px solid var(--brown-deep)',
                      color: 'var(--brown-deep)',
                      fontSize: 14,
                      padding: '0 0 3px',
                      fontFamily: 'var(--sans)',
                    }}
                  >
                    Choose WhatsApp number
                  </button>
                </div>

                <div style={{ marginTop: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--brown-deep)', marginBottom: 12 }}>Connect With Us</div>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <a
                      href="https://www.instagram.com/dorisgiftingco"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'var(--brown-deep)',
                        color: '#fff',
                        textDecoration: 'none',
                        transition: 'background 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'var(--brown-mid)'}
                      onMouseLeave={(e) => e.target.style.background = 'var(--brown-deep)'}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <circle cx="17.5" cy="6.5" r="1.5"></circle>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/dorisgiftingco"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'var(--brown-deep)',
                        color: '#fff',
                        textDecoration: 'none',
                        transition: 'background 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'var(--brown-mid)'}
                      onMouseLeave={(e) => e.target.style.background = 'var(--brown-deep)'}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 2h-3a6 6 0 0 0-6 6v4h-2v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h1z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'var(--brown-deep)',
                        color: '#fff',
                        textDecoration: 'none',
                        transition: 'background 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'var(--brown-mid)'}
                      onMouseLeave={(e) => e.target.style.background = 'var(--brown-deep)'}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21.5 2H2.5C1.12 2 0 3.12 0 4.5v15C0 20.88 1.12 22 2.5 22h18.99C22.88 22 24 20.88 24 19.5v-15C24 3.12 22.88 2 21.5 2zm-4.39 15.5H18.5v6h-3.5v-6h-2.68v-3h2.68v-1.93c0-2.25.543-3.57 3.47-3.57h2.62v3h-1.82c-.6 0-.63.22-.63.65v1.85h2.5l-.34 3z"></path>
                      </svg>
                    </a>
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

                <label>
                  <span style={labelStyle}>Email Address</span>
                  <input style={inputStyle} type="email" name="Email Address" required />
                </label>

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

      <WhatsAppPopup
        open={whatsAppOpen}
        onClose={() => setWhatsAppOpen(false)}
        mobile={mobile}
      />
    </div>
  );
}
