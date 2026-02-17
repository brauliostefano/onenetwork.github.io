import React, { useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import {
  GraduationCap,
  WandSparkles,
  Lightbulb,
  Sparkles,
  Activity,
  Layers,
  Cpu,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

// --- 1. HEADER REFINADO (Sin bordes duros) ---
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-[100] flex justify-center pt-6 px-6 pointer-events-none"
    >
      <motion.nav
        animate={{
          width: scrolled ? 'auto' : '95%',
          backgroundColor: scrolled
            ? 'rgba(255, 255, 255, 0.8)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          padding: scrolled ? '12px 24px' : '20px 40px',
        }}
        // Eliminamos 'border' y usamos una sombra muy suave (shadow-sm)
        className="flex items-center justify-between rounded-full pointer-events-auto transition-all duration-500"
      >
        <span className="text-emerald-950 font-black tracking-tighter text-xl">
          ONE NETWORK
        </span>
        <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40">
          <a href="#agnes" className="hover:text-emerald-600 transition-colors">
            Agnes AI
          </a>
          <a
            href="#foundations"
            className="hover:text-emerald-600 transition-colors"
          >
            Protocol
          </a>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-full text-xs font-bold hover:shadow-lg hover:shadow-emerald-100 transition-all">
          Connect
        </button>
      </motion.nav>
    </motion.header>
  );
}

// --- 3. PROTOCOL FOUNDATIONS (Sin 'border-t') ---
export function ProtocolFoundations() {
  const foundations = [
    {
      title: 'L2 Settlement',
      desc: 'Built on Arbitrum for near-zero latency.',
      icon: Layers,
    },
    {
      title: 'Neural Kernel',
      desc: 'Agnes AI core integration for predictive growth.',
      icon: Cpu,
    },
    {
      title: 'Identity Vault',
      desc: 'Self-sovereign identity protocols.',
      icon: ShieldCheck,
    },
    {
      title: 'Direct Economy',
      desc: 'Automated smart contract distributions.',
      icon: Activity,
    },
  ];

  return (
    <section id="foundations" className="py-24 px-6 bg-zinc-50/30">
      {/* Usamos un tono de fondo apenas diferente (zinc-50/30) para separar secciones sin usar líneas */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-emerald-950 mb-16 text-center uppercase">
          Protocol Foundations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foundations.map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-[2.5rem] bg-white shadow-sm hover:shadow-xl transition-all group border-none"
            >
              <f.icon
                className="text-emerald-600 group-hover:scale-110 transition-transform"
                size={28}
              />
              <h3 className="text-xl font-bold text-emerald-950 mt-6 mb-2 uppercase italic">
                {f.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OneNetworkLanding() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <ProtocolFoundations />
      </main>
    </div>
  );
}
