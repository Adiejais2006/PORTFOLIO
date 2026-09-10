'use client';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web Frameworks',
    icon: '🌐',
    skills: ['React.js', 'Node.js', 'Express.js', 'Next.js'],
  },
  {
    title: 'Core CS',
    icon: '🧠',
    skills: ['DSA', 'DBMS', 'Operating Systems', 'Networking'],
  },
  {
    title: 'Tools & DB',
    icon: '🛠',
    skills: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'IoT & Security',
    icon: '🔒',
    skills: ['MQTT', 'Zero-Trust', 'TLS/mTLS', 'Edge Computing'],
  },
  {
    title: 'Currently Learning',
    icon: '📖',
    skills: ['Docker', 'Kubernetes', 'System Design', 'TypeScript'],
  },
];

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
            <div key={i} className="neo-card bg-white rounded-xl p-5">
              {/* Card header */}
              <div className="flex items-center gap-2 mb-3 border-b-4 border-black pb-2">
                <span className="text-xl">{cat.icon}</span>
                <h3
                  className="font-black text-base"
                  style={{ fontFamily: "'Shrikhand', cursive" }}
                >
                  {cat.title}
                </h3>
              </div>
              {/* Skill pills */}
              <div className="flex flex-wrap">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
