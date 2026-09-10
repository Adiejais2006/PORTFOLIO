'use client';
import { useRef, useState, useEffect } from 'react';

/* ── Drawing board inspired by Aditi's design ── */
function DrawingBoard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('pencil');
  const [color, setColor] = useState('#ffffff');
  const lastPos = useRef(null);
  const BG = '#1e1e2e';

  const COLORS = ['#ffffff', '#ff9fac', '#a78bfa', '#60a5fa', '#4ade80', '#fcd34d', '#f87171'];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const getPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if (e.touches) {
      return { x: (e.touches[0].clientX - rect.left) * scaleX, y: (e.touches[0].clientY - rect.top) * scaleY };
    }
    return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
  };

  const startDraw = (e) => { setIsDrawing(true); lastPos.current = getPos(e, canvasRef.current); };
  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pos = getPos(e, canvas);
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = tool === 'eraser' ? BG : color;
    ctx.lineWidth  = tool === 'eraser' ? 24 : 4;
    ctx.lineCap    = 'round';
    ctx.lineJoin   = 'round';
    ctx.stroke();
    lastPos.current = pos;
  };
  const stopDraw = () => { setIsDrawing(false); lastPos.current = null; };
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* ── Toolbar ── */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Tool buttons */}
        <button
          onClick={() => setTool('pencil')}
          className={`neo-btn font-mono font-bold text-xs px-3 py-1.5 rounded ${tool === 'pencil' ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          ✏ Draw
        </button>
        <button
          onClick={() => setTool('eraser')}
          className={`neo-btn font-mono font-bold text-xs px-3 py-1.5 rounded ${tool === 'eraser' ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          ◻ Erase
        </button>
        <button
          onClick={clearCanvas}
          className="neo-btn bg-[#f87171] text-white font-mono font-bold text-xs px-3 py-1.5 rounded"
        >
          🗑 Clear
        </button>

        {/* Color swatches */}
        <div className="flex gap-1.5 ml-1 flex-wrap">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => { setColor(c); setTool('pencil'); }}
              className="w-6 h-6 rounded-full border-2 transition-all duration-150 hover:scale-110"
              style={{
                background: c,
                borderColor: color === c ? '#000' : 'rgba(0,0,0,0.3)',
                boxShadow: color === c ? '0 0 0 2px #fff, 0 0 0 4px #000' : 'none',
              }}
              aria-label={`Color ${c}`}
            />
          ))}
        </div>
      </div>

      {/* ── Canvas ── */}
      <div
        className="flex-1 overflow-hidden rounded-lg"
        style={{ border: '3px solid #000', boxShadow: '4px 4px 0 #000', minHeight: 220 }}
      >
        <canvas
          id="drawing-canvas"
          ref={canvasRef}
          width={700}
          height={450}
          className="block w-full h-full"
          style={{ background: BG, cursor: 'crosshair', display: 'block' }}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={stopDraw}
          onMouseLeave={stopDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={stopDraw}
        />
      </div>
      <p className="text-xs font-mono text-center mt-1" style={{ color: '#a78bfa' }}>✍ Express yourself — draw anything!</p>
    </div>
  );
}

function EduCard({ windowTitle, institute, degree, period, scoreLabel, score, coursework }) {
  return (
    <div className="neo-card bg-white rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-black border-b-4 border-black">
        <span className="win-dot bg-[#ff5f57]" />
        <span className="win-dot bg-[#ffbd2e]" />
        <span className="win-dot bg-[#28c940]" />
        <span className="font-mono text-xs font-bold ml-2 text-white tracking-widest">{windowTitle}</span>
      </div>
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-black text-xl" style={{ fontFamily: "'Shrikhand', cursive" }}>
            {institute}
          </h3>
          <p className="font-mono text-sm text-gray-700 mt-1 font-bold">{degree}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="bg-[#fcd34d] border-2 border-black px-3 py-1 font-mono text-xs font-bold">
            📅 {period}
          </div>
          <div className="bg-[#a78bfa] border-2 border-black px-3 py-1 font-mono text-xs font-bold">
            📊 {scoreLabel}: {score}
          </div>
        </div>
        {coursework && (
          <div className="border-t-2 border-dashed border-black pt-2">
            <p className="font-mono text-xs text-gray-600">{coursework}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-6 px-4">
      <div className="neo-card bg-[#4ade80] rounded-2xl p-8 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-8">
          <h2
            className="text-4xl font-black italic"
            style={{ fontFamily: "'Shrikhand', cursive" }}
          >
            EDUCATION
          </h2>
          <div className="flex-1 h-1 bg-black" />
          <div className="font-mono text-xs bg-black text-white px-3 py-1">[ACADEMIA]</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT: Education cards stacked */}
          <div className="flex flex-col gap-5">
            <EduCard
              windowTitle="IIIT_AGARTALA.EXE"
              institute="IIIT Agartala"
              degree="B.Tech in Computer Science & Engineering"
              period="2024 – 2028"
              scoreLabel="CGPA"
              score="8.74"
              coursework="DSA, DBMS, Operating Systems, Computer Networks, OOP"
            />
            <EduCard
              windowTitle="CLASS_XII.EXE"
              institute="Kendriya Vidyalaya No.2 AFS Jodhpur"
              degree="Class XII — Senior Secondary (PCM) · CBSE"
              period="Completed 2024"
              scoreLabel="Percentage"
              score="92%"
              coursework={null}
            />
            <EduCard
              windowTitle="CLASS_X.EXE"
              institute="Kendriya Vidyalaya No.2 AFS Jodhpur"
              degree="Class X — Secondary Education · CBSE"
              period="Completed 2022"
              scoreLabel="Percentage"
              score="98%"
              coursework={null}
            />

            {/* Achievements terminal */}
            <div className="neo-card bg-black text-white rounded-xl p-5 font-mono">
              <div className="text-[#fcd34d] font-bold text-sm mb-3">$ cat achievements.txt</div>
              <ul className="space-y-2 text-xs">
                {[
                  'Inter-IIIT Hackathon — 5th Rank All India',
                  'Smart India Hackathon 2025 — Institute Winner',
                  'Codeforces Pupil (Rating: 1323)',
                  'CodeChef 3-Star rated',
                  '600+ DSA problems solved',
                ].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-green-400 shrink-0">▶</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Drawing Board window */}
          <div className="neo-card bg-[#1e1e2e] rounded-xl overflow-hidden flex flex-col">
            {/* Window title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2a2a3e] border-b-4 border-black">
              <span className="win-dot bg-[#ff5f57]" />
              <span className="win-dot bg-[#ffbd2e]" />
              <span className="win-dot bg-[#28c940]" />
              <span className="font-mono text-xs font-bold ml-2 text-white tracking-wider">🎨 drawing-board.app</span>
            </div>
            {/* Canvas area */}
            <div className="p-4 flex flex-col flex-1">
              <DrawingBoard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
