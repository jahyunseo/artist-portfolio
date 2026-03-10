export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#b8935e] text-xs tracking-[0.3em] uppercase">Jahyun Seo Studio</p>
        <p className="text-black/20 text-xs tracking-widest">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
