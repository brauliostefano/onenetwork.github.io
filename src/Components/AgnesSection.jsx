import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, WandSparkles, Lightbulb, Sparkles } from 'lucide-react';
import agnesImage from '/img/demoimagesblack.jpg';

const features = [
  {
    title: 'Virtual Learning',
    description:
      'Master the entire ecosystem with personalized tools and guided paths.',
    icon: GraduationCap,
    accent: 'group-hover:bg-emerald-500',
  },
  {
    title: 'Generative Creative Tool',
    description:
      'Unlock new creative frontiers using advanced generative models.',
    icon: WandSparkles,
    accent: 'group-hover:bg-teal-500',
  },
  {
    title: 'Strategic Insights',
    description:
      'An intuitive platform leveraging AI to optimize every decision.',
    icon: Lightbulb,
    accent: 'group-hover:bg-emerald-600',
  },
];

const carouselImages = [
  'https://hbr.org/resources/images/article_assets/2022/04/01-BI_WEB3_STACKPOLE_HERO.jpg',
  'https://hbr.org/resources/images/article_assets/2022/05/04-BI_WEB3_RUANE_FEATURE.jpg',
  'https://hbr.org/resources/images/article_assets/2022/05/02-BI_WEB3_BLACKMAN_SPOT01.jpg',
  'https://hbr.org/resources/images/article_assets/2022/05/07-BI_WEB3_JIN_FEATURE.jpg',
];

export default function AgnesSection() {
  return (
    <section className="relative min-h-[800px] flex flex-col lg:flex-row items-center bg-white text-[#1d1d1f] overflow-hidden py-24 px-6">
      {/* --- AURORA LAYER (Suavizada para fondo claro) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-200 rounded-full filter blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-200 rounded-full filter blur-[120px]"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* --- IZQUIERDA: CONTENIDO --- */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-emerald-500" />
              <span className="text-emerald-600 font-bold tracking-[0.2em] text-xs uppercase">
                Intelligent Assistant
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1] text-[#1d1d1f]">
              Meet Agnes, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700">
                Your Digital Partner
              </span>
            </h2>

            {/* Feature Cards Adaptadas para Fondo Blanco */}
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="group flex items-start gap-5 p-6 rounded-[2.5rem] liquid-emerald-light-card transition-all duration-300 border border-zinc-100"
                >
                  <div
                    className={`p-3 rounded-2xl bg-zinc-100 transition-all duration-500 ${f.accent} group-hover:text-white`}
                  >
                    <f.icon
                      size={24}
                      className="text-emerald-600 group-hover:text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 tracking-tight text-zinc-900 group-hover:text-emerald-600 transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed max-w-sm">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- DERECHA: IMAGEN + CAROUSEL --- */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-20"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto rounded-[3.5rem] overflow-hidden video-glow-container-light group bg-white shadow-2xl">
              <img
                src={agnesImage}
                alt="Agnes AI Interface"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-10 left-10 flex items-center gap-3">
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                  Agnes Processor Active
                </span>
              </div>
            </div>

            {/* Carrusel con Sombras Suaves */}
            <div className="absolute -bottom-8 -right-4 lg:-right-10 w-full max-w-[350px] z-30">
              <div className="flex gap-4 overflow-hidden py-4 mask-fade-light">
                <motion.div
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="flex gap-4"
                >
                  {[...carouselImages, ...carouselImages].map((img, idx) => (
                    <div
                      key={idx}
                      className="min-w-[160px] h-[110px] rounded-2xl overflow-hidden border border-zinc-100 shadow-lg bg-white"
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        alt="AI Logic"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Badge AI Emerald Light */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 p-4 bg-white/90 backdrop-blur-xl border border-emerald-100 rounded-3xl shadow-xl flex items-center gap-3"
            >
              <div className="p-2 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-200 text-white">
                <Sparkles size={20} />
              </div>
              <span className="text-sm font-bold tracking-tight text-emerald-900">
                Agnes AI Engine
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .mask-fade-light {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        /* CARD PARA FONDO CLARO */
        .liquid-emerald-light-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          position: relative;
          isolation: isolate;
        }

        .liquid-emerald-light-card:hover {
          background: white;
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.05);
        }

        .video-glow-container-light {
          border: 1px solid rgba(16, 185, 129, 0.1);
          box-shadow: 0 40px 80px -20px rgba(16, 185, 129, 0.15);
        }
      `}</style>
    </section>
  );
}
