'use client';

/* ── Social icon SVGs ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.908 1.528-1.147C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

const TerminalBox = () => (
  <div className="neo-card bg-[#1a1a1a] rounded-xl overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2a2a2a] border-b-4 border-black">
      <span className="win-dot bg-[#ff5f57]" />
      <span className="win-dot bg-[#ffbd2e]" />
      <span className="win-dot bg-[#28c940]" />
      <span className="text-gray-400 font-mono text-xs ml-2">bash — root@aditya</span>
    </div>
    <div className="p-5 font-mono text-sm">
      <p className="text-green-400">root@aditya:~$</p>
      <div className="flex items-end mt-1 overflow-hidden" style={{ maxWidth: '100%' }}>
        <span className="text-white typing-effect" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          ./run_portfolio.sh
        </span>
        <span className="cursor-blink ml-1" />
      </div>
      <p className="text-gray-400 mt-3 text-xs">&gt; Loading modules...</p>
      <p className="text-yellow-400 text-xs">&gt; Building full-stack apps...</p>
      <p className="text-blue-400 text-xs">&gt; Deploying to production...</p>
      <p className="text-green-400 text-xs mt-1">✓ Ready. Welcome aboard!</p>
    </div>
  </div>
);

const socialLinks = [
  { icon: <GithubIcon />, href: 'https://github.com/Adiejais2006', label: 'GitHub',    bg: '#f3f4f6',  color: '#000' },
  { icon: <LinkedInIcon />, href: 'https://linkedin.com',           label: 'LinkedIn', bg: '#bfdbfe',  color: '#000' },
  { icon: <XIcon />,        href: 'https://x.com',                  label: 'X',        bg: '#111',     color: '#fff' },
  { icon: <LeetCodeIcon />, href: 'https://leetcode.com',           label: 'LeetCode', bg: '#fef3c7',  color: '#000' },
  { icon: <EmailIcon />,    href: 'mailto:adityajaisnta@gmail.com', label: 'Email',    bg: '#fcd34d',  color: '#000' },
];

const stats = [
  { label: 'Projects',   val: '3+' },
  { label: 'Hackathons', val: '2 🏆' },
  { label: 'Problems',   val: '600+' },
  { label: 'CGPA',       val: '8.74' },
];

export default function Hero({ onContactClick }) {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">

        {/* ── LEFT: Profile Card ── */}
        <div className="neo-card bg-white rounded-2xl p-6 relative flex flex-col gap-4 max-w-[380px] w-full">
          <div className="tape" />

          {/* Avatar */}
          <div className="flex flex-col items-center pt-3">
            <div
              className="relative rounded-full border-4 border-black overflow-hidden"
              style={{ width: 130, height: 130, boxShadow: '4px 4px 0px #000' }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#a78bfa] to-[#60a5fa] flex items-center justify-center text-6xl select-none">
                🧑‍💻
              </div>
            </div>
            <h1
              className="mt-4 text-3xl font-black italic text-center leading-tight"
              style={{ fontFamily: "'Shrikhand', cursive" }}
            >
              ADITYA JAISWAL
            </h1>
            <div className="mt-2 bg-black text-white font-mono text-xs px-4 py-1.5 rounded border-2 border-black font-bold tracking-wide">
              FULL_STACK_DEVELOPER()
            </div>
          </div>

          {/* Info rows */}
          <div className="border-t-4 border-black pt-4 space-y-2">
            {[
              { key: 'LOCATION', val: '📍 India' },
              { key: 'STATUS',   val: '🎓 B.Tech CSE Student' },
              { key: 'MISSION',  val: '💻 Code. Play. Chill.' },
            ].map((row) => (
              <div key={row.key} className="flex items-center gap-2 font-mono text-sm">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-bold shrink-0">[{row.key}]</span>
                <span className="text-gray-700 font-semibold">{row.val}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-1">
            <a
              href="/resume.pdf"
              download
              className="neo-btn flex-1 bg-[#4ade80] text-black font-black text-xs text-center py-2.5 px-2 rounded"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              ⬇ DOWNLOAD_RESUME
            </a>
            <button
              onClick={onContactClick}
              className="neo-btn flex-1 bg-[#f87171] text-white font-black text-xs py-2.5 px-2 rounded"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              ✉ CONTACT ME
            </button>
          </div>

          {/* ── Social Icons Row ── */}
          <div className="flex gap-3 justify-center mt-3 pt-3 border-t-2 border-dashed border-black">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                title={s.label}
                aria-label={s.label}
                className="social-icon-btn"
                style={{ background: s.bg, color: s.color }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col gap-6">
          {/* Intro box */}
          <div className="neo-card bg-[#fcd34d] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-black text-white font-mono text-xs px-2 py-0.5 font-bold">INTRO.TXT</div>
            </div>
            <p className="text-black font-bold text-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Hi people! 👋 I&apos;m a CSE student at{' '}
              <span className="underline decoration-4 decoration-black">IIIT Agartala</span>. I enjoy building{' '}
              <span className="bg-black text-white px-1">scalable products</span> and zero-trust IoT systems.
            </p>
            <p className="mt-3 text-sm font-mono text-gray-800">
              Currently exploring: distributed systems, edge computing, and competitive programming.
            </p>

            {/* ── Open to opportunities badge ── */}
            <div className="mt-4">
              <span
                className="inline-flex items-center gap-2 bg-white border-2 border-black font-black text-black text-sm px-5 py-2.5 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                🚀 <span>Open to Software Engineering and Research opportunities</span>
              </span>
            </div>
          </div>

          {/* Terminal */}
          <TerminalBox />



        </div>
      </div>
    </section>
  );
}
