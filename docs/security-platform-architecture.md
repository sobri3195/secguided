# Desain Fitur Platform Security (Roadmap)

Dokumen ini merangkum rancangan 5 kapabilitas utama untuk platform security operation: risk scoring otomatis, template laporan dinamis, notifikasi multi-channel, attack surface inventory dashboard, dan workflow SLA remediasi.

## 1) Risk Scoring Otomatis per Temuan

### Tujuan
Menghasilkan skor risiko kuantitatif yang konsisten untuk setiap temuan keamanan berdasarkan:
- **Dampak (impact)**
- **Kemungkinan (likelihood)**
- **Aset terdampak (asset criticality)**
- **Eksposur publik (public exposure)**

### Komponen Model
Gunakan skala 1-5 untuk setiap komponen agar sederhana dan mudah dikalibrasi.

| Faktor | Definisi | Skala |
|---|---|---|
| Impact | Besarnya dampak ke bisnis/data | 1 (negligible) - 5 (catastrophic) |
| Likelihood | Peluang eksploitasi terjadi | 1 (rare) - 5 (almost certain) |
| Asset Criticality | Tingkat kritikal aset | 1 (low) - 5 (mission critical) |
| Public Exposure | Tingkat keterpaparan eksternal | 1 (internal only) - 5 (internet + known exploit) |

### Formula yang Bisa Dikonfigurasi Admin
Contoh bobot default (jumlah = 1.0):
- `wImpact = 0.35`
- `wLikelihood = 0.30`
- `wAsset = 0.20`
- `wExposure = 0.15`

Formula skor normalisasi 0-100:

```text
weighted = (impact*wImpact) + (likelihood*wLikelihood) + (asset*wAsset) + (exposure*wExposure)
riskScore = (weighted / 5) * 100
```

Opsional: tambahkan **threat-intel multiplier** (mis. 1.0 - 1.3) jika exploit aktif terkonfirmasi.

```text
riskScore = min(100, riskScore * threatMultiplier)
```

### Severity Band
| Range | Severity |
|---|---|
| 0 - 24 | Informational |
| 25 - 44 | Low |
| 45 - 64 | Medium |
| 65 - 84 | High |
| 85 - 100 | Critical |

### Pseudo-code
```pseudo
function calculateRiskScore(finding, config):
    impact = clamp(finding.impact, 1, 5)
    likelihood = clamp(finding.likelihood, 1, 5)
    asset = clamp(finding.assetCriticality, 1, 5)
    exposure = clamp(finding.publicExposure, 1, 5)

    w = config.weights
    if (w.impact + w.likelihood + w.asset + w.exposure) != 1.0:
        raise ConfigError("weights must sum to 1.0")

    weighted = (impact * w.impact) +
               (likelihood * w.likelihood) +
               (asset * w.asset) +
               (exposure * w.exposure)

    score = (weighted / 5.0) * 100.0

    multiplier = getThreatMultiplier(finding.threatIntelState)  // default 1.0
    score = min(100, score * multiplier)

    severity = mapScoreToSeverity(score)

    return { score: round(score, 2), severity: severity }
```

---

## 2) Template Laporan Keamanan Dinamis

### Mode Template
1. **Executive Summary**
   - Fokus risiko bisnis, KPI, top findings, trend, rekomendasi prioritas.
2. **Technical Detail**
   - Fokus bukti teknis, PoC, langkah reproduksi, affected assets, remediation detail.
3. **Compliance Mapping**
   - Fokus pemetaan kontrol (ISO 27001, NIST CSF, PCI DSS, dsb), gap, evidence status.

### Struktur Data Template
Gunakan template berbasis JSON agar mudah di-versioning.

```json
{
  "templateId": "exec-v1",
  "mode": "executive",
  "version": "1.0.0",
  "sections": [
    {
      "id": "summary",
      "title": "Ringkasan Eksekutif",
      "type": "markdown",
      "dataSource": "report.summary",
      "visibleWhen": "context.audience == 'leadership'"
    },
    {
      "id": "kpi",
      "title": "Security KPI",
      "type": "chart",
      "dataSource": "metrics.kpi",
      "options": { "chartType": "bar" }
    }
  ],
  "styles": {
    "theme": "light",
    "logoUrl": "org/logo.png",
    "primaryColor": "#1f3a8a"
  },
  "output": ["html", "pdf"]
}
```

### Alur Rendering HTML/PDF
1. **Load Context Data** (findings, metrics, compliance mappings).
2. **Resolve Template** berdasarkan mode + versi.
3. **Evaluate Visibility Rules** (`visibleWhen`).
4. **Bind DataSource** per section.
5. **Render HTML** via server-side template engine.
6. **Render PDF** dari HTML (headless browser/wkhtmltopdf).
7. **Store Artifact** ke object storage + checksum + metadata.

### Komponen Arsitektur
- `TemplateRegistry` (versioning, fallback template)
- `RenderEngine` (parser + rule evaluator)
- `DataProvider` (aggregasi data lintas modul)
- `ExportService` (HTML/PDF generation)
- `AuditLogger` (siapa generate apa, kapan, template versi berapa)

---

## 3) Integrasi Notifikasi Multi-Channel

### Channel yang Didukung
- Email
- Slack
- Microsoft Teams
- Telegram
- Custom Webhook

