import React from 'react';
import { communitySections } from '../data/data';

const CommunitySections = () => {
  return (
    <section className="py-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="text-gradient">Community</span>
          </h2>
          <p className="text-lg text-gray-400">
            Join discussions, share knowledge, and connect with fellow researchers.
          </p>
        </div>

        {/* Community Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {communitySections.map((section) => (
            <div
              key={section.id}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-4 mb-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                      <svg
                        className="w-6 h-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Meta and Latest */}
                <div className="mt-auto pt-4 border-t border-dark-700">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        {section.threads} threads
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        {section.messages}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <span className="text-xs mr-2">Latest:</span>
                      <span className="text-cyan-400 text-sm font-medium truncate max-w-[150px]">
                        {section.latest}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySections;
