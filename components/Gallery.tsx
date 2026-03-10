"use client";

import { useState } from "react";

const works = [
  { id: 1, title: "Echoes in Gold", category: "Mixed Media", year: "2025", image: "/works/mixed-01.jpg", aspect: "landscape", size: "163×130cm" },
  { id: 2, title: "Pink Pulse", category: "Mixed Media", year: "2025", image: "/works/mixed-02.jpg", aspect: "portrait", size: "130×163cm" },
  { id: 3, title: "Starfall Signal", category: "Mixed Media", year: "2025", image: "/works/mixed-03.jpg", aspect: "landscape", size: "163×130cm" },
  { id: 4, title: "Trumpet Light", category: "Mixed Media", year: "2025", image: "/works/mixed-04.jpg", aspect: "portrait", size: "91×116.8cm" },
  { id: 5, title: "When He Comes, Starting", category: "Mixed Media", year: "2025", image: "/works/mixed-05.jpg", aspect: "portrait", size: "60×75cm" },
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
        <h2 className="text-4xl md:text-5xl font-thin text-[#ffffff]">Gallery</h2>
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
                : "border-white/10 text-[#e0e0e0]/50 hover:border-white/30 hover:text-[#e0e0e0]"
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
              aspectRatio: work.aspect === "portrait" ? "3/4" : "16/9",
            }}
          >
            <img
              src={work.image}
              alt={work.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
              <p className="text-[#ffffff] text-sm font-light">{work.title}</p>
              <p className="text-[#c8a97e] text-xs tracking-widest mt-1">{work.size}</p>
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
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full object-contain max-h-[70vh]"
            />
            <div className="mt-6 flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-thin text-[#ffffff]">{selected.title}</h3>
                <p className="text-[#c8a97e] text-xs tracking-widest mt-1">
                  {selected.category} · {selected.year} · {selected.size}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-[#e0e0e0]/50 hover:text-[#ffffff] text-xs tracking-widest uppercase"
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
