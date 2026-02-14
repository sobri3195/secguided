# Blueprint Fitur Lanjutan Security Platform

Dokumen ini merinci desain untuk 5 fitur prioritas yang berfokus pada compliance, remediasi cerdas, prioritisasi berbasis bisnis, analytics posture, dan knowledge base playbook.

## 1) Mapping Temuan ke Standar (OWASP ASVS / CIS Controls / ISO 27001 / NIST CSF)

### Tujuan
- Menghubungkan setiap vulnerability finding ke kontrol standar lintas framework.
- Memudahkan audit readiness (evidence per kontrol) dan gap analysis.

### Model data (many-to-many)
Gunakan model normalisasi agar satu finding bisa terhubung ke banyak kontrol, dan satu kontrol bisa dipetakan dari banyak finding.

**Tabel inti:**
- `findings`
  - `id`, `title`, `category`, `severity`, `asset_id`, `created_at`
- `frameworks`
  - `id`, `name` (OWASP_ASVS/CIS/ISO27001/NIST_CSF), `major_version`, `release_date`, `status`
- `controls`
  - `id`, `framework_id`, `control_code` (mis. ASVS-5.3.2), `title`, `description`, `domain`, `is_active`
- `finding_control_mappings`
  - `id`, `finding_id`, `control_id`, `mapping_confidence`, `mapping_source` (rule/ai/manual), `created_by`, `created_at`
- `control_aliases`
  - `id`, `control_id`, `alias_code`, `alias_framework` (untuk crosswalk antar standar)

**Relasi:**
- `findings` N:M `controls` via `finding_control_mappings`.
- `frameworks` 1:N `controls`.
- `controls` 1:N `control_aliases`.

### Mekanisme mapping otomatis
1. **Rule-based baseline**: mapping dari `finding.category` + CWE ke kontrol umum.
2. **AI-assisted enrichment**: model memberi kandidat kontrol + confidence.
3. **Human-in-the-loop**: reviewer compliance memvalidasi mapping confidence rendah.
4. **Audit trail**: simpan siapa yang mengubah mapping dan alasannya.

### Strategi update versi framework
- Simpan versi standar sebagai entitas immutable (`frameworks` + snapshot `controls`).
- Saat rilis versi baru:
  1. Import versi baru sebagai record baru, jangan overwrite versi lama.
  2. Jalankan proses `control diff` (added/modified/deprecated).
  3. Isi `control_aliases` untuk mempertahankan kompatibilitas laporan historis.
  4. Recalculate mapping untuk finding aktif, simpan hasil sebagai mapping baru.
- Laporan compliance harus bisa dipilih berdasarkan versi standar tertentu (point-in-time compliance).

---

## 2) AI Assistant Rekomendasi Remediasi Kontekstual

### Tujuan
Memberikan rekomendasi perbaikan yang tidak generik, tetapi disesuaikan dengan:
- Jenis kerentanan.
- Bahasa + framework.
- Deployment environment (cloud, container, on-prem).

### Arsitektur komponen
- **Input Normalizer**
  - Menyatukan data finding: CWE, sink/source, file path, endpoint, dependency, environment tag.
- **Context Engine**
  - Menarik context teknis: `language`, `framework`, `runtime`, `infra`, `criticality service`.
- **Retrieval Layer (RAG)**
  - Mengambil referensi dari playbook internal, secure coding guideline, dan knowledge base CVE/CWE.
- **Recommendation Generator**
  - Menghasilkan remediation steps, secure code snippet, compensating control, dan verifikasi.
- **Policy Guardrail**
  - Memfilter output agar tidak menyarankan tindakan berisiko (misconfig, disable security check permanen).

### Struktur output rekomendasi
Setiap rekomendasi idealnya berisi:
- `root_cause`
- `fix_now` (langkah cepat)
- `fix_right` (perbaikan struktural)
- `code_example_before_after`
- `test_verification` (SAST/DAST/unit/integration)
- `rollback_plan`
- `confidence_score`

### Strategi kualitas
- Gunakan feedback loop dari hasil implementasi remediation (accepted/rejected/reopened).
- Tracking metrik:
  - Acceptance rate rekomendasi.
  - Reopen rate setelah fix dari AI.
  - Median time-to-fix setelah saran AI.

---

## 3) Prioritisasi Temuan Berbasis Technical Severity + Business Impact

### Tujuan
Menghindari backlog yang hanya mengikuti CVSS; temuan diprioritaskan berdasarkan risiko bisnis aktual.

