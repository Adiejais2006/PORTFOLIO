'use client';

const MARQUEE_TEXT =
  'CODEFORCES PUPIL (1323) • CODECHEF 3-STAR • 600+ LEETCODE PROBLEMS • ANIMA CLUB LEAD • MOKSHA 2025 COORDINATOR • INTER-IIIT FINALIST • SIH 2025 WINNER • ';

export default function Footer() {
  return (
    <footer className="mt-0">
      {/* ── Marquee ribbon wrapper — overflow hidden prevents bleed ── */}
      <div style={{ overflow: 'hidden', height: '60px', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: '-6%',
            right: '-6%',
            top: '50%',
            transform: 'translateY(-50%) rotate(-2deg)',
            background: '#fcd34d',
            borderTop: '4px solid #000',
            borderBottom: '4px solid #000',
            padding: '10px 0',
          }}
        >
          <div className="marquee-inner">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="font-black text-sm tracking-wider mr-8 text-black"
                style={{ fontFamily: "'Space Mono', monospace", whiteSpace: 'nowrap' }}
              >
                ⚠ {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom banner ── */}
      <div className="bg-black py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[#ff9fac] font-bold text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
          Made with ☕ and <span className="text-[#f87171]">❤</span> by{' '}
          <span className="text-[#fcd34d] font-black">Aditya Jaiswal</span>
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          {[
            { label: 'GitHub ↗',     href: 'https://github.com/Adiejais2006', bg: '#f3f4f6', text: '#000' },
            { label: 'LinkedIn ↗',   href: 'https://linkedin.com',            bg: '#0077b5', text: '#fff' },
            { label: 'Codeforces ↗', href: 'https://codeforces.com',          bg: '#374151', text: '#fff' },
            { label: 'Email ↗',      href: 'mailto:adityajaisnta@gmail.com',  bg: '#fcd34d', text: '#000' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="neo-btn font-mono font-bold text-xs px-4 py-2 rounded"
              style={{ background: l.bg, color: l.text }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="text-gray-500 font-mono text-xs">© 2025 Aditya Jaiswal</div>
      </div>
    </footer>
  );
}
