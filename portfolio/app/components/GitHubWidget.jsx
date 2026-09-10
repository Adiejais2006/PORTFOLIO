'use client';
import { useState, useEffect } from 'react';

const LANG_COLORS = {
  JavaScript: '#f7df1e', TypeScript: '#3178c6', Python: '#3572A5',
  Java: '#b07219', 'C++': '#f34b7d', C: '#555555', Go: '#00ADD8',
  Rust: '#dea584', Shell: '#89e051', CSS: '#563d7c', HTML: '#e34c26',
};

export default function GitHubWidget() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/github')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  const totalLangCount = data?.topLangs?.reduce((s, l) => s + l.count, 0) || 1;

  return (
    <div
      className="rounded-xl border-4 border-black overflow-hidden"
      style={{ background: '#0d1117', boxShadow: '4px 4px 0 #000' }}
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b-2 border-[#30363d]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#28c940] inline-block" />
        <span className="text-[#58a6ff] font-mono text-xs ml-3 font-bold">github://Adiejais2006</span>
        <span className="ml-auto text-gray-600 font-mono text-xs">LIVE</span>
        <span className="w-2 h-2 rounded-full bg-[#58a6ff] animate-pulse inline-block" />
      </div>

      <div className="p-5">
        {loading && (
          <div className="flex items-center justify-center h-24 gap-3">
            <span className="w-2 h-2 rounded-full bg-[#58a6ff] animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-[#58a6ff] animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-[#58a6ff] animate-bounce" style={{ animationDelay: '300ms' }} />
            <span className="font-mono text-xs text-gray-500 ml-2">Fetching stats...</span>
          </div>
        )}
        {error && <div className="text-center py-6 font-mono text-xs text-red-400">⚠ Could not fetch GitHub stats</div>}
        {data && !error && (
          <div className="flex flex-col gap-5">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Repos',     val: data.publicRepos, color: '#58a6ff' },
                { label: 'Stars',     val: data.totalStars,  color: '#fcd34d' },
                { label: 'Followers', val: data.followers,   color: '#4ade80' },
              ].map(s => (
                <div key={s.label} className="text-center p-3 rounded-lg border border-[#30363d] bg-[#161b22]">
                  <div className="font-black text-2xl" style={{ color: s.color, fontFamily: "'Space Mono', monospace" }}>{s.val}</div>
                  <div className="font-mono text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Top languages */}
            <div>
              <div className="font-mono text-xs text-gray-500 mb-3">Top Languages</div>
              {/* Stacked bar */}
              <div className="flex rounded-full overflow-hidden h-3 mb-3 border border-[#30363d]">
                {data.topLangs.map(l => (
                  <div
                    key={l.lang}
                    style={{
                      width: `${(l.count / totalLangCount) * 100}%`,
                      background: LANG_COLORS[l.lang] || '#8b949e',
                    }}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {data.topLangs.map(l => (
                  <div key={l.lang} className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full inline-block" style={{ background: LANG_COLORS[l.lang] || '#8b949e' }} />
                    <span className="font-mono text-xs text-gray-300">{l.lang}</span>
                    <span className="font-mono text-xs text-gray-600">{((l.count / totalLangCount) * 100).toFixed(0)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
