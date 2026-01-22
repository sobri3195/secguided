import React from 'react';
import PageHero from '../components/PageHero';

const Terms = () => {
  return (
    <div>
      <PageHero badge="LEGAL" title="Terms and rules" subtitle="Community rules and acceptable use guidelines." />

      <section className="bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-6">
            <div>
              <h2 className="text-white font-semibold mb-2">1) Educational Use Only</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Content is for learning, research, and defensive engineering. Don’t request or provide instructions that
                enable real-world harm.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold mb-2">2) No Illegal Content</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                No malware distribution, credential theft, phishing, or unauthorized access guidance. No selling cheats or
                bypass services.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold mb-2">3) Respect & Safety</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Be respectful. Do not share personal data. Avoid doxxing, harassment, or targeting individuals.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold mb-2">4) Responsible Disclosure</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                If you discover a vulnerability, follow responsible disclosure practices and contact the vendor when
                applicable.
              </p>
            </div>

            <div className="pt-4 border-t border-dark-700">
              <p className="text-gray-500 text-xs leading-relaxed">
                This page is a template for a future Terms of Service. Customize it with legal counsel before production
                use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
