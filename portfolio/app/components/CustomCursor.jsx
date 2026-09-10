'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <svg
      className="zoro-cursor"
      style={{ left: pos.x, top: pos.y }}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Blade (dark green, long diagonal) ── */}
      <rect
        x="3" y="1"
        width="5" height="22"
        rx="1"
        fill="#1b5e20"
        stroke="#000"
        strokeWidth="1.2"
        transform="rotate(0 5.5 12)"
      />
      {/* Blade edge highlight */}
      <rect x="4" y="1" width="1.5" height="20" rx="0.5" fill="#388e3c" />

      {/* ── Tsuba / Guard (black square) ── */}
      <rect
        x="1" y="21"
        width="9" height="3"
        rx="1"
        fill="#111"
        stroke="#000"
        strokeWidth="1"
      />

      {/* ── Hilt / Handle (wrapped grip) ── */}
      <rect
        x="3" y="24"
        width="5" height="7"
        rx="1"
        fill="#3e2723"
        stroke="#000"
        strokeWidth="1"
      />
      {/* Grip wrapping lines */}
      <line x1="3" y1="26" x2="8" y2="26" stroke="#5d4037" strokeWidth="1" />
      <line x1="3" y1="28" x2="8" y2="28" stroke="#5d4037" strokeWidth="1" />
      <line x1="3" y1="30" x2="8" y2="30" stroke="#5d4037" strokeWidth="1" />

      {/* ── Pommel ── */}
      <ellipse cx="5.5" cy="31" rx="3" ry="1.5" fill="#1a1a1a" stroke="#000" strokeWidth="0.8" />

      {/* ── Blade tip (sharp point at top) ── */}
      <polygon points="5.5,0 3,3 8,3" fill="#2e7d32" stroke="#000" strokeWidth="0.8" />
    </svg>
  );
}
