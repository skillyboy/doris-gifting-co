import React, { useEffect } from 'react';

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!src) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(20,16,12,0.92)',
        zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, animation: 'doris-fade 240ms ease',
      }}
    >
      <img
        src={src}
        alt=""
        style={{ maxWidth: '92vw', maxHeight: '88vh', boxShadow: '0 30px 80px rgba(0,0,0,.5)', animation: 'doris-rise 320ms ease' }}
      />
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
        style={{
          position: 'absolute', top: 24, right: 24, background: 'transparent', border: 0,
          color: '#fff', fontSize: 32, cursor: 'pointer',
        }}
      >×</button>
    </div>
  );
}
