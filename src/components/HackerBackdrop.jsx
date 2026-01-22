import React, { useMemo } from 'react';

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+-=<>?';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomText(length) {
  let out = '';
  for (let i = 0; i < length; i += 1) {
    out += CHARSET[randomInt(0, CHARSET.length - 1)];
  }
  return out;
}

const HackerBackdrop = ({ density = 18, className = '' }) => {
  const columns = useMemo(() => {
    return Array.from({ length: density }, (_, idx) => {
      const lines = Array.from({ length: randomInt(6, 16) }, () => randomText(randomInt(14, 28)));
      return {
        id: idx,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: randomInt(7, 16),
        opacity: 0.15 + Math.random() * 0.25,
        text: lines.join('\n'),
      };
    });
  }, [density]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 hacker-scanlines" />
      <div className="absolute inset-0 hacker-noise" />
      {columns.map((col) => (
        <div
          key={col.id}
          className="matrix-column hacker-matrix"
          style={{
            left: `${col.left}%`,
            animationDelay: `${col.delay}s`,
            animationDuration: `${col.duration}s`,
            opacity: col.opacity,
          }}
        >
          {col.text}
        </div>
      ))}
    </div>
  );
};

export default HackerBackdrop;
