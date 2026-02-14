import React, { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import { cyberSecurityQuestionBank, questionBankSummary } from '../data/questionBank';
import { hackerEliteQuestionBank, hackerEliteSummary } from '../data/hackerEliteQuestionBank';

const bankOptions = {
  general: {
    key: 'general',
    badge: 'BANK SOAL',
    title: '300 Soal Cyber Security',
    subtitle: 'Bank soal kurikulum cyber security dengan 20 chapter (masing-masing 15 soal).',
    data: cyberSecurityQuestionBank,
    summary: questionBankSummary,
    showLearningMeta: false,
  },
  elite: {
    key: 'elite',
    badge: 'BANK SOAL ELITE',
    title: '100 Soal Kurikulum Standar Hacker Elite',
    subtitle: 'Materi + pembelajaran + 100 soal legal/defensif/profesional untuk jalur 12–24 bulan.',
    data: hackerEliteQuestionBank,
    summary: hackerEliteSummary,
    showLearningMeta: true,
  },
};

const QuestionBank = () => {
  const [activeBank, setActiveBank] = useState('elite');

  const selectedBank = useMemo(() => bankOptions[activeBank], [activeBank]);

  return (
    <div>
      <PageHero
        badge={selectedBank.badge}
        title={selectedBank.title}
        subtitle={selectedBank.subtitle}
      />

      <section className="bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveBank('elite')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                activeBank === 'elite'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                  : 'bg-dark-800 border-dark-700 text-gray-300 hover:border-cyan-600/60'
              }`}
            >
              Kurikulum Hacker Elite (100 soal)
            </button>
            <button
              type="button"
              onClick={() => setActiveBank('general')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                activeBank === 'general'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                  : 'bg-dark-800 border-dark-700 text-gray-300 hover:border-cyan-600/60'
              }`}
            >
              Kurikulum Cyber Security (300 soal)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Total Chapter</p>
              <p className="text-3xl font-bold text-cyan-300">{selectedBank.summary.chapterCount}</p>
            </div>
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Total Soal</p>
              <p className="text-3xl font-bold text-cyan-300">{selectedBank.summary.totalQuestions}</p>
            </div>
            {selectedBank.showLearningMeta && (
              <>
                <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                  <p className="text-gray-400 text-sm">Durasi Belajar</p>
                  <p className="text-2xl font-bold text-cyan-300">{selectedBank.summary.learningDuration}</p>
                </div>
                <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                  <p className="text-gray-400 text-sm">Ritme Disarankan</p>
                  <p className="text-lg font-bold text-cyan-300">{selectedBank.summary.rhythm}</p>
                </div>
              </>
            )}
          </div>

          <div className="space-y-4">
            {selectedBank.data.map((chapter) => (
              <details key={chapter.id} className="bg-dark-800 border border-dark-700 rounded-xl p-6" open={chapter.id === 1}>
                <summary className="cursor-pointer text-white font-semibold flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span>Chapter {chapter.id}: {chapter.title}</span>
                  <span className="text-cyan-300 text-sm">{chapter.questionCount} soal</span>
                </summary>

                {chapter.objective && (
                  <p className="text-gray-300 text-sm mt-3">
                    <span className="text-cyan-300 font-semibold">Tujuan:</span> {chapter.objective}
                  </p>
                )}

                {chapter.materials && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {chapter.materials.map((material) => (
                      <span
                        key={`${chapter.id}-${material}`}
                        className="text-xs bg-dark-900 border border-dark-700 text-gray-300 px-2.5 py-1 rounded-md"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                )}

                {chapter.scenario && (
                  <p className="text-gray-400 text-sm mt-3">Skenario latihan: {chapter.scenario}</p>
                )}

                <div className="mt-4 space-y-3">
                  {chapter.questions.map((question, index) => (
                    <div key={question.id} className="border border-dark-700 rounded-lg p-4">
                      <p className="text-gray-200 text-sm font-medium">{index + 1}. {question.prompt}</p>
                      {question.options && (
                        <ol className="mt-3 space-y-1 text-sm text-gray-400 list-[upper-alpha] ml-5">
                          {question.options.map((option) => (
                            <li key={option}>{option}</li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestionBank;
