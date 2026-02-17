import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Terminal,
  ChevronRight,
  Globe,
  BringToFront,
  ShieldCheck,
  Activity,
} from 'lucide-react';

export default function ParallaxGlassHero() {
  const { scrollY } = useScroll();

  const yBg = useTransform(scrollY, [0, 500], [0, 100]);
  const yText = useTransform(scrollY, [0, 500], [0, -50]);
  const yFrontGlass = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

  return (
    <section className="relative min-h-[100vh] bg-white flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo con grilla */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-100/30 blur-[120px] rounded-full" />
      </motion.div>

      {/* Cristal decorativo trasero */}
      <motion.div
        style={{ y: yBg, opacity }}
        className="absolute top-[20%] right-[10%] w-64 h-64 bg-emerald-50/40 backdrop-blur-3xl border border-emerald-100/50 rounded-[3rem] -rotate-12 z-10 hidden lg:block"
      />

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          style={{ y: yText, scale }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.3em] mb-12"
          >
            <Terminal size={14} />
            <span>Dev_Archive // BUE_LOC_2026</span>
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-emerald-950 uppercase mb-10">
            Tokenize <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-emerald-400 to-emerald-900 pb-4">
              potential
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-900/40 font-medium leading-relaxed mb-12">
            Ecosistema de infraestructura de alta fidelidad para la nueva
            economía creativa. Arquitectura verificada y escalable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="px-12 py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-100">
              Launch Application
            </button>
            <a
              href="#"
              className="flex items-center gap-2 text-emerald-950 font-black uppercase text-[11px] tracking-widest hover:text-emerald-600 transition-colors"
            >
              Technical_Docs <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* TARJETA DE CRISTAL ELABORADA (Con clase específica) */}
      <motion.div
        style={{ y: yFrontGlass }}
        className="glass-card absolute bottom-[20%] left-[5%] w-80 h-56 bg-white/20 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(16,185,129,0.1)] z-30 hidden lg:flex flex-col p-7 justify-between overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] bg-[size:10px_10px]" />

        <motion.div
          animate={{ x: ['-150%', '150%'] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
            delay: 1,
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
        />

        <div className="flex justify-between items-start relative z-10">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-emerald-950/40 uppercase tracking-widest">
                Node_Active
              </span>
            </div>
            <div className="text-[9px] font-mono text-emerald-600/60 uppercase">
              BUE_STF_2026 //
            </div>
          </div>
          <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100/50">
            <BringToFront size={18} className="text-emerald-500" />
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-end mb-2">
            <div className="text-[11px] font-black text-emerald-950 uppercase tracking-tighter">
              System Integrity
            </div>
            <div className="text-[10px] font-mono font-bold text-emerald-600">
              88.42%
            </div>
          </div>
          <div className="h-1.5 w-full bg-emerald-100/50 rounded-full overflow-hidden p-[1px]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '88%' }}
              transition={{ duration: 2.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
            />
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-emerald-100/50 pt-4 relative z-10">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-zinc-400 uppercase">
                Latency
              </span>
              <span className="text-[10px] font-black text-emerald-950">
                12ms
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-zinc-400 uppercase">
                Bitrate
              </span>
              <span className="text-[10px] font-black text-emerald-950">
                440kbps
              </span>
            </div>
          </div>
          <Activity size={14} className="text-emerald-300" />
        </div>
      </motion.div>

      {/* Estilos específicos para la clase .glass-card */}
      <style jsx>{`
        .glass-card {
          box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.8),
            inset -1px -1px 0px rgba(16, 185, 129, 0.1);
        }
      `}</style>

      {/* Icono de Shield */}
      <motion.div
        style={{ y: yFrontGlass }}
        className="absolute top-[15%] right-[5%] p-6 bg-white/20 backdrop-blur-xl border border-white/50 rounded-full shadow-xl z-30 hidden lg:block"
      >
        <ShieldCheck size={32} className="text-emerald-600" />
      </motion.div>

      {/* Indicador inferior */}
      <div className="absolute bottom-10 w-full px-8 flex justify-between items-center text-[9px] font-bold text-emerald-950 uppercase tracking-[0.4em] z-40">
        <div className="flex items-center gap-4">
          <Globe size={14} /> <span>Node_Status: Active</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Latency: 12ms</span>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
