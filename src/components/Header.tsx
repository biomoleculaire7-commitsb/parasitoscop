import React, { useState } from 'react';
import { Microscope, BookOpen, Stethoscope, Video, Award, Search, Menu, X, Globe, GraduationCap, Box } from 'lucide-react';
import { Language } from '../types/parasite';
import { translations } from '../data/translations';

interface HeaderProps {
  currentTab: 'catalog' | 'studentHub' | 'simulator3d' | 'symptoms' | 'videos' | 'quiz';
  setCurrentTab: (tab: 'catalog' | 'studentHub' | 'simulator3d' | 'symptoms' | 'videos' | 'quiz') => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
  searchQuery,
  setSearchQuery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navItems = [
    { id: 'catalog', label: t.navCatalog, icon: BookOpen },
    { id: 'studentHub', label: t.navStudentHub, icon: GraduationCap },
    { id: 'simulator3d', label: (t as any).navSimulator3D || '3D Lab', icon: Box },
    { id: 'symptoms', label: t.navSymptomChecker, icon: Stethoscope },
    { id: 'videos', label: t.navVideos, icon: Video },
    { id: 'quiz', label: t.navQuiz, icon: Award },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Logo & Scientific Title */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setCurrentTab('catalog')}
              className="flex items-center gap-2.5 text-left focus:outline-none group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform">
                <Microscope className="w-5 h-5 text-emerald-100" />
              </div>
              <div>
                <span className="block text-base font-bold text-slate-100 tracking-tight leading-none group-hover:text-emerald-400 transition-colors">
                  ParasitoScope
                </span>
                <span className="block text-[11px] text-slate-400 font-medium mt-1">
                  {language === 'ar' ? 'المنصة العلمية للطفيليات' : language === 'fr' ? 'Plateforme Parasitologique' : 'Veterinary & Human Parasitology'}
                </span>
              </div>
            </button>
          </div>

          {/* Quick Search in Header (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm mx-4">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 text-slate-400 ltr:left-3 rtl:right-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full text-xs bg-slate-900/90 border border-slate-800 rounded-lg py-2 ltr:pl-9 ltr:pr-3 rtl:pr-9 rtl:pl-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute top-1/2 -translate-y-1/2 ltr:right-2.5 rtl:left-2.5 text-slate-500 hover:text-slate-300 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Language Switcher + Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-900 p-0.5 border border-slate-800 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  language === 'ar' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="العربية"
              >
                عربي
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  language === 'fr' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Français"
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  language === 'en' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden py-2 pb-3 border-t border-slate-800/60">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 text-slate-400 ltr:left-3 rtl:right-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full text-xs bg-slate-900/90 border border-slate-800 rounded-lg py-2.5 ltr:pl-9 ltr:pr-3 rtl:pr-9 rtl:pl-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-800 space-y-1 pb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-left rtl:text-right transition-colors ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
