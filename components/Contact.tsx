"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: "57b98574-b444-4342-b3b0-5ef0a0f42742",
        ...form,
      }),
    });

    setStatus(res.ok ? "success" : "error");
  };

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/jahyunseo_artist" },
    { label: "YouTube", href: "https://www.youtube.com/@jahyunseoartist" },
    { label: "Linktree", href: "https://linktr.ee/jahyun.seo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jahyun-seo-596b9114b/" },
  ];

  return (
    <section id="contact" className="py-32 border-t border-black/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-[#b8935e] text-xs tracking-[0.5em] uppercase">— Get in touch —</p>
          <h2 className="text-4xl md:text-5xl font-thin text-[#1a1a1a]">Contact</h2>
          <p className="text-black/30 text-sm mt-4">
            For commissions, collaborations, or exhibition inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          {status === "success" ? (
            <div className="flex items-center justify-center text-center md:col-span-2 py-16">
              <div className="space-y-3">
                <p className="text-[#b8935e] text-4xl">✓</p>
                <p className="text-[#1a1a1a] font-thin text-xl">Message Sent</p>
                <p className="text-black/40 text-sm">I&apos;ll get back to you soon.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
              ].map((f) => (
                <div key={f.id} className="relative">
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="peer w-full bg-transparent border-b border-black/10 focus:border-[#b8935e] text-[#1a1a1a] text-sm py-3 outline-none transition-colors placeholder-transparent"
                    placeholder={f.label}
                  />
                  <label
                    htmlFor={f.id}
                    className="absolute left-0 -top-3 text-[10px] tracking-widest uppercase text-[#b8935e]/70 peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-black/30 transition-all duration-200"
                  >
                    {f.label}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="peer w-full bg-transparent border-b border-black/10 focus:border-[#b8935e] text-[#1a1a1a] text-sm py-3 outline-none transition-colors resize-none placeholder-transparent"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3 text-[10px] tracking-widest uppercase text-[#b8935e]/70 peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-black/30 transition-all duration-200"
                >
                  Message
                </label>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-xs tracking-wide">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-4 border border-[#b8935e]/40 text-[#b8935e] text-xs tracking-widest uppercase px-8 py-3 hover:bg-[#b8935e]/10 transition-all duration-300 disabled:opacity-40"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          {/* Info */}
          <div className="space-y-10">
            <div className="space-y-2">
              <p className="text-[10px] tracking-widest uppercase text-[#b8935e]/70">Email</p>
              <a
                href="mailto:jahyun.seo@gmail.com"
                className="text-black/50 text-sm hover:text-[#b8935e] transition-colors"
              >
                jahyun.seo@gmail.com
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] tracking-widest uppercase text-[#b8935e]/70">Location</p>
              <p className="text-black/50 text-sm">Albany, California, USA</p>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] tracking-widest uppercase text-[#b8935e]/70">Follow</p>
              <div className="flex flex-col gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/40 text-sm hover:text-[#b8935e] transition-colors"
                  >
                    {s.label} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
