import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, ArrowUpRight, ShieldCheck } from 'lucide-react';

// --- COMPONENTES (Adaptados con clases responsivas) ---

const AgnesChat = () => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    // Mobile: relative y ancho completo | Desktop: absolute y ancho fijo
    className="relative lg:absolute lg:top-0 lg:left-10 w-full max-w-[340px] lg:w-80 bg-white rounded-[2rem] p-6 shadow-2xl z-30 border border-emerald-50"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
        <ShieldCheck size={16} />
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
        Agnes AI // 02:10 PM
      </span>
    </div>
    <div className="space-y-3">
      <div className="bg-zinc-50 p-3 rounded-2xl rounded-tl-none text-xs text-zinc-600 font-medium">
        Your latest asset is now secured on-chain.
      </div>
      <div className="bg-emerald-500 p-3 w-auto rounded-2xl rounded-tr-none text-xs text-white font-bold ml-8 text-right shadow-lg shadow-emerald-200">
        Launch optimized.
      </div>
    </div>
  </motion.div>
);

const GrowthGraph = () => (
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 0.5,
    }}
    className="relative lg:absolute lg:-bottom-24 lg:right-0 w-full max-w-[380px] lg:w-96 bg-white rounded-[3rem] p-8 shadow-2xl z-30"
  >
    <div className="flex justify-between items-end mb-8">
      <h5 className="text-xl font-black text-zinc-900">Growth</h5>
      <div className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 uppercase">
        Yearly <ArrowUpRight size={14} />
      </div>
    </div>
    <svg viewBox="0 0 200 100" className="w-full h-32 overflow-visible">
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2 }}
        d="M0,80 Q40,75 70,50 T140,40 T200,10"
        fill="none"
        stroke="#10b981"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="200" cy="10" r="4" fill="#10b981" />
    </svg>
    <div className="flex justify-between mt-4 text-[9px] font-bold text-zinc-300 uppercase tracking-widest">
      <span>2024</span>
      <span>2025</span>
      <span>2026</span>
    </div>
  </motion.div>
);

const PaymentAlert = () => (
  <motion.div
    animate={{ x: [0, 10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    className="relative lg:absolute lg:bottom-20 lg:left-0 w-full max-w-[300px] bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4 z-40 border border-emerald-50"
  >
    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
      <Wallet size={24} />
    </div>
    <div>
      <h5 className="font-bold text-zinc-900 text-sm">Payment Arrived</h5>
      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter">
        $2,300 Received
      </p>
    </div>
  </motion.div>
);

const MarketCard = () => (
  <motion.div
    animate={{ y: [0, 15, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    // Ajuste de posición para que en desktop "orbite" el centro
    className="relative lg:absolute lg:top-10 lg:right-10 w-full max-w-[320px] lg:w-72 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl z-20"
  >
    <div className="h-40 bg-gradient-to-br from-emerald-400 to-teal-600 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <TrendingUp size={60} className="text-white/20" />
        </motion.div>
      </div>
    </div>
    <div className="p-6">
      <h4 className="font-black text-zinc-900 mb-1">Cool Creator Asset</h4>
      <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest mb-4">
        Current bid price
      </p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-black text-emerald-600">2.45 ETH</span>
        <button className="px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase">
          Collect
        </button>
      </div>
    </div>
  </motion.div>
);

// --- SECCIÓN PRINCIPAL ---

export default function EcosystemPulse() {
  return (
    <section className="relative min-h-screen bg-white py-48 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-50/40 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Título y Subtítulo */}
        <div className="text-center mb-16 lg:mb-32">
          <motion.h2 className="text-5xl md:text-8xl font-black tracking-tighter text-emerald-950 uppercase leading-none">
            The Ecosystem <br /> <span className="text-emerald-500">Pulse</span>
          </motion.h2>
          <p className="mt-6 text-zinc-400 font-bold uppercase text-[10px] tracking-[0.5em]">
            Buenos Aires // Sequence_2026
          </p>
        </div>

        {/* CONTENEDOR FLEX EN MOBILE / ABSOLUTE EN DESKTOP */}
        <div className="relative w-full flex flex-col lg:block items-center gap-8 lg:gap-0 lg:h-[600px] max-w-4xl">
          <GrowthGraph />
          <AgnesChat />
          <MarketCard />
          <PaymentAlert />
        </div>
      </div>

      {/* HUD de Metadata Inferior (Oculto en mobile para limpiar el UI) */}
      <div className="hidden md:flex absolute bottom-12 w-full px-12 justify-between items-center text-[9px] font-black text-emerald-950/20 uppercase tracking-[0.5em]">
        <span>BUE_STF_SEQUENCE_2026</span>
        <div className="flex gap-8">
          <span>Integrity: 100%</span>
          <span>Latency: 12ms</span>
        </div>
      </div>
    </section>
  );
}
