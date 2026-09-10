'use client';

const projects = [
  {
    title: 'Secure Edge',
    description:
      'Zero-trust IoT network security gateway implementing mutual TLS, token-based auth, and real-time anomaly detection at the edge.',
    tech: ['Python', 'Networking', 'IoT', 'MQTT', 'TLS'],
    link: 'https://github.com/Adiejais2006',
    color: '#f87171',
  },
  {
    title: 'Subhasha-Connect',
    description:
      'Full-featured blogging platform with JWT authentication, role-based access, rich text editor, and MongoDB storage.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    link: 'https://github.com/Adiejais2006',
    color: '#a78bfa',
  },
  {
    title: 'NewsLogics',
    description:
      'Responsive news aggregation app consuming the News API with category filters, live search, and infinite scroll pagination.',
    tech: ['React.js', 'News API', 'CSS', 'REST API'],
    link: 'https://github.com/Adiejais2006',
    color: '#4ade80',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-6 px-4">
      <div
        className="neo-card bg-[#fcd34d] rounded-2xl p-8 max-w-6xl mx-auto"
      >
        {/* Heading */}
        <div className="flex items-center gap-4 mb-10">
          <h2
            className="text-4xl font-black italic"
            style={{ fontFamily: "'Shrikhand', cursive" }}
          >
            PROJECTS
          </h2>
          <div className="flex-1 h-1 bg-black" />
          <div className="font-mono text-xs bg-black text-white px-3 py-1">[3 BUILDS]</div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="neo-card bg-white rounded-xl flex flex-col overflow-hidden"
            >
              {/* Colored top strip */}
              <div className="h-3 w-full border-b-4 border-black" style={{ background: p.color }} />

              <div className="p-5 flex flex-col flex-1 gap-3">
                {/* Title + link */}
                <div className="flex items-start justify-between">
                  <h3
                    className="text-xl font-black"
                    style={{ fontFamily: "'Shrikhand', cursive" }}
                  >
                    {p.title}
                  </h3>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn bg-black text-white w-8 h-8 flex items-center justify-center text-sm rounded flex-shrink-0 ml-2"
                    title="View project"
                  >
                    ↗
                  </a>
                </div>

                {/* LIVE badge */}
                <div className="inline-flex">
                  <span className="bg-[#f87171] text-white font-mono font-bold text-xs px-3 py-0.5 rounded-full border-2 border-black">
                    ● LIVE PROJECT
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 font-semibold leading-relaxed flex-1">
                  {p.description}
                </p>

                {/* Tech stack */}
                <div className="tech-scroll pb-1">
                  {p.tech.map((t) => (
                    <span key={t} className="skill-pill flex-shrink-0">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
