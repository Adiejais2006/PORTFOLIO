'use client';
import { useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center p-5 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Card */}
      <div
        className={`bg-white w-full max-w-sm rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center px-7 pt-8 pb-7 gap-5">

          {/* Warning triangle icon */}
          <div style={{ fontSize: '3.5rem', lineHeight: 1 }}>⚠️</div>

          {/* Title */}
          <h2
            className="text-2xl font-black italic text-center"
            style={{ fontFamily: "'Shrikhand', cursive" }}
          >
            PRIVACY NOTICE
          </h2>

          {/* Message box */}
          <div
            className="w-full text-center font-bold text-sm text-gray-800 px-4 py-4 rounded-xl"
            style={{ border: '1.5px solid #d1d5db', background: '#f9fafb' }}
          >
            Removed resume due to privacy concerns!
          </div>

          {/* UNDERSTAND button */}
          <button
            onClick={onClose}
            className="w-full py-3.5 font-black text-white text-sm tracking-widest rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            style={{ background: '#f87171', fontFamily: "'Inter', sans-serif" }}
          >
            UNDERSTAND
          </button>

        </div>
      </div>
    </div>
  );
}
