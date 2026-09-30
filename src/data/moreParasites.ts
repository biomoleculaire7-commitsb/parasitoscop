import { Parasite } from '../types/parasite';

export const additionalParasites: Parasite[] = [
  {
    id: 'ancylostoma-hookworm',
    scientificName: 'Ancylostoma duodenale / Ancylostoma caninum',
    commonNames: {
      ar: 'الدودة الشصية / الأنكلستوما (داء المنسدات الشصية)',
      en: 'Hookworm (Ancylostomiasis & Cutaneous Larva Migrans)',
      fr: 'Ankylostome (Ancylostomose & Larva Migrans Cutanée)'
    },
    type: 'nematode',
    phylum: 'Nematoda',
    class: 'Chromadorea',
    order: 'Rhabditida',
    family: 'Ancylostomatidae',
    genus: 'Ancylostoma',
    species: 'A. duodenale / A. caninum / A. braziliense',
    zoonoticRisk: 'very_high',
    hosts: {
      definitive: {
        ar: 'الكلاب والقطط (A. caninum, A. braziliense) والإنسان (A. duodenale, Necator americanus)',
        en: 'Canines and felines (A. caninum, A. braziliense) and humans (A. duodenale, Necator americanus)',
        fr: 'Canidés et félidés (A. caninum, A. braziliense) et l\'Homme (A. duodenale, Necator americanus)'
      },
      intermediate: {
        ar: 'لا يوجد عائل وسيط (تتطور اليرقات في التربة الرملية الدافئة الرطبة)',
        en: 'None (Direct geohelminth soil-transmitted nematode)',
        fr: 'Aucun (Géohelminthe tellurique direct)'
      },
      accidentalOrDeadEnd: {
        ar: 'الإنسان بالنسبة ليرقات كلاب الأنكلستوما (تسبب داء اليرقة المهاجرة الجلدية الحكاكة Creeping Eruption)',
        en: 'Humans for animal hookworms (causes intensely pruritic Cutaneous Larva Migrans)',
        fr: 'L\'Homme pour les ankylostomes animaux (provoque la Larva Migrans Cutanée serpigineuse)'
      }
    },
    transmission: {
      ar: 'اختراق الجلد الفعال المباشر بواسطة يرقات الطور الثالث الخيطية (L3 Filariform larvae) من التربة الملوثة أو الرمال أثناء المشي حافي القدمين، أو ابتلاع يرقات L3، وانتقال عبر لبن الرضاعة (Transmammary) في الجراء',
      en: 'Percutaneous penetration of skin by infective filariform larvae (L3) from sandy warm soil; ingestion of larvae; and transmammary lactation transmission in nursing puppies',
      fr: 'Pénétration transcutanée active des larves filariformes L3 marchant pieds nus sur sol ou sable souillé ; voie orale et voie trans-mammaire chez le chiot'
    },
    morphology: {
      diagnosticStages: ['Thin-shelled morula egg (55–75 x 35–45 µm)', 'Filariform L3 infective larva (500–600 µm)', 'Hooked adult worm with buccal teeth (8–13 mm)'],
      dimensions: '55–75 µm (بيوض) / 8–13 مم (دودة بالغة)',
      microscopicFeatures: {
        ar: 'البيضة بيضاوية ذات قطبين عريضين مستديرين، محاطة بقشرة زجاجية شفافة رفيعة جداً وحيدة الخط، وتحتوي عند طرحها في البراز الطازج على كتلة توتية (Morula) مكونة من 4 إلى 8 قسيمات أريمية (Blastomeres) مع فراغ شفاف واضح بين القشرة والجنين؛ الدودة البالغة رأسها منحنٍ للخلف كالشص ومحفظتها الفموية مسلحة بزوجين إلى 3 أزواج من الأسنان الحادة الماصة للدماء',
        en: 'Oval egg with blunt rounded poles, exceptionally thin, clear, smooth hyaline shell; freshly shed stool contains a morula of 4 to 8 blastomeres with a distinct clear space between embryo and shell wall; adult has hook-like curved anterior end with chitinous teeth',
        fr: 'Œuf ellipsoïde régulier à coque très mince lisse et transparente (hyaline), contenant une morula de 4 à 8 blastomères avec espace clair sous la coque ; adulte à extrémité antérieure courbée en crochet avec capsules buccales armées de dents'
      },
      stainingAndDiagnosticMethods: {
        ar: 'فحص البراز المباشر بلغول اليود أو تعويم البراز بكبريتات الزنك (ZnSO4 / NaCl)، استنبات يرقات البراز بطريقة هارادا-موري (Harada-Mori culture)، وتعداد الدم الشامل لكشف فقر الدم صغير الكريات ناقص الصباغ',
        en: 'Fecal flotation with zinc sulfate or standard salt solution; Harada-Mori filter paper culture to differentiate filariform larvae from Strongyloides; CBC showing microcytic hypochromic anemia',
        fr: 'Flottation fécale au sulfate de zinc ; coproculture de Harada-Mori pour identifier les larves L3 ; NFS montrant une anémie microcytaire hypochrome sévère'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'تفرز البيوض في البراز في طور 4-8 خلايا، تفقس في التربة الدافئة يرقات عصوية رابديتية (L1)، تنسلخ مرتين لتصبح يرقات خيطية معدية (L3). تخترق جلد العائل، تهاجر عبر الدم إلى الرئتين، تخترق الحويصلات وتصعد القصبات الهوائية إلى البلعوم، وتبتلع لتستقر في الأمعاء الدقيقة وتثبت أسنانها في المخاطية لامتصاص الدم',
        en: 'Eggs shed in stool at 4-8 cell stage; hatch in warm moist soil into rhabditiform larvae (L1); molt twice to infective sheathed filariform (L3). L3 penetrate skin, migrate via bloodstream to lungs, rupture into alveoli, ascend bronchial tree, swallowed into small intestine where they anchor to mucosa with teeth and suck blood',
        fr: 'Œufs éliminés au stade morula 4-8 cellules ; éclosion tellurique en larve rhabditoïde L1 ; mues en larve filariforme L3 infestante. Pénétration cutanée, passage sanguin vers les poumons, alvéoles, déglutition trachéale et fixation hématophage dans le duodénum'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'طرح البيوض الشصية في البراز (طور 4-8 خلايا)', en: 'Egg Shedding (4-8 Cell Morula)', fr: 'Élimination fécale (Stade morula)' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: {
            ar: 'تضع الإناث في الأمعاء الدقيقة آلاف البيوض الرقيقة الجدار المحتوية على 4-8 خلايا وتخرج مع البراز',
            en: 'Adult females release thousands of thin-shelled unembryonated eggs containing a 4-8 cell morula into stool',
            fr: 'Les femelles pondent des milliers d\'œufs à coque mince contenant une morula de 4 à 8 blastomères évacués dans les selles'
          },
          location: { ar: 'البراز والتربة', en: 'Feces & Soil', fr: 'Fèces et sol' }
        },
        {
          stageNumber: 2,
          title: { ar: 'الفقس والتطور في التربة إلى طور L3 المعدي', en: 'Soil Hatch & L3 Filariform Maturation', fr: 'Éclosion tellurique & Stade L3 infectant' },
          hostType: 'environment',
          isDiagnostic: false,
          isInfective: true,
          description: {
            ar: 'تفقس البيضة في التربة الدافئة الرملية خلال 24-48 ساعة محررة يرقة رابديتية (L1) تتغذى على البكتيريا، ثم تنسلخ مرتين خلال 5-10 أيام لتصبح يرقة خيطية معدية (L3) حية حرة تترصد العائل',
            en: 'Eggs hatch in warm moist soil in 24-48h into rhabditiform larvae (L1); molt into non-feeding infective filariform larvae (L3) capable of surviving weeks on grass/soil',
            fr: 'Éclosion en 24-48h de larves rhabditoïdes L1 qui muent en 5 à 10 jours en larves filariformes L3 infestantes prêtes à pénétrer la peau'
          },
          location: { ar: 'التربة الرملية الرطبة، الشواطئ، والرمال الملوثة', en: 'Warm moist sandy soil & beach sand', fr: 'Sable chaud humide et sols ombragés' }
        },
        {
          stageNumber: 3,
          title: { ar: 'اختراق الجلد والهجرة الرئوية', en: 'Percutaneous Penetration & Pulmonary Migration', fr: 'Pénétration cutanée & Migration pulmonaire' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: {
            ar: 'تخترق اليرقة جلد الأقدام حافية الأرجل مفرزة إنزيمات محللة وتحدث حكة موضعية شديدة؛ تدخل الأوردة إلى القلب والرئتين وتصعد القصبات لتبتلع',
            en: 'Larvae penetrate intact skin, causing intense local pruritus ("ground itch"); travel via venules to heart and pulmonary capillaries, penetrate alveoli, ascend to pharynx and swallowed',
            fr: 'Pénétration de la peau nue ("gourme de terre"), migration par voie veineuse vers le cœur droit, capillaires pulmonaires, alvéoles, trachée et déglutition'
          },
          location: { ar: 'الجلد، الدورة الدموية، الأسناخ الرئوية', en: 'Skin, Bloodstream, Alveoli, Trachea', fr: 'Peau, lit vasculaire, poumons, pharynx' }
        },
        {
          stageNumber: 4,
          title: { ar: 'الاستقرار المعوي ومص الدماء المستمر', en: 'Intestinal Attachment & Hematophagy', fr: 'Fixation duodénale & Spoliation sanguine' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: {
            ar: 'تصل الديدان إلى الصائم والاثني عشر، تثبت أسنانها في الغشاء المخاطي مفرزة مضادات تخثر وتبتلع الدم مسببة نزيفاً مزمناً وفقر دم ونقص حديد هائل',
            en: 'Adults fasten firmly onto mucosa of duodenum and jejunum using cutting teeth; produce anticoagulants and suck up to 0.25 mL blood per worm per day',
            fr: 'Fixation sur les villosités duodénales par les dents chitineuses ; sécrétion d\'anticoagulants et spoliation de 0,2 ml de sang par ver par jour'
          },
          location: { ar: 'مخاطية الاثني عشر والصائم', en: 'Duodenal and jejunal mucosa', fr: 'Muqueuse duodéno-jéjunale' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Dogs / Puppies (كلاب وجراء)', 'Cats (قطط)', 'Wild Canids (ثعالب وذئاب)'],
      clinicalSigns: {
        ar: [
          'في الجراء حديثة الولادة: فقر دم قاتل شاحب جداً، موت مفاجئ خلال أسبوعين إلى 3 أسابيع من الولادة نتيجة الرضاعة من أمهات حاملات ليرقات خامدة',
          'براز أسود قطبي زفتي مدمم كريه الرائحة (Melena) ناتج عن النزيف المعوي المستمر',
          'شعر باهت متلبد، هزال سريع، ضعف، وجفاف شديد مع فقدان بروتينات البلازما'
        ],
        en: [
          'Severe peracute fatal anemia in nursing puppies infected via colostrum/milk; pale gums, collapse, sudden death at 2-3 weeks of age',
          'Tarry dark black bloody diarrhea (melena) from constant intestinal bleeding',
          'Rough unkempt hair coat, profound emaciation, hypoproteinemia, and stunted growth'
        ],
        fr: [
          'Anémie foudroyante mortelle chez les chiots par transmission trans-mammaire ; muqueuses d\'une pâleur de porcelaine, mort à 2-3 semaines',
          'Diarrhée noirâtre goudronneuse fétide (méléna) par saignement digestif actif',
          'Pelage terne piqué, cachexie, hypoprotéinémie et retard de développement majeur'
        ]
      },
      pathology: {
        ar: 'التهاب الأمعاء النزفي التقرحي الشديد مع ثقوب دقيقة في مخاطية الاثني عشر ونزيف شعري مستمر وفقر دم نخري',
        en: 'Multifocal hemorrhagic ulcerative enteritis with mucosal punctate bleeders; severe normocytic/microcytic regenerative to hypoplastic anemia',
        fr: 'Entérite hémorragique ulcéreuse diffuse avec micro-saignements muqueux en nappe ; anémie arégénérative sévère'
      },
      severity: 'fatal'
    },
    humanImpact: {
      isZoonotic: true,
      incubationPeriod: {
        ar: 'حكة اختراق الجلد: دقائق إلى أيام؛ فقر الدم والأعراض المعوية: 5 إلى 8 أسابيع بعد العدوى',
        en: 'Ground itch at entry site: minutes to 48 hours; Intestinal anemia and gastrointestinal symptoms: 5 to 8 weeks',
        fr: 'Prurit d\'invasion cutanée : quelques heures ; Signes digestifs et anémie : 5 à 8 semaines'
      },
      acuteSigns: {
        ar: [
          'حكة التربة (Ground Itch): طفح جلدي حطاطي حويصلي شديد الحكة في أسفل القدمين أو بين الأصابع مكان دخول اليرقات',
          'داء اليرقة المهاجرة الجلدية (Cutaneous Larva Migrans / Creeping Eruption): خطوط حمراء بارزة ملتوية متعرجة تتقدم يومياً ببطء مع حكة لا تطاق (خاصة على الشواطئ الرملية)',
          'سعال جاف خفيف أثناء عبور اليرقات بالرئتين مصحوب بحمى خفيفة'
        ],
        en: [
          '"Ground itch": intense pruritic erythematous papulovesicular eruption at larval skin penetration sites (feet, toes)',
          'Cutaneous Larva Migrans (CLM / creeping eruption): serpiginous, elevated reddish tracks advancing 1-2 cm daily with agonizing pruritus',
          'Mild cough, pharyngitis, and transient wheezing during transpulmonary passage'
        ],
        fr: [
          '"Gourme de terre" : éruption papulo-vésiculeuse intensément prurigineuse au point de pénétration des pieds',
          'Larva Migrans Cutanée (syndrome de larva currens/creeping eruption) : cordons serpigineux érythémateux mobiles très prurigineux',
          'Toux sèche et fébricule lors du passage pulmonaire'
        ]
      },
      chronicComplications: {
        ar: [
          'فقر دم شديد بنقص الحديد ونقص البروتين (Microcytic hypochromic iron deficiency anemia) مع خمول وإرهاق شديد وضيق تنفس عند أدنى مجهود',
          'شهوة الغرائب (Pica): رغبة ملحة في تناول الطين أو التراب أو الثلج نتيجة نقص الحديد المزمن',
          'تأخر حاد في النمو الجسدي والإدراكي والعقلي عند الأطفال المصابين في سن المدرسة',
          'قصور القلب عالي النتاج (High-output heart failure) في الحالات المتقدمة غير المعالجة'
        ],
        en: [
          'Severe microcytic hypochromic iron-deficiency anemia and hypoalbuminemia leading to peripheral anasarca/edema',
          'Pica (intense craving to eat dirt, chalk, or clay) secondary to severe iron depletion',
          'Impaired physical growth and irreversible neurocognitive deficits in infected children',
          'High-output congestive heart failure in severe long-standing infestations'
        ],
        fr: [
          'Anémie ferriprive microcytaire hypochrome sévère et hypoalbuminémie avec œdèmes des membres',
          'Géophagie et pica (besoin compulsif d\'ingérer de la terre) secondaires à la sidéropénie',
          'Retard staturo-pondéral et déficits cognitifs chez les enfants d\'âge scolaire',
          'Insuffisance cardiaque à haut débit dans les anémies sévères non traitées'
        ]
      },
      highRiskGroups: {
        ar: ['الأطفال والمزارعون والعمال الذين يسيرون حفاة الأقدام في التربة الرطبة', 'مرتادو الشواطئ الرملية الملوثة بفضلات الكلاب', 'النساء الحوامل في المناطق الموبوءة (خطر ولادة مبكرة ونزيف)'],
        en: ['Barefoot agricultural laborers, children playing on contaminated soil', 'Beachgoers walking or sitting on dog-frequented tropical sandy beaches', 'Pregnant women in endemic areas (risk of low birthweight and maternal mortality)'],
        fr: ['Agriculteurs et enfants marchant pieds nus sur terre battue humide', 'Vacanciers s\'allongeant sur les plages souillées par les déjections de chiens', 'Femmes enceintes (risque de prématurité et mortalité périnatale)']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [
          { drug: 'Pyrantel Pamoate (بيرانتيل باموات)', dosageGuideline: '5–10 mg/kg PO; mandatory for puppies at 2, 4, 6, and 8 weeks of age', note: { ar: 'العقار المعياري شديد الأمان لعلاج الجراء الحوامل والمرضعات والوقاية من الموت بنقص الدم', en: 'Safe, rapid paralyzing agent; mandatory baseline dewormer for young puppies', fr: 'Molécule de choix ultra-sécuritaire dès 2 semaines d\'âge chez le chiot' } },
          { drug: 'Fenbendazole (فينبندازول)', dosageGuideline: '50 mg/kg PO daily for 3 consecutive days', note: { ar: 'فعال ضد الديدان البالغة والأطوار اليرقية في الأمعاء', en: 'Broad-spectrum nematode efficacy against adults and mucosal stages', fr: 'Large spectre éliminant les adultes et formes larvaires intestinales' } },
          { drug: 'Milbemycin Oxime / Moxidectin', dosageGuideline: 'Monthly oral or topical spot-on formulation', note: { ar: 'وقاية شهرية تقضي على الديدان الشصية وديدان القلب معاً', en: 'Monthly broad-spectrum preventive clearing hookworms and heartworms', fr: 'Prophylaxie mensuelle combinée anti-ankylostome et dirofilaria' } }
        ],
        precautions: {
          ar: 'قد تحتاج الجراء المصابة بشدة لنقل دم كامل أو بلازما ومكملات الحديد الوريدي/الفموي لإنقاذ حياتها من الصدمة النزفية',
          en: 'Severely parasitized puppies require immediate whole blood transfusion and iron supplementation to survive hemorrhagic collapse',
          fr: 'Transfusion sanguine d\'urgence et supplémentation martiale indispensables chez le chiot effondré'
        }
      },
      human: {
        firstLineDrugs: [
          { drug: 'Albendazole (ألبندازول)', dosageGuideline: '400 mg single oral dose on empty stomach', note: { ar: 'العلاج المعياري الذهبي المعتمد من منظمة الصحة العالمية بنسبة شفاء تتجاوز 95%', en: 'First-line gold standard WHO-recommended therapy (> 95% cure rate)', fr: 'Traitement de référence absolu OMS en prise unique de 400 mg' } },
          { drug: 'Mebendazole (ميبندازول)', dosageGuideline: '100 mg PO bid for 3 consecutive days (or 500 mg single dose)', note: { ar: 'بديل فعال جداً وسهل التوفر في جميع المراكز الصحية', en: 'Highly effective alternative protocol', fr: 'Alternative majeure très efficace en cure de 3 jours' } },
          { drug: 'Ivermectin (إيفرمكتين فموي) أو Albendazole كريم موضعي', dosageGuideline: '200 µg/kg single oral dose for Cutaneous Larva Migrans', note: { ar: 'العلاج النوعي لداء اليرقة المهاجرة الجلدية الحكاكة (Creeping Eruption)', en: 'Treatment of choice for cutaneous larva migrans (CLM creeping eruption)', fr: 'Traitement de référence de la larva migrans cutanée serpigineuse' } }
        ],
        notes: {
          ar: 'يجب إعطاء سلفات الحديد الفموية (Iron sulfate 200 mg tid) وحمض الفوليك لمدة 2-3 أشهر لتعويض مخزون الحديد في الدم',
          en: 'Concurrent oral iron supplementation (ferrous sulfate 200 mg tid) is essential for 3 months to replenish marrow iron reserves',
          fr: 'Supplémentation en fer oral obligatoire pendant 3 mois pour reconstituer les réserves en fer'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: [
          'تجريع الكلاب والجراء بشكل وقائي دوري ابتداءً من عمر أسبوعين ثم كل أسبوعين حتى الفطام',
          'علاج الأمهات الحوامل في النصف الثاني من الحمل لمنع انتقال اليرقات للضرع والحليب',
          'التخلص اليومي الفوري من براز الكلاب في الحدائق والمنازل قبل فقس اليرقات في التربة'
        ],
        en: [
          'Routine prophylactic deworming of puppies starting at 2 weeks, repeated at 4, 6, 8 weeks',
          'Deworm gestating breeding dams to prevent transmammary transmission to neonates',
          'Daily pickup and safe disposal of canine feces from lawns and dog runs before eggs hatch'
        ],
        fr: [
          'Vermifugation systématique des chiots à 2, 4, 6 et 8 semaines d\'âge',
          'Traitement des lices reproductrices en fin de gestation pour bloquer le passage lacté',
          'Ramassage quotidien obligatoire des déjections canines avant éclosion des larves'
        ]
      },
      human: {
        ar: [
          'ارتداء الأحذية المغلقة دائماً والامتناع عن المشي حافي القدمين على التربة الرطبة أو الرمال المشبوهة',
          'استخدام حصائر سميكة أو كراسي عند الجلوس على الشواطئ الرملية المفتوحة للكلاب',
          'غسل اليدين بالماء والصابون بعد التعامل مع التربة أو الحيوانات الأليفة'
        ],
        en: [
          'Always wear protective footwear; avoid walking barefoot on warm soil or damp sand',
          'Use beach mats, towels, or elevated chairs when lounging on tropical sandy beaches',
          'Strict handwashing after gardening or handling puppies'
        ],
        fr: [
          'Port systématique de chaussures fermées ; ne jamais marcher pieds nus sur sol ou sable humide',
          'Interdire l\'accès des chiens aux plages et utiliser un matelas épais pour s\'allonger',
          'Lavage soigneux des mains après le jardinage ou le contact avec les chiots'
        ]
      },
      environmental: {
        ar: [
          'منع تجول الكلاب في شواطئ الاستجمام وحدائق الأطفال وصناديق الرمال',
          'توفير مراحيض صحية لمنع التبرز في العراء وتلوث التربة الزراعية بالبراز البشري',
          'حملات التخلص من الديدان الجماعية المدرسية الدورية (Mass Drug Administration)'
        ],
        en: [
          'Prohibit dogs on recreational public bathing beaches and children playgrounds',
          'Provide sanitary latrines to end open defecation and soil contamination',
          'Implement periodic community mass drug administration (MDA) with albendazole'
        ],
        fr: [
          'Interdiction stricte des chiens sur les plages de baignade et aires de jeux d\'enfants',
          'Lutte contre la défécation à l\'air libre par l\'installation de sanitaires publics',
          'Campagnes scolaires régulières de déparasitage de masse'
        ]
      }
    },
    sampleMicrographs: [
      {
        title: { ar: 'بيضة دودة شصية (أنكلستوما) بمرحلة التوتية 4-8 خلايا', en: 'Ancylostoma Hookworm Egg (4-8 Cell Morula)', fr: 'Œuf d\'Ankylostome (Morula 4-8 cellules)' },
        stage: 'Morula Stage Egg (بيضة رقيقة الجدار محتوية على قسيمات أريمية)',
        magnification: '400x High Power',
        stain: 'Direct Wet Mount / Lugol',
        imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'بيضة بيضاوية ذات قشرة شفافة رقيقة جداً وكتلة خلوية في مرحلة التوتية مع فراغ شفاف واسع بين القشرة والجنين',
          en: 'Diagnostic regular oval egg with razor-thin clear hyaline shell containing 4-8 blastomeres with clear space',
          fr: 'Œuf ovale caractéristique à coque translucide extrêmement fine entourant une morula de 4 à 8 cellules'
        }
      }
    ],
    videos: [
      {
        id: 'hookworm-lifecycle',
        title: { ar: 'دورة حياة الديدان الشصية (أنكلستوما) وفقر الدم (CDC/NEJM)', en: 'Hookworm Life Cycle, Pathophysiology & Blood Loss', fr: 'Cycle de l\'ankylostome et anémie spoliative' },
        type: 'life_cycle_animation',
        duration: '4:10',
        youtubeId: 'ZY5aYYR053Q',
        sourceName: 'CDC / DPDx Parasitology',
        description: {
          ar: 'شرح علمي كامل لاختراق الجلد والهجرة الرئوية وآلية مص الدم بالأسنان المحفظية في الأمعاء',
          en: 'Detailed animation showing percutaneous invasion, pulmonary transit, and intestinal blood-feeding',
          fr: 'Animation médicale détaillée de la pénétration cutanée, transit et spoliation sanguine duodénale'
        }
      }
    ],
    scientificSources: [
      {
        title: 'CDC DPDx - Laboratory Identification of Parasites: Hookworm',
        organization: 'Centers for Disease Control and Prevention',
        year: '2024',
        url: 'https://www.cdc.gov/dpdx/hookworm/index.html',
        citationType: 'guideline'
      },
      {
        title: 'WHO Guidelines on Soil-Transmitted Helminthiases: Hookworm Disease',
        organization: 'World Health Organization (WHO)',
        year: '2024',
        url: 'https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections',
        citationType: 'guideline'
      },
      {
        title: 'Companion Animal Parasite Council (CAPC): Hookworms in Dogs and Cats',
        organization: 'CAPC Vet Guidelines',
        year: '2023',
        url: 'https://capcvet.org/guidelines/hookworms/',
        citationType: 'standard'
      }
    ]
  },
  {
    id: 'ascaris-lumbricoides',
    scientificName: 'Ascaris lumbricoides / Ascaris suum',
    commonNames: {
      ar: 'دودة الصَفَر الخراطينية (داء الأسكاريس عند الإنسان والخنزير)',
      en: 'Giant Roundworm (Ascariasis)',
      fr: 'Ascaris lumbricoïde (Ascaridiose)'
    },
    type: 'nematode',
    phylum: 'Nematoda',
    class: 'Chromadorea',
    order: 'Rhabditida',
    family: 'Ascarididae',
    genus: 'Ascaris',
    species: 'A. lumbricoides / A. suum',
    zoonoticRisk: 'high',
    hosts: {
      definitive: {
        ar: 'الإنسان (A. lumbricoides) والخنازير (A. suum مع انتقال متبادل مشترك)',
        en: 'Humans (A. lumbricoides) and swine (A. suum, with cross-zoonotic potential)',
        fr: 'L\'Homme (A. lumbricoides) et le porc (A. suum, transmission croisée possible)'
      },
      intermediate: {
        ar: 'لا يوجد عائل وسيط (تتطور البيضة في التربة الرطبة)',
        en: 'None (Direct geohelminth soil-transmitted nematode)',
        fr: 'Aucun (Géohelminthe à transmission tellurique directe)'
      }
    },
    transmission: {
      ar: 'ابتلاع البيوض المخصبة الملوثة بالأجنة المعدية (طور L3) عبر الخضار النيئة والتربة ومياه الشرب غير المعالجة',
      en: 'Ingestion of embryonated infective eggs (L3 larva) via contaminated soil, fresh produce, unwashed hands, or water',
      fr: 'Ingestion d\'œufs embryonnés infectieux (L3) par les crudités, l\'eau souillée ou la terre (géophagie)'
    },
    morphology: {
      diagnosticStages: ['Fertilized mammillated egg (45–75 x 35–50 µm)', 'Unfertilized elongated egg (85–95 x 43–47 µm)', 'Large cylindrical adult worm (15–35 cm)'],
      dimensions: '45–75 µm (بيوض) / 15–35 سم (دودة بالغة)',
      microscopicFeatures: {
        ar: 'البيضة المخصبة بيضاوية ذات قشرة صفراء بنية سميكة محاطة بطبقة حلمية ناتئة متعرجة (Mammillated) وبداخلها كتلة جنينية غير مقسمة؛ الدودة البالغة أسطوانية ضخمة بلون وردي مائل للبياض ولها 3 شفاه فموية حساسة',
        en: 'Fertilized egg is round-oval with thick golden-brown shell covered by a bumpy mammillated albuminous coat; adult is a robust cylindrical pink-white worm with 3 trilobed lips',
        fr: 'Œuf fécondé arrondi brun-doré à coque épaisse mamelonnée crénelée typique ; adulte cylindrique volumineux rosé à trois lèvres céphaliques'
      },
      stainingAndDiagnosticMethods: {
        ar: 'فحص البراز المجهري المباشر بلغول اليود، تقنية كاتو-كاتز (Kato-Katz) لعد البيوض، وفحص البلغم في الطور الرئوي بحثاً عن اليرقات وخلايا الحمضات',
        en: 'Direct fecal wet mount, Kato-Katz quantitative smear, sputum examination for migrating larvae and eosinophils during pulmonary phase',
        fr: 'Examen direct des selles au Lugol, méthode de Kato-Katz (comptage d\'œufs), recherche de larves dans l\'expectoration en phase pulmonaire'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'تبتلع البيوض الجنينية، تفقس اليرقات في الأمعاء وتخترق الجدار إلى الأوردة المساريقية، تمر عبر الكبد إلى القلب والرئتين، تخترق الأسناخ وتصعد الرغامي ثم تبلع من جديد لتصل للأمعاء وتصبح ديداناً بالغة تنتج 200,000 بيضة يومياً',
        en: 'Embryonated eggs ingested; larvae hatch in gut, penetrate mesenteric venules, migrate to liver then heart/lungs, penetrate alveoli, ascend bronchial tree to pharynx, swallowed to small intestine to mature into adults',
        fr: 'Ingestion d\'œufs embryonnés, éclosion larvaire duodénale, traversée muqueuse, migration hépatique puis cardio-pulmonaire, déglutition trachéale et maturation intestinale définitive'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'طرح البيوض غير الجنينية', en: 'Unembryonated Egg Shedding', fr: 'Élimination des œufs non embryonnés' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'تطرح الإناث البالغة نحو 200,000 بيضة يومياً مع البراز غير معدية فور خروجها', en: 'Female sheds up to 200,000 unembryonated, non-infective eggs daily into feces', fr: 'Ponte de 200 000 œufs par jour évacués non embryonnés dans les selles' },
          location: { ar: 'البراز والتربة', en: 'Feces & Topsoil', fr: 'Fèces et sol' }
        },
        {
          stageNumber: 2,
          title: { ar: 'التجنين في التربة (طور L3)', en: 'Soil Embryonation to L3', fr: 'Embryonnement dans le sol' },
          hostType: 'environment',
          isDiagnostic: false,
          isInfective: true,
          description: { ar: 'تتحول البيضة في التربة الدافئة الرطبة إلى جنين معدٍ ذي يرقة في الطور الثالث (L3) خلال 2-4 أسابيع وتبقى حية لسنوات', en: 'Eggs develop into infective third-stage larvae (L3) in warm moist soil in 2–4 weeks, persisting for years', fr: 'Maturation tellurique en 2 à 4 semaines sous climat chaud et humide ; l\'œuf devient infectant (stade L3)' },
          location: { ar: 'التربة والخضار الزراعية', en: 'Cultivated soil & crops', fr: 'Terre agricole et cultures maraîchères' }
        },
        {
          stageNumber: 3,
          title: { ar: 'الهجرة الكبدية الرئوية (متلازمة لوفلر)', en: 'Hepato-Pulmonary Migration (Löffler Syndrome)', fr: 'Migration hépato-pulmonaire (Syndrome de Löffler)' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'تخترق اليرقات الأمعاء إلى الكبد ثم الرئتين وتخترق الحويصلات مسببة سعالاً وربواً عابراً مع فرط حمضات دموي', en: 'Hatched larvae traverse gut wall to portal system, liver, lungs, rupturing alveoli and causing eosinophilic pneumonitis', fr: 'Franchissement de la paroi intestinale, foie, capillaires pulmonaires et alvéoles provoquant une pneumonie éosinophilique fébrile' },
          location: { ar: 'الكبد، الحويصلات الرئوية، القصبات', en: 'Liver, Pulmonary Alveoli, Trachea', fr: 'Foie, alvéoles et arbre bronchique' }
        },
        {
          stageNumber: 4,
          title: { ar: 'الاستقرار المعوي والبلوغ', en: 'Intestinal Maturation & Egg Production', fr: 'Maturation et ponte intestinale' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'تصعد اليرقات إلى الحلق وتبتلع لتستقر في الصائم وتنمو إلى ديدان بالغة تعيش لمدة 1-2 سنة', en: 'Coughed up and swallowed, larvae mature into reproductive adults in jejunum within 2–3 months', fr: 'Dégluties, les larves colonisent le jéjunum et deviennent des vers adultes géants pondant pendant 1 an' },
          location: { ar: 'تجويف الأمعاء الدقيقة (الصائم)', en: 'Lumen of Small Intestine (Jejunum)', fr: 'Lumière du jéjunum' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Swine (خنازير)', 'Wild Boars (خنازير برية)'],
      clinicalSigns: {
        ar: [
          'السعال النباحي الجاف في صغار الخنازير (Ascaris thumps)',
          'بقع كبدية حليبية مميزة في المسالخ (Milk spot liver) تؤدي لإتلاف الأكباد',
          'ضعف معدل التحويل الغذائي وبطء النمو والهزال'
        ],
        en: [
          'Respiratory "thumps" (harsh dry cough, dyspnea) in young growing pigs',
          '"Milk spot liver" (fibrotic white necrotic scars) on abattoir condemnation',
          'Poor feed conversion ratio, stunting, and unthriftiness'
        ],
        fr: [
          'Toux sèche quinteuse ("thumps") et dyspnée d\'effort chez le porcelet',
          'Lésions hépatiques caractéristiques en "taches de lait" entraînant la saisie du foie',
          'Retard de croissance et détérioration de l\'indice de consommation'
        ]
      },
      pathology: {
        ar: 'تليف محيطي بالوريد البابي الكبدي يشكل ندبات بيضاء كالحليب؛ التهاب رئوي نضحي بالحمضات',
        en: 'Chronic interstitial hepatitis with fibrous white cicatrices ("milk spots"); petechial pulmonary hemorrhages',
        fr: 'Hépatite interstitielle fibreuse cicatricielle en taches de lait ; foyers micro-hémorragiques pulmonaires'
      },
      severity: 'moderate'
    },
    humanImpact: {
      isZoonotic: true,
      incubationPeriod: {
        ar: 'المرحلة الرئوية: 4 إلى 16 يوماً؛ اكتمال دورة الدودة وإنتاج البيض: 60 إلى 75 يوماً',
        en: 'Pulmonary symptoms: 4 to 16 days; Prepatent period to adult egg-laying: 60 to 75 days',
        fr: 'Symptômes pulmonaires : 4 à 16 jours ; Phase de maturation prépatente : 2 à 3 mois'
      },
      acuteSigns: {
        ar: [
          'متلازمة لوفلر الرئوية: سعال جاف، وزيز صدري، حمى خفيفة، ونفث دم مجهري مع فرط حمضات الدم',
          'ألم بطني ماغص حول السرة وغثيان وانتفاخ',
          'خروج ديدان بالغة مع القيء أو البراز أو من الأنف'
        ],
        en: [
          'Löffler syndrome: wheezing, paroxysmal cough, dyspnea, fleeting pulmonary infiltrates, eosinophilia',
          'Periumbilical colicky abdominal pain, bloating, nausea',
          'Spontaneous emergence of large live adult worms from mouth, nostrils, or anus'
        ],
        fr: [
          'Syndrome de Löffler : toux quinteuse, râles sibilants, infiltrats pulmonaires labiles, hyperéosinophilie',
          'Douleurs abdominales péri-ombilicales crampoïdes, nausées et météorisme',
          'Émission spectaculaire de vers vivants dans les selles ou par vomissements'
        ]
      },
      chronicComplications: {
        ar: [
          'انسداد الأمعاء الميكانيكي الحاد (Mechanical bowel obstruction) بكتلة متشابكة من الديدان في الصغار',
          'هجرة الديدان الشاذة إلى القناة الصفراوية (التهاب المرارة، يرقان انسدادي) أو القناة البنكرياسية',
          'سوء تغذية الأطفال ونقص فيتامين A والبروتين وتأخر الإدراك الذهني'
        ],
        en: [
          'Acute mechanical intestinal bolus obstruction, particularly in preschool children',
          'Biliary ascariasis (biliary colic, ascending suppurative cholangitis, acute pancreatitis)',
          'Chronic malnutrition, vitamin A/protein deficiency, and cognitive delay in high-worm burden children'
        ],
        fr: [
          'Occlusion intestinale mécanique aiguë par pelote d\'ascaris chez le jeune enfant',
          'Ascaridiose hépatobiliaire et pancréatique (angiocholite, pancréatite aiguë)',
          'Malnutrition chronique, carence en vitamine A et retard du développement'
        ]
      },
      highRiskGroups: {
        ar: ['الأطفال في سن ما قبل المدرسة وسن المدرسة في المناطق الريفية', 'المزارعون الذين يستخدمون السماد العضوي البشري أو الحيواني غير المعالج'],
        en: ['Young preschool and school-age children in rural communities with poor sanitation', 'Agricultural workers exposed to untreated "night soil" fertilizer'],
        fr: ['Enfants en âge préscolaire et scolaire jouant dans la terre', 'Maraîchers et agriculteurs manipulant des engrais organiques non compostés']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [
          { drug: 'Fenbendazole / Flubendazole', dosageGuideline: '5 mg/kg PO in swine feed or water for 3–5 days', note: { ar: 'فعال ضد الأطوار اليرقية والبالغة في الخنازير', en: 'Broad-spectrum ovicidal and larvicidal efficacy in swine', fr: 'Efficace sur les larves tissulaires et adultes porcins' } },
          { drug: 'Ivermectin / Doramectin', dosageGuideline: '0.3 mg/kg SC or in feed', note: { ar: 'يقضي على الأطوار المهاجرة والبالغات', en: 'Parenteral macrocyclic lactone clears both migrating larvae and intestinal worms', fr: 'Élimine les larves migratrices et les vers adultes' } }
        ],
        precautions: {
          ar: 'تطهير حظائر الولادة بالبخار الساخن لأن بيوض الأسكاريس تقاوم معظم المطهرات الكيميائية المعتادة',
          en: 'Thoroughly flame or steam-clean farrowing pens; eggs resist standard chemical disinfectants',
          fr: 'Désinfection thermique à la vapeur des porcheries (les œufs résistent aux désinfectants chimiques ordinaires)'
        }
      },
      human: {
        firstLineDrugs: [
          { drug: 'Albendazole (ألبندازول)', dosageGuideline: '400 mg single oral dose (Children > 1 year: 200–400 mg)', note: { ar: 'العلاج المعياري المعتمد بجرعة واحدة ونسبة شفاء تتجاوز 95%', en: 'First-line single-dose cure with > 95% efficacy', fr: 'Traitement de choix en prise unique (> 95 % de guérison)' } },
          { drug: 'Mebendazole (ميبندازول)', dosageGuideline: '500 mg single dose or 100 mg bid for 3 days', note: { ar: 'بديل علاجي فعال جداً ومجرب على نطاق عالمي واسع', en: 'Highly effective WHO-recommended alternative', fr: 'Alternative majeure recommandée par l\'OMS' } },
          { drug: 'Ivermectin', dosageGuideline: '200 µg/kg single dose', note: { ar: 'فعال وسهل الإعطاء في حملات التخلص من الديدان الجماعية', en: 'Effective oral alternative used in mass deworming programs', fr: 'Alternative efficace en campagne de masse' } }
        ],
        surgicalIntervention: {
          ar: 'استخراج تنظيري أو جراحي عاجل في حال انسداد الأمعاء التام أو انحشار الديدان في القنوات الصفراوية',
          en: 'Endoscopic retrograde or surgical laparotomy for acute complete bowel obstruction or biliary impaction',
          fr: 'Laparotomie en urgence ou extraction endoscopique en cas d\'occlusion mécanique complète ou migration biliaire'
        },
        notes: {
          ar: 'في حالات الانسداد المعوي الجزئي الخفيف، يمكن إعطاء بيبرازين (Piperazine) لإحداث شلل رخو في الديدان لتسهيل خروجها دون تكتل تشنجي',
          en: 'Piperazine causes flaccid paralysis of worms, minimizing impaction risks during partial subocclusion',
          fr: 'La pipérazine paralyse les vers et évite le spasme de pelote obstructive'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: [
          'تنظيف أمهات الخنازير وإزالة التربة والروث العالق بأجسادها قبل نقلها لحظائر الولادة المعقمة',
          'برنامج تجريع دوري دوري بالبندازول لكل قطيع التربية',
          'منع اختلاط الخنازير بالمراعي الملوثة بفضلات الإنسان'
        ],
        en: [
          'Wash and scrub sows before transferring into sanitized farrowing crates',
          'Strategic anthelmintic rotation for gestating breeding herds',
          'Strict exclusion of untreated human waste from pig enclosures'
        ],
        fr: [
          'Lavage et déparasitage des truies avant l\'entrée en maternité désinfectée',
          'Déparasitage systématique des porcelets au sevrage et des reproducteurs',
          'Interdiction stricte de l\'accès du bétail aux déjections humaines non traitées'
        ]
      },
      human: {
        ar: [
          'غسل اليدين جيداً بالماء والصابون قبل الأكل وبعد استخدام المراحيض أو اللعب بالتربة',
          'غسل الخضار الورقية والفواكه بفرشاة وتحت ماء جارٍ غزير وتقشيرها أو طهيها',
          'قص أظافر الأطفال بانتظام لمنع تراكم بيوض الديدان تحتها'
        ],
        en: [
          'Universal handwashing with soap before meals, food handling, and after soil exposure',
          'Vigorous washing, peeling, or thorough cooking of raw vegetables grown in fertilized soil',
          'Keep children\'s fingernails trimmed short to prevent subungual egg trapping'
        ],
        fr: [
          'Lavage systématique des mains à l\'eau et au savon avant tout repas et après manipulation de terre',
          'Nettoyage rigoureux des crudités ou cuisson des légumes de pleine terre',
          'Couper court les ongles des enfants pour éviter l\'accumulation d\'œufs sous les ongles'
        ]
      },
      environmental: {
        ar: [
          'منع استخدام مياه الصرف الصحي غير المعالجة أو الروث البشري الخام في ري وتسميد الخضار',
          'بناء مراحيض صحية متطورة وفصل شبكات الصرف الصحي عن المزارع والمياه الجوفية',
          'حملات التخلص من الديدان الجماعية المدرسية الدورية (Mass Drug Administration) في المناطق الموبوءة'
        ],
        en: [
          'Prohibit using untreated raw human feces / night soil as crop fertilizer',
          'Construct sanitary latrines and improve community sewage disposal infrastructure',
          'Periodic school-based Mass Drug Administration (MDA) with albendazole in endemic belts'
        ],
        fr: [
          'Interdiction formelle de l\'épandage de boues fécales humaines fraîches sur les cultures maraîchères',
          'Construction de latrines sanitaires étanches et assainissement des eaux usées',
          'Programmes de déparasitage systématique en milieu scolaire (traitement de masse à l\'albendazole)'
        ]
      }
    },
    sampleMicrographs: [
      {
        title: { ar: 'بيضة أسكاريس مخصبة ذات غلاف متعرج', en: 'Ascaris lumbricoides Fertilized Egg', fr: 'Œuf fécondé d\'Ascaris' },
        stage: 'Fertilized Corticated Egg (بيضة مخصبة مقشرة)',
        magnification: '400x High Power',
        stain: 'Lugol Iodine Wet Mount',
        imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'بيضة ذهبية سميكة الجدار محاطة بنتوءات متعرجة مميزة تشبه الحلمات',
          en: 'Classic golden mammillated thick albuminous outer shell containing an unsegmented embryo',
          fr: 'Coque brune très épaisse mamelonnée entourant l\'ovocyte non segmenté'
        }
      }
    ],
    videos: [
      {
        id: 'ascaris-surgery',
        title: { ar: 'دورة حياة دودة الأسكاريس والانسداد المعوي (CDC/NEJM)', en: 'Ascaris lumbricoides: Biology & Clinical Manifestations', fr: 'Cycle d\'Ascaris lumbricoides et complications' },
        type: 'life_cycle_animation',
        duration: '3:50',
        youtubeId: 'J1v0VHKTjZM',
        sourceName: 'CDC Parasitology / Global Health',
        description: {
          ar: 'شرح علمي كامل للهجرة الرئوية ومضاعفات الانسداد المعوي',
          en: 'Comprehensive visual journey of larval migration and intestinal obstruction',
          fr: 'Vidéo scientifique détaillant la migration pulmonaire et l\'occlusion digestive'
        }
      }
    ],
    scientificSources: [
      {
        title: 'WHO Fact Sheets: Soil-Transmitted Helminth Infections',
        organization: 'World Health Organization (WHO)',
        year: '2024',
        url: 'https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections',
        citationType: 'guideline'
      },
      {
        title: 'CDC DPDx - Laboratory Identification of Parasites: Ascariasis',
        organization: 'Centers for Disease Control and Prevention',
        year: '2024',
        url: 'https://www.cdc.gov/dpdx/ascariasis/index.html',
        citationType: 'guideline'
      }
    ]
  },
  {
    id: 'dirofilaria-immitis',
    scientificName: 'Dirofilaria immitis',
    commonNames: {
      ar: 'دودة القلب عند الكلاب والقطط (داء الفيلاريا القلبية)',
      en: 'Heartworm Disease (Cardiovascular Dirofilariasis)',
      fr: 'Ver du cœur (Dirofilariose cardio-pulmonaire)'
    },
    type: 'nematode',
    phylum: 'Nematoda',
    class: 'Chromadorea',
    order: 'Rhabditida',
    family: 'Onchocercidae',
    genus: 'Dirofilaria',
    species: 'D. immitis',
    zoonoticRisk: 'moderate',
    hosts: {
      definitive: {
        ar: 'الكلاب الأليفة والبرية، الذئاب، الثعالب، والقطط والنمور',
        en: 'Canids (domestic dogs, coyotes, foxes) and felines (domestic cats, ferrets)',
        fr: 'Canidés (chien domestique, renard, chacal) et félidés (chat, furet)'
      },
      intermediate: {
        ar: 'البعوض الحامل للعدوى (أجناس Culex, Aedes, Anopheles تفرز يرقة L3 المعدية)',
        en: 'Culicid Mosquitoes (over 70 species across Culex, Aedes, Anopheles transmit infective L3 larvae)',
        fr: 'Moustiques culicidés (Culex, Aedes, Anopheles transmettant les larves L3 infectantes)'
      },
      accidentalOrDeadEnd: {
        ar: 'الإنسان (عائل عرضي مسدود، لا يكتمل نضج الديدان البالغة بل تشكل عقيدات رئوية "عملة معدنية")',
        en: 'Humans (Dead-end accidental host, larvae form benign pulmonary "coin lesion" granulomas)',
        fr: 'L\'Homme (Hôte accidentel en impasse parasitaire formant des nodules pulmonaires en "pièce de monnaie")'
      }
    },
    transmission: {
      ar: 'لدغة بعوضة حاملة ليرقات الطور الثالث المعدية (L3) التي تترسب على الجلد وتدخل عبر ثقب اللدغة',
      en: 'Inoculation of infective third-stage larvae (L3) during feeding bite of an infected mosquito vector',
      fr: 'Piqûre de moustique femelle infesté déposant les larves L3 infectantes à la surface de la peau'
    },
    morphology: {
      diagnosticStages: ['Microfilariae circulating in blood (290–330 x 6–7 µm)', 'Slender white adult worms in pulmonary arteries (12–30 cm)'],
      dimensions: '300 µm (ميكروفيلاريا دموية) / 12–30 سم (ديدان بالغة)',
      microscopicFeatures: {
        ar: 'الميكروفيلاريا سابحة في الدم ذات نهاية أمامية مدببة وذيل مستقيم غير مغمدة (Sheathless) وتتحرك حركة تموجية نشطة في قطرة الدم الطازجة؛ الدودة البالغة خيطية بيضاء طويلة تعيش في الشريان الرئوي والبطين الأيمن',
        en: 'Unsheathed microfilariae with tapered anterior end and straight tail; adults are long, slender white nematodes residing in pulmonary arterial branches and right ventricle',
        fr: 'Microfilaires sanguines dégainées à extrémité céphalique effilée et queue rectiligne ; vers adultes blanchâtres filiformes de 15 à 30 cm'
      },
      stainingAndDiagnosticMethods: {
        ar: 'فحص مستضد الدودة الأنثوية بالدم (Heartworm Antigen ELISA / Lateral Flow)، اختبار نوت المعدل (Modified Knott’s test) لتمييز الميكروفيلاريا عن Acanthocheilonema، وتخطيط صدى القلب (Echocardiography) مظهر خطوط متوازية مزدوجة "علامة علامة التساوي ="',
        en: 'Blood female antigen serology (ELISA / Lateral flow), Modified Knott\'s concentration test for microfilariae, thoracic radiography, echocardiography ("equal sign =" adult worms)',
        fr: 'Test antigénique sérique rapide ELISA (antigènes utérins de la femelle), test de Knott modifié, radiographie thoracique, échocardiographie (signe du "double trait =")'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'تلد الإناث البالغة ميكروفيلاريا في مجرى دم الكلب؛ يمتصها البعوض مع وجبة الدم لتتطور خلال أسبوعين إلى يرقات معدية L3 في الغدد اللعابية؛ عند اللدغ تنتقل إلى كلب سليم، تهاجر في الأنسجة وتصل إلى الشرايين الرئوية بعد 70-120 يوماً لتنضج خلال 6-7 أشهر',
        en: 'Adult females in pulmonary arteries release microfilariae into bloodstream. Mosquito ingests microfilariae; develops to L3 infective larvae in 10-14 days. Inoculated into new host, migrates through subcutaneous tissues and reaches pulmonary arteries at 70-120 days, maturing into reproducing adults by 6-7 months',
        fr: 'Les adultes dans les artères pulmonaires pondent des microfilaires sanguines. Le moustique les aspire ; maturation en L3 en 15 jours. Réinoculation, migration tissulaire et colonisation de l\'artère pulmonaire en 3 mois, maturité en 6 mois'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'دوران الميكروفيلاريا في الدم', en: 'Microfilaremia in Circulation', fr: 'Microfilarémie sanguine' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'تنتج الديدان البالغة آلاف الميكروفيلاريا النشطة التي تجوب مجرى الدم المحيطي وتعيش حتى عامين', en: 'Fertilized adult females shed thousands of unsheathed microfilariae that circulate in peripheral vessels', fr: 'Production continue de microfilaires mobiles dans le lit vasculaire circulant jusqu\'à 2 ans' },
          location: { ar: 'مجرى الدم المحيطي', en: 'Peripheral circulation', fr: 'Circulation sanguine périphérique' }
        },
        {
          stageNumber: 2,
          title: { ar: 'التطور داخل البعوض إلى طور L3 المعدي', en: 'Mosquito Vector Development (L1 to L3)', fr: 'Évolution chez le moustique (L1 à L3)' },
          hostType: 'vector',
          isDiagnostic: false,
          isInfective: true,
          description: { ar: 'تخترق الميكروفيلاريا أنابيب ملبيغي في البعوض وتنسلخ مرتين لتصبح يرقات L3 معدية تهاجر لخرطوم البعوض', en: 'Microfilariae enter Malpighian tubules, molting to L1, L2, and infective L3 larvae in mouthparts', fr: 'Migration dans les tubes de Malpighi du moustique et mue en larve L3 infestante dans la trompe' },
          location: { ar: 'خرطوم البعوض والغدد اللعابية', en: 'Mosquito proboscis & Malpighian tubules', fr: 'Trompe du moustique' }
        },
        {
          stageNumber: 3,
          title: { ar: 'الانتقال باللدغ والهجرة النسيجية', en: 'Inoculation & Tissue Migration', fr: 'Inoculation et migration tissulaire' },
          hostType: 'definitive',
          isDiagnostic: false,
          isInfective: true,
          description: { ar: 'تدخل اليرقة عبر ثقب اللدغة وتنسلخ إلى L4 في الأنسجة تحت الجلدية والعضلات خلال أسبوعين', en: 'L3 enters bite wound, molting into L4 in subcutaneous/muscular tissue within 3–14 days', fr: 'Dépôt des larves L3 qui pénètrent par la plaie de piqûre et muent en L4 dans le tissu sous-cutané' },
          location: { ar: 'النسيج تحت الجلدي والعضلات', en: 'Subcutaneous tissue & muscle', fr: 'Tissu conjonctif sous-cutané' }
        },
        {
          stageNumber: 4,
          title: { ar: 'الاستقرار في الشرايين الرئوية وتلف الأوعية والقلب', en: 'Pulmonary Arterial Colonization & Cavalsyndrome', fr: 'Colonisation cardio-pulmonaire & Syndrome cave' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'تصل الديدان الفتية إلى فروع الشريان الرئوي مسببة التهاب بطانة الأوعية، فرط ضغط الدم الرئوي، وتضخم البطين الأيمن أو متلازمة الوريد الأجوف المميتة', en: 'Young adults colonize pulmonary arteries, causing severe endarteritis, pulmonary hypertension, cor pulmonale, and lethal caval syndrome', fr: 'Installation des vers dans les artères pulmonaires : endartérite proliférative, hypertension artérielle pulmonaire et insuffisance cardiaque droite' },
          location: { ar: 'الشرايين الرئوية، البطين الأيمن، الوريد الأجوف', en: 'Pulmonary Arteries & Right Ventricle', fr: 'Artères pulmonaires et ventricule droit' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Dogs (كلاب)', 'Cats (قطط)', 'Ferrets (نمس)', 'Foxes (ثعالب)'],
      clinicalSigns: {
        ar: [
          'سعال مزمن مستمر غير رطب، وضيق تنفس عند أدنى جهد (Exercise intolerance)',
          'فقدان الوزن، خمول، وإغماء متكرر (Syncope)',
          'استسقاء بطني (Ascites) ووذمات طرفية نتيجة فشل القلب الاحتقاني الأيمن',
          'متلازمة الوريد الأجوف الحادة (Caval Syndrome): انهيار مفاجئ، شحوب، بول هيموغلوبيني مدمم أحمر داكن، وموت وشيك'
        ],
        en: [
          'Chronic dry non-productive cough and progressive exercise intolerance',
          'Weight loss, lethargy, dyspnea, and recurrent syncope upon exertion',
          'Ascites, jugular venous distention, hepatomegaly secondary to right-sided congestive heart failure',
          'Caval syndrome: sudden cardiovascular collapse, hemoglobinuria (port-wine urine), pale mucous membranes, cardiogenic shock'
        ],
        fr: [
          'Toux chronique sèche réfractaire et intolérance majeure à l\'effort physique',
          'Amaigrissement, dyspnée et syncopes à l\'effort',
          'Ascite volumineuse, turgescence jugulaire et hépatomégalie par insuffisance cardiaque droite',
          'Syndrome cave aigu : collapsus brutal, ictère, hémoglobinurie foncée "vin de Porto" et mort rapide'
        ]
      },
      pathology: {
        ar: 'التهاب بطانة الشريان الرئوي التكاثري الجسيم مع تليف شديد وتجلطات خثارية وانسداد الأوعية، وتضخم عضلة البطين الأيمن (Cor pulmonale)',
        en: 'Severe villous proliferative pulmonary endarteritis, thromboembolism, pulmonary hypertension, and marked eccentric right ventricular hypertrophy',
        fr: 'Endartérite proliférative villositaire obstructive, thrombo-embolies pulmonaires et hypertrophie ventriculaire droite'
      },
      severity: 'fatal'
    },
    humanImpact: {
      isZoonotic: true,
      incubationPeriod: {
        ar: 'عدة أشهر إلى سنة؛ غالباً تكتشف صدفة عند تصوير الصدر بالأشعة السينية',
        en: 'Months to a year; predominantly discovered incidentally on routine chest radiograph',
        fr: 'Plusieurs mois ; découverte fortuite le plus souvent sur radiographie pulmonaire de routine'
      },
      acuteSigns: {
        ar: [
          'غالباً عديم الأعراض تماماً',
          'سعال خفيف، ألم صدري جنبي خفيف، ونفث دم مجهري متقطع',
          'حمى طفيفة وقشعريرة عابرة عند موت اليرقة في فرع شرياني رئوي'
        ],
        en: [
          'Mostly asymptomatic in over 60% of human cases',
          'Mild cough, pleuritic chest pain, and occasional low-grade hemoptysis',
          'Subfebrile episodes when dying larva causes local pulmonary infarction'
        ],
        fr: [
          'Asymptomatique dans plus de 60 % des cas',
          'Toux sèche discrète, douleur thoracique pleurale et hémoptysie minime',
          'Fébricule transitoire lors de l\'embolisation et de la mort de la larve'
        ]
      },
      chronicComplications: {
        ar: [
          'تشكل عقيدات حبيبية كروية مميزة في الرئة بحجم 1-3 سم تحاكي بدقة سرطان الرئة (Solitary Coin Lesion) وتستدعي جراحة خزعة استكشافية للتأكد من نفي الورم الخبيث',
          'عقيدات تحت الجلد أو في ملتحمة العين نادراً جداً'
        ],
        en: [
          'Formation of solitary, well-circumscribed, non-calcified pulmonary "coin lesions" (1–3 cm) that mimic bronchogenic carcinoma, prompting invasive lung resection/biopsy',
          'Rare ectopic subcutaneous nodules or subconjunctival ocular migration'
        ],
        fr: [
          'Nodule pulmonaire solitaire bénin en "pièce de monnaie" mimant parfaitement un cancer bronchique et menant souvent à une thoracotomie exploratrice inutile',
          'Rares nodules sous-cutanés ou sous-conjonctivaux oculaires'
        ]
      },
      highRiskGroups: {
        ar: ['سكان المناطق المدارية والمعتدلة الموبوءة بكثافة بالبعوض وكلاب الشوارع المصابة'],
        en: ['Residents and outdoor workers in mosquito-dense regions with high canine heartworm prevalence'],
        fr: ['Populations rurales exposées aux piqûres de moustiques en zone d\'enzootie canine (Méditerranée, Amériques)' ]
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [
          { drug: 'Melarsomine dihydrochloride (Immiticide / دواء قتل الديدان البالغة)', dosageGuideline: '2.5 mg/kg deep lumbar IM (3-dose protocol: Day 30: 1 injection, Days 60 & 61: 2 injections 24h apart)', note: { ar: 'الدواء الوحيد المعتمد لقتل الديدان البالغة؛ يتطلب راحة تامة وحبس الكلب في قفص لمنع الانسداد الخثاري الرئوي المميت', en: 'Only approved adulticide; mandatory strict cage rest to prevent fatal pulmonary thromboembolism', fr: 'Seul adulticide homologué ; repos strict absolu en cage pendant 6 à 8 semaines indispensable' } },
          { drug: 'Doxycycline (دوكسيسيكلين)', dosageGuideline: '10 mg/kg PO bid for 30 days prior to melarsomine', note: { ar: 'يقضي على بكتيريا Wolbachia التكافلية الضرورية لبقاء الدودة، ويقلل التفاعل الالتهابي الرئوي', en: 'Kills symbiotic Wolbachia bacteria, weakening worms and reducing pulmonary post-adulticide inflammation', fr: 'Élimine la bactérie endosymbiotique Wolbachia indispensable à la survie du ver' } },
          { drug: 'Macrocyclic Lactones (Ivermectin / Moxidectin)', dosageGuideline: 'Monthly preventive dose', note: { ar: 'للقضاء على اليرقات الصغيرة ومنع نضج ديدان جديدة', en: 'Clears microfilariae and prevents recruitment of new juvenile stages', fr: 'Élimine les microfilaires et bloque l\'arrivée de nouveaux stades' } }
        ],
        precautions: {
          ar: 'الحبس الإجباري في القفص (Strict Cage Rest) لمدة 6-8 أسابيع بعد حقن الميلارسومين أمر حاسم لإنقاذ حياة الكلب من الجلطات الرئوية الناتجة عن تفتت الديدان الميتة',
          en: 'Absolute exercise restriction and crate confinement is vital post-melarsomine to avert lethal pulmonary thromboembolism',
          fr: 'Le repos absolu strict au box/cage est vital après les injections pour éviter la mort par embolie pulmonaire'
        }
      },
      human: {
        firstLineDrugs: [
          { drug: 'No anthelmintic chemotherapy needed (لا حاجة لعلاج كيميائي)', dosageGuideline: 'Conservative observation once malignancy is excluded', note: { ar: 'تموت اليرقة تلقائياً في الرئة؛ لا تحتاج أدوية ديدان بل استئصال أو مراقبة تصويرية بعد نفي السرطان', en: 'Worms die spontaneously in humans; surgical wedge excision is performed for diagnostic biopsy to rule out lung cancer', fr: 'La larve meurt spontanément ; l\'exérèse chirurgicale n\'est réalisée que pour éliminer un cancer' } }
        ],
        notes: {
          ar: 'الوقاية الأساسية للإنسان تعتمد على علاج كلاب المجتمع واستخدام طوارد البعوض',
          en: 'Human protection is entirely achieved by widespread canine prophylaxis and mosquito avoidance',
          fr: 'La prévention humaine repose sur le traitement préventif systématique des chiens'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: [
          'إعطاء أدوية الوقاية الشهرية من دودة القلب بانتظام طوال العام (Moxidectin, Ivermectin, Milbemycin oxime, Selamectin)',
          'الفحص السنوي لمستضد دودة القلب والميكروفيلاريا قبل بدء موسم البعوض',
          'استخدام أطواق ومستحضرات طرد البعوض ومكافحة الحشرات على الكلاب (Permethrin collars)'
        ],
        en: [
          'Year-round monthly preventive chemoprophylaxis with macrocyclic lactones (Moxidectin, Ivermectin, Milbemycin)',
          'Annual blood antigen and microfilaria testing prior to prescription refills',
          'Mosquito-repellent topicals and collars containing permethrin or dinotefuran'
        ],
        fr: [
          'Chimioprophylaxie mensuelle ininterrompue par lactones macrocycliques (moxidectine, milbémycine, sélamectine)',
          'Dépistage sérologique annuel systématique par test rapide',
          'Colliers ou pipettes répulsives anti-moustiques à base de perméthrine'
        ]
      },
      human: {
        ar: [
          'استخدام طارد الحشرات المعتمد (DEET أو Picaridin) عند التواجد في الهواء الطلق وقت نشاط البعوض (الغروب والفجر)',
          'تركيب شبكات سلكية مانعة للحشرات على النوافذ والأبواب',
          'الحرص على وقاية الكلاب المنزلية من الإصابة'
        ],
        en: [
          'Apply EPA-approved mosquito repellents (DEET, Picaridin) during dawn/dusk hours',
          'Maintain intact insect window and door screens',
          'Keep companion dogs on strict veterinarian-prescribed preventive programs'
        ],
        fr: [
          'Utilisation de répulsifs cutanés anti-moustiques (DEET, Icaridine) au crépuscule',
          'Pose de moustiquaires aux fenêtres',
          'Garantir le suivi préventif mensuel des chiens du voisinage'
        ]
      },
      environmental: {
        ar: [
          'التخلص من أي تجمعات للمياه الراكدة في أواني الحدائق والإطارات وأحواض الري لمنع تكاثر يرقات البعوض',
          'استخدام مبيدات اليرقات الحيوية (Bacillus thuringiensis israelensis - BTI) في البرك والمسطحات المائية',
          'علاج الكلاب الضالة والملاجئ للحد من خزان العدوى الحيواني'
        ],
        en: [
          'Eliminate standing water sources (flowerpot saucers, discarded tires, bird baths) where mosquitoes breed',
          'Apply biological larvicides (Bacillus thuringiensis israelensis - BTI) to standing water reservoirs',
          'Shelter and community dog population treatment to diminish the infectious reservoir'
        ],
        fr: [
          'Supprimer tous les réservoirs d\'eau stagnante (coupelles de pots, pneus usagés, gouttières)',
          'Traitement biologique larvicide des eaux résiduelles (BTI)',
          'Contrôle sanitaire et traitement des chiens errants constituant le réservoir'
        ]
      }
    },
    sampleMicrographs: [
      {
        title: { ar: 'ميكروفيلاريا ديروكسلاريا إيميتيس في مسحة دم', en: 'Dirofilaria immitis Blood Microfilaria', fr: 'Microfilaire de Dirofilaria immitis' },
        stage: 'Circulating Microfilaria (ميكروفيلاريا دموية)',
        magnification: '400x High Power',
        stain: 'Modified Knott’s Test / Giemsa',
        imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'يرقة خيطية رشيقة غير مغمدة بطول 310 ميكرون مع ذيل مستقيم مدبب خالي من النوى في طرفه الأخير',
          en: 'Unsheathed slender microfilaria with straight posterior body and tapered pointed tail',
          fr: 'Microfilaire effilée non engainée à extrémité caudale rectiligne caractéristique'
        }
      }
    ],
    videos: [
      {
        id: 'heartworm-vet',
        title: { ar: 'دودة القلب في الكلاب: فحص الموجات ودورة الحياة (AHS)', en: 'Canine Heartworm: Echocardiography & Life Cycle', fr: 'Échocardiographie et cycle de la dirofilariose' },
        type: 'clinical_guide',
        duration: '4:20',
        youtubeId: 'nDxb7o4V_4U',
        sourceName: 'American Heartworm Society (AHS)',
        description: {
          ar: 'عرض سريري لتشخيص حركة الديدان البالغة داخل القلب بالموجات فوق الصوتية ودورة حياة الطفيلي',
          en: 'Comprehensive veterinary cardiology visual showing heartworm life cycle and echocardiography',
          fr: 'Présentation clinique du cycle et des vers dans le cœur à l\'échocardiographie'
        }
      }
    ],
    scientificSources: [
      {
        title: 'Current Guidelines for the Diagnosis, Prevention, and Management of Heartworm (Dirofilaria immitis) Infection in Dogs',
        organization: 'American Heartworm Society (AHS)',
        year: '2024',
        url: 'https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines',
        citationType: 'standard'
      },
      {
        title: 'ESCCAP Guideline 05: Control of Vector-Borne Diseases in Dogs and Cats',
        organization: 'European Scientific Counsel Companion Animal Parasites',
        year: '2023',
        url: 'https://www.esccap.org/guidelines/gl5/',
        citationType: 'standard'
      },
      {
        title: 'CDC DPDx - Laboratory Identification of Parasites: Dirofilariasis',
        organization: 'Centers for Disease Control and Prevention',
        year: '2024',
        url: 'https://www.cdc.gov/dpdx/dirofilariasis/index.html',
        citationType: 'guideline'
      }
    ]
  }
];
