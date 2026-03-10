"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.25 + 0.05,
      });
    }

    let raf: number;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 147, 94, ${p.opacity})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fafaf8]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafaf810] to-[#fafaf8]" />

      <div className="relative z-10 text-center px-6 space-y-6">
        <p className="text-[#b8935e] text-xs tracking-[0.5em] uppercase">— Portfolio —</p>
        <h1 className="text-6xl md:text-8xl font-thin tracking-tight text-[#1a1a1a] leading-none">
          Jahyun Seo
        </h1>
        <p className="text-black/40 text-sm md:text-base tracking-[0.2em] uppercase">
          Interdisciplinary Artist
        </p>
        <div className="pt-6">
          <a
            href="#gallery"
            className="inline-block border border-[#b8935e]/40 text-[#b8935e] text-xs tracking-widest uppercase px-8 py-3 hover:bg-[#b8935e]/10 transition-all duration-300"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-widest uppercase text-black/60">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-black/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
