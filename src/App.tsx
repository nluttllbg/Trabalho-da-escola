import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NutritionalCalculator } from './components/NutritionalCalculator';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { CropSolutions } from './components/CropSolutions';
import { WhyAgijFert } from './components/WhyAgijFert';
import { RoiYieldCalculator } from './components/RoiYieldCalculator';
import { FieldCases } from './components/FieldCases';
import { FaqSection } from './components/FaqSection';
import { ContactWhatsAppSection } from './components/ContactWhatsAppSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { MediaAttributionModal } from './components/MediaAttributionModal';
import { Product } from './types';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [creditsModalOpen, setCreditsModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#090e0b] text-zinc-100 selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
      {/* Fixed Sticky Header */}
      <Header onOpenCreditsModal={() => setCreditsModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenCreditsModal={() => setCreditsModalOpen(true)} />

        {/* 2. Interactive Nutritional Calculator for MT Crops */}
        <NutritionalCalculator />

        {/* 3. Product Lines Catalog with Live Filters */}
        <ProductCatalog 
          onSelectProduct={(product) => setSelectedProduct(product)} 
          onOpenCreditsModal={() => setCreditsModalOpen(true)}
        />

        {/* 4. Deep-dive into Soy, Corn, Cotton and Pasture dynamics */}
        <CropSolutions onOpenCreditsModal={() => setCreditsModalOpen(true)} />

        {/* 5. Technological differentials and Regional Logistics */}
        <WhyAgijFert onOpenCreditsModal={() => setCreditsModalOpen(true)} />

        {/* 6. Economic ROI & Yield Gain Simulator */}
        <RoiYieldCalculator />

        {/* 7. Real Regional Harvest Cases */}
        <FieldCases onOpenCreditsModal={() => setCreditsModalOpen(true)} />

        {/* 8. Agronomic and Commercial FAQ */}
        <FaqSection />

        {/* 9. WhatsApp Quotation Composer & Contact */}
        <ContactWhatsAppSection />
      </main>

      {/* Footer */}
      <Footer onOpenCreditsModal={() => setCreditsModalOpen(true)} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Product Technical Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenCreditsModal={() => {
          setSelectedProduct(null);
          setCreditsModalOpen(true);
        }}
      />

      {/* Real Photography Provenance & Transparency Modal */}
      <MediaAttributionModal
        isOpen={creditsModalOpen}
        onClose={() => setCreditsModalOpen(false)}
      />
    </div>
  );
}

export default App;
