import React from 'react';
import { latestPosts } from '../data/data';

const LatestPosts = () => {
  return (
    <section className="py-16 bg-dark-800 border-y border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Latest <span className="text-gradient">Posts</span>
          </h2>
          <p className="text-gray-400">
            Recent discussions and tutorials from the community.
          </p>
        </div>

        {/* Posts List */}
        <div className="bg-dark-900 rounded-xl border border-dark-700 overflow-hidden">
          {latestPosts.map((post, index) => (
            <div
              key={post.id}
              className={`p-4 hover:bg-dark-700/50 transition-colors cursor-pointer ${
                index !== latestPosts.length - 1 ? 'border-b border-dark-700' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1 min-w-0">
                  {/* Post Number */}
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-dark-700 text-gray-400 rounded-lg text-sm font-medium">
                      {index + 1}
                    </span>
                  </div>

                  {/* Post Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold hover:text-cyan-400 transition-colors mb-1 truncate">
                      {post.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {post.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
