import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Clock, 
  Send, 
  Copy, 
  Check, 
  Sparkles,
  ShieldCheck,
  Building2
} from 'lucide-react';

export const ContactWhatsAppSection: React.FC = () => {

  const [producerName, setProducerName] = useState('');
  const [farmName, setFarmName] = useState('');
  const [city, setCity] = useState('Sorriso – MT');
  const [cropInterest, setCropInterest] = useState('Soja');
  const [hectares, setHectares] = useState('1000');
  const [productFocus, setProductFocus] = useState('Condicionador de Solo (AGIJ MAX SOIL) & Quelatos');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Generate WhatsApp Message Body
  const generateMessage = () => {
    let msg = `*SOLICITAÇÃO DE COTAÇÃO & ATENDIMENTO TÉCNICO*\n`;
    msg += `🏢 *Empresa:* AGIJ FERT (Sorriso-MT)\n\n`;
    if (producerName) msg += `👤 *Produtor / Responsável:* ${producerName}\n`;
    if (farmName) msg += `🏡 *Fazenda / Grupo:* ${farmName}\n`;
    msg += `📍 *Município / Região:* ${city}\n`;
    msg += `🌱 *Cultura Principal:* ${cropInterest}\n`;
    msg += `📐 *Área Estimada:* ${hectares} hectares\n`;
    msg += `🧪 *Linha de Interesse:* ${productFocus}\n`;
    if (notes) msg += `📝 *Observações / Desafios:* ${notes}\n`;
    msg += `\nOlá, equipe técnica da AGIJ FERT! Gostaria de verificar a disponibilidade de estoque, condições comerciais para a safra e agendar uma conversa com o agrônomo.`;
    return msg;
  };

  const currentMessage = generateMessage();
  const whatsappUrl = `https://wa.me/5566996512455?text=${encodeURIComponent(currentMessage)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-20 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-agro text-xs font-semibold text-emerald-300 mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Atendimento Imediato pelo WhatsApp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fale Direto com a Equipe AGIJ FERT
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Preencha os dados da sua lavoura abaixo para gerar uma mensagem pronta e falar diretamente com nossos engenheiros agrônomos em Sorriso–MT.
          </p>
        </div>

        {/* 2-Column Layout: Form + WhatsApp Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 space-y-5">
            <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-zinc-800">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Configurar Pedido / Cotação Personalizada</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  Seu Nome / Contato:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Roberto Silva"
                  value={producerName}
                  onChange={(e) => setProducerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 text-sm text-zinc-200 border border-zinc-700/80 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  Nome da Fazenda / Grupo:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Fazenda Primavera"
                  value={farmName}
                  onChange={(e) => setFarmName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 text-sm text-zinc-200 border border-zinc-700/80 focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  Município (MT):
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 text-sm text-zinc-200 border border-zinc-700/80 focus:border-emerald-500 focus:outline-none cursor-pointer"
                >
                  <option value="Sorriso – MT">Sorriso – MT</option>
                  <option value="Lucas do Rio Verde – MT">Lucas do Rio Verde – MT</option>
                  <option value="Sinop – MT">Sinop – MT</option>
                  <option value="Nova Mutum – MT">Nova Mutum – MT</option>
                  <option value="Tapurah – MT">Tapurah – MT</option>
                  <option value="Ipiranga do Norte – MT">Ipiranga do Norte – MT</option>
                  <option value="Vera / Santa Carmem – MT">Vera / Santa Carmem – MT</option>
                  <option value="Outro Município do MT">Outro Município do MT</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  Cultura Alvo:
                </label>
                <select
                  value={cropInterest}
                  onChange={(e) => setCropInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 text-sm text-zinc-200 border border-zinc-700/80 focus:border-emerald-500 focus:outline-none cursor-pointer"
                >
                  <option value="Soja">Soja</option>
                  <option value="Milho Safrinha">Milho Safrinha</option>
                  <option value="Algodão">Algodão</option>
                  <option value="Pastagem / ILP">Pastagem / ILP</option>
                  <option value="Feijão">Feijão</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  Área (Hectares):
                </label>
                <input
                  type="number"
                  placeholder="Ex: 1500"
                  value={hectares}
                  onChange={(e) => setHectares(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 text-sm text-zinc-200 border border-zinc-700/80 focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Linha de Produto Principal:
              </label>
              <select
                value={productFocus}
                onChange={(e) => setProductFocus(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 text-sm text-zinc-200 border border-zinc-700/80 focus:border-emerald-500 focus:outline-none cursor-pointer"
              >
                <option value="Condicionador de Solo (AGIJ MAX SOIL) & Ácidos Húmicos">Condicionador de Solo (AGIJ MAX SOIL) & Ácidos Húmicos</option>
                <option value="Micronutrientes Quelatados (AGIJ BORO-ZINCO Full)">Micronutrientes Quelatados (AGIJ BORO-ZINCO Full)</option>
                <option value="Bioestimulante Enraizador (AGIJ BIO ROOT Force)">Bioestimulante Enraizador (AGIJ BIO ROOT Force)</option>
                <option value="Potássio Stay-Green (AGIJ GRAIN K-FORTE 00-00-30)">Potássio Stay-Green (AGIJ GRAIN K-FORTE 00-00-30)</option>
                <option value="Fósforo de Arranque Polifosfatado (AGIJ PHOS STARTER)">Fósforo de Arranque Polifosfatado (AGIJ PHOS STARTER)</option>
                <option value="Fertirrigação Hidrossolúvel (AGIJ FERTI-DRIP)">Fertirrigação Hidrossolúvel (AGIJ FERTI-DRIP)</option>
                <option value="Programa Completo Safra + Safrinha">Programa Completo Safra + Safrinha</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Observações Especiais ou Desafios do Talhão (Opcional):
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Histórico de veranico em janeiro, solo arenoso em transição, interesse em barter..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 text-sm text-zinc-200 border border-zinc-700/80 focus:border-emerald-500 focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* WhatsApp Preview & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live WhatsApp message card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="glass-panel-glow p-6 rounded-3xl border border-emerald-500/30 space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    WhatsApp Direto: (66) 99651-2455
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-2.5 py-1 text-xs text-zinc-400 hover:text-emerald-300 bg-zinc-900 rounded-lg border border-zinc-700/60 flex items-center gap-1 transition-colors cursor-pointer"
                  title="Copiar texto da mensagem"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              {/* Message balloon preview */}
              <div className="bg-[#0b1c14] border border-emerald-900/60 p-4 rounded-2xl font-mono text-xs text-zinc-200 whitespace-pre-wrap leading-relaxed shadow-inner max-h-56 overflow-y-auto">
                {currentMessage}
              </div>

              {/* Send Button */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-4 px-5 rounded-2xl text-center text-sm font-black bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-xl shadow-emerald-950 flex items-center justify-center gap-3 transition-colors cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 fill-zinc-950 group-hover:rotate-12 transition-transform" />
                <span>Iniciar Conversa no WhatsApp Agora</span>
                <Send className="w-4 h-4 ml-1" />
              </motion.a>
            </motion.div>

            {/* Direct Information Box */}
            <div className="glass-panel p-5 rounded-2xl border border-zinc-800 space-y-3.5 text-xs text-zinc-300">
              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Sede Operacional & Centro de Distribuição:</strong>
                  <span>Sorriso – Mato Grosso (Eixo BR-163) • Atendimento a todo o Centro-Oeste</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Plantão Comercial & Suporte Técnico:</strong>
                  <a href="tel:+5566996512455" className="text-emerald-400 hover:underline font-mono font-bold">
                    (66) 99651-2455
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Horário de Atendimento Agronômico:</strong>
                  <span>Segunda a Sexta: 07h00 às 18h30 | Sábados de Safra: 07h00 às 13h00</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Garantia de Qualidade & Registro MAPA:</strong>
                  <span>Produtos com registro e rigoroso controle de lotes</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
