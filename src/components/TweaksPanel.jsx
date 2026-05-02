import React, { useState } from 'react';

const STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:260px;
    display:flex;flex-direction:column;
    background:rgba(250,249,247,.92);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b;transform:none}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-lbl{font-weight:500;color:rgba(41,38,27,.72);font-size:11px;margin-bottom:2px}
  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}
`;

export default function TweaksPanel({ accent, onAccent, accentOptions, headingFont, onHeadingFont, fontOptions }) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        title="Design tweaks"
        style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
          zIndex: 2147483646,
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'var(--bronze)',
          color: '#fff',
          border: 0,
          fontSize: 20,
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.22)',
          display: 'grid',
          placeItems: 'center',
          lineHeight: 1,
        }}
      >
        ✦
      </button>
    );
  }

  return (
    <>
      <style>{STYLE}</style>
      <div className="twk-panel">
        <div className="twk-hd">
          <b>Tweaks</b>
          <button className="twk-x" onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="twk-body">
          <div className="twk-sect">Brand</div>

          <div className="twk-row">
            <div className="twk-lbl">Accent color</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {accentOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => onAccent(opt.value)}
                  title={opt.label}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: opt.value,
                    border: accent === opt.value ? '2px solid rgba(255,255,255,0.9)' : '2px solid transparent',
                    boxShadow: accent === opt.value ? `0 0 0 2px ${opt.value}` : '0 1px 3px rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'box-shadow 160ms ease',
                  }}
                />
              ))}
            </div>
          </div>

          <div className="twk-row">
            <div className="twk-lbl">Heading serif</div>
            <select
              className="twk-field"
              value={headingFont}
              onChange={(e) => onHeadingFont(e.target.value)}
            >
              {fontOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
