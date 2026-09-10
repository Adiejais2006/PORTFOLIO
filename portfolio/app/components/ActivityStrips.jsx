'use client';
import { useState, useEffect, useRef } from 'react';
import LeetCodeWidget from './LeetCodeWidget';

/* ── Scroll-triggered reveal hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const hackathonContent = (
  <div className="p-5 bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { title: 'Inter-IIIT Hackathon (Sri City)', badge: '🥇 5th Rank — All India · Nov 2025', desc: 'Led a 4-member team, built Secure Edge IoT gateway in 24 hours. Outperformed 20+ IIITs. 98% feature completion.', color: '#f87171' },
        { title: 'Inter-IIIT Hackathon (Gwalior)', badge: '🎖️ National Finalist · 2025', desc: 'Selected as a National Finalist, representing IIIT Agartala among top engineering institutes across India.', color: '#60a5fa' },
        { title: 'Smart India Hackathon 2025', badge: '🏆 Institute-Level Winner · 2025', desc: 'Built a full-stack MERN prototype for a national Ministry problem. Delivered live demo to government & industry evaluators.', color: '#a78bfa' },
        { title: 'Flipkart GRiD 8.0', badge: '🚀 National Semi-Finalist · 2025', desc: 'Advanced to the National Semi-Finals in the Software Development Track by clearing multiple competitive coding and technical assessment rounds.', color: '#fcd34d', dark: true },
      ].map((item, i) => (
        <div key={i} className="neo-card rounded-xl p-4" style={{ background: item.color }}>
          <div className="font-black text-base mb-1.5" style={{ fontFamily: "'Shrikhand', cursive", color: item.dark ? '#000' : '#fff' }}>{item.title}</div>
          <div className="bg-black text-white font-mono text-xs px-2 py-0.5 inline-block mb-2 font-bold">{item.badge}</div>
          <p className="font-semibold text-sm" style={{ color: item.dark ? '#000' : '#fff' }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const codingContent = (
  <div className="p-5 bg-white">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
      {[
        { platform: 'Codeforces', rating: '1323', rank: 'Pupil',           color: '#60a5fa', icon: '⚡' },
        { platform: 'CodeChef',   rating: '3★',   rank: '3-Star',          color: '#f87171', icon: '🍴' },
        { platform: 'LeetCode',   rating: '600+',  rank: 'Problems Solved', color: '#4ade80', icon: '🧩' },
      ].map((item) => (
        <div key={item.platform} className="neo-card bg-white rounded-xl p-4 text-center">
          <div className="text-3xl mb-1">{item.icon}</div>
          <div className="font-black text-base" style={{ fontFamily: "'Shrikhand', cursive" }}>{item.platform}</div>
          <div className="text-3xl font-black my-1.5" style={{ color: item.color, fontFamily: "'Shrikhand', cursive" }}>{item.rating}</div>
          <div className="font-mono text-xs bg-black text-white px-2 py-0.5 inline-block">{item.rank}</div>
        </div>
      ))}
    </div>
    {/* Live LeetCode Stats */}
    <LeetCodeWidget />
  </div>
);

const beyondContent = (
  <div className="p-5 bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { role: 'Club Lead — Anima Club',          badge: '👥 500+ Members',         desc: 'Managed a technical club of 500+ members. Oversaw drone flight controller projects.', color: '#4ade80' },
        { role: 'Event Coordinator — MOKSHA 2025', badge: '🎉 Flagship Cultural Fest', desc: 'Handled logistics for 5+ flagship events and tournaments for 70+ participants.',     color: '#fcd34d' },
      ].map((item) => (
        <div key={item.role} className="neo-card rounded-xl p-4" style={{ background: item.color }}>
          <div className="font-black text-lg text-black mb-1.5" style={{ fontFamily: "'Shrikhand', cursive" }}>{item.role}</div>
          <div className="bg-black text-white font-mono text-xs px-2 py-0.5 inline-block mb-2 font-bold">{item.badge}</div>
          <p className="text-black font-semibold text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const strips = [
  { id: 'hackathons', label: 'HACKATHONS', color: '#f87171', textColor: '#fff', align: 'left',  content: hackathonContent },
  { id: 'coding',     label: 'CODING',     color: '#fcd34d', textColor: '#000', align: 'right', content: codingContent    },
  { id: 'beyond',     label: 'BEYOND CODE',color: '#a78bfa', textColor: '#000', align: 'left',  content: beyondContent    },
];

/* ── Individual animated strip ── */
function Strip({ strip, openSection, setOpenSection, index }) {
  const { ref, inView } = useInView(0.1);
  const isOpen = openSection === strip.id;

  return (
    <div
      ref={ref}
      className={`w-[82%] transition-all duration-700 ease-out ${strip.align === 'left' ? 'mr-auto' : 'ml-auto'}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'translateX(0)'
          : strip.align === 'left'
            ? 'translateX(-80px)'
            : 'translateX(80px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Main strip bar — thinner with py-4 instead of py-8 */}
      <div
        className="flex items-center justify-between px-8 py-4 border-4 border-black"
        style={{
          background: strip.color,
          boxShadow: '10px 10px 0px #000',
        }}
      >
        <h3
          className="select-none font-black italic"
          style={{
            fontFamily: "'Shrikhand', cursive",
            fontSize: 'clamp(1.6rem, 4vw, 3rem)',
            color: strip.textColor,
            lineHeight: 1,
          }}
        >
          {strip.label}
        </h3>

        <button
          onClick={() => setOpenSection(isOpen ? null : strip.id)}
          className="neo-btn bg-white text-black font-black font-mono text-sm px-6 py-2.5 rounded-none min-w-[90px] shrink-0 ml-6 transition-all duration-200"
          style={{ letterSpacing: '0.05em' }}
        >
          {isOpen ? '✕ CLOSE' : '+ OPEN'}
        </button>
      </div>

      {/* Accordion panel — smooth cubic-bezier easing */}
      <div
        className="overflow-hidden border-x-4 border-black transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? '600px' : '0px',
          borderBottom: isOpen ? '4px solid #000' : '0px solid #000',
          boxShadow: isOpen ? '10px 10px 0 #000' : 'none',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease, box-shadow 0.3s ease, border-bottom 0.1s ease',
        }}
      >
        {strip.content}
      </div>
    </div>
  );
}

export default function ActivityStrips() {
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="flex flex-col gap-8 w-full overflow-hidden pt-10 pb-8 px-0">
      {strips.map((strip, index) => (
        <Strip
          key={strip.id}
          strip={strip}
          openSection={openSection}
          setOpenSection={setOpenSection}
          index={index}
        />
      ))}
    </div>
  );
}
