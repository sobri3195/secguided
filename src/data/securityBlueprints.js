export const mappingTables = [
  {
    name: 'findings',
    purpose: 'Master data temuan keamanan.',
    columns: ['id', 'title', 'category', 'severity', 'asset_id', 'created_at'],
  },
  {
    name: 'frameworks',
    purpose: 'Daftar framework standar dan versinya.',
    columns: ['id', 'name', 'major_version', 'release_date', 'status'],
  },
  {
    name: 'controls',
    purpose: 'Kontrol di tiap framework.',
    columns: ['id', 'framework_id', 'control_code', 'title', 'description', 'domain', 'is_active'],
  },
  {
    name: 'finding_control_mappings',
    purpose: 'Bridge many-to-many antara finding dan control.',
    columns: ['id', 'finding_id', 'control_id', 'mapping_confidence', 'mapping_source', 'created_by', 'created_at'],
  },
  {
    name: 'control_aliases',
    purpose: 'Crosswalk antar standar/framework.',
    columns: ['id', 'control_id', 'alias_code', 'alias_framework'],
  },
];

export const frameworkUpdateSteps = [
  'Import versi framework terbaru sebagai snapshot baru (immutable).',
  'Jalankan control diff: added / modified / deprecated.',
  'Generate alias map dari kontrol lama ke kontrol baru untuk histori report.',
  'Re-run auto mapping untuk finding aktif dan simpan versi mapping baru.',
  'Expose report by framework version untuk kebutuhan audit point-in-time.',
];

export const remediationFlow = [
  'Input Normalizer',
  'Context Engine',
  'RAG Retrieval',
  'Recommendation Generator',
  'Policy Guardrail',
  'Human Review & Ticketing',
];

export const analyticsKpi = [
  {
    key: 'mttr',
    label: 'MTTR',
    value: '3.8 hari',
    trend: '-12% vs bulan lalu',
    tone: 'good',
  },
  {
    key: 'reopenRate',
    label: 'Reopen Rate',
    value: '7.4%',
    trend: '-2.1% vs bulan lalu',
    tone: 'good',
  },
  {
    key: 'overdueSla',
    label: 'Overdue SLA',
    value: '11.2%',
    trend: '+1.8% vs bulan lalu',
    tone: 'warn',
  },
  {
    key: 'postureScore',
    label: 'Posture Score',
    value: '78/100',
    trend: '+4 poin',
    tone: 'good',
  },
];

export const playbookLifecycle = ['draft', 'approved', 'deprecated', 'archived'];

export const verificationChecklist = [
  'Functional verification: fitur tetap berjalan.',
  'Security verification: payload exploit lama sudah tidak berhasil.',
  'Regression automation: test unit/integration/security ditambahkan.',
  'Monitoring verification: alert & log rule aktif.',
  'Closure evidence: PR, hasil test, dan artefak validasi dilampirkan.',
];
