"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#fafaf8cc] backdrop-blur-md border-b border-black/5" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#hero" className="text-[#b8935e] font-light tracking-[0.3em] text-sm uppercase">
          Studio
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-widest uppercase text-black/40 hover:text-[#b8935e] transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-black/50 hover:text-[#b8935e]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fafaf8] border-t border-black/5 px-6 pb-6">
          <ul className="flex flex-col gap-5 pt-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-widest uppercase text-black/40 hover:text-[#b8935e] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
