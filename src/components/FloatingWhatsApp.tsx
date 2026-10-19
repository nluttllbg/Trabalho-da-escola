import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = "https://wa.me/5566996512455?text=" + encodeURIComponent("Olá! Estou no site da AGIJ FERT e gostaria de falar com a equipe técnica sobre os fertilizantes para minha lavoura em Mato Grosso.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Small floating tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-zinc-900 border border-emerald-500/40 text-xs text-white shadow-xl shadow-black/60 relative"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold">Plantão WhatsApp (66) 99651-2455</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white p-0.5 ml-1"
            aria-label="Fechar Aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}

      {/* Floating Action Circle Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Agrônomo da AGIJ FERT pelo WhatsApp"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-zinc-950 flex items-center justify-center shadow-2xl shadow-emerald-900/80 border-2 border-emerald-200/40 cursor-pointer relative group"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-300 rounded-full animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border border-zinc-900" />
        <MessageCircle className="w-7 h-7 fill-zinc-950 text-zinc-950 transition-transform group-hover:rotate-12 duration-200" />
      </motion.a>
    </div>
  );
};
