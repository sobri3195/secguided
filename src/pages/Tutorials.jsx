import React from 'react';
import PageHero from '../components/PageHero';
import { latestPosts, popularSections } from '../data/data';

const Tutorials = () => {
  return (
    <div>
      <PageHero
        badge="TUTORIALS"
        title="Tutorials"
        subtitle="Hands-on walkthroughs and learning tracks. Pick a topic to start." 
      />

      <section className="bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-white font-semibold text-xl mb-6">Popular Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularSections.map((s) => (
              <div
                key={s.id}
                className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-cyan-500/40 transition-all hover:-translate-y-1"
              >
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>{s.threads} threads</span>
                  <span>{s.messages} messages</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-white font-semibold text-xl mb-6">Latest Posts</h2>
            <div className="bg-dark-800 border border-dark-700 rounded-xl divide-y divide-dark-700">
              {latestPosts.map((p) => (
                <div key={p.id} className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="text-white font-medium">{p.title}</div>
                    <div className="text-gray-500 text-sm">by {p.author}</div>
                  </div>
                  <div className="text-cyan-300/80 text-xs font-mono">{p.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutorials;
