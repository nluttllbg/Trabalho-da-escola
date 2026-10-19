import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Truck, 
  MapPin, 
  Sparkles, 
  Award,
  Users,
  MessageCircle
} from 'lucide-react';

interface WhyAgijFertProps {
  onOpenCreditsModal: () => void;
}

export const WhyAgijFert: React.FC<WhyAgijFertProps> = ({ onOpenCreditsModal }) => {

  const differentials = [
    {
      icon: ShieldCheck,
      title: 'Quelatos Orgânicos Puros & pH Tamponado',
      description: 'Zero incompatibilidade no tanque. Nossos micronutrientes não precipitam com defensivos e não entopem bicos de pulverização.',
      image: 'https://images.pexels.com/photos/8531346/pexels-photo-8531346.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      credit: 'Foto: olia danilevich (Pexels Licença Comercial)',
      tag: 'Alta Tecnologia'
    },
    {
      icon: Truck,
      title: 'Logística Rápida no Eixo da BR-163',
      description: 'Centro de distribuição próprio em Sorriso com entrega direta na sede da fazenda em até 24h/48h para não atrasar as janelas de plantio e pulverização.',
      image: 'https://images.pexels.com/photos/8994766/pexels-photo-8994766.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      credit: 'Foto: Braeson Holland (Pexels Licença Comercial)',
      tag: 'Pronta Entrega'
    },
    {
      icon: Users,
      title: 'Consultoria Agronômica Presencial no Campo',
      description: 'Equipe técnica de engenheiros agrônomos que realizam visitas aos talhões, interpretam laudos de solo e acompanham os resultados da emergência à colheita.',
      image: 'https://images.pexels.com/photos/37201245/pexels-photo-37201245.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      credit: 'Foto: Mark Stebnicki (Pexels Licença Comercial)',
      tag: 'Suporte In Loco'
    },
    {
      icon: Award,
      title: 'Fórmulas Testadas nas Condições do Cerrado',
      description: 'Soluções desenvolvidas para os solos tropicais de Sorriso, Sinop, Lucas e Nova Mutum, com alta resistência à lixiviação e fixação de fósforo.',
      image: 'https://images.pexels.com/photos/9324755/pexels-photo-9324755.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      credit: 'Foto: Tom Fisk (Pexels Licença Comercial)',
      tag: 'Eficácia Comprovada'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-agro text-xs font-semibold text-emerald-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Por que escolher a AGIJ FERT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnologia que Gera Mais Sacas por Hectare
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Combinamos ciência de nutrição vegetal avançada com agilidade operacional e proximidade física com o produtor mato-grossense.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ scale: 1.025, y: -4 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className="glass-panel rounded-3xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-colors group flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/30"
              >
                <div>
                  {/* Real Photo Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500 text-zinc-950 shadow-md">
                      {item.tag}
                    </span>

                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-zinc-300 drop-shadow">
                      <span>{item.credit}</span>
                      <button
                        onClick={onOpenCreditsModal}
                        className="text-emerald-400 hover:underline cursor-pointer"
                      >
                        Licença
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="h-px bg-zinc-800/80 mb-4" />
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <MapPin className="w-3.5 h-3.5" /> Sorriso • BR-163 • Médio-Norte MT
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Agro Banner Callout */}
        <div className="mt-12 glass-panel-glow p-6 sm:p-8 rounded-3xl border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Atendimento Técnico Regional
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Precisa de uma visita técnica ou recomendação para sua fazenda?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Nossos agrônomos atendem Sorriso, Lucas do Rio Verde, Sinop, Nova Mutum, Tapurah e Ipiranga do Norte.
            </p>
          </div>

          <motion.a
            href="https://wa.me/5566996512455?text=Ol%C3%A1%2C%20AGIJ%20FERT!%20Gostaria%20de%20agendar%20uma%20visita%20t%C3%A9cnica%20do%20agr%C3%B4nomo%20na%20minha%20fazenda."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-xl shadow-emerald-950 flex items-center gap-2.5 shrink-0 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-zinc-950" />
            <span>Solicitar Visita no WhatsApp (66) 99651-2455</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
};
