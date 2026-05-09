import React from 'react';

export default function Logo({ size = 'md', tone = 'dark', onClick }) {
  const fontSize = size === 'sm' ? 22 : size === 'lg' ? 38 : 28;
  const color = tone === 'light' ? '#fff' : 'var(--brown-mid)';
  return (
    <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default', lineHeight: 1, userSelect: 'none' }}>
      <div className="serif" style={{ fontSize, color, letterSpacing: '0.02em' }}>
        Doris
      </div>
      <div style={{
        fontFamily: 'var(--serif)',
        fontStyle: 'italic',
        fontSize: fontSize * 0.32,
        color,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        opacity: 0.85,
        marginTop: 2,
        textAlign: 'center'
      }}>
        Gifting Co.
      </div>
    </div>
  );
}
