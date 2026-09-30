import React, { useState } from 'react';
import { Parasite, Language } from '../types/parasite';
import { translations } from '../data/translations';
import { X, Printer, Microscope, ShieldAlert, Award } from 'lucide-react';

interface LabReportModalProps {
  parasite: Parasite | null;
  language: Language;
  onClose: () => void;
}

export const LabReportModal: React.FC<LabReportModalProps> = ({
  parasite,
  language,
  onClose
}) => {
  if (!parasite) return null;
  const t = translations[language];

  const [patientId] = useState(`VET-LAB-${Math.floor(100000 + Math.random() * 900000)}`);
  const [reportDate] = useState(new Date().toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
        
        {/* Controls bar */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between no-print">
          <span className="text-xs font-semibold text-slate-400">
            {language === 'ar' ? 'معاينة التقرير المخبري المعتمد' : 'Official Laboratory Diagnostic Report'}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.printReport}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 overflow-y-auto space-y-6 bg-white text-slate-900 font-sans text-xs print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-lg font-black tracking-tight uppercase text-slate-950">
                ParasitoScope Diagnostic Laboratory
              </h1>
              <p className="text-[11px] text-slate-600">
                {language === 'ar' ? 'مركز التشخيص السريري للأمراض الطفيلية والمشتركة' : 'Clinical Parasitology & Zoonotic Surveillance Center'}
              </p>
            </div>
            <div className="text-right rtl:text-left text-[11px] space-y-0.5">
              <p><span className="font-bold">Doc ID:</span> {patientId}</p>
              <p><span className="font-bold">Date:</span> {reportDate}</p>
            </div>
          </div>

          {/* Patient / Specimen Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-100 p-3 rounded-lg text-[11px]">
            <div>
              <span className="text-slate-500 font-bold block">SPECIMEN</span>
              <span className="font-semibold text-slate-900">Microscopic Slide / Feces</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block">TARGET HOST</span>
              <span className="font-semibold text-slate-900">{parasite.hosts.definitive[language]}</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block">METHOD</span>
              <span className="font-semibold text-slate-900">Direct Smear / Sed / PCR</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block">ZOONOSIS</span>
              <span className="font-bold text-rose-700 uppercase">{parasite.zoonoticRisk}</span>
            </div>
          </div>

          {/* Parasite Identification */}
          <div className="border border-slate-300 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  IDENTIFIED PARASITE
                </span>
                <h2 className="text-base font-bold text-slate-950 italic font-serif">
                  {parasite.scientificName}
                </h2>
                <p className="text-xs text-slate-700 font-medium">
                  {parasite.commonNames[language]}
                </p>
              </div>
              <div className="text-right rtl:text-left text-[11px] text-slate-600">
                <span className="block font-semibold">{parasite.phylum} / {parasite.class}</span>
                <span className="block">{parasite.family}</span>
              </div>
            </div>

            {/* Diagnostic Morphological Features */}
            <div className="space-y-1 text-slate-800">
              <span className="font-bold text-[11px] block uppercase text-slate-700">
                Morphological Findings & Diagnostic Markers:
              </span>
              <p className="text-[11px] leading-relaxed">
                {parasite.morphology.microscopicFeatures[language]}
              </p>
              <p className="text-[11px] font-mono text-slate-600 pt-0.5">
                Observed Dimensions: {parasite.morphology.dimensions} · Diagnostic Stages: {parasite.morphology.diagnosticStages.join(', ')}
              </p>
            </div>
          </div>

          {/* Treatment & Clinical Protocol */}
          <div className="space-y-2">
            <h3 className="font-bold text-xs uppercase text-slate-900 border-b border-slate-200 pb-1">
              Therapeutic Protocol & Management:
            </h3>
            
            <div className="space-y-2 text-[11px]">
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="font-bold text-slate-900 block">Veterinary Protocol:</span>
                {parasite.treatment.veterinary.firstLineDrugs.map((d, i) => (
                  <p key={i} className="text-slate-700">
                    • <span className="font-semibold">{d.drug}:</span> {d.dosageGuideline} ({d.note[language]})
                  </p>
                ))}
              </div>

              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="font-bold text-slate-900 block">Human / Medical Protocol:</span>
                {parasite.treatment.human.firstLineDrugs.map((d, i) => (
                  <p key={i} className="text-slate-700">
                    • <span className="font-semibold">{d.drug}:</span> {d.dosageGuideline} ({d.note[language]})
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Prevention & Biosecurity */}
          <div className="space-y-1 text-[11px]">
            <h3 className="font-bold text-xs uppercase text-slate-900 border-b border-slate-200 pb-1">
              Biosecurity & Control:
            </h3>
            <ul className="list-disc ltr:pl-4 rtl:pr-4 text-slate-700 space-y-0.5">
              {parasite.prevention.veterinary[language].slice(0, 2).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              {parasite.prevention.human[language].slice(0, 2).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* References & Signatures */}
          <div className="pt-4 border-t-2 border-slate-900 flex items-end justify-between text-[10px] text-slate-600">
            <div>
              <p className="font-bold text-slate-800">Authoritative Standards:</p>
              <p>CDC DPDx · World Health Organization (WHO) · WOAH Terrestrial Manual</p>
            </div>
            <div className="text-center">
              <div className="w-36 border-b border-slate-900 mb-1" />
              <p className="font-bold text-slate-800">Veterinary Parasitologist</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
