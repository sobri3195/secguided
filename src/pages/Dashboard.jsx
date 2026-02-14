import React, { useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const MATERIAL_CATALOG = [
  {
    id: 'web-security',
    title: 'Cyber Website',
    level: 'Pemula → Menengah',
    description: 'Belajar SQL Injection, XSS, CSRF, dan secure coding dasar untuk aplikasi web.',
    topics: ['OWASP Top 10', 'Input validation', 'Session security', 'Bug bounty workflow'],
    materials: [
      'Modul 1: Dasar HTTP, cookies, session',
      'Modul 2: SQLi dan cara pencegahannya',
      'Modul 3: XSS Stored vs Reflected',
      'Modul 4: Hardening login & authentication',
    ],
    questions: [
      'Apa perbedaan antara Reflected XSS dan Stored XSS?',
      'Kenapa prepared statement bisa mencegah SQL Injection?',
      'Langkah validasi input yang benar pada form login?',
      'Apa risiko jika cookie session tidak menggunakan HttpOnly?',
    ],
  },
  {
    id: 'android-security',
    title: 'Cyber Android',
    level: 'Menengah',
    description: 'Fokus ke keamanan aplikasi Android: insecure storage, API abuse, dan reverse engineering dasar.',
    topics: ['Mobile OWASP', 'Secure storage', 'Certificate pinning', 'APK analysis'],
    materials: [
      'Modul 1: Struktur APK dan AndroidManifest',
      'Modul 2: Penyimpanan aman (Keystore, EncryptedSharedPreferences)',
      'Modul 3: API protection & token handling',
      'Modul 4: Runtime protection anti-tampering',
    ],
    questions: [
      'Kenapa hardcoded API key berbahaya di aplikasi Android?',
      'Apa fungsi certificate pinning?',
      'Bagaimana cara aman menyimpan refresh token di Android?',
      'Sebutkan indikator aplikasi Android rentan reverse engineering.',
    ],
  },
  {
    id: 'wifi-security',
    title: 'Cyber WiFi',
    level: 'Pemula → Menengah',
    description: 'Belajar dasar keamanan jaringan wireless, enkripsi, segmentasi, dan monitoring akses ilegal.',
    topics: ['WPA2/WPA3', 'Rogue AP', 'Network segmentation', 'Packet analysis'],
    materials: [
      'Modul 1: Dasar protokol 802.11',
      'Modul 2: Perbedaan WPA2 dan WPA3',
      'Modul 3: Deteksi Evil Twin / Rogue Access Point',
      'Modul 4: Isolasi client dan VLAN tamu',
    ],
    questions: [
      'Apa kelemahan utama dari WiFi Open tanpa enkripsi?',
      'Apa yang dimaksud Evil Twin attack?',
      'Kenapa VLAN tamu penting untuk jaringan kantor?',
      'Bagaimana langkah respon awal jika ada rogue AP?',
    ],
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    level: 'Menengah → Lanjutan',
    description: 'Materi proses incident handling, containment, investigasi, dan pelaporan pasca-insiden.',
    topics: ['NIST IR lifecycle', 'Containment', 'Forensic basics', 'Post-incident report'],
    materials: [
      'Modul 1: Persiapan SOP insiden',
      'Modul 2: Triage alert prioritas tinggi',
      'Modul 3: Isolasi endpoint terinfeksi',
      'Modul 4: Pelaporan RCA dan lesson learned',
    ],
    questions: [
      'Apa tujuan fase containment saat terjadi insiden?',
      'Sebutkan data minimal yang harus ada di timeline insiden.',
      'Kapan tim harus melakukan eskalasi ke manajemen?',
      'Mengapa post-incident review wajib dilakukan?',
    ],
  },
];

const severityFromScore = (score) => {
  if (score >= 85) return 'Critical';
  if (score >= 65) return 'High';
  if (score >= 45) return 'Medium';
  if (score >= 25) return 'Low';
  return 'Informational';
};

const TEMPLATE_LIBRARY = {
  executive: {
    title: 'Executive Summary',
    sections: ['Risk highlights', 'Security KPI', 'Top 5 temuan', 'Rencana prioritas 30 hari'],
  },
  technical: {
    title: 'Technical Detail',
    sections: ['Detail CVE/temuan', 'Langkah reproduksi', 'Evidence / PoC', 'Patch guidance'],
  },
  compliance: {
    title: 'Compliance Mapping',
    sections: ['Mapping ISO/NIST/PCI', 'Gap analysis', 'Control ownership', 'Evidence status'],
  },
};

const CHANNELS = [
  { name: 'Slack', retry: 6, rate: '1 req/sec/webhook', fallback: 'Teams' },
  { name: 'Teams', retry: 6, rate: '4 req/sec/tenant', fallback: 'Email' },
  { name: 'Email', retry: 5, rate: '100 msg/min/domain', fallback: 'Webhook' },
  { name: 'Telegram', retry: 4, rate: '30 msg/sec/bot', fallback: 'Email' },
  { name: 'Webhook', retry: 6, rate: 'Tenant-based token bucket', fallback: '-' },
];

const ASSET_SUMMARY = [
  { label: 'Domain', total: 28, exposed: 12, delta: '+3' },
  { label: 'Subdomain', total: 140, exposed: 55, delta: '+10' },
  { label: 'IP', total: 67, exposed: 18, delta: '-2' },
  { label: 'Service', total: 210, exposed: 47, delta: '+9' },
  { label: 'Certificate', total: 93, exposed: 0, delta: '+1' },
];

const findCadence = (severity) => (severity === 'Critical' || severity === 'High' ? 'Harian' : 'Mingguan');

const StudentDashboard = ({ user }) => {
  const [selectedMaterialId, setSelectedMaterialId] = useState(MATERIAL_CATALOG[0].id);
  const selectedMaterial = MATERIAL_CATALOG.find((material) => material.id === selectedMaterialId) || MATERIAL_CATALOG[0];

  return (
    <div className="min-h-screen bg-dark-900 text-white p-6 md:p-8 space-y-8">
      <header className="bg-dark-800 rounded-xl border border-dark-700 p-6">
        <h1 className="text-3xl font-bold mb-3">Dashboard Siswa</h1>
        <p className="text-gray-300">Mulai pembelajaran dengan memilih materi terlebih dahulu, lalu lanjut ke latihan soal sesuai topik.</p>
        <p className="text-gray-400 mt-2 text-sm">Login sebagai: <span className="text-cyan-300 capitalize">{user?.role || 'student'}</span> • {user?.email}</p>
      </header>

      <section className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">1) Pilih Materi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {MATERIAL_CATALOG.map((material) => (
            <button
              key={material.id}
              type="button"
              onClick={() => setSelectedMaterialId(material.id)}
              className={`text-left rounded-lg border p-4 transition-colors ${selectedMaterialId === material.id ? 'border-cyan-400 bg-cyan-500/10' : 'border-dark-600 bg-dark-900 hover:border-cyan-700'}`}
            >
              <p className="text-sm text-cyan-300">{material.level}</p>
              <p className="font-semibold mt-1">{material.title}</p>
              <p className="text-xs text-gray-400 mt-2">{material.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <article className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">2) Materi: {selectedMaterial.title}</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {selectedMaterial.materials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="rounded-lg bg-dark-900 border border-dark-700 p-4">
            <p className="text-sm text-gray-400 mb-2">Topik yang akan dipelajari:</p>
            <div className="flex flex-wrap gap-2">
              {selectedMaterial.topics.map((topic) => (
                <span key={topic} className="text-xs px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-200">{topic}</span>
              ))}
            </div>
          </div>
        </article>

        <article className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">3) Latihan Soal: {selectedMaterial.title}</h2>
          <ol className="list-decimal list-inside text-gray-200 space-y-3">
            {selectedMaterial.questions.map((question) => (
              <li key={question} className="leading-relaxed">{question}</li>
            ))}
          </ol>
          <button type="button" className="px-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-700 transition-colors text-sm font-medium">
            Mulai Kuis {selectedMaterial.title}
          </button>
        </article>
      </section>
    </div>
  );
};

const OpsDashboard = ({ user }) => {
  const [factors, setFactors] = useState({ impact: 4, likelihood: 3, asset: 4, exposure: 3, multiplier: 1.0 });
  const [weights, setWeights] = useState({ impact: 0.35, likelihood: 0.3, asset: 0.2, exposure: 0.15 });
  const [mode, setMode] = useState('executive');
  const [findingStatus, setFindingStatus] = useState('In Progress');
  const [openedAt, setOpenedAt] = useState('2026-01-28');

  const weightSum = useMemo(() => Object.values(weights).reduce((sum, value) => sum + Number(value || 0), 0), [weights]);

  const riskResult = useMemo(() => {
    const weighted =
      factors.impact * weights.impact +
      factors.likelihood * weights.likelihood +
      factors.asset * weights.asset +
      factors.exposure * weights.exposure;

    const score = Math.min(100, (weighted / 5) * 100 * factors.multiplier);

    return {
      score: Number.isFinite(score) ? score.toFixed(2) : '0.00',
      severity: severityFromScore(score),
    };
  }, [factors, weights]);

  const slaResult = useMemo(() => {
    const severityWindow = {
      Critical: 7,
      High: 14,
      Medium: 30,
      Low: 60,
      Informational: 90,
    };

    const days = severityWindow[riskResult.severity] || 30;
    const opened = new Date(openedAt);
    const due = new Date(opened);
    due.setDate(due.getDate() + days);

    const now = new Date('2026-02-14T00:00:00Z');
    const diffMs = due - now;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    let escalation = 'Monitoring normal';
    if (diffDays <= 0) escalation = 'Overdue: escalate ke manager + governance';
    else if (diffDays <= 2) escalation = 'T-48 jam: notify owner + team lead';

    return {
      dueDate: due.toISOString().slice(0, 10),
      remainingDays: diffDays,
      escalation,
      reminder: findCadence(riskResult.severity),
      workflowNext:
        findingStatus === 'Open'
          ? 'In Progress'
          : findingStatus === 'In Progress'
            ? 'Pending Validation'
            : findingStatus === 'Pending Validation'
              ? 'Closed'
              : '-',
    };
  }, [findingStatus, openedAt, riskResult.severity]);

  const onNumberChange = (setter, key, min, max) => (event) => {
    const value = Number(event.target.value);
    const clamped = Math.min(max, Math.max(min, value));
    setter((prev) => ({ ...prev, [key]: clamped }));
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white p-6 md:p-8 space-y-8">
      <header className="bg-dark-800 rounded-xl border border-dark-700 p-6">
        <h1 className="text-3xl font-bold mb-3">Security Operations Dashboard</h1>
        <p className="text-gray-300">Implementasi awal untuk risk scoring, report template, notifikasi multi-channel, inventory aset, dan SLA workflow.</p>
        <p className="text-gray-400 mt-2 text-sm">Login sebagai: <span className="text-cyan-300 capitalize">{user?.role || 'student'}</span> • {user?.email}</p>
      </header>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <article className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">1) Risk Scoring Otomatis</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {['impact', 'likelihood', 'asset', 'exposure'].map((key) => (
              <label key={key} className="block">
                <span className="capitalize text-gray-300">{key}</span>
                <input type="number" min="1" max="5" value={factors[key]} onChange={onNumberChange(setFactors, key, 1, 5)} className="mt-1 w-full rounded bg-dark-900 border border-dark-600 px-3 py-2" />
              </label>
            ))}
          </div>

          <div className="rounded-lg bg-dark-900 border border-dark-700 p-4">
            <p>Weight sum: <span className={Math.abs(weightSum - 1) < 0.01 ? 'text-green-400' : 'text-yellow-400'}>{weightSum.toFixed(2)}</span></p>
            <p>Risk score: <span className="text-cyan-300 font-semibold">{riskResult.score}</span></p>
            <p>Severity: <span className="text-cyan-200">{riskResult.severity}</span></p>
          </div>
        </article>

        <article className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">2) Template Laporan Dinamis</h2>
          <div className="flex flex-wrap gap-2">
            {Object.keys(TEMPLATE_LIBRARY).map((key) => (
              <button type="button" key={key} onClick={() => setMode(key)} className={`px-3 py-2 rounded border text-sm ${mode === key ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200' : 'bg-dark-900 border-dark-600 text-gray-300'}`}>
                {TEMPLATE_LIBRARY[key].title}
              </button>
            ))}
          </div>

          <div className="bg-dark-900 border border-dark-700 rounded-lg p-4">
            <p className="font-semibold mb-2">Preview: {TEMPLATE_LIBRARY[mode].title}</p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              {TEMPLATE_LIBRARY[mode].sections.map((section) => (
                <li key={section}>{section}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <article className="bg-dark-800 border border-dark-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">3) Notifikasi Multi-Channel</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-400 border-b border-dark-600">
                  <th className="py-2">Channel</th>
                  <th className="py-2">Max Retry</th>
                  <th className="py-2">Rate Limit</th>
                  <th className="py-2">Fallback</th>
                </tr>
              </thead>
              <tbody>
                {CHANNELS.map((channel) => (
                  <tr key={channel.name} className="border-b border-dark-700/60">
                    <td className="py-2">{channel.name}</td>
                    <td className="py-2">{channel.retry}</td>
                    <td className="py-2 text-gray-300">{channel.rate}</td>
                    <td className="py-2 text-cyan-300">{channel.fallback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="bg-dark-800 border border-dark-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">4) Attack Surface Inventory</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {ASSET_SUMMARY.map((asset) => (
              <div key={asset.label} className="rounded-lg border border-dark-600 bg-dark-900 p-3">
                <p className="text-sm text-gray-400">{asset.label}</p>
                <p className="text-lg font-semibold">{asset.total}</p>
                <p className="text-xs text-gray-400">Exposed: <span className="text-amber-300">{asset.exposed}</span></p>
                <p className="text-xs text-cyan-300">Weekly: {asset.delta}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">5) Workflow Validasi & SLA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <label>
            Status temuan
            <select value={findingStatus} onChange={(e) => setFindingStatus(e.target.value)} className="mt-1 w-full rounded bg-dark-900 border border-dark-600 px-3 py-2">
              <option>Open</option>
              <option>In Progress</option>
              <option>Pending Validation</option>
              <option>Closed</option>
            </select>
          </label>

          <label>
            Opened at
            <input type="date" value={openedAt} onChange={(e) => setOpenedAt(e.target.value)} className="mt-1 w-full rounded bg-dark-900 border border-dark-600 px-3 py-2" />
          </label>

          <div className="rounded bg-dark-900 border border-dark-700 px-3 py-2">
            <p>Next status: <span className="text-cyan-300">{slaResult.workflowNext}</span></p>
            <p>Due date: <span className="text-cyan-300">{slaResult.dueDate}</span></p>
            <p>Reminder: {slaResult.reminder}</p>
            <p>Remaining: {slaResult.remainingDays} hari</p>
          </div>
        </div>

        <p className="text-sm text-amber-300">Escalation state: {slaResult.escalation}</p>
      </section>
    </div>
  );
};

const Dashboard = () => {
  const { user } = useAuth();

  if ((user?.role || 'student') === 'student') {
    return <StudentDashboard user={user} />;
  }

  return <OpsDashboard user={user} />;
};

export default Dashboard;
