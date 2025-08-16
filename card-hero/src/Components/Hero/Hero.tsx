import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroShowcase() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      {/* Nav */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
            <span className="h-4 w-4 rounded-md bg-gradient-to-tr from-indigo-400 via-fuchsia-400 to-cyan-300"></span>
          </span>
          <span className="text-lg font-semibold tracking-tight">PixelFrame</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm/none text-slate-300 md:flex">
          <a className="hover:text-white/90 transition" href="#features">Features</a>
          <a className="hover:text-white/90 transition" href="#pricing">Pricing</a>
          <a className="hover:text-white/90 transition" href="#faq">FAQ</a>
          <a className="rounded-xl bg-white text-slate-900 px-4 py-2 font-medium hover:bg-white/90 transition" href="#get-started">Get Started</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-8 md:pt-14 lg:grid-cols-2 lg:gap-16">
        {/* Left copy */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/15">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            New: Drag & Drop builder
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Build a <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">stunning hero</span>
            <br /> for your next app
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 max-w-xl text-base text-slate-300 md:text-lg"
          >
            Beautiful, responsive, accessible, and fast. Copy this component into your project and customize the text, image, and colors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-slate-900 shadow-sm transition hover:bg-white/90"
            >
              Get started free
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Live demo
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex items-center gap-5"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/64?img=${i}`}
                  alt="User avatar"
                  className="h-9 w-9 rounded-full ring-2 ring-slate-900/80"
                />
              ))}
            </div>
            <p className="text-sm text-slate-300">
              Trusted by <span className="font-semibold text-white">2,000+</span> developers
            </p>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -inset-10 -z-10">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-fuchsia-500/30 via-cyan-400/30 to-indigo-400/30 blur-3xl" />
          </div>

          <div className="relative rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-900/70 p-5">
              <div className="aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1496302662116-85cbb7b07f73?q=80&w=1600&auto=format&fit=crop"
                  alt="Hero visual"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="-mt-6 ml-auto w-[85%] rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-300">Project</p>
                    <p className="text-sm font-semibold text-white">Beach Frame UI</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wide text-slate-300">Status</p>
                    <p className="text-sm font-semibold text-emerald-300">Live</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer blurb */}
      <footer className="mx-auto w-full max-w-7xl px-6 pb-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
          <p className="text-sm text-slate-300">
            Tip: Swap the Unsplash image URL with <code className="rounded bg-black/30 px-1 py-0.5">/public/your-image.jpg</code> in Next.js.
          </p>
        </div>
      </footer>
    </div>
  );
}
