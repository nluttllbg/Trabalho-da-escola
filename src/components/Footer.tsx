import React from 'react';
import { 
  Sprout, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  FileText, 
  MessageCircle
} from 'lucide-react';

interface FooterProps {
  onOpenCreditsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCreditsModal }) => {
  const currentYear = 2026;

  const whatsappUrl = "https://wa.me/5566996512455?text=" + encodeURIComponent("Olá, equipe AGIJ FERT! Gostaria de mais informações sobre os produtos de nutrição vegetal.");

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-800 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-900/40">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">
                  AGIJ <span className="text-emerald-400">FERT</span>
                </span>
                <p className="text-[11px] text-zinc-400 font-medium">Nutrição Vegetal de Alta Performance</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Desenvolvendo o potencial genético das lavouras de Mato Grosso com tecnologia de fertilizantes especiais, condicionadores biológicos de solo e micronutrientes 100% quelatados.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Sede: Sorriso – MT • Capital Nacional do Agronegócio</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-emerald-400 transition-colors">Início</a></li>
              <li><a href="#produtos" className="hover:text-emerald-400 transition-colors">Catálogo de Fertilizantes</a></li>
              <li><a href="#culturas" className="hover:text-emerald-400 transition-colors">Soja, Milho & Algodão</a></li>
              <li><a href="#simulador" className="hover:text-emerald-400 transition-colors">Simulador Nutricional</a></li>
              <li><a href="#diferenciais" className="hover:text-emerald-400 transition-colors">Diferenciais Técnicos</a></li>
              <li><a href="#casos" className="hover:text-emerald-400 transition-colors">Casos no Campo</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Regional Coverage */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Atendimento no MT</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Entregas e visitas agronômicas no polo produtivo:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-zinc-300">
              {['Sorriso', 'Lucas do Rio Verde', 'Nova Mutum', 'Sinop', 'Tapurah', 'Ipiranga do Norte', 'Vera', 'Santa Carmem', 'Diamantino', 'Campo Novo'].map((city, i) => (
                <span key={i} className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                  {city}
                </span>
              ))}
            </div>
            <div className="pt-1">
              <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Entrega em 24h a 48h na BR-163
              </span>
            </div>
          </div>

          {/* Col 4: Contacts & Transparency Button */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contato & Suporte</h4>
            
            <div className="space-y-2.5 text-xs">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: (66) 99651-2455</span>
              </a>

              <a
                href="tel:+5566996512455"
                className="flex items-center gap-2 text-zinc-300 hover:text-white"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Telefone: (66) 99651-2455</span>
              </a>

              <div className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>contato@agijfert.com.br</span>
              </div>
            </div>

            {/* Photo Credits Trigger */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenCreditsModal}
                className="w-full py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-emerald-500/50 text-xs font-semibold text-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Transparência: Fotos Reais Utilizadas</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {currentYear} AGIJ FERT — Todos os direitos reservados. Sorriso – MT.</p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCreditsModal}
              className="hover:text-emerald-400 underline cursor-pointer"
            >
              Registro de Direitos de Imagem (13 Fotos Reais)
            </button>
            <span>•</span>
            <span className="text-emerald-500 font-mono">GitHub Pages Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
