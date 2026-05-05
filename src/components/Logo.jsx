import React from 'react';

export default function Logo({ size = 1, className, style }) {
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
        src="/img/logo.jpg"
        alt="Doris Gifting Co."
        style={{
          height: 56 * size,
          width: 'auto',
          display: 'block',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
}
