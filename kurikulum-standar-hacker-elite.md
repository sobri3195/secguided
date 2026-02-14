# Kurikulum Standar Hacker Elite

> **Catatan etika:** Kurikulum ini ditujukan untuk pembelajaran keamanan siber secara legal, defensif, dan profesional (red team berizin, bug bounty, security engineering). Selalu patuhi hukum, ruang lingkup izin, dan kode etik.

## 1) Fondasi Wajib (0–3 bulan)

### Tujuan
Membangun dasar teknis kuat sebelum masuk ke eksploitasi lanjutan.

### Materi
- **Jaringan komputer:** OSI/TCP-IP, routing, DNS, HTTP/HTTPS, TLS, VPN.
- **Sistem operasi:** Linux internals, Windows basics, manajemen proses, permission model.
- **Pemrograman:** Python, Bash, JavaScript dasar, C dasar (memori, pointer).
- **Version control & tooling:** Git, terminal workflow, package manager.
- **Dasar keamanan:** CIA triad, threat modeling, OWASP Top 10.

### Praktik minimum
- Setup lab lokal (VM/containers).
- Menulis script otomatisasi sederhana (scan, parsing log).
- Membaca RFC dan dokumentasi teknis secara rutin.

---

## 2) Core Offensive Security (3–8 bulan)

### Tujuan
Memahami proses ofensif end-to-end secara terstruktur.

### Materi
- **Reconnaissance:** OSINT, subdomain enum, service discovery.
- **Vulnerability assessment:** scanner + validasi manual.
- **Web application security:** auth/session, SSRF, SQLi, XSS, access control.
- **Network exploitation dasar:** SMB, misconfiguration, credential hygiene.
- **Post-exploitation dasar:** privilege escalation Linux/Windows, persistence awareness.

### Praktik minimum
- Menyelesaikan lab CTF web + network level beginner/intermediate.
- Menulis laporan temuan dengan severity, impact, remediation.
- Melakukan retest perbaikan dan verifikasi closure.

---

## 3) Core Defensive & Detection (8–12 bulan)

### Tujuan
Menjadi hacker yang memahami sisi biru (defense) agar teknik lebih matang.

### Materi
- **Security monitoring:** log pipeline, SIEM, alert triage.
- **Threat detection:** IOC/IOA, MITRE ATT&CK mapping.
- **Incident response dasar:** containment, eradication, recovery.
- **Hardening:** baseline Linux/Windows, IAM, secret management.
- **Secure SDLC:** SAST, DAST, dependency scanning, code review.

### Praktik minimum
- Membuat aturan deteksi sederhana (Sigma/KQL/ekuivalen).
- Simulasi serangan kecil lalu validasi alert yang muncul.
- Menyusun playbook respons insiden.

---

## 4) Spesialisasi Elite (tahun ke-2)

Pilih **1–2 jalur utama** berikut:

1. **Web Exploitation Lanjutan**
   - Deserialization, race condition, logic flaw kompleks.
   - API security, GraphQL abuse, authz bypass tingkat lanjut.
2. **Binary Exploitation & Reverse Engineering**
   - Assembly, debugger, memory corruption, ROP, fuzzing dasar.
3. **Cloud Security**
   - AWS/Azure/GCP IAM abuse, container/K8s attack path, CSPM.
4. **Red Team Operations**
   - Adversary emulation, OPSEC, lateral movement, C2 tradecraft.
5. **Mobile Security**
   - Android/iOS app analysis, runtime instrumentation.

### Praktik minimum
- Portofolio write-up teknis mendalam.
- Kontribusi tool/script internal.
- Simulasi assessment mendekati skenario nyata.

---

## 5) Standar Kompetensi “Elite”

Seseorang layak disebut “elite” bila konsisten menunjukkan:
- **Teknis:** mampu menemukan bug non-trivial + menjelaskan akar masalah.
- **Metodologi:** bekerja sistematis, repeatable, berbasis evidence.
- **Komunikasi:** laporan jelas untuk engineer dan manajemen.
- **Etika:** patuh legal scope, responsible disclosure.
- **Dampak:** temuan menghasilkan perbaikan nyata pada posture keamanan.

---

## 6) Proyek Wajib Portofolio

1. **Pentest mini end-to-end** pada aplikasi lab (scoping → testing → report → retest).
2. **Detection engineering mini-project** (buat detection + uji dengan simulasi).
3. **Secure code review** pada proyek open-source kecil dengan rekomendasi patch.
4. **Automation project** (tool internal untuk enumerasi/validasi/pelaporan).

---

## 7) Rencana Belajar Mingguan (contoh)

- **Senin–Rabu (90 menit/hari):** teori + notes.
- **Kamis–Jumat (120 menit/hari):** lab praktik.
- **Sabtu (2–4 jam):** mini-project / CTF.
- **Minggu (60 menit):** review, dokumentasi, retrospective.

**Ritme ideal:** 10–15 jam/minggu konsisten > belajar maraton tidak teratur.

---

## 8) Sertifikasi (Opsional, bukan tujuan utama)

- Fundamental: Security+, eJPT (atau ekuivalen).
- Intermediate: PNPT, OSCP (fokus metodologi).
- Advanced (sesuai jalur): OSEP/OSED, CRTO, cloud-security certs.

> Sertifikasi membantu validasi baseline, namun **portofolio nyata** dan kualitas eksekusi di lapangan jauh lebih penting.

---

## 9) Kode Etik Hacker Profesional

- Hanya uji target dengan izin tertulis.
- Jangan melakukan kerusakan, exfiltrasi data sensitif, atau downtime yang tidak perlu.
- Simpan bukti secukupnya dan aman.
- Laporkan dengan jujur, lengkap, dan bertanggung jawab.
- Utamakan perbaikan sistem, bukan “pamer eksploit”.

---

## 10) Output Akhir yang Diharapkan

Dalam 12–24 bulan, peserta mampu:
- Menjalankan assessment keamanan skala kecil-menengah secara mandiri.
- Menggabungkan perspektif attacker + defender.
- Menulis laporan profesional yang dapat langsung dieksekusi tim engineering.
- Membangun kebiasaan belajar berkelanjutan mengikuti perkembangan threat landscape.
