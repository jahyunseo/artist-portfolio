export default function About() {
  const stats = [
    { value: "30+", label: "Years of Practice" },
    { value: "19", label: "Solo Exhibitions" },
    { value: "200+", label: "Group Exhibitions" },
    { value: "Albany, CA", label: "Based in" },
  ];

  return (
    <section id="about" className="bg-[#fafaf8] py-24 border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#c8a97e] text-[11px] tracking-[0.4em] uppercase mb-2">About</p>
          <h2 className="text-3xl font-extralight text-[#1a1a1a]">The Artist</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder */}
          <div className="relative">
            <div
              className="w-full aspect-[4/5] flex items-center justify-center"
              style={{ background: "linear-gradient(145deg, #f0ebe4 0%, #e8ddd0 100%)" }}
            >
              <div className="text-center space-y-3">
                <div className="w-20 h-20 border border-[#c8a97e]/40 rounded-full mx-auto" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#c8a97e]/60">Photo</p>
              </div>
            </div>
            {/* Offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#c8a97e]/20 -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* Bio */}
            <div className="space-y-4 text-[#6b6b6b] text-[15px] leading-[1.8] font-light">
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
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[#e5e5e5]">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extralight text-[#c8a97e]">{s.value}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6b6b] mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CV */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 border border-[#1a1a1a] text-[#1a1a1a] text-[11px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
