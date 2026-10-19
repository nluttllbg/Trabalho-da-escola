import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle,
  Truck,
  FlaskConical,
  Coins,
  ShieldCheck
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('entrega-logistica');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas as Dúvidas', icon: HelpCircle },
    { id: 'tecnico', label: 'Nutrição & Solo', icon: FlaskConical },
    { id: 'aplicacao', label: 'Calda & Pulverização', icon: ShieldCheck },
    { id: 'logistica', label: 'Prazos BR-163', icon: Truck },
    { id: 'comercial', label: 'Pagamento & Barter', icon: Coins },
  ];

  const filteredFaq = FAQ_ITEMS.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 relative bg-zinc-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-agro text-xs font-semibold text-emerald-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tira-Dúvidas Agronômico & Comercial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Respostas diretas sobre logística, caldas, desbloqueio de fósforo e prazos de safra em Sorriso e Mato Grosso.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-950'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="glass-panel rounded-2xl border border-zinc-800/80 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-zinc-100">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-zinc-900 text-emerald-400 border border-zinc-800 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-emerald-500/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Footer Banner in FAQ */}
        <div className="mt-10 p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs sm:text-sm text-zinc-300">
            <strong className="text-white block">Ficou com alguma dúvida específica sobre o seu talhão?</strong>
            <span>Nossa equipe técnica atende online no WhatsApp de segunda a sábado.</span>
          </div>
          <motion.a
            href="https://wa.me/5566996512455?text=Ol%C3%A1%2C%20equipe%20AGIJ%20FERT!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20aplica%C3%A7%C3%A3o%20e%20dosagem."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md flex items-center gap-2 shrink-0 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-zinc-950" />
            <span>Perguntar no WhatsApp (66) 99651-2455</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
};
