'use client';
import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const interval = 30;
    const step = (interval / duration) * 100;
    const timer = setInterval(() => {
      setProgress((p) => {
        const next = p + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadingOut(true);
            setTimeout(onDone, 600);
          }, 300);
          return 100;
        }
        return next;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[1000] bg-[#1a1a1a] flex flex-col items-center justify-center overflow-hidden ${fadingOut ? 'fade-out' : ''}`}
    >
      {/* Horizontal yellow lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-full"
          style={{
            height: '3px',
            background: '#ffdb58',
            top: `${8 + i * 14}%`,
            opacity: 0.35,
          }}
        />
      ))}

      {/* Loading text */}
      <div className="relative z-10 text-center mb-10">
        <h1
          className="text-[#ffdb58] font-bold italic select-none"
          style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontFamily: "'Playfair Display', serif",
            textShadow: '4px 4px 0px #000, -2px -2px 0px rgba(255,219,88,0.4)',
            letterSpacing: '-0.02em',
          }}
        >
          LOADING...
        </h1>
        <p className="text-yellow-400 font-mono text-sm mt-2 tracking-widest">
          Initializing portfolio systems...
        </p>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 w-[min(500px,80vw)]">
        <div className="border-4 border-[#ffdb58] bg-[#2a2a2a] h-8 w-full">
          <div
            className="h-full bg-[#ffdb58] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[#ffdb58] font-mono text-xs">[BOOT_SEQUENCE]</span>
          <span className="text-[#ffdb58] font-mono text-xs">{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
