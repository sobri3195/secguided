const eliteChapters = [
  {
    id: 1,
    title: 'Fondasi Jaringan & Web',
    objective: 'Memahami alur komunikasi data modern dari layer jaringan sampai aplikasi web.',
    materials: ['OSI/TCP-IP', 'DNS', 'HTTP/HTTPS', 'TLS handshake', 'VPN', 'NAT & routing'],
    questions: [
      'Jelaskan perbedaan model OSI dan TCP/IP serta pemetaan layer utamanya.',
      'Mengapa DNS cache poisoning berbahaya bagi integritas komunikasi?',
      'Apa beda HTTP dan HTTPS dari sisi kerahasiaan dan integritas data?',
      'Uraikan proses TLS handshake secara ringkas.',
      'Kapan VPN membantu keamanan, dan kapan tidak cukup?',
      'Apa fungsi NAT dalam jaringan modern?',
      'Bagaimana cara kerja routing default gateway pada host?',
      'Jelaskan perbedaan TCP vs UDP dan contoh penggunaan keamanan relevan.',
      'Mengapa header HTTP security (mis. CSP, HSTS) penting?',
      'Buat diagram sederhana alur request browser ke server hingga response kembali.'
    ]
  },
  {
    id: 2,
    title: 'Sistem Operasi & Permissions',
    objective: 'Membangun pemahaman kontrol keamanan pada Linux/Windows dan model hak akses.',
    materials: ['Linux internals', 'Windows basics', 'Permission model', 'Process management', 'Hardening dasar'],
    questions: [
      'Jelaskan perbedaan proses dan thread di Linux.',
      'Apa dampak permission file 777 pada server produksi?',
      'Mengapa prinsip least privilege penting pada user account?',
      'Bandingkan autentikasi lokal vs domain pada lingkungan Windows.',
      'Apa itu service account dan risiko jika kredensialnya bocor?',
      'Jelaskan konsep privilege escalation pada Linux secara defensif.',
      'Mengapa hardening SSH diperlukan meski memakai password kuat?',
      'Apa hubungan patch management dengan pengurangan attack surface?',
      'Bagaimana logging sistem membantu forensik insiden?',
      'Buat checklist hardening awal untuk VM Linux baru.'
    ]
  },
  {
    id: 3,
    title: 'Dasar Pemrograman untuk Security',
    objective: 'Mampu membuat otomasi sederhana dan membaca kode dengan perspektif keamanan.',
    materials: ['Python', 'Bash', 'JavaScript dasar', 'C dasar (pointer & memori)', 'CLI tooling'],
    questions: [
      'Mengapa Python populer untuk otomasi keamanan?',
      'Tulis pseudocode parsing log dan hitung IP terbanyak.',
      'Apa risiko eval() pada JavaScript/Python jika input tidak tervalidasi?',
      'Jelaskan konsep pointer di C dan hubungannya dengan memory bug.',
      'Kapan Bash script lebih tepat dibanding Python?',
      'Apa fungsi virtual environment pada proyek Python security?',
      'Jelaskan beda encoding, hashing, dan encryption.',
      'Mengapa error handling penting pada script scanning internal?',
      'Bagaimana cara aman menyimpan API key pada script?',
      'Buat outline tool CLI sederhana untuk validasi URL internal.'
    ]
  },
  {
    id: 4,
    title: 'Dasar Keamanan & Metodologi',
    objective: 'Mampu bekerja sistematis, berbasis evidence, dan sesuai prioritas risiko.',
    materials: ['CIA triad', 'Threat modeling', 'OWASP Top 10', 'Risk vs threat vs vulnerability', 'Reporting'],
    questions: [
      'Jelaskan CIA triad dengan contoh pelanggaran masing-masing.',
      'Apa itu threat modeling dan kapan dilakukan?',
      'Uraikan OWASP Top 10 secara ringkas (versi terbaru yang kamu gunakan).',
      'Mengapa scope tertulis wajib sebelum pentest?',
      'Apa perbedaan vulnerability, threat, dan risk?',
      'Bagaimana menghitung prioritas remediation berdasarkan dampak bisnis?',
      'Apa itu false positive dan false negative pada scanner?',
      'Mengapa evidence penting dalam laporan keamanan?',
      'Jelaskan konsep attack surface reduction.',
      'Buat template ringkas executive summary untuk laporan pentest.'
    ]
  },
  {
    id: 5,
    title: 'Reconnaissance & Enumeration',
    objective: 'Menjalankan pemetaan aset dan layanan secara legal, terukur, dan terdokumentasi.',
    materials: ['OSINT legal', 'Subdomain enumeration', 'Service discovery', 'Rate limiting scan', 'Prioritization'],
    questions: [
      'Apa perbedaan passive dan active reconnaissance?',
      'Data OSINT apa yang legal dan relevan untuk pemetaan aset?',
      'Mengapa subdomain takeover perlu diverifikasi manual?',
      'Jelaskan langkah service discovery yang aman dan tidak mengganggu.',
      'Bagaimana prioritas target ditentukan dari hasil enumerasi?',
      'Apa risiko melakukan scan agresif tanpa rate limiting?',
      'Mengapa banner service tidak selalu mencerminkan versi sebenarnya?',
      'Buat workflow rekonsiliasi aset: hasil DNS, cloud, dan inventori internal.',
      'Kapan teknik wordlist custom lebih efektif daripada default?',
      'Tulis format output recon agar mudah dipakai tim lain.'
    ]
  },
  {
    id: 6,
    title: 'Web App Security',
    objective: 'Menguji kelemahan umum aplikasi web dan API dengan pendekatan verifikasi manual.',
    materials: ['Auth/session security', 'XSS', 'SQLi', 'SSRF', 'IDOR', 'Logic flaw'],
    questions: [
      'Jelaskan broken access control dan contoh dampaknya.',
      'Mengapa session fixation berbahaya?',
      'Apa beda reflected XSS, stored XSS, dan DOM XSS?',
      'Bagaimana SQL injection terjadi meski aplikasi memakai ORM?',
      'Apa itu SSRF dan jalur dampaknya ke metadata service cloud?',
      'Jelaskan CSRF dan kontrol mitigasi utamanya.',
      'Mengapa rate limiting penting pada endpoint login?',
      'Apa risiko upload file tanpa validasi MIME dan ekstensi?',
      'Jelaskan insecure direct object reference (IDOR) dengan contoh.',
      'Bagaimana pendekatan test authz bypass pada API multi-role?',
      'Apa itu business logic flaw dan mengapa sulit dideteksi scanner?',
      'Kapan penggunaan WAF membantu, dan apa keterbatasannya?',
      'Mengapa security header tidak boleh jadi satu-satunya mitigasi XSS?',
      'Buat checklist pengujian session management untuk aplikasi web.',
      'Susun format temuan web: langkah reproduksi, dampak, dan remediation.'
    ]
  },
  {
    id: 7,
    title: 'Network Exploitation Dasar & Post-Exploitation',
    objective: 'Memahami dampak misconfiguration jaringan dan validasi mitigasinya secara aman.',
    materials: ['SMB security', 'Credential hygiene', 'Privilege escalation', 'Lateral movement', 'LOLBins awareness'],
    questions: [
      'Mengapa SMB misconfiguration sering jadi pintu masuk lateral movement?',
      'Apa arti credential hygiene dalam konteks domain enterprise?',
      'Jelaskan perbedaan local privilege escalation vs lateral movement.',
      'Mengapa reuse password meningkatkan blast radius insiden?',
      'Apa itu persistence awareness dari sudut red team beretika?',
      'Bagaimana defender mendeteksi aktivitas post-exploitation sederhana?',
      'Kapan segmentation jaringan efektif membatasi dampak kompromi?',
      'Apa risiko menonaktifkan endpoint protection saat troubleshooting?',
      'Jelaskan konsep living-off-the-land binaries (LOLBins).',
      'Buat rencana validasi pasca-remediasi untuk temuan network kritikal.'
    ]
  },
  {
    id: 8,
    title: 'Defensive, Detection, dan Incident Response',
    objective: 'Menyusun deteksi dan proses respons insiden yang praktis di lingkungan operasional.',
    materials: ['Log pipeline', 'SIEM triage', 'IOC/IOA', 'MITRE ATT&CK', 'IR lifecycle', 'Secure SDLC'],
    questions: [
      'Apa komponen minimum log pipeline yang sehat?',
      'Jelaskan perbedaan IOC dan IOA dengan contoh.',
      'Bagaimana MITRE ATT&CK membantu threat hunting?',
      'Apa itu alert fatigue dan cara menguranginya?',
      'Jelaskan tahap incident response: containment, eradication, recovery.',
      'Mengapa post-incident review penting untuk perbaikan berkelanjutan?',
      'Buat contoh rule deteksi sederhana untuk brute-force login.',
      'Apa risiko menyimpan secret di repositori Git publik/internal?',
      'Bagaimana IAM policy yang terlalu longgar dapat dieksploitasi?',
      'Apa peran dependency scanning dalam secure SDLC?',
      'Kapan SAST lebih efektif dibanding DAST, dan sebaliknya?',
      'Jelaskan nilai code review keamanan pada pull request.',
      'Buat outline playbook respons insiden ransomware skala kecil.'
    ]
  },
  {
    id: 9,
    title: 'Spesialisasi Elite',
    objective: 'Masuk ke jalur lanjutan sesuai minat: web advanced, binary, cloud, red team, mobile.',
    materials: ['Web advanced exploitation', 'Reverse engineering', 'Cloud IAM abuse', 'OPSEC', 'Fuzzing dasar'],
    questions: [
      'Web advanced: mengapa race condition bisa lolos pengujian biasa?',
      'Web advanced: apa tantangan menguji GraphQL authorization?',
      'Binary exploitation: jelaskan konsep memory corruption tingkat dasar.',
      'Reverse engineering: kapan static vs dynamic analysis dipilih?',
      'Cloud security: bagaimana IAM abuse terjadi pada akun cloud?',
      'Red team ops: apa arti OPSEC dalam simulasi adversary?',
      'Mobile security: apa manfaat runtime instrumentation saat analisis aplikasi?',
      'Fuzzing dasar: bagaimana menentukan target fungsi prioritas?'
    ]
  },
  {
    id: 10,
    title: 'Etika, Laporan Profesional, dan Dampak',
    objective: 'Menjamin praktik keamanan tetap legal, komunikatif, dan berdampak untuk bisnis.',
    materials: ['Legal scope', 'Responsible disclosure', 'Executive communication', 'Professional standards'],
    questions: [
      'Mengapa legal scope lebih penting daripada kemampuan teknis saat pengujian?',
      'Elemen apa saja yang harus ada pada responsible disclosure yang baik?',
      'Bagaimana menyampaikan temuan kritikal ke manajemen non-teknis?',
      'Definisikan indikator bahwa seorang praktisi sudah berada pada level elite secara profesional.'
    ]
  }
];

export const hackerEliteQuestionBank = eliteChapters.map((chapter) => ({
  ...chapter,
  questions: chapter.questions.map((prompt, index) => ({
    id: `${chapter.id}-${index + 1}`,
    prompt,
  })),
  questionCount: chapter.questions.length,
}));

export const hackerEliteSummary = {
  chapterCount: hackerEliteQuestionBank.length,
  totalQuestions: hackerEliteQuestionBank.reduce((total, chapter) => total + chapter.questionCount, 0),
  learningDuration: '12–24 bulan',
  rhythm: '10–15 jam/minggu (konsisten)',
};
