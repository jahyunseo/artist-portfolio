"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-white flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#c8a97e]/20" />

      <div className="max-w-6xl mx-auto px-8 w-full">
        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Eyebrow */}
          <p className="text-[#c8a97e] text-[11px] tracking-[0.4em] uppercase mb-8">
            Interdisciplinary Artist
          </p>

          {/* Name */}
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-extralight text-[#1a1a1a] leading-[1.05] tracking-tight mb-6">
            Jahyun<br />
            <span className="italic text-[#c8a97e]">Seo</span>
          </h1>

          {/* Description */}
          <p className="text-[#6b6b6b] text-sm leading-relaxed max-w-md mb-12 font-light">
            Working between New York, Albany, and Seoul — painting,
            installation, digital imagery, and writing.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-8">
            <a
              href="#gallery"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white text-[11px] tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-[#c8a97e] transition-colors duration-300"
            >
              View Gallery
            </a>
            <a
              href="#about"
              className="text-[11px] tracking-[0.2em] uppercase text-[#6b6b6b] hover:text-[#c8a97e] transition-colors border-b border-transparent hover:border-[#c8a97e] pb-0.5"
            >
              About
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-8 flex flex-col items-center gap-3">
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#1a1a1a]/30 [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#1a1a1a]/20 to-transparent" />
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#e5e5e5]" />
    </section>
  );
}
