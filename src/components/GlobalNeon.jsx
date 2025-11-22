import React, { useEffect, useRef } from "react";
import "./GlobalNeon.css";

// Minimalist neural nodes background — small nodes + thin connecting lines.
// Lightweight, performance-friendly, reacts to scroll and cursor slightly.
const GlobalNeon = ({ nodeCount = 42, lineThreshold = 120 }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({ nodes: [], w: 0, h: 0, mouse: null, scrollY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.max(300, w * dpr);
      canvas.height = Math.max(150, h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stateRef.current.w = w;
      stateRef.current.h = h;
      initNodes();
    }

    function initNodes() {
      const { w, h } = stateRef.current;
      const nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: 1.2 + Math.random() * 2.2,
        });
      }
      stateRef.current.nodes = nodes;
    }

    function onMouseMove(e) {
      stateRef.current.mouse = { x: e.clientX, y: e.clientY };
    }
    function onMouseLeave() {
      stateRef.current.mouse = null;
    }
    function onScroll() {
      stateRef.current.scrollY = window.scrollY || window.pageYOffset;
    }

    function step() {
      const { nodes, w, h, mouse, scrollY } = stateRef.current;
      if (!nodes) return;

      ctx.clearRect(0, 0, w, h);

      // motion factor from scroll (minimal)
      const speed = 0.6 + Math.min(1.6, (scrollY || 0) / 600);

      // update nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx * speed;
        n.y += n.vy * speed;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
        // slight mouse attraction/repel
        if (mouse) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const f = (120 - dist) / 120 * 0.6;
            n.x += (dx / dist) * f;
            n.y += (dy / dist) * f;
          }
        }
      }

      // draw lines between nearby nodes
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = 'rgba(0,230,255,0.18)';
      ctx.fillStyle = 'rgba(0,230,255,0.9)';
      ctx.shadowColor = 'rgba(0,230,255,0.9)';
      ctx.shadowBlur = 8;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        // draw node
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();

        // connect to a few nearest nodes
        let connections = 0;
        for (let j = i + 1; j < nodes.length && connections < 5; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < lineThreshold * lineThreshold) {
            const alpha = 0.28 * (1 - Math.sqrt(d2) / lineThreshold);
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            connections++;
          }
        }
      }

      if (!prefersReduced) rafRef.current = requestAnimationFrame(step);
    }

    // initial setup
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    if (!prefersReduced) rafRef.current = requestAnimationFrame(step);

    // if reduced motion, draw once static network for subtle background
    if (prefersReduced) {
      const { nodes, w, h } = stateRef.current;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(0,230,255,0.06)';
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeCount, lineThreshold]);

  return <canvas ref={canvasRef} className="global-neon-canvas" aria-hidden="true" />;
};

export default GlobalNeon;
