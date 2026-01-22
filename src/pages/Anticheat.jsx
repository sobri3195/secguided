import React from 'react';
import PageHero from '../components/PageHero';

const TOPICS = [
  {
    title: 'Threat Model Basics',
    body: 'Understand attacker goals, cheat categories, and common detection blind spots (high level).',
  },
  {
    title: 'Telemetry & Signals',
    body: 'Input timing anomalies, device integrity signals, and behavioral detection (privacy-aware).',
  },
  {
    title: 'Secure Client/Server Design',
    body: 'Move authority server-side, validate state transitions, and reduce trusted client surface.',
  },
  {
    title: 'Tamper Resistance (Defensive)',
    body: 'Hardening, integrity checks, and detecting suspicious runtime changes — without sharing bypass techniques.',
  },
];

const Anticheat = () => {
  return (
    <div>
      <PageHero
        badge="ANTICHEAT"
        title="Anticheat"
        subtitle="Defensive research and education for protecting games and apps. No bypasses or cheat development."
      />

      <section className="bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-dark-800/70 border border-dark-700 rounded-xl p-6 mb-8">
            <h2 className="text-white font-semibold mb-2">Community Rule</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              This section is strictly defensive. We discuss detection, secure design, and hardening at a high level.
              Requests for bypasses, cheat code, or actionable exploitation are removed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TOPICS.map((t) => (
              <div key={t.title} className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-cyan-500/40 transition-colors">
                <h3 className="text-white font-semibold mb-2">{t.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-dark-800/70 border border-dark-700 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Looking for help?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Share your architecture and constraints (platform, latency, threat model). We can help you reason about
              secure patterns and defensive monitoring.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Anticheat;
