// Doris — polish layer: scroll-reveal, gallery lightbox, contact form, image preloads
// Loaded after the page modules; augments behavior via global utilities.

// ─── ScrollReveal ────────────────────────────────────────────────
// Wraps children; fades + lifts them into view on first intersection.
function Reveal({ children, delay = 0, y = 24, as: Tag = 'div', style }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 720ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 720ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// ─── Gallery lightbox ────────────────────────────────────────────
// Opens a single image in a centered overlay; ←/→ to step, Esc to close.
function Lightbox({ images, index, onClose, onIndex }) {
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onIndex((index + 1) % images.length);
      else if (e.key === 'ArrowLeft') onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, images.length, onIndex, onClose]);

  if (index == null) return null;
  const src = images[index];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        background: 'rgba(20,15,10,0.92)',
        display: 'grid', placeItems: 'center',
        padding: 32,
        animation: 'doris-fade 220ms ease',
      }}
    >
      <img
        src={src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '92vw', maxHeight: '88vh',
          objectFit: 'contain',
          boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
          borderRadius: 4,
          animation: 'doris-rise 360ms cubic-bezier(.2,.7,.2,1)',
        }}
      />
      {/* prev */}
      <button
        aria-label="Previous"
        onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + images.length) % images.length); }}
        style={lbBtn('left')}
      >‹</button>
      {/* next */}
      <button
        aria-label="Next"
        onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % images.length); }}
        style={lbBtn('right')}
      >›</button>
      {/* close */}
      <button
        aria-label="Close"
        onClick={onClose}
        style={{
          position: 'fixed', top: 22, right: 22, width: 44, height: 44,
          background: 'transparent', border: 0, color: '#fff',
          fontSize: 30, cursor: 'pointer', lineHeight: 1,
        }}
      >×</button>
      {/* counter */}
      <div style={{
        position: 'fixed', bottom: 22, left: 0, right: 0, textAlign: 'center',
        color: 'rgba(255,255,255,0.72)', fontFamily: 'var(--sans)',
        fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase',
      }}>
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
function lbBtn(side) {
  return {
    position: 'fixed', top: '50%', [side]: 22, transform: 'translateY(-50%)',
    width: 52, height: 52, borderRadius: 999,
    background: 'rgba(255,255,255,0.10)', color: '#fff',
    border: '1px solid rgba(255,255,255,0.25)',
    fontSize: 28, cursor: 'pointer', lineHeight: 1,
    backdropFilter: 'blur(6px)',
  };
}

// ─── Contact form ────────────────────────────────────────────────
// Real fields with light validation + a "sent" confirmation state.
function ContactForm({ mobile }) {
  const [form, setForm] = React.useState({
    name: '', email: '', occasion: '', date: '', budget: '', message: '',
  });
  const [touched, setTouched] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const errors = {};
  if (!form.name.trim()) errors.name = 'Required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email';
  if (!form.message.trim() || form.message.trim().length < 10) errors.message = 'Tell us a little more';

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: 1, email: 1, message: 1 });
    if (Object.keys(errors).length) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div style={{
        background: 'var(--cream)', padding: mobile ? 28 : 40,
        borderRadius: 4, textAlign: 'center',
      }}>
        <div className="serif" style={{ fontSize: mobile ? 28 : 36, color: 'var(--bronze)', marginBottom: 12 }}>
          Thank you, {form.name.split(' ')[0] || 'friend'}.
        </div>
        <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-soft)', maxWidth: 420, marginInline: 'auto' }}>
          Your note is on its way. We'll be in touch within a few hours — usually sooner.
        </p>
      </div>
    );
  }

  const Field = ({ name, label, type = 'text', placeholder, half }) => {
    const err = touched[name] && errors[name];
    return (
      <div style={{ gridColumn: half && !mobile ? 'span 1' : '1 / -1' }}>
        <label style={{
          display: 'block',
          fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--ink-soft)', marginBottom: 8,
        }}>
          {label}
        </label>
        <input
          type={type}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          onBlur={() => setTouched({ ...touched, [name]: 1 })}
          placeholder={placeholder}
          style={{
            width: '100%', padding: '12px 0',
            border: 0, borderBottom: `1px solid ${err ? '#b04a3a' : 'var(--line)'}`,
            background: 'transparent',
            fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink)',
            outline: 'none',
          }}
        />
        {err && <div style={{ fontSize: 11, color: '#b04a3a', marginTop: 4 }}>{err}</div>}
      </div>
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
        columnGap: 24, rowGap: 20, marginBottom: 24,
      }}>
        <Field name="name" label="Your name" placeholder="Adaeze Okafor" half />
        <Field name="email" label="Email" type="email" placeholder="you@company.com" half />
        <Field name="occasion" label="Occasion" placeholder="Client appreciation · 40 boxes" />
        <Field name="date" label="Date needed" type="text" placeholder="MM / DD / YYYY" half />
        <Field name="budget" label="Budget per box" placeholder="$150 – $250" half />

        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{
            display: 'block', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--ink-soft)', marginBottom: 8,
          }}>
            A few words about the recipient
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            onBlur={() => setTouched({ ...touched, message: 1 })}
            rows={4}
            placeholder="Tell us about the moment, the recipient, the vibe…"
            style={{
              width: '100%', padding: 14,
              border: `1px solid ${touched.message && errors.message ? '#b04a3a' : 'var(--line)'}`,
              borderRadius: 4, background: '#fff',
              fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink)',
              lineHeight: 1.55, resize: 'vertical', outline: 'none',
            }}
          />
          {touched.message && errors.message && (
            <div style={{ fontSize: 11, color: '#b04a3a', marginTop: 4 }}>{errors.message}</div>
          )}
        </div>
      </div>

      <button
        type="submit"
        style={{
          background: 'var(--bronze)', color: '#fff', border: 0,
          padding: '14px 28px', borderRadius: 4, fontSize: 13, fontWeight: 500,
          letterSpacing: '0.06em', cursor: 'pointer', fontFamily: 'var(--sans)',
        }}
      >
        Send Inquiry
      </button>
      <span style={{ marginLeft: 14, fontSize: 12, color: 'var(--ink-mute)' }}>
        Will respond in few minutes
      </span>
    </form>
  );
}

Object.assign(window, { Reveal, Lightbox, ContactForm });
