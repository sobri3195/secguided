# 100 Soal, Pembelajaran, dan Materi
## Berdasarkan Kurikulum Standar Cyber Security

Dokumen ini menyajikan:
1. **Materi inti** per level/modul.
2. **Desain pembelajaran** (teori + praktik).
3. **100 soal evaluasi** lengkap dengan kunci jawaban singkat.

---

## A. Materi Inti Pembelajaran

### Level 1 — Foundation (Dasar)

#### Modul 1: Pengantar Cyber Security
- Konsep aset, ancaman, kerentanan, risiko, dampak, dan kontrol.
- CIA Triad (Confidentiality, Integrity, Availability).
- Zero Trust dan Defense in Depth.
- Attack surface dan security lifecycle.

#### Modul 2: Dasar Jaringan untuk Security
- TCP/IP, subnetting dasar, DNS, HTTP/HTTPS, TLS.
- Fungsi firewall, IDS/IPS, VPN.
- Analisis paket menggunakan Wireshark/tcpdump.

#### Modul 3: Sistem Operasi & Hardening Dasar
- Linux permission, process, service, syslog/journal.
- Windows event log, baseline policy, hardening dasar.
- Patch management dan secure configuration.

#### Modul 4: Dasar Kriptografi
- Hashing, salting, symmetric vs asymmetric encryption.
- PKI, sertifikat digital, dan manajemen kunci.
- Konsep TLS dan kesalahan konfigurasi umum.

### Level 2 — Intermediate (Menengah)

#### Modul 5: Keamanan Aplikasi Web
- OWASP Top 10.
- Input validation, autentikasi, manajemen sesi.
- Dasar secure coding dan code review.

#### Modul 6: Secure Development Lifecycle (SSDLC)
- Security requirement dan threat modeling (STRIDE).
- SAST, DAST, dependency scanning.
- Integrasi security check dalam CI/CD.

#### Modul 7: Network Security Operations
- Segmentasi jaringan, NAC, WAF.
- SIEM dasar: ingest log, alert triage, correlation.
- Detection engineering (rule/logic deteksi).

#### Modul 8: Incident Response & Forensik Dasar
- Tahapan IR: preparation sampai lessons learned.
- Chain of custody dan bukti digital.
- Dasar forensik memori, disk, dan log.

### Level 3 — Advanced (Lanjutan)

#### Modul 9: Offensive Security (Etis)
- Metodologi pentest dan ruang lingkup legal.
- Recon, scanning, exploitation terbatas, pelaporan.

#### Modul 10: Defensive Security Lanjutan
- Threat hunting dan ATT&CK mapping.
- EDR/XDR dan deteksi berbasis perilaku.
- Purple teaming dasar.

#### Modul 11: Cloud Security
- Shared responsibility model.
- IAM, secrets management, network isolation cloud.
- Dasar keamanan container/Kubernetes.

#### Modul 12: Governance, Risk, Compliance (GRC)
- ISO 27001, NIST CSF, CIS Controls, PCI-DSS (dasar).
- Risk assessment dan risk treatment plan.
- Kebijakan keamanan, awareness, dan audit internal.

---

## B. Desain Pembelajaran (Learning Plan)

### 1) Metode Belajar
- **30% teori, 70% praktik**.
- Sesi teori singkat (60–90 menit), diikuti lab terarah (120–180 menit).
- Studi kasus insiden nyata (disederhanakan) untuk diskusi kelas.

### 2) Alur Belajar Mingguan (Contoh)
1. **Pre-read** materi inti + video ringkas.
2. **Mini quiz** 10–15 soal.
3. **Hands-on lab** (VM/container/cloud sandbox).
4. **Debrief**: apa yang terjadi, indikator kompromi, dan pencegahan.
5. **Refleksi & jurnal teknis** (temuan, bukti, rekomendasi).

### 3) Strategi Penilaian
- Quiz modul: 20%
- Praktikum/lab: 35%
- Proyek tengah: 15%
- Capstone akhir: 25%
- Sikap profesional & etika: 5%

