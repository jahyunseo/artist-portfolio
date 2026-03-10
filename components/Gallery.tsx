"use client";

import { useState } from "react";

const works = [
  { id: 1, title: "Silence I", category: "Acrylic", year: "2024", aspect: "portrait", color: "#e8e0d5" },
  { id: 2, title: "Urban Flow", category: "Digital", year: "2024", aspect: "landscape", color: "#d5dde8" },
  { id: 3, title: "Bloom", category: "Acrylic", year: "2023", aspect: "square", color: "#e8d5e0" },
  { id: 4, title: "Fracture", category: "Mixed Media", year: "2023", aspect: "portrait", color: "#d5e8e0" },
  { id: 5, title: "Memory Lane", category: "Installation", year: "2023", aspect: "landscape", color: "#e8e5d5" },
  { id: 6, title: "Echo", category: "Digital", year: "2022", aspect: "square", color: "#d8d5e8" },
  { id: 7, title: "Drift", category: "Collaboration", year: "2022", aspect: "portrait", color: "#e8d5d8" },
  { id: 8, title: "Solitude", category: "Mixed Media", year: "2022", aspect: "landscape", color: "#dde8d5" },
];

const categories = ["All", "Acrylic", "Digital", "Mixed Media", "Installation", "Collaboration"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<(typeof works)[0] | null>(null);

  const filtered = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <section id="gallery" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-3">
        <p className="text-[#b8935e] text-xs tracking-[0.5em] uppercase">— Works —</p>
        <h2 className="text-4xl md:text-5xl font-thin text-[#1a1a1a]">Gallery</h2>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300 ${
              active === cat
                ? "border-[#b8935e] text-[#b8935e] bg-[#b8935e]/10"
                : "border-black/10 text-black/40 hover:border-black/30 hover:text-black/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((work) => (
          <button
            key={work.id}
            onClick={() => setSelected(work)}
            className={`group relative overflow-hidden cursor-pointer ${
              work.aspect === "portrait" ? "row-span-2" : work.aspect === "landscape" ? "col-span-2" : ""
            }`}
            style={{
              background: work.color,
              aspectRatio: work.aspect === "portrait" ? "3/4" : work.aspect === "landscape" ? "16/9" : "1/1",
            }}
          >
            {/* Placeholder art */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border border-[#b8935e]/40 rotate-45 group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/60 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
              <p className="text-[#1a1a1a] text-sm font-light">{work.title}</p>
              <p className="text-[#b8935e] text-xs tracking-widest mt-1">{work.category}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-8"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#fafaf8]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full aspect-square flex items-center justify-center"
              style={{ background: selected.color }}
            >
              <div className="w-32 h-32 border border-[#b8935e]/40 rotate-45" />
            </div>
            <div className="p-6 flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-thin text-[#1a1a1a]">{selected.title}</h3>
                <p className="text-[#b8935e] text-xs tracking-widest mt-1">{selected.category} · {selected.year}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-black/40 hover:text-black text-xs tracking-widest uppercase"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
