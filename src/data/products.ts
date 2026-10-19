import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'agij-max-soil',
    name: 'AGIJ MAX SOIL® Plus',
    subtitle: 'Condicionador Biológico & Ácidos Húmicos/Fúlvicos de Alta Pureza',
    category: 'condicionadores-solo',
    crops: ['soja', 'milho', 'algodao', 'pastagem', 'feijao'],
    badge: 'Mais Vendido no MT',
    imageUrl: 'https://images.pexels.com/photos/7768447/pexels-photo-7768447.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    photographerCredit: 'Foto: Atlantic Ambience (Pexels Licença Comercial)',
    guarantees: [
      { label: 'Carbono Orgânico Total (COT)', value: '18,5%' },
      { label: 'Ácidos Húmicos', value: '14,0%' },
      { label: 'Ácidos Fúlvicos', value: '4,5%' },
      { label: 'Óxido de Potássio (K₂O)', value: '5,0%' },
      { label: 'CTC (Capacidade de Troca Catiônica)', value: '450 mmolc/kg' }
    ],
    density: '1,28 g/cm³',
    nature: 'Fluido em suspensão homogênea',
    dosageRecommendation: '2,0 a 4,0 L/ha no sulco de plantio ou dessecação pré-plantio',
    applicationTiming: 'Pré-plantio, dessecação ou no sulco junto ao inoculante',
    keyBenefits: [
      'Desbloqueio imediato de Fósforo (P) retido nos colóides do solo do Cerrado',
      'Aumento expressivo da retenção de água e aeração no perfil do solo',
      'Estímulo à microbiota benéfica nativa e potencialização da nodulação (Bradyrhizobium)',
      'Mitigação dos efeitos de veranicos e compactação superficial'
    ],
    description: 'Formulação líquida nobre obtida a partir de leonardita pura selecionada, desenhada sob medida para elevar a fertilidade física, química e biológica dos solos tropicais de Sorriso e Médio-Norte de Mato Grosso.',
    technicalHighlights: [
      'Totalmente compatível com inoculantes e fungicidas de sulco',
      'Alta solubilidade sem entupimento de bicos de pulverização',
      'Resultados comprovados com ganho de +4,2 sc/ha em áreas consolidadas'
    ]
  },
  {
    id: 'agij-boro-zinco-quelato',
    name: 'AGIJ BORO-ZINCO® Full Quelatado',
    subtitle: 'Micronutrientes Quelatados com Aminoácidos L-α Livres',
    category: 'foliares-quelatos',
    crops: ['soja', 'milho', 'algodao'],
    badge: 'Tecnologia Anti-Abscisão',
    imageUrl: 'https://images.pexels.com/photos/31673795/pexels-photo-31673795.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    photographerCredit: 'Foto: Kashif Shah (Pexels Licença Comercial)',
    guarantees: [
      { label: 'Boro (B solúvel em água)', value: '8,0% (104 g/L)' },
      { label: 'Zinco (Zn quelatado EDTA)', value: '6,5% (84,5 g/L)' },
      { label: 'Molibdênio (Mo)', value: '0,8% (10,4 g/L)' },
      { label: 'Aminoácidos Livres L-α', value: '12,0%' }
    ],
    density: '1,30 g/cm³',
    nature: 'Solução límpida hidrossolúvel',
    dosageRecommendation: '0,5 a 1,0 L/ha em estádio V4/V6 e pré-florescimento (R1)',
    applicationTiming: 'V4 na soja, V4/V6 no milho e botão floral no algodão',
    keyBenefits: [
      'Pegamento floral máximo e redução drástica do abortamento de flores e vagens',
      'Formação rápida do tubo polínico e divisão celular acelerada',
      'Zinco 100% quelatado: não reage com calda de defensivos',
      'Aporte de aminoácidos para síntese de auxinas e recuperação de estresses'
    ],
    description: 'Complexo organomineral de Boro e Zinco quelatado com polióis e L-aminoácidos para máxima translocação sistêmica pelo floema, garantindo que o nutriente atinja os pontos de crescimento e florescimento na hora exata.',
    technicalHighlights: [
      'Boro na forma de poliboratos com rápida absorção cuticular',
      'Compatibilidade testada com misturas de tanque da safra mato-grossense',
      'Efeito de retenção floral com incremento de nós produtivos'
    ]
  },
  {
    id: 'agij-bio-root-force',
    name: 'AGIJ BIO ROOT® Force',
    subtitle: 'Bioestimulante Enraizador & Indutor de Resistência Abiótica',
    category: 'bioestimulantes',
    crops: ['soja', 'milho', 'algodao', 'feijao', 'pastagem'],
    badge: 'Máximo Vigor Inicial',
    imageUrl: 'https://images.pexels.com/photos/7944397/pexels-photo-7944397.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    photographerCredit: 'Foto: Ron Lach (Pexels Licença Comercial)',
    guarantees: [
      { label: 'Extrato de Ascophyllum Nodosum', value: '15,0%' },
      { label: 'Precursores Hormonais Naturais', value: 'Auxinas, Citocininas e Giberelinas balanceadas' },
      { label: 'Fósforo (P₂O₅)', value: '10,0%' },
      { label: 'Nitrogênio (N orgânico)', value: '4,0%' },
      { label: 'Extratos de Algas Marinhas', value: 'Grau Puro' }
    ],
    density: '1,22 g/cm³',
    nature: 'Fluido homogêneo',
    dosageRecommendation: '0,3 a 0,5 L/100kg de semente (TS) ou 0,5 a 1,0 L/ha foliar em V2-V3',
    applicationTiming: 'Tratamento de Sementes (TS) ou foliar inicial (V2-V4)',
    keyBenefits: [
      'Explosão de raízes secundárias e pelos absorventes nos primeiros 20 dias',
      'Superação rápida da barreira de dessecação residual no solo',
      'Tolerância acentuada a períodos de veranico pós-emergência',
      'Uniformidade e vigor absoluto no estande inicial de plantas'
    ],
    description: 'Extrato concentrado de algas marinhas puras enriquecido com nutrientes precursores enzimáticos. Desenvolvido para induzir o rápido aprofundamento do sistema radicular em busca de água e nutrientes nas camadas profundas.',
    technicalHighlights: [
      'Não interfere na viabilidade de inoculantes no Tratamento de Sementes',
      'Garante arranque vigoroso mesmo em solos arenosos ou de transição',
      'Ativa genes de defesa natural da planta contra estresse térmico'
    ]
  },
  {
    id: 'agij-grain-k-forte',
    name: 'AGIJ GRAIN K-FORTE® 00-00-30',
    subtitle: 'Potássio Livre de Cloro + Magnésio e Enxofre para Enchimento de Grãos',
    category: 'macronutrientes',
    crops: ['soja', 'milho', 'algodao'],
    badge: 'Peso Específico Elevado',
    imageUrl: 'https://images.pexels.com/photos/13094647/pexels-photo-13094647.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    photographerCredit: 'Foto: Mark Stebnicki (Pexels Licença Comercial)',
    guarantees: [
      { label: 'Potássio (K₂O solúvel)', value: '30,0% (420 g/L)' },
      { label: 'Enxofre (S)', value: '4,5% (63 g/L)' },
      { label: 'Magnésio (Mg)', value: '2,5% (35 g/L)' },
      { label: 'Índice Salino', value: 'Extremamente Baixo (Zero fitotoxidez)' }
    ],
    density: '1,40 g/cm³',
    nature: 'Solução concentrada límpida',
    dosageRecommendation: '1,5 a 3,0 L/ha em R3/R4 e R5.1/R5.3 na Soja e R1/R3 no Milho',
    applicationTiming: 'Fase de formação de vagens, espigamento e enchimento de grãos',
    keyBenefits: [
      'Translocação maciça de fotoassimilados para grãos, maçãs e espigas',
      'Grãos mais pesados (PMS elevado em até 8%) e menor percentual de chochos',
      'Manutenção da área foliar verde por mais tempo (Stay-Green prolongado)',
      '100% livre de Cloro: segurança total contra queima de folhas no calor'
    ],
    description: 'Fonte líquida de alta densidade de Potássio nobre combinado a Magnésio (núcleo da clorofila) e Enxofre para maximizar a conversão de açúcares foliares em proteína e óleo durante a fase crítica reprodutiva.',
    technicalHighlights: [
      'Potássio orgânico com pH tamponado e baixíssimo índice salino',
      'Elevada taxa de absorção mesmo em horários de alta radiação solar',
      'Aumenta o padrão de qualidade e classificação final na cooperativa/armazém'
    ]
  },
  {
    id: 'agij-phos-starter',
    name: 'AGIJ PHOS STARTER® 10-30-00',
    subtitle: 'Fósforo Polifosfatado Sistêmico com Alta Disponibilidade de Raiz',
    category: 'macronutrientes',
    crops: ['soja', 'milho', 'algodao', 'feijao'],
    badge: 'Liberação Rápida & Eficiente',
    imageUrl: 'https://images.pexels.com/photos/13094651/pexels-photo-13094651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    photographerCredit: 'Foto: Mark Stebnicki (Pexels Licença Comercial)',
    guarantees: [
      { label: 'Fósforo (P₂O₅ solúvel em água)', value: '30,0%' },
      { label: 'Nitrogênio (N)', value: '10,0%' },
      { label: 'Zinco (Zn solúvel)', value: '2,0%' },
      { label: 'Substâncias Húmicas Protetoras', value: '3,0%' }
    ],
    density: '1,35 g/cm³',
    nature: 'Fluido solúvel com cadeias polifosfatadas',
    dosageRecommendation: '5,0 a 15,0 L/ha no sulco de plantio ou 1,5 a 2,5 L/ha foliar',
    applicationTiming: 'Plantio no sulco ou dessecação/emergência',
    keyBenefits: [
      'Fósforo protegido contra fixação por óxidos de ferro e alumínio do solo',
      'Disponibilidade prolongada durante os primeiros 45 dias da cultura',
      'Maior desenvolvimento vegetativo inicial e fechamento precoce de entrelinhas',
      'Menor volume de calda e praticidade operacional na semeadura'
    ],
    description: 'Inovação em nutrição fosfatada de arranque. A estrutura molecular polifosfatada impede que o fósforo fique preso no solo do Cerrado, disponibilizando energia (ATP) direta para a plântula.',
    technicalHighlights: [
      'Tecnologia de Fósforo complexado de última geração',
      'Reduz a necessidade de adubação pesada granulada no sulco',
      'Excelente desempenho em áreas de abertura e reformas de pastagem'
    ]
  },
  {
    id: 'agij-ferti-drip-sol',
    name: 'AGIJ FERTI-DRIP® Complete NPK 15-05-30',
    subtitle: 'Adubo 100% Hidrossolúvel para Fertirrigação e Pivô Central',
    category: 'fertirrigacao',
    crops: ['soja', 'milho', 'feijao', 'pastagem'],
    badge: 'Grau Pivô & Gotejo',
    imageUrl: 'https://images.pexels.com/photos/17765472/pexels-photo-17765472.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    photographerCredit: 'Foto: Mark Stebnicki (Pexels Licença Comercial)',
    guarantees: [
      { label: 'Nitrogênio Total (N)', value: '15,0%' },
      { label: 'Fósforo (P₂O₅)', value: '5,0%' },
      { label: 'Potássio (K₂O)', value: '30,0%' },
      { label: 'Magnésio (Mg) + Enxofre (S)', value: '2,0% + 4,0%' },
      { label: 'Solubilidade em Água a 20°C', value: '350 g/L (100% solúvel)' }
    ],
    nature: 'Cristais hidrossolúveis ultrafinos',
    dosageRecommendation: 'Conforme curva de fertirrigação (15 a 50 kg/ha por aplicação via pivô)',
    applicationTiming: 'Fracionamento via pivô central ou gotejamento durante o ciclo',
    keyBenefits: [
      'Zero resíduos ou sedimentos: protege emissores e bicos de pivô',
      'Nutrição sob demanda para áreas irrigadas no Médio-Norte de MT',
      'Rápida correção de carências nutricionais em fases críticas',
      'Aproveitamento de até 95% dos nutrientes aplicados pela água'
    ],
    description: 'Composto mineral hidrossolúvel de grau técnico puro, com condutividade elétrica controlada e rápida assimilação, especialmente indicado para culturas sob pivô central em Sorriso e região.',
    technicalHighlights: [
      'Dissolução instantânea em água fria sem formação de grumos',
      'Pureza elevada livre de sódio e metais pesados',
      'Ideal para ciclos intensivos de feijão, milho semente e soja irrigada'
    ]
  }
];
