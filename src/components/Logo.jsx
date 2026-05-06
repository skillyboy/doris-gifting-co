import React from 'react';

const B = import.meta.env.BASE_URL;

export default function Logo({ size = 1, variant = 'dark', className, style }) {
  const src = variant === 'light' ? `${B}img/logo-white.svg` : `${B}img/logo.png`;
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
