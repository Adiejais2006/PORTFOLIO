'use client';

const experiences = [
  {
    date: 'Nov 2025',
    role: 'Team Lead — 5th Rank All India',
    org: 'Inter-IIIT Hackathon (Sri City)',
    desc: 'Led a 4-member team to design and ship the Secure Edge IoT network security gateway in 24 hours, outperforming teams from 20+ IIITs. Architected a zero-trust network with active anomaly detection; managed end-to-end Git workflow to hit 98% feature completion under a strict deadline.',
    color: '#f87171',
    label: 'HACKATHON.EXE',
  },
  {
    date: '2025',
    role: 'National Finalist',
    org: 'Inter-IIIT Hackathon (Gwalior)',
    desc: 'Selected as a National Finalist, successfully representing IIIT Agartala among top engineering institutes across India.',
    color: '#60a5fa',
    label: 'HACKATHON.EXE',
  },
  {
    date: '2025',
    role: 'Institute-Level Winner',
    org: 'Smart India Hackathon (SIH) 2025 — IIIT Agartala',
    desc: 'Built a full-stack MERN prototype solving a national Ministry problem statement; won the institute-level round and advanced to national representation. Delivered a live demo to a panel of government and industry evaluators.',
    color: '#a78bfa',
    label: 'ACHIEVEMENT.EXE',
  },
  {
    date: 'Jun–Aug 2026',
    role: 'Final Technical Assessment',
    org: 'ShopMyUniform — Selection Process',
    desc: 'Built a full-stack MERN fashion e-commerce platform with Razorpay payments, admin panel, inventory management, and Cloudinary image storage as the final round of the internship selection process.',
    color: '#4ade80',
    label: 'ASSESSMENT.EXE',
  },
  {
    date: 'Jan–Feb 2025',
    role: 'ML Intern (Virtual)',
    org: 'Bharat Intern',
    desc: 'Built a content-based movie recommendation system using NLP & cosine similarity. Processed 5,000+ movie dataset.',
    color: '#fcd34d',
    label: 'INTERNSHIP.EXE',
  },
];

function DottedConnector() {
  return (
    <svg
      width="72" height="32"
      viewBox="0 0 72 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden md:block shrink-0 self-center"
      aria-hidden="true"
    >
      <path
        d="M4 16 C20 16, 52 16, 68 16"
        stroke="#000"
        strokeWidth="2.5"
        strokeDasharray="5 4"
        strokeLinecap="round"
      />
      {/* arrowhead */}
      <polygon points="72,16 62,11 62,21" fill="#000" />
    </svg>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-12">
          <div className="neo-card bg-black text-white px-6 py-3 rounded-lg inline-block">
            <h2
              className="text-4xl font-black italic text-white"
              style={{ fontFamily: "'Shrikhand', cursive" }}
            >
              EXPERIENCE
            </h2>
          </div>
          <div className="flex-1 h-1 bg-black" />
        </div>

        {/* ── Strict Left / Right layout ── */}
        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <div key={i} className="flex items-center gap-0">

              {/* LEFT: fixed-width Date Badge column */}
              <div className="hidden md:flex w-[200px] shrink-0 justify-end pr-1">
                <div className="neo-card bg-[#fcd34d] text-black font-mono font-black text-sm px-4 py-2 rounded-full whitespace-nowrap">
                  📅 {exp.date}
                </div>
              </div>

              {/* Curved dotted SVG connector */}
              <DottedConnector />

              {/* RIGHT: Window Card */}
              <div className="flex-1 min-w-0">
                {/* Mobile date badge */}
                <div className="md:hidden mb-3">
                  <span className="font-mono text-xs bg-[#fcd34d] border-2 border-black px-3 py-1 font-bold rounded-full">
                    📅 {exp.date}
                  </span>
                </div>

                <div className="neo-card rounded-xl overflow-hidden" style={{ background: exp.color }}>
                  {/* Window bar */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-black border-b-4 border-black">
                    <span className="win-dot bg-[#ff5f57]" />
                    <span className="win-dot bg-[#ffbd2e]" />
                    <span className="win-dot bg-[#28c940]" />
                    <span className="text-white font-mono text-xs ml-2 font-bold tracking-widest">{exp.label}</span>
                  </div>
                  <div className="p-6">
                    <div
                      className="font-black text-2xl text-black"
                      style={{ fontFamily: "'Shrikhand', cursive" }}
                    >
                      {exp.role}
                    </div>
                    <div className="font-mono text-sm text-black font-bold mt-1.5 bg-white/40 px-2 py-0.5 inline-block border border-black rounded">
                      @ {exp.org}
                    </div>
                    <p className="mt-3 text-base text-black font-semibold leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
