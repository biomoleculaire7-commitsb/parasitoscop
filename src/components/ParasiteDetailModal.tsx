import React, { useState } from 'react';
import { Parasite, Language } from '../types/parasite';
import { translations } from '../data/translations';
import { LifeCycleVisualizer } from './LifeCycleVisualizer';
import {
  X,
  Microscope,
  RotateCcw,
  Stethoscope,
  UserCheck,
  Pill,
  ShieldCheck,
  Video,
  BookOpen,
  Copy,
  Check,
  ExternalLink,
  Printer,
  AlertTriangle,
  Play,
  FileText,
  Box
} from 'lucide-react';

interface ParasiteDetailModalProps {
  parasite: Parasite | null;
  language: Language;
  onClose: () => void;
  onOpenReport: (parasite: Parasite) => void;
  onOpen3D?: (parasite: Parasite) => void;
}

export const ParasiteDetailModal: React.FC<ParasiteDetailModalProps> = ({
  parasite,
  language,
  onClose,
  onOpenReport,
  onOpen3D
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'lifecycle' | 'animal' | 'human' | 'treatment' | 'prevention' | 'media' | 'sources'>('overview');
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  if (!parasite) return null;
  const t = translations[language];

  const copyCitation = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(text);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const handlePrintCard = () => {
    window.print();
  };

  const cardDate = new Date().toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const tabs = [
    { id: 'overview', label: language === 'ar' ? 'نظرة عامة ومجهرية' : language === 'fr' ? 'Aperçu & Morphologie' : 'Overview & Morphology', icon: Microscope },
    { id: 'lifecycle', label: t.lifeCycle, icon: RotateCcw },
    { id: 'animal', label: t.animalSymptoms, icon: Stethoscope },
    { id: 'human', label: t.humanSymptoms, icon: UserCheck },
    { id: 'treatment', label: language === 'ar' ? 'بروتوكولات العلاج' : language === 'fr' ? 'Traitements' : 'Treatment Protocols', icon: Pill },
    { id: 'prevention', label: language === 'ar' ? 'الوقاية والأمن الحيوي' : language === 'fr' ? 'Prophylaxie' : 'Prevention & Biosecurity', icon: ShieldCheck },
    { id: 'media', label: t.videosAndVisuals, icon: Video },
    { id: 'sources', label: t.scientificSources, icon: BookOpen },
  ] as const;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto print:static print:p-0 print:m-0 print:bg-white print:overflow-visible print:block print:w-full print:h-auto print:inset-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh] print:max-w-none print:w-full print:m-0 print:border-none print:shadow-none print:bg-white print:text-black print:overflow-visible print:block print:max-h-none print:rounded-none">
        
        {/* Modal Top Header (Screen only) */}
        <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4 no-print print:hidden">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <span className="font-semibold text-emerald-400">{parasite.phylum}</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>{parasite.class}</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>{parasite.order}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              <span className="italic font-serif">{parasite.scientificName}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
              {parasite.commonNames[language]}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {onOpen3D && (
              <button
                onClick={() => {
                  onClose();
                  onOpen3D(parasite);
                }}
                className="flex items-center gap-1 px-3 py-1.5 bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 rounded-lg text-xs font-semibold border border-cyan-500/40 transition-colors cursor-pointer"
                title={language === 'ar' ? 'معاينة ثلاثية الأبعاد 3D' : 'Explore in 3D'}
              >
                <Box className="w-3.5 h-3.5 text-cyan-400" />
                <span>3D</span>
              </button>
            )}
            {/* Dedicated Print Card Button */}
            <button
              onClick={handlePrintCard}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              title={t.printCard || 'Print Card'}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.printCard || 'Print Card'}</span>
            </button>
            <button
              onClick={() => onOpenReport(parasite)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              title={t.exportReport}
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.exportReport}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Header (Scrollable on mobile) */}
        <div className="flex items-center overflow-x-auto border-b border-slate-800 bg-slate-950/60 px-4 py-2 gap-1.5 scrollbar-none no-print print:hidden">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg shrink-0 transition-colors ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body (Screen only) */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-200 text-xs sm:text-sm no-print print:hidden">
          
          {/* TAB 1: OVERVIEW & MORPHOLOGY */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Zoonotic Hazard Box */}
              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-200">{t.zoonoticRisk}:</span>
                    <span className="font-semibold text-amber-400 uppercase tracking-wide">
                      {parasite.zoonoticRisk}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed font-normal">
                    {parasite.humanImpact.isZoonotic
                      ? (language === 'ar' ? 'طفيلي مشترك ينتقل بين الحيوان والإنسان؛ يتطلب احتياطات صحية وأمناً حيوياً صارماً.' : language === 'fr' ? 'Zoonose transmissible entre l\'animal et l\'homme requérant une prophylaxie stricte.' : 'Zoonotic pathogen transmissible between animals and humans; requires strict biosecurity.')
                      : (language === 'ar' ? 'طفيلي متخصص بالحيوانات ولا ينتقل إلى الإنسان.' : language === 'fr' ? 'Parasite strictement vétérinaire non zoonotique.' : 'Species-specific veterinary parasite with no proven human transmission.')}
                  </p>
                </div>
              </div>

              {/* Hosts & Transmission Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                    {t.definitiveHost}
                  </h4>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    {parasite.hosts.definitive[language]}
                  </p>
                </div>

                <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                    {t.intermediateHost}
                  </h4>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    {parasite.hosts.intermediate[language]}
                  </p>
                </div>
              </div>

              {/* Transmission Mode */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  {t.transmission}
                </h4>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {parasite.transmission[language]}
                </p>
              </div>

              {/* Microscopic Characteristics */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  {t.microscopicFeatures}
                </h4>
                <div className="text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-semibold">{language === 'ar' ? 'المقاييس والأبعاد:' : language === 'fr' ? 'Dimensions :' : 'Dimensions:'}</span>
                    <span className="font-mono text-emerald-300 font-bold">{parasite.morphology.dimensions}</span>
                  </div>
                  <p className="text-slate-300 font-normal leading-relaxed">
                    {parasite.morphology.microscopicFeatures[language]}
                  </p>
                </div>
              </div>

              {/* Staining & Laboratory Diagnostics */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  {t.stainingMethods}
                </h4>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {parasite.morphology.stainingAndDiagnosticMethods[language]}
                </p>
              </div>

              {/* Micrographs Gallery */}
              {parasite.sampleMicrographs.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    {language === 'ar' ? 'الشرائح المجهرية المرجعية' : language === 'fr' ? 'Micrographies de Référence' : 'Reference Micrographs'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {parasite.sampleMicrographs.map((img, i) => (
                      <div key={i} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                        <img
                          src={img.imageUrl}
                          alt={img.title[language]}
                          className="w-full h-44 object-cover"
                        />
                        <div className="p-3 text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-200">{img.title[language]}</span>
                            <span className="font-mono text-[11px] text-teal-400">{img.magnification}</span>
                          </div>
                          <p className="text-slate-400 text-[11px] font-normal">
                            {img.description[language]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: LIFE CYCLE */}
          {activeTab === 'lifecycle' && (
            <LifeCycleVisualizer parasite={parasite} language={language} />
          )}

          {/* TAB 3: ANIMAL SYMPTOMS & PATHOLOGY */}
          {activeTab === 'animal' && (
            <div className="space-y-6">
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                    {language === 'ar' ? 'الأنواع الحيوانية المعرضة للإصابة' : language === 'fr' ? 'Espèces Animales Cibles' : 'Target Host Species'}
                  </h4>
                  <span className="text-[11px] font-semibold text-amber-400">
                    {language === 'ar' ? 'الشدة السريرية:' : language === 'fr' ? 'Sévérité :' : 'Severity:'} {parasite.animalImpact.severity}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {parasite.animalImpact.speciesAffected.map((sp, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 font-medium">
                      {sp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clinical Signs */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  {language === 'ar' ? 'العلامات والأعراض السريرية لدى الحيوان' : language === 'fr' ? 'Signes Cliniques Vétérinaires' : 'Veterinary Clinical Signs'}
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 font-normal">
                  {parasite.animalImpact.clinicalSigns[language].map((sign, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Veterinary Pathology */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  {language === 'ar' ? 'الآفات التشريحية المرضية في الحيوان' : language === 'fr' ? 'Lésions Anatomopathologiques' : 'Histopathology & Lesions'}
                </h4>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {parasite.animalImpact.pathology[language]}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: HUMAN IMPACT & ZOONOSIS */}
          {activeTab === 'human' && (
            <div className="space-y-6">
              
              {/* Incubation Period */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  {language === 'ar' ? 'فترة الحضانة لدى الإنسان' : language === 'fr' ? 'Période d\'Incubation' : 'Incubation Period'}
                </h4>
                <p className="text-xs text-slate-300 font-normal">
                  {parasite.humanImpact.incubationPeriod[language]}
                </p>
              </div>

              {/* Acute Symptoms */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  {language === 'ar' ? 'الأعراض والعلامات الحادة' : language === 'fr' ? 'Symptômes & Signes Aigus' : 'Acute Clinical Manifestations'}
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 font-normal">
                  {parasite.humanImpact.acuteSigns[language].map((sign, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chronic Complications */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-rose-400">
                  {language === 'ar' ? 'المضاعفات المزمنة والخطيرة' : language === 'fr' ? 'Complications Chroniques & Graves' : 'Chronic Complications & Risks'}
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 font-normal">
                  {parasite.humanImpact.chronicComplications[language].map((comp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 mt-0.5">•</span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* High Risk Groups */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  {language === 'ar' ? 'الفئات السكانية الأكثر عرضة للخطر' : language === 'fr' ? 'Populations à Haut Risque' : 'High-Risk Vulnerable Groups'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {parasite.humanImpact.highRiskGroups[language].map((grp, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 font-medium">
                      {grp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: TREATMENT PROTOCOLS */}
          {activeTab === 'treatment' && (
            <div className="space-y-6">
              
              {/* Veterinary Protocols */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  {t.treatmentVet}
                </h3>
                <div className="space-y-3">
                  {parasite.treatment.veterinary.firstLineDrugs.map((drug, i) => (
                    <div key={i} className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-100">{drug.drug}</span>
                        <span className="font-mono text-xs text-emerald-400 font-semibold">{drug.dosageGuideline}</span>
                      </div>
                      <p className="text-xs text-slate-400 font-normal">
                        {drug.note[language]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-amber-950/20 border border-amber-900/40 rounded-lg text-xs text-amber-300 font-normal">
                  <span className="font-bold">{language === 'ar' ? 'تنبيه بيطري:' : language === 'fr' ? 'Mise en garde :' : 'Veterinary Caution:'} </span>
                  {parasite.treatment.veterinary.precautions[language]}
                </div>
              </div>

              {/* Human Protocols */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h3 className="text-xs uppercase font-bold tracking-wider text-teal-400">
                  {t.treatmentHuman}
                </h3>
                <div className="space-y-3">
                  {parasite.treatment.human.firstLineDrugs.map((drug, i) => (
                    <div key={i} className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-100">{drug.drug}</span>
                        <span className="font-mono text-xs text-teal-400 font-semibold">{drug.dosageGuideline}</span>
                      </div>
                      <p className="text-xs text-slate-400 font-normal">
                        {drug.note[language]}
                      </p>
                    </div>
                  ))}
                </div>

                {parasite.treatment.human.surgicalIntervention && (
                  <div className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1">
                    <span className="font-bold text-slate-200 text-xs block">
                      {language === 'ar' ? 'التدخل الجراحي والتنظيري:' : language === 'fr' ? 'Intervention Chirurgicale / Endoscopique :' : 'Surgical & Endoscopic Management:'}
                    </span>
                    <p className="text-xs text-slate-300 font-normal">
                      {parasite.treatment.human.surgicalIntervention[language]}
                    </p>
                  </div>
                )}

                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-400 font-normal">
                  <span className="font-bold text-slate-300">{language === 'ar' ? 'ملاحظة سريرية:' : language === 'fr' ? 'Remarque clinique :' : 'Clinical Note:'} </span>
                  {parasite.treatment.human.notes[language]}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: PREVENTION & BIOSECURITY */}
          {activeTab === 'prevention' && (
            <div className="space-y-6">
              
              {/* Veterinary Biosecurity */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  {t.preventionVet}
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 font-normal">
                  {parasite.prevention.veterinary[language].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Human Prevention */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-teal-400">
                  {t.preventionHuman}
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 font-normal">
                  {parasite.prevention.human[language].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Environmental Sanitation */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  {t.preventionEnv}
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 font-normal">
                  {parasite.prevention.environmental[language].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-slate-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 7: VIDEOS & VISUALS */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="space-y-4">
                {parasite.videos.map((vid) => {
                  const isPlaying = activeVideoId === vid.id;
                  return (
                    <div key={vid.id} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-200">{vid.title[language]}</span>
                          <span className="text-slate-500 font-mono">({vid.duration})</span>
                        </div>
                        <span className="text-emerald-400 font-medium text-[11px]">{vid.sourceName}</span>
                      </div>

                      <p className="text-xs text-slate-400 font-normal">
                        {vid.description[language]}
                      </p>

                      {/* Video Player */}
                      {isPlaying ? (
                        <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-black">
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${vid.youtubeId}?autoplay=1`}
                            title={vid.title[language]}
                            className="absolute inset-0 w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <div
                          onClick={() => setActiveVideoId(vid.id)}
                          className="relative h-44 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center cursor-pointer group hover:border-emerald-500/50 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                          <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/70 text-[10px] text-slate-300 rounded font-mono">
                            {vid.duration}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 8: SCIENTIFIC SOURCES & REFERENCES */}
          {activeTab === 'sources' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400 mb-2 font-normal">
                {language === 'ar'
                  ? 'المصادر والبروتوكولات الإرشادية المعتمدة من منظمة الصحة العالمية ومراكز مكافحة الأمراض والمنظمة العالمية لصحة الحيوان:'
                  : language === 'fr'
                  ? 'Références validées issues de l\'OMS, du CDC DPDx, de l\'OMSA et des revues biomédicales à comité de lecture :'
                  : 'Validated guidelines and monographs from WHO, CDC DPDx, WOAH, and peer-reviewed journals:'}
              </p>

              <div className="space-y-3">
                {parasite.scientificSources.map((source, idx) => (
                  <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-xs font-bold text-slate-200">
                          {source.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1">
                          <span className="text-emerald-400 font-semibold">{source.organization}</span>
                          <span aria-hidden="true">·</span>
                          <span>{source.year}</span>
                          <span aria-hidden="true">·</span>
                          <span className="capitalize text-slate-500">{source.citationType}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => copyCitation(`${source.title}. ${source.organization} (${source.year}). ${source.url}`)}
                          className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                          title={t.copyCitation}
                        >
                          {copiedUrl === `${source.title}. ${source.organization} (${source.year}). ${source.url}` ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded transition-colors"
                          title="Open Link"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Actions (Screen only) */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3 no-print print:hidden">
          <p className="text-[11px] text-slate-500 hidden sm:block truncate">
            {parasite.scientificName} · {parasite.phylum} · {parasite.family}
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {onOpen3D && (
              <button
                onClick={() => {
                  onClose();
                  onOpen3D(parasite);
                }}
                className="flex items-center justify-center gap-1 px-3 py-2 bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 rounded-lg text-xs font-semibold border border-cyan-500/40 transition-colors cursor-pointer"
                title={language === 'ar' ? 'معاينة ثلاثية الأبعاد 3D' : 'Explore in 3D'}
              >
                <Box className="w-3.5 h-3.5 text-cyan-400" />
                <span>3D</span>
              </button>
            )}
            {/* Dedicated Print Card Button */}
            <button
              onClick={handlePrintCard}
              className="flex items-center justify-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.printCard || 'Print Card'}</span>
            </button>
            <button
              onClick={() => onOpenReport(parasite)}
              className="flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.exportReport}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        </div>

        {/* DEDICATED PRINTABLE PARASITE MONOGRAPH CARD (Visible ONLY in print) */}
        <div className="hidden print:block p-8 bg-white text-slate-950 font-sans text-[11px] leading-relaxed space-y-4 print:p-0">
          
          {/* Header Banner */}
          <div className="border-b-2 border-slate-900 pb-3 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-emerald-800">
                <Microscope className="w-3.5 h-3.5 inline" />
                <span>ParasitoScope · Official Academic Monograph Card</span>
                <span>·</span>
                <span>CDC DPDx / WHO / WOAH Reference</span>
              </div>
              <h1 className="text-2xl font-bold font-serif italic text-slate-950 tracking-tight">
                {parasite.scientificName}
              </h1>
              <div className="text-xs text-slate-700 font-medium flex flex-wrap items-center gap-3">
                <span><strong className="text-slate-900">AR:</strong> {parasite.commonNames.ar}</span>
                <span className="text-slate-400">|</span>
                <span><strong className="text-slate-900">EN:</strong> {parasite.commonNames.en}</span>
                <span className="text-slate-400">|</span>
                <span><strong className="text-slate-900">FR:</strong> {parasite.commonNames.fr}</span>
              </div>
            </div>

            <div className="text-right text-[10px] space-y-1 shrink-0">
              <div className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 border border-slate-300 rounded">
                CARD ID: {parasite.id.toUpperCase()}-{parasite.phylum.slice(0, 3).toUpperCase()}
              </div>
              <div className="text-slate-600">{cardDate}</div>
              <div className={`px-2 py-0.5 rounded font-bold uppercase text-[9px] border ${
                parasite.zoonoticRisk === 'very_high' || parasite.zoonoticRisk === 'high'
                  ? 'bg-amber-50 text-amber-900 border-amber-300'
                  : 'bg-emerald-50 text-emerald-900 border-emerald-300'
              }`}>
                {parasite.zoonoticRisk === 'very_high' ? '⚠ Very High Zoonotic Risk' :
                 parasite.zoonoticRisk === 'high' ? '⚠ High Zoonotic Risk' :
                 parasite.zoonoticRisk === 'moderate' ? 'Moderate Zoonotic Risk' :
                 'Low / Host-Specific'}
              </div>
            </div>
          </div>

          {/* 1. Taxonomy & Classification Table */}
          <div className="border border-slate-300 rounded overflow-hidden print-break-inside-avoid">
            <div className="bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-800 uppercase tracking-wider border-b border-slate-300">
              Taxonomic Hierarchy & Classification
            </div>
            <div className="grid grid-cols-6 divide-x divide-slate-200 text-center py-1.5 text-[10px]">
              <div>
                <span className="block text-slate-500 font-semibold uppercase text-[9px]">Phylum</span>
                <span className="font-bold text-slate-900">{parasite.phylum}</span>
              </div>
              <div>
                <span className="block text-slate-500 font-semibold uppercase text-[9px]">Class</span>
                <span className="font-bold text-slate-900">{parasite.class}</span>
              </div>
              <div>
                <span className="block text-slate-500 font-semibold uppercase text-[9px]">Order</span>
                <span className="font-bold text-slate-900">{parasite.order}</span>
              </div>
              <div>
                <span className="block text-slate-500 font-semibold uppercase text-[9px]">Family</span>
                <span className="font-bold text-slate-900">{parasite.family}</span>
              </div>
              <div>
                <span className="block text-slate-500 font-semibold uppercase text-[9px]">Genus</span>
                <span className="font-bold text-slate-900 italic">{parasite.genus}</span>
              </div>
              <div>
                <span className="block text-slate-500 font-semibold uppercase text-[9px]">Species</span>
                <span className="font-bold text-slate-900 italic">{parasite.species}</span>
              </div>
            </div>
          </div>

          {/* 2. Microscopic & Diagnostic Morphometrics */}
          <div className="border border-slate-300 rounded p-3 space-y-2 print-break-inside-avoid">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1">
              <span className="font-bold uppercase tracking-wider text-[10px] text-slate-800">
                1. Microscopic Identification & Diagnostic Morphometry
              </span>
              <span className="text-[10px] font-mono text-emerald-800 font-semibold">
                Type: {parasite.type.toUpperCase()}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-[10px]">
              <div className="bg-slate-50 p-2 rounded border border-slate-200">
                <span className="text-slate-500 font-bold block uppercase text-[9px]">Diagnostic Stage(s)</span>
                <span className="font-semibold text-slate-900">{parasite.morphology.diagnosticStages.join(', ')}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-200">
                <span className="text-slate-500 font-bold block uppercase text-[9px]">Micrometric Dimensions</span>
                <span className="font-semibold text-slate-900 font-mono">{parasite.morphology.dimensions}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-200">
                <span className="text-slate-500 font-bold block uppercase text-[9px]">Laboratory Staining & Methods</span>
                <span className="font-semibold text-slate-900">{parasite.morphology.stainingAndDiagnosticMethods[language]}</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-800 bg-slate-50 p-2 rounded border border-slate-200">
              <strong className="text-slate-900">Key Microscopic Features:</strong> {parasite.morphology.microscopicFeatures[language]}
            </div>
          </div>

          {/* 3. Host Range & Transmission Dynamic */}
          <div className="border border-slate-300 rounded p-3 space-y-2 print-break-inside-avoid">
            <div className="border-b border-slate-200 pb-1 font-bold uppercase tracking-wider text-[10px] text-slate-800">
              2. Host Spectrum & Transmission Dynamics
            </div>
            <div className="grid grid-cols-2 gap-3 text-[10px]">
              <div className="space-y-1">
                <div>
                  <strong className="text-slate-900">Definitive Host(s):</strong>{' '}
                  <span className="text-slate-800">{parasite.hosts.definitive[language]}</span>
                </div>
                <div>
                  <strong className="text-slate-900">Intermediate Host(s):</strong>{' '}
                  <span className="text-slate-800">{parasite.hosts.intermediate[language]}</span>
                </div>
              </div>
              <div className="space-y-1">
                <div>
                  <strong className="text-slate-900">Vectors / Reservoirs:</strong>{' '}
                  <span className="text-slate-800">
                    {parasite.hosts.vectors?.[language] || parasite.hosts.accidentalOrDeadEnd?.[language] || (language === 'ar' ? 'غير مسجل ناقل بيولوجي' : 'None reported / Direct')}
                  </span>
                </div>
                <div>
                  <strong className="text-slate-900">Transmission Route:</strong>{' '}
                  <span className="text-slate-800">{parasite.transmission[language]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Biological Life Cycle & Progression */}
          <div className="border border-slate-300 rounded p-3 space-y-2 print-break-inside-avoid">
            <div className="border-b border-slate-200 pb-1 font-bold uppercase tracking-wider text-[10px] text-slate-800 flex items-center justify-between">
              <span>3. Biological Life Cycle Stages & Progression</span>
              <span className="text-[9px] text-slate-500 font-normal">🔬 Diagnostic Stage | ⚡ Infective Stage</span>
            </div>
            <p className="text-[10px] text-slate-700 leading-normal italic">
              {parasite.lifeCycle.summary[language]}
            </p>
            <div className="border border-slate-200 rounded overflow-hidden">
              <table className="w-full text-left border-collapse text-[10px]">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-[9px] uppercase border-b border-slate-200">
                    <th className="p-1.5 w-8 text-center">#</th>
                    <th className="p-1.5 w-40">Stage Title</th>
                    <th className="p-1.5 w-24">Host / Site</th>
                    <th className="p-1.5 w-16 text-center">Status</th>
                    <th className="p-1.5">Biological Progression</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {parasite.lifeCycle.stages.map((st) => (
                    <tr key={st.stageNumber} className="hover:bg-slate-50">
                      <td className="p-1.5 text-center font-bold text-slate-700 font-mono">{st.stageNumber}</td>
                      <td className="p-1.5 font-bold text-slate-900">{st.title[language]}</td>
                      <td className="p-1.5 text-slate-600">{st.location[language]}</td>
                      <td className="p-1.5 text-center whitespace-nowrap">
                        {st.isDiagnostic && <span className="text-blue-700 font-bold" title="Diagnostic Stage">🔬 </span>}
                        {st.isInfective && <span className="text-amber-700 font-bold" title="Infective Stage">⚡</span>}
                      </td>
                      <td className="p-1.5 text-slate-800">{st.description[language]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. Clinical Manifestations & Pathology (Side by Side) */}
          <div className="grid grid-cols-2 gap-3 print-break-inside-avoid">
            {/* Veterinary Impact */}
            <div className="border border-slate-300 rounded p-3 space-y-1.5">
              <div className="border-b border-slate-200 pb-1 font-bold uppercase tracking-wider text-[10px] text-slate-800 flex items-center justify-between">
                <span>4A. Veterinary Manifestations</span>
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded">
                  Severity: {parasite.animalImpact.severity}
                </span>
              </div>
              <div className="text-[10px]">
                <strong className="text-slate-900">Species Affected:</strong> {parasite.animalImpact.speciesAffected.join(', ')}
              </div>
              <div>
                <strong className="text-[10px] text-slate-900 block mb-0.5">Clinical Signs:</strong>
                <ul className="list-disc list-inside text-[9.5px] text-slate-800 space-y-0.5">
                  {parasite.animalImpact.clinicalSigns[language].map((sign, idx) => (
                    <li key={idx}>{sign}</li>
                  ))}
                </ul>
              </div>
              <div className="text-[9.5px] text-slate-800 pt-1 border-t border-slate-100">
                <strong className="text-slate-900">Pathology & Lesions:</strong> {parasite.animalImpact.pathology[language]}
              </div>
            </div>

            {/* Human Impact */}
            <div className="border border-slate-300 rounded p-3 space-y-1.5">
              <div className="border-b border-slate-200 pb-1 font-bold uppercase tracking-wider text-[10px] text-slate-800 flex items-center justify-between">
                <span>4B. Human Pathology & Public Health</span>
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded">
                  {parasite.humanImpact.isZoonotic ? 'Zoonotic' : 'Non-Zoonotic'}
                </span>
              </div>
              <div className="text-[10px]">
                <strong className="text-slate-900">Incubation / Prepatent:</strong> {parasite.humanImpact.incubationPeriod[language]}
              </div>
              <div>
                <strong className="text-[10px] text-slate-900 block mb-0.5">Acute Clinical Signs:</strong>
                <ul className="list-disc list-inside text-[9.5px] text-slate-800 space-y-0.5">
                  {parasite.humanImpact.acuteSigns[language].map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="text-[9.5px] text-slate-800 pt-1 border-t border-slate-100">
                <strong className="text-slate-900">Chronic Complications:</strong> {parasite.humanImpact.chronicComplications[language].join('; ')}
              </div>
              <div className="text-[9.5px] text-slate-800">
                <strong className="text-slate-900">High Risk Groups:</strong> {parasite.humanImpact.highRiskGroups[language].join('; ')}
              </div>
            </div>
          </div>

          {/* 6. Therapeutic Guidelines & Pharmacology */}
          <div className="border border-slate-300 rounded p-3 space-y-2 print-break-inside-avoid">
            <div className="border-b border-slate-200 pb-1 font-bold uppercase tracking-wider text-[10px] text-slate-800">
              5. Standard Treatment Regimens & Pharmacotherapy
            </div>
            <div className="grid grid-cols-2 gap-3 text-[10px]">
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block uppercase text-[9px] text-emerald-800">Veterinary Protocols</span>
                <div className="space-y-1">
                  {parasite.treatment.veterinary.firstLineDrugs.map((dr, idx) => (
                    <div key={idx} className="bg-slate-50 p-1.5 rounded border border-slate-200">
                      <span className="font-bold text-slate-900">{dr.drug}</span>
                      <span className="text-slate-600 font-mono text-[9px] block">{dr.dosageGuideline}</span>
                      <span className="text-slate-700 text-[9px]">{dr.note[language]}</span>
                    </div>
                  ))}
                </div>
                <div className="text-[9px] text-slate-600 italic">
                  <strong>Precautions:</strong> {parasite.treatment.veterinary.precautions[language]}
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-900 block uppercase text-[9px] text-blue-800">Human Medical Management</span>
                <div className="space-y-1">
                  {parasite.treatment.human.firstLineDrugs.map((dr, idx) => (
                    <div key={idx} className="bg-slate-50 p-1.5 rounded border border-slate-200">
                      <span className="font-bold text-slate-900">{dr.drug}</span>
                      <span className="text-slate-600 font-mono text-[9px] block">{dr.dosageGuideline}</span>
                      <span className="text-slate-700 text-[9px]">{dr.note[language]}</span>
                    </div>
                  ))}
                </div>
                {parasite.treatment.human.surgicalIntervention && (
                  <div className="text-[9px] text-slate-700">
                    <strong>Surgical:</strong> {parasite.treatment.human.surgicalIntervention[language]}
                  </div>
                )}
                <div className="text-[9px] text-slate-600 italic">
                  <strong>Notes:</strong> {parasite.treatment.human.notes[language]}
                </div>
              </div>
            </div>
          </div>

          {/* 7. Prophylaxis & Biosecurity */}
          <div className="border border-slate-300 rounded p-3 space-y-1.5 print-break-inside-avoid">
            <div className="border-b border-slate-200 pb-1 font-bold uppercase tracking-wider text-[10px] text-slate-800">
              6. Prophylaxis, Biosecurity & Public Health Control
            </div>
            <div className="grid grid-cols-3 gap-2 text-[9.5px]">
              <div className="bg-slate-50 p-2 rounded border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold text-[9px] uppercase text-emerald-800">Veterinary Biosecurity</strong>
                <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                  {parasite.prevention.veterinary[language].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold text-[9px] uppercase text-blue-800">Human Sanitation</strong>
                <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                  {parasite.prevention.human[language].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold text-[9px] uppercase text-amber-800">Environmental Control</strong>
                <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                  {parasite.prevention.environmental[language].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 8. Accredited Reference Sources */}
          <div className="border border-slate-300 rounded p-3 space-y-1.5 print-break-inside-avoid">
            <div className="border-b border-slate-200 pb-1 font-bold uppercase tracking-wider text-[10px] text-slate-800">
              7. Accredited Scientific Citations & References
            </div>
            <div className="space-y-1 text-[9px] text-slate-700">
              {parasite.scientificSources.map((src, idx) => (
                <div key={idx} className="flex items-start gap-1">
                  <span className="font-bold text-slate-900 shrink-0">[{idx + 1}]</span>
                  <span>
                    <strong className="text-slate-900">{src.organization} ({src.year}).</strong> {src.title}. <em>[{src.citationType}]</em> — {src.url}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Formal Footer */}
          <div className="pt-2 border-t-2 border-slate-900 flex items-center justify-between text-[9px] text-slate-500 print-break-inside-avoid">
            <div>
              <strong>ParasitoScope Monograph Framework</strong> · Verified Clinical Diagnostic Standard
            </div>
            <div className="text-right">
              Generated: {cardDate} · Confidential Clinical & Academic Record
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
