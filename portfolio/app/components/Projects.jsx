'use client';

const projects = [
  {
    title: 'ShopMyUniform',
    subtitle: 'MERN Fashion E-Commerce Platform',
    period: '2026 · Internship Assessment',
    description:
      'Full-stack fashion e-commerce platform with product browsing, search & filters, wishlist, cart, Razorpay payments, live order tracking, and a complete admin panel for product/category/inventory/order management. 38 seeded products, MongoDB Atlas, Cloudinary image storage.',
    tech: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Cloudinary', 'Razorpay', 'Tailwind CSS', 'Mongoose'],
    link: 'https://github.com/Adiejais2006/PROJECT',
    demo: 'https://project-frontend-sigma-ebon.vercel.app/',
    color: '#f87171',
  },
  {
    title: 'CareerNest',
    subtitle: 'AI-Powered Placement Portal',
    period: 'June 2026 – Aug 2026',
    description:
      'Full-stack placement platform with Google OAuth2.0, JWT-based RBAC, Gemini AI resume parsing from Cloudinary PDFs, weighted candidate matching engine (Jaccard + CGPA) at 1.5ms p50, and Redis cache cutting latency 96% (2.2s → 87ms) at 2,500 RPS.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Prisma ORM', 'MongoDB', 'Redis', 'Gemini API', 'Cloudinary', 'JWT', 'OAuth2.0'],
    link: 'https://github.com/Adiejais2006',
    color: '#60a5fa',
  },
  {
    title: 'TrippoAI',
    subtitle: 'Full-Stack AI Travel Planner',
    period: 'April 2026 – June 2026',
    description:
      'AI travel planner with Gemini 3.1 Flash Lite for personalized itineraries, strict JSON output enforcement, JWT + HTTP-only cookie auth with MongoDB token blacklist, and zero-disk PDF exports via Puppeteer streaming HTML buffers directly from server memory.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Puppeteer', 'Tailwind CSS', 'JWT'],
    link: 'https://github.com/Adiejais2006',
    color: '#a78bfa',
  },
  {
    title: 'Secure Edge',
    subtitle: 'Zero-Trust IoT Gateway',
    period: 'Late 2025',
    description:
      'Zero-trust IoT network security gateway implementing mutual TLS, token-based auth, and real-time anomaly detection at the edge.',
    tech: ['Python', 'Networking', 'IoT', 'MQTT', 'TLS'],
    link: 'https://github.com/Adiejais2006',
    color: '#f87171',
  },
  {
    title: 'Subhasha-Connect',
    subtitle: 'Full-Stack Blogging Platform',
    period: '2025',
    description:
      'Full-featured blogging platform with JWT authentication, role-based access control, rich text editor, and MongoDB storage.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    link: 'https://github.com/Adiejais2006',
    color: '#4ade80',
  },
  {
    title: 'NewsLogics',
    subtitle: 'News Aggregation App',
    period: '2025',
    description:
      'Responsive news aggregation app consuming the News API with category filters, live search, and infinite scroll pagination.',
    tech: ['React.js', 'News API', 'CSS', 'REST API'],
    link: 'https://github.com/Adiejais2006',
    color: '#fcd34d',
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
          <div className="font-mono text-xs bg-black text-white px-3 py-1">[6 BUILDS]</div>
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
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-xl font-black leading-tight"
                      style={{ fontFamily: "'Shrikhand', cursive" }}
                    >
                      {p.title}
                    </h3>
                    {p.subtitle && (
                      <p className="text-xs font-mono text-gray-500 font-bold mt-0.5">{p.subtitle}</p>
                    )}
                  </div>
                  <div className="flex gap-1.5 ml-2 shrink-0">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-btn bg-[#4ade80] text-black w-8 h-8 flex items-center justify-center text-sm rounded"
                        title="Live Demo"
                      >
                        ▶
                      </a>
                    )}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn bg-black text-white w-8 h-8 flex items-center justify-center text-sm rounded"
                      title="View on GitHub"
                    >
                      ↗
                    </a>
                  </div>
                </div>

                {/* Period badge */}
                {p.period && (
                  <div className="inline-flex">
                    <span className="bg-black text-white font-mono font-bold text-xs px-3 py-0.5 rounded-full border-2 border-black">
                      📅 {p.period}
                    </span>
                  </div>
                )}

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
