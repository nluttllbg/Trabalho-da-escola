import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  Sprout
} from 'lucide-react';
import { CROP_PROFILES } from '../data/crops';
import { CropType } from '../types';

interface CropSolutionsProps {
  onOpenCreditsModal: () => void;
}

export const CropSolutions: React.FC<CropSolutionsProps> = ({ onOpenCreditsModal }) => {
  const [activeCropId, setActiveCropId] = useState<CropType>('soja');

  const activeCrop = CROP_PROFILES.find((c) => c.id === activeCropId) || CROP_PROFILES[0];

  return (
    <section id="culturas" className="py-20 relative bg-zinc-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-agro text-xs font-semibold text-emerald-300 mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Manejo Fisiológico por Cultura</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nutrição Estratégica para as Principais Culturas do MT
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Entenda a dinâmica de absorção e os momentos fisiológicos cruciais onde a tecnologia AGIJ FERT evita perdas e alavanca o teto produtivo.
          </p>
        </div>

        {/* Crop Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 gap-1 overflow-x-auto max-w-full">
            {CROP_PROFILES.map((crop) => (
              <motion.button
                key={crop.id}
                onClick={() => setActiveCropId(crop.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${
                  activeCropId === crop.id
                    ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-950 font-black'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                }`}
              >
                <Sprout className="w-4 h-4" />
                <span>{crop.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Crop Deep-Dive Box with scale motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCrop.id}
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -14 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="glass-panel rounded-3xl overflow-hidden border border-emerald-900/40 p-6 sm:p-8 space-y-8 shadow-xl"
          >
            {/* Top Info Banner with Real Crop Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
                    {activeCrop.scientificName}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeCrop.name}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
                  {activeCrop.tagline}
                </p>

                {/* Productivity Benchmark */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <span className="text-xs text-zinc-400 block mb-1">Média Atual Mato Grosso</span>
                    <span className="text-lg font-mono font-bold text-zinc-300">
                      {activeCrop.averageProductivityMatoGrosso}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40">
                    <span className="text-xs text-emerald-300 font-semibold flex items-center gap-1 mb-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Meta Programa AGIJ FERT
                    </span>
                    <span className="text-lg font-mono font-black text-emerald-300">
                      {activeCrop.targetProductivityAgij}
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo Box */}
              <div className="lg:col-span-5 relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-zinc-700/60 shadow-xl group">
                <img
                  src={activeCrop.heroImage}
                  alt={activeCrop.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-300 drop-shadow">
                  <span>{activeCrop.photographerCredit}</span>
                  <button
                    onClick={onOpenCreditsModal}
                    className="text-emerald-400 hover:underline cursor-pointer"
                  >
                    Ver Licença
                  </button>
                </div>
              </div>
            </div>

            {/* Critical Challenges & Soil Advice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-800">
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2.5">
                <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Principais Gargalos e Desafios no Cerrado
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                  {activeCrop.keyChallenges.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Recomendação de Manejo de Solo (Sorriso & Região)
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activeCrop.soilTips}
                </p>
              </div>
            </div>

            {/* Growth Stages Timeline */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Fases Críticas e Janelas de Aplicação AGIJ</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeCrop.growthStages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {stage.stage}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">Passo {idx + 1}</span>
                      </div>
                      <h5 className="text-sm font-bold text-white">{stage.title}</h5>
                      <div className="space-y-1 text-xs">
                        <span className="text-zinc-400 block text-[11px]">Nutrientes Críticos:</span>
                        <div className="flex flex-wrap gap-1">
                          {stage.criticalNutrients.map((n, i) => (
                            <span key={i} className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300 font-mono">
                              {n}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-800 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-emerald-400">Produto Indicado:</span>
                      <p className="text-xs font-semibold text-zinc-100">{stage.recommendedAgijProduct}</p>
                      <p className="text-[11px] text-zinc-400 mt-1">{stage.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
              <span className="text-xs sm:text-sm text-zinc-300 text-center sm:text-left">
                Deseja montar um calendário nutricional completo para a sua lavoura de {activeCrop.name.split(' ')[0]}?
              </span>
              <a
                href={`https://wa.me/5566996512455?text=${encodeURIComponent(`Olá! Gostaria de receber a orientação técnica para o manejo nutricional de *${activeCrop.name}* na minha propriedade.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md shadow-emerald-950 transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-zinc-950" />
                <span>Conversar com Agrônomo (66) 99651-2455</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
