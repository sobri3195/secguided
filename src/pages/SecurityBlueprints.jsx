import React, { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import {
  analyticsKpi,
  frameworkUpdateSteps,
  mappingTables,
  playbookLifecycle,
  remediationFlow,
  verificationChecklist,
} from '../data/securityBlueprints';

const tierFromScore = (score) => {
  if (score >= 8.5) return 'P0 - Critical';
  if (score >= 7) return 'P1 - High';
  if (score >= 5) return 'P2 - Medium';
  return 'P3 - Low';
};

const toneClass = {
  good: 'text-emerald-300',
  warn: 'text-amber-300',
};

const SecurityBlueprints = () => {
  const [technicalScore, setTechnicalScore] = useState(8);
  const [revenueImpact, setRevenueImpact] = useState(2);
  const [reputationImpact, setReputationImpact] = useState(2);
  const [legalImpact, setLegalImpact] = useState(1);
  const [serviceCriticality, setServiceCriticality] = useState(1);

  const businessImpactScore = useMemo(
    () => Number(revenueImpact) + Number(reputationImpact) + Number(legalImpact) + Number(serviceCriticality),
    [revenueImpact, reputationImpact, legalImpact, serviceCriticality],
  );

  const priorityScore = useMemo(
    () => (0.55 * Number(technicalScore)) + (0.45 * businessImpactScore),
    [businessImpactScore, technicalScore],
  );

  const priorityTier = tierFromScore(priorityScore);

  return (
    <div>
      <PageHero
        badge="SECURITY BLUEPRINTS"
        title="Security Feature Blueprints"
        subtitle="Implementasi langsung untuk compliance mapping, AI remediation, prioritisasi, analytics, dan playbook remediasi."
      />

      <section className="bg-dark-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">1) Mapping ke OWASP/CIS/ISO/NIST (Many-to-Many)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {mappingTables.map((table) => (
                <article key={table.name} className="bg-dark-900/70 border border-dark-700 rounded-lg p-4">
                  <h3 className="text-cyan-300 font-mono text-sm mb-2">{table.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{table.purpose}</p>
                  <p className="text-xs text-gray-500">{table.columns.join(' • ')}</p>
                </article>
              ))}
            </div>
            <h3 className="text-white font-semibold mt-6 mb-2">Strategi update versi framework</h3>
            <ol className="list-decimal list-inside text-sm text-gray-300 space-y-1">
              {frameworkUpdateSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">2) AI Assistant Remediasi Kontekstual</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {remediationFlow.map((step) => (
                <span key={step} className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-200 text-xs">
                  {step}
                </span>
              ))}
            </div>
            <pre className="bg-dark-900 border border-dark-700 rounded-lg p-4 text-xs text-gray-300 overflow-x-auto">
{`{
  "root_cause": "Unsanitized user input in SQL query",
  "fix_now": ["Use parameterized query", "Rotate affected credentials"],
  "fix_right": ["Adopt repository layer with safe query builder"],
  "test_verification": ["SAST", "DAST", "integration test"],
  "rollback_plan": "Feature flag to disable risky endpoint",
  "confidence_score": 0.89
}`}
            </pre>
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">3) Prioritisasi Technical + Business Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="text-sm text-gray-300">
                Technical Score (0-10)
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  value={technicalScore}
                  onChange={(e) => setTechnicalScore(e.target.value)}
                  className="mt-1 w-full bg-dark-900 border border-dark-700 rounded px-3 py-2 text-white"
                />
              </label>
              <label className="text-sm text-gray-300">
                Revenue Impact (0-3)
                <input
                  type="number"
                  min="0"
                  max="3"
                  value={revenueImpact}
                  onChange={(e) => setRevenueImpact(e.target.value)}
                  className="mt-1 w-full bg-dark-900 border border-dark-700 rounded px-3 py-2 text-white"
                />
              </label>
              <label className="text-sm text-gray-300">
                Reputation Impact (0-3)
                <input
                  type="number"
                  min="0"
                  max="3"
                  value={reputationImpact}
                  onChange={(e) => setReputationImpact(e.target.value)}
                  className="mt-1 w-full bg-dark-900 border border-dark-700 rounded px-3 py-2 text-white"
                />
              </label>
              <label className="text-sm text-gray-300">
                Legal/Compliance Impact (0-2)
                <input
                  type="number"
                  min="0"
                  max="2"
                  value={legalImpact}
                  onChange={(e) => setLegalImpact(e.target.value)}
                  className="mt-1 w-full bg-dark-900 border border-dark-700 rounded px-3 py-2 text-white"
                />
              </label>
              <label className="text-sm text-gray-300">
                Service Criticality (0-2)
                <input
                  type="number"
                  min="0"
                  max="2"
                  value={serviceCriticality}
                  onChange={(e) => setServiceCriticality(e.target.value)}
                  className="mt-1 w-full bg-dark-900 border border-dark-700 rounded px-3 py-2 text-white"
                />
              </label>
            </div>
            <div className="mt-5 p-4 bg-dark-900 border border-dark-700 rounded-lg">
              <p className="text-sm text-gray-400">Formula: (0.55 × technical) + (0.45 × business)</p>
              <p className="text-lg text-white font-semibold">Priority Score: {priorityScore.toFixed(2)}</p>
              <p className="text-cyan-300">Tier: {priorityTier}</p>
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">4) Trend Analytics & Security Posture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {analyticsKpi.map((kpi) => (
                <article key={kpi.key} className="bg-dark-900 border border-dark-700 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">{kpi.label}</p>
                  <p className="text-2xl text-white font-semibold mt-1">{kpi.value}</p>
                  <p className={`text-xs mt-2 ${toneClass[kpi.tone]}`}>{kpi.trend}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">5) Knowledge Base Playbook Remediasi</h2>
            <p className="text-gray-300 text-sm mb-3">Lifecycle versioning playbook:</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {playbookLifecycle.map((state) => (
                <span key={state} className="px-3 py-1 rounded-full border border-dark-600 text-gray-300 text-xs uppercase">
                  {state}
                </span>
              ))}
            </div>
            <h3 className="text-white font-semibold mb-2">Checklist verifikasi pasca-perbaikan</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {verificationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityBlueprints;
