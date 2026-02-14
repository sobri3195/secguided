# 100 Soal, Pembelajaran, dan Materi
## Kurikulum Standar Hacker Elite (Legal, Defensif, Profesional)

> **Catatan etika:** Seluruh materi ditujukan untuk pembelajaran keamanan siber yang legal dan berizin. Jangan menguji sistem tanpa otorisasi tertulis.

## A. Peta Pembelajaran (12–24 Bulan)

### 1) Fondasi Wajib (0–3 bulan)
**Fokus belajar:** jaringan, OS, pemrograman, tooling, dasar keamanan.

**Target kompetensi:**
- Memahami alur data dari layer OSI/TCP-IP hingga aplikasi.
- Nyaman memakai Linux terminal, Git, dan scripting dasar.
- Mampu menjelaskan OWASP Top 10 dan CIA triad dengan contoh nyata.

**Materi inti:**
- Jaringan: OSI/TCP-IP, DNS, HTTP/HTTPS, TLS handshake, VPN.
- Sistem operasi: Linux internals, process/thread, permission model, Windows basics.
- Pemrograman: Python, Bash, JavaScript dasar, C dasar (pointer/memori).
- Tooling: Git workflow, package manager, dokumentasi teknis, RFC reading habit.
- Keamanan dasar: CIA triad, threat modeling sederhana, OWASP Top 10.

### 2) Core Offensive Security (3–8 bulan)
**Fokus belajar:** alur ofensif end-to-end secara terstruktur.

**Target kompetensi:**
- Menjalankan reconnaissance yang terukur dan terdokumentasi.
- Membedakan hasil scanner false positive vs temuan valid.
- Menulis laporan temuan yang actionable untuk engineer.

**Materi inti:**
- Recon: OSINT, subdomain enumeration, service discovery.
- Vulnerability assessment: automated scanner + manual verification.
- Web security: auth/session, SSRF, SQLi, XSS, access control.
- Network exploitation dasar: SMB, misconfiguration, credential hygiene.
- Post-exploitation dasar: privilege escalation, persistence awareness.

### 3) Core Defensive & Detection (8–12 bulan)
**Fokus belajar:** deteksi, respons, hardening, dan secure SDLC.

**Target kompetensi:**
- Merancang alert sederhana dan mengurangi noise.
- Melakukan basic incident response lifecycle.
- Menghubungkan teknik serangan ke mitigasi dan hardening.

**Materi inti:**
- Monitoring: log pipeline, SIEM, alert triage.
- Detection: IOC/IOA, MITRE ATT&CK mapping.
- Incident response: containment, eradication, recovery.
- Hardening: Linux/Windows baseline, IAM, secret management.
- Secure SDLC: SAST, DAST, dependency scanning, code review.

### 4) Spesialisasi Elite (Tahun ke-2)
**Pilih 1–2 jalur utama:**
- Web exploitation lanjutan.
- Binary exploitation & reverse engineering.
- Cloud security.
- Red team operations.
- Mobile security.

**Output spesialisasi:**
- Portofolio write-up mendalam.
- Tool/script internal.
- Simulasi assessment mendekati kondisi nyata.

### 5) Proyek Wajib Portofolio
- Pentest mini end-to-end (scoping → testing → report → retest).
- Detection engineering mini-project.
- Secure code review open-source project kecil.
- Automation project untuk enumerasi/validasi/pelaporan.

### 6) Ritme Belajar Mingguan (disarankan)
- Senin–Rabu: 90 menit/hari (teori + catatan).
- Kamis–Jumat: 120 menit/hari (lab praktik).
- Sabtu: 2–4 jam (mini-project/CTF).
- Minggu: 60 menit (review + retrospective).

---

## B. 100 Soal Kurikulum Standar Hacker Elite

> Format soal campuran (konseptual, studi kasus, praktik). Gunakan lingkungan lab legal.

### Bab 1 — Fondasi Jaringan & Web (1–10)
1. Jelaskan perbedaan model OSI dan TCP/IP serta pemetaan layer utamanya.
2. Mengapa DNS cache poisoning berbahaya bagi integritas komunikasi?
3. Apa beda HTTP dan HTTPS dari sisi kerahasiaan dan integritas data?
4. Uraikan proses TLS handshake secara ringkas.
5. Kapan VPN membantu keamanan, dan kapan tidak cukup?
6. Apa fungsi NAT dalam jaringan modern?
7. Bagaimana cara kerja routing default gateway pada host?
8. Jelaskan perbedaan TCP vs UDP dan contoh penggunaan keamanan relevan.
9. Mengapa header HTTP security (mis. CSP, HSTS) penting?
10. Buat diagram sederhana alur request browser ke server hingga response kembali.

