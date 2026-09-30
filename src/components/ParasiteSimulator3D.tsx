import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Eye,
  Maximize2,
  Info,
  HelpCircle,
  Sparkles,
  Layers,
  Activity,
  CheckCircle2,
  AlertCircle,
  Compass,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Parasite, Language } from '../types/parasite';
import { allParasites } from '../data/index';

interface ParasiteSimulator3DProps {
  language: Language;
  initialParasiteId?: string;
  onSelectParasite?: (parasite: Parasite) => void;
}

type OpticalFilter = 'brightfield' | 'darkfield' | 'phase_contrast' | 'fluorescence';
type ObjectiveLens = '10x' | '40x' | '100x';

interface Hotspot {
  id: string;
  position: [number, number, number];
  title: { ar: string; en: string; fr: string };
  description: { ar: string; en: string; fr: string };
  diagnosticSignificance: { ar: string; en: string; fr: string };
  metricSize: string;
}

interface Parasite3DConfig {
  id: string;
  modelKey: 'giardia' | 'toxoplasma' | 'fasciola' | 'echinococcus' | 'ancylostoma' | 'plasmodium' | 'sarcoptes' | 'schistosoma' | 'entamoeba' | 'taenia';
  baseColor: number;
  glowColor: number;
  scale: number;
  realSizeUm: string;
  hotspots: Hotspot[];
}

