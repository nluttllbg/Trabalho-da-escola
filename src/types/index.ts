export interface MediaCredit {
  id: string;
  usageContext: string;
  title: string;
  imageUrl: string;
  creatorName: string;
  creatorUrl: string;
  sourcePlatform: string;
  sourceUrl: string;
  license: string;
  altText: string;
}

export type ProductCategory = 
  | 'all'
  | 'macronutrientes' 
  | 'foliares-quelatos' 
  | 'bioestimulantes' 
  | 'condicionadores-solo' 
  | 'fertirrigacao';

export type CropType = 'soja' | 'milho' | 'algodao' | 'pastagem' | 'feijao';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  crops: CropType[];
  badge?: string;
  imageUrl: string;
  photographerCredit: string;
  guarantees: {
    label: string;
    value: string;
  }[];
  density?: string;
  nature?: string;
  dosageRecommendation: string;
  applicationTiming: string;
  keyBenefits: string[];
  description: string;
  technicalHighlights: string[];
}

export interface CropProfile {
  id: CropType;
  name: string;
  scientificName: string;
  tagline: string;
  heroImage: string;
  photographerCredit: string;
  averageProductivityMatoGrosso: string;
  targetProductivityAgij: string;
  keyChallenges: string[];
  growthStages: {
    stage: string;
    title: string;
    criticalNutrients: string[];
    recommendedAgijProduct: string;
    impact: string;
  }[];
  soilTips: string;
}

export interface SuccessCase {
  id: string;
  farmName: string;
  location: string;
  farmerName: string;
  crop: string;
  area: string;
  productivityGain: string;
  quote: string;
  agijStrategy: string;
  imageUrl: string;
  photographerCredit: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'tecnico' | 'comercial' | 'logistica' | 'aplicacao';
}
