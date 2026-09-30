import React, { useState } from 'react';
import { Parasite, Language, LifeCycleStage } from '../types/parasite';
import { translations } from '../data/translations';
import { CheckCircle2, ChevronRight, ChevronLeft, AlertCircle, Sparkles, MapPin } from 'lucide-react';

interface LifeCycleVisualizerProps {
  parasite: Parasite;
  language: Language;
}

export const LifeCycleVisualizer: React.FC<LifeCycleVisualizerProps> = ({ parasite, language }) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const t = translations[language];

  const stages = parasite.lifeCycle.stages;
  const currentStage: LifeCycleStage = stages[activeStageIndex] || stages[0];

  const getHostLabel = (hostType: LifeCycleStage['hostType']) => {
    switch (hostType) {
      case 'definitive':
        return language === 'ar' ? 'العائل النهائي' : language === 'fr' ? 'Hôte Définitif' : 'Definitive Host';
      case 'intermediate':
        return language === 'ar' ? 'العائل الوسيط' : language === 'fr' ? 'Hôte Intermédiaire' : 'Intermediate Host';
      case 'vector':
        return language === 'ar' ? 'الناقل الحشري' : language === 'fr' ? 'Vecteur' : 'Vector';
      case 'environment':
        return language === 'ar' ? 'البيئة الخارجية' : language === 'fr' ? 'Milieu Extérieur' : 'Environment';
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-6">
      
      {/* Overview Synopsis */}
      <div className="bg-slate-900/70 border border-slate-800/80 rounded-lg p-4">
        <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-1">
          {language === 'ar' ? 'ملخص دورة التطور البيولوجي' : language === 'fr' ? 'Résumé Biologique du Cycle' : 'Biological Life Cycle Summary'}
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed font-normal">
          {parasite.lifeCycle.summary[language]}
        </p>
      </div>

      {/* Stage Progress Step Bar */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>
            {language === 'ar' ? 'المراحل التطورية' : language === 'fr' ? 'Étapes Évolutives' : 'Developmental Stages'} ({activeStageIndex + 1} / {stages.length})
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[11px] text-teal-400">
              <span className="text-sm">🔬</span> {t.diagnosticStage}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-amber-400">
              <span className="text-sm">⚡</span> {t.infectiveStage}
            </span>
          </div>
        </div>

        {/* Steps tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {stages.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-2.5 rounded-lg text-left rtl:text-right border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950/40'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-xs font-mono font-bold">0{stage.stageNumber}</span>
                  <div className="flex items-center gap-1">
                    {stage.isDiagnostic && <span title={t.diagnosticStage} className="text-xs">🔬</span>}
                    {stage.isInfective && <span title={t.infectiveStage} className="text-xs">⚡</span>}
                  </div>
                </div>
                <span className="text-xs font-semibold line-clamp-1">
                  {stage.title[language]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Detailed Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              {language === 'ar' ? 'المرحلة' : language === 'fr' ? 'Stade' : 'Stage'} 0{currentStage.stageNumber}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-slate-100">
              {currentStage.title[language]}
            </h3>
          </div>

          {/* Host category indicator */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">
              {getHostLabel(currentStage.hostType)}
            </span>
            {currentStage.isDiagnostic && (
              <span className="text-[11px] text-teal-300 font-medium bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/60">
                🔬 {language === 'ar' ? 'عينة تشخيصية' : language === 'fr' ? 'Diagnostique' : 'Diagnostic'}
              </span>
            )}
            {currentStage.isInfective && (
              <span className="text-[11px] text-amber-300 font-medium bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">
                ⚡ {language === 'ar' ? 'طور معدي' : language === 'fr' ? 'Infectant' : 'Infective'}
              </span>
            )}
          </div>
        </div>

        {/* Anatomical Location */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 bg-slate-950/60 px-3 py-2 rounded-lg border border-slate-800/60">
          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="font-semibold text-slate-300">
            {language === 'ar' ? 'الموقع التشريحي / البيئي:' : language === 'fr' ? 'Localisation Anatomique / Milieu :' : 'Anatomical / Environmental Location:'}
          </span>
          <span className="text-slate-200">{currentStage.location[language]}</span>
        </div>

        {/* Comprehensive Description */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal mb-5">
          {currentStage.description[language]}
        </p>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
          <button
            onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeStageIndex === 0}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{language === 'ar' ? 'المرحلة السابقة' : language === 'fr' ? 'Précédent' : 'Previous'}</span>
          </button>

          <button
            onClick={() => setActiveStageIndex((prev) => Math.min(stages.length - 1, prev + 1))}
            disabled={activeStageIndex === stages.length - 1}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            <span>{language === 'ar' ? 'المرحلة التالية' : language === 'fr' ? 'Suivant' : 'Next'}</span>
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};
