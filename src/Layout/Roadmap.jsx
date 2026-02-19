import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, Rocket, Cpu, Globe, Zap } from 'lucide-react';

const milestones = [
  {
    id: '01',
    period: 'Q1 2026',
    title: 'Protocol Genesis',
    status: 'completed',
    icon: Rocket,
    desc: 'Launch of the core L2 infrastructure in Buenos Aires Node. Initial asset minting active.',
    details: ['Arbitrum L2 Bridge', 'Zero-Latency Core', 'Genesis NFT Batch'],
  },
  {
    id: '02',
    period: 'Q2 2026',
    title: 'Agnes AI Integration',
    status: 'active',
    icon: Cpu,
    desc: 'Deep integration of the Agnes Neural Kernel for predictive market analysis.',
    details: [
      'Predictive Analytics',
      'Auto-Fee Optimization',
      'AI Chat Interface',
    ],
  },
  {
    id: '03',
    period: 'Q3 2026',
    title: 'Global Expansion',
    status: 'upcoming',
    icon: Globe,
    desc: 'Scaling the network to European and Asian creative hubs. Cross-chain interoperability.',
    details: [
      'Multi-Region Nodes',
      'Cross-chain Liquidity',
      'Partner API Launch',
    ],
  },
  {
    id: '04',
    period: 'Q4 2026',
    title: 'DAO Governance',
    status: 'upcoming',
    icon: Zap,
    desc: 'Transition to full community governance. Token-weighted voting protocols.',
    details: ['Governance Portal', 'Treasury Management', 'Protocol Upgrades'],
  },
];

export default function InteractiveRoadmap() {
  const [expandedId, setExpandedId] = useState('02'); // Agnes AI activa por defecto

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado Técnico */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-[0.3em] mb-4"
            >
              <Zap size={10} />
              <span>Project Lifecycle // 2026</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-emerald-950 uppercase leading-none">
              Strategic <br />{' '}
              <span className="text-emerald-500 text-6xl md:text-8xl">
                Roadmap_
              </span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[10px] font-black text-emerald-900/20 uppercase tracking-[0.4em]">
              BUE_Node_Active // STF_2026
            </span>
          </div>
        </div>

        {/* CONTENEDOR DEL ROADMAP */}
        <div className="flex flex-col md:flex-row gap-4 min-h-[450px]">
          {milestones.map((step) => {
            const isExpanded = expandedId === step.id;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                layout
                onClick={() => setExpandedId(step.id)}
                className={`
                  relative cursor-pointer overflow-hidden rounded-[2.5rem] p-8 border transition-colors
                  ${
                    isExpanded
                      ? 'flex-[3] bg-emerald-600 border-emerald-500'
                      : 'flex-1 bg-zinc-50 border-zinc-100 hover:bg-emerald-50'
                  }
                `}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              >
                {/* ID & STATUS */}
                <div className="flex justify-between items-start mb-12">
                  <span
                    className={`text-2xl font-black ${
                      isExpanded ? 'text-white/20' : 'text-zinc-200'
                    }`}
                  >
                    {step.id}
                  </span>
                  {step.status === 'completed' ? (
                    <CheckCircle2
                      size={24}
                      className={isExpanded ? 'text-white' : 'text-emerald-500'}
                    />
                  ) : step.status === 'active' ? (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-3 h-3 rounded-full ${
                        isExpanded ? 'bg-white' : 'bg-emerald-500'
                      }`}
                    />
                  ) : (
                    <Circle size={24} className="text-zinc-300" />
                  )}
                </div>

                {/* CONTENIDO PRINCIPAL */}
                <div className="relative z-10">
                  <p
                    className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${
                      isExpanded ? 'text-emerald-100' : 'text-zinc-400'
                    }`}
                  >
                    {step.period}
                  </p>
                  <h3
                    className={`text-2xl font-black leading-tight mb-4 uppercase italic ${
                      isExpanded ? 'text-white' : 'text-emerald-950'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="space-y-6"
                      >
                        <p className="text-emerald-50 text-sm leading-relaxed max-w-sm">
                          {step.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.details.map((detail, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold text-white uppercase border border-white/10"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ICONO DE FONDO (Solo visible cuando está expandido) */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    className="absolute -bottom-10 -right-10 text-white z-0"
                  >
                    <Icon size={240} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
