import { CropProfile } from '../types';

export const CROP_PROFILES: CropProfile[] = [
  {
    id: 'soja',
    name: 'Soja (Glycine max)',
    scientificName: 'Glycine max (L.) Merr.',
    tagline: 'O carro-chefe da produção em Sorriso-MT: Máximo número de nós produtivos e peso de grãos',
    heroImage: 'https://images.pexels.com/photos/13821931/pexels-photo-13821931.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    photographerCredit: 'Foto: Dan Hamill (Pexels Licença Comercial)',
    averageProductivityMatoGrosso: '62 a 66 sc/ha (Média regional)',
    targetProductivityAgij: '78 a 88+ sc/ha (Manejo de Alta Performance AGIJ)',
    keyChallenges: [
      'Fixação de fósforo em solos argilosos e intemperizados do cerrado',
      'Veranicos na fase de florescimento (R1/R2) e enchimento (R5)',
      'Abortamento de flores e vagens por deficiência de boro e zinco',
      'Degradação da matéria orgânica em solos sob altas temperaturas'
    ],
    growthStages: [
      {
        stage: 'TS / V1-V2',
        title: 'Tratamento de Sementes e Arranque',
        criticalNutrients: ['Cobalto (Co)', 'Molibdênio (Mo)', 'Fósforo (P)', 'Bioestimulante'],
        recommendedAgijProduct: 'AGIJ BIO ROOT® Force + AGIJ PHOS STARTER®',
        impact: 'Estímulo à nodulação precoce, raízes pivotantes profundas e tolerância inicial a pragas.'
      },
      {
        stage: 'V3 - V6',
        title: 'Desenvolvimento Vegetativo & Ramificação',
        criticalNutrients: ['Zinco (Zn)', 'Manganês (Mn)', 'Enxofre (S)', 'Magnésio (Mg)'],
        recommendedAgijProduct: 'AGIJ MAX SOIL® + AGIJ BORO-ZINCO® Quelatado',
        impact: 'Maior taxa fotossintética, desativação de fitotoxidez de herbicidas e mais nós produtivos.'
      },
      {
        stage: 'R1 - R2',
        title: 'Florescimento Pleno (Pré-Vagem)',
        criticalNutrients: ['Boro (B)', 'Cálcio (Ca)', 'Aminoácidos Livres'],
        recommendedAgijProduct: 'AGIJ BORO-ZINCO® Full Quelatado',
        impact: 'Aumento na retenção de flores, viabilidade polínica e redução drástica do abortamento.'
      },
      {
        stage: 'R3 - R5.3',
        title: 'Formação de Vagens & Enchimento de Grãos',
        criticalNutrients: ['Potássio (K)', 'Enxofre (S)', 'Magnésio (Mg)'],
        recommendedAgijProduct: 'AGIJ GRAIN K-FORTE® 00-00-30',
        impact: 'Translocação de açúcares para grãos, elevação do PMS (peso de mil sementes) e grãos uniformes.'
      }
    ],
    soilTips: 'Em latossolos vermelhos de Sorriso, priorize o fornecimento de cálcio e matéria orgânica líquida para aumentar a profundidade efetiva das raízes além dos 80 cm.'
  },
  {
    id: 'milho',
    name: 'Milho Safrinha',
    scientificName: 'Zea mays L.',
    tagline: 'Alta densidade de grãos e tolerância ao estresse hídrico no fechamento da safrinha',
    heroImage: 'https://images.pexels.com/photos/30875360/pexels-photo-30875360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    photographerCredit: 'Foto: Isabella Her (Pexels Licença Comercial)',
    averageProductivityMatoGrosso: '105 a 118 sc/ha (Média safrinha MT)',
    targetProductivityAgij: '140 a 165+ sc/ha (Manejo Estratégico AGIJ)',
    keyChallenges: [
      'Estresse hídrico no final do ciclo com o término das chuvas em maio/junho',
      'Deficiência de zinco na fase de definição do número de fileiras por espiga (V4-V6)',
      'Acamamento e fragilidade de colmo por desbalanço Potássio/Nitrogênio'
    ],
    growthStages: [
      {
        stage: 'V2 - V4',
        title: 'Arranque e Estabelecimento',
        criticalNutrients: ['Zinco (Zn)', 'Fósforo (P)', 'Nitrogênio (N)'],
        recommendedAgijProduct: 'AGIJ PHOS STARTER® + AGIJ BIO ROOT®',
        impact: 'Formação do sistema radicular fasciculado profundo e rápida absorção de água.'
      },
      {
        stage: 'V4 - V8',
        title: 'Definição do Potencial Produtivo (Espigamento)',
        criticalNutrients: ['Zinco (Zn)', 'Boro (B)', 'Magnésio (Mg)'],
        recommendedAgijProduct: 'AGIJ BORO-ZINCO® Quelatado',
        impact: 'Determinação do número de fileiras de grãos por espiga e comprimento do sabugo.'
      },
      {
        stage: 'VT - R3',
        title: 'Pendoamento e Enchimento de Grãos (Grão Leitoso/Pastoso)',
        criticalNutrients: ['Potássio (K₂O)', 'Enxofre (S)', 'Potenciador Osmótico'],
        recommendedAgijProduct: 'AGIJ GRAIN K-FORTE® 00-00-30',
        impact: 'Enchimento da ponta da espiga, tolerância à seca final e alta densidade de amido.'
      }
    ],
    soilTips: 'A aplicação de Potássio foliar de alta pureza na safrinha compensa a baixa umidade do solo na fase reprodutiva quando as raízes têm dificuldade de absorção.'
  },
  {
    id: 'algodao',
    name: 'Algodoeiro (Gossypium hirsutum)',
    scientificName: 'Gossypium hirsutum L.',
    tagline: 'Equilíbrio nutricional rigoroso para retenção de maçãs de primeira e fibra tipo exportação',
    heroImage: 'https://images.pexels.com/photos/13924875/pexels-photo-13924875.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    photographerCredit: 'Foto: Mark Stebnicki (Pexels Licença Comercial)',
    averageProductivityMatoGrosso: '280 a 320 @/ha (Média pluma)',
    targetProductivityAgij: '360 a 410+ @/ha (Manejo de Alta Rentabilidade AGIJ)',
    keyChallenges: [
      'Queda excessiva de botões florais e maçãs por carência de boro e potássio',
      'Desbalanço vegetativo vs reprodutivo sob alta luminosidade',
      'Exigência de micronutrientes solúveis durante as pontes de safra'
    ],
    growthStages: [
      {
        stage: 'B1 - F1',
        title: 'Emissão dos Botões Florais',
        criticalNutrients: ['Boro (B)', 'Zinco (Zn)', 'Bioestimulante'],
        recommendedAgijProduct: 'AGIJ BORO-ZINCO® Full Quelatado',
        impact: 'Prevenção do ponteamento seco e garantia da formação das primeiras posições produtivas.'
      },
      {
        stage: 'F1 - C1',
        title: 'Florescimento e Formação de Maçãs',
        criticalNutrients: ['Potássio (K)', 'Cálcio (Ca)', 'Magnésio (Mg)'],
        recommendedAgijProduct: 'AGIJ GRAIN K-FORTE® + AGIJ MAX SOIL®',
        impact: 'Translocação energética para o terço médio e superior da planta, fixando as maçãs.'
      }
    ],
    soilTips: 'O algodão requer solos descompactados e nutrição foliar precisa para manter o dossel ativo durante a formação da fibra.'
  },
  {
    id: 'pastagem',
    name: 'Pastagens e Integração Lavoura-Pecuária (ILP)',
    scientificName: 'Urochloa brizantha / ruziziensis',
    tagline: 'Massa verde abundante, perfilhamento rápido e enriquecimento de palhada para plantio direto',
    heroImage: 'https://images.pexels.com/photos/9324755/pexels-photo-9324755.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    photographerCredit: 'Foto: Tom Fisk (Pexels Licença Comercial)',
    averageProductivityMatoGrosso: '1,2 a 1,8 UA/ha (Pastagem tradicional)',
    targetProductivityAgij: '3,5 a 5,0 UA/ha (Manejo Intensivo Nutricional AGIJ)',
    keyChallenges: [
      'Degradação e perda de fertilidade do capim após 3-4 anos',
      'Baixo teor de proteína bruta da forragem na entressafra',
      'Palhada insuficiente para a semeadura direta da soja no verão'
    ],
    growthStages: [
      {
        stage: 'Pós-Pastoreio / Safrinha',
        title: 'Rebrota e Densificação de Touceiras',
        criticalNutrients: ['Nitrogênio (N)', 'Fósforo (P)', 'Enxofre (S)', 'Ácidos Húmicos'],
        recommendedAgijProduct: 'AGIJ MAX SOIL® + AGIJ PHOS STARTER®',
        impact: 'Rápida recuperação de biomassa, digestibilidade elevada e palhada volumosa para a soja.'
      }
    ],
    soilTips: 'A adubação biológica com ácidos fúlvicos e fósforo solúvel transforma pastos degradados em áreas de alta taxa de lotação e ciclagem de nutrientes.'
  }
];
