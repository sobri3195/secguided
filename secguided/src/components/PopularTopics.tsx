import React from 'react';
import { topics } from '../data';

interface PopularTopicsProps {
  limit?: number;
}

export const PopularTopics: React.FC<PopularTopicsProps> = ({ limit = 6 }) => {
  const displayTopics = topics.slice(0, limit);

  return (
    <section className="py-12 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <h3 className="text-lg font-semibold text-white">Popular Topics</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayTopics.map((topic) => (
            <div
              key={topic.id}
              className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-200 cursor-pointer"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-white truncate group-hover:text-cyan-400 transition-colors">
                  {topic.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {topic.threads} threads · {topic.messages} msgs
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTopics;
