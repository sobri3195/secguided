import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const UPDATES = [
  {
    title: 'Forum Pages Launched',
    date: 'Today',
    body: 'New dedicated pages for Tutorials, Guides, Downloads, Anticheat, and Info are now available.',
  },
  {
    title: 'Hacking-style UI Animations',
    date: 'Today',
    body: 'Added matrix rain, scanlines, and glitch effects across the site for a more "terminal" look.',
  },
  {
    title: 'Favicon Added',
    date: 'Today',
    body: 'New SecGuided favicon is now included for browser tabs and bookmarks.',
  },
];

const WhatsNew = () => {
  return (
    <div>
      <PageHero badge="WHAT'S NEW" title="What's New" subtitle="Announcements, updates, and changelog." />

      <section className="bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6">
            {UPDATES.map((u) => (
              <article key={u.title} className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h2 className="text-white font-semibold text-lg">{u.title}</h2>
                  <span className="text-xs font-mono text-cyan-300/80">{u.date}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{u.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/forums"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors text-center"
            >
              Back to Forums
            </Link>
            <Link
              to="/downloads"
              className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors text-center border border-dark-600 hover:border-cyan-500"
            >
              Browse Downloads
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsNew;
