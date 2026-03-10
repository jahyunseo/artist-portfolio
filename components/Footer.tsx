export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-10">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#c8a97e] text-[11px] tracking-[0.3em] uppercase">Jahyun Seo Studio</p>
        <p className="text-white/20 text-[11px] tracking-widest">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
