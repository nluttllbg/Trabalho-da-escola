import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  PhoneCall, 
  Sparkles, 
  Sprout, 
  FlaskConical, 
  Calculator, 
  Layers, 
  HelpCircle,
  MessageCircle,
  FileText
} from 'lucide-react';

interface HeaderProps {
  onOpenCreditsModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCreditsModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio', icon: Sprout },
    { label: 'Linhas de Nutrição', href: '#produtos', icon: FlaskConical },
    { label: 'Culturas do MT', href: '#culturas', icon: Layers },
    { label: 'Simulador Nutricional', href: '#simulador', icon: Calculator },
    { label: 'Diferenciais', href: '#diferenciais', icon: Sparkles },
    { label: 'Casos no Campo', href: '#casos', icon: Sprout },
    { label: 'Dúvidas (FAQ)', href: '#faq', icon: HelpCircle },
    { label: 'Contato', href: '#contato', icon: PhoneCall },
  ];

  const whatsappUrl = "https://wa.me/5566996512455?text=" + encodeURIComponent("Olá, equipe AGIJ FERT! Gostaria de falar com um agrônomo sobre os fertilizantes especiais e soluções de nutrição para minha lavoura.");

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav py-2.5 shadow-lg shadow-black/40 backdrop-blur-xl' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-800 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-900/40 group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform duration-200" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                    AGIJ <span className="text-emerald-400 font-black">FERT</span>
                  </span>
                  <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Sorriso–MT
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400 font-medium tracking-wide">
                  Nutrição Vegetal de Alta Performance
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.slice(0, 7).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium text-zinc-300 hover:text-white hover:bg-emerald-950/40 rounded-lg transition-colors duration-150 flex items-center gap-1.5"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenCreditsModal}
                className="px-2.5 py-1.5 text-xs text-zinc-400 hover:text-emerald-300 hover:bg-zinc-800/60 rounded-lg border border-zinc-700/50 transition-colors flex items-center gap-1"
                title="Transparência e Fotos Reais Utilizadas"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden md:inline">Créditos Fotográficos</span>
              </button>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-xl text-xs xl:text-sm font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-zinc-950 shadow-md shadow-emerald-900/30 hover:shadow-emerald-600/40 transition-colors flex items-center gap-2 group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-zinc-950 group-hover:scale-110 transition-transform duration-150" />
                <span>WhatsApp <span className="font-mono text-zinc-900">(66) 99651-2455</span></span>
              </motion.a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-500 text-zinc-950 font-bold"
                aria-label="WhatsApp AGIJ FERT"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-300 hover:text-white rounded-lg bg-zinc-900/80 border border-zinc-700/60 focus:outline-none"
                aria-label="Abrir Menu de Navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 sm:hidden"
            />
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-zinc-900 border-l border-emerald-900/40 p-6 z-50 flex flex-col justify-between shadow-2xl sm:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Sprout className="w-6 h-6 text-emerald-400" />
                    <span className="font-bold text-white text-lg">AGIJ FERT</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
                    aria-label="Fechar Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-4 px-2 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-[11px] text-emerald-300">
                  📍 Sorriso – MT e Todo o Centro-Oeste
                </div>

                <nav className="mt-6 flex flex-col gap-1.5">
                  {navLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-3 py-2.5 text-sm font-medium text-zinc-200 hover:text-emerald-400 hover:bg-zinc-800/80 rounded-xl flex items-center gap-3 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-emerald-400" />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-zinc-800 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCreditsModal();
                  }}
                  className="w-full py-2 px-3 text-xs text-zinc-400 hover:text-emerald-300 rounded-lg border border-zinc-800 hover:bg-zinc-800/50 flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ver Créditos de Fotos Reais</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-lg shadow-emerald-950 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-zinc-950" />
                  <span>Falar no WhatsApp (66) 99651-2455</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
