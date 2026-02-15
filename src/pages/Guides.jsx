import React from 'react';
import PageHero from '../components/PageHero';
import { courses } from '../data/data';
import { completeCurriculum } from '../data/completeCurriculum';

const Guides = () => {
  return (
    <div>
      <PageHero
        badge="GUIDES"
        title="Guides"
        subtitle="Structured, chapter-style guides for building real skills in a safe, ethical way."
      />

      <section className="bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
          <div className="bg-dark-800/70 border border-cyan-500/30 rounded-xl p-6">
            <h2 className="text-white font-semibold text-xl">{completeCurriculum.title}</h2>
            <p className="text-gray-400 text-sm mt-2">{completeCurriculum.description}</p>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-cyan-300 font-semibold mb-2">Tujuan Pembelajaran</h3>
                <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
                  {completeCurriculum.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-300 font-semibold mb-2">Prasyarat</h3>
                <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
                  {completeCurriculum.prerequisites.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {completeCurriculum.levels.map((level) => (
              <div key={level.name} className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-white font-semibold text-lg">{level.name}</h3>
                  <span className="text-xs font-mono text-cyan-300/80">Durasi: {level.duration}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {level.modules.map((module) => (
                    <div key={module.title} className="rounded-lg border border-dark-700 p-4 bg-dark-900/60">
                      <h4 className="text-white font-medium mb-2">{module.title}</h4>
                      <ul className="text-gray-400 text-sm list-disc pl-5 space-y-1">
                        {module.topics.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                      <p className="text-cyan-200/90 text-xs mt-3">Praktik: {module.practice}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">Skema Evaluasi</h3>
              <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
                {completeCurriculum.evaluation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">Contoh Tema Capstone</h3>
              <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
                {completeCurriculum.capstone.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xl mb-4">Guides Tambahan</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((c) => (
                <div key={c.id} className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="text-white font-semibold text-lg">{c.title}</h2>
                    <span className="text-xs font-mono text-cyan-300/80">{c.lastUpdate}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{c.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>{c.threads} threads</span>
                    <span>{c.messages} messages</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guides;
