"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mojkeyyj");

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/jahyunseo_artist" },
    { label: "YouTube", href: "https://www.youtube.com/@jahyunseoartist" },
    { label: "Linktree", href: "https://linktr.ee/jahyun.seo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jahyun-seo-596b9114b/" },
  ];

  return (
    <section id="contact" className="py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-[#c8a97e] text-xs tracking-[0.5em] uppercase">— Get in touch —</p>
          <h2 className="text-4xl md:text-5xl font-thin text-white">Contact</h2>
          <p className="text-white/30 text-sm mt-4">
            For commissions, collaborations, or exhibition inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          {state.succeeded ? (
            <div className="flex items-center justify-center text-center md:col-span-2 py-16">
              <div className="space-y-3">
                <p className="text-[#c8a97e] text-4xl">✓</p>
                <p className="text-white font-thin text-xl">Message Sent</p>
                <p className="text-white/40 text-sm">I&apos;ll get back to you soon.</p>
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
                    name={f.id}
                    type={f.type}
                    required
                    className="peer w-full bg-transparent border-b border-white/10 focus:border-[#c8a97e] text-white text-sm py-3 outline-none transition-colors placeholder-transparent"
                    placeholder={f.label}
                  />
                  <label
                    htmlFor={f.id}
                    className="absolute left-0 -top-3 text-[10px] tracking-widest uppercase text-[#c8a97e]/60 peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/30 transition-all duration-200"
                  >
                    {f.label}
                  </label>
                  <ValidationError prefix={f.label} field={f.id} errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>
              ))}

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="peer w-full bg-transparent border-b border-white/10 focus:border-[#c8a97e] text-white text-sm py-3 outline-none transition-colors resize-none placeholder-transparent"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3 text-[10px] tracking-widest uppercase text-[#c8a97e]/60 peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/30 transition-all duration-200"
                >
                  Message
                </label>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-4 border border-[#c8a97e]/40 text-[#c8a97e] text-xs tracking-widest uppercase px-8 py-3 hover:bg-[#c8a97e]/10 transition-all duration-300 disabled:opacity-40"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          {/* Info */}
          <div className="space-y-10">
            <div className="space-y-2">
              <p className="text-[10px] tracking-widest uppercase text-[#c8a97e]/60">Email</p>
              <a
                href="mailto:jahyun.seo@gmail.com"
                className="text-white/60 text-sm hover:text-[#c8a97e] transition-colors"
              >
                jahyun.seo@gmail.com
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] tracking-widest uppercase text-[#c8a97e]/60">Location</p>
              <p className="text-white/60 text-sm">Albany, California, USA</p>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] tracking-widest uppercase text-[#c8a97e]/60">Follow</p>
              <div className="flex flex-col gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 text-sm hover:text-[#c8a97e] transition-colors"
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
