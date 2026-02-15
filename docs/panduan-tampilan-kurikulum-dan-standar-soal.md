# Panduan Tampilan Kurikulum & Standar Soal

Dokumen ini menjadi acuan untuk menampilkan kurikulum dan menyusun soal agar konsisten, mudah dipahami, dan siap dipakai di LMS/website SecGuided.

---

## 1) Struktur Tampilan Kurikulum

Setiap **modul** wajib ditampilkan dengan urutan berikut:

1. **Judul Modul**
2. **Level** (Beginner / Intermediate / Advanced)
3. **Durasi Belajar** (contoh: 2 minggu)
4. **Tujuan Pembelajaran** (3–5 poin)
5. **Materi Inti** (subtopik utama)
6. **Praktik / Lab** (aktivitas hands-on)
7. **Kriteria Kelulusan Modul**
8. **Soal Evaluasi** (pre-test, latihan, post-test)

### Format ringkas per modul (template)

```md
## Modul X — [Nama Modul]
- Level: Beginner/Intermediate/Advanced
- Durasi: X minggu
- Prasyarat: [jika ada]

### Tujuan Pembelajaran
- Peserta mampu ...
- Peserta mampu ...

### Materi Inti
1. ...
2. ...
3. ...

### Praktik / Lab
- Lab 1: ...
- Lab 2: ...

### Kriteria Kelulusan
- Menyelesaikan minimal 80% lab.
- Nilai post-test minimal 75.

### Evaluasi
- Pre-test: 5 soal
- Latihan: 10 soal
- Post-test: 15 soal
```

---

## 2) Standar Soal: Soal Harus Seperti Apa

### A. Karakteristik Soal yang Baik

Soal wajib:

- **Sesuai tujuan pembelajaran** (tidak keluar dari materi modul).
- **Jelas dan tidak ambigu** (hindari kalimat multitafsir).
- **Satu fokus per soal** (jangan gabung dua konsep besar dalam satu pertanyaan).
- **Kontekstual keamanan siber** (gunakan kasus realistis).
- **Memiliki tingkat kesulitan** (mudah, sedang, sulit).

### B. Komposisi Bentuk Soal (rekomendasi)

Untuk setiap post-test 15 soal:

- 9 soal **pilihan ganda** (konsep)
- 4 soal **studi kasus singkat** (analisis)
- 2 soal **praktik/lab task** (penerapan)

### C. Distribusi Tingkat Kesulitan

- 30% mudah
- 50% sedang
- 20% sulit

### D. Blueprint Kognitif (Bloom ringkas)

- **Remember/Understand**: definisi, fungsi, konsep dasar
- **Apply**: memilih langkah mitigasi, membaca log sederhana
- **Analyze**: mengidentifikasi akar masalah dari skenario

---

## 3) Template Penulisan Soal

### 3.1 Pilihan Ganda

```md
- ID: M1-PG-001
- Tipe: Pilihan Ganda
- Level: Mudah/Sedang/Sulit
- Tujuan: [kode tujuan pembelajaran]
- Pertanyaan: ...
- Opsi:
  A. ...
  B. ...
  C. ...
  D. ...
- Jawaban Benar: B
- Pembahasan: ...
```

### 3.2 Studi Kasus

```md
- ID: M1-SK-001
- Tipe: Studi Kasus
- Level: Sedang/Sulit
- Tujuan: [kode tujuan pembelajaran]
- Kasus: [paragraf singkat insiden]
- Pertanyaan: Berdasarkan kasus di atas, langkah paling tepat adalah ...
- Jawaban Ideal: ...
- Rubrik Penilaian:
  - Identifikasi masalah (40%)
  - Solusi yang diusulkan (40%)
  - Alasan teknis (20%)
```

### 3.3 Lab Task

```md
- ID: M1-LAB-001
- Tipe: Praktik
- Level: Sedang/Sulit
- Tujuan: [kode tujuan pembelajaran]
- Instruksi: ...
- Output yang harus dikumpulkan: screenshot/log/laporan
- Rubrik:
  - Ketepatan langkah (50%)
  - Hasil akhir (30%)
  - Dokumentasi (20%)
```

---

## 4) Checklist Validasi Soal (Wajib sebelum publish)

- [ ] Soal sesuai modul dan tujuan pembelajaran.
- [ ] Tidak ada jawaban ganda yang benar (untuk pilihan ganda).
- [ ] Pembahasan tersedia dan benar secara teknis.
- [ ] Tingkat kesulitan sudah diberi label.
- [ ] Bahasa jelas, singkat, dan konsisten.
- [ ] Sudah direview minimal oleh 1 reviewer materi.

---

## 5) Contoh Mini Paket Evaluasi per Modul

- **Pre-test**: 5 PG (cek pengetahuan awal)
- **Latihan**: 7 PG + 3 studi kasus
- **Post-test**: 9 PG + 4 studi kasus + 2 lab task

Target kelulusan rekomendasi:

- Nilai total minimal **75/100**
- Nilai praktik (lab) minimal **70/100**

---

## 6) Catatan Implementasi untuk Tampilan UI

Jika ditampilkan di halaman web, susunan section yang disarankan:

1. Header modul (judul, level, durasi, progress)
2. Accordion materi inti
3. Card praktik/lab
4. Panel evaluasi (pre-test, latihan, post-test)
5. Ringkasan skor + rekomendasi lanjut modul berikutnya

Dengan pola ini, kurikulum terlihat rapi dan soal memiliki standar kualitas yang konsisten.
