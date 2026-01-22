import React from 'react';
import { resources } from '../data';

export const ResourceUpdates: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Updated Resources</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Latest educational tools, templates, and reference materials for your security research journey.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="card p-5 cursor-pointer group"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-xs font-medium mb-3">
                {resource.category}
              </div>

              {/* Title */}
              <h3 className="card-header text-base mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="card-description text-sm mb-4 line-clamp-2">
                {resource.description}
              </p>

              {/* Updated Date */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-4 border-t border-slate-700/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Updated: {resource.updated}
              </div>

              {/* Download Icon on Hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All Resources */}
        <div className="mt-10 text-center">
          <button className="btn-secondary">
            Browse All Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourceUpdates;