### 4) Aktivitas Praktik yang Disarankan
- Analisis trafik normal vs anomali (Wireshark).
- Hardening Linux/Windows dengan checklist baseline.
- Uji celah web dasar (SQLi/XSS/CSRF) di aplikasi lab legal.
- Triage alert SIEM dan pembuatan rule deteksi sederhana.
- Tabletop exercise insiden ransomware.
- Capstone: SOC mini / pentest legal + rencana remediasi / hardening hybrid.

---

## C. 100 Soal Evaluasi + Kunci Jawaban

> Komposisi: 70 pilihan ganda + 30 soal studi kasus/esai singkat.

### Soal 1–70 (Pilihan Ganda)

1. Komponen utama CIA Triad adalah...
   - A. Confidentiality, Integrity, Availability
   - B. Control, Identity, Access
   - C. Cyber, Information, Audit
   - D. Confidentiality, Inspection, Authentication
   - **Jawaban: A**

2. Contoh **asset** dalam keamanan informasi adalah...
   - A. Malware
   - B. Database pelanggan
   - C. Hacker
   - D. DDoS
   - **Jawaban: B**

3. Yang termasuk **vulnerability** adalah...
   - A. Server tidak di-patch
   - B. Tujuan bisnis
   - C. Kebijakan cuti
   - D. UPS cadangan
   - **Jawaban: A**

4. Zero Trust menekankan prinsip...
   - A. Trust but verify
   - B. Never trust, always verify
   - C. Full trust internal network
   - D. Single-layer defense
   - **Jawaban: B**

5. Defense in Depth berarti...
   - A. Satu kontrol utama sudah cukup
   - B. Mengandalkan antivirus saja
   - C. Pengamanan berlapis
   - D. Menutup semua port
   - **Jawaban: C**

6. Port default HTTPS adalah...
   - A. 21
   - B. 53
   - C. 80
   - D. 443
   - **Jawaban: D**

7. Protokol untuk resolusi nama domain adalah...
   - A. FTP
   - B. DNS
   - C. SMTP
   - D. SNMP
   - **Jawaban: B**

8. Fungsi utama firewall adalah...
   - A. Menambal OS
   - B. Menyaring lalu lintas jaringan berdasarkan aturan
   - C. Enkripsi database
   - D. Menghapus malware otomatis di endpoint
   - **Jawaban: B**

9. IDS berbeda dari IPS karena IDS...
   - A. Melakukan pencegahan aktif
   - B. Hanya mendeteksi dan memberi alert
   - C. Hanya untuk cloud
   - D. Menggantikan firewall
   - **Jawaban: B**

10. Alat yang umum untuk packet capture adalah...
    - A. Nmap
    - B. Wireshark
    - C. Metasploit
    - D. Nessus
    - **Jawaban: B**

11. Perintah Linux untuk melihat permission file adalah...
    - A. top
    - B. ls -l
    - C. ping
    - D. ip a
    - **Jawaban: B**

12. Prinsip least privilege berarti...
    - A. Semua user admin agar cepat
    - B. Hak akses minimum sesuai kebutuhan
    - C. Menonaktifkan logging
    - D. Menghapus MFA
    - **Jawaban: B**

13. Patch management dilakukan untuk...
    - A. Menambah fitur UI
    - B. Menurunkan performa
    - C. Menutup celah dan menjaga kestabilan
    - D. Mengganti domain
    - **Jawaban: C**

14. Hashing bersifat...
    - A. Reversible dengan mudah
    - B. One-way
    - C. Sama dengan enkripsi simetris
    - D. Tidak dipakai untuk integritas
    - **Jawaban: B**

15. Fungsi salting pada password adalah...
    - A. Mempercepat brute force
    - B. Mencegah rainbow table reuse
    - C. Menyimpan password plaintext
    - D. Menghapus kebutuhan hash
    - **Jawaban: B**

16. Enkripsi asimetris menggunakan...
    - A. Satu kunci yang sama
    - B. Public key dan private key
    - C. Hash saja
    - D. Salt saja
    - **Jawaban: B**

17. Sertifikat digital digunakan untuk...
    - A. Menentukan subnet mask
    - B. Verifikasi identitas dan dukungan TLS
    - C. Menghapus log
    - D. Mengganti DNS
    - **Jawaban: B**

