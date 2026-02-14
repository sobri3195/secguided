# Kurikulum Standar Cyber Security

Dokumen ini menyajikan kurikulum standar untuk pembelajaran cyber security dari tingkat dasar sampai siap kerja. Kurikulum dirancang modular agar dapat dipakai oleh:
- Sekolah/kampus
- Bootcamp
- Program pelatihan internal perusahaan
- Pembelajaran mandiri terstruktur

## 1. Tujuan Pembelajaran
Setelah menyelesaikan kurikulum ini, peserta diharapkan mampu:
1. Memahami konsep keamanan informasi (CIA Triad, risk, threat, vulnerability).
2. Menerapkan praktik keamanan dasar di sistem, jaringan, aplikasi, dan cloud.
3. Melakukan analisis insiden, pengujian keamanan dasar, serta membuat laporan profesional.
4. Bekerja sesuai etika, hukum, dan standar industri.

## 2. Prasyarat Peserta
- Dasar komputer dan sistem operasi (Linux/Windows).
- Dasar jaringan (IP, DNS, HTTP/HTTPS, routing sederhana).
- Dasar scripting (Python/Bash/PowerShell) sangat disarankan.

## 3. Struktur Level

### Level 1 — Foundation (Dasar)
**Durasi rekomendasi:** 8–10 minggu

#### Modul 1: Pengantar Cyber Security
- Konsep aset, ancaman, kerentanan, dampak, kontrol.
- CIA Triad, Zero Trust, Defense in Depth.
- Attack surface dan security lifecycle.

**Output:** peserta dapat menjelaskan model ancaman sederhana.

#### Modul 2: Dasar Jaringan untuk Security
- TCP/IP, subnetting dasar, DNS, HTTP/HTTPS, TLS.
- Firewall, IDS/IPS, VPN dasar.
- Packet analysis dengan Wireshark.

**Praktik:** capture dan analisa trafik normal vs anomali.

#### Modul 3: Sistem Operasi & Hardening Dasar
- Linux permissions, process, service, logging.
- Windows security baseline, event log, policy dasar.
- Patch management dan secure configuration.

**Praktik:** hardening VM Linux/Windows berdasarkan checklist CIS dasar.

#### Modul 4: Dasar Kriptografi
- Hashing, salting, symmetric vs asymmetric encryption.
- PKI, sertifikat digital, manajemen kunci.
- Implementasi TLS pada layanan web.

**Praktik:** verifikasi sertifikat dan simulasi kesalahan konfigurasi.

---

### Level 2 — Intermediate (Menengah)
**Durasi rekomendasi:** 10–12 minggu

#### Modul 5: Keamanan Aplikasi Web
- OWASP Top 10 terbaru.
- Input validation, authentication, session management.
- Secure coding principles dan code review dasar.

**Praktik:** identifikasi dan perbaikan celah (SQLi, XSS, CSRF) di aplikasi lab.

#### Modul 6: Secure Development Lifecycle (SSDLC)
- Requirement security, threat modeling (STRIDE).
- SAST, DAST, dependency scanning.
- Integrasi security dalam CI/CD.

**Praktik:** membuat pipeline sederhana dengan security check otomatis.

#### Modul 7: Network Security Operations
- Segmentasi jaringan, NAC, WAF.
- SIEM dasar, alert triage, log correlation.
- Detection engineering dasar (rule/logic deteksi).

**Praktik:** membuat 5 rule deteksi sederhana berbasis log.

#### Modul 8: Incident Response & Digital Forensics Dasar
- Tahapan IR: preparation, identification, containment, eradication, recovery, lessons learned.
- Evidence handling dan chain of custody.
- Forensik memori/disk/log tingkat awal.

**Praktik:** tabletop exercise insiden ransomware skala kecil.

---

### Level 3 — Advanced (Lanjutan)
**Durasi rekomendasi:** 10–14 minggu

#### Modul 9: Offensive Security (Etis)
- Metodologi penetration testing.
- Reconnaissance, scanning, exploitation terbatas, post-exploitation aman.
- Pelaporan teknis dan eksekutif.

