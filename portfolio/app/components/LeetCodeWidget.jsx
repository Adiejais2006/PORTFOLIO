'use client';
import { useState, useEffect } from 'react';

function CircleProgress({ solved, total, color, size = 100 }) {
  const radius = 38;
  const circ = 2 * Math.PI * radius;
  const pct = Math.min(solved / total, 1);
  const dash = pct * circ;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* Track */}
      <circle cx="50" cy="50" r={radius} fill="none" stroke="#2a2a2a" strokeWidth="10" />
      {/* Progress */}
      <circle
        cx="50" cy="50" r={radius}
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        transform="rotate(-90 50 50)"
        style={{ transition: 'stroke-dasharray 1s ease' }}
      />
      {/* Centre text */}
      <text x="50" y="46" textAnchor="middle" fill={color} fontSize="18" fontWeight="900" fontFamily="'Space Mono', monospace">{solved}</text>
      <text x="50" y="60" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Space Mono', monospace">/ {total}</text>
    </svg>
  );
}

function Bar({ label, solved, total, color }) {
  const pct = Math.min((solved / total) * 100, 100).toFixed(1);
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs font-bold w-16 shrink-0" style={{ color }}>{label}</span>
      <div className="flex-1 h-2 rounded-full bg-[#2a2a2a] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span className="font-mono text-xs text-gray-400 w-20 text-right shrink-0">{solved} / {total}</span>
    </div>
  );
}

export default function LeetCodeWidget() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/leetcode')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  return (
    <div
      className="rounded-xl border-4 border-black overflow-hidden"
      style={{ background: '#111', boxShadow: '4px 4px 0 #000' }}
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-b-2 border-[#2a2a2a]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#28c940] inline-block" />
        <span className="text-[#4ade80] font-mono text-xs ml-3 font-bold">leetcode://Adiejaiss2006</span>
        <span className="ml-auto text-gray-600 font-mono text-xs">LIVE</span>
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
      </div>

      <div className="p-5">
        {loading && (
          <div className="flex items-center justify-center h-32 gap-3">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-bounce" style={{ animationDelay: '300ms' }} />
            <span className="font-mono text-xs text-gray-500 ml-2">Fetching stats...</span>
          </div>
        )}

        {error && (
          <div className="text-center py-8 font-mono text-xs text-red-400">
            ⚠ Could not fetch live data — LeetCode API unavailable
          </div>
        )}

        {data && !error && (
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Circle */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <CircleProgress
                solved={data.totalSolved}
                total={data.totalQuestions}
                color="#4ade80"
                size={110}
              />
              <span className="font-mono text-xs text-gray-500">Problems Solved</span>
            </div>

            {/* Stats */}
            <div className="flex-1 flex flex-col gap-4 w-full">
              {/* Rank */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-xs text-gray-500">Global Rank</span>
                <span
                  className="font-black text-lg"
                  style={{ color: '#fcd34d', fontFamily: "'Space Mono', monospace" }}
                >
                  #{data.ranking?.toLocaleString() ?? '—'}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 border border-[#4ade80] text-[#4ade80] rounded">
                  {data.totalSolved} solved
                </span>
              </div>

              {/* Bars */}
              <div className="flex flex-col gap-3">
                <Bar label="Easy"   solved={data.easySolved}   total={data.totalEasy}   color="#4ade80" />
                <Bar label="Medium" solved={data.mediumSolved} total={data.totalMedium} color="#fbbf24" />
                <Bar label="Hard"   solved={data.hardSolved}   total={data.totalHard}   color="#f87171" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
