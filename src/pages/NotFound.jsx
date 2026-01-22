import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const NotFound = () => {
  return (
    <div>
      <PageHero badge="404" title="Page not found" subtitle="The page you requested does not exist." />

      <section className="bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">Return to the homepage or open the forums.</p>
            <div className="flex gap-3">
              <Link to="/" className="bg-dark-700 hover:bg-dark-600 text-white px-5 py-2 rounded-lg text-sm border border-dark-600 hover:border-cyan-500">
                Home
              </Link>
              <Link to="/forums" className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-lg text-sm">
                Forums
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
