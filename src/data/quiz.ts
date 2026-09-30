import { LocalizedString } from '../types/parasite';

export interface QuizQuestion {
  id: string;
  category: 'microscopy' | 'life_cycle' | 'clinical' | 'treatment' | 'zoonosis';
  question: LocalizedString;
  options: {
    ar: string[];
    en: string[];
    fr: string[];
  };
  correctIndex: number;
  explanation: LocalizedString;
  scientificReference: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'microscopy',
    question: {
      ar: 'شريحة مجهرية من عينة براز لغنم مصاب بالهزال وفقر الدم ووذمة الفك "Bottle jaw"، أظهرت بيضة بيضاوية ذهبية عملاقة بطول 140 ميكرون ذات غطاء قطبي (Operculum). ما هو الطفيلي المسبب؟',
      en: 'Fecal sedimentation from an anemic sheep with submandibular "bottle jaw" edema reveals a large golden-brown operculated egg (140 µm). Which parasite is responsible?',
      fr: 'Une sédimentation fécale chez un mouton anémique présentant un œdème en "bouteille" montre un volumineux œuf operculé brun-doré de 140 µm. Quel est le parasite ?'
    },
    options: {
      ar: ['المثقوبة الكبدية (Fasciola hepatica)', 'الجيارديا (Giardia duodenalis)', 'الديدان الدبوسية (Enterobius)', 'الشريطية العزلاء (Taenia saginata)'],
      en: ['Common Liver Fluke (Fasciola hepatica)', 'Giardia duodenalis', 'Pinworm (Enterobius vermicularis)', 'Beef Tapeworm (Taenia saginata)'],
      fr: ['Grande Douve du Foie (Fasciola hepatica)', 'Giardia duodenalis', 'Oxyure (Enterobius vermicularis)', 'Tænia du bœuf (Taenia saginata)']
    },
    correctIndex: 0,
    explanation: {
      ar: 'بيوض Fasciola hepatica تتميز بكبر حجمها (130-150 ميكرون) ولونها الأصفر الذهبي ووجود الغطاء القطبي؛ ولا تطفو في محاليل التعويم الخفيفة بل تشخص بالترسيب.',
      en: 'Fasciola hepatica eggs are characteristically large (130-150 µm), golden-brown, operculated, and diagnosed via fecal sedimentation.',
      fr: 'Les œufs de Fasciola hepatica sont volumineux (130–150 µm), jaune-brunâtre, operculés, et nécessitent une technique de sédimentation fécale.'
    },
    scientificReference: 'WOAH Terrestrial Manual & CDC DPDx (Fascioliasis)'
  },
  {
    id: 'q2',
    category: 'zoonosis',
    question: {
      ar: 'ما هو العائل النهائي الحصري للمقوسة الغوندية (Toxoplasma gondii) القادر على إفراز البيوض المتكيسة غير المبوغة في البيئة؟',
      en: 'Which animal acts as the sole definitive host capable of shedding unsporulated Toxoplasma gondii oocysts into the environment?',
      fr: 'Quel animal est l\'unique hôte définitif capable d\'excréter des oocystes non sporulés de Toxoplasma gondii ?'
    },
    options: {
      ar: ['الكلاب الأليفة (Canines)', 'السنوريات كالقطط (Felids)', 'الأغنام والماعز (Ovine/Caprine)', 'الخيول والحمير (Equines)'],
      en: ['Canines (Dogs)', 'Felids (Domestic and wild cats)', 'Ruminants (Sheep and goats)', 'Equines (Horses)'],
      fr: ['Canidés (Chiens)', 'Félidés (Chats domestiques et sauvages)', 'Ruminants (Ovins et caprins)', 'Équidés (Chevaux)']
    },
    correctIndex: 1,
    explanation: {
      ar: 'القطط وفصيلة السنوريات فقط هي التي تحدث فيها الدورة الجنسية المعوية وتفرز البيوض في البراز، بينما باقي الثدييات والطيور عوائل وسيطة تأوي الأكياس النسيجية.',
      en: 'Felids are the only hosts in which the enteroepithelial sexual cycle occurs, producing infectious oocysts.',
      fr: 'Les félidés sont les seuls hôtes chez qui se déroule le cycle entéro-épithélial sexué producteur d\'oocystes.'
    },
    scientificReference: 'CDC DPDx - Toxoplasmosis & Manson\'s Tropical Infectious Diseases'
  },
  {
    id: 'q3',
    category: 'treatment',
    question: {
      ar: 'لماذا يعتبر عقار البرازيكوانتل (Praziquantel) غير فعال إطلاقاً في علاج الإصابة بالمثقوبة الكبدية (Fasciola hepatica)؟',
      en: 'Why is Praziquantel contraindicated/ineffective for treating Fasciola hepatica infections?',
      fr: 'Pourquoi le praziquantel est-il inefficace pour traiter Fasciola hepatica ?'
    },
    options: {
      ar: ['لأنه يقتل الديدان الشريطية فقط دون المثقوبات', 'لأن الفاسيولا تفتقر إلى المستقبلات الحساسة للكالسيوم التي يؤثر عليها البرازيكوانتل، ويوصى بالتريكلابندازول', 'لأنه يسبب تليفاً سريعاً في الكبد', 'لأنه يتحلل في المعدة قبل الوصول للكبد'],
      en: ['It only kills cestodes, never trematodes', 'Fasciola flukes lack the specific calcium-channel target sensitivity to praziquantel; Triclabendazole is the drug of choice', 'It causes acute liver necrosis', 'It is destroyed by gastric acid'],
      fr: ['Il n\'est actif que sur les cestodes', 'Fasciola hepatica est naturellement réfractaire au praziquantel en raison de cibles calciques distinctes ; le triclabendazole est requis', 'Il provoque une cirrhose toxique aiguë', 'Il est détruit dans l\'estomac']
    },
    correctIndex: 1,
    explanation: {
      ar: 'الفاسيولا تختلف عن بقية المثقوبات (كالبلهارسيا) في بنية قنوات الكالسيوم الغشائية، لذلك التريكلابندازول (Triclabendazole) هو الدواء المعتمد الوحيد عالمياً من WHO.',
      en: 'Unlike Schistosoma, Fasciola is naturally insensitive to praziquantel; Triclabendazole is the gold standard.',
      fr: 'Contrairement aux schistosomes, la grande douve est résistante au praziquantel. Le triclabendazole est l\'unique molécule efficace.'
    },
    scientificReference: 'WHO Guidelines on Management of Human Fascioliasis (2024)'
  },
  {
    id: 'q4',
    category: 'clinical',
    question: {
      ar: 'كلب يعاني من حكة شديدة مستمرة مع قشور على حواف الأذنين والمرفقين، وظهور منعكس حك الأذن-القدم الإيجابي (Pinna-pedal scratch reflex). ما هو الفحص التشخيصي الأول؟',
      en: 'A dog presents with intense pruritus, crusting of ear pinnae and elbows, and a positive pinna-pedal scratch reflex. What is the immediate diagnostic step?',
      fr: 'Un chien présente un prurit intense avec croûtes aux oreilles et coudes, et réflexe otopodal positif. Quel examen immédiat réaliser ?'
    },
    options: {
      ar: ['فحص عينة دم بالموجات الصوتية', 'كشاطة جلدية عميقة (Deep skin scraping) مع زيت معدني حتى ظهور نزف شعري خفيف', 'زراعة بكتيرية للأذن', 'فحص تعويم البراز'],
      en: ['Cardiac echocardiogram', 'Deep skin scraping with mineral oil until slight capillary bleeding', 'Bacterial ear culture', 'Fecal flotation'],
      fr: ['Échocardiographie', 'Raclage cutané profond avec huile minérale jusqu\'à la rosée sanguine', 'Culture auriculaire bactérienne', 'Flottation fécale']
    },
    correctIndex: 1,
    explanation: {
      ar: 'عث الجرب (Sarcoptes scabiei) يعيش في أنفاق داخل الطبقة القرنية والبشرة، لذا يلزم كشاطة عميقة مع الزيت المعدني للوصول إليه وفحصه مجهرياً.',
      en: 'Sarcoptes scabiei burrows in the stratum corneum; a deep skin scraping with mineral oil to the level of capillary bleeding is standard.',
      fr: 'Le sarcopte creuse des sillons sous la couche cornée ; un raclage profond jusqu\'à la rosée sanguine est indispensable pour le visualiser.'
    },
    scientificReference: 'ESCCAP Guideline 03: Ectoparasites & Veterinary Dermatology'
  },
  {
    id: 'q5',
    category: 'life_cycle',
    question: {
      ar: 'ما هي الطريقة الرئيسية لانتقال الكيس المائي (Echinococcus granulosus) للإنسان؟',
      en: 'What is the primary transmission route of cystic echinococcosis (hydatid cyst) to humans?',
      fr: 'Quel est le mode principal de contamination de l\'Homme par le kyste hydatique (Echinococcus granulosus) ?'
    },
    options: {
      ar: ['أكل لحم الخروف النيئ المحتوي على الأكياس المائية', 'ابتلاع بيوض المشوكة الحبيبية المطروحة في براز الكلاب عبر الأيدي أو الطعام أو الماء الملوث', 'لدغات البعوض أو القراد', 'السباحة في مياه المستنقعات واختراق الجلد'],
      en: ['Eating raw sheep liver containing hydatid cysts', 'Ingestion of microscopically resilient eggs shed in dog feces via hands, food, or water', 'Bite of infected mosquitoes or ticks', 'Percutaneous skin penetration during swimming'],
      fr: ['Consommer du foie de mouton cru porteur de kystes', 'Ingestion fécale-orale d\'œufs rejetés dans les déjections canines (mains sales, eau, crudités)', 'Piqûre de moustiques ou tiques', 'Pénétration transcutanée en nageant']
    },
    correctIndex: 1,
    explanation: {
      ar: 'خطأ شائع هو الاعتقاد بأن الإنسان يصاب بأكل الكيس؛ الإنسان هو عائل وسيط عرضي يصاب بابتلاع بيوض الطفيلي من براز الكلب، بينما الكلاب هي التي تصاب بأكل الكيس من أحشاء الخروف.',
      en: 'Crucial distinction: Humans contract hydatid disease by ingesting dog-shed eggs, NOT by eating raw hydatid cysts (which infects canids).',
      fr: 'Distinction capitale : l\'homme s\'infeste par ingestion des œufs rejetés par le chien, et non en mangeant le kyste (qui infeste le chien).'
    },
    scientificReference: 'WHO Manual on Echinococcosis & CDC DPDx'
  }
];
