import React from 'react';

const B = import.meta.env.BASE_URL;

export default function Logo({ size = 'md', tone = 'dark', onClick }) {
  // pixel heights: sm 32, md 44, lg 60 — match the figma's three nav/footer scales
  const height = size === 'sm' ? 32 : size === 'lg' ? 60 : 44;
  const filter = tone === 'light' ? 'brightness(0) invert(1)' : 'none';
  return (
    <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default', lineHeight: 0, userSelect: 'none' }}>
      <img
        src={`${B}img/logo.png`}
        alt="Doris Gifting Co."
        style={{
          height,
          width: 'auto',
          display: 'block',
          filter,
        }}
      />
    </div>
  );
}
