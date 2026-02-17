import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiCoinmarketcap } from 'react-icons/si';

// --- STYLING AUXILIARY COMPONENTS ---
const LiquidFilter = () => (
  <svg style={{ display: 'none' }}>
    <filter
      id="emerald-refraction-footer"
      x="-20%"
      y="-20%"
      width="140%"
      height="140%"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.015 0.015"
        numOctaves="2"
        seed="42"
        result="noise"
      />
      <feGaussianBlur in="noise" stdDeviation="0.4" result="blur" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="blur"
        scale="30"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

export default function EnhancedFooter() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative pt-24 pb-12 px-6 overflow-hidden bg-[#0e0f18]">
      <LiquidFilter />

      {/* Subtle Dark Aurora in footer background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none opacity-20">
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/20 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[20%] w-[400px] h-[400px] bg-teal-500/10 blur-[100px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* TOP ROW: BRAND + NEWSLETTER (DARK GLASS) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <motion.div variants={itemVariants} className="max-w-sm">
            <h2 className="text-4xl font-bold tracking-tighter mb-4 text-white uppercase">
              One Network
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              Architecture and vision for the new creative economy.
            </p>
            {/* Social Icons Dark Liquid Style */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: FaTelegramPlane, url: 'https://t.me/ENO_network' },
                { icon: FaXTwitter, url: 'https://x.com/ENOnetwork' },
                {
                  icon: FaLinkedinIn,
                  url: 'https://www.linkedin.com/company/enonetwork/',
                },
                {
                  icon: SiCoinmarketcap,
                  url: 'https://coinmarketcap.com/community/profile/EnoToken/',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 text-emerald-400 border border-white/10 hover:bg-emerald-500 hover:text-white hover:border-emerald-400 transition-all duration-500 shadow-xl"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Dark Glass Card */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:max-w-md p-10 rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-3xl shadow-black/50"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">
              Stay Connected
            </h3>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              Join the waitlist for future technical updates and Web3
              developments.
            </p>
            <div className="relative flex p-1 bg-white/5 border border-white/10 rounded-full focus-within:border-emerald-500/50 transition-colors">
              <input
                type="email"
                placeholder="email@example.com"
                className="flex-1 bg-transparent px-5 py-3 text-sm outline-none text-white placeholder:text-zinc-600"
              />
              <button className="px-7 py-3 bg-emerald-600 text-white rounded-full text-xs font-bold hover:bg-emerald-500 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* MIDDLE ROW: COLUMN LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-white/5 pt-16">
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Ecosystem
            </h4>
            <Link
              to="#"
              className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Technology
            </Link>
            <Link
              to="#"
              className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Agnes AI
            </Link>
            <Link
              to="#"
              className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Marketplace
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Resources
            </h4>
            <a
              href="https://docs.eno.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Whitepaper
            </a>
            <Link
              to="#"
              className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Academy
            </Link>
            <Link
              to="#"
              className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Support
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Archive
            </h4>
            <Link
              to="#"
              className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Vision
            </Link>
            <Link
              to="#"
              className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Milestones
            </Link>
            <Link
              to="#"
              className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Development
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Legal
            </h4>
            <Link
              to="/legal-policies/terms-and-conditions"
              className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/legal-policies/privacy-policy"
              className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Privacy
            </Link>
          </motion.div>
        </div>

        {/* BOTTOM ROW: COPYRIGHT + GLASS BADGE */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
          <p className="text-xs font-medium text-zinc-500 tracking-tight">
            © 2026 One Network.
          </p>
          <div className="px-5 py-2 rounded-full bg-emerald-500/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            Powered by Arbitrum L2
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
