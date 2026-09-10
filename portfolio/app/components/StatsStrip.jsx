'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { val: 616,  suffix: '+', label: 'DSA Problems Solved',    color: '#4ade80' },
  { val: 5,    suffix: 'th', label: 'Rank Nationally · Inter-IIIT', color: '#f87171' },
  { val: 1323, suffix: '',  label: 'Codeforces Rating',       color: '#60a5fa' },
  { val: 6,    suffix: '+', label: 'Projects Built',          color: '#a78bfa' },
  { val: 3,    suffix: '',  label: 'National-Level Hackathons', color: '#fcd34d' },
  { val: 8.74, suffix: '',  label: 'CGPA',                    color: '#fb923c', decimal: true },
];

function Counter({ val, suffix, color, animate, decimal }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const pct = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - pct, 3);
      const cur = decimal ? (val * ease).toFixed(2) : Math.floor(val * ease);
      setDisplay(cur);
      if (pct < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [animate, val, decimal]);

  return (
    <span style={{ color, fontFamily: "'Space Mono', monospace" }}
      className="font-black text-4xl md:text-5xl tabular-nums">
      {display}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-6 px-4">
      <div
        className="neo-card bg-black rounded-2xl p-8 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
              }}
            >
              <Counter val={s.val} suffix={s.suffix} color={s.color} animate={inView} decimal={s.decimal} />
              <div
                className="h-0.5 w-10 rounded"
                style={{ background: s.color }}
              />
              <span className="font-mono text-xs text-gray-400 font-bold text-center leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
