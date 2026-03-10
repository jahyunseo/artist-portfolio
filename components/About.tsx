export default function About() {
  const stats = [
    { value: "30+", label: "Years of Practice" },
    { value: "19", label: "Solo Exhibitions" },
    { value: "200+", label: "Group Exhibitions" },
    { value: "Albany, CA", label: "Based in" },
  ];

  return (
    <section id="about" className="py-32 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Image placeholder */}
        <div className="relative">
          <div
            className="w-full aspect-[3/4] flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #e8e0d5 0%, #d5c9b8 100%)" }}
          >
            <div className="text-center space-y-2 text-[#b8935e]/40">
              <div className="w-24 h-24 border border-[#b8935e]/30 rounded-full mx-auto" />
              <p className="text-xs tracking-widest uppercase">Photo</p>
            </div>
          </div>
          {/* Decorative */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#b8935e]/15 -z-10" />
        </div>

        {/* Text */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-[#b8935e] text-xs tracking-[0.5em] uppercase">— About —</p>
            <h2 className="text-4xl md:text-5xl font-thin text-[#1a1a1a] leading-tight">
              The Artist
            </h2>
          </div>

          <div className="space-y-4 text-black/50 font-light leading-relaxed text-sm">
            <p>
              Jahyun Seo is an interdisciplinary artist based in Albany, California, working
              between New York and Seoul. Her practice spans painting, mixed media installation,
              digital imagery, and writing, rooted in her signature methodology — the
              Multi-Layered Planar Structure.
            </p>
            <p>
              Her work explores the theme of Seeing and Being Seen, examining how truth is
              transformed and distorted through media, viewed through a Christian worldview.
              She graduated from École Supérieure d&apos;Art Neufville Conte in Paris and
              earned her Ph.D. in Fiber Art from Hongik University, Seoul.
            </p>
            <p>
              Seo has presented 19 solo exhibitions including shows at La MaMa Galleria
              (New York, 2017), Seoul Arts Center (2020), and The New York Public Library
              (2023), and has participated in over 200 group exhibitions worldwide. She is
              represented by Gallery Sejul, Seoul.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/5">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-thin text-[#b8935e]">{s.value}</p>
                <p className="text-xs tracking-widest text-black/30 uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CV Download */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block border border-[#b8935e]/40 text-[#b8935e] text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#b8935e]/10 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
