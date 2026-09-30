import React from 'react';
import { Parasite, Language } from '../types/parasite';
import { translations } from '../data/translations';
import { ArrowRight, AlertTriangle, ShieldCheck, Video, Microscope, FileText, Box } from 'lucide-react';

interface ParasiteCardProps {
  parasite: Parasite;
  language: Language;
  onSelect: (parasite: Parasite) => void;
  onOpenReport?: (parasite: Parasite) => void;
  onOpen3D?: (parasite: Parasite) => void;
}

export const ParasiteCard: React.FC<ParasiteCardProps> = ({
  parasite,
  language,
  onSelect,
  onOpenReport,
  onOpen3D
}) => {
  const t = translations[language];

  const getRiskLabel = (risk: Parasite['zoonoticRisk']) => {
    switch (risk) {
      case 'very_high':
        return { text: t.riskVeryHigh, color: 'text-rose-400' };
      case 'high':
        return { text: t.riskHigh, color: 'text-amber-400' };
      case 'moderate':
        return { text: t.riskModerate, color: 'text-yellow-400' };
      case 'low':
        return { text: t.riskLow, color: 'text-emerald-400' };
      default:
        return { text: t.riskNone, color: 'text-slate-400' };
    }
  };

  const riskInfo = getRiskLabel(parasite.zoonoticRisk);

  const getTypeLabel = (type: Parasite['type']) => {
    switch (type) {
      case 'protozoa':
        return language === 'ar' ? 'أوالي مجهرية' : language === 'fr' ? 'Protozoaire' : 'Protozoa';
      case 'nematode':
        return language === 'ar' ? 'ديدان خيطية' : language === 'fr' ? 'Nématode' : 'Nematode';
      case 'cestode':
        return language === 'ar' ? 'ديدان شريطية' : language === 'fr' ? 'Cestode' : 'Cestode';
      case 'trematode':
        return language === 'ar' ? 'ديدان مثقوبة' : language === 'fr' ? 'Trématode' : 'Trematode';
      case 'ectoparasite':
        return language === 'ar' ? 'طفيلي خارجي' : language === 'fr' ? 'Ectoparasite' : 'Ectoparasite';
    }
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-all flex flex-col group hover:shadow-xl hover:shadow-emerald-950/20">
      
      {/* Top Header Section */}
      <div className="p-5 pb-3">
        {/* Unboxed clean metadata (Zero-pill discipline) */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-emerald-400">{getTypeLabel(parasite.type)}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{parasite.phylum}</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <AlertTriangle className={`w-3.5 h-3.5 ${riskInfo.color}`} />
            <span className={riskInfo.color}>{riskInfo.text}</span>
          </div>
        </div>

        {/* Scientific Name (Italic) & Localized Common Name */}
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
          <span className="italic font-serif">{parasite.scientificName}</span>
        </h3>
        <p className="text-xs text-slate-300 font-medium mt-0.5">
          {parasite.commonNames[language]}
        </p>
      </div>

      {/* Middle Specimen & Hosts Details */}
      <div className="px-5 py-3 bg-slate-950/50 border-y border-slate-800/60 text-xs space-y-2.5 flex-1">
        
        {/* Definitive Host */}
        <div>
          <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
            {t.definitiveHost}
          </span>
          <p className="text-slate-300 font-normal mt-0.5 line-clamp-1">
            {parasite.hosts.definitive[language]}
          </p>
        </div>

        {/* Intermediate Host */}
        <div>
          <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
            {t.intermediateHost}
          </span>
          <p className="text-slate-300 font-normal mt-0.5 line-clamp-1">
            {parasite.hosts.intermediate[language]}
          </p>
        </div>

        {/* Microscopic Dimensions & Diagnostic Stage */}
        <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/40">
          <span className="flex items-center gap-1.5">
            <Microscope className="w-3.5 h-3.5 text-teal-400" />
            <span className="font-mono text-slate-300">{parasite.morphology.dimensions}</span>
          </span>
          <span className="text-slate-400">
            {parasite.lifeCycle.stages.length} {language === 'ar' ? 'مراحل نمو' : language === 'fr' ? 'stades' : 'stages'}
          </span>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 bg-slate-900/90 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(parasite)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
        >
          <span>{t.viewDetails}</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
        </button>

        {onOpen3D && (
          <button
            onClick={() => onOpen3D(parasite)}
            className="px-2.5 py-2 text-slate-300 hover:text-cyan-300 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 border border-slate-700/80 hover:border-cyan-500/40"
            title={language === 'ar' ? 'معاينة ثلاثية الأبعاد 3D' : 'Explore in 3D'}
          >
            <Box className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-[10px]">3D</span>
          </button>
        )}

        {onOpenReport && (
          <button
            onClick={() => onOpenReport(parasite)}
            className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            title={t.exportReport}
          >
            <FileText className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