**Catatan:** wajib mematuhi ruang lingkup legal dan izin tertulis.

#### Modul 10: Defensive Security Lanjutan
- Threat hunting, ATT&CK mapping.
- Endpoint security (EDR/XDR), behavioral detection.
- Purple teaming dasar.

**Praktik:** simulasi serangan-terdeteksi-perbaikan rule.

#### Modul 11: Cloud Security
- Shared responsibility model (AWS/Azure/GCP).
- IAM, secrets management, network isolation cloud.
- Container & Kubernetes security dasar.

**Praktik:** hardening workload cloud dan audit misconfiguration umum.

#### Modul 12: Governance, Risk, Compliance (GRC)
- ISO 27001, NIST CSF, CIS Controls, PCI-DSS dasar.
- Risk assessment dan risk treatment plan.
- Kebijakan keamanan, awareness, audit internal.

**Praktik:** membuat risk register dan prioritas mitigasi.

## 4. Metodologi Pembelajaran
- **30% teori, 70% praktik.**
- Lab berbasis VM/container dengan skenario realistis.
- Studi kasus insiden nyata (disederhanakan).
- Penilaian berbasis proyek dan portofolio.

## 5. Skema Evaluasi
1. **Quiz modul (20%)**
2. **Praktikum/lab (35%)**
3. **Proyek tengah (15%)**
4. **Capstone project akhir (25%)**
5. **Sikap profesional & etika (5%)**

### Kriteria Kelulusan
- Nilai akhir minimal 75/100.
- Lulus capstone dan presentasi laporan.
- Tidak melanggar etika/hukum selama praktik.

## 6. Capstone Project (Wajib)
Contoh tema:
- Desain SOC mini untuk organisasi menengah.
- Pentest legal terhadap aplikasi lab + remediation plan.
- Implementasi security baseline infrastruktur hybrid.

**Deliverables minimum:**
- Dokumen ruang lingkup dan asumsi.
- Bukti teknis (log, screenshot, artefak).
- Analisis risiko & prioritas perbaikan.
- Executive summary (non-teknis) + laporan teknis lengkap.

## 7. Alat yang Direkomendasikan
- **Umum:** Git, Linux, Docker, VS Code.
- **Analisis jaringan:** Wireshark, tcpdump.
- **Web security:** Burp Suite Community, OWASP ZAP.
- **Monitoring:** Wazuh/Elastic stack (opsional lab).
- **Cloud:** akun sandbox AWS/Azure/GCP.

## 8. Etika, Legal, dan Profesionalisme
- Selalu gunakan lingkungan legal, izin tertulis, dan scope jelas.
- Dilarang melakukan akses tanpa otorisasi.
- Menjaga kerahasiaan data sensitif.
- Mengikuti responsible disclosure untuk pelaporan kerentanan.

## 9. Jalur Karier Setelah Lulus
- SOC Analyst (Tier 1/2)
- Junior Penetration Tester
- Security Engineer (Junior)
- Application Security Analyst
- Cloud Security Associate
- GRC / IT Risk Analyst

## 10. Sertifikasi Pendamping (Opsional)
- **Dasar:** ISC2 CC, CompTIA Security+
- **Menengah:** eJPT, CySA+, SC-200 (Microsoft)
- **Lanjutan:** OSCP, CISSP (sesuai pengalaman), GCIH

## 11. Rencana Belajar 6 Bulan (Contoh)
- **Bulan 1–2:** Level Foundation
- **Bulan 3–4:** Level Intermediate
- **Bulan 5:** Level Advanced (Offensive/Defensive fokus)
- **Bulan 6:** Capstone + simulasi wawancara kerja

---

## Penutup
Kurikulum standar ini bisa disesuaikan menurut kebutuhan institusi, tingkat peserta, dan kebutuhan industri. Fokus utama tetap pada keseimbangan antara fondasi teori, praktik langsung, etika profesional, serta kemampuan komunikasi hasil teknis ke pemangku kepentingan non-teknis.
