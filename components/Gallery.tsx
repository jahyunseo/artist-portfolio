"use client";

import { useState } from "react";

const works = [
  { id: 1, title: "Silence I", category: "Acrylic", year: "2024", aspect: "portrait", color: "#f0ebe4" },
  { id: 2, title: "Urban Flow", category: "Digital", year: "2024", aspect: "landscape", color: "#e4eaf0" },
  { id: 3, title: "Bloom", category: "Acrylic", year: "2023", aspect: "square", color: "#f0e4ea" },
  { id: 4, title: "Fracture", category: "Mixed Media", year: "2023", aspect: "portrait", color: "#e4f0ea" },
  { id: 5, title: "Memory Lane", category: "Installation", year: "2023", aspect: "landscape", color: "#f0ede4" },
  { id: 6, title: "Echo", category: "Digital", year: "2022", aspect: "square", color: "#eae4f0" },
  { id: 7, title: "Drift", category: "Collaboration", year: "2022", aspect: "portrait", color: "#f0e4e7" },
  { id: 8, title: "Solitude", category: "Mixed Media", year: "2022", aspect: "landscape", color: "#e7f0e4" },
];

const categories = ["All", "Acrylic", "Digital", "Mixed Media", "Installation", "Collaboration"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<(typeof works)[0] | null>(null);

  const filtered = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <section id="gallery" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#e5e5e5]">
          <div>
            <p className="text-[#c8a97e] text-[11px] tracking-[0.4em] uppercase mb-2">Selected Works</p>
            <h2 className="text-3xl font-extralight text-[#1a1a1a]">Gallery</h2>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[10px] tracking-[0.15em] uppercase px-4 py-1.5 border transition-all duration-200 ${
                  active === cat
                    ? "border-[#c8a97e] text-[#c8a97e] bg-[#c8a97e]/5"
                    : "border-[#e5e5e5] text-[#6b6b6b] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((work) => (
            <button
              key={work.id}
              onClick={() => setSelected(work)}
              className={`group relative overflow-hidden cursor-pointer ${
                work.aspect === "portrait" ? "row-span-2" : work.aspect === "landscape" ? "col-span-2" : ""
              }`}
              style={{
                background: work.color,
                aspectRatio:
                  work.aspect === "portrait" ? "3/4" : work.aspect === "landscape" ? "16/9" : "1/1",
              }}
            >
              {/* Decorative element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border border-[#c8a97e]/30 rotate-45 group-hover:scale-125 group-hover:border-[#c8a97e]/60 transition-all duration-500" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/40 transition-all duration-400 flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100">
                <p className="text-white text-sm font-light">{work.title}</p>
                <p className="text-[#c8a97e] text-[10px] tracking-widest uppercase mt-0.5">{work.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full aspect-square flex items-center justify-center"
              style={{ background: selected.color }}
            >
              <div className="w-20 h-20 border border-[#c8a97e]/40 rotate-45" />
            </div>
            <div className="p-6 flex justify-between items-center border-t border-[#e5e5e5]">
              <div>
                <h3 className="text-lg font-light text-[#1a1a1a]">{selected.title}</h3>
                <p className="text-[#c8a97e] text-[10px] tracking-widest uppercase mt-1">
                  {selected.category} · {selected.year}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-[#6b6b6b] hover:text-[#1a1a1a] text-xs tracking-widest uppercase transition-colors"
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
