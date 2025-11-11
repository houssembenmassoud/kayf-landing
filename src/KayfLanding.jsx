import React from "react";
import { motion } from "framer-motion";

// Kayf Landing Page
// - TailwindCSS utility classes assumed in the host project
// - Replace SPLINE_SCENE_URL with your Spline scene share/embed URL
// - This is a single-file React component (default export)

const SPLINE_SCENE_URL = "https://app.spline.design/ui/0e8d3fcb-3c81-4ca6-9c75-1c63afaee6e7"; // embedded Spline scene (kept inside mockup)

// Public assets (placed in /public)
const LOGO_SVG = "/public/kayf_logo_transparent.svg";
const APP_ICON = "/public/kayf_app_icon.png";
const OG_IMAGE = "/public/og-image.png";

export default function KayfLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0520] via-[#120a2b] to-[#24102f] text-white antialiased">
      <header className="container mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* inline app icon */}
          <div className="w-12 h-12 rounded-3xl bg-gradient-to-br from-[#7B2FF7] via-[#F72C5B] to-[#FF8A00] flex items-center justify-center shadow-2xl">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18C6 18 8.5 9 13 9C16.5 9 18 12 18 12C18 12 14.5 21 10 21C6.5 21 6 18 6 18Z" fill="white" />
            </svg>
          </div>
          <div className="font-semibold text-xl tracking-tight">kayf</div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-200/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#community" className="hover:text-white">Community</a>
          <button className="ml-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm">Sign in</button>
        </nav>
      </header>

      <main className="container mx-auto px-6 pb-24">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
          {/* HERO - left column */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Find your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B2FF7] via-[#F72C5B] to-[#FF8A00]">kayf</span>
              <span className="ml-2 text-amber-300">✦</span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-200/80">
              Discover what’s happening here and now — concerts, meetups, festivals, markets and more. Curated, local, and made for the vibe seekers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-3 bg-white text-[#0b0520] px-4 py-3 rounded-lg shadow-md hover:scale-[1.02] transform transition">
                {/* App Store Badge (simple) */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <rect width="20" height="20" rx="4" fill="#0b0520" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px]">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>

              <a href="#" className="inline-flex items-center gap-3 bg-[#111827]/60 px-4 py-3 rounded-lg border border-white/6 hover:scale-[1.02] transform transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <rect width="20" height="20" rx="4" fill="#111827" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px]">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="mt-10 flex gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/6 p-2">
                  <img alt="user" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=dummy" className="w-full h-full object-cover rounded" />
                </div>
                <div>
                  <div className="text-sm font-semibold">120k+</div>
                  <div className="text-xs text-gray-300/70">people exploring Kayf</div>
                </div>
              </div>

              <div className="h-10 w-px bg-white/6" />

              <div className="text-xs text-gray-300/70">Available in 24 cities</div>
            </div>
          </motion.div>

          {/* HERO - right column (3D embed + mockup) */}
          <div className="relative w-full h-[520px] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 -z-10 blur-3xl opacity-60" style={{ background: 'linear-gradient(135deg, rgba(123,47,247,0.35), rgba(247,44,91,0.28), rgba(255,138,0,0.18))' }} />

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="w-full h-full flex items-center justify-center">
              {/* Spline iframe embed */}
              <div className="w-[420px] h-[420px] rounded-2xl shadow-2xl overflow-hidden bg-black/20 backdrop-blur-md">
                <iframe title="Kayf 3D Scene" src={SPLINE_SCENE_URL} className="w-full h-full border-0" allowFullScreen />
              </div>

              {/* 3D phone mockup floating */}
              <div className="absolute right-8 bottom-14 w-[220px] h-[420px] rounded-3xl shadow-2xl transform rotate-[-8deg] bg-gradient-to-b from-[#1b1029] to-[#0d0714] border border-white/6">
                <div className="w-full h-full p-4">
                  <div className="w-full h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[#7B2FF7] via-[#F72C5B] to-[#FF8A00]">
                    {/* sample app screen placeholder */}
                    <div className="w-full h-full flex items-end p-4">
                      <div className="bg-white/10 p-3 rounded-md">Preview</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mt-20">
          <h3 className="text-2xl font-bold">Everything. For everyone.</h3>
          <p className="mt-3 text-gray-300/70 max-w-2xl">From underground gigs to industry conferences — Kayf helps you discover, plan, and share what matters to you.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Discover local events",
                desc: "Curated picks and personalized suggestions based on your vibe.",
                emoji: "🎉",
              },
              {
                title: "Connect with friends",
                desc: "Invite people, create meetups, and share plans seamlessly.",
                emoji: "🤝",
              },
              {
                title: "Save & plan",
                desc: "Bookmarks, reminders, and smart itineraries for weekends.",
                emoji: "📅",
              },
            ].map((f, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="bg-white/3 p-6 rounded-2xl shadow-xl border border-white/6">
                <div className="text-3xl">{f.emoji}</div>
                <div className="mt-4 font-semibold text-lg">{f.title}</div>
                <div className="mt-2 text-gray-300/70">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMMUNITY */}
        <section id="community" className="mt-20">
          <h3 className="text-2xl font-bold">Community stories</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/3 border border-white/6">
              <div className="text-sm text-gray-300/70">"Found a rooftop jazz night last minute — unforgettable."</div>
              <div className="mt-4 text-xs text-gray-300/60">— Lena, Moscow</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/3 border border-white/6">
              <div className="text-sm text-gray-300/70">"Kayf helped me plan a whole weekend of food markets and galleries."</div>
              <div className="mt-4 text-xs text-gray-300/60">— Alex, Kyiv</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/3 border border-white/6">
              <div className="text-sm text-gray-300/70">"I met my collaborators through a design meetup listed on Kayf."</div>
              <div className="mt-4 text-xs text-gray-300/60">— Noor, Berlin</div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 py-12 border-t border-white/6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-semibold text-lg">kayf</div>
              <div className="text-sm text-gray-300/70">Feel the vibe.</div>
            </div>

            <div className="flex gap-6 text-sm text-gray-300/70">
              <a href="#">About</a>
              <a href="#">Privacy</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
