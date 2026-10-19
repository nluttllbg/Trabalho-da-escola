import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Check, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  Droplet 
} from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenCreditsModal: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOpenCreditsModal }) => {

  // Esc key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleWhatsAppProduct = () => {
    const text = `Olá, AGIJ FERT! Gostaria de receber a ficha técnica completa, disponibilidade de estoque e cotação para o produto *${product.name}* (${product.subtitle}).`;
    const url = `https://wa.me/5566996512455?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 12 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full max-w-3xl bg-zinc-900 border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header image banner */}
          <div className="relative h-48 sm:h-56 w-full shrink-0 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950/80 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-zinc-700/50"
              aria-label="Fechar Detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                {product.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-zinc-950 shadow-md">
                    {product.badge}
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-300 font-medium">
                  {product.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm text-zinc-300">
            {/* Description */}
            <p className="leading-relaxed text-zinc-300">
              {product.description}
            </p>

            {/* Guarantees Table */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Garantias Mínimas Registradas (MAPA / Análise Química)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800">
                {product.guarantees.map((g, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1 px-2 border-b border-zinc-800/50 last:border-0 text-xs">
                    <span className="text-zinc-400 font-medium">{g.label}:</span>
                    <span className="text-emerald-300 font-mono font-bold">{g.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dosage & Application Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                <span className="text-xs text-zinc-400 uppercase font-semibold flex items-center gap-1.5 mb-1">
                  <Droplet className="w-3.5 h-3.5 text-emerald-400" />
                  Dosagem Recomendada
                </span>
                <p className="text-xs text-zinc-200 font-medium">
                  {product.dosageRecommendation}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                <span className="text-xs text-zinc-400 uppercase font-semibold flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  Momento de Aplicação
                </span>
                <p className="text-xs text-zinc-200 font-medium">
                  {product.applicationTiming}
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2.5 flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                Benefícios Agronômicos Comprovados
              </h4>
              <ul className="space-y-2">
                {product.keyBenefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Highlights */}
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
              <h5 className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1.5">
                Compatibilidade e Tecnologia de Aplicação
              </h5>
              <div className="space-y-1 text-xs text-zinc-300">
                {product.technicalHighlights.map((th, idx) => (
                  <p key={idx}>• {th}</p>
                ))}
              </div>
            </div>

            {/* Photo credit note */}
            <div className="pt-1 flex items-center justify-between text-[11px] text-zinc-400 border-t border-zinc-800">
              <span>{product.photographerCredit}</span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCreditsModal();
                }}
                className="text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
              >
                Ver Registro de Direitos
              </button>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-800 flex flex-col sm:flex-row gap-3 justify-between items-center">
            <span className="text-xs text-zinc-400">
              Entrega rápida para todo o Mato Grosso via BR-163
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white rounded-lg border border-zinc-700 cursor-pointer"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={handleWhatsAppProduct}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md shadow-emerald-950 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-zinc-950" />
                <span>Cotar pelo WhatsApp (66) 99651-2455</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
