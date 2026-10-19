import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FlaskConical, 
  Search, 
  ArrowRight, 
  MessageCircle,
  FileText
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product, ProductCategory, CropType } from '../types';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onOpenCreditsModal: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct, onOpenCreditsModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedCrop, setSelectedCrop] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todos os Fertilizantes' },
    { id: 'condicionadores-solo', label: 'Condicionadores de Solo & Húmicos' },
    { id: 'foliares-quelatos', label: 'Foliares & Quelatos Puros' },
    { id: 'bioestimulantes', label: 'Bioestimulantes & Enraizadores' },
    { id: 'macronutrientes', label: 'Macronutrientes Especiais' },
    { id: 'fertirrigacao', label: 'Fertirrigação & Pivô Central' },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesCrop = selectedCrop === 'all' || p.crops.includes(selectedCrop as CropType);
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.guarantees.some(g => g.label.toLowerCase().includes(searchQuery.toLowerCase()) || g.value.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesCrop && matchesSearch;
  });

  return (
    <section id="produtos" className="py-20 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-agro text-xs font-semibold text-emerald-300 mb-3">
              <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
              <span>Portfólio de Alta Tecnologia Agronômica</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Linhas de Fertilizantes Especiais & Nutrição
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
              Fórmulas líquidas e hidrossolúveis de alta biodisponibilidade, com agentes quelatantes que potencializam a absorção foliar e radicular.
            </p>
          </div>

          {/* Quick Info Badge */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={onOpenCreditsModal}
              className="text-xs text-zinc-400 hover:text-emerald-300 bg-zinc-900 hover:bg-zinc-800/80 px-3.5 py-2 rounded-xl border border-zinc-800 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Fotos Reais & Licenças</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-zinc-800/80 mb-8 space-y-4">
          
          {/* Search and Crop Selector Row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nutriente, fórmula ou benefício (ex: Boro, Potássio, Fósforo, Raiz)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/90 text-sm text-zinc-200 placeholder-zinc-500 rounded-xl border border-zinc-700/60 focus:border-emerald-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Filter by Crop pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-semibold text-zinc-400 whitespace-nowrap pl-1">Cultura:</span>
              {[
                { id: 'all', label: 'Todas' },
                { id: 'soja', label: 'Soja' },
                { id: 'milho', label: 'Milho' },
                { id: 'algodao', label: 'Algodão' },
                { id: 'pastagem', label: 'Pastagem' },
              ].map((crop) => (
                <button
                  key={crop.id}
                  onClick={() => setSelectedCrop(crop.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedCrop === crop.id
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                      : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                  }`}
                >
                  {crop.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-950 font-bold'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ scale: 1.025, y: -5 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="glass-panel rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-colors flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-950/40"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                  
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500 text-zinc-950 shadow-md">
                      {product.badge}
                    </span>
                  )}

                  {/* Photo author note */}
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-zinc-300 drop-shadow">
                    <span className="truncate">{product.photographerCredit}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-emerald-300 font-medium mt-0.5">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Guarantees Pills */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      Garantias Destacadas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.guarantees.slice(0, 3).map((g, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-700/80 text-[11px] text-zinc-300 font-mono"
                        >
                          <strong className="text-emerald-400">{g.label}:</strong> {g.value}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description snippet */}
                  <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Application timing */}
                  <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-[11px] text-zinc-300">
                    <strong className="text-emerald-400">Aplicação:</strong> {product.applicationTiming}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => onSelectProduct(product)}
                  className="py-2.5 px-3 rounded-xl text-xs font-bold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/70 hover:border-emerald-500/50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Ficha Técnica</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>

                <a
                  href={`https://wa.me/5566996512455?text=${encodeURIComponent(`Olá! Quero solicitar cotação e prazo de entrega para o produto *${product.name}* em Sorriso-MT.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-zinc-950" />
                  <span>Cotar</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl border border-zinc-800">
            <p className="text-zinc-400 text-sm">Nenhum produto encontrado com os filtros selecionados.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSelectedCrop('all'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 text-xs font-bold text-emerald-400 hover:underline cursor-pointer"
            >
              Limpar Filtros de Busca
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
