const questionTemplates = [
  'Langkah awal paling tepat saat memulai {chapter} adalah?',
  'Pada topik {chapter}, kontrol yang paling efektif untuk mencegah risiko adalah?',
  'Dalam skenario {scenario}, apa prioritas tim keamanan?',
  'Jika indikator kompromi ditemukan pada area {chapter}, tindakan pertama yang harus dilakukan adalah?',
  'Dokumen apa yang wajib diperbarui setelah implementasi kontrol {chapter}?',
  'Metrik yang paling relevan untuk mengevaluasi keberhasilan program {chapter} adalah?',
  'Ketika audit internal meninjau {chapter}, bukti yang paling kuat adalah?',
  'Prinsip "least privilege" pada {chapter} paling tepat diterapkan dengan cara?',
  'Untuk meningkatkan kesiapan tim pada {chapter}, aktivitas rutin yang disarankan adalah?',
  'Jika terjadi kegagalan kontrol pada {chapter}, pendekatan mitigasi tercepat adalah?',
  'Strategi hardening yang paling realistis untuk area {chapter} adalah?',
  'Dalam proses continuous improvement {chapter}, langkah setelah evaluasi adalah?',
  'Risiko terbesar jika organisasi mengabaikan {chapter} biasanya terkait?',
  'Kontrol deteksi dini yang cocok untuk {chapter} adalah?',
  'Pelatihan paling penting untuk personel yang menangani {chapter} adalah?'
];

