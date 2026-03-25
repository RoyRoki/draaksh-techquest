"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Pulse {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
}

const MAX_DIST = 180;
const MAX_NODES = 38;
const MAX_PULSES = 10;

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const pulsesRef = useRef<Pulse[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initNodes = () => {
      const w = canvas.width;
      const h = canvas.height;
      const count = Math.min(Math.floor((w * h) / 22000), MAX_NODES);
      nodesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.2 + 0.8,
      }));
      pulsesRef.current = [];
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes();
    };

    const spawnPulse = () => {
      const nodes = nodesRef.current;
      const pulses = pulsesRef.current;
      if (pulses.length >= MAX_PULSES) return;

      const fromIdx = Math.floor(Math.random() * nodes.length);
      const from = nodes[fromIdx];

      const candidates = nodes
        .map((n, i) => ({
          i,
          d: Math.hypot(n.x - from.x, n.y - from.y),
        }))
        .filter((c) => c.i !== fromIdx && c.d < MAX_DIST && c.d > 40);

      if (!candidates.length) return;
      const target = candidates[Math.floor(Math.random() * candidates.length)];
      pulses.push({
        fromIdx,
        toIdx: target.i,
        progress: 0,
        speed: 0.006 + Math.random() * 0.007,
      });
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const nodes = nodesRef.current;
      const pulses = pulsesRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, w, h);

      // ── Move nodes ──────────────────────────────────
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;

        // Mouse repulsion
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 110 && dist > 0) {
          const f = ((110 - dist) / 110) * 0.06;
          node.x += (dx / dist) * f * 20;
          node.y += (dy / dist) * f * 20;
        }
      }

      // ── Draw edges ───────────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d >= MAX_DIST) continue;

          const alpha = (1 - d / MAX_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(94,46,234,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      // ── Draw + advance pulses ────────────────────────
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const from = nodes[p.fromIdx];
        const to = nodes[p.toIdx];
        if (!from || !to) { pulses.splice(i, 1); continue; }

        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;

        // Trailing gradient line
        const trailT = Math.max(0, p.progress - 0.12);
        const tx = from.x + (to.x - from.x) * trailT;
        const ty = from.y + (to.y - from.y) * trailT;

        const grad = ctx.createLinearGradient(tx, ty, px, py);
        grad.addColorStop(0, "rgba(94,46,234,0)");
        grad.addColorStop(0.6, "rgba(123,79,255,0.25)");
        grad.addColorStop(1, "rgba(167,139,250,0.6)");

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Pulse head dot
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(167,139,250,0.9)";
        ctx.fill();

        // Pulse head glow
        const gHead = ctx.createRadialGradient(px, py, 0, px, py, 10);
        gHead.addColorStop(0, "rgba(167,139,250,0.3)");
        gHead.addColorStop(1, "rgba(167,139,250,0)");
        ctx.beginPath();
        ctx.arc(px, py, 10, 0, Math.PI * 2);
        ctx.fillStyle = gHead;
        ctx.fill();
      }

      // ── Draw nodes ───────────────────────────────────
      for (const node of nodes) {
        // Proximity to mouse → brighter
        const mouseDist = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        const boost = mouseDist < 120 ? (1 - mouseDist / 120) * 0.5 : 0;
        const alpha = 0.35 + boost;

        // Outer glow
        const gGlow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 6);
        gGlow.addColorStop(0, `rgba(94,46,234,${0.12 + boost * 0.2})`);
        gGlow.addColorStop(1, "rgba(94,46,234,0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = gGlow;
        ctx.fill();

        // Node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + boost * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94,46,234,${alpha})`;
        ctx.fill();
      }

      // Random pulse spawn
      if (Math.random() < 0.018) spawnPulse();

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