### Arsitektur
Gunakan pola **event-driven + queue**:
1. Modul deteksi membuat event `AlertCreated`.
2. `Notification Orchestrator` membaca preference/route.
3. Untuk tiap channel, buat job ke queue (`channel`, `payload`, `attempt`).
4. Worker channel mengeksekusi delivery via adapter.
5. Simpan status `delivered/failed/retry_scheduled`.

### Retry Mechanism
- Strategi: **exponential backoff + jitter**.
- Contoh: `retryDelay = baseDelay * (2^attempt) + randomJitter`.
- `maxAttempts` contoh:
  - Email: 5
  - Slack/Teams/Webhook: 6
  - Telegram: 4
- Retry hanya untuk error transient (timeout, 5xx, rate-limit).

### Rate Limiting
- Terapkan di level channel + tenant.
- Contoh policy:
  - Slack: 1 req/sec/webhook
  - Teams: 4 req/sec/tenant
  - Telegram: 30 msg/sec/bot (dengan per-chat cap)
- Saat limit tercapai, job dipindah ke delayed queue.

### Fallback Channel
Definisikan fallback chain per severity:

```text
critical: Slack -> Teams -> Email -> Webhook
high: Slack -> Email
medium: Email -> Webhook
```

Pseudo-logika:
```pseudo
for channel in routingChain:
  result = send(channel, payload)
  if result.success:
    markDelivered(channel)
    break
  if result.retryable:
    scheduleRetry(channel)
    return
  else:
    continue  // pindah ke fallback berikutnya
```

---

## 4) Attack Surface Inventory Dashboard

### Tujuan Dashboard
Memberikan visibilitas real-time terhadap aset:
- Domain
- Subdomain
- IP
- Port
- Service
- Sertifikat TLS

### Tampilan Utama
1. **Asset by Category** (card + tabel): jumlah domain/subdomain/IP/service.
2. **Exposure Status**:
   - Internal
   - Internet-exposed
   - Unknown ownership
   - High-risk exposed service
3. **Weekly Change Trend**:
   - New assets discovered
   - Assets removed
   - Exposure status changed
4. **Aging & Ownership**:
   - Aset tanpa owner
   - Sertifikat akan expired (<30 hari)

### Skema Data Inti
```text
assets(
  asset_id PK,
  asset_type ENUM(domain, subdomain, ip, service, certificate),
  identifier,
  owner_team,
  criticality,
  exposure_status,
  first_seen_at,
  last_seen_at,
  status
)

asset_relations(
  parent_asset_id,
  child_asset_id,
  relation_type ENUM(resolves_to, hosts, serves, cert_for)
)

asset_observations(
  observation_id PK,
  asset_id,
  source ENUM(scanner, dns, cloud_api, manual),
  observed_at,
  attributes_json,
  risk_score_snapshot
)

weekly_asset_snapshot(
  week_start,
  asset_type,
  total_count,
  exposed_count,
  new_count,
  removed_count
)
```

### Query/Metric Kunci
- Total exposed assets per kategori
- Delta mingguan (`current_week - previous_week`)
- Top 10 service exposed dengan risk score tertinggi

---

## 5) Workflow Validasi & SLA Remediasi

### Status Workflow
`Open -> In Progress -> Pending Validation -> Closed`

Transisi opsional:
- `Open -> Risk Accepted` (dengan approval)
- `Pending Validation -> Reopened` (validasi gagal)

### Definisi SLA (contoh)
| Severity | Target Fix |
|---|---|
| Critical | 7 hari |
| High | 14 hari |
| Medium | 30 hari |
| Low | 60 hari |

### Auto-escalation
- T-48 jam menuju deadline: notify owner + team lead.
- Melewati SLA: escalate ke manager + security governance.
- Melewati SLA > 2x window: escalate ke risk committee.

### Reminder Berkala
- Harian untuk critical/high yang masih `Open` atau `In Progress`.
- Mingguan untuk medium/low.
- Reminder berhenti saat status `Pending Validation` atau `Closed` (kecuali validasi overdue).

### Audit Trail
Setiap perubahan status harus menyimpan:
- `finding_id`
- `from_status`, `to_status`
- `changed_by`, `changed_at`
- `reason/comment`
- `evidence_link`
- `ticket_ref` (Jira/ServiceNow/Git commit)

Contoh event log:
```json
{
  "finding_id": "F-2026-1042",
  "from_status": "In Progress",
  "to_status": "Pending Validation",
  "changed_by": "u12345",
  "changed_at": "2026-02-10T09:21:00Z",
  "reason": "Patch deployed to production",
  "evidence_link": "https://artifacts.local/evidence/F-2026-1042",
  "ticket_ref": "JIRA-8842"
}
```

### Pseudo-code Scheduler SLA
```pseudo
function evaluateSLA(findings, now):
  for f in findings:
    if f.status in ["Closed", "Risk Accepted"]:
      continue

    dueDate = f.openedAt + slaWindowBySeverity(f.severity)
    remaining = dueDate - now

    if remaining <= 0:
      triggerEscalation(f, level="overdue")
    else if remaining <= 48h:
      triggerReminder(f, cadence="urgent")
    else:
      triggerReminder(f, cadence="normal")
```
