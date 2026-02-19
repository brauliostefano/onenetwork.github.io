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
      <main>
        <ProtocolFoundations />
      </main>
    </div>
  );
}