18. Serangan SQL Injection terjadi ketika...
    - A. Input tidak divalidasi dengan baik
    - B. CSS tidak rapi
    - C. Port 443 dibuka
    - D. Password di-hash
    - **Jawaban: A**

19. Contoh mitigasi XSS adalah...
    - A. Menonaktifkan HTTPS
    - B. Output encoding
    - C. Menyimpan cookie tanpa flag
    - D. Mematikan WAF
    - **Jawaban: B**

20. CSRF umumnya menyerang...
    - A. Proses autentikasi berbasis sesi tanpa proteksi token
    - B. Koneksi VPN site-to-site
    - C. Backup offline
    - D. Enkripsi disk penuh
    - **Jawaban: A**

21. STRIDE digunakan untuk...
    - A. Enkripsi data at rest
    - B. Threat modeling
    - C. Monitoring bandwidth
    - D. Backup database
    - **Jawaban: B**

22. SAST dijalankan pada...
    - A. Source code tanpa mengeksekusi aplikasi
    - B. Trafik jaringan live saja
    - C. Hard disk forensik
    - D. Mail server
    - **Jawaban: A**

23. DAST dilakukan dengan...
    - A. Menganalisis source code statis
    - B. Menguji aplikasi yang sedang berjalan
    - C. Menilai kebijakan HR
    - D. Memeriksa BIOS
    - **Jawaban: B**

24. Dependency scanning penting untuk...
    - A. Menemukan library pihak ketiga rentan
    - B. Mengubah desain UI
    - C. Menambah CPU
    - D. Menghapus log SIEM
    - **Jawaban: A**

25. CI/CD security check paling tepat ditempatkan...
    - A. Setelah production outage
    - B. Sejak pipeline build/test/deploy
    - C. Hanya di endpoint user
    - D. Hanya setelah audit tahunan
    - **Jawaban: B**

26. Segmentasi jaringan bertujuan...
    - A. Memperluas blast radius
    - B. Membatasi pergerakan lateral attacker
    - C. Menghapus kebutuhan firewall
    - D. Menambah broadcast domain tanpa batas
    - **Jawaban: B**

27. SIEM berfungsi untuk...
    - A. Menyusun kode aplikasi
    - B. Koleksi, korelasi, analisis log keamanan
    - C. Menambal kernel otomatis
    - D. Mendesain topologi fisik
    - **Jawaban: B**

28. Alert triage adalah proses...
    - A. Menambah jumlah alert
    - B. Menilai prioritas dan validitas alert
    - C. Menghapus semua log
    - D. Menonaktifkan notifikasi
    - **Jawaban: B**

29. Chain of custody diperlukan agar...
    - A. Bukti dapat dipertanggungjawabkan
    - B. Bukti mudah diubah
    - C. Investigasi lebih lambat tanpa tujuan
    - D. Log bisa dihapus cepat
    - **Jawaban: A**

30. Tahap IR setelah identification umumnya...
    - A. Eradication
    - B. Recovery
    - C. Containment
    - D. Lessons learned
    - **Jawaban: C**

31. Contoh indikator compromise (IOC) adalah...
    - A. Domain berbahaya yang terdeteksi pada log DNS
    - B. Nama proyek internal
    - C. Jadwal rapat
    - D. Nomor aset kursi
    - **Jawaban: A**

32. Pentest etis wajib memiliki...
    - A. Akses tanpa izin
    - B. Izin tertulis dan scope jelas
    - C. Data pelanggan asli tanpa masking
    - D. Eksploitasi tanpa batas
    - **Jawaban: B**

33. Reconnaissance dalam pentest berarti...
    - A. Menghapus jejak
    - B. Pengumpulan informasi target
    - C. Menulis kebijakan HR
    - D. Migrasi cloud
    - **Jawaban: B**

34. ATT&CK mapping digunakan untuk...
    - A. Mapping teknik serangan ke kontrol/deteksi
    - B. Menentukan gaji analis
    - C. Menghitung subnet secara otomatis
    - D. Membuat sertifikat SSL
    - **Jawaban: A**