### Skema skor gabungan
- `technical_score` (0–10): dari CVSS/severity + exploitability + exposure.
- `business_impact_score` (0–10):
  - `revenue_impact` (0–3)
  - `reputation_impact` (0–3)
  - `legal_compliance_impact` (0–2)
  - `service_criticality` (0–2)

**Formula contoh:**
`priority_score = (0.55 * technical_score) + (0.45 * business_impact_score)`

### Matriks prioritas (contoh)
- **P0 (Critical)**: `priority_score >= 8.5` atau ada `active exploit` pada aset crown-jewel.
- **P1 (High)**: `7.0 - 8.49`.
- **P2 (Medium)**: `5.0 - 6.99`.
- **P3 (Low)**: `< 5.0`.

### Aturan sorting backlog
Urutan sort rekomendasi:
1. `priority_tier` (P0 > P1 > P2 > P3)
2. `exploit_status` (active exploited dulu)
3. `asset_criticality` (production payment/auth > internal tool)
4. `sla_due_date` (yang paling dekat/overdue naik)
5. `finding_age_days` (lebih lama lebih diprioritaskan bila skor sama)

Tambahkan override policy untuk tim GRC/SOC jika ada risiko legal segera.

---

## 4) Trend Analytics & Security Posture Score

### KPI utama
- **Volume findings**: open/closed per minggu/bulan.
- **MTTR**: median waktu dari open ke close.
- **Reopen rate**: % temuan reopened setelah dinyatakan fixed.
- **Overdue SLA**: % temuan melewati target SLA.
- **Posture score**: skor komposit kesehatan keamanan tim/proyek.

### Definisi posture score (contoh)
`posture_score = 100 - risk_penalty`

`risk_penalty` disusun dari:
- Bobot temuan open per severity.
- Penalti overdue SLA.
- Penalti reopen rate tinggi.
- Penalti coverage gap (mis. service belum discan).

### Dashboard untuk manajemen
- Executive cards: posture score, total risk exposure, trend 90 hari.
- Heatmap per business unit.
- SLA compliance gauge.
- Forecast sederhana (linear trend) untuk prediksi backlog 30 hari.

### Dashboard untuk tim teknis
- Drill-down per repository/service.
- Scatter plot `age vs severity`.
- Funnel workflow (open → in progress → resolved → reopened).
- Leaderboard “top recurring root cause”.

### Data pipeline singkat
1. Ingest dari scanner/ticketing.
2. Normalisasi status lintas tools.
3. Hitung metric harian ke tabel agregat.
4. Simpan snapshot untuk tren historis immutable.

---

## 5) Knowledge Base Playbook Remediasi

### Tujuan
Menyediakan panduan remediasi praktis yang konsisten, bisa dipanggil langsung dari finding.

### Struktur playbook
- `playbook_id`
- `vulnerability_type` (SQLi/XSS/SSRF/IDOR/Misconfig Cloud)
- `tags` (language, framework, cloud provider)
- `symptoms`
- `root_cause_patterns`
- `remediation_steps`
- `verification_steps`
- `rollback_considerations`
- `references` (OWASP/CWE/vendor best practice)
- `owner`, `review_cycle_days`, `status`

### Versioning
- Gunakan semantic versioning: `major.minor.patch`.
  - `major`: perubahan konsep/perilaku fix.
  - `minor`: tambahan skenario/framework.
  - `patch`: koreksi redaksional/contoh.
- Setiap finding mereferensikan `playbook_id + version` agar jejak historis tetap valid.
- Support lifecycle: `draft -> approved -> deprecated -> archived`.

### Keterhubungan ke finding
- Auto-suggestion berdasarkan CWE + tech stack.
- UI finding menampilkan:
  - “Recommended playbook”
  - Versi terakhir stabil
  - Delta perubahan dari versi sebelumnya

### Contoh langkah verifikasi pasca-perbaikan
Untuk tiap playbook, wajib ada checklist:
1. **Functional verification**: fitur tetap berjalan normal.
2. **Security verification**: payload uji lama tidak lagi berhasil.
3. **Regression automation**: unit/integration/security test ditambahkan.
4. **Monitoring verification**: alert/log rule untuk deteksi pola serupa.
5. **Closure criteria**: evidence attach (PR, test run, screenshot/log).

---

## Rekomendasi Implementasi Bertahap
- **Phase 1 (4–6 minggu):** data model mapping + scoring prioritas + dashboard KPI dasar.
- **Phase 2 (4–8 minggu):** AI remediation assistant v1 (RAG + guardrail) + playbook versioning.
- **Phase 3 (berkelanjutan):** framework version updater otomatis, feedback loop AI, dan forecasting posture.
