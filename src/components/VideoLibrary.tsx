import React, { useState } from 'react';
import { Language, Parasite } from '../types/parasite';
import { translations } from '../data/translations';
import { allParasites } from '../data';
import { Video, Play, Search, Filter, ExternalLink, Bookmark } from 'lucide-react';

interface VideoLibraryProps {
  language: Language;
  onSelectParasite: (parasite: Parasite) => void;
}

export const VideoLibrary: React.FC<VideoLibraryProps> = ({
  language,
  onSelectParasite
}) => {
  const t = translations[language];
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    youtubeId: string;
    title: string;
    source: string;
    parasite: Parasite;
    description: string;
  } | null>(null);

  // Flatten all parasite videos
  const allVideos = allParasites.flatMap((parasite) =>
    parasite.videos.map((vid) => ({
      ...vid,
      parasite
    }))
  );

  const filteredVideos = allVideos.filter((v) => {
    if (selectedType !== 'all' && v.type !== selectedType) return false;
    if (!searchFilter) return true;
    const q = searchFilter.toLowerCase();
    const titleMatch = v.title[language].toLowerCase().includes(q);
    const parasiteMatch = v.parasite.scientificName.toLowerCase().includes(q);
    const sourceMatch = v.sourceName.toLowerCase().includes(q);
    return titleMatch || parasiteMatch || sourceMatch;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Introduction */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <Video className="w-4 h-4" />
            <span>{language === 'ar' ? 'المكتبة المرئية للوسائط العلمية' : language === 'fr' ? 'Vidéothèque Scientifique Validée' : 'Scientific Video & Animation Library'}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {t.videosAndVisuals}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {language === 'ar'
              ? 'مقاطع وشروحات متحركة ثلاثية الأبعاد لدورات الحياة، فحوصات مجهرية حية لحركة الطفيليات، ودلائل سريرية بالتعاون مع منظمة الصحة العالمية ومراكز CDC.'
              : language === 'fr'
              ? 'Animations 3D des cycles évolutifs, démonstrations microscopiques de mobilités parasitaires et protocoles cliniques.'
              : 'Curated 3D life-cycle animations, real-time diagnostic microscopy tutorials, and clinical guides from CDC DPDx and WHO.'}
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto w-full sm:w-auto">
          {[
            { id: 'all', label: language === 'ar' ? 'جميع الفيديوهات' : language === 'fr' ? 'Toutes' : 'All Videos' },
            { id: 'life_cycle_animation', label: language === 'ar' ? 'رسوم دورة الحياة' : language === 'fr' ? 'Cycles 3D' : 'Life Cycle 3D' },
            { id: 'microscopy_lab', label: language === 'ar' ? 'فحوصات مجهرية' : language === 'fr' ? 'Microscopie' : 'Microscopy Lab' },
            { id: 'clinical_guide', label: language === 'ar' ? 'دلائل سريرية' : language === 'fr' ? 'Guides Cliniques' : 'Clinical Guides' },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                selectedType === type.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 text-slate-400 ltr:left-3 rtl:right-3 pointer-events-none" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder={language === 'ar' ? 'بحث في الفيديوهات...' : 'Search videos...'}
            className="w-full text-xs bg-slate-900 border border-slate-800 rounded-xl py-2 ltr:pl-9 ltr:pr-3 rtl:pr-9 rtl:pl-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Featured Video Player if active */}
      {activeVideo && (
        <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-5 sm:p-6 space-y-4 shadow-2xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">
                {activeVideo.source} · {activeVideo.parasite.scientificName}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white mt-0.5">
                {activeVideo.title}
              </h2>
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'مشاهدة على YouTube' : 'Watch on YouTube'}</span>
              </a>

              <button
                onClick={() => setActiveVideo(null)}
                className="text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                ✕ {language === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>

          <div className="relative pt-[56.25%] rounded-xl overflow-hidden bg-black shadow-2xl border border-slate-800">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&enablejsapi=1`}
              title={activeVideo.title}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300 pt-1">
            <div className="space-y-1">
              <p className="font-normal text-slate-300">{activeVideo.description}</p>
              <p className="text-[11px] text-slate-500">
                {language === 'ar'
                  ? '💡 في حال حظر المتصفح تشغيل الفيديو داخل الإطار، اضغط زر "مشاهدة على YouTube" أعلاه للمشاهدة فوراً بجودة HD.'
                  : '💡 If playback is restricted by your browser in iframe mode, click "Watch on YouTube" above for instant HD streaming.'}
              </p>
            </div>
            
            <button
              onClick={() => onSelectParasite(activeVideo.parasite)}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold shrink-0 transition-colors self-start sm:self-center"
            >
              {language === 'ar' ? 'فتح ملف الطفيلي الكامل' : 'View Full Monograph'}
            </button>
          </div>
        </div>
      )}

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredVideos.map((vid) => (
          <div
            key={vid.id}
            className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-xl overflow-hidden flex flex-col group transition-all"
          >
            {/* Real YouTube Thumbnail with click to play */}
            <div
              onClick={() =>
                setActiveVideo({
                  id: vid.id,
                  youtubeId: vid.youtubeId,
                  title: vid.title[language],
                  source: vid.sourceName,
                  parasite: vid.parasite,
                  description: vid.description[language]
                })
              }
              className="relative h-48 bg-slate-950 flex items-center justify-center cursor-pointer group overflow-hidden"
            >
              <img
                src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                alt={vid.title[language]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  // Fallback if thumbnail fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

              <div className="absolute w-12 h-12 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-600 transition-all z-10">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>

              <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/80 backdrop-blur-sm text-[10px] text-slate-200 rounded font-mono font-medium z-10">
                {vid.duration}
              </span>

              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-slate-900/90 backdrop-blur-sm border border-slate-800 text-[10px] text-emerald-300 rounded font-semibold z-10">
                {vid.sourceName}
              </span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[11px] text-slate-500 font-serif italic block">
                  {vid.parasite.scientificName}
                </span>
                <h3 className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors mt-0.5">
                  {vid.title[language]}
                </h3>
                <p className="text-xs text-slate-400 font-normal line-clamp-2 mt-1 leading-relaxed">
                  {vid.description[language]}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <button
                  onClick={() =>
                    setActiveVideo({
                      id: vid.id,
                      youtubeId: vid.youtubeId,
                      title: vid.title[language],
                      source: vid.sourceName,
                      parasite: vid.parasite,
                      description: vid.description[language]
                    })
                  }
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{language === 'ar' ? 'تشغيل الفيديو' : 'Play Video'}</span>
                </button>

                <a
                  href={`https://www.youtube.com/watch?v=${vid.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-red-400 transition-colors text-[11px]"
                  title="YouTube"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
