'use client';
import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    color: '#60a5fa',
    skills: [
      { name: 'C++',        level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'Python',     level: 80 },
      { name: 'C',          level: 75 },
      { name: 'SQL',        level: 72 },
    ],
  },
  {
    title: 'Web Frameworks',
    icon: '🌐',
    color: '#a78bfa',
    skills: [
      { name: 'React.js',   level: 90 },
      { name: 'Node.js',    level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Next.js',    level: 70 },
    ],
  },
  {
    title: 'Core CS',
    icon: '🧠',
    color: '#f87171',
    skills: [
      { name: 'DSA',              level: 85 },
      { name: 'DBMS',             level: 78 },
      { name: 'Operating Systems',level: 75 },
      { name: 'Networking',       level: 72 },
    ],
  },
  {
    title: 'Tools & DB',
    icon: '🛠',
    color: '#4ade80',
    skills: [
      { name: 'MongoDB',  level: 85 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'MySQL',    level: 72 },
      { name: 'Redis',    level: 65 },
      { name: 'VS Code',  level: 95 },
    ],
  },
  {
    title: 'IoT & Security',
    icon: '🔒',
    color: '#fbbf24',
    skills: [
      { name: 'Zero-Trust',     level: 80 },
      { name: 'TLS / mTLS',     level: 75 },
      { name: 'MQTT',           level: 70 },
      { name: 'Edge Computing', level: 68 },
    ],
  },
  {
    title: 'Currently Learning',
    icon: '📖',
    color: '#fb923c',
    skills: [
      { name: 'TypeScript',    level: 55 },
      { name: 'Docker',        level: 50 },
      { name: 'System Design', level: 60 },
      { name: 'Kubernetes',    level: 35 },
    ],
  },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-xs font-bold text-black">{name}</span>
        <span className="font-mono text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full border border-black overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : '0%',
            background: color,
            boxShadow: animate ? `0 0 8px ${color}88` : 'none',
            transitionDelay: animate ? '200ms' : '0ms',
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({ cat, index }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(36px)',
        transition: `opacity 0.55s ease ${index * 80}ms, transform 0.55s ease ${index * 80}ms`,
      }}
      className="neo-card bg-white rounded-xl p-5 group hover:scale-[1.02] transition-transform duration-200"
    >
      {/* Card header */}
      <div
        className="flex items-center gap-2 mb-4 pb-3 border-b-4 border-black"
      >
        <span
          className="text-xl w-9 h-9 flex items-center justify-center rounded-lg border-2 border-black font-black"
          style={{ background: cat.color + '33' }}
        >
          {cat.icon}
        </span>
        <h3
          className="font-black text-base"
          style={{ fontFamily: "'Shrikhand', cursive", color: '#000' }}
        >
          {cat.title}
        </h3>
        {/* Colored dot accent */}
        <div className="ml-auto w-3 h-3 rounded-full border-2 border-black" style={{ background: cat.color }} />
      </div>

      {/* Skill bars */}
      <div>
        {cat.skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={cat.color}
            animate={inView}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-6 px-4">
      <div className="neo-card bg-[#ff9fac] rounded-2xl p-8 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-10">
          <h2
            className="text-4xl font-black italic"
            style={{ fontFamily: "'Shrikhand', cursive" }}
          >
            SKILLS
          </h2>
          <div className="flex-1 h-1 bg-black" />
          <div className="font-mono text-xs bg-black text-white px-3 py-1">[TECH_STACK]</div>
        </div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard key={i} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
