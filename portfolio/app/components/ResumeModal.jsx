'use client';
import { useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Card — matches neo-brutalist theme */}
      <div
        className={`w-full max-w-sm rounded-2xl border-4 border-black overflow-hidden transition-all duration-300 ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
        }`}
        style={{ boxShadow: '6px 6px 0 #000', background: '#a78bfa' }}
      >
        {/* Yellow header bar */}
        <div
          className="flex items-center gap-2 px-4 py-2 border-b-4 border-black"
          style={{ background: '#fcd34d', fontFamily: "'Space Mono', monospace" }}
        >
          <span className="w-3 h-3 rounded-full bg-black inline-block" />
          <span className="w-3 h-3 rounded-full bg-black inline-block" />
          <span className="w-3 h-3 rounded-full bg-black inline-block" />
          <span className="text-xs font-black ml-2 text-black">RESUME.PDF</span>
        </div>

        {/* Body */}
        <div className="flex flex-col items-center px-6 pt-7 pb-6 gap-5">

          {/* Warning icon in yellow box */}
          <div
            className="w-16 h-16 rounded-xl border-4 border-black flex items-center justify-center text-3xl"
            style={{ background: '#fcd34d', boxShadow: '4px 4px 0 #000' }}
          >
            ⚠️
          </div>

          {/* Title */}
          <h2
            className="text-2xl font-black italic text-center text-white"
            style={{ fontFamily: "'Shrikhand', cursive", textShadow: '2px 2px 0 #000' }}
          >
            PRIVACY NOTICE
          </h2>

          {/* Message box */}
          <div
            className="w-full text-center font-black text-sm text-black px-4 py-4 rounded-xl border-4 border-black"
            style={{ background: '#fcd34d', boxShadow: '4px 4px 0 #000', fontFamily: "'Space Mono', monospace" }}
          >
            Removed resume due to<br />privacy concerns!
          </div>

          {/* UNDERSTAND button */}
          <button
            onClick={onClose}
            className="w-full py-3.5 font-black text-white text-sm tracking-widest rounded-xl border-4 border-black transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px]"
            style={{
              background: '#f87171',
              boxShadow: '4px 4px 0 #000',
              fontFamily: "'Space Mono', monospace",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '2px 2px 0 #000'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '4px 4px 0 #000'; }}
            onMouseDown={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            onMouseUp={(e) => { e.currentTarget.style.boxShadow = '4px 4px 0 #000'; }}
          >
            UNDERSTAND
          </button>

        </div>
      </div>
    </div>
  );
}
