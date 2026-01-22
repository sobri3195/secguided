import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const Info = () => {
  return (
    <div>
      <PageHero
        badge="INFO"
        title="About SecGuided"
        subtitle="SecGuided is a community-driven learning portal for security, reverse engineering, and defensive research."
      />

      <section className="bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Our goal is to make advanced topics approachable while staying ethical. We focus on education, secure coding,
              and defensive techniques.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              If you have questions about what is allowed to be posted, please read our rules and privacy policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/terms"
                className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors text-center border border-dark-600 hover:border-cyan-500"
              >
                Terms and rules
              </Link>
              <Link
                to="/privacy"
                className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors text-center border border-dark-600 hover:border-cyan-500"
              >
                Privacy policy
              </Link>
              <Link
                to="/contact"
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors text-center"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
