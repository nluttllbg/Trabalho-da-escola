import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageCircle, 
  Check, 
  Coins
} from 'lucide-react';

export const RoiYieldCalculator: React.FC = () => {

  const [crop, setCrop] = useState<'soja' | 'milho' | 'algodao'>('soja');
  const [hectares, setHectares] = useState<number>(1000);
  const [expectedBagPrice, setExpectedBagPrice] = useState<number>(128); // R$ per bag

  // Yield gain assumptions based on field trials in Sorriso-MT
  const yieldGainMap = {
    soja: 5.2, // sc/ha
    milho: 11.5, // sc/ha
    algodao: 22.0 // @/ha
  };

  const investmentPerHaMap = {
    soja: 140, // R$/ha
    milho: 160, // R$/ha
    algodao: 320 // R$/ha
  };

  const currentYieldGain = yieldGainMap[crop];
  const unit = crop === 'algodao' ? '@' : 'sc';
  const totalExtraBags = Math.round(hectares * currentYieldGain);
  const totalExtraGross = Math.round(totalExtraBags * expectedBagPrice);
  const totalInvestment = Math.round(hectares * investmentPerHaMap[crop]);
  const netProfit = totalExtraGross - totalInvestment;
  const roiMultiplier = (totalExtraGross / (totalInvestment || 1)).toFixed(1);

  return (
    <section className="py-20 relative bg-zinc-950/80 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-agro text-xs font-semibold text-emerald-300 mb-3">
            <Coins className="w-3.5 h-3.5 text-emerald-400" />
            <span>Retorno Econômico Comprovado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculadora de Retorno sobre Investimento (ROI)
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Veja como cada real investido no programa de nutrição AGIJ FERT se multiplica em produtividade real na balança do armazém.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-emerald-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Crop Switcher */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                1. Cultura Avaliada:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'soja', name: 'Soja', defaultPrice: 128 },
                  { id: 'milho', name: 'Milho Safrinha', defaultPrice: 56 },
                  { id: 'algodao', name: 'Algodão', defaultPrice: 145 },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setCrop(c.id as any);
                      setExpectedBagPrice(c.defaultPrice);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      crop === c.id
                        ? 'bg-emerald-500 text-zinc-950 shadow-md font-black'
                        : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  2. Área de Plantio:
                </label>
                <span className="text-sm font-mono font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-lg border border-emerald-500/30">
                  {hectares.toLocaleString('pt-BR')} ha
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="8000"
                step="100"
                value={hectares}
                onChange={(e) => setHectares(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 mt-1 font-mono">
                <span>100 ha</span>
                <span>2.500 ha</span>
                <span>5.000 ha</span>
                <span>8.000 ha</span>
              </div>
            </div>

            {/* 3. Expected Market Price */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  3. Preço Estimado de Venda ({unit === '@' ? 'R$/@' : 'R$/sc'}):
                </label>
                <span className="text-sm font-mono font-bold text-zinc-200">
                  R$ {expectedBagPrice},00 / {unit}
                </span>
              </div>
              <input
                type="range"
                min={crop === 'milho' ? 35 : crop === 'algodao' ? 100 : 90}
                max={crop === 'milho' ? 85 : crop === 'algodao' ? 220 : 180}
                step="1"
                value={expectedBagPrice}
                onChange={(e) => setExpectedBagPrice(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Bullets */}
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Ganho médio histórico: <strong>+{currentYieldGain} {unit}/ha</strong> comprovado</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Desconto especial para negociações antecipadas de safra</span>
              </div>
            </div>
          </div>

          {/* Results Visual Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-6 bg-zinc-950/90 p-6 sm:p-7 rounded-2xl border border-zinc-800 space-y-5 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Resultado Econômico Projetado
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Retorno de {roiMultiplier}x
              </span>
            </div>

            {/* Big Numbers */}
            <div className="space-y-4">
              <div>
                <span className="text-xs text-zinc-400 block mb-0.5">Volume Extra Colhido no Talhão:</span>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                  +{totalExtraBags.toLocaleString('pt-BR')} <span className="text-emerald-400 text-xl font-sans">{unit} extras</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-[11px] text-zinc-400 block mb-1">Faturamento Bruto Extra:</span>
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">
                    R$ {(totalExtraGross / 1000).toFixed(1)}k
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono">R$ {totalExtraGross.toLocaleString('pt-BR')}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40">
                  <span className="text-[11px] text-emerald-300 font-semibold block mb-1">Lucro Líquido Adicional:</span>
                  <div className="text-lg sm:text-xl font-black text-emerald-300 font-mono">
                    +R$ {(netProfit / 1000).toFixed(1)}k
                  </div>
                  <span className="text-[10px] text-emerald-400/80 font-mono">R$ {netProfit.toLocaleString('pt-BR')}</span>
                </div>
              </div>
            </div>

            {/* Visual Bar representation */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs text-zinc-400">
                <span>Investimento em Nutrição</span>
                <span>Lucro Líquido Gerado</span>
              </div>
              <div className="w-full h-3 rounded-full bg-zinc-800 overflow-hidden flex">
                <div 
                  className="h-full bg-amber-500 transition-all duration-300"
                  style={{ width: `${Math.min(100, (totalInvestment / totalExtraGross) * 100)}%` }}
                  title="Custo da Nutrição"
                />
                <div 
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${Math.max(0, 100 - (totalInvestment / totalExtraGross) * 100)}%` }}
                  title="Lucro Líquido"
                />
              </div>
            </div>

            {/* Direct CTA */}
            <motion.a
              href={`https://wa.me/5566996512455?text=${encodeURIComponent(`Olá! Fiz a simulação de ROI para ${hectares} ha de ${crop.toUpperCase()} e quero receber a proposta comercial com estimativa de +${totalExtraBags} ${unit} extras.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-lg shadow-emerald-950 transition-colors flex items-center justify-center gap-2 cursor-pointer group"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950" />
              <span>Receber Proposta Formal no WhatsApp (66) 99651-2455</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
