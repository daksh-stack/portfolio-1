import React, { useEffect, useRef } from "react";
import "./NeuralBackground.css";

// A lightweight canvas "neural" network background: nodes connected by lines.
// Motion is driven by requestAnimationFrame and reacts to page scroll.
const NeuralBackground = ({ color = "#4a53e6", nodeCount = 60 }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({ nodes: [], width: 0, height: 0, scrollY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    // resolve color: if css variable provided, read computed style
    let drawColor = color;
    try {
      if (!drawColor || drawColor.startsWith("var(")) {
        const cs = getComputedStyle(document.documentElement).getPropertyValue("--accent");
        if (cs) drawColor = cs.trim();
      }
    } catch (e) {
      drawColor = color || "#00e6ff";
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(300, rect.width * dpr);
      canvas.height = Math.max(150, rect.height * dpr);
      ctx.scale(dpr, dpr);
      stateRef.current.width = rect.width;
      stateRef.current.height = rect.height;
      // (re)create nodes
      initNodes();
    }

    function initNodes() {
      const { width, height } = stateRef.current;
      const nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
      stateRef.current.nodes = nodes;
    }

    function onScroll() {
      stateRef.current.scrollY = window.scrollY || window.pageYOffset;
    }

    function step() {
      const { nodes, width, height, scrollY } = stateRef.current;
      if (!nodes) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // compute a speed factor from scroll position (parallax-like)
      const speedFactor = 0.5 + (Math.min(scrollY, 1000) / 1000) * 2.0;

      // update nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx * speedFactor;
        n.y += n.vy * speedFactor;
        // bounce
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // draw connections
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        // draw node
        ctx.beginPath();
        ctx.fillStyle = drawColor;
        ctx.globalAlpha = 0.9;
        ctx.arc(a.x, a.y, 2 + (Math.sin((a.x + a.y + performance.now() / 800) / 40) + 1) * 0.8, 0, Math.PI * 2);
        ctx.fill();

        // connections
        for (let j = i + 1; j < Math.min(nodes.length, i + 8); j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = 0.25 * (1 - dist / 120);
            ctx.beginPath();
            ctx.strokeStyle = drawColor;
            ctx.lineWidth = 1;
            ctx.globalAlpha = alpha * 0.9;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(step);
    }

    // setup
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, nodeCount]);

  return (
    <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />
  );
};

export default NeuralBackground;
