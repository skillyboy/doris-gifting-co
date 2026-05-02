import React from 'react';

export default function SectionTitle({ children, eyebrow, align = 'center', mobile, color }) {
  return (
    <div style={{ textAlign: align, marginBottom: 24 }}>
      {eyebrow && (
        <div style={{
          fontSize: 11,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'var(--ink-soft)',
          marginBottom: 14,
        }}>
          {eyebrow}
        </div>
      )}
      <h2 className="serif" style={{
        margin: 0,
        color: color || 'var(--bronze)',
        fontSize: mobile ? 32 : 40,
        lineHeight: 1.1,
        fontWeight: 500,
      }}>
        {children}
      </h2>
    </div>
  );
}
