'use client';
import { useEffect, useState } from 'react';

export default function Navbar({ onContactClick }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fmt = () => {
      const now = new Date();
      return now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    };
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'EDUCATION', id: 'education' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[500] w-[90%] max-w-5xl">
      <div
        className="flex items-center justify-between px-3 py-2.5 md:px-6 md:py-3 rounded-full border-4 border-black bg-[#a78bfa]"
        style={{ boxShadow: '6px 6px 0px #000' }}
      >
        {/* Logo */}
        <span
          className="text-white font-black italic text-base md:text-xl select-none"
          style={{
            fontFamily: "'Shrikhand', cursive",
            textShadow: '2px 2px 0px #000',
          }}
        >
          PORTFOLIO
        </span>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white font-bold text-sm px-4 py-1.5 rounded-full transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em' }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Contact */}
          <button
            onClick={onContactClick}
            className="neo-btn bg-[#f87171] text-white font-black text-xs md:text-sm px-3 md:px-5 py-1.5 md:py-2 rounded-full"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            CONTACT
          </button>

          {/* Live time */}
          {time && (
            <div
              className="hidden md:block neo-btn bg-[#fcd34d] text-black font-mono font-bold text-xs px-3 py-1.5 rounded-full whitespace-nowrap"
            >
              ⏱ {time}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
