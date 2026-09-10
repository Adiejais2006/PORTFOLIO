'use client';

const MARQUEE_TEXT =
  'CODEFORCES PUPIL (1323) • CODECHEF 3-STAR • 600+ LEETCODE PROBLEMS • ANIMA CLUB LEAD • MOKSHA 2025 COORDINATOR • INTER-IIIT FINALIST • SIH 2025 WINNER • ';

export default function Footer() {
  return (
    <footer className="mt-0">
      {/* ── Diagonal marquee — padded container prevents overlap ── */}
      <div style={{
        background: '#a78bfa',
        paddingTop: '36px',
        paddingBottom: '36px',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          transform: 'rotate(-3deg)',
          background: '#fcd34d',
          borderTop: '3px solid #000',
          borderBottom: '3px solid #000',
          padding: '10px 0',
          marginLeft: '-5%',
          marginRight: '-5%',
        }}>
          <div className="marquee-inner">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="font-black text-xs tracking-widest mr-10 text-black uppercase"
                style={{ fontFamily: "'Space Mono', monospace", whiteSpace: 'nowrap' }}
              >
                • {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom banner ── */}
      <div className="bg-black py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ position: 'relative', zIndex: 20 }}>
        <div className="text-[#ff9fac] font-bold text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
          Made with ☕ and <span className="text-[#f87171]">❤</span> by{' '}
          <span className="text-[#fcd34d] font-black">Aditya Jaiswal</span>
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          {[
            { label: 'GitHub ↗',     href: 'https://github.com/Adiejais2006',                       bg: '#f3f4f6', text: '#000' },
            { label: 'LinkedIn ↗',   href: 'https://www.linkedin.com/in/aditya-jaiswal-6aba81335', bg: '#0077b5', text: '#fff' },
            { label: 'LeetCode ↗',   href: 'https://leetcode.com/u/Adiejaiss2006/',                 bg: '#fef3c7', text: '#000' },
            { label: 'Instagram ↗',  href: 'https://www.instagram.com/aditya.jaiswal04/',           bg: '#fce7f3', text: '#000' },
            { label: 'Email ↗',      href: 'mailto:adityajaisnta@gmail.com',                        bg: '#fcd34d', text: '#000' },
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