### Bab 2 — Sistem Operasi & Permissions (11–20)
11. Jelaskan perbedaan proses dan thread di Linux.
12. Apa dampak permission file `777` pada server produksi?
13. Mengapa prinsip least privilege penting pada user account?
14. Bandingkan autentikasi lokal vs domain pada lingkungan Windows.
15. Apa itu service account dan risiko jika kredensialnya bocor?
16. Jelaskan konsep privilege escalation pada Linux secara defensif.
17. Mengapa hardening SSH diperlukan meski memakai password kuat?
18. Apa hubungan patch management dengan pengurangan attack surface?
19. Bagaimana logging sistem membantu forensik insiden?
20. Buat checklist hardening awal untuk VM Linux baru.

### Bab 3 — Dasar Pemrograman untuk Security (21–30)
21. Mengapa Python populer untuk otomasi keamanan?
22. Tulis pseudocode parsing log dan hitung IP terbanyak.
23. Apa risiko `eval()` pada JavaScript/Python jika input tidak tervalidasi?
24. Jelaskan konsep pointer di C dan hubungannya dengan memory bug.
25. Kapan Bash script lebih tepat dibanding Python?
26. Apa fungsi virtual environment pada proyek Python security?
27. Jelaskan beda encoding, hashing, dan encryption.
28. Mengapa error handling penting pada script scanning internal?
29. Bagaimana cara aman menyimpan API key pada script?
30. Buat outline tool CLI sederhana untuk validasi URL internal.

### Bab 4 — Dasar Keamanan & Metodologi (31–40)
31. Jelaskan CIA triad dengan contoh pelanggaran masing-masing.
32. Apa itu threat modeling dan kapan dilakukan?
33. Uraikan OWASP Top 10 secara ringkas (versi terbaru yang kamu gunakan).
34. Mengapa scope tertulis wajib sebelum pentest?
35. Apa perbedaan vulnerability, threat, dan risk?
36. Bagaimana menghitung prioritas remediation berdasarkan dampak bisnis?
37. Apa itu false positive dan false negative pada scanner?
38. Mengapa evidence penting dalam laporan keamanan?
39. Jelaskan konsep attack surface reduction.
40. Buat template ringkas executive summary untuk laporan pentest.

### Bab 5 — Reconnaissance & Enumeration (41–50)
41. Apa perbedaan passive dan active reconnaissance?
42. Data OSINT apa yang legal dan relevan untuk pemetaan aset?
43. Mengapa subdomain takeover perlu diverifikasi manual?
44. Jelaskan langkah service discovery yang aman dan tidak mengganggu.
45. Bagaimana prioritas target ditentukan dari hasil enumerasi?
46. Apa risiko melakukan scan agresif tanpa rate limiting?
47. Mengapa banner service tidak selalu mencerminkan versi sebenarnya?
48. Buat workflow rekonsiliasi aset: hasil DNS, cloud, dan inventori internal.
49. Kapan teknik wordlist custom lebih efektif daripada default?
50. Tulis format output recon agar mudah dipakai tim lain.

### Bab 6 — Web App Security (51–65)
51. Jelaskan broken access control dan contoh dampaknya.
52. Mengapa session fixation berbahaya?
53. Apa beda reflected XSS, stored XSS, dan DOM XSS?
54. Bagaimana SQL injection terjadi meski aplikasi memakai ORM?
55. Apa itu SSRF dan jalur dampaknya ke metadata service cloud?
56. Jelaskan CSRF dan kontrol mitigasi utamanya.
57. Mengapa rate limiting penting pada endpoint login?
58. Apa risiko upload file tanpa validasi MIME dan ekstensi?
59. Jelaskan insecure direct object reference (IDOR) dengan contoh.
60. Bagaimana pendekatan test authz bypass pada API multi-role?
61. Apa itu business logic flaw dan mengapa sulit dideteksi scanner?
62. Kapan penggunaan WAF membantu, dan apa keterbatasannya?
63. Mengapa security header tidak boleh jadi satu-satunya mitigasi XSS?
64. Buat checklist pengujian session management untuk aplikasi web.
65. Susun format temuan web: langkah reproduksi, dampak, dan remediation.

