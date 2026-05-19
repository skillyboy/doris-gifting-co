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
