import { Parasite } from '../types/parasite';

export const studentReferenceParasites: Parasite[] = [
  {
    id: 'entamoeba-histolytica',
    scientificName: 'Entamoeba histolytica',
    commonNames: {
      ar: 'المتحولة الحالة للنسج (الزحار الأميبي / داء الأميبات)',
      en: 'Entamoeba histolytica (Amoebic Dysentery & Amoebiasis)',
      fr: 'Entamoeba histolytica (Amibiase & Dysenterie Amibienne)'
    },
    type: 'protozoa',
    phylum: 'Amoebozoa',
    class: 'Archamoebea',
    order: 'Mastigamoebida',
    family: 'Entamoebidae',
    genus: 'Entamoeba',
    species: 'E. histolytica',
    zoonoticRisk: 'high',
    hosts: {
      definitive: {
        ar: 'الإنسان (المستودع الرئيسي)، والقرود والكلاب والقطط نادراً',
        en: 'Humans (primary reservoir); occasionally non-human primates, dogs, and cats',
        fr: 'Homme (réservoir principal) ; occasionnellement primates, chiens et chats'
      },
      intermediate: {
        ar: 'لا يوجد عائل وسيط (دورة حياة مباشرة تنتقل بالماء والغذاء الملوث)',
        en: 'None (Direct monoxenous fecal-oral life cycle)',
        fr: 'Aucun (Cycle direct féco-oral par eau et aliments souillés)'
      }
    },
    transmission: {
      ar: 'ابتلاع الأكياس الرباعية النوى الناضجة (Mature quadrinucleate cysts) عبر مياه الشرب أو الخضار الملوثة بالبراز البشري، أو التماس المباشر والذباب المنزلي',
      en: 'Ingestion of mature quadrinucleated cysts via fecal-contaminated water, food, or mechanical vectors (flies/cockroaches)',
      fr: 'Ingestion de kystes matures tétranoyaux via l\'eau ou les crudités contaminées, mains sales'
    },
    morphology: {
      diagnosticStages: [
        'Tetranucleated cyst with rounded chromatoid bars (10–20 µm)',
        'Trophozoite with ingested RBCs (hematophagous) (15–40 µm)'
      ],
      dimensions: '10–20 µm (أكياس) / 15–40 µm (أتروفة)',
      microscopicFeatures: {
        ar: 'الأتروفة (Trophozoite) ذات حركة سريعة بأرجل كاذبة وحيدة، وتتميز بابتلاع كريات الدم الحمراء (Hematophagous - معيار تفريقي حاسم عن E. dispar)، ونواة بصبغ الكرياتين المحيطي المنتظم وحبيبة مركزية؛ الكيس كروي يحتوي على 1 إلى 4 نوى وأجسام شبه صبغية (Chromatoid bodies) ذات حواف ملساء مستديرة كلسيجار',
        en: 'Trophozoite (15–40 µm) shows progressive unidirectional motility and ingested RBCs (pathognomonic vs E. dispar); central punctiform karyosome. Cyst (10–20 µm) contains 1–4 nuclei and blunt cigar-shaped chromatoid bars',
        fr: 'Trophozoïte (15–40 µm) hématophage à noyau à caryosome central régulier ; kyste (10–20 µm) à 1 à 4 noyaux et corps sidérophiles aux extrémités arrondies en cigare'
      },
      stainingAndDiagnosticMethods: {
        ar: 'فحص لطاخة البراز المباشرة مع محلول لوغول اليود (Iodine wet mount)، صبغة ثلاثي الصباغ (Trichrome stain)، ومقايسة الامتصاص المناعي المرتبط بالإنزيم (ELISA) لكشف مستضد الأدهيزين في البراز (Gal/GalNAc lectin)',
        en: 'Direct fecal wet mount with Lugol iodine; permanent iron hematoxylin or trichrome stain; stool fecal antigen ELISA (Gal/GalNAc lectin); PCR to differentiate from E. dispar',
        fr: 'Examen direct au lugol ; coloration trichrome ; détection d\'antigènes fécaux ELISA (Gal/GalNAc) ; PCR'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'ابتلاع الأكياس الناضجة، انحلال الغلاف في اللفائفي وتحرر الأتروفات، التي تستوطن الأمعاء الغليظة. تفرز إنزيمات بروتيوليتية تذيب المخاطية مشكلة قروحاً زجاجية شكل (Flask-shaped ulcers)، وقد تخترق الوريد البابي لتسبب خراجات كبدية صديدية بلون معجون الشوكولاتة (Anchovy sauce abscess)',
        en: 'Ingested mature cysts excyst in terminal ileum releasing trophozoites. Trophozoites colonize large intestine, invade mucosa causing flask-shaped ulcers, and may migrate via portal vein to create hepatic amoebic abscesses (anchovy paste exudate)',
        fr: 'Ingestion de kystes, dékystement iléal en trophozoïtes, colonisation colique avec ulcères en bouton de chemise, diffusion portale vers abcès hépatiques (pus chocolat)'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'ابتلاع الكيس الناضج', en: 'Ingestion of Cyst', fr: 'Ingestion du kyste' },
          hostType: 'definitive',
          isDiagnostic: false,
          isInfective: true,
          description: {
            ar: 'ابتلاع كيس رباعي النوى مقاوم للحموضة المعدية والكلور عبر طعام أو ماء ملوث',
            en: 'Viable cyst resists gastric acidity and passes into small bowel',
            fr: 'Kyste résistant à l\'acidité gastrique ingéré via eau ou nourriture'
          },
          location: { ar: 'الفم والمعدة', en: 'Mouth & Stomach', fr: 'Bouche et estomac' }
        },
        {
          stageNumber: 2,
          title: { ar: 'التكاثر وغزو القولون', en: 'Colonization & Ulceration', fr: 'Invasion colique' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: {
            ar: 'تحول الأتروفات لغزو ظهارة القولون مسببة زحاراً مدمى ومخاطياً وقروحاً غائرة',
            en: 'Trophozoites invade colonic mucosa causing bloody mucus dysentery and flask ulcers',
            fr: 'Multiplication et ulcérations en bouton de chemise avec émission de glaires sanglantes'
          },
          location: { ar: 'الأمعاء الغليظة (الأعور والقولون)', en: 'Cecum & Colon', fr: 'Caecum et côlon' }
        },
        {
          stageNumber: 3,
          title: { ar: 'طرح الأكياس في البراز', en: 'Cyst Excretion', fr: 'Excrétion des kystes' },
          hostType: 'environment',
          isDiagnostic: true,
          isInfective: true,
          description: {
            ar: 'تتكيس الأتروفات وتطرح أكياساً معدية تدوم لأسابيع في البيئة الخارجية الرطبة',
            en: 'Encystment produces infective resistant cysts passed in formed stool',
            fr: 'Enkystement et élimination fécale de kystes infectieux'
          },
          location: { ar: 'البراز والبيئة المحيطة', en: 'Feces & Environment', fr: 'Selles et environnement' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Dogs', 'Cats', 'Non-human primates', 'Pigs'],
      clinicalSigns: {
        ar: ['إسهال مخاطي مدمى نادر في الكلاب والقطط', 'فقدان وزن تدريجي وخمول', 'التهاب القولون التقرحي'],
        en: ['Mucoid bloody diarrhea in dogs and cats (rare)', 'Weight loss and lethargy', 'Ulcerative colitis'],
        fr: ['Diarrhée muco-sanguinolente chez le chien', 'Perte de poids', 'Colite ulcéreuse']
      },
      pathology: {
        ar: 'التهاب الأمعاء التقرحي وتآكل بطانة القولون ونادراً خراجات كبدية',
        en: 'Necrotic ulcerative enteritis and occasional hepatic necrosis',
        fr: 'Entérite nécrosante et abcès hépatiques occasionnels'
      },
      severity: 'moderate'
    },
    humanImpact: {
      isZoonotic: true,
      incubationPeriod: {
        ar: 'من أسبوعين إلى 4 أسابيع (وقد تمتد لعدة أشهر في الحالات الكامنة)',
        en: '2 to 4 weeks (can range from days to years)',
        fr: '2 à 4 semaines (peut varier de quelques jours à plusieurs mois)'
      },
      acuteSigns: {
        ar: ['زحار حاد (براز مخاطي مدمى مع زحير مؤلم Tenesmus)', 'مغص بطني شديد وحمى خفيفة', 'وهن عام وتجفاف'],
        en: ['Severe dysentery with mucus and blood, tenesmus', 'Abdominal cramping and low-grade fever', 'Dehydration and malaise'],
        fr: ['Dysenterie amibienne avec épreintes et ténesme', 'Douleurs abdominales intenses', 'Déshydratation']
      },
      chronicComplications: {
        ar: ['خراج الكبد الأميبي (Amoebic Liver Abscess) مع آلام المراق الأيمن وارتفاع الحرارة', 'ورم أميبي حُبيبي كاذب في القولون (Ameboma)', 'انثقاب القولون والتهاب الصفاق القاتل'],
        en: ['Amoebic liver abscess (anchovy sauce pus, right upper quadrant pain)', 'Ameboma mass lesion', 'Toxic megacolon and perforation'],
        fr: ['Abcès amibien du foie', 'Amoebome mimant un cancer colique', 'Mégacôlon toxique et péritonite']
      },
      highRiskGroups: {
        ar: ['سكان المناطق المدارية ذات الصرف الصحي المتدني', 'المسافرون للمناطق الموبوءة', 'مرضى نقص المناعة وسوء التغذية'],
        en: ['Residents in tropical regions with poor sanitation', 'Travelers to endemic regions', 'Immunocompromised individuals'],
        fr: ['Voyageurs en zone d\'endémie', 'Populations en précarité sanitaire', 'Patients immunodéprimés']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [
          {
            drug: 'Metronidazole',
            dosageGuideline: '25 mg/kg orally every 12 hours for 7–10 days in dogs and cats',
            note: {
              ar: 'مضاد أوالي فعال مع مراقبة علامات السمية العصبية للكلاب',
              en: 'Effective antiprotozoal; monitor for neurotoxicity signs in canines',
              fr: 'Antiprotozoaire efficace ; surveiller la neurotoxicité chez le chien'
            }
          }
        ],
        precautions: {
          ar: 'عزل الحيوانات المصابة وتطهير الصناديق والمحابس بالحرارة أو التجفيف',
          en: 'Isolate affected animals and clean environment with steam or desiccation',
          fr: 'Isolement des animaux et désinfection thermique des litières'
        }
      },
      human: {
        firstLineDrugs: [
          {
            drug: 'Metronidazole + Diloxanide furoate / Paromomycin',
            dosageGuideline: 'Metronidazole 500–750 mg TID for 7–10 days, followed by luminal cysticide (Paromomycin 25–35 mg/kg/day in 3 doses for 7 days)',
            note: {
              ar: 'بروتوكول ثنائي إلزامي: مبيد نسجي للأتروفات في الجدار متبوعاً بمبيد تجويفي للقضاء على الأكياس',
              en: 'Mandatory two-step protocol: tissue amoebicide followed by luminal agent to eradicate cysts',
              fr: 'Protocole séquentiel indispensable : amœbicide tissulaire suivi d\'un amœbicide de contact intraluminal'
            }
          },
          {
            drug: 'Tinidazole',
            dosageGuideline: '2 g orally once daily for 3 days',
            note: {
              ar: 'بديل سريع بجرعة واحدة يومياً مع تحمّل أفضل',
              en: 'Single-daily alternative with superior tolerability',
              fr: 'Alternative bien tolérée en prise quotidienne unique'
            }
          }
        ],
        surgicalIntervention: {
          ar: 'بزل خراج الكبد تحت إرشاد السونار في حال كان كبيراً ومهدداً بالانفجار إلى التامور أو الصفاق',
          en: 'Ultrasound-guided percutaneous drainage of large liver abscesses threatening rupture into pericardium or peritoneum',
          fr: 'Ponction écho-guidée des abcès hépatiques volumineux à risque de rupture'
        },
        notes: {
          ar: 'يجب معالجة حاملي الأكياس عديمي الأعراض لمنع انتقال العدوى في المجتمع',
          en: 'Asymptomatic cyst passers must be treated with luminal agents to eliminate transmission reservoir',
          fr: 'Traitement systématique des porteurs sains de kystes par amœbicide de contact'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: ['منع الحيوانات من شرب المياه الراكدة أو تلوث أوعية الطعام بالبراز'],
        en: ['Prevent animals from consuming stagnant water or fecal contamination'],
        fr: ['Empêcher la consommation d\'eaux stagnantes et sécuriser les abreuvoirs']
      },
      human: {
        ar: ['غلي مياه الشرب أو ترشيحها بمرشحات دقيقة (الكلور وحده بجرعات الشبكات لا يقتل الأكياس بالكامل)', 'غسل الخضار الورقية والفواكه جيداً بالماء النظيف وتقشيرها'],
        en: ['Boil drinking water or use submicron filtration (standard municipal chlorination alone is insufficient to destroy cysts)', 'Wash raw leafy vegetables thoroughly and peel fresh fruits'],
        fr: ['Faire bouillir l\'eau ou filtration submicronique (le chlore standard ne tue pas les kystes)', 'Laver soigneusement et peler les crudités et fruits']
      },
      environmental: {
        ar: ['تحسين شبكات الصرف الصحي ومنع استخدام مياه المجاري في ري المزروعات'],
        en: ['Improve sewage disposal systems and forbid raw wastewater irrigation in agriculture'],
        fr: ['Amélioration de l\'assainissement et interdiction d\'eaux usées en maraîchage']
      }
    },
    sampleMicrographs: [
      {
        title: {
          ar: 'كيس المتحولة الحالة للنسج رباعي النوى',
          en: 'Entamoeba histolytica mature cyst',
          fr: 'Kyste mûr tétranoyauté d\'Entamoeba histolytica'
        },
        stage: 'Mature tetranucleated cyst',
        magnification: '1000x Oil Immersion',
        stain: 'Trichrome stain',
        imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'شريحة مجهرية تظهر كروية الكيس مع النواة المميزة وجسم صبغي مستدير الطرفين',
          en: 'Micrograph illustrating spherical cyst with classic karyosomes and rounded chromatoid body',
          fr: 'Kyste sphérique avec caryosome central et corps sidérophile caractéristique'
        }
      }
    ],
    videos: [
      {
        id: 'entamoeba-lifecycle-vid',
        title: {
          ar: 'دورة حياة المتحولة الحالة للنسج والزحار الأميبي',
          en: 'Life Cycle of Entamoeba histolytica',
          fr: 'Cycle évolutif d\'Entamoeba histolytica'
        },
        type: 'life_cycle_animation',
        duration: '3:45',
        youtubeId: '_5g8EfPdVdE',
        sourceName: 'Medical Parasitology Education',
        description: {
          ar: 'شرح تفصيلي لدورة تكاثر الأميبا، انحلال الأكياس وغزو جدار القولون مع تشكل الخراجات',
          en: 'Comprehensive animated review of amoebic invasion, intestinal ulceration, and liver pathology',
          fr: 'Vidéo scientifique détaillant le dékystement et l\'invasion tissulaire colique'
        }
      }
    ],
    scientificSources: [
      {
        title: 'CDC DPDx - Amebiasis (Entamoeba histolytica / dispar Laboratory Identification)',
        organization: 'Centers for Disease Control and Prevention (CDC)',
        year: '2023',
        url: 'https://www.cdc.gov/dpdx/amebiasis/index.html',
        citationType: 'guideline'
      },
      {
        title: 'WHO Model Prescribing Information: Drugs Used in Parasitic Diseases (Amoebiasis Guidelines)',
        organization: 'World Health Organization (WHO)',
        year: '2022',
        url: 'https://www.who.int/publications/i/item/9241544820',
        citationType: 'standard'
      },
      {
        title: 'Amebiasis: A Review of Pathogenesis, Diagnosis, and Management',
        organization: 'The Lancet Infectious Diseases / PubMed PMC',
        year: '2021',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30826270/',
        citationType: 'peer_reviewed'
      }
    ]
  },
  {
    id: 'cryptosporidium-parvum',
    scientificName: 'Cryptosporidium parvum / Cryptosporidium hominis',
    commonNames: {
      ar: 'خفية الأبواغ (داء خفيات الأبواغ / إسهال العجول المائي)',
      en: 'Cryptosporidium (Cryptosporidiosis & Neonatal Calf Diarrhea)',
      fr: 'Cryptosporidie (Cryptosporidiose & Diarrhée Néonatale du Veau)'
    },
    type: 'protozoa',
    phylum: 'Apicomplexa',
    class: 'Conoidasida',
    order: 'Eucoccidiorida',
    family: 'Cryptosporidiidae',
    genus: 'Cryptosporidium',
    species: 'C. parvum / C. hominis',
    zoonoticRisk: 'very_high',
    hosts: {
      definitive: {
        ar: 'الأبقار (خاصة العجول الرضيعة 1–4 أسابيع)، الأغنام، الماعز، والإنسان',
        en: 'Cattle (especially neonatal calves 1–4 weeks), sheep, goats, humans',
        fr: 'Bovins (surtout veaux nouveau-nés 1–4 semaines), ovins, caprins, Homme'
      },
      intermediate: {
        ar: 'لا يوجد (طفيلي أحادي العائل يكمل التكاثر الجنسي واللاجنسي في ظهارة الأمعاء)',
        en: 'None (monoxenous intracellular extracytoplasmic parasite)',
        fr: 'Aucun (cycle direct intracellulaire mais extracytoplasmique)'
      }
    },
    transmission: {
      ar: 'ابتلاع الأكياس البيضية البوغية السميكة الجدار (Thick-walled oocysts) المنقولة بالماء، الحليب غير المبستر، أو الملامسة المباشرة للعجول المصابة',
      en: 'Fecal-oral ingestion of fully sporulated thick-walled oocysts from water supplies, unpasteurized milk, or direct calf contact',
      fr: 'Ingestion fécale-orale d\'oocystes sporulés résistants via l\'eau de boisson, lait cru ou contact direct avec les veaux'
    },
    morphology: {
      diagnosticStages: [
        'Acid-fast spherical sporulated oocyst with 4 sporozoites (4–6 µm)'
      ],
      dimensions: '4–6 µm (أكياس بيضية كروية صغيرة جداً)',
      microscopicFeatures: {
        ar: 'أكياس بيضية كروية صغيرة جداً (4–6 ميكرومتر)، تُصبغ باللون الوردي/الأحمر الفاقع على خلفية زرقاء أو خضراء بطريقة تلوين تسيل-نلسن المعدلة (Modified Ziehl-Neelsen / Kinyoun acid-fast). تحتوي على 4 أبواغ هلالية الشكل وبدون سبوروسيستات',
        en: 'Tiny spherical oocysts (4–6 µm) staining bright pink-red on blue/green background with Modified Kinyoun acid-fast stain. Contain 4 naked curved sporozoites and residual body',
        fr: 'Très petits oocystes ronds (4–6 µm) acido-alcoolo-résistants (rose-fuchsia sur fond bleu au Ziehl-Neelsen modifié) contenant 4 sporozoïtes nus'
      },
      stainingAndDiagnosticMethods: {
        ar: 'صبغة تسيل-نلسن المعدلة (Modified Kinyoun Acid-Fast)، مجهر الفلورة المناعية (Direct Immunofluorescence Assay - DFA Gold Standard)، واختبارات الكروماتوغرافيا السريعة (Lateral Flow Rapid Test)',
        en: 'Modified Ziehl-Neelsen / Kinyoun Acid-Fast stain; Direct Immunofluorescence Assay (DFA - Gold Standard); Cryptosporidium fecal lateral-flow strip antigen',
        fr: 'Coloration de Kinyoun / Ziehl-Neelsen modifié ; Immunofluorescence directe (DFA - référence) ; tests rapides immunochromatographiques'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'ابتلاع الكيس البيضي، يخرج منه 4 أبواغ تلتصق بالخلايا المعوية الدقيقة محاطة بغشاء خلوي ولكن خارج السيتوبلازم (Intracellular extracytoplasmic). تمر بأطوار شيزونية لاجنسية ثم أطوار عرسية جنسية لتشكل نوعين من الأكياس: سميكة الجدار تطرح في البراز لتنقل العدوى، ورقيقة الجدار تفجر ذاتياً مسببة عدوى ذاتية مستمرة (Autoinfection)',
        en: 'Ingested oocyst excysts 4 sporozoites that attach to enterocytes inside parasitophorous vacuoles in an extracytoplasmic niche. Asexual merogony and sexual gametogony produce thick-walled oocysts (shed in feces) and thin-walled oocysts (causing persistent autoinfection)',
        fr: 'Excystement de 4 sporozoïtes se logeant en position intracellulaire extracytoplasmique. Schizogonie et gamétogonie générant des oocystes à paroi épaisse (excrétion) et mince (autoinfestation persistante)'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'ابتلاع الأكياس البيضية', en: 'Oocyst Ingestion', fr: 'Ingestion oocystaire' },
          hostType: 'definitive',
          isDiagnostic: false,
          isInfective: true,
          description: { ar: 'ابتلاع كيس بيضي شديد المقاومة للمطهرات والكلورين', en: 'Ingestion of chlorine-resistant oocyst from drinking water or farm animals', fr: 'Ingestion d\'oocystes chlore-résistants' },
          location: { ar: 'الجهاز الهضمي', en: 'Digestive Tract', fr: 'Tube digestif' }
        },
        {
          stageNumber: 2,
          title: { ar: 'التكاثر في الحافة الفرشاتية المعوية', en: 'Enterocyte Colonization', fr: 'Colonisation entérocytaire' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'ضمور زغابات الأمعاء الدقيقة وفقدان مساحة الامتصاص مسبباً إسهالاً إفرازياً حاداً', en: 'Villous atrophy and crypt hyperplasia causing severe secretory watery diarrhea', fr: 'Atrophie villositaire et diarrhée sécrétoire profuse' },
          location: { ar: 'اللفائفي والأمعاء الدقيقة', en: 'Ileum & Small Bowel', fr: 'Iléon et jéjunum' }
        },
        {
          stageNumber: 3,
          title: { ar: 'طرح الأبواغ في البراز والبيئة', en: 'Shedding in Feces', fr: 'Excrétion fécale' },
          hostType: 'environment',
          isDiagnostic: true,
          isInfective: true,
          description: { ar: 'طرح ملايين الأكياس البيضية المعدية فوراً دون الحاجة لفترة نضج خارج العائل', en: 'Excretion of millions of immediately infective oocysts ready to contaminate water', fr: 'Élimination d\'oocystes immédiatement infectieux' },
          location: { ar: 'براز العجول ومصادر المياه', en: 'Calf Feces & Water', fr: 'Fèces et eau' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Calves (1-4 weeks)', 'Lambs', 'Goat kids', 'Foals', 'Piglets'],
      clinicalSigns: {
        ar: ['إسهال مائي أصفر فاقع ذو رائحة حامضة في العجول حديثة الولادة', 'تجفاف سريع وانغلاق العينين وانخفاض درجة الحرارة', 'فقدان الشهية وارتفاع نسبة النفوق في الرضع'],
        en: ['Profuse watery yellowish sour diarrhea in newborn calves (1–3 weeks old)', 'Rapid dehydration, sunken eyes, hypothermia', 'Anorexia, depression, high neonatal mortality if secondary infections occur'],
        fr: ['Diarrhée aqueuse jaune pâle profuse chez le veau de 1 à 3 semaines', 'Déshydratation rapide, énophtalmie, hypothermie', 'Anorexie et mortalité néonatale']
      },
      pathology: {
        ar: 'ضمور شديد في الزغابات المعوية والتهاب الأمعاء النزلي وخلل الامتصاص المائي الشديد',
        en: 'Severe villous blunting, enterocyte detachment, malabsorptive and secretory enteritis',
        fr: 'Atrophie villositaire sévère et entérite catarrhale malabsorptive'
      },
      severity: 'fatal'
    },
    humanImpact: {
      isZoonotic: true,
      incubationPeriod: {
        ar: 'من 3 إلى 10 أيام (بمتوسط 7 أيام)',
        en: '3 to 10 days (average 7 days)',
        fr: '3 à 10 jours (moyenne 7 jours)'
      },
      acuteSigns: {
        ar: ['إسهال مائي غزير متكرر بدون دم', 'مغص بطني وغثيان وقيء', 'حمى خفيفة وفقدان سوائل متسارع'],
        en: ['Profuse watery cholera-like diarrhea without blood', 'Severe abdominal cramps, nausea, vomiting', 'Low-grade fever and rapid dehydration'],
        fr: ['Diarrhée aqueuse très abondante non sanglante', 'Crampes abdominales, nausées, vomissements', 'Déshydratation rapide']
      },
      chronicComplications: {
        ar: ['إسهال مزمن مستمر لعدة أشهر مهدد للحياة في مرضى الإيدز ونقص المناعة', 'التهاب الأقنية الصفراوية المصلب الطفيلي (Cryptosporidial Cholangitis)', 'سوء تغذية وهزال شديد (Wasting syndrome)'],
        en: ['Chronic life-threatening intractable diarrhea in immunocompromised / HIV patients', 'Acalculous cholecystitis and sclerosing cholangitis', 'Severe malabsorption and wasting syndrome'],
        fr: ['Diarrhée chronique réfractaire mortelle chez l\'immunodéprimé (VIH)', 'Cholangite sclérosante alithiasique', 'Syndrome de dépérissement et cachexie']
      },
      highRiskGroups: {
        ar: ['الأطباء البيطريون وعمال مزارع الأبقار ورعاة العجول', 'الأطفال دون سن 5 سنوات في دور الحضانة', 'مرضى نقص المناعة ومرضى السرطان الخاضعون للعلاج الكيميائي'],
        en: ['Veterinarians, dairy farm workers, and calf handlers', 'Children under 5 years in daycare centers', 'Immunocompromised and HIV patients (CD4 < 100/µL)'],
        fr: ['Vétérinaires, éleveurs de veaux', 'Enfants en crèche', 'Patients immunodéprimés sévères (CD4 < 100)']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [
          {
            drug: 'Halofuginone lactate',
            dosageGuideline: '100 µg/kg orally once daily for 7 consecutive days in calves starting at 24–48 hours of life or at onset of diarrhea',
            note: {
              ar: 'يجب إعطاؤه بعد وجبة الحليب لمنع التسمم، ويقلل طرح الأبواغ',
              en: 'Administer strictly after milk feeding to prevent toxicity; reduces oocyst excretion',
              fr: 'Administrer obligatoirement après le repas lacté ; réduit l\'excrétion oocystaire'
            }
          },
          {
            drug: 'Paromomycin sulfate',
            dosageGuideline: '100–150 mg/kg orally daily for 5–7 days',
            note: {
              ar: 'مضاد أوالي فعال بيطرياً تحت إشراف الطبيب مع معالجة الجفاف بالشوارد',
              en: 'Oral aminoglycoside; companion therapy with electrolyte rehydration solutions',
              fr: 'Aminoside oral associé à une réhydratation électrolytique intensive'
            }
          }
        ],
        precautions: {
          ar: 'الشوارد الوريدية أو الفموية هي حجر الزاوية لمنع الوفاة الناتجة عن الصدمة التجفافية',
          en: 'Aggressive fluid and electrolyte therapy is paramount to prevent hypovolemic shock',
          fr: 'Réhydratation immédiate essentielle contre le choc hypovolémique'
        }
      },
      human: {
        firstLineDrugs: [
          {
            drug: 'Nitazoxanide',
            dosageGuideline: 'Adults: 500 mg orally BID with food for 3 days; Children 1–3 yrs: 100 mg BID; 4–11 yrs: 200 mg BID for 3 days',
            note: {
              ar: 'الدواء الوحيد المعتمد من FDA لعلاج خفيات الأبواغ في الأصحاء مناعياً',
              en: 'The only FDA-approved drug for cryptosporidiosis in immunocompetent patients',
              fr: 'Seul médicament validé par la FDA chez le sujet immunocompétent'
            }
          }
        ],
        notes: {
          ar: 'في مرضى الإيدز، استعادة المناعة عبر مضادات الفيروسات القهقرية (ART) لرفع خلايا CD4 هي العلاج الحاسم والوحيد للشفاء',
          en: 'In HIV/AIDS patients, immune reconstitution via antiretroviral therapy (ART) is the definitive cure',
          fr: 'Chez le patient séropositif, la restauration immunitaire par trithérapie antirétrovirale est la clé'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: ['عزل العجول المصابة فوراً في حظائر فردية جافة ومعرضة للشمس', 'تطهير حظائر الولادة باستخدام الحرارة البخارية أو المطهرات المعتمدة على الأمين/بيروكسيد الهيدروجين'],
        en: ['Immediately isolate diarrheic calves in dry, clean, individual pens', 'Disinfect calving facilities using steam cleaning (>60°C) or specialized amine/hydrogen peroxide compounds'],
        fr: ['Isoler immédiatement les veaux diarrhéiques en logettes individuelles', 'Désinfection thermique à la vapeur (>60°C) ou au peroxyde d\'hydrogène']
      },
      human: {
        ar: ['ارتداء القفازات وغسل اليدين بعد التعامل مع العجول والمواليد في المزارع', 'استخدام أجهزة ترشيح المياه المنزلية بقطر مسام أقل من 1 ميكرومتر لتصفية الأكياس البيضية'],
        en: ['Wear protective gloves and perform strict hand hygiene after touching calves or farm animals', 'Use certified submicron water filters (pore size < 1 µm) to remove resistant oocysts'],
        fr: ['Port de gants et lavage rigoureux des mains au contact des veaux', 'Filtration de l\'eau à moins de 1 micron']
      },
      environmental: {
        ar: ['حماية خزانات ومحطات مياه الشرب من جريان مياه المزارع ومخلفات الثروة الحيوانية'],
        en: ['Protect watersheds and drinking water reservoirs from agricultural livestock runoff'],
        fr: ['Protection des captages d\'eau contre les ruissellements d\'élevages']
      }
    },
    sampleMicrographs: [
      {
        title: {
          ar: 'أكياس خفية الأبواغ ملونة بصبغة تسيل-نلسن المعدلة',
          en: 'Cryptosporidium oocysts (Modified Kinyoun stain)',
          fr: 'Oocystes de Cryptosporidium au Ziehl-Neelsen modifié'
        },
        stage: 'Sporulated oocysts (4–6 µm)',
        magnification: '1000x Oil Immersion',
        stain: 'Modified Kinyoun Acid-Fast',
        imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'أكياس بيضية كروية صغيرة حمراء فاقعة على خلفية خضراء داكنة',
          en: 'Spherical bright red-pink acid-fast oocysts against a greenish-blue background',
          fr: 'Petits oocystes ronds rose vif acido-résistants sur fond vert'
        }
      }
    ],
    videos: [],
    scientificSources: [
      {
        title: 'CDC DPDx - Cryptosporidiosis Laboratory Identification Protocols',
        organization: 'Centers for Disease Control and Prevention (CDC)',
        year: '2023',
        url: 'https://www.cdc.gov/dpdx/cryptosporidiosis/index.html',
        citationType: 'guideline'
      },
      {
        title: 'WOAH Terrestrial Manual: Cryptosporidiosis in Livestock and Public Health',
        organization: 'World Organisation for Animal Health (WOAH)',
        year: '2022',
        url: 'https://www.woah.org/en/what-we-do/standards/standards-codes-and-manuals/',
        citationType: 'standard'
      },
      {
        title: 'WHO Guidelines for Drinking-Water Quality: Cryptosporidium Risk Assessment',
        organization: 'World Health Organization (WHO)',
        year: '2022',
        url: 'https://www.who.int/publications/i/item/9789240045064',
        citationType: 'guideline'
      }
    ]
  },
  {
    id: 'plasmodium-falciparum',
    scientificName: 'Plasmodium falciparum / Plasmodium vivax',
    commonNames: {
      ar: 'المتصورة المنجلية / النشيطة (طفيلي الملاريا / حمى المستنقعات)',
      en: 'Plasmodium falciparum (Malignant Tertian Malaria & Cerebral Malaria)',
      fr: 'Plasmodium falciparum (Paludisme Malin & Accès Pernicieux)'
    },
    type: 'protozoa',
    phylum: 'Apicomplexa',
    class: 'Aconoidasida',
    order: 'Haemosporida',
    family: 'Plasmodiidae',
    genus: 'Plasmodium',
    species: 'P. falciparum / P. vivax',
    zoonoticRisk: 'none',
    hosts: {
      definitive: {
        ar: 'أنثى بعوضة الأنوفيلة (Anopheles mosquito) - يحدث فيها التكاثر الجنسي وتكوين الأبواغ (Sporogony)',
        en: 'Female Anopheles mosquito (undergoes sexual reproduction and sporogony)',
        fr: 'Femelle du moustique Anophèle (siège de la reproduction sexuée/sporogonie)'
      },
      intermediate: {
        ar: 'الإنسان - يحدث فيه التكاثر اللاجنسي في خلايا الكبد وكريات الدم الحمراء (Schizogony)',
        en: 'Humans (undergoes asexual schizogony in hepatocytes and erythrocytes)',
        fr: 'Homme (siège de la schizogonie exo- et endo-érythrocytaire)'
      }
    },
    transmission: {
      ar: 'لدغة أنثى بعوضة الأنوفيلة الحاملة للأبواغ (Sporozoites) أثناء التغذية الدموية ليلاً، ونادراً عبر نقل الدم الملوث أو الإبر المشتركة أو عمودياً عبر المشيمة (Congenital malaria)',
      en: 'Nocturnal bite of infected female Anopheles mosquito inoculating sporozoites; rarely blood transfusion, organ transplant, or congenital transplacental transmission',
      fr: 'Piqûre nocturne d\'Anophèle femelle infestée injectant des sporozoïtes ; transfusion ou transmission congénitale'
    },
    morphology: {
      diagnosticStages: [
        'Delicate ring-form trophozoite (1.5–2 µm)',
        'Crescent / banana-shaped gametocyte in P. falciparum (9–14 µm)',
        'Schizont containing 8–24 merozoites'
      ],
      dimensions: '1.5–2 µm (حلقات) / 9–14 µm (أعراس هلالية)',
      microscopicFeatures: {
        ar: 'في لطاخة الدم الرقيقة الملونة بصبغة جيمسا (Giemsa): أطوار حلقية رقيقة وناعمة (Ring forms / Headphone appearance)، إصابة متعددة لنفس الكرية الحمراء، نقط مورير (Maurer\'s clefts)، وأعراس هلالية أو موذية الشكل (Banana-shaped gametocytes) مميزة وحصرية للمتصورة المنجلية؛ الكريات الحمراء المصابة لا تكبر في الحجم',
        en: 'Giemsa-stained thin blood film: delicate tiny ring forms with 1 or 2 chromatin dots (headphone shape); multiple rings per RBC, applique forms; pathognomonic banana- or crescent-shaped gametocytes; normal-sized RBCs (unlike P. vivax which enlarges RBCs)',
        fr: 'Frottis mince au Giemsa : anneaux fins délicats (aspect en écouteur), polyparasitisme érythrocytaire, hématies non déformées ; gamétocytes typiques falciformes en banane ou croissant'
      },
      stainingAndDiagnosticMethods: {
        ar: 'فحص لطاخة الدم السميكة للكشف السريع (Thick smear Gold Standard) واللطاخة الرقيقة للتفريق النوعي (Thin smear)، اختبارات التشخيص السريع للمستضدات (RDT - HRP2/pLDH)، واختبار PCR',
        en: 'Thick blood smear for sensitive detection (Gold Standard); thin blood smear for species identification; Rapid Diagnostic Tests (RDT targeting HRP-2 and pLDH antigens); Real-time PCR',
        fr: 'Goutte épaisse (sensibilité maximale) et frottis mince (identification d\'espèce) colorés au Giemsa ; Tests de Diagnostic Rapide (TDR antigéniques HRP2/LDH) ; PCR'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'يحقن البعوض الأبواغ (Sporozoites) في الدم، تهاجر فوراً إلى الكبد وتغزو خلاياه (Exoerythrocytic schizogony) لمدة 7–14 يوماً محررة آلاف الميروزويتات إلى الدم. تغزو الميروزويتات كريات الدم الحمراء (Erythrocytic cycle)، وتتكاثر مسببة تمزق الكريات كل 48 ساعة وتوليد نوبات الحمى الدورية والنفضان الشديد',
        en: 'Mosquito inoculates sporozoites into skin; they invade hepatocytes within minutes, multiplying into thousands of merozoites (exoerythrocytic schizogony). Merozoites rupture liver cells and invade RBCs, undergoing cyclic asexual multiplication every 48 hours causing paroxysmal fevers, chills, and rigors',
        fr: 'Injection de sporozoïtes, invasion hépatique hâtive (schizogonie pré-érythrocytaire), libération de mérozoïtes envahissant les hématies avec cycles lytiques de 48h (accès fébriles périodiques)'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'لدغة البعوض وحقن الأبواغ', en: 'Sporozoite Inoculation', fr: 'Inoculation des sporozoïtes' },
          hostType: 'vector',
          isDiagnostic: false,
          isInfective: true,
          description: { ar: 'حقن الأبواغ الحركية في الأوعية الدموية الشعرية أثناء امتصاص الدم', en: 'Inoculation of motile sporozoites during mosquito blood meal', fr: 'Injection salivaire de sporozoïtes mobiles' },
          location: { ar: 'الجلد والأوعية الدموية', en: 'Skin & Capillaries', fr: 'Peau et vaisseaux' }
        },
        {
          stageNumber: 2,
          title: { ar: 'المرحلة الكبدية الكامنة', en: 'Hepatic Schizogony', fr: 'Schizogonie intrahépatique' },
          hostType: 'intermediate',
          isDiagnostic: false,
          isInfective: false,
          description: { ar: 'تكاثر هائل صامت داخل خلايا الكبد وتكوين الميروزويتات (بدون هيبنوزويتات كامنة في P. falciparum)', en: 'Massive silent multiplication in hepatocytes producing 30,000+ merozoites per cell', fr: 'Multiplication intense intrahépatocytaire' },
          location: { ar: 'خلايا الكبد (Hepatocytes)', en: 'Liver Parenchyma', fr: 'Parenchyme hépatique' }
        },
        {
          stageNumber: 3,
          title: { ar: 'المرحلة الدموية وتمزق الكريات', en: 'Erythrocytic Cycle', fr: 'Cycle érythrocytaire' },
          hostType: 'intermediate',
          isDiagnostic: true,
          isInfective: true,
          description: { ar: 'غزو الكريات وتكوين الحلقات والشيزونات ثم تمزقها مطلقة سموم الهيموزوين المسببة للحرارة', en: 'Invasion of RBCs, development into rings and schizonts, synchronized rupture causing fever spike', fr: 'Invasion érythrocytaire, rupture synchrone et accès fébrile' },
          location: { ar: 'الدوران الدموي العام', en: 'Blood Circulation', fr: 'Circulation sanguine' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Humans only (Plasmodium falciparum is strictly human; primates harbor related species)'],
      clinicalSigns: {
        ar: ['لا يصيب الحيوانات الأليفة المنزلية كالأبقار والكلاب (نوع حصري بالإنسان)'],
        en: ['Non-infectious to domestic livestock and pets (strictly human host parasite)'],
        fr: ['Non pathogène pour les animaux domestiques (parasite spécifique de l\'Homme)']
      },
      pathology: {
        ar: 'لا ينطبق بيطرياً على الحيوانات الحقلية',
        en: 'Not applicable in domestic veterinary practice',
        fr: 'Non applicable en médecine vétérinaire courante'
      },
      severity: 'mild'
    },
    humanImpact: {
      isZoonotic: false,
      incubationPeriod: {
        ar: 'من 9 إلى 14 يوماً (وقد يمتد لعدة أسابيع إذا كان المريض قد تناول وقاية جزئية)',
        en: '9 to 14 days for P. falciparum (can be prolonged by partial chemoprophylaxis)',
        fr: '9 à 14 jours pour P. falciparum'
      },
      acuteSigns: {
        ar: ['نوبات الملاريا النمطية (Triad): قشعريرة ونفضان شديد، ثم حمى حارقة مفاجئة (40°C)، ثم تعرق غزير وانخفاض الحرارة', 'صداع حاد نابض وآلام عضلية ومفصلية', 'غثيان، قيء، وتضخم الطحال الحاد المؤلم'],
        en: ['Classic paroxysm triad: severe chills/rigors (cold stage), burning high fever 40°C (hot stage), drenching sweats (sweat stage)', 'Severe throbbing headache, myalgia, arthralgia', 'Splenomegaly, acute hemolytic anemia, jaundice'],
        fr: ['Triade d\'accès palustre : frissons intenses, chaleur fébrile brutale (40°C), sueurs profuses', 'Céphalées en casque, myalgies diffuses', 'Splénomégalie, subictère hémolytique']
      },
      chronicComplications: {
        ar: ['الملاريا الدماغية (Cerebral Malaria): غيبوبة وتشنجات واعتلال دماغي ناتج عن انسداد الشعيرات الدماغية', 'فقر دم انحلالي شديد مهدد للحياة وانحباس الكريات', 'الفشل الكلوي الحاد وبول الماء الأسود (Blackwater fever)', 'وذمة الرئة غير القلبية ومتلازمة الضائقة التنفسية الحادة (ARDS)'],
        en: ['Cerebral malaria: sequestration of parasitized RBCs in brain capillaries causing coma and seizures', 'Severe life-threatening hemolytic anemia', 'Acute kidney injury and blackwater fever (massive hemoglobinuria)', 'Acute Respiratory Distress Syndrome (ARDS) and metabolic acidosis'],
        fr: ['Paludisme cérébral (neuropaludisme) avec coma et convulsions par séquestration microvasculaire', 'Anémie hémolytique sévère', 'Fièvre bilieuse hémoglobinurique et insuffisance rénale aiguë', 'Acidose métabolique et détresse respiratoire']
      },
      highRiskGroups: {
        ar: ['الأطفال دون سن 5 سنوات في إفريقيا جنوب الصحراء', 'النساء الحوامل (خطر الإجهاض وولادة أجنة ناقصة الوزن)', 'المسافرون غير الممنعين القادمون من مناطق خالية من الملاريا'],
        en: ['Children under 5 years of age in Sub-Saharan Africa', 'Pregnant women (placental sequestration causing low birthweight/abortion)', 'Non-immune travelers from non-endemic countries'],
        fr: ['Enfants de moins de 5 ans en Afrique subsaharienne', 'Femmes enceintes (séquestration placentaire)', 'Voyageurs non immuns']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [],
        precautions: {
          ar: 'الملاريا البشرية لا تصيب الكلاب والقطط، بينما تصيب طفيليات شبيهة (البابيزيا) وتُعالج بـ Imidocarb',
          en: 'Human malaria does not infect dogs/cats; veterinary piroplasms (Babesia) are treated with Imidocarb',
          fr: 'Pas de traitement vétérinaire pour P. falciparum ; Babesia chez l\'animal est traitée par l\'imidocarbe'
        }
      },
      human: {
        firstLineDrugs: [
          {
            drug: 'Artemisinin-based Combination Therapy (ACT): Artemether-Lumefantrine / Artesunate-Amodiaquine',
            dosageGuideline: 'Artemether 20 mg + Lumefantrine 120 mg: 4 tablets orally at hours 0, 8, 24, 36, 48, and 60 (total 6 doses) with fatty meal or milk',
            note: {
              ar: 'الخط الأول العالمي الموصى به من منظمة الصحة العالمية للملاريا المنجلية غير المعقدة',
              en: 'WHO gold standard first-line treatment for uncomplicated falciparum malaria worldwide',
              fr: 'Combinaison thérapeutique à base d\'artémisinine (CTA) recommandée en première intention'
            }
          },
          {
            drug: 'Intravenous Artesunate',
            dosageGuideline: '2.4 mg/kg IV at 0, 12, and 24 hours, then once daily until oral therapy can be tolerated',
            note: {
              ar: 'العلاج المنقذ للحياة للملاريا الشديدة والمعقدة والملاريا الدماغية',
              en: 'Life-saving therapy for severe / complicated / cerebral malaria',
              fr: 'Traitement d\'urgence de référence pour le paludisme grave et neuropaludisme'
            }
          }
        ],
        notes: {
          ar: 'يُمنع استخدام أحادي العلاج بالأرتيميسينين تفادياً لتطور المقاومة الدوائية',
          en: 'Artemisinin monotherapies are strictly banned by WHO to prevent emergence of resistance',
          fr: 'Monothérapies d\'artémisinine proscrites pour préserver l\'efficacité'
        }
      }
    },
    prevention: {
      veterinary: { ar: [], en: [], fr: [] },
      human: {
        ar: ['النوم تحت الناموسيات المعالجة بالمبيدات الحشرية طويلة الأمد (ITNs / LLINs)', 'تناول الأدوية الوقائية الكيميائية للمسافرين (Atovaquone-Proguanil أو Doxycycline)', 'التطعيم بلقاحات الملاريا المعتمدة حديثاً من منظمة الصحة العالمية (RTS,S / R21/Matrix-M) للأطفال في المناطق الموبوءة'],
        en: ['Sleep under long-lasting insecticidal mosquito bed nets (LLINs)', 'Chemoprophylaxis for travelers to endemic regions (Atovaquone-Proguanil or Doxycycline)', 'Administration of WHO-approved malaria vaccines (RTS,S and R21/Matrix-M) to children in high-transmission zones'],
        fr: ['Dormir sous moustiquaire imprégnée d\'insecticide à longue durée d\'action (MILD)', 'Chimioprophylaxie chez le voyageur (Atovaquone-Proguanil ou Doxycycline)', 'Vaccination infantile par RTS,S ou R21/Matrix-M en zone d\'endémie']
      },
      environmental: {
        ar: ['الرش الثمالي للمبيدات الحشرية داخل المنازل (IRS) وردم المستنقعات والمياه الراكدة'],
        en: ['Indoor Residual Spraying (IRS) of insecticides and larviciding of standing water breeding sites'],
        fr: ['Pulvérisation intradomiciliaire d\'insecticides (PID) et assèchement des gîtes larvaires']
      }
    },
    sampleMicrographs: [
      {
        title: {
          ar: 'أطوار حلقية للمتصورة المنجلية في لطاخة دم رقيقة',
          en: 'Plasmodium falciparum ring-form trophozoites',
          fr: 'Anneaux trophozoïtes de Plasmodium falciparum'
        },
        stage: 'Erythrocytic ring forms',
        magnification: '1000x Oil Immersion',
        stain: 'Giemsa stain',
        imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'حلقات ناعمة دقيقة تشبه سماعة الرأس داخل كريات دم حمراء غير متضخمة',
          en: 'Delicate fine rings with dual chromatin dots in non-enlarged red blood cells',
          fr: 'Frottis montrant les trophozoïtes en anneau délicat à deux grains de chromatine'
        }
      }
    ],
    videos: [
      {
        id: 'malaria-lifecycle-hhmi',
        title: {
          ar: 'دورة حياة طفيلي الملاريا والبعوض (HHMI BioInteractive)',
          en: 'Malaria Life Cycle Animation: Mosquito & Human Host',
          fr: 'Animation du cycle du paludisme (HHMI)'
        },
        type: 'life_cycle_animation',
        duration: '4:20',
        youtubeId: '0uyE046It3o',
        sourceName: 'HHMI BioInteractive / WHO',
        description: {
          ar: 'شرح عالي الدقة يوضح دورة التكاثر الجنسي في البعوض وانتقال الأبواغ للكبد والدم عند الإنسان',
          en: 'World-renowned medical animation detailing the sporogonic and erythrocytic stages',
          fr: 'Animation scientifique de référence détaillant la phase moustique et l\'invasion érythrocytaire'
        }
      }
    ],
    scientificSources: [
      {
        title: 'WHO Guidelines for Malaria (Consolidated Global Guidance for Treatment & Prevention)',
        organization: 'World Health Organization (WHO)',
        year: '2023',
        url: 'https://www.who.int/publications/i/item/guidelines-for-malaria',
        citationType: 'guideline'
      },
      {
        title: 'CDC DPDx - Malaria Laboratory Identification and Species Differentiation',
        organization: 'Centers for Disease Control and Prevention (CDC)',
        year: '2023',
        url: 'https://www.cdc.gov/dpdx/malaria/index.html',
        citationType: 'guideline'
      },
      {
        title: 'Management of Severe Malaria: A Practical Guide',
        organization: 'The Lancet Infectious Diseases / WHO',
        year: '2022',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35472304/',
        citationType: 'peer_reviewed'
      }
    ]
  },
  {
    id: 'schistosoma-mansoni',
    scientificName: 'Schistosoma mansoni / Schistosoma haematobium',
    commonNames: {
      ar: 'المنشقة المعوية والبولية (داء البلهارسيا / حمى القواقع)',
      en: 'Schistosoma mansoni & haematobium (Schistosomiasis & Bilharzia)',
      fr: 'Schistosome (Schistosomiase & Bilharziose Uro-génitale / Intestinale)'
    },
    type: 'trematode',
    phylum: 'Platyhelminthes',
    class: 'Trematoda',
    order: 'Strigeidida',
    family: 'Schistosomatidae',
    genus: 'Schistosoma',
    species: 'S. mansoni / S. haematobium',
    zoonoticRisk: 'low',
    hosts: {
      definitive: {
        ar: 'الإنسان (المستقر في الأوردة المساريقية للقولون في S. mansoni، وأوردة الحوض والمثانة في S. haematobium)',
        en: 'Humans (in mesenteric venules of bowel for S. mansoni; vesical/pelvic venous plexus for S. haematobium)',
        fr: 'Homme (veines mésentériques inférieures pour S. mansoni ; plexus vésicaux pour S. haematobium)'
      },
      intermediate: {
        ar: 'قواقع المياه العذبة: قوقع البيومفالاريا (Biomphalaria) لـ S. mansoni، وقوقع البولينوس (Bulinus) لـ S. haematobium',
        en: 'Aquatic freshwater snails: Biomphalaria spp. for S. mansoni; Bulinus spp. for S. haematobium',
        fr: 'Mollusques d\'eau douce : Biomphalaria pour S. mansoni ; Bulinus pour S. haematobium'
      }
    },
    transmission: {
      ar: 'اختراق الجلد الفعال المباشر أثناء السباحة أو الغسيل في مياه الترع العذبة بواسطة ذنائب مشقوقة الذنب مجهرية (Cercariae) سابحة تفرزها القواقع',
      en: 'Percutaneous penetration of unbroken skin during bathing or wading in freshwater by fork-tailed cercariae shed from aquatic snails',
      fr: 'Pénétration transcutanée active lors de baignades en eau douce par les furcocercaires émises par les mollusques'
    },
    morphology: {
      diagnosticStages: [
        'S. mansoni egg with prominent lateral spine (115–175 x 45–70 µm)',
        'S. haematobium egg with sharp terminal spine (110–170 x 40–70 µm)',
        'Fork-tailed swimming cercaria (400–500 µm)'
      ],
      dimensions: '115–175 µm (بيوض مانسوني) / 110–170 µm (بيوض هيماتوبيوم)',
      microscopicFeatures: {
        ar: 'بيضة S. mansoni كبيرة بيضاوية ذات شوكة جانبية بارزة وحادة (Prominent lateral spine) تطرح في البراز؛ بيضة S. haematobium متطاولة ذات شوكة طرفية نهائية حادة (Sharp terminal spine) تطرح في رواسب البول؛ الديدان منفصلة الجنسين (Dioecious) حيث يحمل الذكر السميك الأنثى الأسطوانية النحيلة داخل ميزاب احتضان (Gynecophoral canal)',
        en: 'S. mansoni egg: large, elongated oval with a prominent sharp LATERAL spine, shed in stool. S. haematobium egg: oval with a distinct sharp TERMINAL spine, shed in centrifuged urine. Adults are dioecious; stout male holds slender female in ventral gynecophoral canal',
        fr: 'Œuf de S. mansoni : grand, ovoïde à éperon LATÉRAL acéré, dans les selles ; Œuf de S. haematobium : allongé à éperon TERMINAL pointu, dans les urines centrifugées ; vers à sexes séparés'
      },
      stainingAndDiagnosticMethods: {
        ar: 'فحص ترشيح البول (Urine filtration through polycarbonate membrane) عند الظهيرة لكشف بيوض S. haematobium، وفحص لطاخة كاتو-كاتز البرازية (Kato-Katz fecal thick smear) لبيوض S. mansoni، وفحص مستضد البلهارسيا البولي السريع (Circulating Cathodic Antigen - POC-CCA)',
        en: 'Kato-Katz thick fecal smear for S. mansoni egg count; midday urine membrane filtration (10:00–14:00) or centrifugation for S. haematobium; point-of-care circulating cathodic antigen (POC-CCA) urine test',
        fr: 'Frottis fécal de Kato-Katz pour S. mansoni ; filtration d\'urine de fin de matinée sur membrane pour S. haematobium ; test rapide antigénique urinaire POC-CCA'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'تخترق السركاريا الجلد وتفقد ذيلها متحولة إلى شستوسومولا، تهاجر عبر الرئتين والقلب إلى أوردة المساريقا أو المثانة حيث تنضج وتتزاوج. تضع الإناث آلاف البيوض يومياً؛ يخترق نصف البيض جدران الأمعاء أو المثانة ليطرح في الفضلات، بينما ينجرف النصف الآخر مع الدم إلى الكبد مسبباً أوراماً حُبيبية وتليفاً كبدياً حاداً (Symmers clay-pipe stem fibrosis)',
        en: 'Cercariae penetrate skin, shed tails becoming schistosomulae, and migrate via lungs to liver vasculature to mature. Paired adults migrate against venous flow to mesenteric or vesical veins. Female lays hundreds of eggs/day; ~50% traverse mucosa to exit in stool/urine, while trapped eggs induce chronic granulomas and pipe-stem hepatic fibrosis',
        fr: 'Pénétration transcutanée des cercaires, migration veineuse et maturation. Couples fixés dans les plexus veineux. Ponte ovulaire causant granulomes tissulaires et fibrose hépatique en tuyau de pipe'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'اختراق الجلد بالسركاريا', en: 'Cercarial Skin Penetration', fr: 'Pénétration par la cercaire' },
          hostType: 'definitive',
          isDiagnostic: false,
          isInfective: true,
          description: { ar: 'اختراق السركاريا الجلد تاركة ذيلها ومسببة حكة السباحين', en: 'Free-swimming cercaria penetrates epidermis causing swimmer\'s itch', fr: 'Pénétration cutanée avec prurit des nageurs' },
          location: { ar: 'الجلد السليم', en: 'Intact Skin', fr: 'Peau intacte' }
        },
        {
          stageNumber: 2,
          title: { ar: 'وضع البيض وانحشار الأنسجة', en: 'Oviposition & Granulomas', fr: 'Ponte et granulomes' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'انحشار البيوض في الكبد أو المثانة وتحفيز أورام حبيبية مناعية عنيفة وتليف', en: 'Trapped eggs trigger intense immune granulomas, collagen deposition, and fibrosis', fr: 'Enclavement des œufs provoquant granulomes et fibrose' },
          location: { ar: 'الكبد وجدار المثانة / الأمعاء', en: 'Liver & Bladder / Intestine', fr: 'Foie et vessie' }
        },
        {
          stageNumber: 3,
          title: { ar: 'خروج الميراسيديوم وإصابة القوقع', en: 'Miracidium & Snail Cycle', fr: 'Infection du mollusque' },
          hostType: 'intermediate',
          isDiagnostic: false,
          isInfective: false,
          description: { ar: 'تفقس البيضة في الماء العذب ميراسيديوم يسبح ليخترق القوقع الوسيط ويتكاثر داخله', en: 'Egg hatches ciliated miracidium which penetrates snail to multiply into cercariae', fr: 'Éclosion du miracidium infestant le mollusque hôte' },
          location: { ar: 'المياه العذبة والقواقع', en: 'Freshwater & Snails', fr: 'Eaux douces et gastéropodes' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Cattle, sheep (Schistosoma bovis)', 'Rodents (laboratory reservoirs)'],
      clinicalSigns: {
        ar: ['في البلهارسيا البقرية (S. bovis): هزال مزمن وإسهال مخاطي وضعف إنتاج الحليب واللحم'],
        en: ['In ruminant schistosomiasis (S. bovis): emaciation, chronic diarrhea, and drop in milk production'],
        fr: ['Chez les ruminants (S. bovis) : émaciation, diarrhée chronique et chute de lactation']
      },
      pathology: {
        ar: 'التهاب الأمعاء الحبيبي والتليف الكبدي في الماشية',
        en: 'Hepatic granulomas and intestinal pathology in livestock',
        fr: 'Granulomes hépatiques et entérite chez le bétail'
      },
      severity: 'moderate'
    },
    humanImpact: {
      isZoonotic: false,
      incubationPeriod: {
        ar: 'من 4 إلى 8 أسابيع حتى بدء نضج الديدان ووضع البيض',
        en: '4 to 8 weeks before egg deposition begins',
        fr: '4 à 8 semaines avant la ponte ovulaire'
      },
      acuteSigns: {
        ar: ['حكة السباحين المؤقتة (Swimmer\'s itch)', 'حمى كاتاياما الحادة (Katayama fever): حمى، سعال، تضخم الطحال والغدد اللمفاوية، وفرط الحمضات الشديد (Eosinophilia)', 'بيلة دموية غير مؤلمة في نهاية التبول (Terminal hematuria) في بلهارسيا المثانة'],
        en: ['Swimmer\'s itch (cercarial dermatitis) within hours', 'Acute Katayama fever: fever, urticaria, cough, splenomegaly, high eosinophilia', 'Painless terminal hematuria and dysuria in S. haematobium'],
        fr: ['Dermatite cercarienne (prurit du baigneur)', 'Fièvre de Katayama (accès fébrile, urticaire, hyperéosinophilie)', 'Hématurie terminale caractéristique dans la bilharziose urinaire']
      },
      chronicComplications: {
        ar: ['في S. mansoni: تليف الكبد البابي الشبيه بأنبوب الغليون (Symmers pipestem fibrosis)، ارتفاع ضغط وريد الباب، ودوالي المريء النزفية القاتلة', 'في S. haematobium: تليف المثانة، موه الكلية (Hydronephrosis)، وتطور سرطان المثانة حرشفي الخلايا (Squamous cell bladder carcinoma)'],
        en: ['In S. mansoni: Symmers clay-pipe stem periportal fibrosis, portal hypertension, splenomegaly, and bleeding esophageal varices', 'In S. haematobium: bladder calcification, ureteral obstruction, hydronephrosis, and squamous cell carcinoma of the bladder', 'Female genital schistosomiasis increasing HIV transmission risk'],
        fr: ['S. mansoni : fibrose périportale de Symmers, hypertension portale et rupture de varices œsophagiennes', 'S. haematobium : calcifications vésicales, hydronéphrose et carcinome épidermoïde de la vessie']
      },
      highRiskGroups: {
        ar: ['المزارعون والصيادون والأطفال الذين يسبحون في قنوات الري والترع العذبة في مصر وإفريقيا'],
        en: ['Agricultural farmers, fishermen, and school-aged children swimming in freshwater canals', 'Travelers rafting or bathing in African lakes (Lake Malawi, Nile basin)'],
        fr: ['Agriculteurs, pêcheurs et enfants se baignant en eau douce en Afrique et Moyen-Orient']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [
          {
            drug: 'Praziquantel',
            dosageGuideline: '25–40 mg/kg orally in ruminants under veterinary prescription',
            note: {
              ar: 'فعال ضد البلهارسيا الحيوانية مع تكرار الجرعة',
              en: 'Effective against animal schistosomes',
              fr: 'Efficace sur les schistosomes animaux'
            }
          }
        ],
        precautions: {
          ar: 'منع الحيوانات من الشرب أو الرعي في أطراف الترع المليئة بالقواقع',
          en: 'Prevent livestock from grazing along snail-infested canal banks',
          fr: 'Éviter le pâturage aux abords des cours d\'eau infestés'
        }
      },
      human: {
        firstLineDrugs: [
          {
            drug: 'Praziquantel',
            dosageGuideline: '40 mg/kg (for S. mansoni & S. haematobium) or 60 mg/kg (for S. japonicum) orally in divided doses over 1 day with food',
            note: {
              ar: 'الدواء المعياري الذهبي العالمي الوحيد: يسبب تدفق الكالسيوم وشلل الدودة وتمزق غلافها الخارجي لتلتهمها الخلايا المناعية',
              en: 'Global drug of choice; induces calcium influx, muscular tetanic contraction, and exposes tegumental antigens to immune attack',
              fr: 'Médicament de référence universel (40 mg/kg en prise unique ou fractionnée au cours du repas)'
            }
          }
        ],
        surgicalIntervention: {
          ar: 'حقن دوالي المريء وتدبيسها بالتنظير، أو جراحة استئصال المثانة في أورام المثانة الخبيثة المتأخرة',
          en: 'Endoscopic band ligation of bleeding esophageal varices; surgical resection of obstructed ureters or bladder carcinoma',
          fr: 'Ligature de varices œsophagiennes ou chirurgie réparatrice urologique'
        },
        notes: {
          ar: 'البرازيكوانتيل فعال فقط ضد الديدان البالغة، لذا يُعاد العلاج بعد 4–6 أسابيع للقضاء على الديدان التي كانت في طور اليرقة أثناء العلاج الأول',
          en: 'Praziquantel is inactive against migrating schistosomulae; repeat treatment after 4–6 weeks to eliminate newly matured worms',
          fr: 'Répéter le traitement après 4 à 6 semaines car les schistosomules en migration sont insensibles'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: ['تسييج قنوات الري ومنع روث الماشية من الوصول لمصادر المياه العذبة'],
        en: ['Fence water canals to prevent livestock contamination with feces or urine'],
        fr: ['Clôturer les points d\'eau douce pour éviter la contamination animale']
      },
      human: {
        ar: ['الامتناع التام عن السباحة أو الخوض في مياه الترع والبحيرات العذبة في المناطق الموبوءة بالبلهارسيا', 'المعالجة الكيميائية الوقائية الجماعية المنتظمة (Mass Drug Administration - MDA) بالبرازيكوانتيل لأطفال المدارس'],
        en: ['Strictly avoid swimming, wading, or washing in untreated freshwater in endemic areas', 'School-based Mass Drug Administration (MDA) with Praziquantel annually in high-risk zones'],
        fr: ['Éviter formellement toute baignade en eau douce stagnante en zone d\'endémie', 'Campagnes scolaires régulières d\'administration massive de praziquantel']
      },
      environmental: {
        ar: ['مكافحة قواقع البيومفالاريا والبولينوس بواسطة مبيدات القواقع البيئية (Niclosamide) أو المكافحة الحيوية بالأسماك والبط'],
        en: ['Targeted intermediate host snail control using niclosamide molluscicide or biological control'],
        fr: ['Lutte anti-mollusque par molluscicides écologiques ou assainissement des canaux']
      }
    },
    sampleMicrographs: [
      {
        title: {
          ar: 'بيضة بلهارسيا مانسوني ذات الشوكة الجانبية',
          en: 'Schistosoma mansoni egg with lateral spine',
          fr: 'Œuf de Schistosoma mansoni à éperon latéral'
        },
        stage: 'Diagnostic embryonated egg',
        magnification: '400x High Power',
        stain: 'Direct wet mount',
        imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'بيضة بيضاوية كبيرة مميزة بشوكة جانبية حادة وبارزة تطرح في براز المريض',
          en: 'Characteristic large oval egg with a sharp prominent lateral spine shed in feces',
          fr: 'Grand œuf ovalaire avec éperon latéral acéré caractéristique'
        }
      }
    ],
    videos: [
      {
        id: 'schistosoma-lifecycle-vid',
        title: {
          ar: 'دورة حياة داء البلهارسيا والقواقع (Schistosomiasis)',
          en: 'Schistosoma mansoni Life Cycle & Transmission',
          fr: 'Cycle évolutif de Schistosoma mansoni'
        },
        type: 'life_cycle_animation',
        duration: '4:15',
        youtubeId: 'IWtAshsoyq4',
        sourceName: 'WHO / Global Health Media',
        description: {
          ar: 'شرح انتقال السركاريا عبر مياه الترع واختراق الجلد والتكاثر في الأوردة المساريقية',
          en: 'Detailed animation showing cercarial skin penetration, snail hosts, and fibrosis pathogenesis',
          fr: 'Animation démontrant la pénétration transcutanée et le cycle chez le mollusque'
        }
      }
    ],
    scientificSources: [
      {
        title: 'WHO Guideline on Control and Elimination of Human Schistosomiasis',
        organization: 'World Health Organization (WHO)',
        year: '2022',
        url: 'https://www.who.int/publications/i/item/9789240041608',
        citationType: 'guideline'
      },
      {
        title: 'CDC DPDx - Schistosomiasis Laboratory Identification and Egg Morphology',
        organization: 'Centers for Disease Control and Prevention (CDC)',
        year: '2023',
        url: 'https://www.cdc.gov/dpdx/schistosomiasis/index.html',
        citationType: 'guideline'
      },
      {
        title: 'Schistosomiasis: Lancet Seminar on Pathophysiology, Diagnosis, and Elimination',
        organization: 'The Lancet / PubMed PMC',
        year: '2021',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32416087/',
        citationType: 'peer_reviewed'
      }
    ]
  },
  {
    id: 'taenia-saginata-solium',
    scientificName: 'Taenia saginata / Taenia solium',
    commonNames: {
      ar: 'الدودة الشريطية البقرية والخنزيرية (داء الشريطيات وداء الكيسات المذنبة)',
      en: 'Taenia saginata & T. solium (Beef & Pork Tapeworm / Cysticercosis)',
      fr: 'Tænia saginata & solium (Ténia du Bœuf et du Porc / Cysticercose)'
    },
    type: 'cestode',
    phylum: 'Platyhelminthes',
    class: 'Cestoda',
    order: 'Cyclophyllidea',
    family: 'Taeniidae',
    genus: 'Taenia',
    species: 'T. saginata / T. solium',
    zoonoticRisk: 'very_high',
    hosts: {
      definitive: {
        ar: 'الإنسان فقط (العائل النهائي الإلزامي الوحيد لكلا النوعين في أمعائه الدقيقة)',
        en: 'Humans only (sole obligate definitive host harboring adult tapeworms in small intestine)',
        fr: 'Homme uniquement (seul hôte définitif obligatoire hébergeant le ver adulte)'
      },
      intermediate: {
        ar: 'الأبقار (لـ T. saginata)، الخنازير والإنسان كعائل وسيط عرضي خطير (لـ T. solium حيث يصاب بداء الكيسات المذنبة)',
        en: 'Cattle for T. saginata; pigs for T. solium; humans can also act as accidental intermediate hosts for T. solium (cysticercosis)',
        fr: 'Bovins pour T. saginata ; porcins et Homme pour T. solium (responsable de neurocysticercose)'
      }
    },
    transmission: {
      ar: 'ابتلاع لحم البقر أو الخنزير غير المطهو جيداً والمحتوي على يرقات كيسية متكلسة (Cysticercus bovis / cellulosae) للإصابة بالدودة البالغة؛ وابتلاع بيوض T. solium من براز إنسان مصاب لتطوير داء الكيسات المذنبة العصبية الخطيرة',
      en: 'Ingestion of undercooked beef or pork containing viable cysticerci (produces adult taeniasis); ingestion of T. solium eggs via fecal-oral contamination (produces severe neurocysticercosis in human tissues)',
      fr: 'Ingestion de viande bovine ou porcine mal cuite contenant des cysticerques vivants ; ingestion d\'œufs de T. solium via mains sales provoquant la cysticercose humaine'
    },
    morphology: {
      diagnosticStages: [
        'Radially striated spherical egg (30–35 µm) containing hexacanth oncosphere',
        'Gravid proglottid (15–30 lateral uterine branches in T. saginata vs 7–13 in T. solium)',
        'Scolex (4 suckers, unhooked in T. saginata; 4 suckers + rostellum of 25–30 hooks in T. solium)'
      ],
      dimensions: '30–35 µm (بيوض) / 4–10 أمتار (دودة بالغة)',
      microscopicFeatures: {
        ar: 'البيضة كروية بنية محاطة بجدار سميك ذو تخطيطات شعاعية مميزة (Radially striated embryophore) بداخلها جنين سداسي الأشواك (Hexacanth embryo/oncosphere) - البيوض لا يمكن تمييزها مجهرياً بين النوعين؛ التفريق يتم بفحص القطع الحبلى بحقن الحبر الصيني: T. saginata تحتوي على 15–30 تفرعاً رحمياً جانبياً وتتحرك تلقائياً وتخرج من الشرج، بينما T. solium تحتوي 7–13 تفرعاً فقط وغير متحركة ورأسها مسلح بخطاطيف',
        en: 'Eggs are 30–35 µm, thick-walled with characteristic radial striations and 6-hooked oncosphere (identical between species). Differentiation requires examining gravid proglottids via India ink injection: T. saginata has 15–30 lateral uterine branches and actively crawls; T. solium has 7–13 branches and armed scolex with hooklets',
        fr: 'Œufs sphériques (30–35 µm) à coque épaisse striée radiairement contenant un embryon hexacanthe. Différenciation par les anneaux mûrs (15–30 branches utérines chez T. saginata vs 7–13 chez T. solium) et scolex armé de crochets chez T. solium'
      },
      stainingAndDiagnosticMethods: {
        ar: 'فحص البراز المباشر أو شريط السيلوفان اللاصق (Scotch tape test) لكشف البيوض، وتلوين القطع الحبلى بحبر الصين أو الكارمين (India ink injection)، واختبار PCR التفريقي، والتصوير بالرنين المغناطيسي (MRI/CT) لكيسات الدماغ',
        en: 'Perianal cellophane tape test or stool concentration for eggs; India ink or carmine staining of gravid proglottids; Multiplex PCR; Brain MRI / CT neuroimaging for neurocysticercosis',
        fr: 'Scotch-test anal pour œufs ; injection d\'encre de Chine dans les proglottis ; IRM/TDM cérébrale pour neurocysticercose'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'تطرح القطع الحبلى أو البيوض في البراز البشري إلى المراعي، تبتلعها الأبقار أو الخنازير، فتخترق الأجنة جدار الأمعاء وتهاجر مع الدم إلى العضلات لتتحول إلى يرقات كيسية مذيلة (Cysticerci). عند تناول الإنسان اللحم النيء، يخرج رأس الدودة في الإثني عشر ويثبت نفسه بجدار الأمعاء ليكبر شريطاً طويلاً يصل إلى 4–10 أمتار يعيش لعشرات السنين',
        en: 'Eggs shed in human feces contaminate pastures. Ingested by cattle/pigs; oncospheres hatch, cross intestinal mucosa and migrate via blood into skeletal and cardiac muscle, forming infective cysticerci. Human consumes raw/rare meat; scolex evaginates in duodenum, anchors to mucosa, growing into 4–10 meter adult ribbon shedding segments',
        fr: 'Proglottis éliminés dans les fèces humaines souillant les pâtures. Ingestion par bovin/porcin, libération d\'oncosphères s\'enkystant en cysticerques intramusculaires. Ingestion humaine de viande crue, fixation du scolex et développement en ver rubané géant'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'ابتلاع اللحم المصاب باليرقات', en: 'Cysticercus Ingestion', fr: 'Ingestion de cysticerques' },
          hostType: 'definitive',
          isDiagnostic: false,
          isInfective: true,
          description: { ar: 'ابتلاع يرقات كيسية حية في لحم بقر أو خنزير نيء', en: 'Ingestion of viable cysticerci in poorly cooked meat', fr: 'Consommation de viande crue infestée' },
          location: { ar: 'المعدة والأمعاء الدقيقة', en: 'Stomach & Duodenum', fr: 'Estomac et intestin grêle' }
        },
        {
          stageNumber: 2,
          title: { ar: 'نمو الشريطية وطرح القطع', en: 'Adult Growth & Shedding', fr: 'Croissance et émission d\'anneaux' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'تثبت الرأس ونمو آلاف القطع وطرح قطع حبلى مليئة بعشرات آلاف البيوض', en: 'Scolex attaches, ribbon grows 5–10 meters, gravid segments crawl out of anus', fr: 'Ver adulte expulsant quotidiennement des anneaux mûrs' },
          location: { ar: 'الأمعاء الدقيقة والشرج', en: 'Jejunum & Ileum', fr: 'Jéjunum et région anale' }
        },
        {
          stageNumber: 3,
          title: { ar: 'ابتلاع البيض وتشكل أكياس الدماغ (T. solium)', en: 'Neurocysticercosis Hazard', fr: 'Neurocysticercose humaine' },
          hostType: 'intermediate',
          isDiagnostic: true,
          isInfective: true,
          description: { ar: 'إذا ابتلع الإنسان بيوض T. solium تتشكل كيسات مذيلة في دماغه وعضلاته مسببة صرعاً عنيفاً', en: 'Fecal-oral ingestion of T. solium eggs causes oncospheres to encyst in human brain and eyes (Neurocysticercosis)', fr: 'L\'ingestion d\'œufs de T. solium entraîne l\'enkystement cérébral provoquant l\'épilepsie' },
          location: { ar: 'الدماغ والعين والعضلات', en: 'Brain, Eyes, Skeletal Muscle', fr: 'Cerveau, yeux et muscles' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['Cattle (Cysticercus bovis)', 'Pigs (Cysticercus cellulosae)'],
      clinicalSigns: {
        ar: ['في الحيوانات الحية: غالباً عديمة الأعراض تماماً، وتكتشف بالصدفة أثناء الفحص البيطري في المسالخ'],
        en: ['In live animals: clinically asymptomatic; detected exclusively during post-mortem slaughterhouse meat inspection'],
        fr: ['Asymptomatique chez l\'animal vivant ; découverte lors de l\'inspection vétérinaire post-mortem à l\'abattoir']
      },
      pathology: {
        ar: 'حبيبات بيضاء كيسية لؤلؤية (حجم حبة البازلاء 5–10 مم) في عضلات المضغ والقلب والحجاب الحاجز واللسان',
        en: 'Pea-sized oval fluid-filled cysts (5–10 mm) embedded in masseter, heart, diaphragm, and tongue muscle tissues',
        fr: 'Cysticerques blanchâtres (en grain de riz) logés dans les masséters, le cœur et la langue'
      },
      severity: 'moderate'
    },
    humanImpact: {
      isZoonotic: true,
      incubationPeriod: {
        ar: 'شهرين إلى 3 أشهر حتى ظهور القطع في البراز؛ ومن عدة أشهر إلى سنوات لظهور أعراض الكيسات الدماغية',
        en: '2 to 3 months for adult tapeworm egg shedding; months to years for neurocysticercosis symptoms',
        fr: '2 à 3 mois pour l\'adulte intestinal ; plusieurs années pour les kystes cérébraux'
      },
      acuteSigns: {
        ar: ['خروج قطع الدودة البيضاء المتحركة تلقائياً عبر فتحة الشرج أو الملابس الداخلية (خاصة في T. saginata)', 'مغص خفيف وشعور بالجوع الدائم أو فقدان الشهية', 'غثيان واضطراب هضمي طفيف'],
        en: ['Motile proglottids crawling through anus causing perianal tickling (especially T. saginata)', 'Mild abdominal discomfort, hunger pangs, or anorexia', 'Nausea, weight loss, digestive disturbance'],
        fr: ['Passage actif d\'anneaux mobiles dans les sous-vêtements (T. saginata)', 'Gêne abdominale, boulimie paradoxale ou anorexie', 'Prurit anal']
      },
      chronicComplications: {
        ar: ['داء الكيسات المذنبة العصبية (Neurocysticercosis - T. solium): السبب الرئيسي الأول للصرع المكتسب والصرع التشنجي في العالم النامي', 'ارتفاع الضغط داخل القحف، الصداع الشديد، العمى، والسكتات الدماغية', 'انسداد الأمعاء أو التهاب الزائدة الدودية بسبب تراكم القطع'],
        en: ['Neurocysticercosis (T. solium): the leading preventable cause of adult-onset acquired epilepsy in developing countries', 'Intracranial hypertension, hydrocephalus, stroke, and vision loss', 'Intestinal obstruction or appendiceal perforation by tangled strobila'],
        fr: ['Neurocysticercose (T. solium) : première cause d\'épilepsie acquise de l\'adulte dans le monde', 'Hypertension intracrânienne, hydrocéphalie, cécité', 'Occlusion digestive rare']
      },
      highRiskGroups: {
        ar: ['متناولو اللحوم النيئة أو غير المطهية جيداً (كالكبة النيئة وشرائح اللحم النصف مطهوة)', 'أفراد عائلات المصابين بدودة الخنزير البالغة (خطر العدوى الذاتية بالبيوض)', 'المسافرون للمناطق الريفية التي تربى فيها الخنازير طليقة'],
        en: ['Consumers of raw or rare beef/pork dishes', 'Household contacts of T. solium tapeworm carriers (severe risk of fecal-oral egg ingestion)', 'Travelers to rural endemic areas with free-roaming swine'],
        fr: ['Consommateurs de viande de bœuf ou porc crue/saignante', 'Entourage de porteurs de T. solium', 'Éleveurs de porcs en divagation']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [],
        precautions: {
          ar: 'الإعدام الكلي أو الجزئي للذبائح المصابة بالكيسات المذنبة في المسالخ، أو تجميد اللحم على -10°C لمدة 10 أيام على الأقل لقتل اليرقات',
          en: 'Condemnation of heavily infected carcasses at abattoir; deep freezing at -10°C for at least 10–14 days destroys cysticerci',
          fr: 'Saisie vétérinaire des carcasses à l\'abattoir ; assainissement par congélation à -10°C pendant 10 jours minimum'
        }
      },
      human: {
        firstLineDrugs: [
          {
            drug: 'Praziquantel',
            dosageGuideline: '5–10 mg/kg single oral dose for intestinal tapeworm',
            note: {
              ar: 'جرعة واحدة كافية لشل وطرد الدودة المعوية البالغة تماماً',
              en: 'Highly effective single dose curative for adult intestinal taeniasis',
              fr: 'Dose unique de 5 à 10 mg/kg curative pour le ténia intestinal'
            }
          },
          {
            drug: 'Niclosamide',
            dosageGuideline: 'Adults: 2 g chewed thoroughly in a single morning dose with water after light meal',
            note: {
              ar: 'مبيد شريطي موضعي غير ممتص، ممتاز ومفضل لـ T. solium لتجنب خطر تحلل القطع وامتصاص البيوض',
              en: 'Non-absorbable luminal taeniacide; historically preferred for T. solium to reduce cysticercosis risk',
              fr: 'Amœbicide/tænicide intraluminal non absorbé (2 comprimés à mâcher)'
            }
          }
        ],
        surgicalIntervention: {
          ar: 'في داء الكيسات المذنبة العصبية: بروتوكول مركب من Albendazole + Dexamethasone (كورتيزون للسيطرة على الوذمة الدماغية التفاعلية) مع جراحة تحويلة بطينية صفاقية (VP Shunt) للاستسقاء الدماغي',
          en: 'For neurocysticercosis: Albendazole 15 mg/kg/day + mandatory corticosteroid cover (Dexamethasone) + antiepileptic drugs; surgical VP shunt for hydrocephalus',
          fr: 'En neurocysticercose : Albendazole + corticothérapie impérative (Dexaméthasone) + antiépileptiques ; dérivation ventriculo-péritonéale si hydrocéphalie'
        },
        notes: {
          ar: 'يجب تنبيه مريض الدودة البقرية أن فحص خروج الرأس (Scolex) في البراز يؤكد الشفاء النهائي',
          en: 'Confirm passage of scolex or follow up negative stool exams at 1 and 3 months to confirm cure',
          fr: 'Contrôle à 3 mois pour vérifier l\'absence d\'émission de nouveaux anneaux'
        }
      }
    },
    prevention: {
      veterinary: {
        ar: ['التفتيش البيطري الصارم على اللحوم في المسالخ النظامية وفحص عضلات المضغ والقلب', 'منع وصول مياه الصرف الصحي البشري أو الفضلات لمراعي الأبقار وأعلاف الخنازير'],
        en: ['Mandatory veterinary slaughterhouse inspection of masseters, tongue, and heart muscles', 'Prevent human defecation and untreated sewage irrigation in livestock pastures'],
        fr: ['Inspection vétérinaire systématique des abats et viandes en abattoir', 'Interdiction de pâturage sur terrains épandus d\'eaux usées humaines']
      },
      human: {
        ar: ['طهي لحوم الأبقار والخنازير جيداً حتى تصل الحرارة الداخلية إلى أكثر من 65°C في المركز (لون رمادي تام)', 'غسل اليدين الصارم بعد استخدام المرحاض وقبل إعداد الطعام لمنع ابتلاع بيوض T. solium'],
        en: ['Cook beef and pork thoroughly to an internal core temperature of at least 65°C–70°C (no pink/red meat)', 'Rigorous hand hygiene after defecation and before food preparation to avoid ingesting T. solium eggs'],
        fr: ['Cuisson à cœur de la viande de bœuf et de porc à plus de 65°C', 'Lavage méticuleux des mains pour éviter l\'ingestion d\'œufs de T. solium']
      },
      environmental: {
        ar: ['توفير المراحيض الصحية في المناطق الريفية ومنع تربية الخنازير الطليقة المتغذية على القمامة'],
        en: ['Enforce sanitary latrines and ban free-roaming scavenging pigs in rural communities'],
        fr: ['Généralisation des latrines et interdiction de l\'élevage porcin divagant']
      }
    },
    sampleMicrographs: [
      {
        title: {
          ar: 'بيضة الدودة الشريطية (Taenia spp.) ذات التخطيط الشعاعي',
          en: 'Taenia species egg with radial striations',
          fr: 'Œuf de Tænia à coque striée radiairement'
        },
        stage: 'Diagnostic embryonated egg (30–35 µm)',
        magnification: '400x High Power',
        stain: 'Lugol iodine wet mount',
        imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'بيضة دائرية بنية ذات جدار سميك جداً مخطط شعاعياً كعجلة العربة وبداخلها جنين سداسي الأشواك',
          en: 'Spherical brown egg with a distinct radially striated thick shell containing hexacanth oncosphere',
          fr: 'Œuf régulier sphérique à coque épaisse et striée contenant un embryon à 6 crochets'
        }
      }
    ],
    videos: [
      {
        id: 'taenia-lifecycle-vid',
        title: {
          ar: 'دورة حياة الدودة الشريطية وداء الكيسات المذنبة (WHO One Health)',
          en: 'A One Health Approach to Tackling the Pork Tapeworm (Taenia)',
          fr: 'Cycle du ténia et neurocysticercose (OMS)'
        },
        type: 'life_cycle_animation',
        duration: '4:50',
        youtubeId: '57T2eoPAwTs',
        sourceName: 'World Health Organization (WHO)',
        description: {
          ar: 'فيديو رسمي من منظمة الصحة العالمية يشرح دورة حياة الدودة الشريطية والوقاية من أكياس الدماغ',
          en: 'Official WHO educational video covering Taenia solium life cycle and public health control',
          fr: 'Vidéo officielle de l\'OMS détaillant le cycle de Taenia solium et la prévention'
        }
      }
    ],
    scientificSources: [
      {
        title: 'WHO Guidelines on Management of Taenia solium Neurocysticercosis',
        organization: 'World Health Organization (WHO)',
        year: '2021',
        url: 'https://www.who.int/publications/i/item/9789240032231',
        citationType: 'guideline'
      },
      {
        title: 'CDC DPDx - Taeniasis and Cysticercosis Laboratory Protocols',
        organization: 'Centers for Disease Control and Prevention (CDC)',
        year: '2023',
        url: 'https://www.cdc.gov/dpdx/taeniasis/index.html',
        citationType: 'guideline'
      },
      {
        title: 'WOAH Terrestrial Manual: Cysticercosis (Bovine and Porcine Meat Inspection)',
        organization: 'World Organisation for Animal Health (WOAH)',
        year: '2022',
        url: 'https://www.woah.org/en/what-we-do/standards/standards-codes-and-manuals/',
        citationType: 'standard'
      }
    ]
  },
  {
    id: 'enterobius-vermicularis',
    scientificName: 'Enterobius vermicularis',
    commonNames: {
      ar: 'الدودة الدبوسية / الحرقص (داء السرميات / دودة المقعدة عند الأطفال)',
      en: 'Pinworm / Threadworm (Enterobiasis & Oxyuriasis)',
      fr: 'Oxyure (Oxyurose & Prurit Anal Infantile)'
    },
    type: 'nematode',
    phylum: 'Nematoda',
    class: 'Chromadorea',
    order: 'Rhabditida',
    family: 'Oxyuridae',
    genus: 'Enterobius',
    species: 'E. vermicularis',
    zoonoticRisk: 'none',
    hosts: {
      definitive: {
        ar: 'الإنسان فقط (خاصة أطفال المدارس والروضات؛ لا تصيب الحيوانات الأليفة كالكلاب والقطط)',
        en: 'Humans only (especially preschool and school-aged children; does not infect dogs or cats)',
        fr: 'Homme uniquement (surtout enfants d\'âge scolaire ; n\'affecte ni chiens ni chats)'
      },
      intermediate: {
        ar: 'لا يوجد (دورة حياة مباشرة تنتقل بالتماس والملابس والعدوى الذاتية)',
        en: 'None (monoxenous direct life cycle with high domestic transmissibility)',
        fr: 'Aucun (cycle direct féco-oral et rétro-infestation)'
      }
    },
    transmission: {
      ar: 'ابتلاع البيض المعدي عبر الأصابع الملوثة بحك الشرج (العدوى الذاتية الشرجية-الفموية)، أو استنشاق وغبار ملاءات الأسرة والملابس الداخلية الملوثة، أو العدوى الراجعة (Retroinfection)',
      en: 'Fecal-oral ingestion of embryonated eggs via contaminated fingers from scratching perianal region; fomite airborne dust from bedsheets/underwear; retroinfection via anal canal',
      fr: 'Auto-infestation oro-fécale par grattage de la région péri-anale, literie, sous-vêtements et poussière souillée'
    },
    morphology: {
      diagnosticStages: [
        'Planoconvex asymmetrical egg with folded larva (50–60 x 20–30 µm)',
        'Female adult worm with pointed pin-like tail (8–13 mm)'
      ],
      dimensions: '50–60 x 20–30 µm (بيوض) / 8–13 مم (دودة أنثى)',
      microscopicFeatures: {
        ar: 'البيضة مميزة جداً بشكل حرف D (محدبة من جانب ومسطحة من الجانب الآخر Planoconvex)، محاطة بقشرة زجاجية مزدوجة ناعمة وشفافة، وتحتوي دائماً عند وضعها على جنين كامل التكون ومعدٍ خلال 4–6 ساعات؛ الدودة الأنثى بيضاء خيطية صغيرة ذات ذيل مدبب رفيع كالدبوس وجناحين رأسيين جلديين (Cephalic alae)',
        en: 'Egg is pathognomonic D-shaped (planoconvex: one side flattened, one side convex), 50–60 µm, transparent double-layered hyaline shell containing a folded ready larva. Adult female is tiny white thread (8–13 mm) with pointed pin-like tail and lateral cephalic alae',
        fr: 'Œuf typique asymétrique en "D" (plan-convexe), 50–60 µm, à coque lisse double réfringente contenant une larve gyriniforme ; femelle blanche filiforme à extrémité postérieure effilée en pointe'
      },
      stainingAndDiagnosticMethods: {
        ar: 'اختبار شريط السيلوفان اللاصق عند الاستيقاظ صباحاً قبل الاستحمام (Scotch-tape test / Graham technique Gold Standard)؛ فحص البراز الروتيني غير مجدٍ لأن الدودة لا تضع بيضها داخل تجويف الأمعاء بل تهاجر ليلاً للشرج',
        en: 'Cellophane tape test (Scotch tape technique) applied to perianal folds early in morning before bathing or defecation (Gold Standard); routine stool exam is negative in 95% of cases as eggs are laid perianally',
        fr: 'Scotch-test anal de Graham au réveil avant toute toilette (examen de référence indispensable ; l\'examen coprologique standard est inadapté)'
      }
    },
    lifeCycle: {
      summary: {
        ar: 'تعيش الديدان البالغة في الأعور والزائدة الدودية. تهاجر الإناث الحوامل ليلاً إلى ثنيات الشرج وتفرز مادة لاصقة مهيجة لحك الجلد وتضع 10,000–15,000 بيضة تصبح معدية خلال 6 ساعات. يؤدي الحك لنقل البيض تحت الأظافر وتكرار الابتلاع واستمرار الدورة العائلية المغلقة',
        en: 'Adults reside in cecum and appendix. Gravid females migrate out through anal sphincter nocturnally, depositing 10,000+ eggs in perianal folds coated with pruritic gelatinous matrix. Eggs embryonate within 4–6 hours; scratching transfers eggs to fingers, continuing the household cycle',
        fr: 'Adultes dans le caecum. Migration nocturne des femelles gravides vers la marge anale, ponte de 10 000 œufs prurigineux mûrs en quelques heures. Prurit nocturne, dissémination sous les ongles'
      },
      stages: [
        {
          stageNumber: 1,
          title: { ar: 'الهجرة الشرجية الليلية ووضع البيض', en: 'Nocturnal Perianal Oviposition', fr: 'Ponte péri-anale nocturne' },
          hostType: 'definitive',
          isDiagnostic: true,
          isInfective: false,
          description: { ar: 'خروج الأنثى ليلاً لوضع البيض الملتصق مسببة حكة شرجية شديدة واضطراب النوم', en: 'Female crawls out perianally laying 10,000+ eggs, triggering severe nocturnal pruritus', fr: 'Migration anale nocturne et ponte induisant un prurit féroce' },
          location: { ar: 'ثنيات الشرج والجلد المحيط', en: 'Perianal Folds', fr: 'Marge anale' }
        },
        {
          stageNumber: 2,
          title: { ar: 'ابتلاع البيض والعدوى الذاتية', en: 'Fecal-Oral Reinfection', fr: 'Auto-infestation' },
          hostType: 'definitive',
          isDiagnostic: false,
          isInfective: true,
          description: { ar: 'انتقال البيض من تحت الأظافر إلى الفم أثناء الأكل أو مص الأصابع', en: 'Egg ingestion via contaminated hands or airborne bedclothes', fr: 'Ingestion des œufs via ongles souillés ou literie' },
          location: { ar: 'الفم والأصابع', en: 'Hands & Mouth', fr: 'Mains et bouche' }
        },
        {
          stageNumber: 3,
          title: { ar: 'الفقس والاستقرار في الأعور', en: 'Intestinal Maturation', fr: 'Maturation colique' },
          hostType: 'definitive',
          isDiagnostic: false,
          isInfective: false,
          description: { ar: 'تفقس اليرقات في الأمعاء الدقيقة وتنمو لديدان بالغة في الأعور خلال 2–4 أسابيع', en: 'Larvae hatch in small intestine and mature into adults in cecum over 2–4 weeks', fr: 'Éclosion et développement en adultes dans le caecum' },
          location: { ar: 'الأعور والزائدة الدودية', en: 'Cecum & Appendix', fr: 'Caecum et appendice' }
        }
      ]
    },
    animalImpact: {
      speciesAffected: ['None (Strictly restricted to humans; pets do NOT harbor Enterobius vermicularis)'],
      clinicalSigns: {
        ar: ['لا يصيب الكلاب والقطط نهائياً (الحيوانات الأليفة لا تنقل الدودة الدبوسية)'],
        en: ['Does not infect dogs or cats; household pets are completely free and cannot transmit pinworms'],
        fr: ['Aucun impact vétérinaire (l\'oxyure humain n\'infeste jamais les chiens ou chats)']
      },
      pathology: {
        ar: 'غير موجود بيطرياً',
        en: 'Not applicable',
        fr: 'Non applicable'
      },
      severity: 'mild'
    },
    humanImpact: {
      isZoonotic: false,
      incubationPeriod: {
        ar: 'من 2 إلى 6 أسابيع من ابتلاع البيض حتى اكتمال الدورة وبدء خروج الإناث',
        en: '2 to 6 weeks for full maturation cycle',
        fr: '2 à 6 semaines'
      },
      acuteSigns: {
        ar: ['حكة شرجية ليلية شديدة ومستمرة (Nocturnal perianal pruritus) توقظ الطفل من النوم', 'أرق وتململ وبكاء ليلي وتقلب أثناء النوم', 'التهاب الفرج والمهبل وحكة فرجية عند الفتيات الصغيرات (Vulvovaginitis)'],
        en: ['Intense perianal and perineal nocturnal itching disturbing sleep', 'Restlessness, insomnia, irritability, teeth grinding (bruxism)', 'Vulvovaginitis and dysuria in young girls from aberrant worm migration'],
        fr: ['Prurit anal nocturne intense empêchant le sommeil chez l\'enfant', 'Agitation nocturne, irritabilité, cauchemars', 'Vulvo-vaginite chez la petite fille']
      },
      chronicComplications: {
        ar: ['التهاب الجلد الجرثومي الثانوي والتقيح حول الشرج بسبب الحك الشديد', 'التهاب الزائدة الدودية النادر الناتج عن انسداد لمعتها بتجمع الديدان', 'التهاب الحوض الصفاقي الحبيبي النادر جداً نتيجة هجرة الدودة عبر القناة التناسلية الأنثوية'],
        en: ['Secondary bacterial excoriation and impetigo around perianal skin', 'Chronic pelvic peritoneal granulomas from aberrant migration', 'Occasional appendicitis from intraluminal worm obstruction'],
        fr: ['Surinfection bactérienne cutanée par grattage', 'Appendicite oxyurienne par obstruction mécanique', 'Salpingite ou péritonite pelvienne ectopique très rare']
      },
      highRiskGroups: {
        ar: ['أطفال المدارس الابتدائية والروضات والمؤسسات الإيوائية', 'جميع أفراد الأسرة المخالطين للطفل المصاب (عدوى عائلية شاملة حتمية)'],
        en: ['Preschool and elementary school children', 'Institutionalized populations', 'All household family contacts of an infected child'],
        fr: ['Enfants en âge préscolaire et scolaire', 'Collectivités d\'enfants (crèches, écoles)', 'Famille et fratrie de l\'enfant atteint']
      }
    },
    treatment: {
      veterinary: {
        firstLineDrugs: [],
        precautions: {
          ar: 'لا داعي لعلاج الحيوانات الأليفة في المنزل لأنها ليست عائلاً للدودة الدبوسية',
          en: 'No treatment of family pets needed; dogs and cats do not carry pinworms',
          fr: 'Aucun traitement des animaux domestiques requis'
        }
      },
      human: {
        firstLineDrugs: [
          {
            drug: 'Mebendazole',
            dosageGuideline: '100 mg single oral dose for adults and children >2 yrs, REPEATED STRICTLY in 2 weeks',
            note: {
              ar: 'يجب تكرار الجرعة بعد أسبوعين حتماً لقتل الديدان التي فقست من البيض الجديد؛ ويجب علاج جميع أفراد الأسرة في نفس اليوم',
              en: 'Must repeat after 2 weeks to kill newly hatched worms; treat all household members simultaneously',
              fr: 'Dose unique de 100 mg à répéter OBLIGATOIREMENT 15 jours après ; traiter toute la famille le même jour'
            }
          },
          {
            drug: 'Albendazole',
            dosageGuideline: '400 mg single oral dose with fatty meal, repeated strictly after 2 weeks',
            note: {
              ar: 'بديل واسع الطيف عالي الفعالية مع التكرار الإلزامي بعد أسبوعين',
              en: 'Single dose repeated at 2 weeks for all household contacts',
              fr: '400 mg en prise unique, à renouveler 15 jours plus tard pour toute la famille'
            }
          },
          {
            drug: 'Pyrantel pamoate',
            dosageGuideline: '11 mg/kg (max 1 g) single dose, repeated in 2 weeks',
            note: {
              ar: 'دواء آمن ومتوفر بدون وصفة طبية مناسب للأطفال',
              en: 'Over-the-counter depolarizing neuromuscular blocker alternative',
              fr: 'Alternative sécuritaire disponible sans ordonnance'
            }
          }
        ],
        notes: {
          ar: 'القاعدة الذهبية في داء الدبوسيات: علاج العائلة كاملة في وقت واحد وتكرار الجرعة بعد أسبوعين مع غسل الملاءات بالماء الحار',
          en: 'Golden Rule: Treat all family members simultaneously, repeat dose in 14 days, clip fingernails, and wash bedsheets in hot water',
          fr: 'Règle d\'or : Traitement simultané de toute la fratrie, 2e cure à J15, ongles coupés ras et literie lavée à 60°C'
        }
      }
    },
    prevention: {
      veterinary: { ar: [], en: [], fr: [] },
      human: {
        ar: ['قص أظافر الأطفال بانتظام والحفاظ على نظافتها لمنع احتجاز البيض أثناء الحك', 'غسل أغطية الأسرة والبيجامات والملابس الداخلية بالماء الساخن (>60°C) صباح يوم العلاج دون نفضها تجنباً لتطاير البيض', 'الاستحمام الصباحي بدلاً من المسائي لغسل البيض المترسب حول الشرج أثناء الليل'],
        en: ['Keep fingernails trimmed short and scrubbed clean with soap', 'Wash all bedsheets, blankets, and underwear in hot water (>60°C) without shaking them to prevent airborne egg spread', 'Encourage morning showering to wash away nocturnal perianal eggs'],
        fr: ['Couper les ongles des enfants très courts et les brosser régulièrement', 'Laver la literie et les sous-vêtements à plus de 60°C sans les secouer', 'Douche matinale pour éliminer les œufs déposés pendant la nuit']
      },
      environmental: {
        ar: ['تهوية غرف النوم وتعريض الأفرشة لأشعة الشمس الطبيعية (البيض حساس للجفاف وأشعة UV)'],
        en: ['Aerate bedrooms and expose mattresses to sunlight (eggs are sensitive to dry heat and UV)'],
        fr: ['Aérer les chambres et exposer les matelas à la lumière']
      }
    },
    sampleMicrographs: [
      {
        title: {
          ar: 'بيضة الدودة الدبوسية بشكل حرف D على شريط لاصق',
          en: 'Enterobius vermicularis planoconvex D-shaped egg',
          fr: 'Œuf d\'Enterobius vermicularis en "D" au Scotch-test'
        },
        stage: 'Diagnostic embryonated egg (50–60 µm)',
        magnification: '400x High Power',
        stain: 'Scotch-tape direct mount',
        imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
        description: {
          ar: 'بيضة شفافة غير متناظرة مسطحة من جهة ومحدبة من أخرى تحتوي جنيناً مطوياً جاهزاً للفقس',
          en: 'Planoconvex transparent egg showing flattened side and convex side with folded motile larva inside',
          fr: 'Œuf translucide typique dissymétrique à double coque contenant la larve'
        }
      }
    ],
    videos: [
      {
        id: 'enterobius-lifecycle-vid',
        title: {
          ar: 'كيف تنتقل وتتكاثر الدودة الدبوسية والحرقص عند الأطفال',
          en: 'How Pinworm Infection Spreads & Life Cycle',
          fr: 'Transmission et cycle de l\'oxyure chez l\'enfant'
        },
        type: 'life_cycle_animation',
        duration: '3:20',
        youtubeId: 'ybAHPw27fQY',
        sourceName: 'Medical Microbiology Health Education',
        description: {
          ar: 'شرح تحريكي لطريقة الهجرة الشرجية الليلية للديدان الدبوسية وطرق العدوى والوقاية العائلية',
          en: 'Illustrated animation of nocturnal perianal egg laying, hygiene control, and household transmission',
          fr: 'Animation explicative de la ponte nocturne et de la dissémination familiale'
        }
      }
    ],
    scientificSources: [
      {
        title: 'CDC DPDx - Enterobiasis (Pinworm Infection Laboratory Diagnosis & Scotch-Tape Technique)',
        organization: 'Centers for Disease Control and Prevention (CDC)',
        year: '2023',
        url: 'https://www.cdc.gov/dpdx/enterobiasis/index.html',
        citationType: 'guideline'
      },
      {
        title: 'American Academy of Pediatrics (AAP) Red Book: Pinworm Infestation Guidelines',
        organization: 'American Academy of Pediatrics',
        year: '2021',
        url: 'https://publications.aap.org/redbook',
        citationType: 'guideline'
      },
      {
        title: 'Pinworm Infection: Epidemiology, Transmission, and Clinical Management in Children',
        organization: 'BMJ Best Practice / PubMed',
        year: '2022',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29337582/',
        citationType: 'peer_reviewed'
      }
    ]
  }
];
