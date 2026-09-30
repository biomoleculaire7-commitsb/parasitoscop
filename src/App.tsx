import React, { useState, useEffect } from 'react';
import { Language, Parasite } from './types/parasite';
import { translations } from './data/translations';
import { allParasites, filterParasites } from './data';
import { Header } from './components/Header';
import { ParasiteCard } from './components/ParasiteCard';
import { ParasiteDetailModal } from './components/ParasiteDetailModal';
import { SymptomChecker } from './components/SymptomChecker';
import { VideoLibrary } from './components/VideoLibrary';
import { ParasitologyQuiz } from './components/ParasitologyQuiz';
import { LabReportModal } from './components/LabReportModal';
import { StudentHub } from './components/StudentHub';
import { ParasiteSimulator3D } from './components/ParasiteSimulator3D';
import {
  Microscope,
  BookOpen,
  ShieldCheck,
  AlertTriangle,
  Stethoscope,
  Video,
  Award,
  Sparkles,
  Search,
  Filter,
  Box
} from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [currentTab, setCurrentTab] = useState<'catalog' | 'studentHub' | 'simulator3d' | 'symptoms' | 'videos' | 'quiz'>('catalog');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [selectedParasite, setSelectedParasite] = useState<Parasite | null>(null);
  const [reportParasite, setReportParasite] = useState<Parasite | null>(null);
  const [active3DParasiteId, setActive3DParasiteId] = useState<string>('giardia-lamblia');

  const handleOpen3D = (parasite: Parasite) => {
    setActive3DParasiteId(parasite.id);
    setCurrentTab('simulator3d');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[language];

  // Update HTML lang and dir attribute for Arabic RTL / English & French LTR
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const filteredList = filterParasites(searchQuery, typeFilter, language);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Top Navbar */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        language={language}
        setLanguage={setLanguage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Container */}
      <main className={`flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 ${selectedParasite || reportParasite ? 'print:hidden' : ''}`}>
        
        {/* TAB 1: ENCYCLOPEDIA / CATALOG */}
        {currentTab === 'catalog' && (
          <div className="space-y-8">
            
            {/* Hero Banner */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 p-6 sm:p-10 overflow-hidden shadow-2xl">
              <div className="relative z-10 max-w-3xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CDC DPDx · WHO · WOAH Guidelines</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {t.appTitle}
                </h1>
                <p className="text-xs sm:text-base text-slate-300 font-normal leading-relaxed">
                  {t.appSubtitle}
                </p>

                {/* Key Quick Stats */}
                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white font-mono">{allParasites.length}</span>
                    <span>{language === 'ar' ? 'طفيليات سريرية مفصلة' : 'Detailed Parasites'}</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-emerald-400 font-mono">100%</span>
                    <span>{language === 'ar' ? 'دورات حياة ومصادر معتمدة' : 'Interactive Life Cycles & Sources'}</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-teal-400 font-mono">CDC · WHO · WOAH</span>
                    <span>{language === 'ar' ? 'مراجع ومصادر دولية' : 'Accredited Guidelines'}</span>
                  </div>
                </div>

                {/* Direct CTA button to 3D Lab & Student Hub */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setCurrentTab('simulator3d')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-emerald-950/50"
                  >
                    <Box className="w-4 h-4 text-emerald-200" />
                    <span>
                      {language === 'ar'
                        ? 'المحاكي المجهري ثلاثي الأبعاد 3D'
                        : language === 'fr'
                        ? 'Simulateur 3D Microscopique'
                        : '3D Virtual Microscope Lab'}
                    </span>
                  </button>

                  <button
                    onClick={() => setCurrentTab('studentHub')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 rounded-xl text-xs font-semibold transition-all"
                  >
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    <span>
                      {language === 'ar'
                        ? 'مرجع ومصادر الطلاب'
                        : language === 'fr'
                        ? 'Référentiel Étudiants & Sources'
                        : 'Student Academic Reference'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute top-1/2 -translate-y-1/2 ltr:-right-10 rtl:-left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Filter Tabs & Search Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
              
              {/* Interactive Segmented Control */}
              <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto scrollbar-none">
                {[
                  { id: 'all', label: t.filterAll },
                  { id: 'protozoa', label: t.filterProtozoa },
                  { id: 'nematode', label: t.filterNematodes },
                  { id: 'cestode', label: t.filterCestodes },
                  { id: 'trematode', label: t.filterTrematodes },
                  { id: 'ectoparasite', label: t.filterEctoparasites },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setTypeFilter(tab.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg shrink-0 transition-colors ${
                      typeFilter === tab.id
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Counter Indicator */}
              <div className="text-xs text-slate-400 font-medium">
                {language === 'ar' ? 'عرض' : 'Showing'} <span className="text-emerald-400 font-bold">{filteredList.length}</span> {language === 'ar' ? 'طفيلي' : 'parasites'}
              </div>
            </div>

            {/* Parasite Cards Grid */}
            {filteredList.length === 0 ? (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
                <Search className="w-8 h-8 text-slate-600 mx-auto" />
                <h3 className="text-sm font-bold text-slate-300">
                  {language === 'ar' ? 'لا توجد نتائج مطابقة لبحثك' : 'No matching parasites found'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'ar' ? 'جرب البحث بكلمات أخرى أو تغيير الفلتر.' : 'Try adjusting your search terms or filter.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredList.map((parasite) => (
                  <ParasiteCard
                    key={parasite.id}
                    parasite={parasite}
                    language={language}
                    onSelect={(p) => setSelectedParasite(p)}
                    onOpenReport={(p) => setReportParasite(p)}
                    onOpen3D={handleOpen3D}
                  />
                ))}
              </div>
            )}

          </div>
        )}

        {/* TAB 2: STUDENT ACADEMIC REFERENCE & SOURCES HUB */}
        {currentTab === 'studentHub' && (
          <StudentHub
            language={language}
            onSelectParasite={(p) => setSelectedParasite(p)}
          />
        )}

        {/* TAB 3: 3D VIRTUAL MICROSCOPE & MORPHOLOGY SIMULATOR */}
        {currentTab === 'simulator3d' && (
          <ParasiteSimulator3D
            language={language}
            initialParasiteId={active3DParasiteId}
            onSelectParasite={(p) => setSelectedParasite(p)}
          />
        )}

        {/* TAB 4: DIFFERENTIAL DIAGNOSIS */}
        {currentTab === 'symptoms' && (
          <SymptomChecker
            language={language}
            onSelectParasite={(p) => setSelectedParasite(p)}
          />
        )}

        {/* TAB 5: VIDEOS & ANIMATIONS */}
        {currentTab === 'videos' && (
          <VideoLibrary
            language={language}
            onSelectParasite={(p) => setSelectedParasite(p)}
          />
        )}

        {/* TAB 6: CLINICAL QUIZ */}
        {currentTab === 'quiz' && (
          <ParasitologyQuiz language={language} />
        )}

      </main>

      {/* Full Monograph Modal */}
      {selectedParasite && (
        <ParasiteDetailModal
          parasite={selectedParasite}
          language={language}
          onClose={() => setSelectedParasite(null)}
          onOpenReport={(p) => {
            setSelectedParasite(null);
            setReportParasite(p);
          }}
          onOpen3D={handleOpen3D}
        />
      )}

      {/* Printable Lab Report Modal */}
      {reportParasite && (
        <LabReportModal
          parasite={reportParasite}
          language={language}
          onClose={() => setReportParasite(null)}
        />
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Microscope className="w-4 h-4 text-emerald-500" />
              <span className="font-bold text-slate-300">ParasitoScope</span>
              <span className="text-slate-600">·</span>
              <span>Trilingual Scientific Parasitology Framework</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <span>CDC DPDx Protocols</span>
              <span aria-hidden="true">·</span>
              <span>WHO NTD Guidelines</span>
              <span aria-hidden="true">·</span>
              <span>WOAH Terrestrial Manual</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-600 leading-relaxed font-normal border-t border-slate-900/80 pt-4">
            {t.disclaimer}
          </p>
        </div>
      </footer>

    </div>
  );
}
