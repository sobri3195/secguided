import React from 'react';
import { courses } from '../data';

interface CourseCatalogProps {
  onRegisterClick: () => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ onRegisterClick }) => {
  return (
    <section id="courses" className="py-16 md:py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Official SecGuided Courses</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Curated learning paths across reverse engineering, security fundamentals, 
            defensive development, and tooling.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="card p-6 cursor-pointer group"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium mb-4">
                {course.category}
              </div>

              {/* Title */}
              <h3 className="card-header mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                {course.title}
              </h3>

              {/* Description */}
              <p className="card-description mb-4 line-clamp-3">
                {course.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-700/50">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    {course.threads} threads
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {course.messages} msgs
                  </span>
                </div>
                <span>Updated {course.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-2xl border border-slate-700/50">
          <p className="text-lg text-slate-300 mb-4">
            Join today to unlock structured materials and community access.
          </p>
          <button
            onClick={onRegisterClick}
            className="btn-primary"
          >
            Register Here
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
