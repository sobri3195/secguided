import React from 'react';
import { Link } from 'react-router-dom';
import HackerBackdrop from './HackerBackdrop';

const Hero = () => {
  return (
    <section className="relative bg-dark-900 border-b border-dark-700 overflow-hidden">
      <HackerBackdrop density={26} className="opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/70 to-dark-900/95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-cyan-300/90 mb-6 hacker-flicker">
            <span className="opacity-80">root@secguided:~$</span>
            <span className="text-gray-200">learn</span>
            <span className="text-gray-400">--safe --ethical</span>
            <span className="hacker-cursor" aria-hidden="true">
              █
            </span>
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Welcome to{' '}
            <span className="text-gradient hacker-glitch">SecGuided</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-300">
              Learn Security & Reverse Engineering (Educational)
            </span>
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              An educational hub for reverse engineering, software security, and defensive research.
            </p>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Tutorials, guides, and structured learning paths — focused on safety and ethics.
            </p>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Soon re-launching with a more formal wiki-style learning experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/forums"
              className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Enter Forums
            </Link>
            <Link
              to="/guides"
              className="w-full sm:w-auto bg-dark-700 hover:bg-dark-600 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all border border-dark-600 hover:border-cyan-500"
            >
              Browse Guides
            </Link>
          </div>

          <div className="inline-flex items-center space-x-2 bg-dark-800/80 border border-cyan-500/30 rounded-lg px-4 py-3 text-left hacker-card-glow">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <span className="text-cyan-400 font-semibold text-sm">What’s New:</span>
              <span className="text-gray-300 text-sm ml-2">Forum pages are now live</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500" />
    </section>
  );
};

export default Hero;
