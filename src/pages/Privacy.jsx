import React from 'react';
import PageHero from '../components/PageHero';

const Privacy = () => {
  return (
    <div>
      <PageHero badge="LEGAL" title="Privacy policy" subtitle="How we handle data and cookies (template page)." />

      <section className="bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-6">
            <div>
              <h2 className="text-white font-semibold mb-2">Cookies</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                This demo uses a simple cookie-consent banner and stores your choice in <span className="font-mono text-gray-300">localStorage</span>
                (key: <span className="font-mono text-gray-300">cookiesAccepted</span>).
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold mb-2">Analytics & Tracking</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                No analytics are configured in this template. If you add analytics, disclose what you collect and provide
                opt-out where required.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold mb-2">Data Retention</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                If you implement accounts and posting, define how long you store user content and how users can request
                deletion.
              </p>
            </div>

            <div className="pt-4 border-t border-dark-700">
              <p className="text-gray-500 text-xs leading-relaxed">
                This page is a template. Customize it for your jurisdiction and product requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
