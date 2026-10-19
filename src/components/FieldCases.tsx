import React from 'react';
import { motion } from 'framer-motion';
import { 
  Quote, 
  MapPin, 
  Sprout, 
  CheckCircle2
} from 'lucide-react';
import { SUCCESS_CASES } from '../data/testimonials';

interface FieldCasesProps {
  onOpenCreditsModal: () => void;
}

export const FieldCases: React.FC<FieldCasesProps> = ({ onOpenCreditsModal }) => {

  return (
    <section id="casos" className="py-20 relative bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-agro text-xs font-semibold text-emerald-300 mb-3">
            <Sprout className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resultados Comprovados em Mato Grosso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Casos de Sucesso em Lavouras do Médio-Norte
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Veja como produtores rurais de Sorriso, Lucas do Rio Verde e Nova Mutum alcançaram recordes de produtividade com o manejo AGIJ FERT.
          </p>
        </div>

        {/* Grid of Success Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUCCESS_CASES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="glass-panel rounded-3xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-colors flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-950/30"
            >
              <div>
                {/* Photo with credit */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={item.imageUrl}
                    alt={item.farmName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  
                  {/* Productivity gain tag */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-black bg-emerald-500 text-zinc-950 shadow-lg font-mono">
                    {item.productivityGain}
                  </span>

                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-zinc-300 drop-shadow">
                    <span className="truncate">{item.photographerCredit}</span>
                    <button
                      onClick={onOpenCreditsModal}
                      className="text-emerald-400 hover:underline cursor-pointer"
                    >
                      Licença
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {item.farmName}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Produtor: <strong className="text-zinc-200">{item.farmerName}</strong> • {item.crop}
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="relative p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                    <Quote className="w-5 h-5 text-emerald-500/30 absolute top-2 right-2" />
                    <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed relative z-10">
                      "{item.quote}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategy footnote */}
              <div className="p-6 pt-0 space-y-3">
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1 mb-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Estratégia Adotada:
                  </span>
                  <p className="text-zinc-300 text-[11px] leading-relaxed">
                    {item.agijStrategy}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
