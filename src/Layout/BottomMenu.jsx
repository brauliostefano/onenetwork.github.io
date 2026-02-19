import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Coins, FileText, Newspaper, Zap } from 'lucide-react';

const MobileBottomMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Mapeo de navegación basado en tus NavButtons originales
  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Token', icon: Coins, path: '/token' }, // Ajusta según tus rutas reales
    { name: 'Docs', icon: FileText, path: '/whitepaper' },
    { name: 'Blog', icon: Newspaper, path: '/blogs' },
    {
      name: 'App',
      icon: Zap,
      path: 'https://app.eno.network/',
      isExternal: true,
    },
  ];

  const handlePress = (item) => {
    if (item.isExternal) {
      window.open(item.path, '_blank');
    } else {
      navigate(item.path);
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-[100] md:hidden">
      <div className="bg-white/80 backdrop-blur-2xl border border-emerald-100/50 rounded-[1.2rem] p-2 shadow-2xl shadow-emerald-900/10 flex justify-between items-center relative">
        {navItems.map((item) => {
          // Lógica para determinar si el botón está activo basado en la URL
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.name}
              onClick={() => handlePress(item)}
              className="relative flex flex-col items-center justify-center w-1/5 py-3 transition-all active:scale-90"
            >
              {/* BURBUJA LÍQUIDA: Se mueve hacia el ítem activo usando layoutId */}
              {isActive && (
                <motion.div
                  layoutId="activeBubble"
                  className="absolute inset-0 bg-emerald-600 rounded-2xl z-0"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}

              <item.icon
                size={20}
                className={`relative z-10 transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-emerald-900/40'
                }`}
              />

              <span
                className={`relative z-10 text-[8px] font-black uppercase tracking-widest mt-1.5 transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-emerald-900/20'
                }`}
              >
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* HUD de Telemetría Inferior (Identidad BUE_2026) */}
      <div className="mt-3 flex justify-between px-6 text-[7px] font-black text-emerald-950/20 uppercase tracking-[0.4em]">
        <span>BUE_Active_Node</span>
        <span>Lat: 12ms // 2026</span>
      </div>
    </nav>
  );
};

export default MobileBottomMenu;
