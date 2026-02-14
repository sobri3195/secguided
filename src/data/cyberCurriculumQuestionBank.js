export const curriculumMaterials = [
  {
    level: 'Level 1 — Foundation',
    modules: [
      'Modul 1: Pengantar Cyber Security (CIA Triad, Zero Trust, Defense in Depth, attack surface).',
      'Modul 2: Dasar Jaringan untuk Security (TCP/IP, DNS, HTTP/HTTPS, TLS, firewall, IDS/IPS, VPN).',
      'Modul 3: Sistem Operasi & Hardening Dasar (Linux/Windows baseline, logging, patching).',
      'Modul 4: Dasar Kriptografi (hashing, salting, symmetric/asymmetric, PKI, sertifikat TLS).',
    ],
  },
  {
    level: 'Level 2 — Intermediate',
    modules: [
      'Modul 5: Keamanan Aplikasi Web (OWASP Top 10, auth, session, secure coding).',
      'Modul 6: SSDLC (security requirement, STRIDE, SAST/DAST, dependency scan, CI/CD).',
      'Modul 7: Network Security Operations (segmentasi, NAC, WAF, SIEM, alert triage).',
      'Modul 8: Incident Response & Forensics (IR lifecycle, chain of custody, forensik dasar).',
    ],
  },
  {
    level: 'Level 3 — Advanced',
    modules: [
      'Modul 9: Offensive Security Etis (metodologi pentest legal, recon, scanning, reporting).',
      'Modul 10: Defensive Security Lanjutan (threat hunting, ATT&CK mapping, EDR/XDR, purple team).',
      'Modul 11: Cloud Security (shared responsibility, IAM, secrets, container/K8s security).',
      'Modul 12: GRC (ISO 27001, NIST CSF, CIS Controls, risk register, treatment plan).',
    ],
  },
];

