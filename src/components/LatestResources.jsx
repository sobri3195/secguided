import React from 'react';
import { latestResources } from '../data/data';

const LatestResources = () => {
  return (
    <section className="py-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Latest <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-lg text-gray-400">
            Educational tools, demos, and reference materials.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-4 border border-cyan-500/30 mx-auto sm:mx-0">
                <svg
                  className="w-8 h-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {resource.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {resource.description}
              </p>

              {/* Updated Badge */}
              <div className="flex items-center justify-center sm:justify-start">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {resource.updated}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestResources;
