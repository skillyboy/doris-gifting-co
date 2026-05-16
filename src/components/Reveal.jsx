import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          obs.disconnect();
        }
      });
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 700ms ease, transform 700ms ease',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
