import React, { useEffect } from 'react';

const WHATSAPP_OPTIONS = [
  {
    label: 'American Number',
    number: '+1 (301) 364-6072',
    href: 'https://wa.me/13013646072',
  },
  {
    label: 'Nigerian Number',
    number: '+234 (0) 8102904984',
    href: 'https://wa.me/2348102904984',
  },
];

export default function WhatsAppPopup({ open, onClose, mobile }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="presentation"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(26,20,16,0.48)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: mobile ? 20 : 32,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-popup-title"
        onClick={(event) => event.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 430,
          background: '#fff',
          borderRadius: 18,
          border: '1px solid rgba(81,60,46,0.16)',
          boxShadow: '0 24px 80px rgba(26,20,16,0.24)',
          padding: mobile ? 24 : 30,
          color: 'var(--ink)',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close WhatsApp options"
          style={{
            float: 'right',
            background: 'transparent',
            border: 0,
            color: 'var(--ink-mute)',
            fontSize: 24,
            lineHeight: 1,
            padding: 0,
          }}
        >
          ×
        </button>

        <div
          id="whatsapp-popup-title"
          className="serif"
          style={{
            color: 'var(--brown-mid)',
            fontSize: mobile ? 30 : 36,
            lineHeight: 1.05,
            marginBottom: 10,
          }}
        >
          Chat with us on WhatsApp
        </div>
        <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 22 }}>
          Choose the number that works best for you.
        </p>

        <div style={{ display: 'grid', gap: 12 }}>
          {WHATSAPP_OPTIONS.map((option) => (
            <a
              key={option.href}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                padding: '15px 16px',
                borderRadius: 12,
                border: '1px solid var(--line)',
                background: '#F7F3EE',
                color: 'var(--brown-deep)',
                textDecoration: 'none',
              }}
            >
              <span>
                <strong style={{ display: 'block', fontSize: 14 }}>{option.label}</strong>
                <span style={{ display: 'block', marginTop: 4, fontSize: 14, color: 'var(--ink-soft)' }}>
                  {option.number}
                </span>
              </span>
              <span aria-hidden="true" style={{ fontSize: 18 }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