const PARASITE_3D_CONFIGS: Record<string, Parasite3DConfig> = {
  'giardia-lamblia': {
    id: 'giardia-lamblia',
    modelKey: 'giardia',
    baseColor: 0x38bdf8,
    glowColor: 0x0284c7,
    scale: 1.0,
    realSizeUm: '12 - 15 µm × 7 - 10 µm',
    hotspots: [
      {
        id: 'ventral-disk',
        position: [0, 0.4, 0.5],
        title: {
          ar: 'القرص الماص البطني (Ventral Sucking Disk)',
          en: 'Ventral Sucking Disc',
          fr: 'Disque Adhésif Ventral'
        },
        description: {
          ar: 'هيكل مقعر غني بالأنابيب الدقيقة والميوسين يستخدمه الطفيلي للالتصاق بقوة على الخلايا المعوية للإثني عشر.',
          en: 'Concave microtubule-based sucking organelle that adheres firmly to duodenal enterocytes.',
          fr: 'Organite adhésif concave microtubulaire fixé aux entérocytes duodénaux.'
        },
        diagnosticSignificance: {
          ar: 'السمة المميزة للطور النشط (Trophozoite)؛ يسبب سوء امتصاص الدهون.',
          en: 'Hallmark of active trophozoite; directly causes fat malabsorption.',
          fr: 'Caractère diagnostique du trophozoïte; induit la malabsorption lipidique.'
        },
        metricSize: '6 - 8 µm'
      },
      {
        id: 'nuclei',
        position: [0, 0.7, 0.2],
        title: {
          ar: 'النواتان المتناظرتان (Symmetrical Nuclei)',
          en: 'Bilateral Nuclei',
          fr: 'Noyaux Bilatéraux Symétriques'
        },
        description: {
          ar: 'نواتان حقيقيتان متناظرتان تحوي كل منهما نوية مركزية بارزة تشبه الوجه المبتسم تحت المجهر.',
          en: 'Two symmetrical nuclei with distinct central endosomes giving "smiling face" appearance.',
          fr: 'Deux noyaux symétriques avec endosomes centraux (aspect en miroir).'
        },
        diagnosticSignificance: {
          ar: 'مظهر تشخيصي فوري في الفحص المباشر بصبغة لوغول.',
          en: 'Immediate diagnostic feature under iodine wet mount.',
          fr: 'Critère morphologique pathognomonique en examen direct au Lugol.'
        },
        metricSize: '2.5 µm each'
      },
      {
        id: 'flagella',
        position: [0, -1.6, 0],
        title: {
          ar: 'الأسواط الثمانية الحركية (8 Flagella)',
          en: 'Locomotor Flagella (8)',
          fr: 'Flagelles Locomoteurs (8)'
        },
        description: {
          ar: 'أربعة أزواج من الأسواط (أمامية، بطنية، خلفية، وذيلية) تولد حركة تمايلية مميزة مثل ورقة الشجر المتساقطة.',
          en: '4 pairs of flagella producing rapid erratic tumbling ("falling leaf") motility.',
          fr: '4 paires de flagelles conférant la mobilité en "feuille d\'arbre tombante".'
        },
        diagnosticSignificance: {
          ar: 'تأكيد الحيوية والتشخيص في البراز الرخو الطازج.',
          en: 'Confirms live motility in fresh diarrheic specimens.',
          fr: 'Confirme la motilité active en selles diarrhéiques fraîches.'
        },
        metricSize: '15 - 20 µm length'
      }
    ]
  },
  'toxoplasma-gondii': {
    id: 'toxoplasma-gondii',
    modelKey: 'toxoplasma',
    baseColor: 0xf59e0b,
    glowColor: 0xd97706,
    scale: 1.1,
    realSizeUm: '4 - 7 µm × 2 - 4 µm',
    hotspots: [
      {
        id: 'conoid-apical',
        position: [0, 1.4, 0],
        title: {
          ar: 'المعقد القمي والمخروط (Apical Conoid)',
          en: 'Apical Complex & Conoid',
          fr: 'Complexe Apical & Conoïde'
        },
        description: {
          ar: 'جهاز عضوي اختراقي دقيق يفرز إنزيمات محللة لاختراق غشاء خلايا العائل دون تحطيمها.',
          en: 'Precision invasive machinery secreting perforating proteins to penetrate host cells.',
          fr: 'Appareil d\'invasion sécrétant des protéines facilitant la pénétration cellulaire.'
        },
        diagnosticSignificance: {
          ar: 'خاصية فريدة لجميع معقدات القمة (Apicomplexa).',
          en: 'Signature hallmark of all Apicomplexan protozoa.',
          fr: 'Signe distinctif majeur du phylum des Apicomplexes.'
        },
        metricSize: '0.4 µm'
      },
      {
        id: 'rhoptries',
        position: [0, 0.6, 0.2],
        title: {
          ar: 'الأجسام الصولجانية (Rhoptries & Micronemes)',
          en: 'Secretory Rhoptries',
          fr: 'Rhoptries Sécrétoires'
        },
        description: {
          ar: 'عضيات إفرازية أنبوبية تفرز بروتينات ROP وMIC لبناء فجوة التطفل الواقية داخل الخلية.',
          en: 'Club-shaped secretory organelles releasing effectors to build parasitophorous vacuole.',
          fr: 'Organites en massue fabriquant la vacuole parasitophore intracellulaire.'
        },
        diagnosticSignificance: {
          ar: 'تمنع اندماج الفجوة مع الليزوزومات الهاضمة.',
          en: 'Prevents phagolysosomal fusion inside macrophages.',
          fr: 'Empêche la fusion lysosomiale dans les macrophages.'
        },
        metricSize: '1.2 µm'
      }
    ]
  },
  'fasciola-hepatica': {
    id: 'fasciola-hepatica',
    modelKey: 'fasciola',
    baseColor: 0x10b981,
    glowColor: 0x059669,
    scale: 0.9,
    realSizeUm: '20 - 30 mm × 13 mm',
    hotspots: [
      {
        id: 'oral-sucker',
        position: [0, 1.6, 0.2],
        title: {
          ar: 'الممص الفموي والمخروط الرأسي (Oral Sucker & Cephalic Cone)',
          en: 'Oral Sucker & Cephalic Cone',
          fr: 'Ventouse Orale & Cône Céphalique'
        },
        description: {
          ar: 'ممص عضلي أمامي يحيط بفتحة الفم مثبت على مخروط رأسي مميز يخترق القنوات الصفراوية.',
          en: 'Muscular anterior sucker on a distinct cephalic cone feeding on bile duct epithelium.',
          fr: 'Ventouse antérieure située sur un cône céphalique bien délimité.'
        },
        diagnosticSignificance: {
          ar: 'يميز فاسيولا هيباتيكا عن فاسيولوبسيس بوسكي العريضة.',
          en: 'Differentiates F. hepatica from cephalic-less Fasciolopsis buski.',
          fr: 'Différencie F. hepatica de Fasciolopsis buski dépourvue de cône.'
        },
        metricSize: '1.0 mm diameter'
      },
      {
        id: 'ventral-acetabulum',
        position: [0, 0.9, 0.3],
        title: {
          ar: 'الممص البطني (Ventral Acetabulum)',
          en: 'Ventral Sucker (Acetabulum)',
          fr: 'Ventouse Ventrale (Acétabulum)'
        },
        description: {
          ar: 'ممص عضلي قوي يقع قرب قاعدة المخروط الرأسي لتثبيت الدودة ضد تيار العصارة الصفراوية.',
          en: 'Powerful muscular sucker anchoring the fluke against vigorous bile fluid flow.',
          fr: 'Puissante ventouse musculeuse fixant la douve contre le flux biliaire.'
        },
        diagnosticSignificance: {
          ar: 'يضمن استقرار الدودة البالغة لسنوات داخل الكبد.',
          en: 'Ensures long-term mechanical anchorage inside the liver.',
          fr: 'Garantit l\'ancrage mécanique durable dans les canaux biliaires.'
        },
        metricSize: '1.6 mm diameter'
      }
    ]
  },
  'echinococcus-granulosus': {
    id: 'echinococcus-granulosus',
    modelKey: 'echinococcus',
    baseColor: 0xa855f7,
    glowColor: 0x9333ea,
    scale: 0.95,
    realSizeUm: '3 - 6 mm (Adult) / 100 µm (Protoscolex)',
    hotspots: [
      {
        id: 'rostellum-hooks',
        position: [0, 1.5, 0],
        title: {
          ar: 'طوق الخطاطيف الكيتينية (Rostellum & Hooklets)',
          en: 'Rostellum Hooklets Crown',
          fr: 'Couronne de Crochets Rostellaires'
        },
        description: {
          ar: 'صف مزدوج من الخطاطيف الكيتينية الشوكية المنحنية مثبتة على خطم عضلي قابل للبروز.',
          en: 'Double alternating crown of chitinous curved hooklets on an evaginable rostellum.',
          fr: 'Double couronne de crochets chitineux acérés sur un rostre rétractile.'
        },
        diagnosticSignificance: {
          ar: 'المعيار الذهبي لتأكيد رمال الكيس المائي (Hydatid Sand) تحت المجهر.',
          en: 'Definitive hallmark of hydatid sand in aspirate microscopy.',
          fr: 'Signe absolu du sable hydatique en microscopie après ponction.'
        },
        metricSize: '20 - 40 µm per hook'
      },
      {
        id: 'suckers-4',
        position: [0, 0.8, 0.5],
        title: {
          ar: 'المخاص الكأسية الأربعة (4 Muscular Suckers)',
          en: 'Four Muscular Suckers',
          fr: 'Quatre Ventouses Musculeuses'
        },
        description: {
          ar: 'أربعة ممصات مقعرة تحيط برأس الدودة للتثبيت على جدار الأمعاء الدقيقة للكلبيات.',
          en: 'Four deep hemispherical suckers anchoring the scolex in canine intestinal villi.',
          fr: 'Quatre ventouses cupuliformes fixées à la muqueuse intestinale des canidés.'
        },
        diagnosticSignificance: {
          ar: 'سمة تشخيصية رئيسية لجميع الديدان السستودا الحقيقية.',
          en: 'Core morphological hallmark of Cyclophyllidea cestodes.',
          fr: 'Caractéristique diagnostique de l\'ordre des Cyclophyllidea.'
        },
        metricSize: '150 µm diameter'
      }
    ]
  },
  'ancylostoma-caninum': {
    id: 'ancylostoma-caninum',
    modelKey: 'ancylostoma',
    baseColor: 0xec4899,
    glowColor: 0xdb2777,
    scale: 0.95,
    realSizeUm: '10 - 16 mm (Adult) / 60 µm (Egg)',
    hotspots: [
      {
        id: 'teeth-capsule',
        position: [0, 1.6, 0.3],
        title: {
          ar: 'محفظة الفم والأسنان القاطعة (Buccal Capsule & Teeth)',
          en: 'Buccal Capsule with 3 Tooth Pairs',
          fr: 'Capsule Buccale & Dents Tranchantes'
        },
        description: {
          ar: 'محفظة فموية كيتينية عميقة متسعة تحوي 3 أزواج من الأسنان الحادة المقوسة لتمزيق المخاطية وسحب الدم.',
          en: 'Deep chitinous buccal capsule equipped with 3 pairs of sharp ventral curved teeth.',
          fr: 'Large capsule buccale armée de 3 paires de dents ventrales incurvées.'
        },
        diagnosticSignificance: {
          ar: 'يميز Ancylostoma caninum عن باقي الديدان الشصية ومسؤول عن النزف وفقر الدم الشديد.',
          en: 'Key species identifier causing massive blood loss and hemorrhagic anemia.',
          fr: 'Différenciation d\'espèce majeure, cause d\'anémie ferriprive sévère.'
        },
        metricSize: '180 µm capsule width'
      }
    ]
  },
  'plasmodium-falciparum': {
    id: 'plasmodium-falciparum',
    modelKey: 'plasmodium',
    baseColor: 0xef4444,
    glowColor: 0xdc2626,
    scale: 1.05,
    realSizeUm: '1 - 2 µm (Ring) / 7.5 µm (Host RBC)',
    hotspots: [
      {
        id: 'signet-ring',
        position: [0, 0.3, 0.35],
        title: {
          ar: 'الطور الحلقي الخاتمي (Signet-Ring Trophozoite)',
          en: 'Signet-Ring Trophozoite',
          fr: 'Trophozoïte en Bague à Chaton'
        },
        description: {
          ar: 'حلقة سيتوبلازمية زرقاء رقيقة تتوسطها فجوة مع نقطة كروماتين حمراء قانية تشبه الخاتم المرصع.',
          en: 'Delicate blue cytoplasmic ring with prominent red chromatin dot inside red blood cell.',
          fr: 'Fin anneau cytoplasmique avec un point de chromatine rouge en bague à chaton.'
        },
        diagnosticSignificance: {
          ar: 'التشخيص الحاسم للملاريا المنجلية في مسحة الدم الرقيقة بصبغة جيمسا.',
          en: 'Gold-standard diagnostic form on Giemsa-stained thin blood films.',
          fr: 'Forme diagnostique de référence sur frottis sanguin mince au Giemsa.'
        },
        metricSize: '1.5 µm diameter'
      },
      {
        id: 'hemozoin',
        position: [0.3, -0.2, 0.3],
        title: {
          ar: 'بلورات صبغة الهيموزوين (Hemozoin Pigment)',
          en: 'Hemozoin Malarial Pigment',
          fr: 'Pigment d\'Hémozoïne'
        },
        description: {
          ar: 'بلورات بنية داكنة متبلورة ناتجة عن هضم الهيموغلوبين بواسطة الطفيلي لحماية نفسه من الهيم السام.',
          en: 'Dark insoluble crystalline ferriprotoporphyrin polymer resulting from digested hemoglobin.',
          fr: 'Cristaux insolubles brun foncé issus du catabolisme de l\'hémoglobine.'
        },
        diagnosticSignificance: {
          ar: 'يتوهج تحت الضوء المستقطب (Birefringence) لتأكيد الإصابة السريعة.',
          en: 'Birefringent under polarized light for rapid automated detection.',
          fr: 'Biréfringent sous lumière polarisée facilitant la détection rapide.'
        },
        metricSize: '0.3 - 0.8 µm'
      }
    ]
  },
  'sarcoptes-scabiei': {
    id: 'sarcoptes-scabiei',
    modelKey: 'sarcoptes',
    baseColor: 0xca8a04,
    glowColor: 0xa16207,
    scale: 0.9,
    realSizeUm: '300 - 450 µm (Female) / 200 µm (Male)',
    hotspots: [
      {
        id: 'dorsal-spines',
        position: [0, 0.4, 0.6],
        title: {
          ar: 'الأشواك الظهرية المثلثية (Dorsal Pegs & Spines)',
          en: 'Dorsal Triangular Cuticular Spines',
          fr: 'Épines & Écailles Dorsales Triangulaires'
        },
        description: {
          ar: 'صفائف من الأشواك المثلثية والنتوءات الحرشفية على ظهر الحلم تمنع ارتداده للخلف أثناء حفر أنفاق الجلد.',
          en: 'Array of triangular backward-pointing cuticular spines preventing backward slippage in skin burrows.',
          fr: 'Écailles triangulaires et épines cuticulaires empêchant le recul dans les galeries épidermiques.'
        },
        diagnosticSignificance: {
          ar: 'التشخيص الحاسم لحلم الجرب في كشاطة الجلد المعاملة بـ KOH.',
          en: 'Definitive diagnostic feature under 10% KOH skin scraping examination.',
          fr: 'Critère absolu d\'identification en raclage cutané éclairci au KOH 10%.'
        },
        metricSize: '15 - 25 µm per spine'
      }
    ]
  }
};

