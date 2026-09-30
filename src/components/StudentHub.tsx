import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  BookOpen,
  Microscope,
  ArrowRightLeft,
  FileText,
  Copy,
  Check,
  ExternalLink,
  Search,
  Filter,
  Layers,
  Sparkles,
  Download,
  Printer,
  ChevronRight,
  RotateCcw,
  CheckCircle2,
  BookmarkCheck,
  Database,
  Building,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { Language, Parasite, ScientificSource } from '../types/parasite';
import { allParasites } from '../data';

interface StudentHubProps {
  language: Language;
  onSelectParasite: (parasite: Parasite) => void;
}

type StudentSubTab = 'sources' | 'diagnostic-key' | 'comparator' | 'flashcards' | 'datasets';

interface Flashcard {
  id: number;
  question: { ar: string; en: string; fr: string };
  category: { ar: string; en: string; fr: string };
  hint: { ar: string; en: string; fr: string };
  answer: { ar: string; en: string; fr: string };
  diagnosticTip: { ar: string; en: string; fr: string };
  sourceOrg: string;
}

export const StudentHub: React.FC<StudentHubProps> = ({ language, onSelectParasite }) => {
  const [activeSubTab, setActiveSubTab] = useState<StudentSubTab>('sources');
  const [sourceSearch, setSourceSearch] = useState('');
  const [sourceOrgFilter, setSourceOrgFilter] = useState<string>('all');
  const [citationFormat, setCitationFormat] = useState<'apa' | 'vancouver' | 'harvard'>('apa');
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);

  // Comparator states
  const [parasiteAId, setParasiteAId] = useState<string>(allParasites[5]?.id || allParasites[0].id); // Ancylostoma default
  const [parasiteBId, setParasiteBId] = useState<string>(allParasites[6]?.id || allParasites[1].id); // Ascaris default

  // Diagnostic Key states
  const [selectedSampleType, setSelectedSampleType] = useState<string>('all');
  const [keySearch, setKeySearch] = useState<string>('');

  // Flashcards states
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<number[]>([]);

  // Collect all scientific sources across all parasites with attached parasite info
  const allSourcesWithContext = useMemo(() => {
    const list: Array<{ source: ScientificSource; parasite: Parasite }> = [];
    allParasites.forEach((p) => {
      p.scientificSources.forEach((s) => {
        list.push({ source: s, parasite: p });
      });
    });
    return list;
  }, []);

  // Filtered sources
  const filteredSources = useMemo(() => {
    const q = sourceSearch.toLowerCase().trim();
    return allSourcesWithContext.filter(({ source, parasite }) => {
      if (sourceOrgFilter !== 'all') {
        const org = source.organization.toLowerCase();
        if (sourceOrgFilter === 'cdc' && !org.includes('cdc') && !org.includes('centers for disease')) return false;
        if (sourceOrgFilter === 'who' && !org.includes('who') && !org.includes('world health')) return false;
        if (sourceOrgFilter === 'woah' && !org.includes('woah') && !org.includes('animal health')) return false;
        if (sourceOrgFilter === 'journals' && !org.includes('lancet') && !org.includes('pubmed') && !org.includes('pediatrics')) return false;
      }
      if (!q) return true;
      return (
        source.title.toLowerCase().includes(q) ||
        source.organization.toLowerCase().includes(q) ||
        parasite.scientificName.toLowerCase().includes(q) ||
        parasite.commonNames[language].toLowerCase().includes(q)
      );
    });
  }, [allSourcesWithContext, sourceSearch, sourceOrgFilter, language]);

  // Formatter for Academic Citations
  const formatCitation = (source: ScientificSource, parasite: Parasite, format: 'apa' | 'vancouver' | 'harvard') => {
    const org = source.organization;
    const year = source.year;
    const title = source.title;
    const url = source.url;

    if (format === 'apa') {
      return `${org}. (${year}). ${title} [Monograph & Diagnostic Protocol on ${parasite.scientificName}]. Retrieved from ${url}`;
    } else if (format === 'vancouver') {
      return `${org}. ${title} [Internet]. ${year} [cited ${new Date().getFullYear()}]. Available from: ${url}`;
    } else {
      // Harvard
      return `${org}, ${year}. ${title} (${parasite.scientificName}). [online] Available at: <${url}> [Accessed ${new Date().toLocaleDateString()}].`;
    }
  };

  const handleCopyCitation = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCitation(text);
    setTimeout(() => setCopiedCitation(null), 2500);
  };

  // High-yield Student Flashcards
  const flashcards: Flashcard[] = [
    {
      id: 1,
      category: { ar: 'ديدان خيطية (Nematodes)', en: 'Nematodes', fr: 'Nématodes' },
      question: {
        ar: 'بيضة بيضاوية ذات قشرة زجاجية رقيقة جداً وشفافة، بداخلها كتلة توتية (Morula) من 4–8 خلايا. ما هو الطفيلي وما هي العلامة السريرية المميزة له؟',
        en: 'Oval egg with exceptionally thin, hyaline, transparent shell containing a morula of 4–8 blastomeres in fresh stool. What is the parasite and classic sign?',
        fr: 'Œuf ovoïde à coque très mince hyaline transparente avec morula de 4 à 8 blastomères dans selles fraîches. Quel est le parasite ?'
      },
      hint: {
        ar: 'دودة ممتصة للدماء وتسبب فقر دم شديد ويرقات مهاجرة بالجلد (CLM)',
        en: 'Blood-feeding geohelminth causing microcytic hypochromic anemia & creeping eruption',
        fr: 'Géohelminthe hématophage provoquant anémie ferriprive et Larva Migrans cutanée'
      },
      answer: {
        ar: 'الأنكلستوما / الدودة الشصية (Ancylostoma duodenale / Ancylostoma caninum). تفرز بيوضاً رقيقة القشرة بقطر 55–75 ميكرومتر، وتسبب فقر دم شديد بنقص الحديد بنزف 0.2 مل دم لكل دودة يومياً.',
        en: 'Hookworm (Ancylostoma duodenale / A. caninum). Dimensions: 55–75 x 35–45 µm. Diagnostic golden standard: Fecal flotation. Causes severe iron-deficiency anemia.',
        fr: 'Ankylostome (Ancylostoma duodenale / caninum). Dimensions : 55–75 µm. Diagnostic : flottation fécale. Provoque une anémie ferriprive majeure.'
      },
      diagnosticTip: {
        ar: 'التشخيص: تعويم البراز بكبريتات الزنك (Zinc Sulfate) أو زرع اليرقات بهارادا-موري للتفريق عن الأسطوانيات.',
        en: 'Harada-Mori filter paper fecal culture distinguishes filariform larvae from Strongyloides.',
        fr: 'La coproculture de Harada-Mori permet de distinguer les larves L3 d\'ankylostome de Strongyloides.'
      },
      sourceOrg: 'CDC DPDx & WHO'
    },
    {
      id: 2,
      category: { ar: 'ديدان مثقوبة (Trematodes)', en: 'Trematodes (Flukes)', fr: 'Trématodes' },
      question: {
        ar: 'بيضة كبيرة صفراء-بنية ذات غطاء واضح (Operculated egg) بقطر 130–150 ميكرومتر تطرح في براز الأغنام والأبقار والإنسان. ما الطفيلي وما العائل الوسيط؟',
        en: 'Large golden-brown operculated egg (130–150 µm) with distinct opercular lid at one pole. What parasite and intermediate host?',
        fr: 'Grand œuf operculé brun-doré (130–150 µm) avec clapet polaire net dans les fèces de ruminants. Quel parasite et hôte intermédiaire ?'
      },
      hint: {
        ar: 'طفيلي الأقنية الصفراوية المرتبط بقواقع مياه البرك والمستنقعات (Lymnaea)',
        en: 'Biliary fluke transmitted via amphibious mud snails (Lymnaea/Galba)',
        fr: 'Douve biliaire transmise par les limnées d\'eau douce'
      },
      answer: {
        ar: 'المثقوبة الكبدية الكبيرة (Fasciola hepatica). العائل الوسيط قوقع المياه العذبة ليمنايا (Galba truncatula)، والعدوى بابتلاع الميتاسركاريا المتكيسة على نباتات الجرجير البري والماء.',
        en: 'Common Liver Fluke (Fasciola hepatica). Intermediate host: Galba/Lymnaea mud snails. Infective stage: encysted metacercariae on watercress. Causes sheep liver rot and biliary colic.',
        fr: 'Grande Douve du Foie (Fasciola hepatica). Hôte intermédiaire : limnée tronquée (Galba truncatula). Forme infestante : métacercaires enkystées sur le cresson sauvage.'
      },
      diagnosticTip: {
        ar: 'الترسيب البرازي (Fecal sedimentation) أفضل بكثير من التعويم لأن بيوض المثقوبات ثقيلة وترسب بالقاع.',
        en: 'Fecal sedimentation is mandatory over flotation because fluke operculated eggs are too dense to float well.',
        fr: 'La sédimentation fécale est impérative car les œufs operculés denses coulent au fond.'
      },
      sourceOrg: 'WOAH Terrestrial Manual & CDC'
    },
    {
      id: 3,
      category: { ar: 'ديدان شريطية (Cestodes)', en: 'Cestodes (Tapeworms)', fr: 'Cestodes' },
      question: {
        ar: 'بيضة كروية (30–35 µm) ذات غلاف سميك محفور بتخطيطات شعاعية منتظمة تشبه عجلات العربة وبداخلها جنين سداسي الأشواك. ما هذا الطفيلي وكيف نفرق نوعيه؟',
        en: 'Spherical egg (30–35 µm) with thick radially striated embryophore and hexacanth oncosphere. How to differentiate the 2 major species?',
        fr: 'Œuf sphérique (30–35 µm) à coque épaisse striée radiairement contenant 6 crochets. Comment différencier les 2 espèces majeures ?'
      },
      hint: {
        ar: 'الدودة الشريطية البقرية مقابل دودة الخنزير المسلحة، وتعداد التفرعات الرحمية',
        en: 'Beef vs pork tapeworm; count lateral uterine branches in gravid proglottids',
        fr: 'Ténia du bœuf vs ténia du porc ; comptage des branches utérines des anneaux'
      },
      answer: {
        ar: 'بيوض جنس الدودة الشريطية (Taenia saginata / Taenia solium). البيوض متطابقة مجهرياً تماماً ولا يمكن التفريق بينها إلا بفحص القطع الحبلى بحبر الصين: تينيا البقر تحتوي 15–30 تفرعاً رحمياً، وتينيا الخنزير تحتوي 7–13 تفرعاً فقط.',
        en: 'Taenia species (T. saginata and T. solium). Eggs are morphologically identical. Species differentiation requires gravid proglottids: T. saginata has 15–30 lateral uterine branches; T. solium has 7–13 branches and an armed scolex.',
        fr: 'Genre Tænia (T. saginata et T. solium). Les œufs sont indiscernables. Différenciation par injection des proglottis : 15 à 30 branches utérines chez saginata vs 7 à 13 chez solium.'
      },
      diagnosticTip: {
        ar: 'خطر حيوي: بيوض Taenia solium معدية للإنسان مباشرة مسببة داء الكيسات المذنبة الدماغية (Neurocysticercosis).',
        en: 'Critical biosafety: T. solium eggs are infectious to humans, causing fatal neurocysticercosis.',
        fr: 'Alerte sécurité : les œufs de T. solium sont infectieux pour l\'Homme et causent la neurocysticercose.'
      },
      sourceOrg: 'WHO Guidelines on Neurocysticercosis'
    },
    {
      id: 4,
      category: { ar: 'أوالي معوية (Protozoa)', en: 'Protozoa', fr: 'Protozoaires' },
      question: {
        ar: 'أكياس كروية صغيرة جداً (4–6 ميكرومتر) تصبغ باللون الأحمر الوردي الفاقع (Acid-Fast) عند تلوينها بطريقة تسيل-نلسن المعدلة. ما التشخيص؟',
        en: 'Tiny spherical oocysts (4–6 µm) staining bright red-pink with Modified Kinyoun acid-fast stain. What is the diagnosis?',
        fr: 'Très petits oocystes sphériques (4–6 µm) rose-fuchsia acido-résistants au Ziehl-Neelsen modifié. Quel est le diagnostic ?'
      },
      hint: {
        ar: 'مسبب إسهال العجول المائي وإسهال مهدد للحياة في مرضى نقص المناعة',
        en: 'Major cause of watery neonatal calf scour and refractory diarrhea in HIV patients',
        fr: 'Agent majeur de diarrhée néonatale chez le veau et d\'entérite chez l\'immunodéprimé'
      },
      answer: {
        ar: 'خفية الأبواغ (Cryptosporidium parvum / Cryptosporidium hominis). قطرها 4–6 µm، مقاومة جداً للكلور، تحتوي على 4 أبواغ هلالية، وتظهر إيجابية صبغة الحمض (Acid-Fast positive).',
        en: 'Cryptosporidium species (C. parvum / C. hominis). Dimensions: 4–6 µm. Highly chlorine resistant. Diagnosed with Modified Acid-Fast Kinyoun stain or Direct Immunofluorescence (DFA).',
        fr: 'Cryptosporidium (C. parvum / C. hominis). Taille : 4–6 µm. Résistant au chlore. Diagnostic au Ziehl-Neelsen modifié ou immunofluorescence directe.'
      },
      diagnosticTip: {
        ar: 'التشخيص المعياري الذهبي المعتمد: فحص الفلورة المناعية المباشرة (DFA) أو شرائط الكروماتوغرافيا السريعة.',
        en: 'Direct Immunofluorescence Assay (DFA) is the gold standard diagnostic method with highest sensitivity.',
        fr: 'L\'immunofluorescence directe (DFA) est la méthode de référence pour la confirmation.'
      },
      sourceOrg: 'CDC DPDx & WOAH'
    },
    {
      id: 5,
      category: { ar: 'أوالي دموية (Blood Protozoa)', en: 'Blood Protozoa', fr: 'Protozoaires sanguins' },
      question: {
        ar: 'أطوار حلقية رقيقة وناعمة كشكل سماعة الرأس (Headphone ring) مع أشكال هلالية / موذية مميزة في لطاخة دم رقيقة ملونة بجيمسا. ما هو هذا الطفيلي؟',
        en: 'Delicate fine ring forms with headphone double-chromatin dots and pathognomonic crescent/banana-shaped gametocytes in Giemsa blood smear. What is it?',
        fr: 'Fins anneaux trophozoïtes en écouteur et gamétocytes typiques en croissant ou banane au frottis Giemsa. Quel parasite ?'
      },
      hint: {
        ar: 'أخطر طفيليات الملاريا المسببة للملاريا الدماغية المنجلية القاتلة',
        en: 'Deadliest malaria species causing microvascular sequestration and cerebral malaria',
        fr: 'Agent du paludisme malin responsable du neuropaludisme'
      },
      answer: {
        ar: 'المتصورة المنجلية (Plasmodium falciparum). تتميز بأعراس هلالية الشكل متباينة عن باقي أنواع البلازموديوم، وإصابة متعددة لنفس الكرية الحمراء، دون تضخم حجم الكرية.',
        en: 'Plasmodium falciparum. Banana/crescent gametocytes are pathognomonic. Causes microvascular sequestration of infected erythrocytes leading to cerebral malaria.',
        fr: 'Plasmodium falciparum. Les gamétocytes falciformes sont pathognomoniques. Responsable de séquestration microvasculaire et neuropaludisme.'
      },
      diagnosticTip: {
        ar: 'اللطاخة السميكة (Thick blood smear) لكشف وجود الطفيلي بحساسية عالية، واللطاخة الرقيقة (Thin smear) للتحديد النوعي الدقيق.',
        en: 'Thick blood film for sensitive parasite detection; thin blood film for precise species differentiation.',
        fr: 'Goutte épaisse pour le dépistage sensible ; frottis mince pour la diagnose d\'espèce.'
      },
      sourceOrg: 'WHO Malaria Guidelines'
    },
    {
      id: 6,
      category: { ar: 'ديدان خيطية (Nematodes)', en: 'Nematodes', fr: 'Nématodes' },
      question: {
        ar: 'بيضة شفافة غير متناظرة بشكل حرف "D" (مسطحة من جانب ومحدبة من الآخر) تؤخذ بشريط السيلوفان اللاصق من حول الشرج صباحاً. ما اسم الطفيلي؟',
        en: 'Transparent asymmetrical D-shaped egg (one flat side, one convex side) sampled via cellophane tape perianally in morning. What is the parasite?',
        fr: 'Œuf translucide asymétrique en "D" prélevé au ruban adhésif péri-anal le matin. Quel est le nom du parasite ?'
      },
      hint: {
        ar: 'الدودة الأكثر شيوعاً عند أطفال المدارس مسببة حكة شرجية ليلية شديدة وأرق',
        en: 'Most common helminth in school children causing intense nocturnal pruritus ani',
        fr: 'Helminthe le plus fréquent chez l\'enfant causant prurit anal nocturne'
      },
      answer: {
        ar: 'الدودة الدبوسية / الحرقص (Enterobius vermicularis). قياساتها 50–60 x 20–30 ميكرومتر. فحص البراز العادي غالباً سلبي؛ التشخيص القياسي هو اختبار شريط السيلوفان اللاصق (Scotch-tape test).',
        en: 'Pinworm (Enterobius vermicularis). Dimensions: 50–60 x 20–30 µm. Standard stool exam is negative in 95% of cases; diagnostic standard is Graham Scotch-tape test upon waking.',
        fr: 'Oxyure (Enterobius vermicularis). Taille : 50–60 µm. L\'examen de selles est inefficace ; le Scotch-test anal au réveil est le test de référence.'
      },
      diagnosticTip: {
        ar: 'القاعدة السريرية: علاج جميع أفراد الأسرة في نفس اليوم، وتكرار الجرعة بعد أسبوعين حتماً.',
        en: 'Mandatory clinical rule: Treat all household family contacts simultaneously and repeat dose after 14 days.',
        fr: 'Règle clinique impérative : traiter tous les membres du foyer et renouveler la prise à J15.'
      },
      sourceOrg: 'CDC DPDx & AAP'
    }
  ];

  // Microscopic Diagnostic Key Database
  const diagnosticKeyItems = useMemo(() => {
    return allParasites.map((p) => {
      const diagStage = p.morphology.diagnosticStages.join(' · ');
      let sampleType = 'Stool / Feces';
      if (p.id.includes('plasmodium') || p.id.includes('dirofilaria')) sampleType = 'Blood';
      else if (p.id.includes('sarcoptes')) sampleType = 'Skin scraping';
      else if (p.id.includes('schistosoma')) sampleType = 'Urine & Stool';
      else if (p.id.includes('enterobius')) sampleType = 'Perianal tape';

      return {
        id: p.id,
        parasite: p,
        sampleType,
        diagnosticStage: diagStage,
        dimensions: p.morphology.dimensions,
        features: p.morphology.microscopicFeatures[language],
        stainMethod: p.morphology.stainingAndDiagnosticMethods[language]
      };
    }).filter((item) => {
      if (selectedSampleType !== 'all') {
        if (!item.sampleType.toLowerCase().includes(selectedSampleType.toLowerCase())) return false;
      }
      if (!keySearch) return true;
      const q = keySearch.toLowerCase();
      return (
        item.parasite.scientificName.toLowerCase().includes(q) ||
        item.parasite.commonNames[language].toLowerCase().includes(q) ||
        item.dimensions.toLowerCase().includes(q) ||
        item.features.toLowerCase().includes(q)
      );
    });
  }, [language, selectedSampleType, keySearch]);

  // Comparator Parasites
  const parasiteA = allParasites.find((p) => p.id === parasiteAId) || allParasites[0];
  const parasiteB = allParasites.find((p) => p.id === parasiteBId) || allParasites[1];

  // Open-Access Datasets Database for Students & Researchers
  const openDatasets = [
    {
      title: 'CDC Public Health Image Library (PHIL) - Parasitology Section',
      institution: 'Centers for Disease Control and Prevention (CDC)',
      imagesCount: '5,000+ High-Resolution Clinical Micrographs',
      license: 'Public Domain / Free for Educational & Research Use',
      description: {
        ar: 'مستودع رسمي مفتوح يحتوي على آلاف الصور المجهرية الحقيقية الملتقطة بأحدث الميكروسكوبات لبيوض الديدان، الأوالي، واليرقات.',
        en: 'Official open public health repository with thousands of peer-reviewed clinical micrographs of parasite eggs, cysts, and larvae.',
        fr: 'Référentiel public officiel contenant des milliers de micrographies cliniques validées de kystes, œufs et larves.'
      },
      recommendedFor: 'TFLite Model Training, Student Seminars, Medical Atlases',
      url: 'https://phil.cdc.gov/'
    },
    {
      title: 'Kaggle Malaria Cell Images Dataset (NIH / NLM)',
      institution: 'National Institutes of Health (NIH) & National Library of Medicine',
      imagesCount: '27,558 Giemsa-stained Blood Cell Micrographs',
      license: 'Open Access / Creative Commons',
      description: {
        ar: 'مجموعة بيانات ضخمة ومصنفة بدقة عالية لخلايا الدم المصابة بالمتصورة المنجلية وخلايا الدم السليمة لتدريب نماذج الذكاء الاصطناعي.',
        en: 'Extensive benchmark dataset containing 27,558 segmented Giemsa blood cell images (Parasitized vs Uninfected) for computer vision training.',
        fr: 'Jeu de données de référence de 27 558 frottis au Giemsa étiquetés pour l\'entraînement d\'algorithmes d\'apprentissage automatique.'
      },
      recommendedFor: 'Deep Learning / CNN Classification, TFLite Mobile Deployment',
      url: 'https://www.kaggle.com/datasets/iarunava/cell-images-for-detecting-malaria'
    },
    {
      title: 'Chula Parasite Egg Dataset (Mendeley Data)',
      institution: 'Chulalongkorn University & Mendeley Data',
      imagesCount: '11,000+ Annotated Fecal Microscopic Images',
      license: 'CC BY 4.0 Open Access',
      description: {
        ar: 'مجموعة بيانات مجهرية متخصصة لبيوض الطفيليات البرازية الأكثر شيوعاً (الأنكلستوما، الأسكاريس، التريخيورس، الدودة الشريطية، الجيارديا).',
        en: 'Standardized open dataset featuring 11 helminth and protozoan species from fecal concentrates with expert bounding box annotations.',
        fr: 'Base de données annotée de 11 espèces d\'helminthes et protozoaires fécaux pour le diagnostic microscopique assisté.'
      },
      recommendedFor: 'Object Detection (YOLO / SSD), Classification TFLite Models',
      url: 'https://data.mendeley.com/datasets/52579883v7/1'
    },
    {
      title: 'Zenodo Open Parasitology & Neglected Tropical Diseases Repository',
      institution: 'CERN & OpenAIRE European Commission Research',
      imagesCount: 'Hundreds of Research Projects & Datasets',
      license: 'Open Access (Various CC Licenses)',
      description: {
        ar: 'مستودع أكاديمي أوروبي للمجموعات البحثية والبيانات المخبرية لديدان البلهارسيا، الليشمانيا، المثقوبات الكبدية، والديدان الشصية.',
        en: 'Open European research repository hosting specialized datasets for Schistosoma, Leishmania, Fasciola, and Echinococcus.',
        fr: 'Dépôt académique ouvert regroupant jeux de données et images sur la bilharziose, la leishmaniose et l\'échinococcose.'
      },
      recommendedFor: 'Academic Thesis, Genomic & Morphological Research',
      url: 'https://zenodo.org/search?q=parasitology'
    }
  ];

  const handlePrintStudentGuide = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Top Academic Hero Banner */}
      <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/30 p-6 sm:p-8 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>
              {language === 'ar'
                ? 'مرجع الطالب والباحث الأكاديمي المعتمد'
                : language === 'fr'
                ? 'Référentiel Académique & Pédagogique pour Étudiants'
                : 'Accredited Academic Student & Researcher Hub'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {language === 'ar'
              ? 'الموسوعة الشاملة ودليل المراجع والمصادر العلمية للطفيليات'
              : language === 'fr'
              ? 'Encyclopédie Intégrée & Guide des Sources Scientifiques'
              : 'Integrated Parasitology Atlas & Accredited Scientific Sources'}
          </h1>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'ar'
              ? 'منصة أكاديمية موحدة تجمع كافة الطفيليات الطبية والبيطرية بالمصادر الرسمية المعتمدة (CDC DPDx, WHO, WOAH)، ومفتاح التشخيص المجهري، ومولد الاقتباسات الأكاديمية (APA/Vancouver)، وبطاقات المراجعة للامتحانات، ومستودعات البيانات المفتوحة.'
              : language === 'fr'
              ? 'Plateforme intégrée rassemblant l\'ensemble des parasites médicaux et vétérinaires avec leurs sources validées (CDC DPDx, OMS, OMSA), clé diagnostique au microscope, générateur de citations et banques de données ouvertes.'
              : 'An integrated reference hub gathering all medical and veterinary parasites with verified scientific sources (CDC DPDx, WHO, WOAH), microscopic keys, academic citation generators, flashcards, and open datasets.'}
          </p>

          {/* Quick Metrics */}
          <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-emerald-400 font-mono">{allParasites.length}</span>
              <span>{language === 'ar' ? 'طفيلي مفصل بالكامل' : 'Detailed Monographs'}</span>
            </div>
            <span className="text-slate-700">·</span>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-teal-400 font-mono">{allSourcesWithContext.length}</span>
              <span>{language === 'ar' ? 'مرجع معتمد موثق بالرابط' : 'Accredited Peer Sources'}</span>
            </div>
            <span className="text-slate-700">·</span>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-cyan-400 font-mono">100%</span>
              <span>{language === 'ar' ? 'مفتاح مجهري ومولد اقتباسات' : 'Diagnostic Key & Citations'}</span>
            </div>
          </div>
        </div>

        {/* Action button in hero */}
        <div className="relative z-10 pt-4 flex flex-wrap gap-3">
          <button
            onClick={handlePrintStudentGuide}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-semibold text-slate-200 transition-colors shadow-md"
          >
            <Printer className="w-4 h-4 text-emerald-400" />
            <span>{language === 'ar' ? 'طباعة دليل الطالب الميداني' : 'Print Student Field Reference'}</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto scrollbar-none">
        {[
          {
            id: 'sources',
            label: language === 'ar' ? 'المراجع والمصادر الرسمية' : language === 'fr' ? 'Sources & Références' : 'Sources & References',
            icon: BookOpen
          },
          {
            id: 'diagnostic-key',
            label: language === 'ar' ? 'المفتاح التشخيصي المجهري' : language === 'fr' ? 'Clé Diagnostique Microscope' : 'Microscopic Diagnostic Key',
            icon: Microscope
          },
          {
            id: 'comparator',
            label: language === 'ar' ? 'المقارنة المزدوجة بين الطفيليات' : language === 'fr' ? 'Comparateur Clinique' : 'Side-by-Side Comparator',
            icon: ArrowRightLeft
          },
          {
            id: 'flashcards',
            label: language === 'ar' ? 'بطاقات المراجعة الذكية للطلاب' : language === 'fr' ? 'Flashcards de Révision' : 'Exam Flashcards',
            icon: Layers
          },
          {
            id: 'datasets',
            label: language === 'ar' ? 'مستودع البيانات المفتوحة للتدريب' : language === 'fr' ? 'Banques d\'Images Ouvertes' : 'Open Datasets & Training',
            icon: Database
          }
        ].map((subTab) => {
          const Icon = subTab.icon;
          const isActive = activeSubTab === subTab.id;
          return (
            <button
              key={subTab.id}
              onClick={() => setActiveSubTab(subTab.id as StudentSubTab)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg shrink-0 transition-all ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{subTab.label}</span>
            </button>
          );
        })}
      </div>

      {/* SUBTAB 1: SCIENTIFIC SOURCES & ACCREDITED REFERENCES DIRECTORY */}
      {activeSubTab === 'sources' && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 text-slate-400 ltr:left-3 rtl:right-3 pointer-events-none" />
              <input
                type="text"
                value={sourceSearch}
                onChange={(e) => setSourceSearch(e.target.value)}
                placeholder={
                  language === 'ar'
                    ? 'ابحث في المراجع بالاسم، المؤسسة (CDC, WHO, WOAH)، أو الطفيلي...'
                    : 'Search citations by title, organization (CDC, WHO, WOAH), or parasite...'
                }
                className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg py-2.5 ltr:pl-9 ltr:pr-3 rtl:pr-9 rtl:pl-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Filter by Organization */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 shrink-0 font-medium">
                {language === 'ar' ? 'المؤسسة:' : 'Organization:'}
              </span>
              <select
                value={sourceOrgFilter}
                onChange={(e) => setSourceOrgFilter(e.target.value)}
                className="text-xs bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500"
              >
                <option value="all">{language === 'ar' ? 'كافة المنظمات الدولية' : 'All Organizations'}</option>
                <option value="cdc">CDC DPDx (مراكز مكافحة الأمراض الأمريكية)</option>
                <option value="who">WHO (منظمة الصحة العالمية)</option>
                <option value="woah">WOAH (المنظمة العالمية لصحة الحيوان)</option>
                <option value="journals">Peer-Reviewed Journals (PubMed, Lancet)</option>
              </select>
            </div>

            {/* Citation Format Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg">
              <span className="text-[11px] text-slate-400 px-2 font-medium">
                {language === 'ar' ? 'نمط التوثيق:' : 'Citation Format:'}
              </span>
              {(['apa', 'vancouver', 'harvard'] as const).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setCitationFormat(fmt)}
                  className={`px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded ${
                    citationFormat === fmt ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>

          {/* Sources Count */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              {language === 'ar' ? 'تم العثور على' : 'Found'}{' '}
              <strong className="text-emerald-400 font-mono">{filteredSources.length}</strong>{' '}
              {language === 'ar' ? 'مرجع علمي معتمد بروابط كاملة' : 'verified scientific references'}
            </span>
            <span className="text-[11px] text-slate-500">
              {language === 'ar'
                ? 'يمكنك نسخ الاقتباس بضغطة زر لإضافته مباشرة في بحثك الجامعي أو رسالتك'
                : 'One-click copy citations formatted for research papers or university thesis'}
            </span>
          </div>

          {/* Sources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSources.map(({ source, parasite }, idx) => {
              const formattedText = formatCitation(source, parasite, citationFormat);
              const isCopied = copiedCitation === formattedText;

              return (
                <div
                  key={`${parasite.id}-${idx}`}
                  className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl space-y-3 hover:border-slate-700 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <button
                        onClick={() => onSelectParasite(parasite)}
                        className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 text-left truncate flex items-center gap-1.5"
                      >
                        <Microscope className="w-3.5 h-3.5 shrink-0" />
                        <span className="italic">{parasite.scientificName}</span>
                      </button>

                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {source.citationType}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-100 group-hover:text-emerald-200 transition-colors">
                      {source.title}
                    </h4>

                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 font-semibold text-slate-300">
                        <Building className="w-3 h-3 text-emerald-500" />
                        {source.organization}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 font-mono text-slate-400">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {source.year}
                      </span>
                    </div>

                    {/* Pre-formatted citation display box */}
                    <div className="p-2.5 bg-slate-950 border border-slate-800/80 rounded-lg text-[11px] text-slate-300 font-mono select-all leading-relaxed break-all">
                      {formattedText}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleCopyCitation(formattedText)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors"
                      title="Copy formatted citation"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">
                            {language === 'ar' ? 'تم نسخ التوثيق!' : 'Copied!'}
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>
                            {language === 'ar' ? `نسخ بتنسيق ${citationFormat.toUpperCase()}` : `Copy ${citationFormat.toUpperCase()}`}
                          </span>
                        </>
                      )}
                    </button>

                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      <span>{language === 'ar' ? 'فتح المرجع الأصلي' : 'Open Source Link'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUBTAB 2: MICROSCOPIC DIAGNOSTIC KEY */}
      {activeSubTab === 'diagnostic-key' && (
        <div className="space-y-6">
          {/* Diagnostic Key Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 text-slate-400 ltr:left-3 rtl:right-3 pointer-events-none" />
              <input
                type="text"
                value={keySearch}
                onChange={(e) => setKeySearch(e.target.value)}
                placeholder={
                  language === 'ar'
                    ? 'ابحث عن صفة مجهرية (مثلاً: رقيقة القشرة، شوكة جانبية، أكياس، ميكرومتر...)'
                    : 'Search microscopic criteria (e.g., thin shell, lateral spine, acid-fast, µm)...'
                }
                className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg py-2.5 ltr:pl-9 ltr:pr-3 rtl:pr-9 rtl:pl-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Specimen Category Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 shrink-0 font-medium">
                {language === 'ar' ? 'نوع العينة المخبرية:' : 'Specimen Type:'}
              </span>
              <select
                value={selectedSampleType}
                onChange={(e) => setSelectedSampleType(e.target.value)}
                className="text-xs bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500"
              >
                <option value="all">{language === 'ar' ? 'كافة العينات' : 'All Specimen Types'}</option>
                <option value="Stool">{language === 'ar' ? 'براز / مسحة معوية (Fecal/Stool)' : 'Stool / Feces'}</option>
                <option value="Blood">{language === 'ar' ? 'لطاخة دم محيطي (Blood Film)' : 'Peripheral Blood Film'}</option>
                <option value="Urine">{language === 'ar' ? 'راسب البول (Urine Sediment)' : 'Urine Sediment'}</option>
                <option value="Skin">{language === 'ar' ? 'كشاطة جلدية (Skin Scraping)' : 'Skin Scraping'}</option>
                <option value="Perianal">{language === 'ar' ? 'شريط لاصق شرجي (Perianal Tape)' : 'Perianal Tape'}</option>
              </select>
            </div>
          </div>

          {/* Staining & Concentration Protocols Quick Guide */}
          <div className="p-4 bg-slate-950 border border-emerald-500/20 rounded-xl space-y-3">
            <h3 className="text-xs font-bold text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>
                {language === 'ar'
                  ? 'بروتوكولات الترسيب والصبغ المخبري المعتمدة للطلاب (Laboratory Staining Standards)'
                  : 'Accredited Laboratory Staining & Concentration Protocols for Students'}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg space-y-1">
                <span className="font-bold text-slate-200">1. Formalin-Ethyl Acetate / ZnSO4</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {language === 'ar'
                    ? 'الترسيب بالفورمالين-إيثيل أسيتات لتركيز بيوض الديدان الثقيلة، والتعويم بكبريتات الزنك لكشف الأكياس وبيوض الأنكلستوما.'
                    : 'Formalin-ethyl acetate concentration for dense fluke/tapeworm eggs; zinc sulfate flotation for cysts and hookworm ova.'}
                </p>
              </div>
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg space-y-1">
                <span className="font-bold text-slate-200">2. Giemsa / Field's Blood Stain</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {language === 'ar'
                    ? 'اللطاخة السميكة بحساسية 100% لكشف الملاريا والبابيزيا، واللطاخة الرقيقة للتفريق المورفولوجي الدقيق.'
                    : 'Thick blood film for sensitive screening of Plasmodium/Babesia; thin smear fixed in methanol for species identification.'}
                </p>
              </div>
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg space-y-1">
                <span className="font-bold text-slate-200">3. Modified Kinyoun Acid-Fast</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {language === 'ar'
                    ? 'تصبغ أكياس الكريبتوسبوريديوم بلون أحمر قرمزي فاقع على خلفية خضراء أو زرقاء (4–6 ميكرومتر).'
                    : 'Cryptosporidium and Cyclospora stain bright fuchsia-red against a contrasting green/blue background (4–6 µm).'}
                </p>
              </div>
            </div>
          </div>

          {/* Diagnostic Key Table */}
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/70">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-semibold uppercase text-[11px]">
                  <tr>
                    <th className="py-3 px-4 text-left rtl:text-right">{language === 'ar' ? 'الطفيلي' : 'Parasite'}</th>
                    <th className="py-3 px-4 text-left rtl:text-right">{language === 'ar' ? 'العينة' : 'Specimen'}</th>
                    <th className="py-3 px-4 text-left rtl:text-right">{language === 'ar' ? 'الأبعاد (µm)' : 'Size (µm)'}</th>
                    <th className="py-3 px-4 text-left rtl:text-right">{language === 'ar' ? 'السمات المورفولوجية المميزة' : 'Diagnostic Morphology'}</th>
                    <th className="py-3 px-4 text-left rtl:text-right">{language === 'ar' ? 'طريقة الفحص والصبغ' : 'Method / Stain'}</th>
                    <th className="py-3 px-4 text-center">{language === 'ar' ? 'التفاصيل' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {diagnosticKeyItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 font-medium text-slate-100">
                        <div className="font-bold text-emerald-400 italic">{item.parasite.scientificName}</div>
                        <div className="text-[11px] text-slate-400">{item.parasite.commonNames[language]}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 border border-slate-700 text-slate-300 whitespace-nowrap">
                          {item.sampleType}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-emerald-300 font-bold whitespace-nowrap">
                        {item.dimensions}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 leading-relaxed max-w-sm">
                        {item.features}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 leading-relaxed text-[11px] max-w-xs">
                        {item.stainMethod}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => onSelectParasite(item.parasite)}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white rounded text-xs font-semibold transition-colors"
                        >
                          {language === 'ar' ? 'عرض' : 'View'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: SIDE-BY-SIDE PARASITE COMPARATOR */}
      {activeSubTab === 'comparator' && (
        <div className="space-y-6">
          {/* Quick Presets */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
            <span className="text-xs font-bold text-slate-300">
              {language === 'ar'
                ? 'مقارنات سريعة للحالات المتشابهة في الامتحانات والمختبر:'
                : 'Quick Exam Presets for Commonly Confused Lookalikes:'}
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  label: 'Ancylostoma vs Ascaris',
                  idA: 'ancylostoma-hookworm',
                  idB: 'ascaris-lumbricoides'
                },
                {
                  label: 'Taenia vs Echinococcus',
                  idA: 'taenia-saginata-solium',
                  idB: 'echinococcus-granulosus'
                },
                {
                  label: 'Giardia vs Entamoeba',
                  idA: 'giardia-duodenalis',
                  idB: 'entamoeba-histolytica'
                },
                {
                  label: 'Schistosoma mansoni vs haematobium',
                  idA: 'schistosoma-mansoni',
                  idB: 'fasciola-hepatica'
                },
                {
                  label: 'Cryptosporidium vs Toxoplasma',
                  idA: 'cryptosporidium-parvum',
                  idB: 'toxoplasma-gondii'
                }
              ].map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setParasiteAId(preset.idA);
                    setParasiteBId(preset.idB);
                  }}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white rounded-lg text-xs font-medium transition-colors border border-slate-700"
                >
                  ⚡ {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Selectors Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900 border border-emerald-500/30 rounded-xl space-y-2">
              <label className="text-xs font-bold text-emerald-400 block">
                {language === 'ar' ? 'الطفيلي الأول (أ):' : 'Parasite A:'}
              </label>
              <select
                value={parasiteAId}
                onChange={(e) => setParasiteAId(e.target.value)}
                className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-semibold focus:outline-none focus:border-emerald-500"
              >
                {allParasites.map((p) => (
                  <option key={`a-${p.id}`} value={p.id}>
                    {p.scientificName} ({p.commonNames[language]})
                  </option>
                ))}
              </select>
            </div>

            <div className="p-4 bg-slate-900 border border-teal-500/30 rounded-xl space-y-2">
              <label className="text-xs font-bold text-teal-400 block">
                {language === 'ar' ? 'الطفيلي الثاني (ب):' : 'Parasite B:'}
              </label>
              <select
                value={parasiteBId}
                onChange={(e) => setParasiteBId(e.target.value)}
                className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-semibold focus:outline-none focus:border-teal-500"
              >
                {allParasites.map((p) => (
                  <option key={`b-${p.id}`} value={p.id}>
                    {p.scientificName} ({p.commonNames[language]})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparative Matrix Table */}
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950">
            <div className="grid grid-cols-3 bg-slate-900/90 border-b border-slate-800 p-4 font-bold text-xs">
              <div className="text-slate-400">{language === 'ar' ? 'المعيار السريري والأكاديمي' : 'Clinical Metric'}</div>
              <div className="text-emerald-400 italic text-sm">{parasiteA.scientificName}</div>
              <div className="text-teal-400 italic text-sm">{parasiteB.scientificName}</div>
            </div>

            <div className="divide-y divide-slate-800/80 text-xs text-slate-300">
              {/* Common Name */}
              <div className="grid grid-cols-3 p-4 hover:bg-slate-900/40">
                <div className="font-semibold text-slate-400">{language === 'ar' ? 'الاسم الشائع والمرض' : 'Common Name'}</div>
                <div className="font-medium text-slate-200">{parasiteA.commonNames[language]}</div>
                <div className="font-medium text-slate-200">{parasiteB.commonNames[language]}</div>
              </div>

              {/* Taxonomy Phylum / Type */}
              <div className="grid grid-cols-3 p-4 hover:bg-slate-900/40">
                <div className="font-semibold text-slate-400">{language === 'ar' ? 'التصنيف والشعبة' : 'Phylum / Class'}</div>
                <div>{parasiteA.phylum} · {parasiteA.class}</div>
                <div>{parasiteB.phylum} · {parasiteB.class}</div>
              </div>

              {/* Hosts */}
              <div className="grid grid-cols-3 p-4 hover:bg-slate-900/40">
                <div className="font-semibold text-slate-400">{language === 'ar' ? 'العائل النهائي والوسيط' : 'Hosts (Definitive / Intermediate)'}</div>
                <div className="space-y-1">
                  <div><strong className="text-emerald-400">D:</strong> {parasiteA.hosts.definitive[language]}</div>
                  <div><strong className="text-slate-400">I:</strong> {parasiteA.hosts.intermediate[language]}</div>
                </div>
                <div className="space-y-1">
                  <div><strong className="text-teal-400">D:</strong> {parasiteB.hosts.definitive[language]}</div>
                  <div><strong className="text-slate-400">I:</strong> {parasiteB.hosts.intermediate[language]}</div>
                </div>
              </div>

              {/* Transmission Route */}
              <div className="grid grid-cols-3 p-4 hover:bg-slate-900/40">
                <div className="font-semibold text-slate-400">{language === 'ar' ? 'طريقة الانتقال والعدوى' : 'Transmission Route'}</div>
                <div>{parasiteA.transmission[language]}</div>
                <div>{parasiteB.transmission[language]}</div>
              </div>

              {/* Diagnostic Stage & Dimensions */}
              <div className="grid grid-cols-3 p-4 bg-slate-900/20 hover:bg-slate-900/60">
                <div className="font-semibold text-slate-400">{language === 'ar' ? 'الطور التشخيصي والأبعاد' : 'Diagnostic Stage & Size'}</div>
                <div className="space-y-1">
                  <span className="font-mono text-emerald-400 font-bold block">{parasiteA.morphology.dimensions}</span>
                  <span className="text-[11px] text-slate-400">{parasiteA.morphology.diagnosticStages.join(' · ')}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-teal-400 font-bold block">{parasiteB.morphology.dimensions}</span>
                  <span className="text-[11px] text-slate-400">{parasiteB.morphology.diagnosticStages.join(' · ')}</span>
                </div>
              </div>

              {/* Microscopic Features */}
              <div className="grid grid-cols-3 p-4 hover:bg-slate-900/40">
                <div className="font-semibold text-slate-400">{language === 'ar' ? 'السمات المجهرية الدقيقة' : 'Microscopic Morphology'}</div>
                <div className="leading-relaxed text-[11px]">{parasiteA.morphology.microscopicFeatures[language]}</div>
                <div className="leading-relaxed text-[11px]">{parasiteB.morphology.microscopicFeatures[language]}</div>
              </div>

              {/* Pathology in Humans */}
              <div className="grid grid-cols-3 p-4 hover:bg-slate-900/40">
                <div className="font-semibold text-slate-400">{language === 'ar' ? 'الأعراض والمضاعفات عند الإنسان' : 'Human Pathology'}</div>
                <div className="space-y-1 text-[11px]">
                  <div><strong className="text-amber-400">Zoonotic:</strong> {parasiteA.humanImpact.isZoonotic ? 'Yes' : 'No'}</div>
                  <div className="text-slate-400">{parasiteA.humanImpact.acuteSigns[language].slice(0, 2).join(', ')}</div>
                </div>
                <div className="space-y-1 text-[11px]">
                  <div><strong className="text-amber-400">Zoonotic:</strong> {parasiteB.humanImpact.isZoonotic ? 'Yes' : 'No'}</div>
                  <div className="text-slate-400">{parasiteB.humanImpact.acuteSigns[language].slice(0, 2).join(', ')}</div>
                </div>
              </div>

              {/* Drug of Choice */}
              <div className="grid grid-cols-3 p-4 hover:bg-slate-900/40">
                <div className="font-semibold text-slate-400">{language === 'ar' ? 'العلاج المعتمد (الخط الأول)' : 'Drug of Choice'}</div>
                <div className="font-semibold text-emerald-300">
                  {parasiteA.treatment.human.firstLineDrugs[0]?.drug || parasiteA.treatment.veterinary.firstLineDrugs[0]?.drug || 'Supportive'}
                </div>
                <div className="font-semibold text-teal-300">
                  {parasiteB.treatment.human.firstLineDrugs[0]?.drug || parasiteB.treatment.veterinary.firstLineDrugs[0]?.drug || 'Supportive'}
                </div>
              </div>

              {/* Primary Reference Source */}
              <div className="grid grid-cols-3 p-4 hover:bg-slate-900/40">
                <div className="font-semibold text-slate-400">{language === 'ar' ? 'المرجع العلمي المعتمد' : 'Accredited Source'}</div>
                <div className="text-[11px] text-slate-400">
                  <span className="font-bold text-slate-200 block">{parasiteA.scientificSources[0]?.organization}</span>
                  <span>{parasiteA.scientificSources[0]?.title}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  <span className="font-bold text-slate-200 block">{parasiteB.scientificSources[0]?.organization}</span>
                  <span>{parasiteB.scientificSources[0]?.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 4: STUDENT EXAM FLASHCARDS */}
      {activeSubTab === 'flashcards' && (
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Card progress */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4 text-emerald-400" />
              <span>
                {language === 'ar' ? 'البطاقة' : 'Card'}{' '}
                <strong className="text-white font-mono">{currentCardIndex + 1}</strong> / {flashcards.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">
                {language === 'ar' ? 'تم حفظها:' : 'Mastered:'}{' '}
                <strong className="text-emerald-400 font-mono">{masteredCards.length}</strong>
              </span>
            </div>
          </div>

          {/* Interactive Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[300px] p-6 sm:p-8 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl flex flex-col justify-between shadow-2xl transition-all select-none relative group"
          >
            {/* Top Bar on Card */}
            <div className="flex items-center justify-between text-xs">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                {flashcards[currentCardIndex].category[language]}
              </span>
              <span className="text-[11px] text-slate-500 flex items-center gap-1 group-hover:text-emerald-400 transition-colors">
                <RotateCcw className="w-3.5 h-3.5" />
                {isFlipped
                  ? language === 'ar' ? 'انقر لعرض السؤال' : 'Click to show question'
                  : language === 'ar' ? 'انقر لإظهار الإجابة والمصدر' : 'Click to flip & reveal answer'}
              </span>
            </div>

            {/* Middle Content */}
            <div className="py-6 space-y-4">
              {!isFlipped ? (
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block">
                    {language === 'ar' ? 'السؤال السريري / المجهري:' : 'Clinical / Microscopic Question:'}
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-100 leading-relaxed">
                    {flashcards[currentCardIndex].question[language]}
                  </p>
                  <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg text-xs text-amber-300 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                    <span><strong>{language === 'ar' ? 'تلميح:' : 'Hint:'}</strong> {flashcards[currentCardIndex].hint[language]}</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-400 block">
                    {language === 'ar' ? 'الإجابة والتشخيص المخبري المؤكد:' : 'Confirmed Laboratory Diagnosis & Answer:'}
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white leading-relaxed bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-xl">
                    {flashcards[currentCardIndex].answer[language]}
                  </p>
                  <div className="text-xs text-slate-300 space-y-1">
                    <strong className="text-emerald-400">{language === 'ar' ? 'نصيحة الامتحان المخبرية:' : 'Exam Laboratory Tip:'}</strong>
                    <p className="text-slate-400 leading-relaxed">{flashcards[currentCardIndex].diagnosticTip[language]}</p>
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-2 border-t border-slate-800">
                    <BookOpen className="w-3 h-3 text-slate-400" />
                    <span>{language === 'ar' ? 'المصدر المعتمد:' : 'Accredited Source:'} {flashcards[currentCardIndex].sourceOrg}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Indicator */}
            <div className="text-center text-[11px] text-slate-500 border-t border-slate-800/80 pt-3">
              {isFlipped
                ? language === 'ar' ? '✅ تم كشف الإجابة والمصدر' : 'Answer & source revealed'
                : language === 'ar' ? '💡 خمن التشخيص أولاً ثم انقر لقلب البطاقة' : 'Think of the diagnosis first, then click to flip'}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentCardIndex((prev) => (prev > 0 ? prev - 1 : flashcards.length - 1));
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors"
            >
              {language === 'ar' ? 'السابق' : 'Previous'}
            </button>

            <button
              onClick={() => {
                const cardId = flashcards[currentCardIndex].id;
                if (!masteredCards.includes(cardId)) {
                  setMasteredCards([...masteredCards, cardId]);
                } else {
                  setMasteredCards(masteredCards.filter((id) => id !== cardId));
                }
              }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl transition-colors border ${
                masteredCards.includes(flashcards[currentCardIndex].id)
                  ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500/40'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {masteredCards.includes(flashcards[currentCardIndex].id)
                  ? (language === 'ar' ? 'تم الحفظ بنجاح' : 'Mastered')
                  : (language === 'ar' ? 'تحديد كـ "تم حفظها"' : 'Mark as Mastered')}
              </span>
            </button>

            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentCardIndex((prev) => (prev < flashcards.length - 1 ? prev + 1 : 0));
              }}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition-colors shadow-lg"
            >
              {language === 'ar' ? 'التالي' : 'Next'}
            </button>
          </div>
        </div>
      )}

      {/* SUBTAB 5: OPEN-ACCESS DATASETS FOR AI & RESEARCH */}
      {activeSubTab === 'datasets' && (
        <div className="space-y-6">
          <div className="p-4 bg-slate-950 border border-emerald-500/30 rounded-xl space-y-2">
            <h3 className="text-xs font-bold text-emerald-400 flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span>
                {language === 'ar'
                  ? 'مستودع مجموعات البيانات المفتوحة والصور المجهرية المجانية للطلاب والباحثين'
                  : 'Open-Access Microscopy Datasets & Research Archives for Students'}
              </span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'إذا كنت طالباً أو باحثاً ترغب في تدريب نموذج ذكاء اصطناعي خاص بك (TFLite) أو إجراء بحث جامعي حول تشخيص الطفيليات، إليك أهم قواعد البيانات الطبية المفتوحة عالمياً والتي توفر آلاف الصور المجهرية الحقيقية والمصنفة مجاناً:'
                : 'Curated open-access microscopy databases offering thousands of annotated micrographs for training custom TensorFlow Lite models, conducting university research, or building student diagnostic atlases:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openDatasets.map((ds, idx) => (
              <div
                key={idx}
                className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                      {ds.license}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {ds.imagesCount}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug">
                    {ds.title}
                  </h4>

                  <div className="text-[11px] text-slate-400 font-medium">
                    {ds.institution}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ds.description[language]}
                  </p>

                  <div className="p-2.5 bg-slate-950 rounded-lg text-[11px] text-slate-400 border border-slate-850">
                    <strong className="text-slate-300 font-semibold">
                      {language === 'ar' ? 'الاستخدام الأمثل:' : 'Recommended for:'}{' '}
                    </strong>
                    {ds.recommendedFor}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    {language === 'ar' ? 'تنزيل مجاني ومباشر' : 'Free Direct Access'}
                  </span>
                  <a
                    href={ds.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    <span>{language === 'ar' ? 'زيارة المستودع' : 'Access Repository'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Research guidance card */}
          <div className="p-5 bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-xl space-y-3">
            <h4 className="text-xs font-bold text-slate-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>
                {language === 'ar'
                  ? 'إرشادات للطلاب للاستفادة من مجموعات الصور المجهرية المفتوحة في الأبحاث والمشاريع:'
                  : 'Student Guidelines for Using Open-Access Microscopy Datasets in Research:'}
              </span>
            </h4>
            <ol className="list-decimal list-inside text-xs text-slate-400 space-y-1.5 leading-relaxed">
              <li>{language === 'ar' ? 'حمّل عينات الصور المجهرية المرجعية من مستودع CDC PHIL أو Mendeley لدراسة المورفولوجيا التشخيصية الدقيقة.' : 'Download reference specimen micrographs from CDC PHIL or Mendeley to study detailed diagnostic morphology.'}</li>
              <li>{language === 'ar' ? 'قارن الصور المجهرية المحملة ببيانات "المفتاح التشخيصي المجهري" في المنصة للتحقق من أبعاد البيوض والأكياس (µm).' : 'Cross-reference downloaded micrographs with the platform’s Microscopic Key to verify egg and cyst micrometer dimensions.'}</li>
              <li>{language === 'ar' ? 'استخدم بطاقات المراجعة وقسم المقارنة المزدوجة لإتقان الفروق بين الطفيليات المتشابهة قبل الامتحانات السريرية.' : 'Use the flashcards and side-by-side comparator to master distinctions between lookalike parasites for clinical exams.'}</li>
              <li>{language === 'ar' ? 'انسخ الاقتباسات والتوثيق الأكاديمي المعتمد من قسم المراجع لإدراجه في حلقات البحث والتقارير المخبرية الجامعية.' : 'Copy verified academic citations from the Sources section to include in university lab reports and dissertations.'}</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};
