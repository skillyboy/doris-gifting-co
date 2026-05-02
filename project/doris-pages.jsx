// Doris — page contents (Home, About, Gallery, Contact)
// Each page accepts { mobile, go } and is rendered inside the Nav-equipped frame.

// ─── HOME ─────────────────────────────────────────────────────────

function HomePage({ mobile, go }) {
  // hero with full-bleed image + intro
  const heroH = mobile ? 480 : 640;
  return (
    <div>
      <div
        style={{
          position: 'relative', height: heroH,
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.40) 100%), url(${IMG.workshop})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            color: '#fff',
            padding: mobile ? '0 24px' : '0 80px',
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <div className="serif" style={{ fontSize: mobile ? 40 : 64, lineHeight: 1.05, marginBottom: 12 }}>
              Thoughtful Gifting<br/>Elevated
            </div>
            <p style={{ color: '#fff', opacity: 0.92, fontSize: mobile ? 14 : 16, maxWidth: 460, margin: 0 }}>
              Premium, curated gift experiences for the moments that matter most — designed to leave a lasting impression.
            </p>
            <button
              onClick={() => go('gallery')}
              style={{
                marginTop: 24,
                background: '#fff', color: 'var(--ink)', border: 0,
                padding: '12px 28px', borderRadius: 6, fontSize: 14, fontWeight: 500, cursor: 'pointer',
              }}
            >
              See our work
            </button>
          </div>
        </div>
      </div>

      {/* Three featured product cards */}
      <div style={{ background: '#fff', padding: mobile ? '40px 24px' : '80px 80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1fr 1fr',
          gap: mobile ? 14 : 20,
        }}>
          {[IMG.g1, IMG.g3, IMG.g5].map((src, i) => (
            <div key={i} style={{
              height: mobile ? 200 : 280,
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              borderRadius: 4,
            }} />
          ))}
        </div>
      </div>

      {/* About Doris snippet */}
      <div style={{ background: '#fff', padding: mobile ? '12px 24px 56px' : '24px 80px 96px', textAlign: 'center' }}>
        <SectionTitle mobile={mobile}>About Doris</SectionTitle>
        <p style={{
          maxWidth: 720, margin: '0 auto', fontSize: mobile ? 14 : 15,
          lineHeight: 1.7, color: 'var(--ink-soft)',
        }}>
          At Doris Gifting Co., we believe that every gift should be intentional, meaningful, and memorable.
          We specialize in creating premium, curated gift boxes designed to elevate both personal and professional experiences.
          Whether you are appreciating clients, welcoming employees, or celebrating special moments,
          our goal is to help you leave a lasting impression.
        </p>
      </div>

      {/* Store interior */}
      <div style={{ background: '#fff', padding: mobile ? '0 24px 56px' : '0 80px 96px' }}>
        <div style={{
          width: '100%', height: mobile ? 220 : 460,
          backgroundImage: `url(${IMG.storeInterior})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          borderRadius: 4,
        }} />
      </div>

      {/* Gallery teaser */}
      <div style={{ background: '#fff', padding: mobile ? '0 24px 32px' : '0 80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: mobile ? 20 : 32 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 12 }}>
            Gallery
          </div>
          <h2 className="serif" style={{ margin: 0, color: 'var(--bronze)', fontSize: mobile ? 28 : 36, fontWeight: 500 }}>
            A Study in Thoughtful Details
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: mobile ? 8 : 14,
        }}>
          {[IMG.g1, IMG.g2, IMG.g3, IMG.g4, IMG.g5, IMG.g6, IMG.g7, IMG.g8].map((src, i) => (
            <div key={i} style={{
              aspectRatio: '1 / 1',
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              borderRadius: 2,
            }} />
          ))}
        </div>
      </div>

      {/* Services */}
      <div style={{ background: '#fff', padding: mobile ? '40px 24px' : '96px 80px' }}>
        <div style={{ textAlign: mobile ? 'left' : 'left', marginBottom: 24 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 12 }}>
            Services
          </div>
          <h2 className="serif" style={{
            margin: 0, color: 'var(--bronze)',
            fontSize: mobile ? 26 : 32, fontWeight: 500, maxWidth: 520, lineHeight: 1.15,
          }}>
            How we craft meaningful gifting experiences
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1.1fr 1fr',
          gap: mobile ? 24 : 56, alignItems: 'center',
        }}>
          <div>
            {[
              ['Corporate Gifting', 'Branded boxes that say thank you with intention.'],
              ['Custom Gift Boxes', 'Bespoke compositions for personal milestones.'],
              ['Special Occasion Gifts', 'Curated moments — birthdays, weddings, hellos.'],
              ['Bulk Orders', 'Volume pricing without losing the handmade touch.'],
            ].map(([t, d], i) => (
              <div key={i} style={{
                padding: '18px 0',
                borderBottom: '1px solid var(--line)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
              }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{t}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{d}</div>
                </div>
                <div style={{ fontSize: 12, letterSpacing: '0.16em', color: 'var(--bronze)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  Learn more →
                </div>
              </div>
            ))}
          </div>
          <div style={{
            height: mobile ? 240 : 380,
            backgroundImage: `url(${IMG.g6})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            borderRadius: 4,
          }}/>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ background: 'var(--bronze)', padding: mobile ? '40px 24px' : '80px 80px', color: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: mobile ? 24 : 40 }}>
          <h2 className="serif" style={{ margin: 0, fontSize: mobile ? 28 : 36, fontWeight: 500, color: '#fff' }}>
            What Our Clients Say
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1fr 1fr',
          gap: mobile ? 16 : 24,
        }}>
          {[
            { name: 'Adaeze O.', role: 'Marketing Lead', avatar: IMG.a1, text: 'The team made our client appreciation feel like a brand moment. Every detail was considered.' },
            { name: 'Marcus R.',  role: 'Founder',        avatar: IMG.a3, text: 'Sent these to our 40 best customers — the response was instant. We\u2019ll be back every quarter.' },
            { name: 'Liana P.',   role: 'Bride',          avatar: IMG.a2, text: 'Our welcome boxes were the conversation of the weekend. Thoughtful from box to ribbon.' },
            { name: 'James K.',   role: 'COO',            avatar: IMG.a4, text: 'Onboarding boxes that new hires actually open and post about. Quality is unmatched.' },
            { name: 'Esi A.',     role: 'Stylist',        avatar: IMG.a5, text: 'Beautiful, intentional, and personal. Doris translates a vibe better than anyone we\u2019ve worked with.' },
            { name: 'Theo M.',    role: 'Investor',       avatar: IMG.a6, text: 'A holiday gift that earned three thank-you calls. That\u2019s rare.' },
          ].map((t, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.08)', borderRadius: 8,
              padding: mobile ? 18 : 22,
              border: '1px solid rgba(255,255,255,0.12)',
            }}>
              <div style={{ color: '#f3d9bd', fontSize: 14, marginBottom: 10 }}>★★★★★</div>
              <p style={{ color: '#fff', opacity: 0.95, fontSize: 13, lineHeight: 1.6, margin: 0, marginBottom: 16 }}>
                {t.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 999,
                  backgroundImage: `url(${t.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center',
                }}/>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: '#fff', opacity: 0.7 }}>{t.role}</div>
                </div>
              </div>
            </div>
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

// ─── ABOUT ────────────────────────────────────────────────────────

function AboutPage({ mobile, go }) {
  const heroH = mobile ? 380 : 520;
  return (
    <div>
      {/* Hero with workshop image + "About Doris" italic overlay */}
      <div
        style={{
          position: 'relative', height: heroH,
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.10) 35%, rgba(0,0,0,0.10) 65%, rgba(0,0,0,0.40) 100%), url(${IMG.storeInterior})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            color: '#fff', textAlign: 'center', gap: 12,
          }}
        >
          <div className="serif" style={{ fontSize: mobile ? 48 : 72, lineHeight: 1, textShadow: '0 2px 24px rgba(0,0,0,0.3)' }}>
            About Doris
          </div>
          <div style={{ fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', opacity: 0.85 }}>
            Scroll down ↓
          </div>
        </div>
      </div>

      {/* About copy */}
      <div style={{ background: '#fff', padding: mobile ? '56px 24px 32px' : '96px 80px 48px', textAlign: 'center' }}>
        <SectionTitle mobile={mobile}>About Doris</SectionTitle>
        <p style={{
          maxWidth: 760, margin: '0 auto 18px', fontSize: mobile ? 14 : 15,
          lineHeight: 1.75, color: 'var(--ink-soft)',
        }}>
          At Doris Gifting Co., we believe that every gift should be intentional, meaningful, and memorable.
          We specialize in creating premium, curated gift boxes designed to elevate both personal and professional experiences.
          Whether you are appreciating clients, welcoming employees, or celebrating special moments,
          our goal is to help you leave a lasting impression.
        </p>
        <p style={{
          maxWidth: 760, margin: '0 auto', fontSize: mobile ? 14 : 15,
          lineHeight: 1.75, color: 'var(--ink-soft)',
        }}>
          Built on a foundation of thoughtfulness, quality, and attention to detail,
          each box is carefully curated to reflect elegance and purpose.
        </p>
      </div>

      {/* Founder */}
      <div style={{ background: '#fff', padding: mobile ? '32px 24px 56px' : '48px 80px 96px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1.1fr',
          gap: mobile ? 28 : 64, alignItems: 'center',
        }}>
          <div style={{ order: mobile ? 1 : 0 }}>
            <h2 className="serif" style={{ margin: '0 0 18px', color: 'var(--bronze)', fontSize: mobile ? 32 : 40, fontWeight: 500 }}>
              Meet The Founder
            </h2>
            <p style={{ fontSize: mobile ? 14 : 15, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
              Doris Gifting Co. was founded with a passion for thoughtful details and meaningful experiences.
              Led by a vision of elevated gifting, delivering quality, creativity, and professionalism in
              every box we create. I want every client to feel valued through gifts that are not only beautiful
              but intentional.
            </p>
            <div style={{ height: 14 }} />
            <div style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bronze)' }}>
              — Doris, Founder
            </div>
          </div>
          <div style={{
            width: '100%', aspectRatio: mobile ? '4 / 5' : '5 / 6',
            backgroundImage: `url(${IMG.founder})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            borderRadius: 4,
          }}/>
        </div>
      </div>

      <CTABanner
        headline="Plan your dream event"
        sub="Will respond in few minutes"
        button="Let's Talk"
        mobile={mobile}
        go={go}
      />
    </div>
  );
}

