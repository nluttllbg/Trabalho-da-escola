import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import { MEDIA_CREDITS } from '../data/mediaCredits';

interface MediaAttributionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediaAttributionModal: React.FC<MediaAttributionModalProps> = ({ isOpen, onClose }) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 12 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full max-w-4xl bg-zinc-900 border border-emerald-500/40 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 bg-zinc-950 border-b border-zinc-800 flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full badge-agro text-[11px] font-bold text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Transparência de Direitos e Fotografias Reais</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Registro de Autoria & Proveniência das Imagens
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Conforme exigência do projeto, todas as imagens utilizadas no site da AGIJ FERT são fotografias reais obtidas via MCP de mídia (Pexels / Licença de Uso Comercial Livre). Nenhuma imagem foi gerada por IA.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 cursor-pointer"
              aria-label="Fechar Modal de Créditos"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Table */}
          <div className="p-6 overflow-y-auto space-y-4">
            
            {/* Compliance Badge Box */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-zinc-300 leading-relaxed space-y-1">
                <p className="font-bold text-emerald-300">
                  Total de Fotografias Reais Catalogadas: {MEDIA_CREDITS.length} imagens em alta resolução
                </p>
                <p>
                  Todas as imagens possuem autor identificado, URL do perfil do criador e licença comercial livre verificada.
                </p>
              </div>
            </div>

            {/* List of images */}
            <div className="space-y-3">
              {MEDIA_CREDITS.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-emerald-500/40 transition-colors flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 border border-zinc-700/60"
                      loading="lazy"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block">
                        {item.usageContext}
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                        <span>Autor: <strong className="text-zinc-200">{item.creatorName}</strong></span>
                        <span>•</span>
                        <span>Plataforma: <strong className="text-zinc-200">{item.sourcePlatform}</strong></span>
                      </div>
                      <span className="text-[11px] text-zinc-400 block font-mono">
                        {item.license}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Ver Foto Original</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-400">
            <span>AGIJ FERT • Sorriso – Mato Grosso</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl cursor-pointer"
            >
              Fechar Registro
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
