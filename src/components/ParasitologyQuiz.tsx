import React, { useState } from 'react';
import { Language } from '../types/parasite';
import { quizQuestions, QuizQuestion } from '../data/quiz';
import { translations } from '../data/translations';
import { Award, CheckCircle, XCircle, RefreshCw, BookOpen, ChevronRight } from 'lucide-react';

interface ParasitologyQuizProps {
  language: Language;
}

export const ParasitologyQuiz: React.FC<ParasitologyQuizProps> = ({ language }) => {
  const t = translations[language];
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQ: QuizQuestion = quizQuestions[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    setSelectedAnswer(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerChecked(true);
    if (selectedAnswer === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Intro Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
          <Award className="w-4 h-4" />
          <span>{language === 'ar' ? 'التقييم السريري والمعرفي' : 'Clinical Diagnostic Assessment'}</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {t.clinicalQuizTitle}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mt-1">
          {language === 'ar'
            ? 'اختبار تفاعلي مصمم للأطباء البيطريين والأطباء وطلاب العلوم الطبية لمراجعة التعرف المجهري وبروتوكولات العلاج المعتمدة.'
            : 'Interactive self-assessment for veterinary and medical professionals covering diagnostic microscopy, therapeutics, and zoonoses.'}
        </p>
      </div>

      {isCompleted ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">
              {language === 'ar' ? 'اكتمل الاختبار السريري بنجاح!' : 'Quiz Completed!'}
            </h2>
            <p className="text-sm text-slate-300 font-mono">
              {t.score}: <span className="text-emerald-400 font-bold text-lg">{score}</span> / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
            </p>
          </div>

          <p className="text-xs text-slate-400 max-w-md mx-auto">
            {score >= 4
              ? (language === 'ar' ? 'أداء تشخيصي ممتاز ودقيق يعكس تمكناً عالياً من علم الطفيليات الطبية والبيطرية!' : 'Excellent clinical diagnostic proficiency adhering to CDC and WHO standards!')
              : (language === 'ar' ? 'أداء جيد، ينصح بمراجعة دراسات الحالة في الموسوعة لتعزيز مهارات التشخيص.' : 'Good effort, consider reviewing the encyclopedia monographs to refine diagnostics.')}
          </p>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>{language === 'ar' ? 'إعادة الاختبار' : 'Retake Quiz'}</span>
          </button>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
            <span>
              {t.question} {currentIdx + 1} / {quizQuestions.length}
            </span>
            <span className="font-mono text-emerald-400 font-semibold">
              {t.score}: {score}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {currentQ.question[language]}
          </h2>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options[language].map((option, idx) => {
              const isSelected = selectedAnswer === idx;
              let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

              if (isAnswerChecked) {
                if (idx === currentQ.correctIndex) {
                  btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-semibold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                } else {
                  btnStyle = 'bg-slate-950 border-slate-800 text-slate-500 opacity-60';
                }
              } else if (isSelected) {
                btnStyle = 'bg-emerald-950/30 border-emerald-500 text-emerald-200 font-semibold shadow-sm';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerChecked}
                  className={`w-full p-4 rounded-xl border text-left rtl:text-right text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswerChecked && idx === currentQ.correctIndex && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswerChecked && isSelected && idx !== currentQ.correctIndex && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Scientific Explanation when checked */}
          {isAnswerChecked && (
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.explanation}</span>
              </div>
              <p className="text-slate-300 font-normal leading-relaxed">
                {currentQ.explanation[language]}
              </p>
              <div className="text-[11px] text-slate-500 font-medium pt-1">
                {language === 'ar' ? 'المرجع العلمي الموثق:' : 'Scientific Citation:'} {currentQ.scientificReference}
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2 flex justify-end">
            {!isAnswerChecked ? (
              <button
                onClick={handleCheckAnswer}
                disabled={selectedAnswer === null}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                {t.checkAnswer}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{t.nextQuestion}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            )}
          </div>

        </div>
      )}

    </div>
  );
};
