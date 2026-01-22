import React from 'react';
import HackerBackdrop from './HackerBackdrop';

const PageHero = ({ badge, title, subtitle }) => {
  return (
    <section className="relative bg-dark-900 border-b border-dark-700 overflow-hidden">
      <HackerBackdrop density={14} className="opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/70 to-dark-900/95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-dark-800/60 px-3 py-1 text-xs font-mono tracking-widest text-cyan-300/90 mb-4">
              {badge}
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight hacker-glitch">
            {title}
          </h1>
          {subtitle && <p className="mt-4 text-gray-300/90 text-base sm:text-lg leading-relaxed">{subtitle}</p>}
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500" />
    </section>
  );
};

export default PageHero;
