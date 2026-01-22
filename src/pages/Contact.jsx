import React from 'react';
import PageHero from '../components/PageHero';

const Contact = () => {
  return (
    <div>
      <PageHero badge="CONTACT" title="Contact us" subtitle="Questions, feedback, or partnerships — send us a message." />

      <section className="bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              This is a demo contact form. In production, connect it to your email provider or support system.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-gray-300 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-dark-700 text-gray-200 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-dark-700 text-gray-200 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-dark-700 text-gray-200 placeholder-gray-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors"
              >
                Send message
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-dark-700">
              <div className="text-gray-400 text-sm">
                Alternatively, reach us at: <span className="text-cyan-300 font-mono">support@secguided.example</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