### Bab 7 — Network Exploitation Dasar & Post-Exploitation (66–75)
66. Mengapa SMB misconfiguration sering jadi pintu masuk lateral movement?
67. Apa arti credential hygiene dalam konteks domain enterprise?
68. Jelaskan perbedaan local privilege escalation vs lateral movement.
69. Mengapa reuse password meningkatkan blast radius insiden?
70. Apa itu persistence awareness dari sudut red team beretika?
71. Bagaimana defender mendeteksi aktivitas post-exploitation sederhana?
72. Kapan segmentation jaringan efektif membatasi dampak kompromi?
73. Apa risiko menonaktifkan endpoint protection saat troubleshooting?
74. Jelaskan konsep living-off-the-land binaries (LOLBins).
75. Buat rencana validasi pasca-remediasi untuk temuan network kritikal.

### Bab 8 — Defensive, Detection, dan IR (76–88)
76. Apa komponen minimum log pipeline yang sehat?
77. Jelaskan perbedaan IOC dan IOA dengan contoh.
78. Bagaimana MITRE ATT&CK membantu threat hunting?
79. Apa itu alert fatigue dan cara menguranginya?
80. Jelaskan tahap incident response: containment, eradication, recovery.
81. Mengapa post-incident review penting untuk perbaikan berkelanjutan?
82. Buat contoh rule deteksi sederhana untuk brute-force login.
83. Apa risiko menyimpan secret di repositori Git publik/internal?
84. Bagaimana IAM policy yang terlalu longgar dapat dieksploitasi?
85. Apa peran dependency scanning dalam secure SDLC?
86. Kapan SAST lebih efektif dibanding DAST, dan sebaliknya?
87. Jelaskan nilai code review keamanan pada pull request.
88. Buat outline playbook respons insiden ransomware skala kecil.

### Bab 9 — Spesialisasi Elite (89–96)
89. Web advanced: mengapa race condition bisa lolos pengujian biasa?
90. Web advanced: apa tantangan menguji GraphQL authorization?
91. Binary exploitation: jelaskan konsep memory corruption tingkat dasar.
92. Reverse engineering: kapan static vs dynamic analysis dipilih?
93. Cloud security: bagaimana IAM abuse terjadi pada akun cloud?
94. Red team ops: apa arti OPSEC dalam simulasi adversary?
95. Mobile security: apa manfaat runtime instrumentation saat analisis aplikasi?
96. Fuzzing dasar: bagaimana menentukan target fungsi prioritas?

### Bab 10 — Etika, Laporan Profesional, dan Dampak (97–100)
97. Mengapa legal scope lebih penting daripada “kemampuan teknis” saat pengujian?
98. Elemen apa saja yang harus ada pada responsible disclosure yang baik?
99. Bagaimana menyampaikan temuan kritikal ke manajemen non-teknis?
100. Definisikan indikator bahwa seorang praktisi sudah berada pada level “elite” secara profesional.

---

## C. Kunci Pembelajaran (Ringkas per Bab)
- **Bab 1–2:** kuasai fondasi jaringan + OS agar analisis tidak sekadar “jalankan tool”.
- **Bab 3–4:** pahami coding dan metodologi untuk membangun pendekatan repeatable.
- **Bab 5–7:** latih alur ofensif lengkap dari recon sampai validasi perbaikan.
- **Bab 8:** kuatkan sisi defense agar mampu merancang deteksi dan respons.
- **Bab 9–10:** fokus spesialisasi, etika, dan komunikasi dampak bisnis.

## D. Cara Pakai Paket Soal
1. Kerjakan 10–20 soal per minggu sesuai fase belajar.
2. Untuk setiap jawaban, sertakan: asumsi, bukti, referensi, dan mitigasi.
3. Ubah soal studi kasus menjadi mini-lab legal agar terukur.
4. Akhiri dengan retrospective: apa yang dipelajari, celah, dan rencana perbaikan.

## E. Rubrik Penilaian Sederhana (Skor 1–5)
- **Akurasi teknis** (benar konsep dan terminologi).
- **Kejelasan metodologi** (langkah sistematis dan dapat diulang).
- **Kualitas evidence** (log, screenshot, output relevan).
- **Kualitas remediasi** (realistis, prioritas jelas).
- **Kepatuhan etika/legal** (scope, keamanan data, disclosure).
