import React, { useEffect } from 'react';

export default function Lightbox({ images, index, onClose, onIndex }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onIndex((index + 1) % images.length);
      else if (e.key === 'ArrowLeft') onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, images.length, onIndex, onClose]);

  if (index == null) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'rgba(20,15,10,0.92)',
        display: 'grid',
        placeItems: 'center',
        padding: 32,
        animation: 'doris-fade 220ms ease',
      }}
    >
      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '92vw',
          maxHeight: '88vh',
          objectFit: 'contain',
          boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
          borderRadius: 4,
          animation: 'doris-rise 360ms cubic-bezier(.2,.7,.2,1)',
        }}
      />
      <button
        aria-label="Previous"
        onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + images.length) % images.length); }}
        style={lbBtn('left')}
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % images.length); }}
        style={lbBtn('right')}
      >
        ›
      </button>
      <button
        aria-label="Close"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 22,
          right: 22,
          width: 44,
          height: 44,
          background: 'transparent',
          border: 0,
          color: '#fff',
          fontSize: 30,
          cursor: 'pointer',
          lineHeight: 1,
        }}
      >
        ×
      </button>
      <div
        style={{
          position: 'fixed',
          bottom: 22,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: 'rgba(255,255,255,0.72)',
          fontFamily: 'var(--sans)',
          fontSize: 12,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
        }}
      >
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

function lbBtn(side) {
  return {
    position: 'fixed',
    top: '50%',
    [side]: 22,
    transform: 'translateY(-50%)',
    width: 52,
    height: 52,
    borderRadius: 999,
    background: 'rgba(255,255,255,0.10)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.25)',
    fontSize: 28,
    cursor: 'pointer',
    lineHeight: 1,
    backdropFilter: 'blur(6px)',
  };
}