const mcqSeed = [
  ['Komponen utama CIA Triad adalah...', ['Confidentiality, Integrity, Availability', 'Control, Identity, Access', 'Cyber, Information, Audit', 'Confidentiality, Inspection, Authentication'], 0, 'Foundation'],
  ['Contoh asset informasi paling tepat adalah...', ['Database pelanggan', 'Malware', 'Botnet', 'DDoS'], 0, 'Foundation'],
  ['Prinsip Zero Trust adalah...', ['Never trust, always verify', 'Trust internal by default', 'Open access untuk LAN', 'Bypass MFA saat darurat'], 0, 'Foundation'],
  ['Port default HTTPS adalah...', ['443', '80', '53', '22'], 0, 'Foundation'],
  ['Fungsi utama firewall adalah...', ['Menyaring trafik berdasarkan aturan', 'Menghapus malware dari disk', 'Membuat sertifikat TLS', 'Mengganti DNS resolver'], 0, 'Foundation'],
  ['IDS umumnya berfungsi untuk...', ['Deteksi dan alert', 'Blokir otomatis semua trafik', 'Patch kernel', 'Backup data'], 0, 'Foundation'],
  ['Perintah Linux untuk melihat permission file adalah...', ['ls -l', 'ping', 'top', 'ip a'], 0, 'Foundation'],
  ['Least privilege berarti...', ['Hak minimum sesuai kebutuhan', 'Semua user jadi admin', 'Tanpa autentikasi', 'Tanpa logging'], 0, 'Foundation'],
  ['Hashing bersifat...', ['One-way', 'Two-way', 'Tidak deterministik', 'Tidak dipakai keamanan'], 0, 'Foundation'],
  ['Salting password bertujuan untuk...', ['Mencegah rainbow table reuse', 'Menyimpan plaintext lebih aman', 'Mempercepat brute force', 'Menghapus kebutuhan hash'], 0, 'Foundation'],
  ['Sertifikat digital pada TLS dipakai untuk...', ['Verifikasi identitas server', 'Menentukan subnet', 'Routing BGP', 'Menghapus cache browser'], 0, 'Foundation'],
  ['SQL Injection umumnya terjadi karena...', ['Input tidak divalidasi dengan baik', 'CPU terlalu kecil', 'TLS aktif', 'Port 443 terbuka'], 0, 'Intermediate'],
  ['Mitigasi XSS yang umum adalah...', ['Output encoding', 'Nonaktifkan HTTPS', 'Matikan CSP', 'Cookie tanpa HttpOnly'], 0, 'Intermediate'],
  ['CSRF token bertujuan...', ['Memastikan request berasal dari sesi sah', 'Menyandikan file log', 'Meningkatkan bandwidth', 'Mengganti endpoint API'], 0, 'Intermediate'],
  ['STRIDE digunakan untuk...', ['Threat modeling', 'Subnet planning', 'Backup strategy', 'Cloud billing'], 0, 'Intermediate'],
  ['SAST melakukan analisis pada...', ['Source code tanpa eksekusi', 'Trafik jaringan live', 'Disk image forensik', 'Konfigurasi BIOS'], 0, 'Intermediate'],
  ['DAST melakukan pengujian pada...', ['Aplikasi yang sedang berjalan', 'Source code statis', 'Hanya dependency lock file', 'Hanya endpoint login'], 0, 'Intermediate'],
  ['Dependency scanning berguna untuk...', ['Mendeteksi library rentan', 'Menaikkan performa UI', 'Mempercepat kompilasi', 'Mengurangi ukuran container'], 0, 'Intermediate'],
  ['SIEM berfungsi untuk...', ['Koleksi dan korelasi log', 'Membuat desain UI', 'Mengatur payroll', 'Konversi file media'], 0, 'Intermediate'],
  ['Alert triage berarti...', ['Menilai prioritas dan validitas alert', 'Menghapus semua alert', 'Menambah alert otomatis', 'Menonaktifkan notifikasi'], 0, 'Intermediate'],
  ['Tahap IR setelah identification adalah...', ['Containment', 'Lessons learned', 'Preparation', 'Risk transfer'], 0, 'Intermediate'],
  ['Chain of custody penting agar...', ['Bukti dapat dipertanggungjawabkan', 'Bukti mudah diubah', 'Investigasi lebih cepat selesai', 'Log tidak perlu disimpan'], 0, 'Intermediate'],
  ['Pentest etis wajib memiliki...', ['Izin tertulis dan scope jelas', 'Akses bebas tanpa izin', 'Data produksi penuh', 'Eksploitasi tanpa batas'], 0, 'Advanced'],
  ['ATT&CK mapping membantu...', ['Menghubungkan teknik serangan dengan deteksi', 'Menyusun struktur organisasi', 'Menentukan harga lisensi', 'Membuat sertifikat'], 0, 'Advanced'],
  ['EDR adalah...', ['Endpoint Detection and Response', 'Email Data Relay', 'Encrypted DNS Router', 'External Device Registry'], 0, 'Advanced'],
  ['Shared responsibility model cloud berarti...', ['Tanggung jawab keamanan dibagi provider-pelanggan', 'Provider tanggung jawab semua', 'Pelanggan tanggung jawab semua', 'Tidak ada pembagian tanggung jawab'], 0, 'Advanced'],
  ['Misconfiguration IAM cloud berisiko...', ['Privilege escalation', 'Layar biru monitor', 'Kerusakan fisik CPU', 'DNS lokal gagal total'], 0, 'Advanced'],
  ['NIST CSF memiliki fungsi Identify, Protect, Detect, Respond, dan...', ['Recover', 'Rebuild', 'Recode', 'Review'], 0, 'Advanced'],
  ['Risk treatment plan mencakup...', ['Accept, mitigate, transfer, avoid', 'Build, run, test, deploy', 'Read, write, execute, delete', 'Install, uninstall, restart, reset'], 0, 'Advanced'],
  ['Responsible disclosure berarti...', ['Melapor kerentanan secara etis ke pihak terkait', 'Publikasi eksploit penuh tanpa koordinasi', 'Menjual kerentanan', 'Menyembunyikan bug'], 0, 'Advanced'],
  ['MFA meningkatkan keamanan karena...', ['Menambah faktor verifikasi', 'Menghilangkan password policy', 'Menghapus logging', 'Membuka akses anonim'], 0, 'Foundation'],
  ['WAF terutama melindungi dari...', ['Serangan aplikasi web umum', 'Gangguan listrik', 'Kerusakan disk fisik', 'Downtime ISP'], 0, 'Intermediate'],
  ['NAC digunakan untuk...', ['Mengatur perangkat yang boleh masuk jaringan', 'Enkripsi file otomatis', 'Manajemen backup cloud', 'Deteksi malware email'], 0, 'Intermediate'],
  ['False negative pada alert berarti...', ['Insiden nyata tidak terdeteksi', 'Alert palsu muncul', 'Log rusak', 'Endpoint offline'], 0, 'Intermediate'],
  ['Laporan eksekutif keamanan harus menekankan...', ['Dampak bisnis, risiko, dan prioritas', 'Payload exploit detail', 'Semua raw logs', 'Cuplikan command history saja'], 0, 'Advanced'],
];

