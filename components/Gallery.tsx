"use client";

import { useState } from "react";

const works = [
  { id: 1, title: "Echoes in Gold", category: "Mixed Media", year: "2025", image: "/works/mixed-01.jpg", size: "163×130cm" },
  { id: 2, title: "Pink Pulse", category: "Mixed Media", year: "2025", image: "/works/mixed-02.jpg", size: "130×163cm" },
  { id: 3, title: "Starfall Signal", category: "Mixed Media", year: "2025", image: "/works/mixed-03.jpg", size: "163×130cm" },
  { id: 4, title: "Monalisa 7", category: "Digital", year: "2020", image: "/works/digital-03.jpg", size: "67.7×67.7cm" },
  { id: 5, title: "CUBEHEART LOVE", category: "Digital", year: "2022", image: "/works/digital-06.jpg", size: "" },
  { id: 6, title: "CUBEHEART PASSION", category: "Digital", year: "2022", image: "/works/digital-07.jpg", size: "" },
  { id: 7, title: "Love Prayertime R837", category: "Digital", year: "2023", image: "/works/digital-08.jpg", size: "40×40cm" },
  { id: 8, title: "Love Prayertime Secret Code", category: "Digital", year: "2023", image: "/works/digital-09.jpg", size: "40×40cm" },
  { id: 9, title: "Love Prayertime J10416", category: "Digital", year: "2023", image: "/works/digital-10.jpg", size: "40×40cm" },
  { id: 10, title: "Seeing and Being Seen — Seoul Arts Center III", category: "Installation", year: "2020", image: "/works/install-01.jpg", size: "" },
  { id: 11, title: "Seeing and Being Seen — Seoul Arts Center I", category: "Installation", year: "2020", image: "/works/install-02.jpg", size: "" },
  { id: 12, title: "Seeing and Being Seen — Seoul Arts Center II", category: "Installation", year: "2020", image: "/works/install-03.jpg", size: "" },
  { id: 13, title: "Seeing and Being Seen — La MaMa Galleria", category: "Installation", year: "2017", image: "/works/install-04.jpg", size: "" },
  { id: 14, title: "Vermont Studio Center", category: "Installation", year: "2023", image: "/works/install-05.jpg", size: "" },
  { id: 15, title: "New York Public Library", category: "Installation", year: "2023", image: "/works/install-06.jpg", size: "" },
  { id: 16, title: "Seeing and Being Seen — with FRZM MOVEMENT I", category: "Collaboration", year: "2020", image: "/works/collab-01.jpg", size: "" },
  { id: 17, title: "Seeing and Being Seen — with FRZM MOVEMENT II", category: "Collaboration", year: "2020", image: "/works/collab-02.jpg", size: "" },
  { id: 18, title: "Seeing and Being Seen — with FRZM MOVEMENT III", category: "Collaboration", year: "2020", image: "/works/collab-03.jpg", size: "" },
];

const categories = ["All", "Digital", "Mixed Media", "Installation", "Collaboration"];

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

      {/* Grid — 3열, 정사각형 통일 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((work) => (
          <button
            key={work.id}
            onClick={() => setSelected(work)}
            className="group relative w-full overflow-hidden rounded-md cursor-pointer aspect-square"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-400 rounded-md flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 px-4">
              <p className="text-[#ffffff] text-sm font-light text-center leading-snug">{work.title}</p>
              <p className="text-[#c8a97e] text-xs tracking-widest mt-2">{work.year}</p>
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
              className="w-full object-contain max-h-[70vh] rounded-md"
            />
            <div className="mt-6 flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-thin text-[#ffffff]">{selected.title}</h3>
                <p className="text-[#c8a97e] text-xs tracking-widest mt-1">
                  {selected.category} · {selected.year}{selected.size ? ` · ${selected.size}` : ""}
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
