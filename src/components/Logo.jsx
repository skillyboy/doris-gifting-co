import React from 'react';

export default function Logo({ size = 1, variant = 'dark', className, style }) {
  const src = variant === 'light' ? '/img/logo-white.svg' : '/img/logo.svg';
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 1,
        ...style,
      }}
    >
      <img
        src={src}
        alt="Doris Gifting Co."
        style={{
          height: 56 * size,
          width: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
}
