import React, { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import {
  curriculumMaterials,
  cyberCurriculumQuestionSet,
  curriculumQuestionSummary,
} from '../data/cyberCurriculumQuestionBank';

const FILTERS = ['Semua', 'Foundation', 'Intermediate', 'Advanced'];

const QuestionBank = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const filteredQuestions = useMemo(() => {
    if (activeFilter === 'Semua') return cyberCurriculumQuestionSet;
    return cyberCurriculumQuestionSet.filter((question) => question.level === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <PageHero
        badge="BANK SOAL & MATERI"
        title="100 Soal Kurikulum Cyber Security"
        subtitle="Materi terstruktur + 70 pilihan ganda + 30 studi kasus/esai dari level Foundation sampai Advanced."
      />

      <section className="bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Total Soal</p>
              <p className="text-3xl font-bold text-cyan-300">{curriculumQuestionSummary.total}</p>
            </div>
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Pilihan Ganda</p>
              <p className="text-3xl font-bold text-cyan-300">{curriculumQuestionSummary.mcq}</p>
            </div>
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Studi Kasus / Esai</p>
              <p className="text-3xl font-bold text-cyan-300">{curriculumQuestionSummary.essay}</p>
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

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">Ringkasan Materi</h2>
            {curriculumMaterials.map((section) => (
              <div key={section.level}>
                <h3 className="text-cyan-300 font-semibold">{section.level}</h3>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-300 text-sm">
                  {section.modules.map((module) => (
                    <li key={module}>{module}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <h2 className="text-xl font-semibold text-white">Daftar 100 Soal</h2>
              <label className="text-sm text-gray-300 inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showAnswerKey}
                  onChange={(event) => setShowAnswerKey(event.target.checked)}
                />
                Tampilkan kunci jawaban pilihan ganda
              </label>
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg border text-sm transition ${
                    activeFilter === filter
                      ? 'border-cyan-300 text-cyan-300 bg-cyan-300/10'
                      : 'border-dark-600 text-gray-300 hover:border-cyan-400'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredQuestions.map((item) => (
                <article key={item.id} className="border border-dark-700 rounded-lg p-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-cyan-300">Soal {item.id}</span>
                    <span className="text-gray-400">{item.type === 'mcq' ? 'Pilihan Ganda' : 'Studi Kasus/Esai'} • {item.level}</span>
                  </div>
                  <p className="text-gray-100 text-sm">{item.question}</p>

                  {item.type === 'mcq' ? (
                    <ol className="mt-3 list-[upper-alpha] ml-5 text-sm text-gray-300 space-y-1">
                      {item.options.map((option, idx) => (
                        <li key={`${item.id}-${option}`}>
                          {option}
                          {showAnswerKey && idx === item.answerIndex ? (
                            <span className="text-emerald-300"> ← Jawaban benar</span>
                          ) : null}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="mt-3 text-sm text-gray-400">Rubrik: {item.rubric}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestionBank;
