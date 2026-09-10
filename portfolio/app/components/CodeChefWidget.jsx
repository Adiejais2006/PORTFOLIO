'use client';
import { useState, useEffect } from 'react';

const STAR_COLORS = { 1: '#666', 2: '#1e7d22', 3: '#3366cc', 4: '#684273', 5: '#ffbf00', 6: '#ff7f00', 7: '#d40000' };

function MiniChart({ contests }) {
  if (!contests?.length || contests.length < 2) return (
    <div className="flex items-center justify-center h-16 text-xs font-mono text-gray-600">
      No contest history available
    </div>
  );
  const ratings = contests.map(c => c.newRating).filter(Boolean);
  if (ratings.length < 2) return null;
  const min = Math.min(...ratings) - 20;
  const max = Math.max(...ratings) + 20;
  const W = 300, H = 60;

  const pts = ratings.map((r, i) => {
    const x = (i / (ratings.length - 1)) * W;
    const y = H - ((r - min) / (max - min)) * H;
    return `${x},${y}`;
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 60 }}>
      <polyline
        points={pts.join(' ')}
        fill="none" stroke="#ffbf00" strokeWidth="2.5"
        strokeLinejoin="round" strokeLinecap="round"
      />
      {ratings.map((r, i) => {
        const x = (i / (ratings.length - 1)) * W;
        const y = H - ((r - min) / (max - min)) * H;
        return <circle key={i} cx={x} cy={y} r="4" fill="#ffbf00" />;
      })}
    </svg>
  );
}

export default function CodeChefWidget() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/codechef')
      .then(r => r.json())
      .then(d => { if (d.error) setError(true); else setData(d); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  const starColor = STAR_COLORS[data?.stars] || '#3366cc';
  const stars = data?.stars || 3;

  return (
    <div
      className="rounded-xl border-4 border-black overflow-hidden"
      style={{ background: '#1a1200', boxShadow: '4px 4px 0 #000' }}
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#221a00] border-b-2 border-[#3a2d00]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#28c940] inline-block" />
        <span className="font-mono text-xs ml-3 font-bold" style={{ color: '#ffbf00' }}>codechef://adii_06</span>
        <span className="ml-auto text-gray-600 font-mono text-xs">LIVE</span>
        <span className="w-2 h-2 rounded-full animate-pulse inline-block" style={{ background: '#ffbf00' }} />
      </div>

      <div className="p-5">
        {loading && (
          <div className="flex items-center justify-center h-24 gap-3">
            {[0, 150, 300].map(d => (
              <span key={d} className="w-2 h-2 rounded-full animate-bounce inline-block" style={{ background: '#ffbf00', animationDelay: `${d}ms` }} />
            ))}
            <span className="font-mono text-xs text-gray-500 ml-2">Fetching stats...</span>
          </div>
        )}
        {error && (
          <div className="text-center py-6 font-mono text-xs text-red-400">⚠ Could not fetch CodeChef data</div>
        )}
        {data && !error && (
          <div className="flex flex-col gap-4">
            {/* Rating + Stars row */}
            <div className="flex items-center gap-4 flex-wrap">
              <div>
                <div className="font-mono text-xs text-gray-500 mb-0.5">Rating</div>
                <div className="font-black text-3xl" style={{ color: '#ffbf00', fontFamily: "'Space Mono', monospace" }}>
                  {data.currentRating}
                </div>
              </div>
              <div>
                <div className="font-mono text-xs text-gray-500 mb-0.5">Max Rating</div>
                <div className="font-black text-xl" style={{ color: '#fcd34d', fontFamily: "'Space Mono', monospace" }}>
                  {data.maxRating}
                </div>
              </div>
              <div className="ml-auto flex flex-col items-end gap-1">
                <div className="text-xl tracking-widest" style={{ color: starColor }}>
                  {'★'.repeat(stars)}{'☆'.repeat(Math.max(0, 7 - stars))}
                </div>
                <div className="font-mono text-xs px-2 py-0.5 border rounded" style={{ borderColor: starColor, color: starColor }}>
                  {stars}-STAR
                </div>
              </div>
            </div>

            {/* Chart */}
            <div>
              <div className="font-mono text-xs text-gray-500 mb-2">Rating History</div>
              <MiniChart contests={data.contests} />
            </div>

            {/* Recent contests */}
            {data.contests?.length > 0 && (
              <div className="flex flex-col gap-1.5">
                {data.contests.slice(-4).reverse().map((c, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-mono">
                    <span className={`font-black w-14 text-right shrink-0 ${c.change >= 0 ? 'text-[#4ade80]' : 'text-[#f87171]'}`}>
                      {c.change >= 0 ? '+' : ''}{c.change}
                    </span>
                    <span className="text-gray-400 truncate">{c.name}</span>
                    <span className="text-gray-600 ml-auto shrink-0">#{c.rank}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