const chapterDefinitions = [
  { title: 'Fundamental Cyber Security', scenario: 'peningkatan ancaman phishing', bestPractices: ['Asset inventory dan klasifikasi data', 'Kebijakan keamanan berbasis risiko', 'Pelatihan awareness berkala'], traps: ['Menunda patch selama kuartal berjalan', 'Berbagi akun tim untuk efisiensi', 'Mengandalkan antivirus tanpa monitoring'] },
  { title: 'Network Security', scenario: 'trafik lateral movement di jaringan internal', bestPractices: ['Segmentasi jaringan berbasis zona', 'Firewall rules dengan prinsip deny by default', 'Network IDS/IPS dengan alert prioritas'], traps: ['Membuka semua port antar VLAN', 'Menggunakan kredensial perangkat default', 'Tidak menyimpan log jaringan'] },
  { title: 'Operating System Hardening', scenario: 'server baru masuk produksi', bestPractices: ['Nonaktifkan service yang tidak digunakan', 'Baseline hardening sesuai CIS benchmark', 'Patching otomatis dengan jadwal terkontrol'], traps: ['Semua user diberi hak administrator', 'Membiarkan akun guest aktif', 'Tidak mengaudit konfigurasi OS'] },
  { title: 'Identity and Access Management', scenario: 'permintaan akses lintas divisi meningkat', bestPractices: ['Multi-factor authentication untuk akses kritikal', 'Role-based access control (RBAC)', 'Review hak akses berkala'], traps: ['Akses permanen untuk akun kontraktor', 'Satu akun dipakai banyak user', 'Tidak ada proses offboarding'] },
  { title: 'Cryptography Fundamentals', scenario: 'pertukaran data sensitif antar layanan', bestPractices: ['Gunakan TLS modern dan sertifikat valid', 'Enkripsi data at-rest dengan kunci terkelola', 'Rotasi kunci kriptografi terjadwal'], traps: ['Menyimpan kunci di source code', 'Menggunakan algoritma hash usang', 'Tidak memverifikasi sertifikat'] },
  { title: 'Web Application Security', scenario: 'aplikasi publik menerima input user masif', bestPractices: ['Validasi dan sanitasi input sisi server', 'Implementasi secure headers', 'Pengujian OWASP Top 10 rutin'], traps: ['Membangun query SQL dengan string concat', 'Menonaktifkan CSRF token', 'Menaruh secret di JavaScript client'] },
  { title: 'API Security', scenario: 'integrasi API pihak ketiga bertambah cepat', bestPractices: ['Gunakan OAuth2/OIDC untuk otorisasi', 'Rate limiting dan throttling endpoint', 'Schema validation untuk request/response'], traps: ['Endpoint admin tanpa autentikasi kuat', 'Token akses tanpa expiry', 'Tidak ada versioning API'] },
  { title: 'Secure Coding Practices', scenario: 'tim dev menargetkan rilis mingguan', bestPractices: ['Code review dengan checklist keamanan', 'Static application security testing (SAST)', 'Dependency scanning otomatis di CI'], traps: ['Skip review demi kecepatan release', 'Mengabaikan warning compiler keamanan', 'Tidak memperbarui library rentan'] },
  { title: 'Vulnerability Management', scenario: 'hasil scanning menemukan ratusan temuan', bestPractices: ['Prioritasi patch berdasarkan CVSS dan konteks bisnis', 'SLA remediation sesuai tingkat kritikalitas', 'Validasi ulang setelah perbaikan'], traps: ['Memperbaiki temuan tanpa verifikasi', 'Menunda temuan kritikal tanpa mitigasi', 'Tidak memiliki owner per aset'] },
  { title: 'Penetration Testing Basics', scenario: 'organisasi menyiapkan assessment tahunan', bestPractices: ['Tentukan scope dan rules of engagement jelas', 'Dokumentasikan bukti temuan yang dapat direproduksi', 'Sampaikan rekomendasi perbaikan yang actionable'], traps: ['Testing tanpa izin tertulis', 'Eksploitasi berlebihan di sistem produksi', 'Laporan hanya berisi tool output mentah'] },
  { title: 'Security Operations Center (SOC)', scenario: 'volume alert SIEM melonjak', bestPractices: ['Use case SIEM berbasis threat scenario', 'Playbook triage insiden terstandar', 'Korelasi log lintas endpoint, network, dan cloud'], traps: ['Menutup alert tanpa investigasi', 'Tidak ada handoff antar shift', 'Menyimpan alert tanpa prioritas'] },
  { title: 'Incident Response', scenario: 'indikasi ransomware pada workstation', bestPractices: ['Isolasi host terdampak secepat mungkin', 'Aktifkan prosedur IR dan chain of custody', 'Komunikasi insiden sesuai rencana krisis'], traps: ['Mematikan bukti forensik sembarangan', 'Menghapus file tanpa dokumentasi', 'Menunda eskalasi ke tim IR'] },
  { title: 'Digital Forensics', scenario: 'tim harus mengumpulkan bukti legal', bestPractices: ['Imaging forensik dengan hash verification', 'Dokumentasi chain of custody lengkap', 'Analisis artefak berdasarkan timeline'], traps: ['Menganalisis disk asli tanpa write blocker', 'Tidak menghitung hash evidence', 'Mencampur data kasus berbeda'] },
  { title: 'Cloud Security', scenario: 'migrasi workload ke cloud publik', bestPractices: ['Terapkan prinsip shared responsibility', 'Hardening IAM cloud dan least privilege', 'Aktifkan cloud logging dan konfigurasi guardrails'], traps: ['Storage bucket publik tanpa kontrol', 'Satu akun root untuk semua operasi', 'Tidak memonitor misconfiguration cloud'] },
  { title: 'Container and Kubernetes Security', scenario: 'deployment microservices meningkat', bestPractices: ['Image scanning sebelum deployment', 'Pod security standards diterapkan', 'Secrets management terpusat dan terenkripsi'], traps: ['Menjalankan container sebagai root', 'Menggunakan image tanpa provenance', 'Mengekspos dashboard cluster ke internet'] },
  { title: 'Threat Intelligence', scenario: 'muncul IOC baru dari vendor eksternal', bestPractices: ['Validasi relevansi intel terhadap aset internal', 'Integrasi feed intel ke SIEM/SOAR', 'Update detection rule berdasarkan TTP terkini'], traps: ['Mengimpor semua feed tanpa filter', 'Tidak mengukur kualitas intel', 'Menyebarkan IOC tanpa konteks'] },
  { title: 'Governance, Risk, and Compliance', scenario: 'audit kepatuhan regulasi tahunan', bestPractices: ['Risk register diperbarui berkala', 'Kontrol dipetakan ke standar yang berlaku', 'Evidence audit disimpan terstruktur'], traps: ['Kontrol hanya di dokumen tanpa implementasi', 'Risk assessment dilakukan sekali lalu ditinggal', 'Tidak ada pemilik risiko yang jelas'] },
  { title: 'Security Awareness and Training', scenario: 'angka klik simulasi phishing tinggi', bestPractices: ['Program awareness berbasis peran', 'Simulasi phishing berkala dengan umpan balik', 'Microlearning keamanan setiap bulan'], traps: ['Pelatihan satu kali saat onboarding saja', 'Materi pelatihan tidak relevan pekerjaan', 'Tidak mengukur efektivitas pelatihan'] },
  { title: 'Business Continuity and Disaster Recovery', scenario: 'layanan kritikal mengalami downtime besar', bestPractices: ['Tetapkan RTO/RPO yang disepakati bisnis', 'Uji failover dan restore secara periodik', 'Simpan backup immutable dan offline'], traps: ['Backup tidak pernah diuji restore', 'DR plan tidak pernah disimulasikan', 'Semua backup berada di lokasi yang sama'] },
  { title: 'Emerging Security Technologies', scenario: 'adopsi AI dan zero trust dimulai', bestPractices: ['Pilot project dengan kontrol keamanan sejak desain', 'Evaluasi risiko supply chain teknologi baru', 'Monitoring berkelanjutan terhadap model dan otomatisasi'], traps: ['Implementasi teknologi tanpa threat model', 'Mengaktifkan fitur AI tanpa governance data', 'Tidak mengevaluasi risiko privasi'] }
];

const rotateWrongAnswers = (traps, index) => [
  traps[index % traps.length],
  traps[(index + 1) % traps.length],
  traps[(index + 2) % traps.length],
];

export const cyberSecurityQuestionBank = chapterDefinitions.map((chapter, chapterIndex) => {
  const questions = questionTemplates.map((template, index) => {
    const prompt = template
      .replaceAll('{chapter}', chapter.title)
      .replaceAll('{scenario}', chapter.scenario);

    const correctAnswer = chapter.bestPractices[index % chapter.bestPractices.length];
    const wrongAnswers = rotateWrongAnswers(chapter.traps, index);
    const options = [correctAnswer, ...wrongAnswers];

    return {
      id: `${chapterIndex + 1}-${index + 1}`,
      prompt,
      options,
      correctAnswerIndex: 0,
    };
  });

  return {
    id: chapterIndex + 1,
    title: chapter.title,
    scenario: chapter.scenario,
    questionCount: questions.length,
    questions,
  };
});

export const questionBankSummary = {
  chapterCount: cyberSecurityQuestionBank.length,
  totalQuestions: cyberSecurityQuestionBank.reduce((total, chapter) => total + chapter.questionCount, 0),
};
