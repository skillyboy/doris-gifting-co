import React, { useState } from 'react';

export default function ContactForm({ mobile }) {
  const [form, setForm] = useState({
    name: '', email: '', occasion: '', date: '', budget: '', message: '',
  });
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

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
        background: 'var(--cream)',
        padding: mobile ? 28 : 40,
        borderRadius: 4,
        textAlign: 'center',
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

  return (
    <form onSubmit={onSubmit}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
        columnGap: 24,
        rowGap: 20,
        marginBottom: 24,
      }}>
        <Field name="name" label="Your name" placeholder="Adaeze Okafor" half mobile={mobile}
               form={form} setForm={setForm} touched={touched} setTouched={setTouched} errors={errors} />
        <Field name="email" label="Email" type="email" placeholder="you@company.com" half mobile={mobile}
               form={form} setForm={setForm} touched={touched} setTouched={setTouched} errors={errors} />
        <Field name="occasion" label="Occasion" placeholder="Client appreciation · 40 boxes" mobile={mobile}
               form={form} setForm={setForm} touched={touched} setTouched={setTouched} errors={errors} />
        <Field name="date" label="Date needed" placeholder="MM / DD / YYYY" half mobile={mobile}
               form={form} setForm={setForm} touched={touched} setTouched={setTouched} errors={errors} />
        <Field name="budget" label="Budget per box" placeholder="$150 – $250" half mobile={mobile}
               form={form} setForm={setForm} touched={touched} setTouched={setTouched} errors={errors} />

        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{
            display: 'block',
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: 8,
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
              width: '100%',
              padding: 14,
              border: `1px solid ${touched.message && errors.message ? '#b04a3a' : 'var(--line)'}`,
              borderRadius: 4,
              background: '#fff',
              fontFamily: 'var(--sans)',
              fontSize: 14,
              color: 'var(--ink)',
              lineHeight: 1.55,
              resize: 'vertical',
              outline: 'none',
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
          background: 'var(--bronze)',
          color: '#fff',
          border: 0,
          padding: '14px 28px',
          borderRadius: 4,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.06em',
          cursor: 'pointer',
          fontFamily: 'var(--sans)',
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

function Field({ name, label, type = 'text', placeholder, half, mobile, form, setForm, touched, setTouched, errors }) {
  const err = touched[name] && errors[name];
  return (
    <div style={{ gridColumn: half && !mobile ? 'span 1' : '1 / -1' }}>
      <label style={{
        display: 'block',
        fontSize: 11,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--ink-soft)',
        marginBottom: 8,
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
          width: '100%',
          padding: '12px 0',
          border: 0,
          borderBottom: `1px solid ${err ? '#b04a3a' : 'var(--line)'}`,
          background: 'transparent',
          fontFamily: 'var(--sans)',
          fontSize: 15,
          color: 'var(--ink)',
          outline: 'none',
        }}
      />
      {err && <div style={{ fontSize: 11, color: '#b04a3a', marginTop: 4 }}>{err}</div>}
    </div>
  );
}
