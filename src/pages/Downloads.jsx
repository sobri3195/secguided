import React from 'react';
import PageHero from '../components/PageHero';
import { latestResources } from '../data/data';

const Downloads = () => {
  return (
    <div>
      <PageHero
        badge="DOWNLOADS"
        title="Downloads"
        subtitle="Educational resources, demo projects, and references (no malware, no cheats, no illicit content)."
      />

      <section className="bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-dark-800/70 border border-dark-700 rounded-xl p-6 mb-8">
            <h2 className="text-white font-semibold mb-2">Safety Notice</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              All downloads are intended for learning and defensive research. If you publish resources here, keep them clean,
              document what they do, and avoid sharing anything that facilitates real-world harm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestResources.map((r) => (
              <div key={r.id} className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-white font-semibold">{r.name}</h3>
                  <span className="text-xs font-mono text-cyan-300/80">{r.updated}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{r.description}</p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Download (demo)
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
