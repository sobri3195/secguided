import React from 'react';
import { courses } from '../data/data';

const CoursesSection = () => {
  return (
    <section className="py-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Official <span className="text-gradient">SecGuided Courses</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our best courses — Reverse Engineering, Security Fundamentals, Defensive Engineering, and Tooling.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {course.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-dark-700">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    {course.threads} threads
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    {course.messages} messages
                  </span>
                </div>
                <span className="text-cyan-400">{course.lastUpdate}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-dark-800 rounded-xl p-8 border border-dark-700">
          <p className="text-lg text-gray-300 mb-6">
            Sign up today and gain access to all our amazing content.
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            Register Here
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
