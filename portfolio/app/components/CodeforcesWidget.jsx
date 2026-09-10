'use client';
import { useState, useEffect } from 'react';

function MiniChart({ contests }) {
  if (!contests?.length) return null;
  const ratings = contests.map(c => c.newRating);
  const min = Math.min(...ratings) - 30;
  const max = Math.max(...ratings) + 30;
  const W = 300, H = 70;

  const pts = ratings.map((r, i) => {
    const x = (i / (ratings.length - 1)) * W;
    const y = H - ((r - min) / (max - min)) * H;
    return `${x},${y}`;
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 70 }}>
      <polyline
        points={pts.join(' ')}
        fill="none"
        stroke="#60a5fa"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {ratings.map((r, i) => {
        const x = (i / (ratings.length - 1)) * W;
        const y = H - ((r - min) / (max - min)) * H;
        return <circle key={i} cx={x} cy={y} r="4" fill="#60a5fa" />;
      })}
    </svg>
  );
}

export default function CodeforcesWidget() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/codeforces')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  return (
    <div
      className="rounded-xl border-4 border-black overflow-hidden"
      style={{ background: '#1a1f2e', boxShadow: '4px 4px 0 #000' }}
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#222736] border-b-2 border-[#2d3347]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#28c940] inline-block" />
        <span className="text-[#60a5fa] font-mono text-xs ml-3 font-bold">codeforces://Adiejaiss2006</span>
        <span className="ml-auto text-gray-600 font-mono text-xs">LIVE</span>
        <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-pulse inline-block" />
      </div>

      <div className="p-5">
        {loading && (
          <div className="flex items-center justify-center h-24 gap-3">
            <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-bounce" style={{ animationDelay: '300ms' }} />
            <span className="font-mono text-xs text-gray-500 ml-2">Fetching rating...</span>
          </div>
        )}
        {error && <div className="text-center py-6 font-mono text-xs text-red-400">⚠ Could not fetch Codeforces data</div>}
        {data && !error && (
          <div className="flex flex-col gap-4">
            {/* Rating row */}
            <div className="flex items-center gap-4 flex-wrap">
              <div>
                <div className="font-mono text-xs text-gray-500 mb-0.5">Current Rating</div>
                <div className="font-black text-3xl text-[#60a5fa]" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {data.currentRating}
                </div>
              </div>
              <div>
                <div className="font-mono text-xs text-gray-500 mb-0.5">Max Rating</div>
                <div className="font-black text-xl text-[#fcd34d]" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {data.maxRating}
                </div>
              </div>
              <div className="ml-auto bg-[#60a5fa]/10 border border-[#60a5fa]/30 px-3 py-1.5 rounded-lg">
                <div className="font-mono text-xs text-[#60a5fa] font-bold">PUPIL</div>
              </div>
            </div>

            {/* Mini chart */}
            <div>
              <div className="font-mono text-xs text-gray-500 mb-2">Last {data.contests?.length ?? 0} Contests</div>
              <MiniChart contests={data.contests ?? []} />
            </div>

            {/* Recent contests */}
            <div className="flex flex-col gap-1.5">
              {(data.contests ?? []).slice(-4).reverse().map((c, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-mono">
                  <span className={`font-black w-14 text-right shrink-0 ${c.change >= 0 ? 'text-[#4ade80]' : 'text-[#f87171]'}`}>
                    {c.change >= 0 ? '+' : ''}{c.change}
                  </span>
                  <span className="text-gray-400 truncate">{c.name.replace('Codeforces ', '').replace('Educational ', 'Edu ')}</span>
                  <span className="text-gray-600 ml-auto shrink-0">Rank #{c.rank}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
