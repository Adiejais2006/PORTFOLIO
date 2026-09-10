'use client';
import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [clicked, setClicked]   = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let raf;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const onDown  = () => setClicked(true);
    const onUp    = () => setClicked(false);

    const onEnter = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const role = e.target.getAttribute('role');
      if (['a', 'button', 'input', 'textarea'].includes(tag) || role === 'button') {
        setHovering(true);
      }
    };
    const onLeave = () => setHovering(false);

    const loop = () => {
      dot.style.transform  = `translate(${mx - 5}px, ${my - 5}px)`;
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    document.addEventListener('mouseover',  onEnter);
    document.addEventListener('mouseout',   onLeave);
    raf = requestAnimationFrame(loop);
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      document.removeEventListener('mouseover',  onEnter);
      document.removeEventListener('mouseout',   onLeave);
      cancelAnimationFrame(raf);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ width: 10, height: 10, borderRadius: '50%',
          background: clicked ? '#f87171' : hovering ? '#a78bfa' : '#000',
          transition: 'background 0.15s ease' }} />
      <div ref={ringRef} className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ width: 36, height: 36, borderRadius: '50%',
          border: `3px solid ${hovering ? '#a78bfa' : '#000'}`,
          background: hovering ? '#a78bfa22' : 'transparent',
          transform: clicked ? 'scale(0.85)' : hovering ? 'scale(1.4)' : 'scale(1)',
          transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.15s ease' }} />
    </>
  );
}
