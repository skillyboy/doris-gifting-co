// Doris logo — gift-box mark + script wordmark + small caption
// Approximates the warm bronze logo from the reference.

function DorisLogo({ size = 1, color, className, style }) {
  const c = color || 'var(--doris-bronze, #967259)';
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2 * size,
        lineHeight: 1,
        color: c,
        ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4 * size }}>
        {/* gift-box + sparkles glyph */}
        <svg
          width={28 * size}
          height={32 * size}
          viewBox="0 0 56 64"
          fill="none"
          aria-hidden="true"
          style={{ flex: 'none' }}
        >
          {/* sparkles */}
          <path d="M48 6 L49 10 L53 11 L49 12 L48 16 L47 12 L43 11 L47 10 Z" fill={c}/>
          <path d="M53 18 L53.6 20 L55.5 20.5 L53.6 21 L53 23 L52.4 21 L50.5 20.5 L52.4 20 Z" fill={c}/>
          {/* box body */}
          <rect x="10" y="32" width="36" height="22" rx="1.5" stroke={c} strokeWidth="1.6" fill="none"/>
          {/* center vertical ribbon on body */}
          <rect x="26" y="32" width="4" height="22" fill={c}/>
          {/* lid */}
          <rect x="8" y="28" width="40" height="6" rx="1" stroke={c} strokeWidth="1.6" fill="none"/>
          <rect x="26" y="28" width="4" height="6" fill={c}/>
          {/* bow loops */}
          <path
            d="M28 28 C 22 22, 16 22, 16 26 C 16 29, 22 29, 28 28 Z"
            stroke={c} strokeWidth="1.6" fill="none" strokeLinejoin="round"
          />
          <path
            d="M28 28 C 34 22, 40 22, 40 26 C 40 29, 34 29, 28 28 Z"
            stroke={c} strokeWidth="1.6" fill="none" strokeLinejoin="round"
          />
          {/* knot */}
          <ellipse cx="28" cy="27.5" rx="2.4" ry="1.6" fill={c}/>
        </svg>

        {/* "Doris" wordmark */}
        <div
          style={{
            fontFamily: "'Pinyon Script', 'Cormorant Garamond', cursive",
            fontWeight: 400,
            fontSize: 38 * size,
            lineHeight: 0.9,
            letterSpacing: '-0.01em',
            color: c,
            transform: 'translateY(2px)',
          }}
        >
          Doris
        </div>
      </div>

      {/* "Gifting Co." caption — script style, indented under the wordmark */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 11 * size,
          letterSpacing: '0.02em',
          color: c,
          paddingLeft: 36 * size,
        }}
      >
        Gifting Co.
      </div>
    </div>
  );
}

window.DorisLogo = DorisLogo;
