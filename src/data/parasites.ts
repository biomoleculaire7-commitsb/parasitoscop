import { Parasite } from '../types/parasite';

export const parasitesData: Parasite[] = [
  {
    id: 'toxoplasma-gondii',
    scientificName: 'Toxoplasma gondii',
    commonNames: {
      ar: 'المقوسة الغوندية (داء المقوسات)',
      en: 'Toxoplasma (Toxoplasmosis)',
      fr: 'Toxoplasme (Toxoplasmose)'
    },
    type: 'protozoa',
    phylum: 'Apicomplexa',
    class: 'Conoidasida',
    order: 'Eucoccidiorida',
    family: 'Sarcocystidae',
    genus: 'Toxoplasma',
    species: 'T. gondii',
    zoonoticRisk: 'very_high',
    hosts: {
      definitive: {
        ar: 'السنوريات (القطط الأليفة والبرية فقط تفرز البيوض المتكيسة)',
        en: 'Felids (Domestic and wild cats are the sole definitive hosts)',
        fr: 'Félidés (Les chats sont les seuls hôtes définitifs excréteurs)'
      },
      intermediate: {
        ar: 'جميع ذوات الدم الحار (الإنسان، الأغنام، الماعز، الأبقار، الطيور، القوارض)',
        en: 'All warm-blooded vertebrates (Humans, sheep, goats, swine, birds, rodents)',
        fr: 'Tous les vertébrés homéothermes (Homme, ovins, caprins, porcs, oiseaux)'
      }
    },
    transmission: {
      ar: 'ابتلاع البيوض المتكيسة من براز القطط أو التربة، أو تناول لحوم غير مطهوة جيدا تحوي أكياساً نسيجية، وانتقال عمودي خلقي عبر المشيمة',
      en: 'Ingestion of sporulated oocysts from cat feces/soil, undercooked meat with tissue cysts, or transplacental transmission',
      fr: 'Ingestion d\'oocystes sporulés (litière, eau, crudités) ou kystes tissulaires (viande crue), et voie transplacentaire'
    },
    morphology: {
      diagnosticStages: ['Tachyzoites (Crescent shaped 4-8 µm)', 'Bradyzoite tissue cysts (10-100 µm)', 'Unsporulated/Sporulated oocysts (10-12 µm)'],
      dimensions: '4–8 µm (تكيشوات) / 10–12 µm (بيوض)',
      microscopicFeatures: {
        ar: 'التشوزوئيدات هلالية الشكل ذات نواة مركزية في مسحات اللمس؛ الكيسات النسيجية كروية تحتوي مئات البراديزويتات بطيئة الانقسام',
        en: 'Crescent-shaped tachyzoites with central nucleus; spherical tissue cysts packed with bradyzoites; sub-spherical oocysts with thick double wall',
        fr: 'Tachyzoïtes en croissant à noyau central ; kystes sphériques renfermant des centaines de bradyzoïtes ; oocystes subsphériques à double paroi'
      },
      stainingAndDiagnosticMethods: {
        ar: 'صبغة غيمزا (Giemsa) للأطوار الحرة، اختبارات مصلية (ELISA IgG/IgM)، فحص PCR، وفحص تعويم براز القطط (Sheather solution)',
        en: 'Giemsa staining for tachyzoites in fluids/biopsies, serology (IgG/IgM ELISA, Sabin-Feldman dye test), PCR, fecal flotation for cats',
        fr: 'Coloration de Giemsa pour tachyzoïtes, sérologie (ELISA IgG/IgM), PCR sur liquide amniotique/LCR, flottation fécale féline'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'دورة جنسية معوية حصراً في السنوريات تفرز بيوضاً غير مبوغة؛ تتمرغ في البيئة وتعدي العوائل الوسيطة لتشكل أكياساً نسيجية في العضلات والدماغ',
        en: 'Enteroepithelial sexual cycle in cats sheds unsporulated oocysts. Intermediate hosts ingest oocysts; tachyzoites disseminate and encyst as bradyzoites',
        fr: 'Cycle sexué entéro-épithélial exclusif aux félidés libérant des oocystes. Chez l\'hôte intermédiaire, dissémination sous forme de tachyzoïtes puis kystes'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'إفراز البيوض في براز القطط', en: 'Oocyst Shedding', fr: 'Excrétion des oocystes' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: {
            ar: 'تطرح القطة المصابة ملايين البيوض غير المبوغة لمدة 1-3 أسابيع في البراز',
            en: 'Infected felid sheds unsporulated oocysts in feces for 1-3 weeks',
            fr: 'Le félin infecté excrète des millions d\'oocystes non sporulés pendant 1 à 3 semaines'
          },
          location: { ar: 'براز القطط والتربة', en: 'Feces and Soil', fr: 'Litière et Sol' }
        },
        {
          stageNumber: 2,
          title: { ar: 'التبوغ في البيئة الخارجية', en: 'Environmental Sporulation', fr: 'Sporulation environnementale' },
          hostType: 'environment',
          isDiagnostic: false,
          isInfective: true,
          description: {
            ar: 'تتبوغ البيضة خلال 1-5 أيام بالدفء والرطوبة وتحتوي على 2 كيسة بوغية بكل منها 4 سبوروزويتات',
            en: 'Oocysts sporulate in 1-5 days under aeration/humidity, forming 2 sporocysts each with 4 sporozoites',
            fr: 'Les oocystes sporulent en 1 à 5 jours, devenant infectieux avec 2 sporocystes contenant 4 sporozoïtes'
          },
          location: { ar: 'التربة والخضار ومياه الشرب', en: 'Soil, vegetables, water', fr: 'Sol, eau et végétaux' }
        },
        {
          stageNumber: 3,
          title: { ar: 'ابتلاع العدوى وانبثاق الطفيلي', en: 'Ingestion & Tachyzoite Burst', fr: 'Ingestion & Dissémination' },
          hostType: 'intermediate',
          isDiagnostic: false,
          isInfective: true,
          description: {
            ar: 'يبتلع الإنسان أو الحيوان البيوض أو لحوماً ملوثة، فتتحرر الطفيليات وتخترق جدار الأمعاء وتتحول إلى تكيشوات سريعة الانقسام',
            en: 'Host ingests oocysts or meat cysts; sporozoites/bradyzoites invade intestinal mucosa, converting to tachyzoites',
            fr: 'Ingestion d\'oocystes ou de viande contaminée ; libération des parasites et invasion tissulaire sous forme de tachyzoïtes'
          },
          location: { ar: 'الظهارة المعوية والدم والأنسجة', en: 'Gut, Bloodstream, Reticuloendothelial', fr: 'Intestin, Circulation, Tissus' }
        },
        {
          stageNumber: 4,
          title: { ar: 'التكيس المزمن في الدماغ والعضلات', en: 'Tissue Cyst Formation (Bradyzoites)', fr: 'Enkystement tissulaire (Bradyzoïtes)' },
          hostType: 'intermediate',
          isDiagnostic: true,
          isInfective: true,
          description: {
            ar: 'تحت ضغط المناعة، تتحول التكيشوات إلى أكياس نسيجية (براديزويت) كامنة مدى الحياة في الدماغ، العين، والعضلات الهيكلية والقلب',
            en: 'Under immune response, tachyzoites differentiate into dormant bradyzoite cysts in brain, retina, and skeletal/cardiac muscle',
            fr: 'Sous l\'action immunitaire, formation de kystes latents renfermant des bradyzoïtes dans le cerveau, les muscles et l\'œil'
          },
          location: { ar: 'المخ، الشبكية، القلب، العضلات', en: 'Brain, Eye, Myocardium, Muscle', fr: 'Cerveau, Rétine, Cœur, Muscle' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Sheep (أغنام)', 'Goats (ماعز)', 'Cats (قطط)', 'Swine (خنازير)', 'Birds (طيور)'],
      clinicalSigns: {
        ar: [
          'إجهاض متكرر وخسائر جنينية هائلة في الأغنام والماعز خاصة في الثلث الأخير من الحمل',
          'ولادة مواليد ميتة أو ضعيفة تشوهات عصبية وارتفاع درجة الحرارة',
          'التهاب الرئة، التهاب العنبية (التهاب العين)، وخمول عند القطط المصابة بحالة حادة'
        ],
        en: [
          'Abortion storms and stillbirths in ewes and does, particularly mid-to-late gestation',
          'Placental necrosis with characteristic white cotyledonary calcified foci',
          'Fever, uveitis, dyspnea, and hepatitis in acute feline systemic toxoplasmosis'
        ],
        fr: [
          'Tempêtes d\'avortements et mortinatalités chez la brebis et la chèvre en fin de gestation',
          'Placentite nécrotique avec cotylédons parsemés de foyers blanchâtres nécrotiques',
          'Fièvre, uvéite, pneumonie et hépatite chez le chat en phase aiguë systémique'
        ]
      },
      pathology: {
        ar: 'تنخر فلقات المشيمة مع تكلسات نقطية بيضاء مميزة؛ بؤر نخرية دقيقة في الدماغ والكبد',
        en: 'Multifocal necrotizing placentitis with calcification; focal encephalitis and hepatic necrosis',
        fr: 'Placentite nécrosante multifocale avec calcifications cotylédonnaires ; encéphalite focale'
      },
      severity: 'severe'
    },
    humanImpact: {
      isZoonotic: true,
      incubationPeriod: {
        ar: '5 إلى 23 يوماً بعد تناول لحوم؛ 1 إلى 3 أسابيع بعد ابتلاع بيوض القطط',
        en: '5 to 23 days after meat ingestion; 10 to 23 days after oocyst ingestion',
        fr: '5 à 23 jours après ingestion de viande crue ; 10 à 23 jours pour les oocystes'
      },
      acuteSigns: {
        ar: [
          'غالباً غير عرضي (80-90% من ذوي المناعة السليمة)',
          'اعتلال العقد اللمفاوية (خصوصاً الرقبية والقفوية غير مؤلمة)',
          'حمى طفيفة، تعب عضلي، والتهاب الحلق الشبيه بداء وحيدات النواة'
        ],
        en: [
          'Asymptomatic in 80–90% of immunocompetent individuals',
          'Painless cervical and occipital lymphadenopathy',
          'Low-grade fever, malaise, myalgia, and sore throat resembling mononucleosis'
        ],
        fr: [
          'Asymptomatique dans 80 à 90 % des cas chez l\'immunocompétent',
          'Adénopathies cervicales bilatérales non douloureuses',
          'Syndrome fébrile pseudo-grippal ou pseudo-mononucléosique'
        ]
      },
      chronicComplications: {
        ar: [
          'التهاب المشيمية والشبكية (Chorioretinitis) قد يؤدي إلى فقدان البصر',
          'داء المقوسات الخلقي عند الأجنة: استسقاء الرأس، تكلسات داخل القحف، وتأخر نمو',
          'التهاب الدماغ النخري القاتل في مرضى نقص المناعة ومرضى الإيدز وزراعة الأعضاء'
        ],
        en: [
          'Ocular toxoplasmosis (chorioretinitis) causing visual loss and scotomas',
          'Congenital triad in fetuses: hydrocephalus, intracranial calcifications, chorioretinitis',
          'Life-threatening necrotizing toxoplasmic encephalitis in immunocompromised/HIV patients'
        ],
        fr: [
          'Choriorétinite récidivante pouvant mener à la cécité',
          'Toxoplasmose congénitale : triade de Sabin (hydrocéphalie, calcifications, choriorétinite)',
          'Encéphalite toxoplasmique nécrosante chez le sujet immunodéprimé'
        ]
      },
      highRiskGroups: {
        ar: ['النساء الحوامل غير الممنعات (خطر انتقال للجنين)', 'مرضى نقص المناعة (HIV/AIDS)', 'المزارعون والأطباء البيطريون وعمال المسالخ'],
        en: ['Seronegative pregnant women (congenital risk)', 'Immunocompromised and transplant patients', 'Veterinarians, sheep farmers, abattoir workers'],
        fr: ['Femmes enceintes séronégatives', 'Patients immunodéprimés (VIH, greffés)', 'Éleveurs, vétérinaires et personnel d\'abattoir']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [
          { drug: 'Clindamycin', dosageGuideline: '10–25 mg/kg PO bid for 3–4 weeks (Cats/Dogs)', note: { ar: 'عقار الاختيار في القطط والكلاب لعلاج التكيشوات النشطة', en: 'Drug of choice for clinical feline/canine toxoplasmosis', fr: 'Traitement de référence chez le chat et le chien' } },
          { drug: 'Sulfadiazine + Pyrimethamine', dosageGuideline: 'Sulfadiazine 30 mg/kg + Pyrimethamine 0.5-1 mg/kg PO', note: { ar: 'مع إعطاء حمض الفولينيك لمنع تثبيط النخاع', en: 'Requires folinic acid supplementation to prevent bone marrow suppression', fr: 'Avec supplémentation en acide folinique' } },
          { drug: 'Decoquinate / Monensin', dosageGuideline: 'Preventive premix in sheep feed (2 mg/kg/day)', note: { ar: 'للوقاية من الإجهاض في قطعان الأغنام المعرضة', en: 'Used for prevention of toxoplasmic abortion in pregnant sheep', fr: 'Prophylaxie des avortements ovins en élevage' } }
        ],
        precautions: {
          ar: 'الأدوية تقضي على التكيشوات النشطة ولكنها لا تستأصل الكيسات النسيجية الدماغية الكامنة',
          en: 'Therapeutics target active tachyzoites but do not eliminate dormant tissue bradyzoite cysts',
          fr: 'Les traitements éliminent les tachyzoïtes actifs mais n\'éradiquent pas les kystes tissulaires'
        }
      },
      human: {
        firstLineDrugs: [
          { drug: 'Pyrimethamine + Sulfadiazine', dosageGuideline: 'Pyrimethamine 100-200 mg loading, then 50-75 mg/day + Sulfadiazine 1g q6h + Leucovorin 10-25 mg/day', note: { ar: 'البروتوكول المعياري الذهبي لحالات التهاب الدماغ والشبكية', en: 'Gold standard regimen with mandatory folinic acid', fr: 'Association de référence avec acide folinique obligatoire' } },
          { drug: 'Spiramycine (روفاميسين)', dosageGuideline: '1g (3 MUI) tid orally during pregnancy', note: { ar: 'للنساء الحوامل قبل الأسبوع 18 لمنع انتقال العدوى عبر المشيمة إلى الجنين', en: 'Administered in pregnant women to prevent vertical transplacental transmission', fr: 'Administrée chez la femme enceinte pour prévenir le passage transplacentaire' } },
          { drug: 'Trimethoprim-Sulfamethoxazole (TMP-SMX)', dosageGuideline: '5 mg/kg TMP bid (treatment) or 1 DS tablet daily (prophylaxis)', note: { ar: 'بديل فعال وسهل التوفر، ويستخدم كوقاية ثانوية', en: 'Accessible first-line alternative and primary prophylaxis in HIV', fr: 'Alternative efficace et prophylaxie chez les immunodéprimés' } }
        ],
        notes: {
          ar: 'يجب المراقبة الدورية لتعداد الدم لتجنب تثبيط النقي العظمي الناتج عن البيريميثامين',
          en: 'Frequent complete blood count monitoring is mandatory due to pyrimethamine antifolate marrow toxicity',
          fr: 'Surveillance hématologique stricte sous pyriméthamine'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: [
          'منع القطط من دخول حظائر علف الماشية ومخازن الحبوب لمنع تلوثها بالبراز',
          'استخدام لقاح حي موهن (Toxovax S48) للنعاج البديلة قبل التلقيح بشهر',
          'عدم إطعام القطط اللحوم النيئة أو مخلفات الذبح إطلاقاً'
        ],
        en: [
          'Strict exclusion of cats from feed stores, barns, and pasture water sources',
          'Vaccination of breeding ewes with live attenuated vaccine (Toxovax S48) prior to mating',
          'Never feed raw offal or uncooked meat to domestic cats'
        ],
        fr: [
          'Exclusion stricte des chats des stocks d\'aliments et aires de stockage du foin',
          'Vaccination des agnelles avant la mise à la reproduction (Toxovax S48)',
          'Ne jamais nourrir les chats avec des abats ou viandes crues'
        ]
      },
      human: {
        ar: [
          'طهي اللحوم (خصوصاً الضأن والماعز والخنزير) حتى تصل الحرارة الداخلية إلى 67° مئوية على الأقل أو تجميدها على -20° مئوية لعدة أيام',
          'غسل الخضار والفواكه جيداً بالماء الجاري قبل استهلاكها',
          'تجنب الحوامل تنظيف صندوق فضلات القطط وارتداء قفازات أثناء البستنة والتعامل مع التربة'
        ],
        en: [
          'Cook all meat to internal temp >= 67°C (153°F) or freeze below -20°C for at least 48 hours',
          'Wash fruits and vegetables thoroughly under running clean water',
          'Pregnant women should avoid cleaning cat litter boxes and wear gloves when gardening'
        ],
        fr: [
          'Cuire la viande à cœur à >= 67°C ou congeler à -20°C pendant plusieurs jours',
          'Laver soigneusement les fruits, légumes et herbes aromatiques souillés de terre',
          'Déléguer le nettoyage de la litière du chat aux tiers chez la femme enceinte séronégative'
        ]
      },
      environmental: {
        ar: [
          'التخلص اليومي من فضلات القطط في أكياس محكمة قبل تبوغ البيوض (تحتاج 24 ساعة للتبوغ)',
          'تغطية صناديق رمال لعب الأطفال في الحدائق العامة',
          'حماية مصادر مياه الشرب من تصريف مياه الأمطار المحملة بروث الحيوانات'
        ],
        en: [
          'Daily cleaning of cat litter trays before oocysts can sporulate (sporulation requires >= 24h)',
          'Cover outdoor children sandboxes to prevent feral cat defecation',
          'Protect municipal water catchments from agricultural runoff'
        ],
        fr: [
          'Nettoyer le bac à litière quotidiennement avant que les oocystes ne sporulent (>= 24h requises)',
          'Couvrir les bacs à sable d\'enfants pour éviter la défécation des chats errants',
          'Protection des captages d\'eau potable contre le ruissellement agricole'
        ]
      }
    },
    sampleMicrographs: [
      {
        title: { ar: 'تكيشوات تاكيزويت في مسحة خلوية', en: 'Toxoplasma Tachyzoites in Smear', fr: 'Tachyzoïtes sur frottis' },
        stage: 'Tachyzoites (طَوْر التكاثر السريع)',
        magnification: '1000x Oil Immersion',
        stain: 'Giemsa Stain',
        imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'شكل هلالي مقوس مميز بطول 6 ميكرون ونواة حمراء واضحة وسيتوبلازم أزرق',
          en: 'Characteristic crescent crescentic bodies with prominent nucleus and blue cytoplasm',
          fr: 'Corps arqués caractéristiques de 6 µm à noyau pourpre et cytoplasme bleuté'
        }
      }
    ],
    videos: [
      {
        id: 'toxo-lifecycle',
        title: { ar: 'دورة حياة داء المقوسات والانتقال المشترك (CDC DPDx)', en: 'Toxoplasma gondii Life Cycle (CDC DPDx)', fr: 'Cycle Évolutif de Toxoplasma gondii' },
        type: 'life_cycle_animation',
        duration: '4:15',
        youtubeId: '6pchkKtzHOs',
        sourceName: 'CDC / DPDx Parasitology',
        description: {
          ar: 'شرح متحرك ثلاثي الأبعاد لدورة الحياة بين السنوريات والعوائل الوسيطة والإنسان',
          en: 'Detailed 3D animated walkthrough of enteroepithelial and extraintestinal life cycles',
          fr: 'Animation 3D détaillée des phases sexuée et asexuée chez le chat et l\'homme'
        }
      }
    ],
    scientificSources: [
      {
        title: 'CDC DPDx - Laboratory Identification of Parasites: Toxoplasmosis',
        organization: 'Centers for Disease Control and Prevention (CDC)',
        year: '2024',
        url: 'https://www.cdc.gov/dpdx/toxoplasmosis/index.html',
        citationType: 'guideline'
      },
      {
        title: 'WOAH Terrestrial Manual: Enzootic Abortion in Ewes and Toxoplasmosis',
        organization: 'World Organisation for Animal Health (WOAH / OIE)',
        year: '2023',
        url: 'https://www.woah.org',
        citationType: 'standard'
      },
      {
        title: 'Manson\'s Tropical Infectious Diseases - Apicomplexan Protozoa',
        organization: 'Elsevier / Lancet',
        year: '2023',
        url: 'https://doi.org/10.1016/B978-0-7020-7959-7.00072-8',
        citationType: 'peer_reviewed'
      }
    ]
  },
  {
    id: 'fasciola-hepatica',
    scientificName: 'Fasciola hepatica',
    commonNames: {
      ar: 'المثقوبة الكبدية (الدودة الكبدية الكبيرة)',
      en: 'Common Liver Fluke / Sheep Liver Fluke',
      fr: 'Grande Douve du Foie (Fasciolose)'
    },
    type: 'trematode',
    phylum: 'Platyhelminthes',
    class: 'Trematoda',
    order: 'Echinostomida',
    family: 'Fasciolidae',
    genus: 'Fasciola',
    species: 'F. hepatica',
    zoonoticRisk: 'high',
    hosts: {
      definitive: {
        ar: 'المجترات (الأغنام، الأبقار، الماعز)، والخيول، والإنسان',
        en: 'Ruminants (Sheep, cattle, goats), equines, and humans',
        fr: 'Ruminants (ovins, bovins, caprins), équidés et l\'Homme'
      },
      intermediate: {
        ar: 'قواقع المياه العذبة البرمائية (Lymnaea truncatula)',
        en: 'Amphibious freshwater mud snails (Galba/Lymnaea truncatula)',
        fr: 'Mollusques gastéropodes dulcicoles (Lymnaea truncatula)'
      }
    },
    transmission: {
      ar: 'تناول نباتات مائية نيئة ملوثة بالخراطيم المتكيسة (Metacercariae) مثل الجرجير المائي (Watercress) أو شرب مياه سطحية ملوثة',
      en: 'Ingestion of freshwater aquatic vegetation (e.g., wild watercress) carrying encysted metacercariae, or contaminated surface drinking water',
      fr: 'Consommation de cresson sauvage ou pissenlits souillés de métacercaires enkystées, ou eau de marécage'
    },
    morphology: {
      diagnosticStages: ['Operculated ova in feces (130–150 x 63–90 µm)', 'Leaf-shaped flat adult worm (20–30 x 13 mm)'],
      dimensions: '130–150 µm (بيوض) / 20–30 مم (بالغ)',
      microscopicFeatures: {
        ar: 'بيضة صفراء ذهبية بيضاوية كبيرة الحجم ذات غطاء قطبي (Operculum) غير مقسمة المحتوى عند طرحها؛ الدودة البالغة ورقية مسطحة ذات مخروط رأسي مميز وممص فموي وبطني',
        en: 'Large, golden-yellow, ellipsoidal operculated eggs with unsegmented ovum; adult is leaf-shaped with distinct anterior cephalic cone and shoulders',
        fr: 'Œufs volumineux jaune-brunâtre operculés (130–150 µm) à contenu granuleux ; adulte foliacé à cône céphalique bien marqué et épaulements'
      },
      stainingAndDiagnosticMethods: {
        ar: 'تقنية الترسيب البرازي (Sedimentation technique) لأن البيض ثقيل ولا يطفو بسهولة، فحص ELISA للأضداد ومستضدات البراز، تصوير الكبد والموجات فوق الصوتية',
        en: 'Fecal sedimentation technique (eggs are too dense for floatation), coproantigen ELISA, serum ELISA antibodies, ultrasound/CT of liver parenchyma',
        fr: 'Sédimentation fécale (œufs trop denses pour flottation standard), copro-antigènes ELISA, sérologie, échographie/TDM hépatique'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'تطرح البيوض غير المجمجة في البراز، تفقس في الماء ميراسيديوم يخترق قوقع الليمينيا، يتكاثر ليخرج ذنائب تتكيس على النباتات، يبتلعها العائل النهائي لتخترق الأمعاء وتهاجر في نسيج الكبد إلى القنوات الصفراوية',
        en: 'Unembryonated eggs shed in stool; hatch in water as miracidia infecting Lymnaeid snails. Cercariae emerge and encyst on plants as metacercariae. Ingested by host, excyst in duodenum, penetrate gut wall, migrate through liver parenchyma to bile ducts',
        fr: 'Œufs éliminés dans les selles, éclosent en miracidium infestant la limnée. Émergence de cercaires s\'enkystant sur les végétaux aquatiques. Ingestion, perforation intestinale, traversée du parenchyme hépatique vers les voies biliaires'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'طرح البيوض غير الجنينية', en: 'Egg Shedding in Feces', fr: 'Élimination des œufs' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: {
            ar: 'تصل البيوض عبر الصفراء إلى الأمعاء وتطرح في براز الحيوان المصاب',
            en: 'Adult flukes release operculated eggs into bile ducts, passing via stool',
            fr: 'Les douves adultes pondent dans les canaux biliaires, les œufs sont évacués par les fèces'
          },
          location: { ar: 'البراز والتربة الرطبة', en: 'Pasture Feces', fr: 'Bouses/Crottes de pâture' }
        },
        {
          stageNumber: 2,
          title: { ar: 'تطور الميراسيديوم واختراق القوقع', en: 'Miracidium & Snail Infection', fr: 'Miracidium et Limnée' },
          hostType: 'intermediate',
          isDiagnostic: false,
          isInfective: false,
          description: {
            ar: 'تفقس البيضة في الماء خلال أسبوعين مهدب السباحة (Miracidium) يبحث عن قوقع الليمينيا ويخترق أنسجته ليتكاثر لا جنسياً',
            en: 'Egg embryonates in water, releases ciliated miracidium which penetrates snail Galba truncatula to form sporocysts and rediae',
            fr: 'L\'œuf embryonne dans l\'eau, libère le miracidium qui pénètre la limnée tronquée pour y former sporocystes et rédies'
          },
          location: { ar: 'المياه الراكدة وأنسجة القوقع', en: 'Freshwater Snail Tissue', fr: 'Eaux douces et tissu du mollusque' }
        },
        {
          stageNumber: 3,
          title: { ar: 'انطلاق الذنائب والتكيس على الأعشاب', en: 'Cercariae & Encystment (Metacercariae)', fr: 'Cercaires & Métacercaires' },
          hostType: 'environment',
          isDiagnostic: false,
          isInfective: true,
          description: {
            ar: 'تخرج الذنائب السابحة من القوقع وتفقد ذيلها لتتكيس كخراطيم معدية (Metacercariae) على أوراق نباتات المستنقعات والجرجير',
            en: 'Free-swimming cercariae shed from snail encyst as hardy metacercariae on submerged grasses and watercress',
            fr: 'Les cercaires nagent et s\'enkystent sous forme de métacercaires résistantes fixées aux végétaux humides'
          },
          location: { ar: 'أوراق النباتات المائية والمراعي المبتلة', en: 'Aquatic plants / Watercress', fr: 'Végétaux aquatiques et cresson' }
        },
        {
          stageNumber: 4,
          title: { ar: 'الابتلاع والهجرة عبر الكبد إلى القنوات الصفراوية', en: 'Excystment, Liver Migration & Maturation', fr: 'Migration hépato-biliaire' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: true,
          description: {
            ar: 'تنبثق اليرقة في الاثني عشر، تخترق جدار الأمعاء وتجوب تجويف البطن لتصل إلى كبسولة الكبد وتنخر أنسجته لمدة 6-8 أسابيع قبل الاستقرار والتبويض في القنوات الصفراوية',
            en: 'Metacercariae excyst in duodenum, burrow through peritoneum, penetrate Glisson\'s capsule, tunnel through liver parenchyma (6-8 wks) to settle in bile ducts',
            fr: 'Désenkystement duodénal, perforation péritonéale, traversée destructive du parenchyme hépatique pendant 2 mois avant maturation dans les voies biliaires'
          },
          location: { ar: 'نسيج الكبد والقنوات الصفراوية', en: 'Hepatic parenchyma & Bile ducts', fr: 'Foie et voies biliaires' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Sheep (أغنام)', 'Cattle (أبقار)', 'Goats (ماعز)', 'Horses (خيول)'],
      clinicalSigns: {
        ar: [
          'الشكل الحاد (خاصة الأغنام): موت مفاجئ نتيجة نزيف داخلي وتمزق كبدي خلال هجرة اليرقات الجماعية',
          'الشكل المزمن: فقر دم حاد شاحب، هزال وضعف شديد، وفقدان الصوف والوزن',
          'الوذمة الفكية السفلية المميزة (وذمة القنينة - Bottle jaw) نتيجة نقص ألبومين الدم',
          'انخفاض إنتاج الحليب وتليف الكبد وانسداد القنوات الصفراوية لدى الأبقار'
        ],
        en: [
          'Acute fasciolosis (mostly sheep): sudden death, hemorrhagic traumatic hepatitis during massive larval migration',
          'Chronic fasciolosis: severe regenerative anemia, unthriftiness, cachexia, wool break',
          'Submandibular subacute edema ("Bottle Jaw") secondary to severe hypoalbuminemia',
          'Pronounced drop in dairy milk yield, hepatic cirrhosis, and "pipe-stem" calcified bile ducts in cattle'
        ],
        fr: [
          'Forme aiguë (surtout ovins) : mort subite par hépatite traumatique hémorragique lors de la migration parasitaire',
          'Forme chronique : anémie sévère, cachexie progressive, pica, perte de laine',
          'Œdème sous-glossien typique en "bouteille" consécutif à l\'hypoalbuminémie majeure',
          'Chute dramatique de la lactation et aspect de "tuyaux de pipe" calcifiés des canaux biliaires bovins'
        ]
      },
      pathology: {
        ar: 'مسارات نزفية نخريّة في لحمة الكبد؛ تليف وتكلس شديد لجدران القنوات الصفراوية الكبدية مع فرط التنسج الظهاري',
        en: 'Hemorrhagic migratory tracks, chronic cholangiohepatitis with severe fibrosis and calcification of bile ducts ("pipe-stem liver")',
        fr: 'Sillons hémorragiques parenchymateux ; cholangite sclérosante calcifiante avec aspect en tuyau de pipe'
      },
      severity: 'fatal'
    },
    humanImpact: {
      isZoonotic: true,
      incubationPeriod: {
        ar: 'مرحلة حادة (غزو كبدي): 6 أسابيع إلى 3 أشهر؛ مرحلة مزمنة صفراوية: شهور إلى سنوات',
        en: 'Acute hepatic phase: 6 to 12 weeks; Chronic biliary phase: months to years',
        fr: 'Phase invasive aiguë : 6 à 12 semaines ; Phase biliaire d\'état : plusieurs mois à années'
      },
      acuteSigns: {
        ar: [
          'حمى مستمرة متقطعة مع ألم حاد في المراق الأيمن والشرسوف',
          'تضخم الكبد المؤلم (Hepatomegaly)',
          'فرط شديد في الحمضات بالدم (Eosinophilia تصل إلى 60-80%)',
          'طفح جلدي شروي (Urticaria) مصحوب بتوعك عام وغثيان'
        ],
        en: [
          'Prolonged high fever with severe right upper quadrant abdominal pain',
          'Tender hepatomegaly',
          'Marked, striking hypereosinophilia (frequently 50–80%)',
          'Allergic manifestations: urticaria, pruritus, fatigue, nausea'
        ],
        fr: [
          'Fièvre ondulante prolongée avec douleur de l\'hypochondre droit',
          'Hépatomégalie douloureuse',
          'Hyperéosinophilie sanguine majeure (souvent > 50-70 %)',
          'Éruptions urticariennes fébriles et asthénie'
        ]
      },
      chronicComplications: {
        ar: [
          'يرقان انسدادي ونوبات مغص كبدي مراري متكررة تشبه حصيات المرارة',
          'التهاب الطرق الصفراوية القيحي وتليف الكبد البابي',
          'داء الفاسيولا المهاجر الخارجي (في الرئة، جدار البطن، أو الدماغ)'
        ],
        en: [
          'Biliary colic, intermittent obstructive jaundice, and ascending cholangitis resembling cholelithiasis',
          'Sclerosing cholangitis and secondary biliary cirrhosis',
          'Ectopic fascioliasis (nodules in lungs, peritoneum, or central nervous system)'
        ],
        fr: [
          'Coliques hépatiques, ictère obstructif et angiocholite simulant une lithiase',
          'Cirrhose biliaire secondaire et abcès hépatiques surinfectés',
          'Localisations ectopiques aberrantes (poumon, sous-cutané, cerveau)'
        ]
      },
      highRiskGroups: {
        ar: ['مستهلكو الجرجير البري والنباتات المائية في المناطق الرعوية', 'مربو المواشي ورعاة الأغنام في المناطق الرطبة والمستنقعات'],
        en: ['Consumers of wild watercress and foraged aquatic greens', 'Pastoral communities, shepherd families near endemic wetlands'],
        fr: ['Amateurs de cresson sauvage ou salades cueillies en zones humides de pâturage', 'Éleveurs et vétérinaires ruraux']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [
          { drug: 'Triclabendazole (تريكلابندازول)', dosageGuideline: '10 mg/kg PO in sheep, 12 mg/kg in cattle', note: { ar: 'العقار الفريد القادر على قتل اليرقات المبكرة جداً (عمر أسبوعين) والدودة البالغة', en: 'Unique fasciolicide active against both early immature flukes (>= 2 weeks) and adults', fr: 'Seule molécule active sur les douves immatures précoces dès 2 semaines et les adultes' } },
          { drug: 'Closantel (كلوزانتيل)', dosageGuideline: '10 mg/kg PO/SC', note: { ar: 'فعال ضد اليرقات بعمر 6-8 أسابيع والبالغات، خيار ممتاز عند مقاومة التريكلابندازول', en: 'Active against late immatures (6-8 wks) and adults; useful in triclabendazole resistance', fr: 'Actif sur douves tardives et adultes, précieux en cas de résistance au triclabendazole' } },
          { drug: 'Albendazole (ألبندازول)', dosageGuideline: '7.5–10 mg/kg PO', note: { ar: 'فعال فقط ضد الديدان البالغة الناضجة في القنوات الصفراوية (فوق 12 أسبوع)', en: 'Only active against mature adult flukes in bile ducts; ineffective for acute immatures', fr: 'Actif uniquement sur les douves adultes matures (> 12 semaines)' } }
        ],
        precautions: {
          ar: 'مراعاة فترات سحب الدواء الصارمة من الحليب واللحم، ومراقبة سلالات المقاومة للتريكلابندازول',
          en: 'Strict adherence to meat and milk withdrawal periods; monitor for emerging triclabendazole resistance',
          fr: 'Respect rigoureux des temps d\'attente lait et viande ; vigilance face aux chimiorésistances'
        }
      },
      human: {
        firstLineDrugs: [
          { drug: 'Triclabendazole (Egaten / تريكلابندازول بشري)', dosageGuideline: '10 mg/kg single dose with meals (or 2 doses of 10 mg/kg 12h apart in severe cases)', note: { ar: 'عقار الاختيار الأول والوحيد المعتمد من منظمة الصحة العالمية (WHO)', en: 'First-line and only WHO-recommended drug for human fascioliasis', fr: 'Molécule de choix et unique traitement recommandé par l\'OMS chez l\'Homme' } },
          { drug: 'Nitazoxanide (نيتازاوكسانيد)', dosageGuideline: '500 mg PO bid for 7 days', note: { ar: 'بديل ثانوي في حال عدم توفر التريكلابندازول رغم انخفاض فعاليته', en: 'Secondary alternative when triclabendazole is unavailable', fr: 'Alternative de seconde intention si triclabendazole indisponible' } }
        ],
        surgicalIntervention: {
          ar: 'تنظير القنوات الصفراوية الراجع (ERCP) لاستخراج الديدان البالغة المسببة للانسداد الصفراوي واليرقان الحاد',
          en: 'Endoscopic retrograde cholangiopancreatography (ERCP) extraction for obstructive biliary flukes',
          fr: 'Extraction par CPRE (cholangiographie rétrograde endoscopique) en cas d\'ictère obstructif mécanique'
        },
        notes: {
          ar: 'البرازيل أو البرازيكوانتل (Praziquantel) غير فعال إطلاقاً ضد الفاسيولا ويجب عدم استخدامه',
          en: 'Praziquantel is notoriously INEFFECTIVE against Fasciola species and should NOT be used',
          fr: 'Le praziquantel est totalement INEFFICACE sur Fasciola et ne doit jamais être prescrit'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: [
          'تجفيف المستنقعات والمناطق الرطبة في المراعي أو تسييجها لمنع رعي الحيوانات فيها',
          'وضع جدول دوري لجرعات مضادات الديدان الكبدية في الخريف ومطلع الربيع',
          'عدم إلقاء روث الماشية غير المعالج حرارياً قرب مصادر المياه'
        ],
        en: [
          'Drain pasture wetlands or fence off snail-infested marshy watering holes',
          'Strategic seasonal drenching (late autumn / early spring) based on regional forecast models',
          'Avoid grazing vulnerable sheep flocks on known low-lying flukey pastures'
        ],
        fr: [
          'Assainissement des zones humides ou clôture des mares et fossés à limnées',
          'Déparasitage stratégique raisonné (automne/printemps) selon la météo et la prévalence',
          'Rotation des pâtures et exclusion des animaux des parcelles inondables'
        ]
      },
      human: {
        ar: [
          'الامتناع التام عن تناول الجرجير البري والنباتات البرية النيئة التي تنمو قرب مجاري المياه أو مراعي الماشية',
          'غلي مياه الشرب أو تصفيتها بمرشحات دقيقة في المناطق الريفية الموبوءة',
          'نقع الخضار في محلول الخل بنسبة 6% أو برمنغنات البوتاسيوم المخففة'
        ],
        en: [
          'Strict avoidance of raw wild watercress and foraged wetlands greens in grazing districts',
          'Boil or microfilter surface drinking water in endemic rural areas',
          'Commercial cultivation of watercress in clean, tap-water snail-free beds only'
        ],
        fr: [
          'Bannir la consommation de cresson sauvage et salades sauvages cueillies à proximité d\'élevages',
          'Consommer exclusivement du cresson de cressonnière agréée et contrôlée',
          'Faire bouillir ou filtrer l\'eau non traitée en zone endémique'
        ]
      },
      environmental: {
        ar: [
          'مكافحة قواقع الليمينيا بيولوجياً أو باستخدام مبيدات الرخويات المعتمدة بيئياً',
          'تنظيم تصريف المياه السطحية والري لمنع تشكل مسطحات مائية راكدة',
          'حماية ينابيع الشرب وحواف الأنهار من وصول الماشية'
        ],
        en: [
          'Biological or targeted environmental control of intermediate Lymnaeid snail habitats',
          'Improve field drainage to eliminate stagnant mud zones favorable to Galba truncatula',
          'Fence riparian buffer zones to prevent animal defecation into waterways'
        ],
        fr: [
          'Lutte contre la limnée par curage régulier des fossés et drainage des parcelles humides',
          'Aménagement d\'abreuvoirs surélevés alimentés par l\'eau courante pour éviter l\'accès aux mares',
          'Protection des berges des cours d\'eau contre les déjections du bétail'
        ]
      }
    },
    sampleMicrographs: [
      {
        title: { ar: 'بيضة مثقوبة كبدية مجهرياً', en: 'Fasciola hepatica Operculated Ovum', fr: 'Œuf operculé de Fasciola' },
        stage: 'Operculated Egg (بيضة ذات غطاء)',
        magnification: '400x High Power',
        stain: 'Lugol Iodine / Wet Mount Sedimentation',
        imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'بيضة عملاقة ذهبية مع غطاء قطبي ظاهر بوضوح في أحد القطبين ومحتوى حبيبي غير متمايز',
          en: 'Large ellipsoidal golden-brown egg displaying the opercular cap at one pole',
          fr: 'Volumineux œuf brun-doré avec opercule distinctif au pôle supérieur'
        }
      }
    ],
    videos: [
      {
        id: 'fasciola-lifecycle',
        title: { ar: 'دورة حياة دودة الكبد الفاسيولا والقواقع (WHO/CDC)', en: 'Fasciola hepatica: Life Cycle & Clinical Features', fr: 'Cycle de Fasciola hepatica et diagnostic' },
        type: 'life_cycle_animation',
        duration: '5:02',
        youtubeId: '6NeuQ1Sv8bA',
        sourceName: 'WHO Neglected Tropical Diseases / CDC',
        description: {
          ar: 'شرح تحليلي للمسار بين الأغنام وقواقع الليمينيا ومخاطر الجرجير المائي',
          en: 'Comprehensive scientific visual of snail transmission and biliary pathogenesis',
          fr: 'Démonstration visuelle de la transmission par la limnée et la migration hépatique'
        }
      }
    ],
    scientificSources: [
      {
        title: 'WHO Guidelines on Management of Human Fascioliasis',
        organization: 'World Health Organization (WHO)',
        year: '2024',
        url: 'https://www.who.int/news-room/fact-sheets/detail/fascioliasis',
        citationType: 'guideline'
      },
      {
        title: 'WOAH Terrestrial Manual - Fasciolosis in Domestic Ruminants',
        organization: 'World Organisation for Animal Health (WOAH)',
        year: '2023',
        url: 'https://www.woah.org',
        citationType: 'standard'
      },
      {
        title: 'CDC DPDx Laboratory Identification of Parasites - Fascioliasis',
        organization: 'Centers for Disease Control and Prevention',
        year: '2024',
        url: 'https://www.cdc.gov/dpdx/fascioliasis/index.html',
        citationType: 'guideline'
      }
    ]
  },
  {
    id: 'echinococcus-granulosus',
    scientificName: 'Echinococcus granulosus',
    commonNames: {
      ar: 'المشوكة الحبيبية (الكيس المائي / داء المشوكات)',
      en: 'Hydatid Tapeworm / Cystic Echinococcosis',
      fr: 'Tænia échinocoque (Kyste Hydatique)'
    },
    type: 'cestode',
    phylum: 'Platyhelminthes',
    class: 'Cestoda',
    order: 'Cyclophyllidea',
    family: 'Taeniidae',
    genus: 'Echinococcus',
    species: 'E. granulosus sensu lato',
    zoonoticRisk: 'very_high',
    hosts: {
      definitive: {
        ar: 'الكلبيات (الكلاب، الذئاب، بنات آوى التي تأوي الديدان البالغة في أمعائها)',
        en: 'Canids (Dogs, jackals, wolves harbor the tiny adult tapeworm in small intestine)',
        fr: 'Canidés (Le chien domestique, loup et chacal hébergent les adultes dans l\'intestin)'
      },
      intermediate: {
        ar: 'ذوات الحوافر (الأغنام، الأبقار، الإبل، الخنازير) والإنسان (عائل وسيط عرضي)',
        en: 'Ungulates (Sheep, cattle, camels, pigs, goats) and accidentally Humans',
        fr: 'Ongulés (Ovins, bovins, camelins, porcins) et accidentellement l\'Homme'
      }
    },
    transmission: {
      ar: 'ابتلاع بيوض المشوكة الحبيبية المفرزة في براز الكلاب عن طريق تلوث الأيدي، ملامسة فراء الكلاب، شرب مياه ملوثة، أو تناول خضار ملوثة ببراز الكلاب',
      en: 'Fecal-oral ingestion of taeniid eggs from dog feces via hand-to-mouth contact, petting infected dogs, contaminated fresh produce or water',
      fr: 'Ingestion fécale-orale d\'œufs éliminés par le chien (caresses, pelage souillé, crudités, eau)'
    },
    morphology: {
      diagnosticStages: ['Taeniid eggs in dog feces (30-40 µm)', 'Hydatid cyst with protoscolices ("hydatid sand") in liver/lung (5-20 cm)'],
      dimensions: '30–40 µm (بيوض) / 2–6 مم (بالغ) / 5–20 سم (كيس مائي)',
      microscopicFeatures: {
        ar: 'البيضة كروية ذات غلاف سميك مخطط شعاعياً وجنين سداسي الأشواك (Oncosphere)؛ الدودة البالغة صغيرة جداً بطول 3-6 مم تتكون من 3-4 قطع فقط ورأس (Scolex) مزود بـ 4 ممصات وتاج من الأشواك؛ الرمل العداري يحوي رؤوساً أصلية (Protoscolices) بأشواك خطافية واضحة',
        en: 'Spherical egg with thick radially striated embryophore and 6-hooked hexacanth embryo; adult is 3-6 mm with only 3 segments; hydatid sand shows invaginated protoscolices with rostellar hooklets',
        fr: 'Œuf taenioïde à coque épaisse striée radialement renfermant un embryon hexacanthe ; adulte nain de 3 à 6 mm (3 à 4 anneaux) ; sable hydatique riche en scolex aux crochets en poignard'
      },
      stainingAndDiagnosticMethods: {
        ar: 'الأشعة المقطعية (CT scan) والموجات فوق الصوتية (تصنيف WHO للكيسات المائية CE1-CE5)، اختبارات مصلية (Western Blot, ELISA)، والفحص المجهري المباشر لسائل الكيس بحثاً عن الرمل العداري',
        en: 'Abdominal ultrasound (WHO-IWGE classification CE1-CE5), CT/MRI, serology (IgG ELISA, Arc-5 confirmation), direct microscopy of hydatid fluid for hooklets',
        fr: 'Échographie abdominale selon classification OMS (CE1 à CE5), TDM, sérologie (ELISA + Western Blot Arc-5), examen microscopique du liquide kystique'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'يعيش الطفيلي البالغ الصغير في أمعاء الكلب ويفرز بيوضاً مع البراز؛ تبتلعها الأغنام أو الإنسان فتخترق اليرقة الأمعاء وتصل عبر الوريد البابي إلى الكبد والرئة لتشكل كيسة مائية بطيئة النمو تحوي آلاف الرؤوس؛ تصاب الكلاب عند التهامها أحشاء الماشية المصابة غير المطهوة',
        en: 'Adult worm resides in dog intestine shedding taeniid eggs. Ingested by sheep or human, oncosphere penetrates gut, travels via portal circulation to liver/lungs, developing into slow-growing unilocular hydatid cysts. Dogs are reinfected by eating infected livestock offal',
        fr: 'L\'adulte vit dans l\'intestin du chien et pond des œufs taenioïdes. L\'ongulé ou l\'homme les ingère, l\'embryon migre au foie/poumon et forme un kyste hydatique uniloculaire. Le chien se réinfeste en mangeant les viscères parasités à l\'abattoir'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'طرح بيوض المشوكة من الكلب', en: 'Egg Excretion in Canid Feces', fr: 'Excrétion des œufs par le chien' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: true,
          description: {
            ar: 'تنفصل القطعة الحبلى الأخيرة من الدودة في أمعاء الكلب وتفرز بيوضاً شديدة المقاومة تلوث التربة وفراء الكلب',
            en: 'Gravid proglottids disintegrate, releasing resilient embryonated eggs into environment and fur',
            fr: 'Les anneaux gravides se détachent et libèrent des œufs infectants sur le sol et le pelage du chien'
          },
          location: { ar: 'براز الكلب وفروه والبيئة المحيطة', en: 'Dog feces, fur, pasture', fr: 'Fèces canines, pelage et sol' }
        },
        {
          stageNumber: 2,
          title: { ar: 'ابتلاع البيض وفقس الجنين', en: 'Ingestion & Oncosphere Penetration', fr: 'Ingestion et traversée intestinale' },
          hostType: 'intermediate',
          isDiagnostic: false,
          isInfective: false,
          description: {
            ar: 'تبتلع الماشية أو الإنسان البيوض، تفقس في الأمعاء الدقيقة وتتحرر اليرقة سداسية الأشواك لتخترق جدار الأمعاء',
            en: 'Intermediate host ingests eggs; oncosphere hatches, invades mesenteric venules into portal blood',
            fr: 'L\'hôte intermédiaire ingère l\'œuf ; l\'embryon hexacanthe éclot, traverse la muqueuse vers la veine porte'
          },
          location: { ar: 'الأمعاء الدقيقة والأوردة البابية', en: 'Duodenum & Mesenteric veins', fr: 'Intestin grêle et système porte' }
        },
        {
          stageNumber: 3,
          title: { ar: 'تكون الكيس المائي الحبيبي (الكبد والرئة)', en: 'Hydatid Cyst Development', fr: 'Développement du Kyste Hydatique' },
          hostType: 'intermediate',
          isDiagnostic: true,
          isInfective: true,
          description: {
            ar: 'تستقر اليرقة (70% في الكبد، 20% في الرئة) وتنمو كيسة سميكة الجدار بثلاث طبقات تنتج حويصلات بنوية وملايين الرؤوس الأصلية',
            en: 'Larva establishes in capillary beds (70% liver, 20% lung), forming a fluid-filled cyst with cuticular and germinal layers producing brood capsules',
            fr: 'L\'embryon s\'implante (70 % foie, 20 % poumon) et grandit en un kyste uniloculaire tapissé d\'une membrane germinative fertile'
          },
          location: { ar: 'الكبد، الرئتان، الكليتان، الطحال', en: 'Liver, Lungs, Spleen, Bones', fr: 'Foie, Poumons, Rate, Os' }
        },
        {
          stageNumber: 4,
          title: { ar: 'إطعام الأحشاء للكلاب واكتمال الدورة', en: 'Consumption of Offal by Canids', fr: 'Ingestion d\'abats par le chien' },
          hostType: 'definitive',
          isDiagnostic: false,
          isInfective: true,
          description: {
            ar: 'عند ذبح الماشية ورمي الأكباد والرئات المصابة للكلاب، تبتلع الرؤوس فتلتصق بجدار أمعاء الكلب وتتحول لديدان بالغة خلال 4-7 أسابيع',
            en: 'Canid consumes raw fertile hydatid cysts from slaughtered livestock; protoscolices evaginate and mature into adult tapeworms in 4–7 weeks',
            fr: 'Le chien ingère des viscères crus kystiques ; les protoscolex dévaginés se fixent à la muqueuse intestinale et deviennent adultes'
          },
          location: { ar: 'الأمعاء الدقيقة للكلب', en: 'Canine small intestine', fr: 'Intestin grêle canin' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Dogs (كلاب - بالغة)', 'Sheep (أغنام - أكياس)', 'Cattle (أبقار)', 'Camels (إبل)'],
      clinicalSigns: {
        ar: [
          'في الكلاب: عادة غير عرضي تماماً رغم وجود آلاف الديدان البالغة في الأمعاء (خطر وبائي صامت)',
          'في الأغنام والماشية: نادراً ما تظهر أعراض سريرية حادة؛ تراجع تدريجي في الإنتاج وصعوبة تنفس إذا كان الكيس الرئوي ضخماً',
          'خسائر اقتصادية فادحة بسبب إتلاف وإعدام الكبد والرئة في المسالخ'
        ],
        en: [
          'In dogs: virtually asymptomatic even with heavy infections of thousands of tiny worms (silent public health hazard)',
          'In sheep/cattle: mostly subclinical; decreased meat, milk, wool production; respiratory distress if massive lung cysts',
          'Severe economic losses from condemned organs (liver/lungs) during abattoir meat inspection'
        ],
        fr: [
          'Chez le chien : asymptomatique même en cas de parasitisme massif par des milliers de tænias (danger épidémiologique invisible)',
          'Chez les ruminants : tolérance clinique fréquente ; baisse de rendement, dyspnée si kystes pulmonaires volumineux',
          'Pertes économiques massives par saisie systématique des foies et poumons à l\'abattoir'
        ]
      },
      pathology: {
        ar: 'أكياس كروية سميكة الجدار مملوءة بسائل رائق تحت ضغط؛ تحاط بكبسولة ليفية من رد فعل المضيف (Pericyst)',
        en: 'Unilocular thick-walled cysts filled with pressurized hydatid fluid, enclosed by host adventitial fibrous pericyst',
        fr: 'Kystes uniloculaires sous tension renfermant le liquide hydatique dit "eau de roche", entourés d\'un périkyste fibreux'
      },
      severity: 'moderate'
    },
    humanImpact: {
      isZoonotic: true,
      incubationPeriod: {
        ar: 'بطيء جداً؛ يمتد من عدة أشهر إلى سنوات أو عقود (5-15 سنة) قبل ظهور الأعراض',
        en: 'Very prolonged latency; months to several decades (5–15+ years) before symptoms arise',
        fr: 'Très long temps de latence ; asymptomatique pendant des années voire décennies (5 à 15 ans)'
      },
      acuteSigns: {
        ar: [
          'ألم ثقيل وانزعاج في المراق الأيمن مع كتلة محسوسة بالكبد',
          'سعال مزمن، نفث دم، وألم صدري في حال استقرار الكيس في الرئة',
          'صدمة تحسسية تأقية حادة (Anaphylactic Shock) تهدد الحياة في حال تمزق الكيس العفوي أو الرضحي'
        ],
        en: [
          'Dull right upper quadrant discomfort, palpable hepatomegaly or abdominal mass',
          'Chronic dry cough, hemoptysis, chest pain with thoracic hydatid cysts',
          'Sudden life-threatening anaphylactic shock if cyst ruptures spontaneously or after trauma'
        ],
        fr: [
          'Pesanteur de l\'hypochondre droit, hépatomégalie ou masse abdominale palpable',
          'Toux chronique, hémoptysie, vomique hydatique eau-de-roche en cas de kyste pulmonaire',
          'Choc anaphylactique gravissime immédiat en cas de fissuration ou rupture accidentelle du kyste'
        ]
      },
      chronicComplications: {
        ar: [
          'تمزق الكيس وانتشار الرمل العداري مسبباً داء المشوكات الثانوي المتعدد في كامل تجويف البطن والصفاق',
          'يرقان انسدادي والتهاب الأقنية الصفراوية القيحي نتيجة ضغط الكيس أو انثقابه في القنوات الصفراوية',
          'تآكل العظام وتلف الجهاز العصبي في التوضعات النادرة'
        ],
        en: [
          'Secondary disseminated intra-peritoneal echinococcosis following cyst rupture',
          'Mechanical biliary obstruction and cholangitis from intrabiliary rupture',
          'Pathological bone fractures in osseous echinococcosis and intracranial hypertension in brain cysts'
        ],
        fr: [
          'Échinococcose secondaire disséminée péritonéale post-rupture',
          'Ictère obstructif par compression ou rupture intrakystique dans les voies biliaires',
          'Destruction osseuse ou hypertension intracrânienne dans les formes rares'
        ]
      },
      highRiskGroups: {
        ar: ['رعاة الأغنام ومربو الماشية وأصحاب الكلاب الريفية', 'عمال المسالخ والقصابون غير الملتزمين بإجراءات التخلص من الأحشاء', 'الأطفال الذين يلعبون مع الكلاب المصابة دون غسل الأيدي'],
        en: ['Shepherds, pastoralists, and rural dog owners', 'Abattoir workers in areas with informal slaughter practices', 'Children in close domestic contact with un-dewormed dogs'],
        fr: ['Éleveurs ovins, bergers et propriétaires de chiens de troupeau', 'Personnel d\'abattoir et bouchers pratiquant l\'abattage clandestin', 'Enfants en contact avec des chiens ruraux non vermifugés']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [
          { drug: 'Praziquantel (برازيكوانتل للكلاب)', dosageGuideline: '5 mg/kg PO every 4–6 weeks in endemic zones', note: { ar: 'العقار المعياري الفائق الفعالية (100%) لقتل الديدان البالغة في الكلاب', en: '100% effective gold standard taeniacide for eradicating adult worms in canines', fr: 'Traitement de référence absolu à 100 % d\'efficacité chez le chien' } },
          { drug: 'Epsiprantel', dosageGuideline: '5.5 mg/kg PO', note: { ar: 'بديل علاجي فعال لطفيليات التينيا والمشوكات في الكلاب', en: 'Effective alternative taeniacide for canines', fr: 'Alternative taenicide efficace chez le chien' } }
        ],
        precautions: {
          ar: 'يجب التخلص الحذر من براز الكلاب المعالجة لمدة 48 ساعة بعد الدواء لاحتوائه على بيوض معدية',
          en: 'Safely incinerate or bury dog feces for 48 hours post-praziquantel due to viable expelled eggs',
          fr: 'Incinérer les déjections canines durant les 48h post-traitement pour éviter la dissémination des œufs'
        }
      },
      human: {
        firstLineDrugs: [
          { drug: 'Albendazole (ألبندازول بشري)', dosageGuideline: '400 mg PO bid (10–15 mg/kg/day) taken with fatty meal for 1–6 months', note: { ar: 'يعطى قبل الجراحة وبعدها لتقليل حيوية الرمل العداري ومنع الانتكاس، أو بمفرده للكيسات غير الجراحية', en: 'Administered perioperatively to prevent secondary seeding, or prolonged courses for inoperable cysts', fr: 'Prescrit en péri-opératoire pour stériliser le kyste et éviter les récidives' } },
          { drug: 'Mebendazole', dosageGuideline: '40–50 mg/kg/day in 3 divided doses', note: { ar: 'بديل في حال عدم تحمل الألبندازول', en: 'Alternative benzimidazole if albendazole is contraindicated', fr: 'Alternative en cas d\'intolérance à l\'albendazole' } }
        ],
        surgicalIntervention: {
          ar: 'تقنية PAIR (البزل، الحقن بمادة مصلبة كالكحول أو الملح عالي التركيز، ثم إعادة الشفط)، أو الاستئصال الجراحي التام للكيسة دون فتحها (Pericystectomy)',
          en: 'PAIR technique (Puncture, Aspiration, Injection of scolicide [20% NaCl], Re-aspiration) or open/laparoscopic total pericystectomy',
          fr: 'Méthode PAIR (Ponction, Aspiration, Injection de scolicide, Ré-aspiration) ou périkystectomie chirurgicale'
        },
        notes: {
          ar: 'تجنب تسريب أي قطرة من سائل الكيس المائي أثناء الجراحة لمنع الصدمة التأقية والانتشار الصفاقي',
          en: 'Extreme care during surgical or PAIR maneuvers to prevent spillage, anaphylaxis, and secondary dissemination',
          fr: 'Prévention absolue de tout déversement per-opératoire de liquide hydatique'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: [
          'المنع الصارم لإطعام الكلاب الأحشاء والأعضاء المصابة بالأكياس وإعدامها بالحرق أو الدفن العميق',
          'التجريع الدوري الإجباري للكلاب بالبرازيكوانتل كل 6 إلى 8 أسابيع في المناطق الموبوءة',
          'تطعيم الأغنام بلقاح المشوكات المؤتلف (EG95 vaccine)'
        ],
        en: [
          'Strict ban on feeding raw livestock viscera/offal to dogs; safely incinerate condemned organs',
          'Regular deworming of all farm and domestic dogs with praziquantel every 6–8 weeks',
          'Vaccination of intermediate sheep hosts using recombinant EG95 vaccine'
        ],
        fr: [
          'Interdiction absolue de distribuer des abats ou viscères crus aux chiens ; incinération obligatoire des saisies',
          'Vermifugation obligatoire des chiens au praziquantel toutes les 6 à 8 semaines en zone d\'endémie',
          'Vaccination préventive des agneaux avec le vaccin recombinant EG95'
        ]
      },
      human: {
        ar: [
          'غسل اليدين جيداً بالماء والصابون بعد لمس الكلاب وقبل تناول الطعام',
          'غسل الخضروات والفواكه جيداً بالماء النظيف',
          'عدم ترك الكلاب تلعق وجوه الأطفال أو أواني الطعام المنزلية'
        ],
        en: [
          'Thorough hand washing with soap after handling dogs and before eating',
          'Meticulous washing of fresh vegetables and salads grown in open fields',
          'Prevent domestic dogs from licking children\'s faces or dining utensils'
        ],
        fr: [
          'Lavage rigoureux des mains à l\'eau et au savon après tout contact avec un chien et avant les repas',
          'Lavage méticuleux des crudités et légumes du potager',
          'Interdire aux chiens de lécher le visage des enfants ou la vaisselle'
        ]
      },
      environmental: {
        ar: [
          'مراقبة المسالخ البلدية ومنع الذبح العشوائي خارج المسالخ القانونية',
          'مكافحة الكلاب الضالة في الأرياف ومحيط المسالخ ومكبات النفايات',
          'التوعية الصحية لمربي الماشية والقصابين بخطورة رمي الرئات والأكباد المصابة'
        ],
        en: [
          'Strict control of abattoirs to eliminate unauthorized home/field slaughtering',
          'Management and population control of stray canines around slaughterhouses and rubbish dumps',
          'Public health campaigns educating pastoralists on the risks of feeding raw offal to dogs'
        ],
        fr: [
          'Lutte contre l\'abattage clandestin et sécurisation des abattoirs municipaux',
          'Contrôle des populations de chiens errants autour des décharges et abattoirs',
          'Éducation sanitaire des bergers et bouchers sur les dangers des abats parasités'
        ]
      }
    },
    sampleMicrographs: [
      {
        title: { ar: 'رمل عداري يظهر الرؤوس الأولية مع أشواكها', en: 'Hydatid Sand with Protoscolices', fr: 'Sable hydatique avec protoscolex' },
        stage: 'Protoscolices / Hydatid Sand (رؤوس المشوكة)',
        magnification: '400x Brightfield',
        stain: 'Direct Wet Mount / Lugol',
        imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'حبيبات الرمل العداري المجهري مظهرة التيجان الشوكية المنغلفة والممصات الرباعية',
          en: 'Invaginated protoscolices showing diagnostic row of rostellar hooks and calcareous corpuscles',
          fr: 'Protoscolex invaginés montrant la double couronne de crochets caractéristiques'
        }
      }
    ],
    videos: [
      {
        id: 'echinococcus-lifecycle',
        title: { ar: 'دورة حياة المشوكة الحبيبية والكيس المائي (CDC/WHO)', en: 'Echinococcus granulosus Life Cycle & Hydatid Disease', fr: 'Cycle d\'Echinococcus granulosus et kyste hydatique' },
        type: 'life_cycle_animation',
        duration: '4:48',
        youtubeId: 'QfxG5Vc8Wfc',
        sourceName: 'CDC DPDx / WHO PAHO',
        description: {
          ar: 'شرح مفصل لكيفية اكتمال الدورة بين الكلاب والماشية وخطر العدوى العارضة للإنسان وطرق الجراحة',
          en: 'Complete animated breakdown of the canid-ungulate cycle and human pathology',
          fr: 'Schéma animé du cycle épidémiologique chien-mouton et de la pathologie humaine'
        }
      }
    ],
    scientificSources: [
      {
        title: 'WHO Manual on Echinococcosis in Humans and Animals: a Public Health Problem of Global Concern',
        organization: 'World Health Organization (WHO / OIE)',
        year: '2023',
        url: 'https://www.who.int/news-room/fact-sheets/detail/echinococcosis',
        citationType: 'monograph'
      },
      {
        title: 'CDC DPDx - Laboratory Identification of Parasites: Echinococcosis',
        organization: 'Centers for Disease Control and Prevention',
        year: '2024',
        url: 'https://www.cdc.gov/dpdx/echinococcosis/index.html',
        citationType: 'guideline'
      },
      {
        title: 'International Consensus on Imaging and Clinical Management of Cystic Echinococcosis',
        organization: 'The Lancet Infectious Diseases / WHO-IWGE',
        year: '2022',
        url: 'https://doi.org/10.1016/S1473-3099(21)00713-3',
        citationType: 'peer_reviewed'
      }
    ]
  },
  {
    id: 'giardia-duodenalis',
    scientificName: 'Giardia duodenalis',
    commonNames: {
      ar: 'الجيارديا اللمبلية / المعوية',
      en: 'Giardia lamblia / Giardia intestinalis',
      fr: 'Giardia duodenalis (Giardiose)'
    },
    type: 'protozoa',
    phylum: 'Metamonada',
    class: 'Fornicata',
    order: 'Diplomonadida',
    family: 'Hexamitidae',
    genus: 'Giardia',
    species: 'G. duodenalis (Assemblages A–H)',
    zoonoticRisk: 'high',
    hosts: {
      definitive: {
        ar: 'الإنسان، الكلاب، القطط، الماشية، القنادس، والعديد من الثدييات البرية والأليفة',
        en: 'Humans, dogs, cats, cattle, beavers ("beaver fever"), and many mammals',
        fr: 'L\'Homme, le chien, le chat, les bovins et de nombreux mammifères'
      },
      intermediate: {
        ar: 'لا يوجد عائل وسيط (دورة حياة أحادية العائل مباشرة)',
        en: 'None (Direct monoxenous life cycle)',
        fr: 'Aucun (Cycle direct monoxène)'
      }
    },
    transmission: {
      ar: 'ابتلاع الأكياس المتبوغة الرباعية النوى عبر مياه الشرب الملوثة، الأغذية غير المطهوة، أو العدوى المباشرة من الشرج إلى الفم',
      en: 'Fecal-oral ingestion of hardy quadrinucleate cysts from contaminated water, unwashed food, or direct contact',
      fr: 'Féco-orale par ingestion de kystes mûrs hydriques, aliments souillés ou contact direct'
    },
    morphology: {
      diagnosticStages: ['Quadrinucleate cyst (8–12 µm)', 'Motile trophozoite with "falling leaf" motility (10–20 µm)'],
      dimensions: '8–12 µm (كيسة) / 10–20 µm (أتروفة)',
      microscopicFeatures: {
        ar: 'الأتروفة كمثرية الشكل كوجه مبتسم بممصين ونواتين و4 أزواج من الأسواط؛ الكيسة بيضاوية ذات 4 نوى وخيوط محورية متبقية',
        en: 'Trophozoite is pyriform ("face-like") with 2 nuclei, sucking disc, 8 flagella; cyst is oval with 4 nuclei and axostyle filaments',
        fr: 'Trophozoïte piriforme à deux noyaux ("tête de singe"), disque adhésif et 8 flagelles ; kyste ovale à 4 noyaux'
      },
      stainingAndDiagnosticMethods: {
        ar: 'مسحة براز مباشرة بمحلول ملحي ولوغول اليود، تقنية تعويم كبريتات الزنك (ZnSO4)، فحص مستضدات البراز السريعة (Coproantigen EIA/ELISA)، والفلورة المناعية المباشرة (DFA)',
        en: 'Direct saline/Lugol smear, zinc sulfate flotation for cysts, coproantigen rapid ELISA, direct fluorescent antibody (DFA)',
        fr: 'Examen direct au Lugol, flottation au sulfate de zinc, copro-antigènes ELISA rapides, immunofluorescence directe (IFD)'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'تبتلع الكيسات، تنبثق في الاثني عشر محررة أتروفات تتكاثر بالانشطار الثنائي وتلتصق بالمخاطية المعوية بالممص البطني مسببة سوء امتصاص؛ تتكيس الأتروفات عند انتقالها للقولون وتطرح في البراز',
        en: 'Ingested cysts excyst in duodenum releasing two trophozoites. Trophozoites adhere to brush border via ventral disc, multiplying by binary fission. Encystment occurs during colonic transit, shedding resistant cysts',
        fr: 'Les kystes ingérés s\'enkystent dans le duodénum libérant des trophozoïtes qui tapissent la muqueuse, provoquant malabsorption. Enkystement colique et élimination'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'طرح الأكياس في البراز', en: 'Cyst Excretion', fr: 'Élimination des kystes' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: true,
          description: { ar: 'طرح متقطع لأعداد هائلة من الكيسات المقاومة للكلور في البراز', en: 'Intermittent shedding of millions of chlorine-resistant cysts in feces', fr: 'Excrétion intermittente massive de kystes très résistants au chlore' },
          location: { ar: 'البراز والبيئة المائية', en: 'Feces & Water', fr: 'Selles et eaux' }
        },
        {
          stageNumber: 2,
          title: { ar: 'الابتلاع والانبثاق في الأمعاء', en: 'Ingestion & Excystation', fr: 'Ingestion & Dékystement' },
          hostType: 'definitive',
          isDiagnostic: false,
          isInfective: false,
          description: { ar: 'تنبثق كل كيسة في الاثني عشر معطية أتروفتين نشطتين', en: 'Gastric acid stimulates excystation in duodenum, each cyst yielding 2 trophozoites', fr: 'Le passage gastrique déclenche l\'éclosion de 2 trophozoïtes par kyste' },
          location: { ar: 'المعدة والاثني عشر', en: 'Duodenum & Upper Jejunum', fr: 'Duodénum et jéjunum' }
        },
        {
          stageNumber: 3,
          title: { ar: 'الالتصاق بالمخاطية وسوء الامتصاص', en: 'Trophozoite Colonization & Malabsorption', fr: 'Colonisation muqueuse' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'تلتصق الأتروفات بالزغابات المعوية دون اختراق نسيجي عميق، متلفة حافة الفرشاة ومسببة إسهالاً دهنياً وسوء امتصاص الفيتامينات والدهون', en: 'Trophozoites attach to enterocytes with ventral disc, flattening microvilli and causing steatorrhea and disaccharidase deficiency', fr: 'Fixation au disque ventral sur les entérocytes, atrophie villositaire et stéatorrhée' },
          location: { ar: 'الزغابات المعوية', en: 'Intestinal mucosa', fr: 'Bordure en brosse entérocytaire' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Dogs (كلاب)', 'Cats (قطط)', 'Calves (عجول)', 'Lambs (حملان)'],
      clinicalSigns: {
        ar: [
          'إسهال مائي إلى هلامي باهت اللون ذو رائحة كريهة نفاذة مصحوب بانتفاخ بطني',
          'جفاف، خمول، وفقدان وزن ملحوظ رغم بقاء الشهية طبيعية في البداية',
          'شعر متلبد باهت وسوء نمو مزمن في صغار الحيوانات والجراء'
        ],
        en: [
          'Pale, foul-smelling, mucoid, greasy diarrhea with abdominal flatulence',
          'Weight loss, dehydration, unthrifty growth despite preserved appetite',
          'Poor rough coat and chronic malabsorption in puppies and calves'
        ],
        fr: [
          'Diarrhée muqueuse pâteuse à aqueuse, fétide, décolorée avec météorisme',
          'Amaigrissement, retard de croissance marqué chez les chiots et veaux',
          'Pelage terne piqué et mauvaise assimilation alimentaire'
        ]
      },
      pathology: {
        ar: 'ضمور الزغابات المعوية وتسطحها مع التهاب موضعي في الصائم؛ غياب الغزو النسيجي العميق',
        en: 'Diffuse villous blunting, microvillous atrophy and brush border enzyme depletion',
        fr: 'Atrophie villositaire modérée, raccourcissement des microvillosités sans nécrose'
      },
      severity: 'moderate'
    },
    humanImpact: {
      isZoonotic: true,
      incubationPeriod: {
        ar: '1 إلى 2 أسبوع (متوسط 7 أيام)',
        en: '1 to 2 weeks (average 7 days)',
        fr: '1 à 2 semaines (moyenne 7 à 10 jours)'
      },
      acuteSigns: {
        ar: [
          'إسهال مائي حاد غزير ذو رائحة كريهة جداً ومظهر دهني غير مدمم',
          'تطبل البطن الشديد، تجشؤ برائحة الكبريت (كبريتيد الهيدروجين)، وتشنجات بطنية',
          'غثيان، وهن عام، وفقدان شهية مفاجئ'
        ],
        en: [
          'Profuse, foul-smelling, fatty/greasy non-bloody diarrhea',
          'Bloating, sulfurous/eggy burps, severe abdominal cramps',
          'Nausea, malaise, anorexia, and epigastric discomfort'
        ],
        fr: [
          'Diarrhée aqueuse puis stéatorrhéique fétide sans glaires sanglantes',
          'Ballonnements majeurs, éructations sulfurées d\'odeur d\'œuf pourri, spasmes',
          'Nausées, fatigue intense et anorexie'
        ]
      },
      chronicComplications: {
        ar: [
          'سوء امتصاص مزمن لفيتامينات A, D, B12 والدهون، وفقدان وزن كبير',
          'متلازمة الأمعاء الهيوجة بعد الشفاء (Post-infectious IBS) وعدم تحمل اللاكتوز',
          'تأخر النمو العقلي والبدني عند الأطفال في البلدان النامية'
        ],
        en: [
          'Chronic malabsorption syndrome (steatorrhea, weight loss, fat-soluble vitamin deficits)',
          'Post-infectious irritable bowel syndrome (IBS) and secondary lactose intolerance',
          'Growth stunting and cognitive deficits in chronically infected children'
        ],
        fr: [
          'Syndrome de malabsorption chronique, perte de poids et carences vitaminiques',
          'Intolérance secondaire au lactose et côlon irritable post-infectieux',
          'Retard staturo-pondéral chez l\'enfant'
        ]
      },
      highRiskGroups: {
        ar: ['الأطفال في دور الحضانة والمدارس', 'المسافرون ومحبو التخييم (شرب مياه الينابيع دون غلي)', 'مرضى نقص الغلوبولين المناعي (IgA deficiency)'],
        en: ['Daycare children and child care workers', 'Hikers, campers drinking untreated wilderness water', 'Patients with selective IgA or common variable immunodeficiency'],
        fr: ['Enfants en crèche et personnel de petite enfance', 'Randonneurs buvant l\'eau des torrents', 'Sujets avec déficit en IgA ou hypogammaglobulinémie']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [
          { drug: 'Fenbendazole (فينبندازول)', dosageGuideline: '50 mg/kg PO once daily for 3–5 consecutive days', note: { ar: 'العقار الآمن والمفضل للجراء والقطط والحيوانات الحوامل', en: 'Preferred, exceptionally safe first-line treatment for dogs, cats, pregnant animals', fr: 'Traitement de première intention sûr chez le chiot, chaton et femelle gestante' } },
          { drug: 'Metronidazole (ميترونيدازول)', dosageGuideline: '25 mg/kg PO bid for 5 days', note: { ar: 'فعال ولكن يجب الحذر من التسمم العصبي عند الجرعات العالية', en: 'Effective; beware of potential neurotoxicity with prolonged/high dosing', fr: 'Efficace ; attention au risque de neurotoxicité à forte dose' } }
        ],
        precautions: {
          ar: 'يجب تحميم الحيوان في اليوم الأخير من العلاج لإزالة الأكياس الملتصقة بالفراء ومنع إعادة العدوى الذاتية',
          en: 'Bathing the animal on the last treatment day is crucial to remove perineal cyst adherence and prevent reinfection',
          fr: 'Bain complet de l\'animal le dernier jour du protocole pour éliminer les kystes fécaux du pelage'
        }
      },
      human: {
        firstLineDrugs: [
          { drug: 'Tinidazole (تينيدازول)', dosageGuideline: '2g single oral dose with food (Children: 50 mg/kg up to 2g)', note: { ar: 'العلاج المعياري الفعال بجرعة واحدة ونسبة شفاء تتجاوز 90%', en: 'First-line single-dose cure with > 90% efficacy', fr: 'Traitement de référence en prise unique (> 90 % d\'efficacité)' } },
          { drug: 'Metronidazole (Flagyl / فلاجيل)', dosageGuideline: '250 mg tid or 500 mg bid for 5–7 days', note: { ar: 'شائع ومتاح جداً؛ الامتناع التام عن الكحول طوال فترة العلاج', en: 'Widely accessible; strict alcohol avoidance due to disulfiram-like reaction', fr: 'Très disponible ; arrêt strict de l\'alcool (effet antabuse)' } },
          { drug: 'Nitazoxanide', dosageGuideline: '500 mg bid for 3 days', note: { ar: 'خيار ممتاز للأطفال كمعلق سائل بنكهة جيدة', en: 'Well-tolerated suspension option for pediatric patients', fr: 'Option pédiatrique très bien tolérée en suspension' } }
        ],
        notes: {
          ar: 'فحص المخالطين في المنزل وعلاج الحالات المتزامنة لتجنب عودة العدوى المتكررة',
          en: 'Screen family members and re-test stool 2 weeks post-treatment if symptoms persist',
          fr: 'Dépister l\'entourage familial en cas d\'infections récurrentes'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: [
          'تنظيف وتطهير أقفاص ومأوى الحيوانات بمطهرات الأمونيوم الرباعية أو الماء الساخن المغلي',
          'منع الحيوانات الأليفة من الشرب من البرك ومياه المستنقعات الراكدة',
          'فصل الحيوانات المصابة بالجراء حديثة الولادة'
        ],
        en: [
          'Disinfect kennels with quaternary ammonium compounds or steam cleaning',
          'Prevent dogs from drinking from puddles, ponds, or contaminated outdoor bowls',
          'Isolate diarrheic puppies immediately from littermates'
        ],
        fr: [
          'Désinfection des chenils à la vapeur ou ammoniums quaternaires',
          'Empêcher les chiens de boire l\'eau croupie des flaques et mares',
          'Isoler rapidement tout chiot ou chaton diarrhéique'
        ]
      },
      human: {
        ar: [
          'غلي مياه الشرب لمدة دقيقة واحدة على الأقل أثناء الرحلات والتخييم (الكلور وحده لا يكفي لقتل الأكياس)',
          'استخدام مرشحات مياه دقيقة بحجم مسام أقل من 1 ميكرون (Absolute 1 micron filter)',
          'غسل اليدين جيداً بعد استخدام المرحاض أو تغيير الحفاضات وقبل إعداد الطعام'
        ],
        en: [
          'Boil wilderness drinking water for >= 1 minute (routine chlorination is insufficient for cysts)',
          'Use sub-micron pore water filters (absolute 1 µm rating)',
          'Diligent hand hygiene after toilet use, diaper changing, and animal contact'
        ],
        fr: [
          'Faire bouillir l\'eau 1 minute en randonnée (la chloration standard ne tue pas les kystes)',
          'Utiliser des filtres portables à porosité absolue <= 1 µm',
          'Lavage méticuleux des mains au savon après manipulation d\'animaux ou changement de couches'
        ]
      },
      environmental: {
        ar: [
          'حماية شبكات المياه العامة بالترشيح الرملي والأشعة فوق البنفسجية (UV) المعطلة للأكياس',
          'منع تلوث أحواض السباحة العامة وتطبيق معايير الإغلاق عند وقوع حوادث إسهال',
          'معالجة مياه الصرف الصحي بشكل متقدم قبل تصريفها في الأنهار'
        ],
        en: [
          'Implement municipal water UV irradiation and coagulant sand filtration',
          'Enforce strict recreational pool hygiene and hyperchlorination protocols for fecal accidents',
          'Advanced wastewater treatment prior to river discharge'
        ],
        fr: [
          'Désinfection des réseaux d\'eau potable par UV et filtration membranaire fine',
          'Surveillance stricte de la qualité des eaux de baignade et piscines publiques',
          'Traitement tertiaire des effluents résiduaires urbains'
        ]
      }
    },
    sampleMicrographs: [
      {
        title: { ar: 'كيسة الجيارديا المعوية الرباعية النوى', en: 'Giardia Quadrinucleate Cyst', fr: 'Kyste de Giardia à 4 noyaux' },
        stage: 'Mature Cyst (كيسة ناضجة)',
        magnification: '1000x Oil Immersion',
        stain: 'Lugol Iodine Wet Mount',
        imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'كيسة بيضاوية واضحة المعالم بقطر 10 ميكرون مع 4 نوى وخيوط محورية دقيقة في المنتصف',
          en: 'Ellipsoidal cyst with smooth double wall showing internal nuclei and curved axostylar filaments',
          fr: 'Kyste ovale réfringent à 4 noyaux visibles et axostyle central incurvé'
        }
      }
    ],
    videos: [
      {
        id: 'giardia-microscopy',
        title: { ar: 'حركة أتروفة الجيارديا تحت المجهر (CDC)', en: 'Giardia Trophozoite "Falling Leaf" Motility', fr: 'Mobilité en feuille morte de Giardia' },
        type: 'microscopy_lab',
        duration: '2:10',
        youtubeId: '8X4bxITNPeg',
        sourceName: 'CDC / DPDx Video Library',
        description: {
          ar: 'مشاهد مجهرية حية لحركة الجيارديا المميزة كالأوراق المتساقطة',
          en: 'Real-time live video showing classic falling-leaf swimming behavior under phase contrast',
          fr: 'Vidéo en microscopie optique montrant le mouvement caractéristique en feuille morte'
        }
      }
    ],
    scientificSources: [
      {
        title: 'CDC DPDx - Laboratory Identification of Parasites: Giardiasis',
        organization: 'Centers for Disease Control and Prevention',
        year: '2024',
        url: 'https://www.cdc.gov/dpdx/giardiasis/index.html',
        citationType: 'guideline'
      },
      {
        title: 'Companion Animal Parasite Council (CAPC) Guidelines: Giardia in Dogs and Cats',
        organization: 'CAPC Vet',
        year: '2023',
        url: 'https://capcvet.org/guidelines/giardia/',
        citationType: 'standard'
      }
    ]
  },
  {
    id: 'sarcoptes-scabiei',
    scientificName: 'Sarcoptes scabiei',
    commonNames: {
      ar: 'عث الجرب (جرب الكلاب والحيوانات والإنسان)',
      en: 'Itch Mite / Sarcoptic Mange / Scabies',
      fr: 'Sarcopte de la gale (Gale sarcoptique)'
    },
    type: 'ectoparasite',
    phylum: 'Arthropoda',
    class: 'Arachnida',
    order: 'Sarcoptiformes',
    family: 'Sarcoptidae',
    genus: 'Sarcoptes',
    species: 'S. scabiei (var. canis, var. hominis, var. suis, var. ovis)',
    zoonoticRisk: 'high',
    hosts: {
      definitive: {
        ar: 'الإنسان، الكلاب، الثعالب، الخنازير، الأغنام، والخيول (سلالات متخصصة نوعياً ولكنها تسبب عدوى عابرة بين الأنواع)',
        en: 'Humans, dogs, foxes, swine, sheep, horses, and wild mammals',
        fr: 'L\'Homme, le chien, le renard, le porc, les petits ruminants'
      },
      intermediate: {
        ar: 'لا يوجد عائل وسيط (تتطفل مباشرة على الجلد والطبقة القرنية)',
        en: 'None (Obligate permanent ectoparasite in epidermis)',
        fr: 'Aucun (Ectoparasite cutané permanent obligatoire)'
      }
    },
    transmission: {
      ar: 'التماس الجلدي المباشر الوثيق بين المصاب والسليم، أو عبر الفرش والملابس وأدوات العناية بالحيوانات الملوثة',
      en: 'Direct skin-to-skin contact with infected host, or indirect fomite transmission (bedding, grooming tools, blankets)',
      fr: 'Contact cutané direct étroit, ou indirectement par la literie, couvertures et matériel de pansage'
    },
    morphology: {
      diagnosticStages: ['Adult mite (300–400 µm female, 200 µm male)', 'Oval eggs in epidermal tunnels (150 µm)'],
      dimensions: '300–400 µm (أنثى بالغة) / 150 µm (بيوض)',
      microscopicFeatures: {
        ar: 'عث دائري كروي الشكل ظهره محدب ومغطى بأشواك وحراشف مثلثة مميزة؛ أربعة أزواج من الأرجل القصيرة تنتهي بممصات أنبوبية طويلة في الزوجين الأماميين',
        en: 'Globular, tortoiseshell-shaped body with transverse ridges and triangular dorsal spines; short legs, anterior pairs bearing unjointed stalked suckers',
        fr: 'Corps arrondi globuleux à face dorsale garnie d\'épines triangulaires ; pattes très courtes à ventouses pédiculées non articulées'
      },
      stainingAndDiagnosticMethods: {
        ar: 'كشاطة جلدية عميقة (Deep skin scraping) حتى يظهر نزف شعري خفيف مع قطرة زيت معدني وفحص تحت التكبير 100x؛ تنظير الجلد السريري (Dermoscopy - علامة الدلتا طائرة نفاثة)',
        en: 'Deep skin scraping with mineral oil until capillary bleeding is observed, examined under 100x; dermoscopy ("delta-wing jet" sign)',
        fr: 'Raclage cutané profond au scalpel avec goutte d\'huile jusqu\'à la rosée sanguine ; dermoscopie (signe du deltaplane)'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'تحفر الأنثى الملقحة أنفاقاً في الطبقة القرنية من الجلد بمعدل 2-3 مم يومياً وتضع 2-3 بيضات يومياً؛ تفقس اليرقات وتمر بمرحلتي حورية (Nymph) لتتحول لبالغات خلال 10-14 يوماً وتتزاوج على سطح الجلد',
        en: 'Fertilized female burrows serpentine tunnels into stratum corneum, laying 2-3 eggs daily. Hexapod larvae hatch, molt through protonymph and tritonymph stages to adults in 10-14 days; mating occurs on skin surface',
        fr: 'La femelle fécondée creuse des sillons dans la couche cornée où elle dépose ses œufs. Les larves éclosent, muent en nymphes puis adultes en 10-15 jours'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'حفر الأنفاق ووضع البيض', en: 'Burrowing & Oviposition', fr: 'Creusement du sillon & Ponte' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'تحفر الأنثى البالغة نفقاً في البشرة وتضع بيوضها مفرزة لعاباً يسبب حكة هستيرية تحسسية', en: 'Gravid female tunnels through stratum corneum, depositing eggs and allergic scybala (feces)', fr: 'La femelle creuse la couche cornée et dépose 2 à 3 œufs par jour avec déjections allergisantes' },
          location: { ar: 'الطبقة القرنية للجلد', en: 'Stratum corneum', fr: 'Épiderme (couche cornée)' }
        },
        {
          stageNumber: 2,
          title: { ar: 'فقس اليرقات وتطور الحوريات', en: 'Larval Hatch & Nymphal Molts', fr: 'Éclosion larvaire & Mues' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'تفقس يرقات سداسية الأرجل وتهاجر لسطح الجلد لتتغذى وتنسلخ إلى حوريات ثمانية الأرجل', en: 'Six-legged larvae hatch in 3-4 days, migrating to skin surface and molting into 8-legged nymphs', fr: 'Éclosion de larves hexapodes qui muent en nymphes octopodes dans les follicules pileux' },
          location: { ar: 'جريبات الشعر وسطح البشرة', en: 'Hair follicles & skin surface', fr: 'Follicules et surface cutanée' }
        },
        {
          stageNumber: 3,
          title: { ar: 'التزاوج وانتقال العدوى', en: 'Adult Mating & Transmission', fr: 'Accouplement & Contagion' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: true,
          description: { ar: 'يتزاوج البالغون على سطح الجلد، وتموت الذكور بينما تبدأ الإناث الملقحة بحفر أنفاق جديدة أو تنتقل لمضيف آخر بالملامسة', en: 'Mating occurs in temporary molting pockets; fertilized females disperse to new skin sites or transmit via contact', fr: 'Fécondation sur la peau ; les femelles colonisent de nouvelles zones ou changent d\'hôte par contact' },
          location: { ar: 'سطح الجلد والفرش', en: 'Epidermis & Fomites', fr: 'Épiderme et environnement' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Dogs (كلاب)', 'Foxes (ثعالب)', 'Pigs (خنازير)', 'Sheep/Goats (أغنام وماعز)'],
      clinicalSigns: {
        ar: [
          'حكة هستيرية شديدة ومستمرة (Intense pruritus) تمنع الحيوان من النوم والأكل',
          'تساقط شعر شديد (Alopecia)، قشور رمادية صفراء سميكة، وسحجات جلدية دامية من الحك المستمر',
          'رد فعل حك الأذن الإيجابي المنعكس (Pinna-pedal scratch reflex) عند فرك حافة صوان الأذن',
          'تركز الآفات في حواف الأذنين، المرفقين، العرقوب، ومنطقة البطن'
        ],
        en: [
          'Intense, unremitting, frenzied pruritus worsening in warm environments',
          'Crusting, hyperkeratosis, alopecia, and excoriations from relentless scratching',
          'Positive pinna-pedal scratch reflex elicited by rubbing ear margins (> 80% sensitive)',
          'Predilection lesions on ear pinnae margins, elbows, hocks, and ventral chest'
        ],
        fr: [
          'Prurit frénétique incoercible aggravé par la chaleur, empêchant tout repos',
          'Alopécie diffuse, croûtes épaisses grisâtres, lichénification et lésions d\'automutilation',
          'Réflexe otopodal positif déclenché par le frottement du bord de l\'oreille',
          'Lésions préférentielles : bord libre des pavillons auriculaires, coudes, jarrets et abdomen'
        ]
      },
      pathology: {
        ar: 'فرط التقران الجلدي، التهاب الجلد الإكزيمي التقرحي، وتكاثر بكتيري ثانوي بالبكتيريا المكورة العنقودية',
        en: 'Severe hyperkeratosis, acanthosis, eosinophilic perivascular dermatitis, secondary pyoderma',
        fr: 'Hyperkératose majeure, acanthose épidermique, dermatite péri-vasculaire et pyodermite secondaire'
      },
      severity: 'severe'
    },
    humanImpact: {
      isZoonotic: true,
      incubationPeriod: {
        ar: 'أول إصابة: 3 إلى 6 أسابيع (ريثما تتشكل الاستجابة التحسسية)؛ عند تكرار الإصابة: 24 إلى 48 ساعة فقط',
        en: 'Primary infection: 3 to 6 weeks (sensitization period); Re-infection: 24 to 48 hours',
        fr: 'Première infestation : 3 à 6 semaines (délai de sensibilisation) ; Réinfestation : 24 à 48 heures'
      },
      acuteSigns: {
        ar: [
          'حكة ليلية معذبة وشديدة جداً تزداد عند الدفء في الفراش',
          'أنفاق جحور رمادية متموجة صغيرة (Burrows) تنتهي بحويصلة لؤلؤية دقيقة',
          'أماكن مميزة: بين أصابع اليدين، ثنيات المعصمين، المرفقين، الإبطين، وحول الحلمتين والأعضاء التناسلية'
        ],
        en: [
          'Intractable nocturnal pruritus that intensifies under warm bed blankets',
          'Serpiginous microscopic burrows ending in a tiny pearly vesicle',
          'Classic distribution: web spaces of fingers, flexor wrists, elbows, axillae, areolae, and male genitalia'
        ],
        fr: [
          'Prurit nocturne féroce insomniant exacerbé par la chaleur du lit',
          'Sillons scabieux sinueux terminés par une vésicule perlée',
          'Topographie typique : espaces interdigitaux, face antérieure des poignets, coudes, plis axillaires et organes génitaux'
        ]
      },
      chronicComplications: {
        ar: [
          'الجرب النرويجي المقشر (Crusted / Norwegian Scabies): تكاثر ملايين العث وتكون قشور صلبة ضخمة لدى منقوصي المناعة',
          'التهاب الجلد الجرثومي الثانوي بالمكورات العنقودية والعقدية مما قد يؤدي لالتهاب كبيبات الكلى التالي للإنتان',
          'أرق مزمن، اكتئاب وتدهور جودة الحياة'
        ],
        en: [
          'Crusted (Norwegian) Scabies with millions of mites and extensive hyperkeratotic plaques in immunocompromised',
          'Secondary bacterial impetiginization by Staph/Strep leading to post-streptococcal glomerulonephritis',
          'Severe sleep deprivation, psychological distress, and social stigma'
        ],
        fr: [
          'Gale profuse hyperkératosique (gale norvégienne) avec des millions d\'acariens chez l\'immunodéprimé',
          'Surinfection bactérienne (impétigo à staphylocoque/streptocoque) avec risque de glomérulonéphrite',
          'Dépression, insomnie chronique et répercussions psychosociales sévères'
        ]
      },
      highRiskGroups: {
        ar: ['المخالطون لحيوانات أليفة مصابة (تسبب جرباً حيوانياً عابراً Pseudo-scabies)', 'نزلاء دور المسنين والملاجئ والمخيمات المكتظة', 'مرضى نقص المناعة واستخدام الكورتيزون المديد'],
        en: ['Individuals handling mange-infested dogs (develop transient self-limiting pseudo-scabies)', 'Residents in crowded nursing homes, institutional facilities, shelters', 'Immunocompromised patients (HIV, organ transplants, systemic corticosteroids)'],
        fr: ['Propriétaires de chiens galeux (pseudo-gale zoonotique transitoire sans sillons vrais)', 'Résidents d\'établissements médico-sociaux (EHPAD, foyers) et crèches', 'Patients immunodéprimés ou sous corticothérapie au long cours']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [
          { drug: 'Isoxazolines (Bravecto / Simparica / NexGard)', dosageGuideline: 'Oral fluralaner, sarolaner, or afoxolaner single dose', note: { ar: 'الثورة العلاجية الحديثة، جرعة واحدة تقضي على الجرب تماماً خلال أيام مع أمان فائق', en: 'Modern breakthrough: single oral isoxazoline dose provides rapid 100% cure with high safety profile', fr: 'Révolution thérapeutique moderne : une seule prise orale guérit la gale en quelques jours' } },
          { drug: 'Selamectin / Moxidectin (Spot-on)', dosageGuideline: 'Topical spot-on applied every 2–4 weeks for 2 doses', note: { ar: 'مستحضرات موضعية على ظهر العنق ممتازة للقطط والكلاب', en: 'Topical spot-on formulation highly effective for dogs and cats', fr: 'Spot-on transcutané très efficace chez le chien et le chat' } },
          { drug: 'Ivermectin (إيفرمكتين)', dosageGuideline: '0.2–0.4 mg/kg SC or PO weekly for 3–4 weeks', note: { ar: 'تجنب استخدامه إطلاقاً في سلالات الكولي والكلاب التي تحمل طفرة MDR1 الجينية القاتلة', en: 'Contraindicated in Collie breeds and dogs with ABCB1 / MDR1 gene mutation', fr: 'Contre-indiqué chez les Colleys et races sensibles à la mutation MDR1' } }
        ],
        precautions: {
          ar: 'علاج جميع الحيوانات المخالطة في نفس المنزل حتى لو لم تظهر عليها أعراض، وغسل الأفرشة',
          en: 'All in-contact domestic animals must be treated concurrently; wash all bedding in hot cycle',
          fr: 'Traiter impérativement tous les animaux du foyer simultanément et laver les couchages'
        }
      },
      human: {
        firstLineDrugs: [
          { drug: 'Permethrin 5% Cream (بيرميثرين كريم 5%)', dosageGuideline: 'Apply from neck down to soles of feet, leave for 8–14 hours, repeat after 7 days', note: { ar: 'العلاج الموضعي القياسي الذهبي لجميع أفراد العائلة من عمر شهرين فما فوق', en: 'First-line gold standard topical agent; apply thoroughly and repeat in 7 days', fr: 'Traitement local de première intention de tout le corps ; répéter à J7-J14' } },
          { drug: 'Ivermectin oral (Stromectol / إيفرمكتين فموي)', dosageGuideline: '200 µg/kg single oral dose, repeated after 7–14 days', note: { ar: 'الخيار الأفضل لتفشي الجرب الجماعي في دور الرعاية والجرب المقشر النرويجي', en: 'Drug of choice for institutional outbreaks, uncooperative patients, crusted scabies', fr: 'Traitement oral de choix lors d\'épidémies en collectivité et gale hyperkératosique' } }
        ],
        notes: {
          ar: 'قد تستمر الحكة لمدة 2-3 أسابيع بعد القضاء على العث بسبب المخلفات التحسسية وتعالج بمضادات الهيستامين',
          en: 'Post-scabetic itch can persist for 2-3 weeks due to residual mite antigens; manage with antihistamines',
          fr: 'Le prurit post-scabieux allergique peut persister 2 à 4 semaines après destruction des acariens'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: [
          'الفحص الدوري للكلاب وملاحظة أي حكة في الأذنين والمرفقين وعزل الحيوان فوراً',
          'استخدام أدوية الوقاية الشهرية من البراغيث والقراد الحاوية على الأيزوكسازولين',
          'منع الكلاب الأليفة من الاحتكاك بالثعالب والكلاب الضالة'
        ],
        en: [
          'Routine clinical screening for early ear margin pruritus; quarantine suspect cases',
          'Maintain regular monthly broad-spectrum ectoparasiticide prophylaxis (isoxazolines)',
          'Prevent hunting dogs and pets from roaming near wild fox dens'
        ],
        fr: [
          'Examen clinique des oreilles et coudes chez le chien et isolement précoce',
          'Prophylaxie antiparasitaire régulière par isoxazolines',
          'Éviter les contacts entre chiens domestiques et renards ou chiens errants'
        ]
      },
      human: {
        ar: [
          'علاج جميع أفراد الأسرة والشركاء المخالطين في نفس الوقت لتجنب "تأثير كرة البينغ بونغ"',
          'غسل جميع الملابس، والشراشف، والمناشف المستخدمة خلال الأيام الأربعة السابقة على درجة حرارة 60° مئوية وتجفيفها بالهواء الساخن',
          'وضع الأغراض غير القابلة للغسل في أكياس بلاستيكية محكمة الإغلاق لمدة 72 ساعة (يموت العث خلال 48-72 ساعة بعيداً عن الجلد)'
        ],
        en: [
          'Treat all household members and close physical contacts simultaneously to avert ping-pong re-infestation',
          'Wash all clothing, linens, and towels used in prior 4 days at >= 60°C (140°F) and hot dryer cycle',
          'Seal non-washable items in airtight plastic bags for 72 hours (mites perish within 48–72h off host)',
          'Vacuum rugs and furniture thoroughly'
        ],
        fr: [
          'Traiter tous les membres de la famille et partenaires simultanément pour éviter les réinfestations croisées',
          'Laver le linge, draps et serviettes à 60°C ou utiliser un spray acaricide textile',
          'Enfermer les objets non lavables dans un sac plastique hermétique pendant au moins 72 heures'
        ]
      },
      environmental: {
        ar: [
          'تنظيف المأوى ومفارش الحيوانات بانتظام',
          'التهوية والتطهير في المدارس ومراكز الرعاية والمستشفيات',
          'التخلص الآمن من قشور الجلد في حالات الجرب المقشر'
        ],
        en: [
          'Regular environmental decontamination in shelter facilities and kennels',
          'Surveillance protocols in long-term care homes and nurseries',
          'Safe hazardous disposal of exfoliated scales in crusted cases'
        ],
        fr: [
          'Nettoyage rigoureux des locaux communautaires et des chenils',
          'Protocoles d\'isolement en cas de gale en milieu hospitalier ou médico-social',
          'Aspiration et assainissement des literies et fauteuils'
        ]
      }
    },
    sampleMicrographs: [
      {
        title: { ar: 'عث ساركوبتيس سكابيي تحت المجهر', en: 'Sarcoptes scabiei Microscopic Mount', fr: 'Sarcoptes scabiei au microscope' },
        stage: 'Adult Female Mite (أنثى عث بالغة)',
        magnification: '100x / 200x Low Power',
        stain: 'Mineral Oil Skin Scraping',
        imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'عث كروي الشكل مميز بأشواك ظهرية مثلثة وأرجل قصيرة ذات ممصات أنبوبية طويلة',
          en: 'Diagnostic rounded mite with dorsal spines and short anterior legs bearing long unjointed stalks',
          fr: 'Acarien globuleux typique avec épines dorsales triangulaires et ventouses antérieures'
        }
      }
    ],
    videos: [
      {
        id: 'scabies-scraping',
        title: { ar: 'كيفية عمل كشاطة الجلد لتشخيص الجرب بالمجهر (VetPath)', en: 'How to Perform a Skin Scraping for Sarcoptic Mange', fr: 'Technique du raclage cutané pour la gale' },
        type: 'microscopy_lab',
        duration: '3:30',
        youtubeId: 'o4OmJQY9LF4',
        sourceName: 'Veterinary Dermatology & Pathology Clinic',
        description: {
          ar: 'فيديو تعليمي يوضح الخطوات الصحيحة لأخذ عينة كشاطة عميقة من حافة أذن الكلب وفحصها مجهرياً',
          en: 'Step-by-step clinical laboratory tutorial demonstrating deep skin scraping technique and identification',
          fr: 'Tutoriel vidéo pas-à-pas de la technique de raclage cutané profond pour mise en évidence du sarcopte'
        }
      }
    ],
    scientificSources: [
      {
        title: 'WHO Fact Sheets: Scabies',
        organization: 'World Health Organization (WHO)',
        year: '2024',
        url: 'https://www.who.int/news-room/fact-sheets/detail/scabies',
        citationType: 'guideline'
      },
      {
        title: 'CDC DPDx - Laboratory Identification of Parasites: Scabies',
        organization: 'Centers for Disease Control and Prevention',
        year: '2024',
        url: 'https://www.cdc.gov/dpdx/scabies/index.html',
        citationType: 'guideline'
      },
      {
        title: 'ESCCAP Guideline 03: Control of Ectoparasites in Dogs and Cats',
        organization: 'European Scientific Counsel Companion Animal Parasites (ESCCAP)',
        year: '2023',
        url: 'https://www.esccap.org/guidelines/gl3/',
        citationType: 'standard'
      }
    ]
  }
];
