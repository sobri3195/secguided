import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const FORUM_PAGES = [
  {
    title: "What's New",
    to: '/whats-new',
    description: 'Announcements, changelogs, and site updates.',
  },
  {
    title: 'Downloads',
    to: '/downloads',
    description: 'Educational demo projects, references, and tools lists.',
  },
  {
    title: 'Tutorials',
    to: '/tutorials',
    description: 'Step-by-step learning materials and walkthroughs.',
  },
  {
    title: 'Guides',
    to: '/guides',
    description: 'Structured guides and learning paths.',
  },
  {
    title: 'Anticheat',
    to: '/anticheat',
    description: 'Defensive research, game security concepts, and detection.',
  },
  {
    title: 'Info',
    to: '/info',
    description: 'About SecGuided, community rules, and policies.',
  },
];

const Forums = () => {
  return (
    <div>
      <PageHero
        badge="FORUMS"
        title="SecGuided Forums"
        subtitle="Choose a section below. Everything here is educational, safe, and focused on defensive learning."
      />

      <section className="bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FORUM_PAGES.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="group bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10"
              >
                <h2 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4 text-cyan-400 text-sm font-medium">Open →</div>
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-dark-800/70 border border-dark-700 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Posting Rules (Quick)</h3>
            <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
              <li>No illegal hacking, malware distribution, or cheating services.</li>
              <li>Share learnings, not exploits-in-the-wild. Keep everything educational.</li>
              <li>Include context, environment, and what you already tried.</li>
              <li>Be respectful and keep it constructive.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forums;
