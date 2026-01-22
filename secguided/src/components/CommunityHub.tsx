import React from 'react';
import { communitySpaces } from '../data';

export const CommunityHub: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="section-title">Community</h2>
          <p className="section-subtitle">
            Join discussions, ask questions, and share knowledge with fellow security researchers.
          </p>
        </div>

        {/* Community Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communitySpaces.map((space) => (
            <div
              key={space.id}
              className="card p-6 cursor-pointer group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="card-header text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                {space.title}
              </h3>

              {/* Description */}
              <p className="card-description mb-4">
                {space.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  {space.threads}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {space.messages}
                </span>
              </div>

              {/* Latest Post */}
              <div className="pt-4 border-t border-slate-700/50">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-slate-500">Latest:</span>
                  <span className="text-cyan-400 truncate flex-1">{space.latestPost}</span>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                  <span>by {space.latestAuthor}</span>
                  <span>{space.latestTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityHub;
