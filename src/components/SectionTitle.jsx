import React from 'react';

export default function SectionTitle({ children, mobile, align = 'center', size = 'md', style }) {
  const fs = mobile
    ? (size === 'lg' ? 32 : 28)
    : (size === 'lg' ? 48 : 40);
  return (
    <h2
      className="serif"
      style={{
        margin: 0,
        color: 'var(--brown-mid)',
        fontSize: fs,
        lineHeight: 1.05,
        fontWeight: 400,
        textAlign: align,
        letterSpacing: 0,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}