// ─── GALLERY ──────────────────────────────────────────────────────

const GALLERY_FILTERS = ['All', 'Corporate Gifting', 'Custom Gift Boxes', 'Special Occasion Gifts', 'Bulk Orders'];

const GALLERY_ITEMS = [
  { src: 'img/g-vmo.jpg',       cat: 'Corporate Gifting',      ratio: '4 / 3', span: 2 },
  { src: 'img/g-huxley.jpg',    cat: 'Custom Gift Boxes',      ratio: '4 / 3' },
  { src: 'img/g-casa.jpg',      cat: 'Bulk Orders',            ratio: '1 / 1' },
  { src: 'img/g-refy.jpg',      cat: 'Custom Gift Boxes',      ratio: '1 / 1' },
  { src: 'img/g-happybday.jpg', cat: 'Special Occasion Gifts', ratio: '1 / 1' },
  { src: 'img/g-arhaus.jpg',    cat: 'Bulk Orders',            ratio: '1 / 1' },
  { src: 'img/g-vmo.jpg',       cat: 'Corporate Gifting',      ratio: '4 / 3', span: 2 },
  { src: 'img/g-casa.jpg',      cat: 'Bulk Orders',            ratio: '3 / 4' },
  { src: 'img/g-huxley.jpg',    cat: 'Custom Gift Boxes',      ratio: '1 / 1' },
  { src: 'img/g-happybday.jpg', cat: 'Special Occasion Gifts', ratio: '4 / 5' },
  { src: 'img/g-refy.jpg',      cat: 'Custom Gift Boxes',      ratio: '1 / 1' },
];

