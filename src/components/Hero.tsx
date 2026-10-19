import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  MapPin, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenCreditsModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCreditsModal }) => {

  const whatsappHeroUrl = "https://wa.me/5566996512455?text=" + encodeURIComponent("Olá! Estou no site da AGIJ FERT e quero receber uma proposta personalizada de fertilizantes especiais para minha fazenda em Mato Grosso.");

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette and Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/13821931/pexels-photo-13821931.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
          alt="Colheitadeira em lavoura de soja no Cerrado"
          className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-110"
          loading="eager"
        />
        {/* Multilayered subtle gradient for high readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090e0b] via-[#090e0b]/80 to-[#090e0b]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.18)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top location tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-agro text-xs sm:text-sm text-emerald-300 font-semibold shadow-inner shadow-emerald-500/10 cursor-default"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sede em Sorriso – MT • Atendimento em todo o Mato Grosso</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
            >
              Máxima Produtividade e Nutrição de Precisão{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300">
                do Solo à Colheita.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
              className="text-base sm:text-lg text-zinc-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Fertilizantes especiais, condicionadores biológicos de solo e micronutrientes 100% quelatados, formulados sob medida para os desafios e o alto potencial do cerrado mato-grossense.
            </motion.p>

            {/* Value bullets */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-zinc-300"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Desbloqueio de Fósforo & Ativação de Raiz</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Fitotoxidez & Máxima Compatibilidade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Suporte Agronômico In Loco nas Fazendas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pronta Entrega com Frota na BR-163</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="pt-4 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start"
            >
              <motion.a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-xl shadow-emerald-950/60 transition-colors flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Falar com Agrônomo (66) 99651-2455</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </motion.a>

              <motion.a
                href="#simulador"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/70 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Simular Nutrição da Lavoura</span>
              </motion.a>
            </motion.div>

            {/* Image Source Note */}
            <div className="pt-2">
              <button 
                onClick={onOpenCreditsModal}
                className="text-[11px] text-zinc-400 hover:text-emerald-400 underline decoration-dotted transition-colors cursor-pointer"
              >
                Fotografia real da lavoura: Dan Hamill (Licença Comercial Pexels) • Ver todas as 13 fotos registradas
              </button>
            </div>
          </div>

          {/* Right Column: High-Performance Metric Glass Card with dynamic scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ scale: 1.015 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel-glow p-6 sm:p-7 rounded-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-900/40">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Métricas Comprovadas no Campo</h3>
                    <p className="text-xs text-zinc-400">Média em lavouras atendidas em Sorriso e região</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Safra 24/25
                </span>
              </div>

              {/* Grid of stats */}
              <div className="grid grid-cols-2 gap-4 my-5">
                <motion.div whileHover={{ scale: 1.04, y: -2 }} className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 transition-colors hover:border-emerald-500/40 cursor-default">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tracking-tight">+5,4 sc</span>
                  <p className="text-xs font-semibold text-zinc-200 mt-0.5">Soja por Hectare</p>
                  <p className="text-[11px] text-zinc-400">Incremento médio com AGIJ MAX SOIL + Quelatos</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04, y: -2 }} className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 transition-colors hover:border-lime-500/40 cursor-default">
                  <span className="text-2xl sm:text-3xl font-black text-lime-400 font-mono tracking-tight">+11,2 sc</span>
                  <p className="text-xs font-semibold text-zinc-200 mt-0.5">Milho Safrinha</p>
                  <p className="text-[11px] text-zinc-400">Granação completa até a ponta da espiga</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04, y: -2 }} className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 transition-colors hover:border-emerald-400/40 cursor-default">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono tracking-tight">3.2x</span>
                  <p className="text-xs font-semibold text-zinc-200 mt-0.5">Absorção Foliar</p>
                  <p className="text-[11px] text-zinc-400">Micronutrientes com agentes quelantes orgânicos</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04, y: -2 }} className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 transition-colors hover:border-amber-400/40 cursor-default">
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tracking-tight">24h / 48h</span>
                  <p className="text-xs font-semibold text-zinc-200 mt-0.5">Entrega na BR-163</p>
                  <p className="text-[11px] text-zinc-400">Frota dedicada para não parar o plantio</p>
                </motion.div>
              </div>

              {/* Mini banner */}
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-zinc-200 font-medium">Análise de solo e folha gratuita para clientes</span>
                </div>
                <a
                  href={whatsappHeroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline"
                >
                  Agendar
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
