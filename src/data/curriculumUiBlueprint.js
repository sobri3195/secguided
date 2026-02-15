export const curriculumModules = [
  {
    id: 'M1',
    title: 'Fundamental Keamanan Siber',
    level: 'Beginner',
    duration: '2 minggu',
    prerequisite: 'Dasar komputer & internet',
    goals: [
      'Peserta mampu menjelaskan CIA Triad dan prinsip Zero Trust.',
      'Peserta mampu mengidentifikasi aset, ancaman, dan risiko dasar.',
      'Peserta mampu membaca indikator insiden sederhana dari log dasar.',
    ],
    topics: ['CIA Triad', 'Threat, Vulnerability, Risk', 'Defense in Depth', 'Dasar log keamanan'],
    labs: ['Lab 1: Klasifikasi aset dan risiko organisasi mini.', 'Lab 2: Analisis log autentikasi dasar.'],
    graduationCriteria: ['Menyelesaikan minimal 80% lab.', 'Nilai post-test minimal 75.'],
    evaluation: { preTest: '5 soal', practice: '10 soal', postTest: '15 soal' },
  },
  {
    id: 'M2',
    title: 'Network Defense & Monitoring',
    level: 'Intermediate',
    duration: '3 minggu',
    prerequisite: 'Memahami dasar TCP/IP',
    goals: [
      'Peserta mampu menjelaskan fungsi firewall, IDS/IPS, dan SIEM.',
      'Peserta mampu melakukan triage alert dengan prioritas tepat.',
      'Peserta mampu merekomendasikan mitigasi untuk skenario serangan jaringan.',
    ],
    topics: ['Firewall policy', 'IDS/IPS', 'SIEM correlation', 'Alert triage & tuning'],
    labs: ['Lab 1: Menyusun rule firewall dasar.', 'Lab 2: Triage 20 alert dan klasifikasi severity.'],
    graduationCriteria: ['Menyelesaikan minimal 80% lab.', 'Nilai post-test minimal 75.'],
    evaluation: { preTest: '5 soal', practice: '10 soal', postTest: '15 soal' },
  },
  {
    id: 'M3',
    title: 'Incident Response & Hardening Lanjutan',
    level: 'Advanced',
    duration: '3 minggu',
    prerequisite: 'Lulus modul Beginner & Intermediate',
    goals: [
      'Peserta mampu menyusun playbook respons insiden ransomware.',
      'Peserta mampu melakukan analisis akar masalah dari skenario kompromi.',
      'Peserta mampu mempresentasikan rekomendasi perbaikan teknis berbasis prioritas risiko.',
    ],
    topics: ['IR lifecycle', 'Chain of custody', 'Threat hunting dasar', 'Hardening prioritas tinggi'],
    labs: ['Lab 1: Simulasi tabletop incident response.', 'Lab 2: Hardening endpoint dan validasi kontrol.'],
    graduationCriteria: ['Menyelesaikan minimal 80% lab.', 'Nilai post-test minimal 75.', 'Nilai praktik minimal 70.'],
    evaluation: { preTest: '5 soal', practice: '10 soal', postTest: '15 soal' },
  },
];

export const questionStandards = {
  characteristics: [
    'Sesuai tujuan pembelajaran (tidak keluar dari materi modul).',
    'Jelas dan tidak ambigu.',
    'Satu fokus per soal.',
    'Kontekstual keamanan siber dengan kasus realistis.',
    'Memiliki tingkat kesulitan: mudah, sedang, sulit.',
  ],
  composition: [
    '9 soal pilihan ganda (konsep).',
    '4 soal studi kasus singkat (analisis).',
    '2 soal praktik/lab task (penerapan).',
  ],
  difficulty: ['30% mudah', '50% sedang', '20% sulit'],
  bloom: [
    'Remember/Understand: definisi, fungsi, konsep dasar.',
    'Apply: memilih langkah mitigasi, membaca log sederhana.',
    'Analyze: identifikasi akar masalah dari skenario.',
  ],
};

export const questionTemplates = [
  {
    title: 'Pilihan Ganda',
    body: `- ID: M1-PG-001\n- Tipe: Pilihan Ganda\n- Level: Mudah/Sedang/Sulit\n- Tujuan: [kode tujuan pembelajaran]\n- Pertanyaan: ...\n- Opsi:\n  A. ...\n  B. ...\n  C. ...\n  D. ...\n- Jawaban Benar: B\n- Pembahasan: ...`,
  },
  {
    title: 'Studi Kasus',
    body: `- ID: M1-SK-001\n- Tipe: Studi Kasus\n- Level: Sedang/Sulit\n- Tujuan: [kode tujuan pembelajaran]\n- Kasus: [paragraf singkat insiden]\n- Pertanyaan: Berdasarkan kasus di atas, langkah paling tepat adalah ...\n- Jawaban Ideal: ...\n- Rubrik Penilaian:\n  - Identifikasi masalah (40%)\n  - Solusi yang diusulkan (40%)\n  - Alasan teknis (20%)`,
  },
  {
    title: 'Lab Task',
    body: `- ID: M1-LAB-001\n- Tipe: Praktik\n- Level: Sedang/Sulit\n- Tujuan: [kode tujuan pembelajaran]\n- Instruksi: ...\n- Output yang harus dikumpulkan: screenshot/log/laporan\n- Rubrik:\n  - Ketepatan langkah (50%)\n  - Hasil akhir (30%)\n  - Dokumentasi (20%)`,
  },
];

export const validationChecklist = [
  'Soal sesuai modul dan tujuan pembelajaran.',
  'Tidak ada jawaban ganda yang benar (untuk pilihan ganda).',
  'Pembahasan tersedia dan benar secara teknis.',
  'Tingkat kesulitan sudah diberi label.',
  'Bahasa jelas, singkat, dan konsisten.',
  'Sudah direview minimal oleh 1 reviewer materi.',
];

export const miniEvaluationPackage = {
  preTest: '5 PG (cek pengetahuan awal)',
  practice: '7 PG + 3 studi kasus',
  postTest: '9 PG + 4 studi kasus + 2 lab task',
  passingScore: 'Nilai total minimal 75/100',
  labScore: 'Nilai praktik (lab) minimal 70/100',
};

export const uiImplementation = [
  'Header modul (judul, level, durasi, progress).',
  'Accordion materi inti.',
  'Card praktik/lab.',
  'Panel evaluasi (pre-test, latihan, post-test).',
  'Ringkasan skor + rekomendasi lanjut modul berikutnya.',
];