function GalleryPage({ mobile, go }) {
  const [filter, setFilter] = React.useState('All');
  const items = filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.cat === filter);

  return (
    <div>
      {/* Title block */}
      <div style={{ background: '#fff', padding: mobile ? '110px 24px 24px' : '140px 80px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 14 }}>
          Gallery
        </div>
        <h1 className="serif" style={{ margin: 0, color: 'var(--bronze)', fontSize: mobile ? 30 : 40, fontWeight: 500 }}>
          A Study in Thoughtful Details
        </h1>
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
                  padding: '14px 12px', fontSize: 13,
                  border: '1px solid var(--bronze)',
                  background: filter === f ? 'var(--bronze)' : 'transparent',
                  color: filter === f ? '#fff' : 'var(--bronze)',
                  borderRadius: 2, fontFamily: 'var(--sans)',
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
                  padding: '12px 22px', fontSize: 12, letterSpacing: '0.14em',
                  border: '1px solid var(--bronze)',
                  background: filter === f ? 'var(--bronze)' : 'transparent',
                  color: filter === f ? '#fff' : 'var(--bronze)',
                  borderRadius: 2, fontFamily: 'var(--sans)',
                  cursor: 'pointer', textTransform: 'uppercase',
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
            <div key={i} style={{
              gridColumn: !mobile && it.span === 2 ? 'span 2' : 'span 1',
              width: '100%', aspectRatio: it.ratio,
              backgroundImage: `url(${it.src})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              borderRadius: 2,
            }}/>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: mobile ? 28 : 48 }}>
          <button style={{
            background: 'transparent', color: 'var(--ink)',
            border: '1px solid var(--ink)', padding: '12px 28px',
            borderRadius: 2, fontSize: 13, letterSpacing: '0.12em',
            textTransform: 'uppercase', cursor: 'pointer',
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
    </div>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────

function ContactPage({ mobile, go }) {
  return (
    <div>
      <div style={{ background: 'var(--cream)', padding: mobile ? '110px 24px 24px' : '140px 80px 32px', textAlign: 'center' }}>
        <h1 className="serif" style={{ margin: 0, color: 'var(--bronze)', fontSize: mobile ? 36 : 44, fontWeight: 500 }}>
          Contact Us
        </h1>
      </div>

      <div style={{ background: 'var(--cream)', padding: mobile ? '24px' : '0 80px 80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
          gap: mobile ? 28 : 80, alignItems: 'flex-start',
        }}>
          <div style={{
            width: '100%',
            aspectRatio: mobile ? '4 / 5' : '5 / 6',
            backgroundImage: `url(${IMG.contactHand})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            borderRadius: 2,
          }}/>

          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--ink)', marginBottom: 16 }}>
              GET IN TOUCH
            </div>
            <p style={{ margin: '0 0 36px', fontSize: 14, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 460 }}>
              Whether you're curating a special gift, planning a corporate order, or need help bringing your vision to life,
              we're here to help. Reach out today and let us create something thoughtful, beautiful, and truly memorable.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: mobile ? '1fr 1fr' : '1fr 1fr',
              rowGap: 26, columnGap: 32, marginBottom: 32,
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Email</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>hello@dorisgifting.co</div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Address</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Houston, Texas</div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Phone Number</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>+1 301 364 6072 89</div>
              </div>
            </div>

            <button style={{
              background: 'var(--bronze)', color: '#fff', border: 0,
              padding: '12px 26px', borderRadius: 4, fontSize: 13,
              fontFamily: 'var(--sans)', cursor: 'pointer',
            }}>
              Email Us
            </button>
          </div>
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

Object.assign(window, { HomePage, AboutPage, GalleryPage, ContactPage });
