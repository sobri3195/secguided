import React from 'react';
import PageHero from '../components/PageHero';
import {
  curriculumModules,
  questionStandards,
  questionTemplates,
  validationChecklist,
  miniEvaluationPackage,
  uiImplementation,
} from '../data/curriculumUiBlueprint';

const QuestionBank = () => {
  return (
    <div>
      <PageHero
        badge="KURIKULUM & STANDAR SOAL"
        title="Blueprint Kurikulum Cyber Security"
        subtitle="Struktur modul, standar kualitas soal, template evaluasi, dan panduan implementasi UI dalam satu halaman."
      />

      <section className="bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white">1) Struktur Tampilan Kurikulum</h2>
            <p className="text-gray-400 mt-2 text-sm">Setiap modul ditampilkan berurutan: Judul, Level, Durasi, Tujuan, Materi Inti, Praktik/Lab, Kriteria Kelulusan, dan Evaluasi.</p>
          </div>

          <div className="space-y-6">
            {curriculumModules.map((module) => (
              <article key={module.id} className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-5">
                <header className="border-b border-dark-700 pb-4">
                  <h3 className="text-xl font-semibold text-cyan-300">Modul {module.id} — {module.title}</h3>
                  <div className="mt-3 text-sm text-gray-300 grid sm:grid-cols-3 gap-2">
                    <p><span className="text-gray-500">Level:</span> {module.level}</p>
                    <p><span className="text-gray-500">Durasi:</span> {module.duration}</p>
                    <p><span className="text-gray-500">Prasyarat:</span> {module.prerequisite}</p>
                  </div>
                </header>

                <div>
                  <h4 className="font-semibold text-white">Tujuan Pembelajaran</h4>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                    {module.goals.map((goal) => <li key={goal}>{goal}</li>)}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Materi Inti</h4>
                  <ol className="list-decimal ml-5 mt-2 space-y-1 text-sm text-gray-300">
                    {module.topics.map((topic) => <li key={topic}>{topic}</li>)}
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Praktik / Lab</h4>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                    {module.labs.map((lab) => <li key={lab}>{lab}</li>)}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Kriteria Kelulusan</h4>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                    {module.graduationCriteria.map((criteria) => <li key={criteria}>{criteria}</li>)}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Evaluasi</h4>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                    <li>Pre-test: {module.evaluation.preTest}</li>
                    <li>Latihan: {module.evaluation.practice}</li>
                    <li>Post-test: {module.evaluation.postTest}</li>
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <section className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-semibold text-white">2) Standar Soal</h2>
              <div>
                <h3 className="text-cyan-300 font-semibold">Karakteristik Soal Baik</h3>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-300 space-y-1">
                  {questionStandards.characteristics.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-300 font-semibold">Komposisi Post-test (15 Soal)</h3>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-300 space-y-1">
                  {questionStandards.composition.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-300 font-semibold">Distribusi Kesulitan</h3>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-300 space-y-1">
                  {questionStandards.difficulty.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-300 font-semibold">Blueprint Kognitif (Bloom)</h3>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-300 space-y-1">
                  {questionStandards.bloom.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </section>

            <section className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-semibold text-white">4) Checklist Validasi Soal</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                {validationChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan-300 mt-0.5">☐</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-white pt-2">5) Mini Paket Evaluasi</h2>
              <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1">
                <li><strong>Pre-test:</strong> {miniEvaluationPackage.preTest}</li>
                <li><strong>Latihan:</strong> {miniEvaluationPackage.practice}</li>
                <li><strong>Post-test:</strong> {miniEvaluationPackage.postTest}</li>
              </ul>
              <div className="rounded-lg border border-cyan-500/40 bg-cyan-500/10 p-4 text-sm text-cyan-100 space-y-1">
                <p>{miniEvaluationPackage.passingScore}</p>
                <p>{miniEvaluationPackage.labScore}</p>
              </div>
            </section>
          </div>

          <section className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">3) Template Penulisan Soal</h2>
            <div className="grid lg:grid-cols-3 gap-4">
              {questionTemplates.map((template) => (
                <article key={template.title} className="border border-dark-700 rounded-lg p-4 bg-dark-900/50">
                  <h3 className="font-semibold text-cyan-300 mb-2">{template.title}</h3>
                  <pre className="text-xs text-gray-300 whitespace-pre-wrap leading-relaxed">{template.body}</pre>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-dark-800 border border-dark-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white">6) Catatan Implementasi UI</h2>
            <ol className="list-decimal ml-5 mt-2 text-sm text-gray-300 space-y-1">
              {uiImplementation.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </section>
        </div>
      </section>
    </div>
  );
};

export default QuestionBank;