35. EDR adalah solusi untuk...
    - A. Endpoint detection and response
    - B. Email data routing
    - C. External DNS relay
    - D. Encrypted disk registry
    - **Jawaban: A**

36. Purple teaming menggabungkan...
    - A. Tim legal dan finance
    - B. Tim red dan blue untuk perbaikan deteksi
    - C. Tim procurement dan IT support
    - D. Tim UI dan QA
    - **Jawaban: B**

37. Shared responsibility model cloud berarti...
    - A. Provider bertanggung jawab atas semua aspek
    - B. Pelanggan bertanggung jawab atas semua aspek
    - C. Tanggung jawab keamanan dibagi provider dan pelanggan
    - D. Tidak ada tanggung jawab keamanan
    - **Jawaban: C**

38. Misconfiguration IAM cloud dapat menyebabkan...
    - A. Privilege escalation
    - B. Penurunan kualitas video
    - C. Gagal print dokumen
    - D. Kerusakan hardware fisik
    - **Jawaban: A**

39. Secrets management bertujuan...
    - A. Menaruh API key di source code publik
    - B. Mengelola kredensial secara aman
    - C. Menonaktifkan audit trail
    - D. Menyederhanakan brute force
    - **Jawaban: B**

40. Namespace di Kubernetes membantu...
    - A. Isolasi logis resource
    - B. Menambah bug aplikasi
    - C. Menghapus RBAC
    - D. Menonaktifkan network policy
    - **Jawaban: A**

41. ISO 27001 fokus pada...
    - A. Sistem manajemen keamanan informasi (ISMS)
    - B. Bahasa pemrograman
    - C. Desain grafis
    - D. Routing BGP
    - **Jawaban: A**

42. NIST CSF terdiri dari fungsi utama Identify, Protect, Detect, Respond, dan...
    - A. Recover
    - B. Report
    - C. Rebuild
    - D. Recode
    - **Jawaban: A**

43. Risk register berisi...
    - A. Daftar risiko, dampak, kemungkinan, dan rencana mitigasi
    - B. Daftar karyawan cuti
    - C. Daftar software desain
    - D. Daftar harga perangkat
    - **Jawaban: A**

44. Risk treatment plan dapat berupa...
    - A. Accept, mitigate, transfer, avoid
    - B. Install, uninstall, restart, reset
    - C. Build, run, test, deploy
    - D. Read, write, execute, delete
    - **Jawaban: A**

45. Responsible disclosure berarti...
    - A. Menjual kerentanan ke publik
    - B. Melapor kerentanan secara etis ke pihak terkait
    - C. Menyembunyikan bug selamanya
    - D. Publikasi detail eksploitasi tanpa koordinasi
    - **Jawaban: B**

46. MFA meningkatkan keamanan karena...
    - A. Menghilangkan kebutuhan password policy
    - B. Menambah faktor verifikasi
    - C. Menonaktifkan audit log
    - D. Membuka akses anonim
    - **Jawaban: B**

47. Prinsip secure by default berarti...
    - A. Konfigurasi awal sudah aman
    - B. Semua fitur terbuka sejak awal
    - C. Password default dibagikan
    - D. Logging dimatikan
    - **Jawaban: A**

48. Contoh kontrol preventif adalah...
    - A. Firewall rule deny-by-default
    - B. Post-incident report
    - C. Forensic image disk
    - D. Root cause analysis
    - **Jawaban: A**

49. Contoh kontrol detektif adalah...
    - A. SIEM alert untuk login anomali
    - B. MFA enforcement
    - C. Segmentation VLAN
    - D. Disk encryption
    - **Jawaban: A**

50. Contoh kontrol korektif adalah...
    - A. Restore dari backup bersih
    - B. Input validation
    - C. WAF policy
    - D. Hardening baseline
    - **Jawaban: A**

51. Protokol aman untuk remote admin Linux adalah...
    - A. Telnet
    - B. SSH
    - C. FTP
    - D. HTTP
    - **Jawaban: B**

52. Log yang penting untuk investigasi Windows berada di...
    - A. Event Viewer
    - B. Paint
    - C. Notepad default
    - D. Device Manager saja
    - **Jawaban: A**

