export default function About() {
  const stats = [
    { value: "12+", label: "Years of Experience" },
    { value: "200+", label: "Works Created" },
    { value: "40+", label: "Exhibitions" },
    { value: "15", label: "Awards" },
  ];

  return (
    <section id="about" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Image placeholder */}
        <div className="relative">
          <div
            className="w-full aspect-[3/4] bg-[#1a1410] flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1a1410 0%, #2a1f18 100%)" }}
          >
            <div className="text-center space-y-2 text-[#c8a97e]/20">
              <div className="w-24 h-24 border border-[#c8a97e]/20 rounded-full mx-auto" />
              <p className="text-xs tracking-widest uppercase">Photo</p>
            </div>
          </div>
          {/* Decorative */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c8a97e]/10 -z-10" />
        </div>

        {/* Text */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-[#c8a97e] text-xs tracking-[0.5em] uppercase">— About —</p>
            <h2 className="text-4xl md:text-5xl font-thin text-white leading-tight">
              The Artist
            </h2>
          </div>

          <div className="space-y-4 text-white/50 font-light leading-relaxed text-sm">
            <p>
              Jane Doe is a multidisciplinary visual artist based in Seoul, working
              across oil painting, watercolor, and digital media. Her work explores
              the quiet intersections between memory, space, and the passage of time.
            </p>
            <p>
              Educated at the Seoul National University of Arts, she has exhibited
              internationally across Asia and Europe. Her practice is driven by a
              deep curiosity about how light shapes perception and emotion.
            </p>
            <p>
              Currently accepting commissions and exhibition proposals.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-thin text-[#c8a97e]">{s.value}</p>
                <p className="text-xs tracking-widest text-white/30 uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CV Download */}
          <a
            href="#"
            className="inline-block border border-[#c8a97e]/40 text-[#c8a97e] text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#c8a97e]/10 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
