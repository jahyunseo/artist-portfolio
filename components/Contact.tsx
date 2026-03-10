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
      body: JSON.stringify({ access_key: "57b98574-b444-4342-b3b0-5ef0a0f42742", ...form }),
    });
    setStatus(res.ok ? "success" : "error");
  };

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/jahyunseo_artist" },
    { label: "YouTube", href: "https://www.youtube.com/@jahyunseoartist" },
    { label: "Linktree", href: "https://linktr.ee/jahyun.seo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jahyun-seo-596b9114b/" },
  ];

  const fields = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
  ];

  return (
    <section id="contact" className="bg-white py-24 border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#c8a97e] text-[11px] tracking-[0.4em] uppercase mb-2">Get in Touch</p>
          <h2 className="text-3xl font-extralight text-[#1a1a1a]">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {/* Form */}
          {status === "success" ? (
            <div className="flex items-center py-16">
              <div>
                <p className="text-[#c8a97e] text-5xl mb-4">✓</p>
                <p className="text-[#1a1a1a] text-xl font-extralight mb-2">Message Sent</p>
                <p className="text-[#6b6b6b] text-sm">I&apos;ll get back to you soon.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {fields.map((f) => (
                <div key={f.id} className="space-y-1.5">
                  <label
                    htmlFor={f.id}
                    className="block text-[10px] tracking-[0.2em] uppercase text-[#6b6b6b]"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full border-b border-[#e5e5e5] focus:border-[#c8a97e] text-[#1a1a1a] text-sm py-2.5 outline-none transition-colors bg-transparent"
                  />
                </div>
              ))}

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-[10px] tracking-[0.2em] uppercase text-[#6b6b6b]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border-b border-[#e5e5e5] focus:border-[#c8a97e] text-[#1a1a1a] text-sm py-2.5 outline-none transition-colors resize-none bg-transparent"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-[#1a1a1a] text-white text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-[#c8a97e] transition-colors duration-300 disabled:opacity-40"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          {/* Info */}
          <div className="space-y-10 md:pl-8 md:border-l border-[#e5e5e5]">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">Email</p>
              <a
                href="mailto:jahyun.seo@gmail.com"
                className="text-[#1a1a1a] text-sm hover:text-[#c8a97e] transition-colors"
              >
                jahyun.seo@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">Location</p>
              <p className="text-[#1a1a1a] text-sm">Albany, California, USA</p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6b6b] mb-3">Follow</p>
              <div className="space-y-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#6b6b6b] hover:text-[#c8a97e] transition-colors group"
                  >
                    <span className="w-4 h-px bg-current transition-all group-hover:w-6" />
                    {s.label}
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