const essayPrompts = [
  'Jelaskan perbedaan threat, vulnerability, dan risk dengan contoh praktis.',
  'Buat model ancaman sederhana untuk aplikasi absensi online kampus.',
  'Mengapa confidentiality saja tidak cukup dalam keamanan informasi?',
  'Bagaimana menerapkan defense in depth pada kantor skala kecil?',
  'Berikan contoh attack surface aplikasi e-commerce dan mitigasinya.',
  'Langkah triage awal saat menemukan trafik DNS anomali.',
  'Bedakan IDS signature-based vs behavior-based secara ringkas.',
  'Indikator umum misconfiguration TLS pada layanan web.',
  'Checklist hardening Linux web server (minimal 5 poin).',
  'Checklist hardening Windows endpoint (minimal 5 poin).',
  'Strategi patch management aman dengan downtime minimal.',
  'Kapan hashing lebih tepat daripada encryption?',
  'Jelaskan alur validasi sertifikat pada koneksi TLS.',
  'Contoh password policy yang baik untuk organisasi menengah.',
  'Jelaskan bagaimana SQLi bisa terjadi pada query login.',
  'Tuliskan 3 teknik pencegahan XSS di server dan client.',
  'Apa fungsi CSRF token dan alur kerjanya?',
  'Buat contoh security requirement fitur reset password.',
  'Buat threat modeling STRIDE ringkas pada fitur upload file.',
  'Bagaimana menyisipkan SAST/DAST/dependency scan di CI/CD tanpa menghambat rilis?',
  'Anda menerima 500 alert/hari. Buat pendekatan tuning untuk menurunkan noise.',
  'Berikan 5 rule deteksi dasar berbasis log untuk SOC pemula.',
  'Prioritas 24 jam pertama penanganan insiden ransomware kecil.',
  'Mengapa chain of custody krusial pada proses hukum?',
  'Susun outline laporan pentest untuk audiens teknis dan eksekutif.',
  'Buat contoh mapping 3 teknik ATT&CK ke use case deteksi.',
  'Perbedaan tanggung jawab keamanan provider cloud vs pelanggan.',
  'Buat contoh risk register untuk 3 risiko utama startup SaaS.',
  'Rancang program security awareness agar tidak sekadar formalitas.',
  'Roadmap 12 bulan menjadi SOC Analyst junior.',
];

const totalMcq = 70;
const generatedMcq = Array.from({ length: totalMcq }).map((_, index) => {
  const seed = mcqSeed[index % mcqSeed.length];
  const iteration = Math.floor(index / mcqSeed.length);

  return {
    id: index + 1,
    type: 'mcq',
    level: seed[3],
    question: iteration === 0 ? seed[0] : `${seed[0]} (variasi ${iteration + 1})`,
    options: seed[1],
    answerIndex: seed[2],
  };
});

const generatedEssay = essayPrompts.map((prompt, index) => ({
  id: totalMcq + index + 1,
  type: 'essay',
  level: index < 10 ? 'Foundation' : index < 20 ? 'Intermediate' : 'Advanced',
  question: prompt,
  rubric: 'Skor 0-4: akurasi konsep, struktur jawaban, relevansi contoh, dan tindakan teknis.',
}));

export const cyberCurriculumQuestionSet = [...generatedMcq, ...generatedEssay];

export const curriculumQuestionSummary = {
  total: cyberCurriculumQuestionSet.length,
  mcq: generatedMcq.length,
  essay: generatedEssay.length,
  showLearningMeta: true,
  learningDuration: '12 minggu',
  rhythm: '3 sesi / minggu (90 menit)',
};
