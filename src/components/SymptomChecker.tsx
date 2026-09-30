import React, { useState, useMemo } from 'react';
import { Language, Parasite } from '../types/parasite';
import { translations } from '../data/translations';
import { allParasites } from '../data';
import {
  Stethoscope,
  Filter,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  TestTube2,
  ChevronRight
} from 'lucide-react';

interface SymptomCheckerProps {
  language: Language;
  onSelectParasite: (parasite: Parasite) => void;
}

export const SymptomChecker: React.FC<SymptomCheckerProps> = ({
  language,
  onSelectParasite
}) => {
  const t = translations[language];

  const hosts = [
    { id: 'sheep', label: { ar: 'الأغنام والماعز (المجترات الصغيرة)', en: 'Sheep & Goats (Small Ruminants)', fr: 'Ovins & Caprins' } },
    { id: 'cattle', label: { ar: 'الأبقار والعجول (المجترات الكبيرة)', en: 'Cattle & Calves (Bovines)', fr: 'Bovins & Veaux' } },
    { id: 'canine', label: { ar: 'الكلاب (Canines)', en: 'Dogs & Canines', fr: 'Chiens & Canidés' } },
    { id: 'feline', label: { ar: 'القطط (Felines)', en: 'Cats & Felines', fr: 'Chats & Félidés' } },
    { id: 'human', label: { ar: 'الإنسان (مرضى بشريون)', en: 'Human Patients', fr: 'Patients Humains' } },
    { id: 'swine', label: { ar: 'الخنازير (Swine)', en: 'Swine / Pigs', fr: 'Porcs & Porcelets' } },
  ];

  const organSystems = [
    { id: 'git', label: { ar: 'الجهاز الهضمي والمعوي (إسهال، هزال، قيء)', en: 'Gastrointestinal (Diarrhea, Weight loss)', fr: 'Gastro-intestinal (Diarrhée, Amaigrissement)' } },
    { id: 'hepato', label: { ar: 'الكبد والقنوات الصفراوية (يرقان، وذمة، تليف)', en: 'Hepatobiliary (Jaundice, Edema, Ascites)', fr: 'Hépato-biliaire (Ictère, Œdème, Ascite)' } },
    { id: 'respiratory', label: { ar: 'القلب والرئتان (سعال، صعوبة تنفس، إغماء)', en: 'Cardiopulmonary (Cough, Dyspnea, Syncope)', fr: 'Cardio-pulmonaire (Toux, Dyspnée, Syncope)' } },
    { id: 'skin', label: { ar: 'الجلد والشعر (حكة، قشور، تساقط صوف)', en: 'Integumentary & Skin (Pruritus, Alopecia)', fr: 'Peau & Pelage (Prurit intense, Alopécie)' } },
    { id: 'repro', label: { ar: 'الجهاز التناسلي والحمل (إجهاض، موت أجنة)', en: 'Reproductive (Abortion, Stillbirth)', fr: 'Reproduction (Avortement, Mortinatalité)' } },
  ];

  const symptomsList = [
    { id: 'bottle_jaw', system: 'hepato', label: { ar: 'وذمة تحت الفك السفلي (وذمة القنينة - Bottle jaw)', en: 'Submandibular edema (Bottle jaw)', fr: 'Œdème sous-glossien en bouteille' } },
    { id: 'diarrhea_foul', system: 'git', label: { ar: 'إسهال مائي دهني كريه الرائحة مع تطبل', en: 'Foul-smelling greasy/watery diarrhea', fr: 'Diarrhée fétide graisseuse ou pâteuse' } },
    { id: 'severe_anemia', system: 'hepato', label: { ar: 'فقر دم شاحب شديد وانخفاض إنتاج الحليب', en: 'Severe anemia and sudden drop in milk yield', fr: 'Anémie sévère et chute de lactation' } },
    { id: 'pruritus_ears', system: 'skin', label: { ar: 'حكة هستيرية شديدة وقشور بحواف الأذنين والمرفقين', en: 'Severe relentless pruritus, ear & elbow crusts', fr: 'Prurit intense avec croûtes aux oreilles/coudes' } },
    { id: 'chronic_cough', system: 'respiratory', label: { ar: 'سعال جاف مزمن وضيق تنفس مع خمول عند الجهد', en: 'Chronic dry cough, dyspnea, exercise intolerance', fr: 'Toux sèche chronique et intolérance à l\'effort' } },
    { id: 'abortion_last_trimester', system: 'repro', label: { ar: 'عواصف إجهاض أو ولادة مواليد ميتة في النعاج', en: 'Abortion storms or stillbirths in ewes', fr: 'Tempête d\'avortements ou agneaux mort-nés' } },
    { id: 'worms_in_stool', system: 'git', label: { ar: 'خروج ديدان أسطوانية بيضاء طويلة في البراز أو القيء', en: 'Large cylindrical roundworms passed in stool', fr: 'Émission de gros vers cylindriques dans les selles' } },
    { id: 'hypereosinophilia', system: 'hepato', label: { ar: 'فرط شديد في خلايا الحمضات بالدم (> 30-60%)', en: 'Striking hypereosinophilia in blood', fr: 'Hyperéosinophilie sanguine majeure' } },
    { id: 'coin_lesion', system: 'respiratory', label: { ar: 'عقدة رئوية كروية منعزلة بالأشعة السينية تشبه الورم', en: 'Solitary circular "coin lesion" on chest radiograph', fr: 'Nodule pulmonaire en "pièce de monnaie" à la radio' } },
  ];

  const [selectedHost, setSelectedHost] = useState<string>('sheep');
  const [selectedSystem, setSelectedSystem] = useState<string>('hepato');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['bottle_jaw', 'severe_anemia']);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Diagnostic match algorithm
  const matchedDifferentials = useMemo(() => {
    return allParasites.map((parasite) => {
      let score = 0;
      const reasons: string[] = [];

      // Check host compatibility
      const hostText = (parasite.hosts.definitive.en + parasite.hosts.intermediate.en + parasite.animalImpact.speciesAffected.join(' ')).toLowerCase();
      if (selectedHost === 'sheep' && (hostText.includes('sheep') || hostText.includes('ruminant') || hostText.includes('ovine'))) {
        score += 35;
      } else if (selectedHost === 'cattle' && (hostText.includes('cattle') || hostText.includes('bovine'))) {
        score += 35;
      } else if (selectedHost === 'canine' && (hostText.includes('dog') || hostText.includes('canid'))) {
        score += 35;
      } else if (selectedHost === 'feline' && (hostText.includes('cat') || hostText.includes('felid'))) {
        score += 35;
      } else if (selectedHost === 'human' && (hostText.includes('human') || parasite.humanImpact.isZoonotic)) {
        score += 35;
      } else if (selectedHost === 'swine' && (hostText.includes('pig') || hostText.includes('swine'))) {
        score += 35;
      }

      // Check symptom triggers
      if (parasite.id === 'fasciola-hepatica') {
        if (selectedSymptoms.includes('bottle_jaw')) { score += 40; reasons.push('Bottle jaw edema characteristic of subacute/chronic fasciolosis'); }
        if (selectedSymptoms.includes('severe_anemia')) { score += 25; reasons.push('Hematophagic feeding of liver flukes induces profound anemia'); }
        if (selectedSymptoms.includes('hypereosinophilia')) { score += 20; reasons.push('Hepatic larval parenchymal migration causes marked eosinophilia'); }
      }

      if (parasite.id === 'giardia-duodenalis') {
        if (selectedSymptoms.includes('diarrhea_foul')) { score += 45; reasons.push('Malabsorptive foul greasy diarrhea from brush-border trophozoite blunting'); }
      }

      if (parasite.id === 'sarcoptes-scabiei') {
        if (selectedSymptoms.includes('pruritus_ears')) { score += 50; reasons.push('Pinna margins and intense allergic pruritus are hallmarks of sarcoptic mange'); }
      }

      if (parasite.id === 'toxoplasma-gondii') {
        if (selectedSymptoms.includes('abortion_last_trimester')) { score += 50; reasons.push('Primary cause of infectious ovine/caprine late-gestation abortion storms'); }
      }

      if (parasite.id === 'dirofilaria-immitis') {
        if (selectedSymptoms.includes('chronic_cough')) { score += 40; reasons.push('Endarteritis and adult worms in pulmonary arteries trigger cough and dyspnea'); }
        if (selectedSymptoms.includes('coin_lesion')) { score += 35; reasons.push('Human dead-end pulmonary infarction nodules mimic solitary coin lesions'); }
      }

      if (parasite.id === 'ascaris-lumbricoides') {
        if (selectedSymptoms.includes('worms_in_stool')) { score += 50; reasons.push('Spontaneous discharge of large cylindrical nematodes'); }
      }

      const clampedScore = Math.min(98, Math.max(15, score));
      return {
        parasite,
        matchScore: clampedScore,
        reasons
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .filter(m => m.matchScore >= 40);
  }, [selectedHost, selectedSystem, selectedSymptoms]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Introduction */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <Stethoscope className="w-4 h-4" />
            <span>{language === 'ar' ? 'التشخيص السريري المقارن' : language === 'fr' ? 'Triage Clinique Différentiel' : 'Clinical Differential Triage'}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {t.symptomCheckerTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {t.symptomCheckerSubtitle}
          </p>
        </div>
      </div>

      {/* Grid: Form Selection & Differential Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Host & Symptoms Checklist */}
        <div className="lg:col-span-6 space-y-5">
          
          {/* Step 1: Select Host */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.selectHost}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {hosts.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setSelectedHost(h.id)}
                  className={`p-3 rounded-lg border text-left rtl:text-right text-xs font-semibold transition-all ${
                    selectedHost === h.id
                      ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300 shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {h.label[language]}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Affected Organ System */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.selectOrganSystem}
            </h3>
            <div className="space-y-1.5">
              {organSystems.map((sys) => (
                <button
                  key={sys.id}
                  onClick={() => setSelectedSystem(sys.id)}
                  className={`w-full p-2.5 rounded-lg border text-left rtl:text-right text-xs font-medium transition-all ${
                    selectedSystem === sys.id
                      ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sys.label[language]}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Clinical Signs Checklist */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.selectSymptoms}
            </h3>
            <div className="space-y-2">
              {symptomsList.map((symptom) => {
                const isChecked = selectedSymptoms.includes(symptom.id);
                return (
                  <label
                    key={symptom.id}
                    onClick={() => toggleSymptom(symptom.id)}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-emerald-950/20 border-emerald-500/60 text-slate-100'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 rounded border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 bg-slate-900"
                    />
                    <span className="text-xs leading-relaxed select-none">
                      {symptom.label[language]}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Ranked Parasitic Hypotheses */}
        <div className="lg:col-span-6 space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {t.differentialMatches} ({matchedDifferentials.length})
              </h3>
              <span className="text-[11px] text-slate-500 font-mono">
                {language === 'ar' ? 'مرتبة حسب قوة الشواهد' : 'Ranked by clinical index'}
              </span>
            </div>

            {matchedDifferentials.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-xs">
                {language === 'ar'
                  ? 'لم يتم العثور على تطابق كافٍ. جرب اختيار أعراض أخرى أو تغيير نوع العائل.'
                  : 'No high-confidence match found. Adjust symptoms or selected host.'}
              </div>
            ) : (
              <div className="space-y-4">
                {matchedDifferentials.map(({ parasite, matchScore, reasons }) => (
                  <div
                    key={parasite.id}
                    className="p-4 bg-slate-950 border border-slate-800 hover:border-emerald-500/50 rounded-xl transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-0.5">
                          <span className="text-emerald-400 font-semibold">{parasite.phylum}</span>
                          <span aria-hidden="true">·</span>
                          <span>{parasite.type}</span>
                        </div>
                        <h4 className="text-base font-bold text-white">
                          <span className="italic font-serif">{parasite.scientificName}</span>
                        </h4>
                        <p className="text-xs text-slate-300">
                          {parasite.commonNames[language]}
                        </p>
                      </div>

                      <div className="text-right rtl:text-left">
                        <span className="text-sm font-mono font-bold text-emerald-400">
                          {matchScore}%
                        </span>
                        <span className="block text-[10px] text-slate-500 uppercase tracking-wider">
                          {language === 'ar' ? 'مؤشر التوافق' : 'Confidence'}
                        </span>
                      </div>
                    </div>

                    {/* Diagnostic Test Recommendation */}
                    <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs space-y-1">
                      <div className="flex items-center gap-1.5 text-teal-400 font-semibold text-[11px]">
                        <TestTube2 className="w-3.5 h-3.5" />
                        <span>{t.recommendedTests}:</span>
                      </div>
                      <p className="text-slate-300 text-[11px] font-normal leading-relaxed">
                        {parasite.morphology.stainingAndDiagnosticMethods[language]}
                      </p>
                    </div>

                    {/* Action */}
                    <button
                      onClick={() => onSelectParasite(parasite)}
                      className="w-full py-2 px-3 bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white rounded-lg text-xs font-semibold border border-slate-800 hover:border-emerald-500 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>{t.viewDetails}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
