import React from 'react';
import PageHero from '../components/PageHero';
import { courses } from '../data/data';

const Guides = () => {
  return (
    <div>
      <PageHero
        badge="GUIDES"
        title="Guides"
        subtitle="Structured, chapter-style guides for building real skills in a safe, ethical way." 
      />

      <section className="bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

          <div className="mt-10 bg-dark-800/70 border border-dark-700 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Tip</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              If you’re new, start with fundamentals (memory + assembly), then move into tooling and defensive engineering.
              Ask questions in the forums when you get stuck.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guides;
