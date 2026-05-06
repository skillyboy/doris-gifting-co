import React from 'react';

const B = import.meta.env.BASE_URL;

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
        src={`${B}img/logo.png`}
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
