import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Layers, 
  Clock, 
  Sparkles, 
  MessageCircle, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { CropType } from '../types';

export const NutritionalCalculator: React.FC = () => {

  const [selectedCrop, setSelectedCrop] = useState<CropType>('soja');
  const [selectedPhase, setSelectedPhase] = useState<'arranque' | 'vegetativo' | 'florescimento' | 'enchimento'>('florescimento');
  const [hectares, setHectares] = useState<number>(500);
  const [soilType, setSoilType] = useState<'argiloso' | 'arenoso' | 'misto'>('argiloso');

  // Agronomic recommendation calculations
  const calculateRecommendation = () => {
    let productName = '';
    let dosage = '';
    let estimatedGainSc = 0;
    let cropName = '';
    let pricePerUnit = 0;
    let unitName = 'sc';

    if (selectedCrop === 'soja') {
      cropName = 'Soja';
      pricePerUnit = 125; // R$ por saca
      if (selectedPhase === 'arranque') {
        productName = 'AGIJ MAX SOIL® Plus (3,0 L/ha) + AGIJ BIO ROOT® Force (0,5 L/ha)';
        dosage = '3,5 L/ha total';
        estimatedGainSc = 4.2;
      } else if (selectedPhase === 'vegetativo') {
        productName = 'AGIJ MAX SOIL® (2,0 L/ha) + AGIJ BORO-ZINCO® Quelatado (0,7 L/ha)';
        dosage = '2,7 L/ha total';
        estimatedGainSc = 4.8;
      } else if (selectedPhase === 'florescimento') {
        productName = 'AGIJ BORO-ZINCO® Full Quelatado (1,0 L/ha)';
        dosage = '1,0 L/ha';
        estimatedGainSc = 5.6;
      } else {
        productName = 'AGIJ GRAIN K-FORTE® 00-00-30 (2,5 L/ha)';
        dosage = '2,5 L/ha';
        estimatedGainSc = 5.2;
      }
    } else if (selectedCrop === 'milho') {
      cropName = 'Milho Safrinha';
      pricePerUnit = 55; // R$ por saca
      if (selectedPhase === 'arranque') {
        productName = 'AGIJ PHOS STARTER® 10-30-00 (8,0 L/ha no sulco)';
        dosage = '8,0 L/ha';
        estimatedGainSc = 9.5;
      } else if (selectedPhase === 'vegetativo') {
        productName = 'AGIJ BORO-ZINCO® Quelatado (0,8 L/ha) + Bioestimulante';
        dosage = '1,2 L/ha';
        estimatedGainSc = 11.2;
      } else if (selectedPhase === 'florescimento') {
        productName = 'AGIJ BORO-ZINCO® (0,8 L/ha)';
        dosage = '0,8 L/ha';
        estimatedGainSc = 10.4;
      } else {
        productName = 'AGIJ GRAIN K-FORTE® 00-00-30 (3,0 L/ha em pré-pendoamento)';
        dosage = '3,0 L/ha';
        estimatedGainSc = 12.8;
      }
    } else if (selectedCrop === 'algodao') {
      cropName = 'Algodão';
      unitName = '@';
      pricePerUnit = 145; // R$ por arroba
      if (selectedPhase === 'arranque') {
        productName = 'AGIJ MAX SOIL® (3,0 L/ha) + AGIJ BIO ROOT® (0,8 L/ha)';
        dosage = '3,8 L/ha';
        estimatedGainSc = 18;
      } else if (selectedPhase === 'florescimento' || selectedPhase === 'vegetativo') {
        productName = 'AGIJ BORO-ZINCO® Full Quelatado (1,2 L/ha)';
        dosage = '1,2 L/ha';
        estimatedGainSc = 24;
      } else {
        productName = 'AGIJ GRAIN K-FORTE® (3,0 L/ha) + Ácidos Húmicos';
        dosage = '3,0 L/ha';
        estimatedGainSc = 26;
      }
    } else {
      // Pastagem / Feijao
      cropName = selectedCrop === 'pastagem' ? 'Pastagem / ILP' : 'Feijão';
      pricePerUnit = 90;
      productName = 'AGIJ MAX SOIL® Plus (2,5 L/ha) + AGIJ PHOS STARTER® (5,0 L/ha)';
      dosage = '7,5 L/ha';
      estimatedGainSc = 6.0;
    }

    // Soil texture adjustment
    if (soilType === 'arenoso') {
      estimatedGainSc = Number((estimatedGainSc * 1.15).toFixed(1)); // greater response on sandy soils
    }

    const totalVolumeLiters = Math.round(hectares * (parseFloat(dosage) || 2.5));
    const totalExtraProduction = Math.round(hectares * estimatedGainSc);
    const estimatedExtraRevenue = Math.round(totalExtraProduction * pricePerUnit);

    return {
      cropName,
      productName,
      dosage,
      estimatedGainSc,
      unitName,
      totalVolumeLiters,
      totalExtraProduction,
      estimatedExtraRevenue
    };
  };

  const rec = calculateRecommendation();

  const handleWhatsAppShare = () => {
    const text = `*SIMULAÇÃO DE NUTRIÇÃO AGIJ FERT (Sorriso-MT)*\n` +
      `🌱 Cultura: ${rec.cropName}\n` +
      `📍 Área: ${hectares} hectares\n` +
      `🏞️ Solo: ${soilType === 'argiloso' ? 'Latossolo Argiloso' : soilType === 'arenoso' ? 'Solo Arenoso/Transição' : 'Solo Médio/Misto'}\n` +
      `⏱️ Fase Alvo: ${selectedPhase.toUpperCase()}\n` +
      `🧪 Manejo Recomendado: ${rec.productName}\n` +
      `📦 Volume Estimado: ~${rec.totalVolumeLiters.toLocaleString('pt-BR')} Litros\n` +
      `📈 Ganho Estimado: +${rec.estimatedGainSc} ${rec.unitName}/ha (~+${rec.totalExtraProduction.toLocaleString('pt-BR')} ${rec.unitName} total)\n\n` +
      `Gostaria de receber uma cotação formal com condições de safra e agendar uma análise técnica.`;

    const url = `https://wa.me/5566996512455?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="simulador" className="py-20 relative bg-zinc-950/90 overflow-hidden border-y border-emerald-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-agro text-xs font-semibold text-emerald-300 mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ferramenta Agronômica Exclusiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simulador de Manejo & Recomendação Nutricional
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Selecione sua cultura, o estágio fenológico e a metragem em hectares para calcular a dosagem ideal e o retorno projetado em produtividade no cerrado mato-grossense.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form Panel */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-900/40 space-y-6">
            
            {/* 1. Crop Selection */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>1. Escolha a Cultura</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'soja', name: 'Soja', icon: '🌱' },
                  { id: 'milho', name: 'Milho Safrinha', icon: '🌽' },
                  { id: 'algodao', name: 'Algodão', icon: '☁️' },
                  { id: 'pastagem', name: 'Pastagem/ILP', icon: '🌾' },
                ].map((crop) => (
                  <button
                    key={crop.id}
                    type="button"
                    onClick={() => setSelectedCrop(crop.id as CropType)}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-150 ${
                      selectedCrop === crop.id
                        ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-900/40 border-emerald-400'
                        : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                    }`}
                  >
                    <span>{crop.icon}</span>
                    <span>{crop.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Phase Selection */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>2. Estádio Fenológico / Momento de Aplicação</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'arranque', label: 'Arranque & Sulco de Plantio', desc: 'Enraizamento profundo e desbloqueio de P' },
                  { id: 'vegetativo', label: 'Desenvolvimento Vegetativo (V3-V6)', desc: 'Ramificação e desintoxicação de calda' },
                  { id: 'florescimento', label: 'Pré-Florescimento & Pegamento (R1)', desc: 'Anti-abortamento com Boro-Zinco' },
                  { id: 'enchimento', label: 'Enchimento de Grãos (R3-R5)', desc: 'Potássio livre de cloro e Stay-Green' },
                ].map((phase) => (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => setSelectedPhase(phase.id as any)}
                    className={`p-3 rounded-xl text-left transition-all duration-150 border ${
                      selectedPhase === phase.id
                        ? 'bg-emerald-950/70 border-emerald-400/80 text-white shadow-md shadow-emerald-950'
                        : 'bg-zinc-900/60 hover:bg-zinc-800/80 border-zinc-800 text-zinc-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-zinc-100">{phase.label}</span>
                      {selectedPhase === phase.id && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1">{phase.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Soil Condition */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>3. Tipo de Solo do Talhão</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'argiloso', label: 'Latossolo Argiloso (>35% argila)' },
                  { id: 'misto', label: 'Solo Médio (20% a 35% argila)' },
                  { id: 'arenoso', label: 'Solo Arenoso / Transição (<20%)' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSoilType(s.id as any)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-medium text-center transition-all ${
                      soilType === s.id
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/60 font-bold'
                        : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Area Range Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs sm:text-sm font-bold text-zinc-200 uppercase tracking-wider">
                  4. Área a Ser Tratada
                </label>
                <div className="px-3 py-1 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-sm">
                  {hectares.toLocaleString('pt-BR')} ha
                </div>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={hectares}
                onChange={(e) => setHectares(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 mt-1 font-mono">
                <span>50 ha</span>
                <span>1.000 ha</span>
                <span>2.500 ha</span>
                <span>5.000 ha</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ scale: 1.015 }}
            className="lg:col-span-5 glass-panel-glow p-6 sm:p-7 rounded-2xl border border-emerald-500/30 space-y-5 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Prescrição Nutricional Gerada
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] bg-zinc-800 text-zinc-300 font-mono">
                Sorriso-MT
              </span>
            </div>

            {/* Recommended Product Box */}
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
              <span className="text-xs text-zinc-400 uppercase font-semibold">Tecnologia Recomendada:</span>
              <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                {rec.productName}
              </h4>
              <div className="flex items-center gap-4 text-xs text-zinc-300 pt-1">
                <span>Dosagem: <strong className="text-emerald-300">{rec.dosage}</strong></span>
                <span>•</span>
                <span>Volume Total: <strong className="text-emerald-300">~{rec.totalVolumeLiters.toLocaleString('pt-BR')} L</strong></span>
              </div>
            </div>

            {/* Projected Yield & Revenue */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ganho Estimado:</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                  +{rec.estimatedGainSc} <span className="text-xs font-normal text-zinc-300">{rec.unitName}/ha</span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  Total: +{rec.totalExtraProduction.toLocaleString('pt-BR')} {rec.unitName}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-lime-400" />
                  <span>Retorno Bruto Est.:</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-lime-400 font-mono truncate">
                  R$ {(rec.estimatedExtraRevenue / 1000).toFixed(0)}k
                </div>
                <p className="text-[11px] text-zinc-400 mt-0.5 truncate">
                  R$ {rec.estimatedExtraRevenue.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>

            {/* Technical note */}
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-2 text-xs text-zinc-400">
              <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Estimativa baseada em ensaios de campo na região de Sorriso–MT. Sujeito à análise de solo e condições climáticas da safra.
              </span>
            </div>

            {/* Direct WhatsApp Action Button */}
            <motion.button
              onClick={handleWhatsAppShare}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-lg shadow-emerald-950/60 transition-colors flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950 group-hover:scale-110 transition-transform" />
              <span>Enviar Prescrição no WhatsApp (66) 99651-2455</span>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
