"use client";

import { useState } from "react";

const works = [
  { id: 1, title: "Silence I", category: "Oil Painting", year: "2024", aspect: "portrait", color: "#2a1f1a" },
  { id: 2, title: "Urban Flow", category: "Digital Art", year: "2024", aspect: "landscape", color: "#1a2030" },
  { id: 3, title: "Bloom", category: "Watercolor", year: "2023", aspect: "square", color: "#1f1a2a" },
  { id: 4, title: "Fracture", category: "Mixed Media", year: "2023", aspect: "portrait", color: "#1a2520" },
  { id: 5, title: "Memory Lane", category: "Oil Painting", year: "2023", aspect: "landscape", color: "#201a15" },
  { id: 6, title: "Echo", category: "Digital Art", year: "2022", aspect: "square", color: "#151a20" },
  { id: 7, title: "Drift", category: "Watercolor", year: "2022", aspect: "portrait", color: "#1a1520" },
  { id: 8, title: "Solitude", category: "Mixed Media", year: "2022", aspect: "landscape", color: "#201a1a" },
];

const categories = ["All", "Acrylic", "Digital", "Mixed Media", "Installation", "Collaboration"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<(typeof works)[0] | null>(null);

  const filtered = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <section id="gallery" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-3">
        <p className="text-[#c8a97e] text-xs tracking-[0.5em] uppercase">— Works —</p>
        <h2 className="text-4xl md:text-5xl font-thin text-white">Gallery</h2>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300 ${
              active === cat
                ? "border-[#c8a97e] text-[#c8a97e] bg-[#c8a97e]/10"
                : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/60"
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
            className={`group relative overflow-hidden bg-[${work.color}] cursor-pointer ${
              work.aspect === "portrait" ? "row-span-2" : work.aspect === "landscape" ? "col-span-2" : ""
            }`}
            style={{
              background: work.color,
              aspectRatio: work.aspect === "portrait" ? "3/4" : work.aspect === "landscape" ? "16/9" : "1/1",
            }}
          >
            {/* Placeholder art */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border border-[#c8a97e]/20 rotate-45 group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
              <p className="text-white text-sm font-light">{work.title}</p>
              <p className="text-[#c8a97e] text-xs tracking-widest mt-1">{work.category}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full aspect-square flex items-center justify-center"
              style={{ background: selected.color }}
            >
              <div className="w-32 h-32 border border-[#c8a97e]/30 rotate-45" />
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-thin text-white">{selected.title}</h3>
                <p className="text-[#c8a97e] text-xs tracking-widest mt-1">{selected.category} · {selected.year}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-white/40 hover:text-white text-xs tracking-widest uppercase"
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