export const ParasiteSimulator3D: React.FC<ParasiteSimulator3DProps> = ({
  language,
  initialParasiteId = 'giardia-lamblia',
  onSelectParasite
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const animatedPartsRef = useRef<{ mesh: THREE.Object3D; update: (t: number) => void }[]>([]);
  const reqIdRef = useRef<number | null>(null);

  const [selectedConfigId, setSelectedConfigId] = useState<string>(initialParasiteId);
  const [opticalFilter, setOpticalFilter] = useState<OpticalFilter>('brightfield');
  const [objectiveLens, setObjectiveLens] = useState<ObjectiveLens>('40x');
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [cuticleOpacity, setCuticleOpacity] = useState<number>(0.85);
  const [showReticle, setShowReticle] = useState<boolean>(true);
  const [showHotspotPins, setShowHotspotPins] = useState<boolean>(true);
  const [isMotilityActive, setIsMotilityActive] = useState<boolean>(true);
  const [focusDepth, setFocusDepth] = useState<number>(50); // 0 to 100
  const [challengeMode, setChallengeMode] = useState<boolean>(false);
  const [challengeAnswered, setChallengeAnswered] = useState<string | null>(null);
  const [challengeScore, setChallengeScore] = useState<number>(0);

  // Active parasite configuration
  const currentConfig = PARASITE_3D_CONFIGS[selectedConfigId] || PARASITE_3D_CONFIGS['giardia-lamblia'];
  const fullParasiteData = useMemo(() => {
    return allParasites.find((p) => p.id === currentConfig.id) || allParasites[0];
  }, [currentConfig.id]);

  // Pointer drag controls state
  const isDraggingRef = useRef<boolean>(false);
  const previousPointerPositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotationMomentumRef = useRef<{ x: number; y: number }>({ x: 0.002, y: 0.004 });
  const zoomLevelRef = useRef<number>(4.2);

  // Setup Three.js scene
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, zoomLevelRef.current);
    cameraRef.current = camera;

    // 3. Renderer with antialiasing
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    rendererRef.current = renderer;

    // 4. Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(5, 8, 6);
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.4);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const bottomSubstageLight = new THREE.PointLight(0xffffff, 0.8, 15);
    bottomSubstageLight.position.set(0, -3, 2);
    scene.add(bottomSubstageLight);

    // 5. Parent Model Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const newW = containerRef.current.clientWidth;
      const newH = containerRef.current.clientHeight;
      cameraRef.current.aspect = newW / newH;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      renderer.dispose();
    };
  }, []);

  // Update camera zoom according to objective lens
  useEffect(() => {
    if (!cameraRef.current) return;
    let targetZ = 4.2;
    if (objectiveLens === '10x') targetZ = 6.2;
    if (objectiveLens === '40x') targetZ = 4.0;
    if (objectiveLens === '100x') targetZ = 2.7;
    zoomLevelRef.current = targetZ;
    cameraRef.current.position.z = targetZ;
  }, [objectiveLens]);

  // Build Procedural 3D Biological Models
  useEffect(() => {
    const modelGroup = modelGroupRef.current;
    if (!modelGroup) return;

    // Clear previous model objects
    while (modelGroup.children.length > 0) {
      const obj = modelGroup.children[0];
      modelGroup.remove(obj);
      if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
      if ((obj as THREE.Mesh).material) {
        const mat = (obj as THREE.Mesh).material;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat.dispose();
      }
    }

    animatedPartsRef.current = [];

    // Filter-specific color and material parameters
    let bodyColor = currentConfig.baseColor;
    let emissiveColor = 0x000000;
    let emissiveIntensity = 0.0;
    let roughness = 0.35;
    let metalness = 0.1;

    if (opticalFilter === 'darkfield') {
      bodyColor = 0x111827;
      emissiveColor = 0x38bdf8;
      emissiveIntensity = 0.65;
      roughness = 0.2;
    } else if (opticalFilter === 'phase_contrast') {
      bodyColor = 0x94a3b8;
      emissiveColor = 0x64748b;
      emissiveIntensity = 0.25;
      roughness = 0.5;
    } else if (opticalFilter === 'fluorescence') {
      bodyColor = 0x064e3b;
      emissiveColor = 0x10b981;
      emissiveIntensity = 0.95;
      roughness = 0.15;
    }

    const mainMaterial = new THREE.MeshPhysicalMaterial({
      color: bodyColor,
      emissive: emissiveColor,
      emissiveIntensity,
      roughness,
      metalness,
      transparent: true,
      opacity: cuticleOpacity,
      clearcoat: 0.4,
      clearcoatRoughness: 0.1
    });

    const organelleMaterial = new THREE.MeshStandardMaterial({
      color: opticalFilter === 'fluorescence' ? 0x67e8f9 : 0x0284c7,
      emissive: opticalFilter === 'fluorescence' ? 0x06b6d4 : 0x0369a1,
      emissiveIntensity: opticalFilter === 'fluorescence' ? 0.8 : 0.2,
      roughness: 0.3,
      metalness: 0.2
    });

    const nucleusMaterial = new THREE.MeshStandardMaterial({
      color: opticalFilter === 'fluorescence' ? 0x38bdf8 : 0x1e3a8a,
      emissive: opticalFilter === 'fluorescence' ? 0x0284c7 : 0x1e40af,
      emissiveIntensity: 0.4,
      roughness: 0.2
    });

    // MODEL BUILDERS
    if (currentConfig.modelKey === 'giardia') {
      // 1. Pyriform / teardrop body
      const bodyGeom = new THREE.SphereGeometry(1.2, 32, 24);
      // Deform sphere to create tear drop with ventral depression
      const pos = bodyGeom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        let x = pos.getX(i);
        let y = pos.getY(i);
        let z = pos.getZ(i);

        // Taper posterior end (lower y)
        if (y < 0) {
          const factor = 1 - Math.abs(y) * 0.45;
          x *= factor;
          z *= factor * 0.7;
        }
        // Flatten ventral side (negative z)
        if (z < 0) {
          z *= 0.4;
        }
        pos.setXYZ(i, x, y * 1.3, z * 0.7);
      }
      bodyGeom.computeVertexNormals();

      const bodyMesh = new THREE.Mesh(bodyGeom, mainMaterial);
      modelGroup.add(bodyMesh);

      // 2. Ventral Sucking Disc (Concave circular disc)
      const discGeom = new THREE.TorusGeometry(0.55, 0.08, 16, 32);
      const discMesh = new THREE.Mesh(discGeom, organelleMaterial);
      discMesh.position.set(0, 0.45, 0.42);
      modelGroup.add(discMesh);

      // 3. Symmetrical Bilateral Nuclei (Eyes)
      const nucleusGeom = new THREE.SphereGeometry(0.18, 16, 16);
      const leftNucleus = new THREE.Mesh(nucleusGeom, nucleusMaterial);
      leftNucleus.position.set(-0.35, 0.55, 0.15);
      leftNucleus.scale.set(1, 1.3, 0.8);
      modelGroup.add(leftNucleus);

      const rightNucleus = new THREE.Mesh(nucleusGeom, nucleusMaterial);
      rightNucleus.position.set(0.35, 0.55, 0.15);
      rightNucleus.scale.set(1, 1.3, 0.8);
      modelGroup.add(rightNucleus);

      // Karyosomes inside nuclei
      const karyosomeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const karyosomeGeom = new THREE.SphereGeometry(0.06, 8, 8);
      const leftK = new THREE.Mesh(karyosomeGeom, karyosomeMat);
      leftK.position.set(-0.35, 0.55, 0.26);
      modelGroup.add(leftK);

      const rightK = new THREE.Mesh(karyosomeGeom, karyosomeMat);
      rightK.position.set(0.35, 0.55, 0.26);
      modelGroup.add(rightK);

      // 4. Median Bodies (claw-like transversal structures)
      const medianGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.6, 12);
      const medianMesh = new THREE.Mesh(medianGeom, organelleMaterial);
      medianMesh.rotation.z = Math.PI / 4;
      medianMesh.position.set(0, -0.15, 0.1);
      modelGroup.add(medianMesh);

      // 5. Dynamic 8 Flagella (Curves)
      const flagellaConfigs = [
        { start: [0, -1.5, 0], dir: [0, -1.2, 0.2] }, // Caudal 1
        { start: [0, -1.5, 0], dir: [0.1, -1.3, -0.2] }, // Caudal 2
        { start: [-0.4, 0.6, 0.2], dir: [-1.2, 0.8, 0] }, // Anterior Left
        { start: [0.4, 0.6, 0.2], dir: [1.2, 0.8, 0] }, // Anterior Right
        { start: [-0.3, 0.1, 0.3], dir: [-1.0, -0.4, 0.3] }, // Ventral Left
        { start: [0.3, 0.1, 0.3], dir: [1.0, -0.4, 0.3] }, // Ventral Right
        { start: [-0.2, -0.6, 0.1], dir: [-0.9, -1.1, 0.1] }, // Posterior Left
        { start: [0.2, -0.6, 0.1], dir: [0.9, -1.1, 0.1] } // Posterior Right
      ];

      const flagellumMat = new THREE.MeshStandardMaterial({
        color: opticalFilter === 'fluorescence' ? 0x22d3ee : 0x0284c7,
        roughness: 0.3
      });

      flagellaConfigs.forEach((cfg, idx) => {
        const p1 = new THREE.Vector3(...cfg.start);
        const p4 = new THREE.Vector3(
          cfg.start[0] + cfg.dir[0],
          cfg.start[1] + cfg.dir[1],
          cfg.start[2] + cfg.dir[2]
        );
        const p2 = p1.clone().lerp(p4, 0.33);
        const p3 = p1.clone().lerp(p4, 0.66);

        const curve = new THREE.CatmullRomCurve3([p1, p2, p3, p4]);
        const tubeGeom = new THREE.TubeGeometry(curve, 16, 0.022, 6, false);
        const tubeMesh = new THREE.Mesh(tubeGeom, flagellumMat);
        modelGroup.add(tubeMesh);

        animatedPartsRef.current.push({
          mesh: tubeMesh,
          update: (time: number) => {
            const wave = Math.sin(time * 6 + idx) * 0.15;
            p2.x += Math.sin(time * 5 + idx) * 0.01;
            p3.x += Math.cos(time * 5 + idx) * 0.015;
            p4.x += wave * 0.02;
            tubeMesh.rotation.z = Math.sin(time * 4 + idx) * 0.05;
          }
        });
      });
    } else if (currentConfig.modelKey === 'toxoplasma') {
      // Crescent / Banana-shaped tachyzoite
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-0.3, -1.3, 0),
        new THREE.Vector3(0.7, 0, 0),
        new THREE.Vector3(-0.2, 1.4, 0)
      );
      const crescentGeom = new THREE.TubeGeometry(curve, 32, 0.45, 16, false);
      const crescentMesh = new THREE.Mesh(crescentGeom, mainMaterial);
      modelGroup.add(crescentMesh);

      // Apical Conoid (Cone tip)
      const conoidGeom = new THREE.ConeGeometry(0.22, 0.45, 16);
      const conoidMesh = new THREE.Mesh(conoidGeom, organelleMaterial);
      conoidMesh.position.set(-0.2, 1.5, 0);
      conoidMesh.rotation.z = -0.3;
      modelGroup.add(conoidMesh);

      // Large Nucleus
      const nucleusGeom = new THREE.SphereGeometry(0.3, 16, 16);
      const nucMesh = new THREE.Mesh(nucleusGeom, nucleusMaterial);
      nucMesh.position.set(0.3, -0.1, 0);
      modelGroup.add(nucMesh);

      // Rhoptries (club-shaped rods)
      for (let i = 0; i < 4; i++) {
        const rhopGeom = new THREE.CylinderGeometry(0.04, 0.09, 0.6, 10);
        const rhopMesh = new THREE.Mesh(rhopGeom, organelleMaterial);
        rhopMesh.position.set(0.1 + i * 0.05, 0.8 - i * 0.08, 0.1 * (i % 2 === 0 ? 1 : -1));
        rhopMesh.rotation.z = 0.2 + i * 0.05;
        modelGroup.add(rhopMesh);
      }
    } else if (currentConfig.modelKey === 'fasciola') {
      // Dorsoventrally flattened leaf fluke
      const leafGeom = new THREE.CylinderGeometry(0.3, 1.3, 2.8, 32, 16);
      const pos = leafGeom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        let x = pos.getX(i);
        let y = pos.getY(i);
        let z = pos.getZ(i);

        // Flatten z axis for fluke thickness
        z *= 0.16;

        // Shape leaf: wider in middle-anterior, tapered at posterior
        if (y < 0) {
          x *= 1 - (Math.abs(y) / 1.4) * 0.6;
        } else if (y > 1.0) {
          // Cephalic cone
          x *= 0.4;
        }
        pos.setXYZ(i, x, y, z);
      }
      leafGeom.computeVertexNormals();

      const leafMesh = new THREE.Mesh(leafGeom, mainMaterial);
      modelGroup.add(leafMesh);

      // Oral Sucker
      const oralGeom = new THREE.TorusGeometry(0.18, 0.06, 12, 24);
      const oralMesh = new THREE.Mesh(oralGeom, organelleMaterial);
      oralMesh.position.set(0, 1.35, 0.12);
      modelGroup.add(oralMesh);

      // Ventral Acetabulum Sucker
      const acetabulumGeom = new THREE.TorusGeometry(0.24, 0.08, 12, 24);
      const acetabulumMesh = new THREE.Mesh(acetabulumGeom, organelleMaterial);
      acetabulumMesh.position.set(0, 0.8, 0.16);
      modelGroup.add(acetabulumMesh);

      // Branched intestinal caeca (Dendritic tree lines)
      const caecaMat = new THREE.LineBasicMaterial({
        color: opticalFilter === 'fluorescence' ? 0x34d399 : 0x047857,
        linewidth: 2
      });
      for (let side of [-1, 1]) {
        for (let branch = 0; branch < 8; branch++) {
          const yPos = 0.5 - branch * 0.22;
          const points = [
            new THREE.Vector3(side * 0.15, yPos, 0),
            new THREE.Vector3(side * 0.5, yPos + (side * 0.05), 0),
            new THREE.Vector3(side * 0.85, yPos - 0.05, 0)
          ];
          const caecaGeom = new THREE.BufferGeometry().setFromPoints(points);
          const caecaLine = new THREE.Line(caecaGeom, caecaMat);
          modelGroup.add(caecaLine);
        }
      }
    } else if (currentConfig.modelKey === 'echinococcus') {
      // Protoscolex / Scolex
      const scolexGeom = new THREE.SphereGeometry(0.9, 32, 24);
      const pos = scolexGeom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        let x = pos.getX(i);
        let y = pos.getY(i);
        let z = pos.getZ(i);
        if (y > 0.4) {
          x *= 0.65;
          z *= 0.65;
        }
        pos.setXYZ(i, x, y * 1.2, z);
      }
      scolexGeom.computeVertexNormals();
      const scolexMesh = new THREE.Mesh(scolexGeom, mainMaterial);
      modelGroup.add(scolexMesh);

      // Rostellum cushion on apex
      const rostellumGeom = new THREE.CylinderGeometry(0.28, 0.35, 0.35, 24);
      const rostellumMesh = new THREE.Mesh(rostellumGeom, organelleMaterial);
      rostellumMesh.position.set(0, 1.15, 0);
      modelGroup.add(rostellumMesh);

      // Double Crown of Chitinous Hooklets
      const hookMat = new THREE.MeshStandardMaterial({
        color: 0xfef08a,
        roughness: 0.1,
        metalness: 0.6
      });
      for (let h = 0; h < 18; h++) {
        const angle = (h / 18) * Math.PI * 2;
        const radius = 0.32;
        const hookGeom = new THREE.ConeGeometry(0.04, 0.22, 8);
        const hookMesh = new THREE.Mesh(hookGeom, hookMat);
        hookMesh.position.set(Math.cos(angle) * radius, 1.25, Math.sin(angle) * radius);
        hookMesh.rotation.z = Math.PI / 2 + Math.cos(angle) * 0.4;
        hookMesh.rotation.y = angle;
        modelGroup.add(hookMesh);
      }

      // 4 Muscular Suckers
      const suckerAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
      suckerAngles.forEach((angle) => {
        const suckerGeom = new THREE.TorusGeometry(0.25, 0.08, 12, 24);
        const suckerMesh = new THREE.Mesh(suckerGeom, organelleMaterial);
        suckerMesh.position.set(Math.cos(angle) * 0.75, 0.5, Math.sin(angle) * 0.75);
        suckerMesh.rotation.y = angle;
        modelGroup.add(suckerMesh);
      });
    } else if (currentConfig.modelKey === 'plasmodium') {
      // 1. Host Red Blood Cell (Biconcave disc)
      const rbcGeom = new THREE.CylinderGeometry(1.4, 1.4, 0.5, 32, 8);
      const rbcPos = rbcGeom.attributes.position;
      for (let i = 0; i < rbcPos.count; i++) {
        let x = rbcPos.getX(i);
        let y = rbcPos.getY(i);
        let z = rbcPos.getZ(i);
        const distFromCenter = Math.sqrt(x * x + z * z);
        // Dimple in the center (biconcave)
        if (Math.abs(y) > 0.15 && distFromCenter < 0.9) {
          y *= (distFromCenter / 0.9) * 0.6;
        }
        rbcPos.setXYZ(i, x, y, z);
      }
      rbcGeom.computeVertexNormals();

      const rbcMat = new THREE.MeshPhysicalMaterial({
        color: opticalFilter === 'fluorescence' ? 0x991b1b : 0xd97706,
        transparent: true,
        opacity: 0.65,
        roughness: 0.4
      });
      const rbcMesh = new THREE.Mesh(rbcGeom, rbcMat);
      rbcMesh.rotation.x = Math.PI / 5;
      modelGroup.add(rbcMesh);

      // 2. Signet Ring Trophozoite
      const ringGeom = new THREE.TorusGeometry(0.35, 0.05, 12, 24);
      const ringMesh = new THREE.Mesh(ringGeom, organelleMaterial);
      ringMesh.position.set(0.1, 0.2, 0.3);
      ringMesh.rotation.x = Math.PI / 5;
      modelGroup.add(ringMesh);

      // Chromatin Dot (Ruby Red)
      const dotGeom = new THREE.SphereGeometry(0.1, 12, 12);
      const dotMat = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        emissive: 0xb91c1c,
        emissiveIntensity: 0.8
      });
      const dotMesh = new THREE.Mesh(dotGeom, dotMat);
      dotMesh.position.set(0.1, 0.55, 0.38);
      modelGroup.add(dotMesh);

      // Hemozoin pigment granules
      for (let g = 0; g < 6; g++) {
        const granuleGeom = new THREE.DodecahedronGeometry(0.04);
        const granuleMat = new THREE.MeshStandardMaterial({ color: 0x3f2e1a, roughness: 0.1 });
        const granuleMesh = new THREE.Mesh(granuleGeom, granuleMat);
        granuleMesh.position.set(
          0.2 + (Math.random() - 0.5) * 0.25,
          0.1 + (Math.random() - 0.5) * 0.2,
          0.3 + (Math.random() - 0.5) * 0.1
        );
        modelGroup.add(granuleMesh);
      }
    } else {
      // General nematode / Sarcoptes / Fluke default representation
      const geom = new THREE.TorusKnotGeometry(0.8, 0.25, 64, 16);
      const mesh = new THREE.Mesh(geom, mainMaterial);
      modelGroup.add(mesh);
    }

    // Scale according to config
    modelGroup.scale.set(currentConfig.scale, currentConfig.scale, currentConfig.scale);

    // Initial camera alignment
    modelGroup.rotation.set(0.2, 0.3, 0);
  }, [currentConfig, opticalFilter, cuticleOpacity]);

  // Main Animation & Render Loop
  useEffect(() => {
    let clock = new THREE.Clock();

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Inertia / idle rotation if user is not dragging
      if (modelGroupRef.current && !isDraggingRef.current) {
        modelGroupRef.current.rotation.y += rotationMomentumRef.current.y;
        modelGroupRef.current.rotation.x += rotationMomentumRef.current.x * 0.5;

        // Apply friction
        rotationMomentumRef.current.x *= 0.98;
        rotationMomentumRef.current.y = Math.max(0.002, rotationMomentumRef.current.y * 0.98);
      }

      // Update animated parts (motility, undulating flagella)
      if (isMotilityActive) {
        animatedPartsRef.current.forEach((part) => {
          part.update(elapsedTime);
        });

        // Gentle biological breathing / pulsation
        if (modelGroupRef.current) {
          const breath = Math.sin(elapsedTime * 2) * 0.015;
          const s = currentConfig.scale * (1 + breath);
          modelGroupRef.current.scale.set(s, s, s);
        }
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
    };
  }, [currentConfig.scale, isMotilityActive]);

  // Mouse & Touch Pointer Handlers for 360° Orbit Drag
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    previousPointerPositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current || !modelGroupRef.current) return;

    const deltaX = e.clientX - previousPointerPositionRef.current.x;
    const deltaY = e.clientY - previousPointerPositionRef.current.y;

    modelGroupRef.current.rotation.y += deltaX * 0.008;
    modelGroupRef.current.rotation.x += deltaY * 0.008;

    rotationMomentumRef.current = {
      x: deltaY * 0.001,
      y: deltaX * 0.001
    };

    previousPointerPositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!cameraRef.current) return;
    const zoomDelta = e.deltaY * 0.003;
    const newZ = Math.min(Math.max(cameraRef.current.position.z + zoomDelta, 1.8), 8.0);
    cameraRef.current.position.z = newZ;
    zoomLevelRef.current = newZ;
  };

  const resetView = () => {
    if (!modelGroupRef.current || !cameraRef.current) return;
    modelGroupRef.current.rotation.set(0.2, 0.3, 0);
    cameraRef.current.position.z = objectiveLens === '10x' ? 6.2 : objectiveLens === '40x' ? 4.0 : 2.7;
    rotationMomentumRef.current = { x: 0.002, y: 0.004 };
  };

  const handleHotspotClick = (hotspot: Hotspot) => {
    setActiveHotspot(hotspot);
    if (!modelGroupRef.current || !cameraRef.current) return;

    // Smoothly rotate model to face the hotspot
    modelGroupRef.current.rotation.x = -hotspot.position[1] * 0.3;
    modelGroupRef.current.rotation.y = hotspot.position[0] * 0.5;
  };

  return (
    <div className="space-y-6">
      
      {/* 3D Lab Top Header */}
      <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 border border-slate-800 p-6 sm:p-8 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>
              {language === 'ar'
                ? 'مختبر المحاكاة المجهري ثلاثي الأبعاد (WebGL 3D Engine)'
                : language === 'fr'
                ? 'Laboratoire de Microscopie 3D Haute Résolution'
                : 'Interactive 3D Parasitology Virtual Microscope'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {language === 'ar'
              ? 'محاكي فحص وتشريح الطفيليات المجهري ثلاثي الأبعاد'
              : language === 'fr'
              ? 'Simulateur 3D d\'Exploration & Diagnostic Parasitaire'
              : '3D Parasite Microscopic Detection & Dissection Simulator'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {language === 'ar'
              ? 'استكشف البنية المورفولوجية الحقيقية لمختلف الطفيليات بزاوية 360 درجة، مع محاكاة بصرية كاملة للعدسات الشيئية (10X, 40X, 100X Oil)، والأصباغ الفلورية، والتشريح المقطعي، وشبكة القياس الميكرومترية الدقيقة.'
              : language === 'fr'
              ? 'Explorez la morphologie parasitaire en 3D à 360°, avec simulation optique complète des objectifs (10X, 40X, 100X immersion), fluorescence UV, dissection des organites et micromètre gradué.'
              : 'Inspect real 3D morphological parasite architecture in 360° space, complete with optical objective simulation (10X, 40X, 100X Oil), darkfield and fluorescence filters, organelle dissection, and calibrated reticle.'}
          </p>
        </div>

        {/* Decorative blur */}
        <div className="absolute top-1/2 -translate-y-1/2 ltr:-right-10 rtl:-left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main 3D Simulator Workstation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: 3D Canvas Viewport (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          
          {/* Main 3D Viewport Box */}
          <div
            ref={containerRef}
            className="relative w-full h-[450px] sm:h-[540px] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center select-none"
          >
            {/* Interactive WebGL Canvas */}
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onWheel={handleWheel}
              className="w-full h-full cursor-grab active:cursor-grabbing outline-none"
            />

            {/* Circular Microscope Aperture Overlay (When in 100x or brightfield) */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_80px_rgba(0,0,0,0.85)] border border-slate-800/60" />

            {/* Top Viewport Floating Status Bar */}
            <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none text-xs">
              
              {/* Species Badge */}
              <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-white italic font-serif">
                  {fullParasiteData.scientificName}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-300 text-[11px] font-mono">
                  {currentConfig.realSizeUm}
                </span>
              </div>

              {/* View Controls & Reset */}
              <div className="pointer-events-auto flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-1 rounded-lg shadow-lg">
                <button
                  onClick={() => setIsMotilityActive(!isMotilityActive)}
                  className={`p-1.5 rounded transition-colors ${
                    isMotilityActive ? 'text-emerald-400 bg-emerald-950/60' : 'text-slate-400 hover:text-white'
                  }`}
                  title={language === 'ar' ? 'تشغيل/إيقاف الحركة البيولوجية' : 'Toggle Biological Motility'}
                >
                  <Activity className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowReticle(!showReticle)}
                  className={`p-1.5 rounded transition-colors ${
                    showReticle ? 'text-cyan-400 bg-cyan-950/60' : 'text-slate-400 hover:text-white'
                  }`}
                  title={language === 'ar' ? 'شبكة الميكرومتر' : 'Toggle Micrometer Reticle'}
                >
                  <Compass className="w-4 h-4" />
                </button>
                <button
                  onClick={resetView}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  title={language === 'ar' ? 'إعادة ضبط الزاوية' : 'Reset View'}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calibrated Micrometer Reticle Overlay (Graduated Scale in µm) */}
            {showReticle && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-60">
                {/* Crosshairs */}
                <div className="w-48 h-[1px] bg-cyan-400/40" />
                <div className="h-48 w-[1px] bg-cyan-400/40 absolute" />
                {/* Concentric measurement rings */}
                <div className="w-32 h-32 border border-cyan-400/30 rounded-full absolute" />
                <div className="w-64 h-64 border border-cyan-400/20 rounded-full absolute" />
                
                {/* Scale legend on bottom left */}
                <div className="absolute bottom-4 left-4 bg-slate-950/80 px-2.5 py-1 rounded border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-6 h-[2px] bg-cyan-400 inline-block" />
                    <span>= 10 µm ({objectiveLens.toUpperCase()})</span>
                  </div>
                </div>
              </div>
            )}

            {/* Floating Hotspot Pins overlay (if enabled) */}
            {showHotspotPins && (
              <div className="absolute bottom-3 right-3 flex flex-wrap items-center gap-1.5 pointer-events-auto">
                {currentConfig.hotspots.map((hs, i) => (
                  <button
                    key={hs.id}
                    onClick={() => handleHotspotClick(hs)}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all flex items-center gap-1.5 shadow-md ${
                      activeHotspot?.id === hs.id
                        ? 'bg-emerald-600 text-white border-emerald-400 scale-105'
                        : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{hs.title[language]}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Instruction tooltip */}
            <div className="absolute bottom-3 left-3 text-[10px] text-slate-400 pointer-events-none bg-slate-950/60 px-2 py-0.5 rounded backdrop-blur-sm hidden sm:block">
              {language === 'ar' ? 'اسحب للتدوير 360° · عجلة الفأرة للتكبير والتصغير' : 'Drag to rotate 360° · Scroll to zoom'}
            </div>
          </div>

          {/* Bottom Viewport Controls Toolbar */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Objective Lens Selector */}
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  {language === 'ar' ? 'العدسة الشيئية (Magnification)' : 'Objective Lens'}
                </label>
                <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                  {(['10x', '40x', '100x'] as ObjectiveLens[]).map((lens) => (
                    <button
                      key={lens}
                      onClick={() => setObjectiveLens(lens)}
                      className={`py-1.5 text-xs font-mono font-bold rounded transition-colors ${
                        objectiveLens === lens
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {lens.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optical Filter Mode */}
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  {language === 'ar' ? 'المرشح الضوئي (Optical Mode)' : 'Optical Filter'}
                </label>
                <div className="grid grid-cols-2 gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[10px]">
                  {[
                    { id: 'brightfield', label: language === 'ar' ? 'ضوء ساطع' : 'Brightfield' },
                    { id: 'darkfield', label: language === 'ar' ? 'حقل مظلم' : 'Darkfield' },
                    { id: 'phase_contrast', label: language === 'ar' ? 'تباين طور' : 'Phase Cont.' },
                    { id: 'fluorescence', label: language === 'ar' ? 'فلوري (UV)' : 'Fluorescence' }
                  ].map((flt) => (
                    <button
                      key={flt.id}
                      onClick={() => setOpticalFilter(flt.id as OpticalFilter)}
                      className={`py-1 px-1.5 font-semibold rounded truncate transition-colors ${
                        opticalFilter === flt.id
                          ? 'bg-teal-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {flt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cuticle Dissection Transparency Slider */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {language === 'ar' ? 'تشريح الغلاف (Cuticle)' : 'Dissection Cutaway'}
                  </label>
                  <span className="text-[10px] font-mono text-emerald-400">
                    {Math.round(cuticleOpacity * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.15"
                  max="1.0"
                  step="0.05"
                  value={cuticleOpacity}
                  onChange={(e) => setCuticleOpacity(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-950 rounded-lg cursor-pointer h-2"
                />
                <span className="text-[10px] text-slate-500 block mt-1">
                  {language === 'ar' ? 'خفف الشفافية لرؤية العضيات الداخلية' : 'Lower opacity to reveal internal organelles'}
                </span>
              </div>

            </div>

          </div>

          {/* Active Hotspot Detailed Diagnostic Card (If clicked) */}
          {activeHotspot && (
            <div className="p-4 bg-slate-900 border border-emerald-500/40 rounded-xl space-y-2 relative shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <h4 className="text-sm font-bold text-white">
                    {activeHotspot.title[language]}
                  </h4>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    {activeHotspot.metricSize}
                  </span>
                </div>
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {activeHotspot.description[language]}
              </p>

              <div className="pt-2 border-t border-slate-800 text-xs flex items-start gap-2 text-emerald-300">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                <span>
                  <strong>{language === 'ar' ? 'الأهمية التشخيصية:' : 'Diagnostic Significance:'}</strong>{' '}
                  {activeHotspot.diagnosticSignificance[language]}
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Species Catalog & 3D Interactive Challenge (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Species Selector Card */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center justify-between">
              <span>{language === 'ar' ? 'عينات الطفيليات ثلاثية الأبعاد' : '3D Specimen Collection'}</span>
              <span className="text-[10px] text-emerald-400 font-mono">
                {Object.keys(PARASITE_3D_CONFIGS).length} Models
              </span>
            </h3>

            <div className="space-y-1.5 max-h-[300px] overflow-y-auto pr-1">
              {Object.values(PARASITE_3D_CONFIGS).map((cfg) => {
                const parasite = allParasites.find((p) => p.id === cfg.id);
                if (!parasite) return null;
                const isSelected = selectedConfigId === cfg.id;

                return (
                  <button
                    key={cfg.id}
                    onClick={() => {
                      setSelectedConfigId(cfg.id);
                      setActiveHotspot(null);
                    }}
                    className={`w-full p-2.5 rounded-lg border text-left rtl:text-right transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-500/15 border-emerald-500 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs font-serif italic text-white flex items-center gap-1.5">
                        <span>{parasite.scientificName}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[180px]">
                        {parasite.commonNames[language]}
                      </div>
                    </div>

                    <div className="text-right rtl:text-left text-[10px] font-mono text-emerald-400">
                      {parasite.type.slice(0, 4).toUpperCase()}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Morphological Monograph Specs for Active Specimen */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 text-xs">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider border-b border-slate-800 pb-2">
              {language === 'ar' ? 'السمات المورفولوجية المعتمدة' : 'Accredited Morphological Data'}
            </h3>

            <div className="space-y-2">
              <div>
                <span className="text-slate-500 font-semibold block text-[10px] uppercase">
                  {language === 'ar' ? 'المرحلة التشخيصية:' : 'Diagnostic Stage:'}
                </span>
                <span className="font-semibold text-slate-200">
                  {fullParasiteData.morphology.diagnosticStages.join(', ')}
                </span>
              </div>

              <div>
                <span className="text-slate-500 font-semibold block text-[10px] uppercase">
                  {language === 'ar' ? 'الأبعاد الحقيقية بالميكرون:' : 'Micrometric Dimensions:'}
                </span>
                <span className="font-mono text-emerald-400 font-bold">
                  {fullParasiteData.morphology.dimensions}
                </span>
              </div>

              <div>
                <span className="text-slate-500 font-semibold block text-[10px] uppercase">
                  {language === 'ar' ? 'طرق الصباغة المخبرية:' : 'Staining & Diagnostic Methods:'}
                </span>
                <span className="text-slate-300 text-[11px]">
                  {fullParasiteData.morphology.stainingAndDiagnosticMethods[language]}
                </span>
              </div>
            </div>

            {onSelectParasite && (
              <button
                onClick={() => onSelectParasite(fullParasiteData)}
                className="w-full mt-2 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'ar' ? 'عرض المونوغراف الكامل للطفيلي' : 'Open Full Parasite Monograph'}</span>
              </button>
            )}
          </div>

          {/* 3D Diagnostic Challenge Mode Box */}
          <div className="p-4 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-slate-800 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ar' ? 'تحدي الكشف المجهري 3D' : '3D Diagnostic Challenge'}</span>
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {language === 'ar' ? `النقاط: ${challengeScore}` : `Score: ${challengeScore}`}
              </span>
            </div>

            <p className="text-[11px] text-slate-300 font-normal leading-relaxed">
              {language === 'ar'
                ? 'اختبر مهاراتك السريرية في تشخيص العينة المعروضة بناءً على مورفولوجيا النموذج ثلاثي الأبعاد.'
                : 'Identify the active 3D parasite based on its microscopic morphology and organelles.'}
            </p>

            <div className="space-y-1.5 pt-1">
              {[
                'giardia-lamblia',
                'toxoplasma-gondii',
                'fasciola-hepatica',
                'echinococcus-granulosus'
              ].map((candId) => {
                const cand = allParasites.find((p) => p.id === candId);
                if (!cand) return null;

                const isCorrect = candId === currentConfig.id;
                const isSelected = challengeAnswered === candId;

                return (
                  <button
                    key={candId}
                    onClick={() => {
                      setChallengeAnswered(candId);
                      if (isCorrect) setChallengeScore((s) => s + 10);
                    }}
                    disabled={challengeAnswered !== null}
                    className={`w-full py-1.5 px-3 rounded-lg text-xs font-serif italic text-left rtl:text-right border transition-all ${
                      challengeAnswered
                        ? isCorrect
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200'
                          : isSelected
                          ? 'bg-rose-500/20 border-rose-500 text-rose-200'
                          : 'bg-slate-950 border-slate-800 text-slate-500'
                        : 'bg-slate-950 hover:bg-slate-800 border-slate-800 text-slate-300'
                    }`}
                  >
                    <span>{cand.scientificName}</span>
                  </button>
                );
              })}
            </div>

            {challengeAnswered && (
              <div className="pt-2 text-center">
                <button
                  onClick={() => {
                    const keys = Object.keys(PARASITE_3D_CONFIGS);
                    const randomKey = keys[Math.floor(Math.random() * keys.length)];
                    setSelectedConfigId(randomKey);
                    setChallengeAnswered(null);
                    setActiveHotspot(null);
                  }}
                  className="py-1 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
                >
                  {language === 'ar' ? 'العينة التالية' : 'Next Challenge Specimen'}
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
