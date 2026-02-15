export const completeCurriculum = {
  title: 'Kurikulum Standar Cyber Security (Lengkap)',
  description:
    'Roadmap dari level dasar hingga siap kerja dengan keseimbangan teori, praktik, etika, dan komunikasi profesional.',
  prerequisites: [
    'Dasar komputer dan sistem operasi (Linux/Windows).',
    'Dasar jaringan (IP, DNS, HTTP/HTTPS, routing sederhana).',
    'Dasar scripting (Python/Bash/PowerShell) sangat disarankan.',
  ],
  outcomes: [
    'Memahami konsep keamanan informasi: CIA Triad, risk, threat, vulnerability.',
    'Menerapkan praktik keamanan pada sistem, jaringan, aplikasi, dan cloud.',
    'Melakukan analisis insiden, pengujian keamanan dasar, serta menyusun laporan profesional.',
    'Bekerja sesuai etika, hukum, dan standar industri.',
  ],
  levels: [
    {
      name: 'Level 1 — Foundation',
      duration: '8–10 minggu',
      modules: [
        {
          title: 'Modul 1: Pengantar Cyber Security',
          topics: ['CIA Triad', 'Zero Trust', 'Defense in Depth', 'Attack Surface', 'Security Lifecycle'],
          practice: 'Menyusun model ancaman sederhana.',
        },
        {
          title: 'Modul 2: Dasar Jaringan untuk Security',
          topics: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'TLS', 'Firewall', 'IDS/IPS', 'VPN', 'Wireshark'],
          practice: 'Capture dan analisis trafik normal vs anomali.',
        },
        {
          title: 'Modul 3: Sistem Operasi & Hardening Dasar',
          topics: ['Linux permissions', 'Windows baseline', 'Logging', 'Patch management', 'Secure configuration'],
          practice: 'Hardening VM Linux/Windows dengan checklist CIS dasar.',
        },
        {
          title: 'Modul 4: Dasar Kriptografi',
          topics: ['Hashing', 'Salting', 'Symmetric vs Asymmetric', 'PKI', 'Sertifikat digital', 'TLS'],
          practice: 'Verifikasi sertifikat dan simulasi kesalahan konfigurasi.',
        },
      ],
    },
    {
      name: 'Level 2 — Intermediate',
      duration: '10–12 minggu',
      modules: [
        {
          title: 'Modul 5: Keamanan Aplikasi Web',
          topics: ['OWASP Top 10', 'Input validation', 'Authentication', 'Session management', 'Secure coding'],
          practice: 'Identifikasi dan perbaiki celah SQLi/XSS/CSRF di aplikasi lab.',
        },
        {
          title: 'Modul 6: Secure Development Lifecycle (SSDLC)',
          topics: ['Security requirement', 'Threat modeling (STRIDE)', 'SAST', 'DAST', 'Dependency scanning', 'CI/CD'],
          practice: 'Membangun pipeline sederhana dengan security check otomatis.',
        },
        {
          title: 'Modul 7: Network Security Operations',
          topics: ['Segmentasi', 'NAC', 'WAF', 'SIEM', 'Alert triage', 'Log correlation', 'Detection engineering'],
          practice: 'Membuat 5 rule deteksi sederhana berbasis log.',
        },
        {
          title: 'Modul 8: Incident Response & Digital Forensics Dasar',
          topics: ['IR lifecycle', 'Evidence handling', 'Chain of custody', 'Forensik memori/disk/log'],
          practice: 'Tabletop exercise insiden ransomware skala kecil.',
        },
      ],
    },
    {
      name: 'Level 3 — Advanced',
      duration: '10–14 minggu',
      modules: [
        {
          title: 'Modul 9: Offensive Security (Etis)',
          topics: ['Metodologi pentest', 'Reconnaissance', 'Scanning', 'Exploitation terbatas', 'Pelaporan teknis/eksekutif'],
          practice: 'Simulasi pentest legal dengan scope dan izin tertulis.',
        },
        {
          title: 'Modul 10: Defensive Security Lanjutan',
          topics: ['Threat hunting', 'ATT&CK mapping', 'EDR/XDR', 'Behavioral detection', 'Purple teaming'],
          practice: 'Simulasi serangan → deteksi → perbaikan rule.',
        },
        {
          title: 'Modul 11: Cloud Security',
          topics: ['Shared responsibility', 'IAM', 'Secrets management', 'Network isolation cloud', 'Container/K8s security'],
          practice: 'Hardening workload cloud dan audit misconfiguration umum.',
        },
        {
          title: 'Modul 12: Governance, Risk, Compliance (GRC)',
          topics: ['ISO 27001', 'NIST CSF', 'CIS Controls', 'Risk assessment', 'Risk treatment plan', 'Audit internal'],
          practice: 'Menyusun risk register dan prioritas mitigasi.',
        },
      ],
    },
  ],
  evaluation: [
    'Quiz modul (20%)',
    'Praktikum/lab (35%)',
    'Proyek tengah (15%)',
    'Capstone project akhir (25%)',
    'Sikap profesional & etika (5%)',
  ],
  capstone: [
    'Desain SOC mini untuk organisasi menengah.',
    'Pentest legal terhadap aplikasi lab + remediation plan.',
    'Implementasi security baseline infrastruktur hybrid.',
  ],
};