53. Tujuan utama backup offline adalah...
    - A. Meningkatkan risiko ransomware
    - B. Menjaga ketersediaan saat serangan/destruksi
    - C. Menghapus kebutuhan monitoring
    - D. Menurunkan keamanan data
    - **Jawaban: B**

54. HTTPS melindungi data in transit dengan...
    - A. ARP
    - B. TLS
    - C. ICMP
    - D. NAT
    - **Jawaban: B**

55. Jika sertifikat TLS expired, dampak utamanya adalah...
    - A. Tidak ada dampak
    - B. Penurunan kepercayaan/kemungkinan gagal koneksi aman
    - C. RAM langsung rusak
    - D. DNS mati permanen
    - **Jawaban: B**

56. Secure session management sebaiknya...
    - A. Gunakan cookie tanpa HttpOnly/Secure
    - B. Rotasi session ID saat login
    - C. Session ID di URL permanen
    - D. Session tidak pernah expired
    - **Jawaban: B**

57. WAF terutama membantu melindungi dari...
    - A. Serangan aplikasi web umum
    - B. Kerusakan hard disk
    - C. Gangguan listrik
    - D. Human resource fraud internal
    - **Jawaban: A**

58. Tujuan NAC (Network Access Control) adalah...
    - A. Mengatur siapa/perangkat apa yang boleh masuk jaringan
    - B. Kompresi file log
    - C. Membuat sertifikat digital
    - D. Enkripsi email otomatis
    - **Jawaban: A**

59. Dalam threat hunting, pendekatan hypothesis-driven berarti...
    - A. Mencari ancaman tanpa data
    - B. Menetapkan hipotesis ancaman lalu uji dengan data
    - C. Menunggu alert saja
    - D. Menonaktifkan telemetry
    - **Jawaban: B**

60. False positive pada alert berarti...
    - A. Serangan nyata terlewat
    - B. Alert muncul tetapi bukan insiden nyata
    - C. Log rusak permanen
    - D. Device tidak online
    - **Jawaban: B**

61. False negative lebih berbahaya karena...
    - A. Alert terlalu banyak
    - B. Insiden nyata tidak terdeteksi
    - C. Biaya storage naik
    - D. Dashboard terlalu ramai
    - **Jawaban: B**

62. MITRE ATT&CK paling sering dipakai untuk...
    - A. Standar akuntansi
    - B. Basis teknik/taktik adversary untuk deteksi dan hunting
    - C. Pengelolaan inventaris kantor
    - D. Desain antarmuka pengguna
    - **Jawaban: B**

63. Dalam laporan eksekutif keamanan, isi utama sebaiknya...
    - A. Hanya payload teknis detail
    - B. Dampak bisnis, risiko, prioritas tindakan
    - C. Kode exploit lengkap
    - D. Tidak ada rekomendasi
    - **Jawaban: B**

64. Tujuan post-incident lessons learned adalah...
    - A. Menyalahkan individu
    - B. Perbaikan proses, kontrol, dan kesiapan
    - C. Menghapus semua bukti
    - D. Mengurangi transparansi
    - **Jawaban: B**

65. Model maturity security yang baik menekankan...
    - A. One-time project
    - B. Continuous improvement
    - C. Tanpa metrik
    - D. Tanpa dokumentasi
    - **Jawaban: B**

66. Komponen penting kebijakan keamanan organisasi adalah...
    - A. Ruang lingkup, peran, kontrol, dan kepatuhan
    - B. Preferensi warna UI
    - C. Struktur bonus marketing
    - D. Jadwal parkir
    - **Jawaban: A**

67. Etika profesi cyber security menuntut...
    - A. Eksploitasi tanpa izin demi latihan
    - B. Kerahasiaan, integritas, kepatuhan hukum
    - C. Menjual akses sistem
    - D. Mengabaikan scope
    - **Jawaban: B**

68. Salah satu output capstone yang wajib adalah...
    - A. Meme teknis
    - B. Bukti teknis dan laporan lengkap
    - C. Source code malware
    - D. Daftar game favorit
    - **Jawaban: B**

69. Karier awal yang sesuai lulusan kurikulum ini adalah...
    - A. SOC Analyst junior
    - B. Chief Legal Officer
    - C. Direktur Produksi Film
    - D. Ahli bedah saraf
    - **Jawaban: A**

70. Sertifikasi dasar yang relevan adalah...
    - A. ISC2 CC / Security+
    - B. CFA
    - C. PMP saja
    - D. CCNP Voice lama saja
    - **Jawaban: A**

### Soal 71–100 (Studi Kasus / Esai Singkat)

71. Jelaskan perbedaan **threat**, **vulnerability**, dan **risk** dengan satu contoh praktis masing-masing.
72. Buat model ancaman sederhana untuk aplikasi absensi online kampus (aset, aktor ancaman, kontrol utama).
73. Mengapa confidentiality saja tidak cukup dalam keamanan informasi?
74. Dalam jaringan kantor kecil, bagaimana Anda menerapkan Defense in Depth secara realistis?
75. Berikan contoh attack surface pada aplikasi e-commerce dan cara menguranginya.
76. Anda menemukan trafik DNS anomali ke domain acak. Langkah triage awal apa yang dilakukan?
77. Bedakan IDS signature-based dan behavior-based secara singkat.
78. Apa indikator bahwa koneksi HTTPS sedang bermasalah karena misconfiguration TLS?
79. Tuliskan checklist hardening Linux server web minimum (5 poin).
80. Tuliskan checklist hardening Windows endpoint minimum (5 poin).
81. Bagaimana strategi patch management untuk mengurangi downtime namun tetap aman?
82. Kapan hashing lebih tepat dipakai daripada encryption?
83. Jelaskan alur validasi sertifikat pada koneksi TLS secara ringkas.
84. Berikan contoh implementasi password policy yang baik untuk organisasi menengah.
85. Jelaskan bagaimana SQL Injection bisa terjadi pada query login.
86. Tuliskan 3 teknik pencegahan XSS di sisi server dan client.
87. Apa fungsi CSRF token dan bagaimana mekanisme sederhananya?
88. Buat contoh sederhana security requirement pada fitur reset password.
89. Pilih satu fitur aplikasi (misal upload file), lalu buat threat modeling STRIDE ringkas.
90. Bagaimana menyisipkan SAST/DAST/dependency scan ke pipeline CI/CD tanpa memperlambat rilis berlebihan?
91. Anda menerima 500 alert/hari. Rancang pendekatan tuning untuk menurunkan noise.
92. Berikan 5 contoh rule deteksi dasar berbasis log untuk SOC pemula.
93. Pada insiden ransomware kecil, prioritas tindakan 24 jam pertama apa saja?
94. Mengapa chain of custody krusial jika insiden berpotensi masuk proses hukum?
95. Susun outline laporan pentest yang baik untuk audiens teknis dan eksekutif.
96. Buat contoh mapping 3 teknik ATT&CK ke use case deteksi.
97. Jelaskan perbedaan tanggung jawab keamanan antara provider cloud dan pelanggan.
98. Berikan contoh risk register untuk 3 risiko utama pada startup SaaS.
99. Bagaimana merancang program awareness keamanan agar bukan sekadar formalitas?
100. Anda diminta menyusun roadmap karier 12 bulan menjadi SOC Analyst junior. Tuliskan rencana belajarnya.

### Kunci Penilaian Singkat Soal 71–100
Gunakan rubrik berikut (skor 0–4 per soal):
- **4:** Jawaban akurat, terstruktur, relevan, ada contoh teknis.
- **3:** Konsep benar, contoh terbatas.
- **2:** Sebagian benar namun dangkal/kurang tepat.
- **1:** Banyak miskonsepsi.
- **0:** Tidak menjawab/tidak relevan.

---

## D. Penutup
Set 100 soal ini dapat dipakai untuk quiz modul, ujian tengah, ujian akhir, atau bank soal LMS. Materi dapat dikembangkan lagi menjadi versi per modul (misal 20 soal khusus OWASP, 20 soal khusus SIEM, dll.) sesuai kebutuhan institusi.
