#!/usr/bin/env python3
"""
Script untuk generate 100 soal per modul untuk 20 modul web security.
Total: 2000 soal
"""

import json
import sys

# Data modules
modules_info = [
    {"id": 1, "title": "Dasar Web & HTTP", "level": "Dasar"},
    {"id": 2, "title": "Threat Modeling untuk Web", "level": "Dasar"},
    {"id": 3, "title": "OWASP Top 10 Overview", "level": "Dasar"},
    {"id": 4, "title": "Authentication Fundamentals", "level": "Dasar → Intermediate"},
    {"id": 5, "title": "Session Management", "level": "Dasar → Intermediate"},
    {"id": 6, "title": "Authorization & Access Control", "level": "Intermediate"},
    {"id": 7, "title": "Input Validation & Output Encoding", "level": "Intermediate"},
    {"id": 8, "title": "SQL Injection", "level": "Intermediate"},
    {"id": 9, "title": "NoSQL Injection", "level": "Intermediate → Advanced"},
    {"id": 10, "title": "Cross-Site Scripting (XSS)", "level": "Intermediate"},
    {"id": 11, "title": "Cross-Site Request Forgery (CSRF)", "level": "Intermediate"},
    {"id": 12, "title": "Clickjacking & UI Redressing", "level": "Intermediate"},
    {"id": 13, "title": "File Upload Security", "level": "Intermediate"},
    {"id": 14, "title": "Path Traversal & File Inclusion", "level": "Intermediate → Advanced"},
    {"id": 15, "title": "Command Injection & SSRF", "level": "Advanced"},
    {"id": 16, "title": "Deserialization & Template Injection", "level": "Advanced"},
    {"id": 17, "title": "Security Headers & Browser Defenses", "level": "Intermediate"},
    {"id": 18, "title": "API Security (REST/GraphQL)", "level": "Intermediate → Advanced"},
    {"id": 19, "title": "Logging, Monitoring, Incident Basics", "level": "Intermediate"},
    {"id": 20, "title": "Secure SDLC & Pentest Workflow", "level": "Advanced"},
]

def generate_question(module_id, q_num, difficulty, tags, question, options, answer, explanation):
    return {
        "id": module_id * 100 + q_num,
        "difficulty": difficulty,
        "tags": tags,
        "question": question,
        "options": options,
        "correctAnswerIndex": answer,
        "explanation": explanation
    }

# Module 1: Dasar Web & HTTP
def generate_module1_questions():
    questions = []
    
    # HTTP Methods (1-10)
    questions.extend([
        generate_question(1, 1, "easy", ["http", "methods"],
            "Metode HTTP yang digunakan untuk mengambil data dari server adalah...",
            ["POST", "GET", "DELETE", "PUT"], 1,
            "GET adalah metode HTTP standar untuk mengambil data dari server tanpa mengubah state."),
        
        generate_question(1, 2, "easy", ["http", "methods"],
            "Metode HTTP yang idempoten untuk mengupdate sebagian resource adalah...",
            ["POST", "PUT", "PATCH", "DELETE"], 2,
            "PATCH digunakan untuk update parsial dan bersifat idempoten jika implementasinya benar."),
        
        generate_question(1, 3, "easy", ["http", "methods"],
            "Metode HTTP yang TIDAK idempoten adalah...",
            ["GET", "PUT", "DELETE", "POST"], 3,
            "POST adalah satu-satunya metode HTTP dasar yang secara definisi tidak idempoten."),
        
        generate_question(1, 4, "easy", ["http", "methods"],
            "Metode HTTP yang digunakan untuk menghapus resource adalah...",
            ["GET", "POST", "DELETE", "OPTIONS"], 2,
            "DELETE digunakan untuk menghapus resource yang ditentukan di URL."),
        
        generate_question(1, 5, "easy", ["http", "methods"],
            "Metode HTTP yang mengembalikan metode yang didukung server adalah...",
            ["HEAD", "OPTIONS", "TRACE", "CONNECT"], 1,
            "OPTIONS digunakan untuk mendeskripsikan opsi komunikasi untuk target resource."),
        
        generate_question(1, 6, "medium", ["http", "methods"],
            "Manakah pasangan metode HTTP yang sama-sama idempoten?",
            ["GET dan POST", "PUT dan POST", "GET dan PUT", "POST dan PATCH"], 2,
            "GET, PUT, DELETE, dan HEAD adalah idempoten, sedangkan POST dan PATCH tidak selalu idempoten."),
        
        generate_question(1, 7, "medium", ["http", "methods"],
            "Mengapa menggunakan POST untuk data sensitif lebih baik daripada GET?",
            ["POST lebih cepat", "POST tidak menampilkan data di URL", "POST otomatis terenkripsi", "POST tidak memerlukan header"], 1,
            "POST mengirim data di body request, tidak di URL seperti GET, sehingga lebih aman untuk data sensitif."),
        
        generate_question(1, 8, "easy", ["http", "methods"],
            "Metode HTTP yang hanya mengembalikan header tanpa body adalah...",
            ["GET", "HEAD", "OPTIONS", "TRACE"], 1,
            "HEAD sama seperti GET tetapi hanya mengembalikan header response, tanpa body."),
        
        generate_question(1, 9, "medium", ["http", "methods"],
            "Metode HTTP yang sering disalahgunakan untuk open proxy attacks adalah...",
            ["GET", "POST", "CONNECT", "OPTIONS"], 2,
            "CONNECT digunakan untuk tunneling dan sering disalahgunakan untuk open proxy attacks."),
        
        generate_question(1, 10, "medium", ["http", "methods"],
            "Manakah yang BENAR tentang HTTP GET?",
            ["Dapat mengubah data di server", "Dapat memuat request body", "Dapat di-cache oleh browser", "Tidak idempoten"], 2,
            "GET requests dapat di-cache oleh browser karena tidak mengubah state server."),
    ])
    
    # HTTP Headers (11-20)
    questions.extend([
        generate_question(1, 11, "easy", ["http", "headers"],
            "Header yang mengidentifikasi klien/user agent adalah...",
            ["Host", "User-Agent", "Accept", "Content-Type"], 1,
            "User-Agent header mengidentifikasi browser atau klien yang melakukan request."),
        
        generate_question(1, 12, "easy", ["http", "headers"],
            "Header yang menentukan host/domain target adalah...",
            ["Host", "Origin", "Referer", "Authority"], 0,
            "Host header menentukan domain yang dituju dalam HTTP/1.1."),
        
        generate_question(1, 13, "easy", ["http", "headers"],
            "Header yang menentukan tipe konten request body adalah...",
            ["Accept", "Content-Type", "Content-Length", "Content-Encoding"], 1,
            "Content-Type menentukan MIME type dari body request."),
        
        generate_question(1, 14, "medium", ["http", "headers"],
            "Header Referer berisi...",
            ["URL asal request", "URL tujuan", "Kredensial user", "Browser version"], 0,
            "Referer header berisi URL dari mana request berasal (tanpa 'referrer' typo asli)."),
        
        generate_question(1, 15, "medium", ["http", "headers"],
            "Header untuk autentikasi dasar adalah...",
            ["Authorization: Basic", "Auth: Basic", "X-Auth: Basic", "Authenticate: Basic"], 0,
            "Authorization header dengan skema Basic digunakan untuk autentikasi HTTP."),
        
        generate_question(1, 16, "medium", ["http", "headers"],
            "Header Origin digunakan untuk...",
            ["Cache kontrol", "CORS security", "Autentikasi", "Kompresi"], 1,
            "Origin header penting untuk CORS (Cross-Origin Resource Sharing) security."),
        
        generate_question(1, 17, "easy", ["http", "headers"],
            "Header yang menentukan konten yang dapat diterima klien adalah...",
            ["Content-Type", "Accept", "Accept-Encoding", "Content-Encoding"], 1,
            "Accept header menentukan tipe MIME yang dapat diterima klien."),
        
        generate_question(1, 18, "medium", ["http", "headers"],
            "Header Cookie digunakan untuk...",
            ["Set cookie baru", "Kirim cookie ke server", "Hapus cookie", "Mengenkripsi cookie"], 1,
            "Cookie header mengirim cookie yang tersimpan di browser ke server."),
        
        generate_question(1, 19, "medium", ["http", "headers"],
            "Header untuk memodifikasi cookie adalah...",
            ["Cookie", "Set-Cookie", "X-Cookie", "Cookie-Set"], 1,
            "Set-Cookie header digunakan oleh server untuk mengirim cookie ke klien."),
        
        generate_question(1, 20, "hard", ["http", "headers"],
            "Header yang mengindikasikan kompresi yang didukung klien adalah...",
            ["Content-Encoding", "Accept-Encoding", "Transfer-Encoding", "Encode"], 1,
            "Accept-Encoding header menunjukkan algoritma kompresi yang didukung klien (gzip, br, deflate)."),
    ])
    
    # Status Codes (21-30)
    questions.extend([
        generate_question(1, 21, "easy", ["http", "status-codes"],
            "Status code 200 berarti...",
            ["Resource tidak ditemukan", "Request berhasil", "Error server", "Redirect"], 1,
            "200 OK berarti request berhasil diproses."),
        
        generate_question(1, 22, "easy", ["http", "status-codes"],
            "Status code 404 berarti...",
            ["Forbidden", "Server error", "Not Found", "Unauthorized"], 2,
            "404 Not Found berarti resource tidak ditemukan."),
        
        generate_question(1, 23, "easy", ["http", "status-codes"],
            "Status code 500 berarti...",
            "Client error", "Server error", "Redirect", "Success"], 1,
            "500 Internal Server Error berarti error di sisi server."),
        
        generate_question(1, 24, "easy", ["http", "status-codes"],
            "Status code 301 adalah...",
            ["Temporary redirect", "Permanent redirect", "Not modified", "Bad request"], 1,
            "301 Moved Permanently adalah permanent redirect."),
        
        generate_question(1, 25, "easy", ["http", "status-codes"],
            "Status code 403 berarti...",
            ["Unauthorized", "Forbidden", "Not Found", "Bad Request"], 1,
            "403 Forbidden berarti akses ditolak meskipun terautentikasi."),
        
        generate_question(1, 26, "medium", ["http", "status-codes"],
            "Perbedaan antara 301 dan 302 adalah...",
            ["301 client, 302 server", "301 permanent, 302 temporary", "301 error, 302 success", "301 GET, 302 POST"], 1,
            "301 permanent, 302 temporary redirect."),
        
        generate_question(1, 27, "medium", ["http", "status-codes"],
            "Status code 401 vs 403: perbedaannya adalah...",
            ["401 tidak ada auth, 403 auth tapi tidak boleh akses", "401 forbidden, 403 unauthorized", "401 server, 403 client", "401 permanent, 403 temporary"], 0,
            "401 = tidak ada atau invalid auth, 403 = auth valid tapi tidak punya izin."),
        
        generate_question(1, 28, "medium", ["http", "status-codes"],
            "Status code 204 No Content berarti...",
            ["Resource kosong", "Request berhasil tanpa body response", "Not Found", "Server error"], 1,
            "204 No Content berarti request berhasil tetapi tidak ada body response."),
        
        generate_question(1, 29, "medium", ["http", "status-codes"],
            "Status code untuk request tidak valid adalah...",
            ["400", "401", "403", "404"], 0,
            "400 Bad Request berarti request tidak valid atau malformed."),
        
        generate_question(1, 30, "hard", ["http", "status-codes"],
            "Manakah status code yang TIDAK valid?",
            ["418", "422", "499", "511"], 2,
            "499 bukan status code resmi (nginx extension), 418 I'm a teapot adalah valid April Fools joke, 422 Unprocessable Entity, 511 Network Authentication Required."),
    ])
    
    # Cookies (31-40)
    questions.extend([
        generate_question(1, 31, "easy", ["cookies"],
            "Cookie disimpan di...",
            ["Server", "Browser client", "Database", "CDN"], 1,
            "Cookie disimpan di browser klien."),
        
        generate_question(1, 32, "medium", ["cookies"],
            "Flag HttpOnly pada cookie mencegah...",
            ["Cookie dikirim via HTTPS saja", "Cookie diakses via JavaScript", "Cookie expired", "Cookie disimpan"], 1,
            "HttpOnly mencegah JavaScript mengakses cookie, membantu mencegah XSS theft."),
        
        generate_question(1, 33, "medium", ["cookies"],
            "Flag Secure pada cookie memastikan...",
            ["Cookie tidak bisa diakses JavaScript", "Cookie hanya dikirim via HTTPS", "Cookie tidak expired", "Cookie divalidasi"], 1,
            "Secure flag memastikan cookie hanya dikirim melalui HTTPS."),
        
        generate_question(1, 34, "medium", ["cookies"],
            "SameSite=Lax berarti...",
            ["Cookie dikirim semua request", "Cookie hanya dikirim same-site", "Cookie dikirim same-site dan top-level navigasi", "Cookie tidak pernah dikirim"], 2,
            "SameSite=Lax mengizinkan cookie untuk same-site dan navigasi top-level seperti link click."),
        
        generate_question(1, 35, "medium", ["cookies"],
            "SameSite=Strict berarti...",
            ["Cookie dikirim semua request", "Cookie hanya same-site", "Cookie hanya top-level navigasi", "Cookie tidak dikirim"], 1,
            "SameSite=Strict hanya mengizinkan cookie untuk same-site requests."),
        
        generate_question(1, 36, "easy", ["cookies"],
            "Attribute untuk menentukan kadaluarsa cookie adalah...",
            ["Expires atau Max-Age", "Timeout", "Duration", "Time-to-live"], 0,
            "Expires (date) atau Max-Age (seconds) menentukan cookie expiration."),
        
        generate_question(1, 37, "medium", ["cookies"],
            "Path attribute pada cookie menentukan...",
            ["Domain yang dapat menerima cookie", "URL path yang dapat menerima cookie", "Cookie expiration", "Cookie security"], 1,
            "Path attribute membatasi cookie ke URL path tertentu."),
        
        generate_question(1, 38, "medium", ["cookies"],
            "Domain=.example.com akan mencakup...",
            ["Hanya example.com", "example.com dan subdomain", "Subdomain saja", "Semua domain"], 1,
            "Leading dot (.) memungkinkan cookie untuk domain dan semua subdomain."),
        
        generate_question(1, 39, "hard", ["cookies"],
            "Cookie size limit standar adalah...",
            ["4KB", "1KB", "8KB", "Unlimited"], 0,
            "Standar cookie size limit adalah 4KB."),
        
        generate_question(1, 40, "hard", ["cookies"],
            "Secure flag dianggap tidak aman jika...",
            ["HTTP digunakan", "HTTPS digunakan", "Cookie kecil", "Browser modern"], 0,
            "Secure flag hanya efektif jika HTTPS digunakan, tidak membantu pada HTTP."),
    ])
    
    # Sessions (41-50)
    questions.extend([
        generate_question(1, 41, "medium", ["sessions"],
            "Session ID idealnya harus...",
            ["Predictable", "Random dan unik", "Pendek saja", "Bisa ditebak"], 1,
            "Session ID harus cryptographically random dan unik untuk mencegah session hijacking."),
        
        generate_question(1, 42, "medium", ["sessions"],
            "Session fixation attack menargetkan...",
            ["Password", "Session ID sebelum login", "Session setelah login", "Cookie attributes"], 1,
            "Session fixation memaksa victim menggunakan session ID yang sudah diketahui attacker."),
        
        generate_question(1, 43, "medium", ["sessions"],
            "Mencegah session fixation dapat dilakukan dengan...",
            ["Menghapus cookie", "Mengganti session ID setelah login", "Menambah HttpOnly", "Hanya HTTPS"], 1,
            "Rotasi session ID setelah login mencegah session fixation."),
        
        generate_question(1, 44, "easy", ["sessions"],
            "Session data biasanya disimpan di...",
            ["Browser", "Server", "CDN", "DNS"], 1,
            "Session data disimpan di server, hanya ID yang disimpan di browser cookie."),
        
        generate_question(1, 45, "medium", ["sessions"],
            "Session timeout yang direkomendasikan untuk aplikasi sensitif adalah...",
            ["1-2 jam", "15-30 menit", "24 jam", "1 minggu"], 1,
            "15-30 menit timeout untuk aplikasi sensitif mengurangi risiko session hijacking."),
        
        generate_question(1, 46, "medium", ["sessions"],
            "Session hijacking dapat terjadi melalui...",
            ["XSS, network sniffing, physical access", "Hanya XSS", "Hanya network", "Hanya physical"], 0,
            "Session hijacking dapat melalui XSS theft, network sniffing, atau akses fisik."),
        
        generate_question(1, 47, "hard", ["sessions"],
            "Session storage yang paling aman untuk aplikasi distributed adalah...",
            ["In-memory", "Database", "Redis cluster dengan encryption", "File system"], 2,
            "Redis cluster dengan encryption menyediakan performance dan security untuk distributed systems."),
        
        generate_question(1, 48, "medium", ["sessions"],
            "Session regeneration harus dilakukan...",
            ["Saat login saja", "Saat logout saja", "Saat login dan privilege change", "Tidak perlu"], 2,
            "Regenerate session saat login dan privilege change mencegah fixation dan privilege escalation."),
        
        generate_question(1, 49, "medium", ["sessions"],
            "Concurrent sessions management penting untuk...",
            ["Performance", "Prevent account sharing dan session abuse", "UX", "Database optimization"], 1,
            "Concurrent sessions limits mencegah account sharing dan abuse."),
        
        generate_question(1, 50, "hard", ["sessions"],
            "Session fixation vulnerability paling efektif dieksploitasi jika...",
            ["Session ID tidak dirotasi setelah login", "HttpOnly tidak diset", "Cookie kecil", "Timeout panjang"], 0,
            "Kunci session fixation adalah ketidak-rotasian session ID setelah login."),
    ])
    
    # Caching (51-60)
    questions.extend([
        generate_question(1, 51, "easy", ["caching"],
            "Cache-Control: no-store berarti...",
            ["Cache selamanya", "Jangan cache", "Cache dengan revalidation", "Hanya cache di browser"], 1,
            "no-store berarti jangan simpan di cache sama sekali."),
        
        generate_question(1, 52, "medium", ["caching"],
            "Cache-Control: no-cache vs no-store perbedaannya adalah...",
            ["Sama saja", "no-cache boleh cache dengan revalidasi, no-store tidak boleh cache", "no-cache tidak boleh cache, no-store boleh cache", "no-cache untuk HTTPS, no-store untuk HTTP"], 1,
            "no-cache mengizinkan cache dengan revalidasi, no-store tidak mengizinkan caching."),
        
        generate_question(1, 53, "medium", ["caching"],
            "Header untuk conditional request berdasarkan modifikasi terakhir adalah...",
            ["ETag", "Last-Modified", "If-Modified-Since", "Cache-Control"], 2,
            "If-Modified-Since digunakan dengan Last-Modified untuk conditional request."),
        
        generate_question(1, 54, "medium", ["caching"],
            "ETag adalah...",
            ["Timestamp", "Fingerprint unik konten", "Cache duration", "Filename hash"], 1,
            "ETag adalah fingerprint unik konten untuk cache validation."),
        
        generate_question(1, 55, "medium", ["caching"],
            "Cache poisoning attack menargetkan...",
            ["Database", "Response cache untuk mengontrol konten", "Browser cache", "CDN cache"], 1,
            "Cache poisoning memanipulasi cache untuk menyajikan konten berbahaya."),
        
        generate_question(1, 56, "easy", ["caching"],
            "Cache-Control: max-age=3600 berarti...",
            ["Cache selamanya", "Cache 1 jam", "Cache 1 menit", "Cache 1 hari"], 1,
            "max-age dalam detik, jadi 3600 = 1 jam."),
        
        generate_question(1, 57, "medium", ["caching"],
            "Pragma: no-cache adalah...",
            ["HTTP/2 header", "HTTP/1.0 legacy header", "Cache-Control synonym", "Tidak valid"], 1,
            "Pragma: no-cache adalah legacy HTTP/1.0 header untuk backward compatibility."),
        
        generate_question(1, 58, "hard", ["caching"],
            "Manakah yang memicu revalidation cache?",
            ["Cache-Control: public", "Cache-Control: must-revalidate", "Cache-Control: max-age", "ETag"], 1,
            "must-revalidate memaksa revalidation sebelum menggunakan cached content."),
        
        generate_question(1, 59, "medium", ["caching"],
            "Cache-Control: private berarti...",
            ["Hanya browser yang boleh cache", "Hanya proxy yang boleh cache", "Tidak boleh cache", "Semua boleh cache"], 0,
            "private hanya mengizinkan caching di klien (browser), bukan shared cache seperti proxy."),
        
        generate_question(1, 60, "hard", ["caching"],
            "Vary header menentukan...",
            ["Cache duration", "Kunci cache berbasiskan header tertentu", "Cache location", "Invalidation method"], 1,
            "Vary menentukan request header yang menjadi kunci cache key."),
    ])
    
    # Traffic Inspection (61-70)
    questions.extend([
        generate_question(1, 61, "easy", ["traffic-inspection"],
            "DevTools network tab menampilkan...",
            ["Hanya request", "Hanya response", "Request dan response HTTP", "Hanya status code"], 2,
            "Network tab menampilkan request dan response HTTP lengkap."),
        
        generate_question(1, 62, "medium", ["traffic-inspection"],
            "Tool untuk intercepting HTTP traffic adalah...",
            ["Wireshark", "Burp Suite", "Nmap", "SQLMap"], 1,
            "Burp Suite adalah HTTP proxy untuk intercepting traffic."),
        
        generate_question(1, 63, "easy", ["traffic-inspection"],
            "Wireshark menangkap...",
            ["Hanya HTTP", "Semua network traffic", "Hanya TCP", "Hanya browser traffic"], 1,
            "Wireshark menangkap semua network traffic di interface."),
        
        generate_question(1, 64, "medium", ["traffic-inspection"],
            "HTTPS traffic dapat diinspeksi dengan...",
            ["TLS passthrough saja", "Man-in-the-middle dengan trusted certificate", "Tidak bisa diinspeksi", "Hanya dengan private key server"], 1,
            "HTTPS dapat diinspeksi dengan MITM proxy menggunakan certificate yang trusted oleh browser."),
        
        generate_question(1, 65, "medium", ["traffic-inspection"],
            "mitmproxy adalah...",
            ["Browser extension", "HTTP proxy tool", "Network scanner", "Database tool"], 1,
            "mitmproxy adalah HTTP/HTTPS proxy untuk traffic interception."),
        
        generate_question(1, 66, "medium", ["traffic-inspection"],
            "Tamper Data adalah...",
            ["Browser extension", "Standalone tool", "Server software", "Mobile app"], 0,
            "Tamper Data adalah browser extension untuk modifying HTTP requests."),
        
        generate_question(1, 67, "medium", ["traffic-inspection"],
            "Request header dapat dimodifikasi sebelum dikirim dengan...",
            ["DevTools", "Proxy tools seperti Burp", "Browser extension", "Semua di atas"], 3,
            "Semua metode tersebut dapat memodifikasi request header."),
        
        generate_question(1, 68, "easy", ["traffic-inspection"],
            "DevTools shortcut untuk membuka network tab di Chrome adalah...",
            ["Ctrl+N", "F12", "Ctrl+Shift+I", "Ctrl+Shift+N"], 2,
            "Ctrl+Shift+I membuka DevTools, lalu tab Network dapat diakses."),
        
        generate_question(1, 69, "hard", ["traffic-inspection"],
            "HAR (HTTP Archive) format berisi...",
            ["Hanya status code", "Complete HTTP request/response data dalam JSON", "Hanya header", "Hanya URL"], 1,
            "HAR adalah format JSON untuk menyimpan complete HTTP traffic data."),
        
        generate_question(1, 70, "medium", ["traffic-inspection"],
            "Fitur Repeater di Burp Suite digunakan untuk...",
            ["Automated scanning", "Manual request modification dan resend", "Passive scanning", "Intruder attacks"], 1,
            "Repeater memungkinkan manual modification dan resend request."),
    ])
    
    # Security Headers (71-80)
    questions.extend([
        generate_question(1, 71, "easy", ["security-headers"],
            "X-Frame-Options: DENY berarti...",
            ["Izinkan framing dari same origin", "Izinkan framing dari semua domain", "Tolak semua framing", "Tolak framing dari cross-origin"], 2,
            "DENY benar-benar mencegah page diframing di iframe."),
        
        generate_question(1, 72, "medium", ["security-headers"],
            "X-Content-Type-Options: nosniff mencegah...",
            ["XSS", "MIME sniffing browser", "CSRF", "Clickjacking"], 1,
            "nosniff mencegah browser melakukan MIME sniffing yang berbahaya."),
        
        generate_question(1, 73, "medium", ["security-headers"],
            "Strict-Transport-Security (HSTS) header memaksa...",
            ["HTTP only", "HTTPS only", "HTTP dan HTTPS", "Hanya FTP"], 1,
            "HSTS memaksa browser hanya menggunakan HTTPS."),
        
        generate_question(1, 74, "medium", ["security-headers"],
            "X-XSS-Protection header...",
            ["Solusi lengkap XSS", "Browser XSS filter legacy", "Server-side XSS protection", "Tidak relevan"], 1,
            "X-XSS-Protection adalah legacy browser filter feature, bukan solusi lengkap."),
        
        generate_question(1, 75, "medium", ["security-headers"],
            "Referrer-Policy: no-referrer berarti...",
            ["Kirim full referrer", "Kirim origin saja", "Jangan kirim referrer", "Kirim referrer only HTTPS"], 2,
            "no-referrer berarti jangan mengirim referrer information."),
        
        generate_question(1, 76, "hard", ["security-headers"],
            "Content-Security-Policy (CSP) default-src 'none' berarti...",
            ["Izinkan semua", "Izinkan same-origin", "Tolak semua resource", "Izinkan inline scripts"], 2,
            "default-src 'none' adalah policy yang paling ketat, menolak semua resource."),
        
        generate_question(1, 77, "medium", ["security-headers"],
            "HSTS max-age yang direkomendasikan adalah...",
            ["1 jam", "1 hari", "6 bulan ke atas", "Tidak ada max-age"], 2,
            "6 bulan ke atas untuk HSTS max-age (31536000 detik = 1 tahun)."),
        
        generate_question(1, 78, "medium", ["security-headers"],
            "Feature-Policy vs Permissions-Policy...",
            ["Sama saja", "Feature-Policy nama baru Permissions-Policy", "Permissions-Policy pengganti Feature-Policy", "Tidak ada hubungan"], 2,
            "Permissions-Policy adalah pengganti Feature-Policy."),
        
        generate_question(1, 79, "easy", ["security-headers"],
            "Security headers harus diset di...",
            ["HTML meta tags saja", "HTTP response headers", "JavaScript saja", "CSS saja"], 1,
            "Security headers harus diset sebagai HTTP response headers."),
        
        generate_question(1, 80, "hard", ["security-headers"],
            "CSP report-uri digunakan untuk...",
            ["Enforce policy", "Menerima violation reports", "Block inline scripts", "Whitelist domains"], 1,
            "report-uri (atau report-to) menerima reports ketika CSP violation terjadi."),
    ])
    
    # HTTP Versions (81-90)
    questions.extend([
        generate_question(1, 81, "easy", ["http-versions"],
            "HTTP/2 dibandingkan HTTP/1.1...",
            ["Lebih lambat", "Multiplexing requests", "Hanya teks", "Tidak mendukung HTTPS"], 1,
            "HTTP/2 mendukung multiplexing - multiple requests dalam satu connection."),
        
        generate_question(1, 82, "medium", ["http-versions"],
            "HTTP/3 menggunakan transport protocol...",
            ["TCP", "UDP (QUIC)", "SCTP", "TLS"], 1,
            "HTTP/3 menggunakan QUIC over UDP."),
        
        generate_question(1, 83, "medium", ["http-versions"],
            "HTTP/2 binary framing...",
            ["Sama seperti text-based HTTP/1.1", "Lebih efisien parsing", "Hanya untuk HTTPS", "Tidak mendukung header compression"], 1,
            "Binary framing lebih efisien dan memungkinkan header compression (HPACK)."),
        
        generate_question(1, 84, "easy", ["http-versions"],
            "HTTP/1.1 connection dapat...",
            ["Hanya 1 request per connection", "Multiple requests dengan keep-alive", "Hanya HTTPS", "Tidak ada keep-alive"], 1,
            "HTTP/1.1 mendukung persistent connection dengan keep-alive."),
        
        generate_question(1, 85, "medium", ["http-versions"],
            "HPACK di HTTP/2 adalah...",
            ["Compression algorithm", "Header compression", "Body compression", "Encryption"], 1,
            "HPACK adalah header compression scheme untuk HTTP/2."),
        
        generate_question(1, 86, "hard", ["http-versions"],
            "HTTP/2 server push...",
            ["Push data ke client tanpa request", "Client pushes data ke server", "Push notification", "Force HTTPS"], 0,
            "Server push mengirim resource ke client sebelum diminta (sekarang deprecated di HTTP/2)."),
        
        generate_question(1, 87, "medium", ["http-versions"],
            "QUIC protocol...",
            ["TCP-based", "UDP-based dengan TLS built-in", "HTTP/3 specific", "TLS-only"], 1,
            "QUIC adalah UDP-based protocol dengan TLS 1.3 built-in."),
        
        generate_question(1, 88, "medium", ["http-versions"],
            "HTTP/0.9 adalah...",
            ["Versi pertama, hanya GET", "Versi modern", "Tidak pernah ada", "Versi mobile"], 0,
            "HTTP/0.9 adalah versi pertama yang sangat sederhana, hanya mendukung GET."),
        
        generate_question(1, 89, "hard", ["http-versions"],
            "HEAD request vs GET request perbedaannya...",
            ["HEAD mengembalikan body, GET tidak", "HEAD hanya header, GET header+body", "HEAD hanya untuk POST", "Tidak ada perbedaan"], 1,
            "HEAD mengembalikan hanya header response, tanpa body."),
        
        generate_question(1, 90, "medium", ["http-versions"],
            "HTTP/2 prioritization...",
            ["Prioritas request tertentu", "FIFO processing", "Random order", "Semua sama"], 0,
            "HTTP/2 memungkinkan client menentukan prioritas request."),
    ])
    
    # Combined Scenarios (91-100)
    questions.extend([
        generate_question(1, 91, "hard", ["http", "security"],
            "Full request terlihat seperti: GET /admin HTTP/1.1 Host: example.com Cookie: session=abc123. Apa yang SALAH jika /admin harus protected?",
            ["Metode GET", "Cookie di header", "Tidak ada Authorization header", "HTTP/1.1"], 2,
            "Untuk protected resource, seharusnya ada Authorization header atau valid session check."),
        
        generate_question(1, 92, "medium", ["http", "cookies"],
            "Set-Cookie: sessionid=xyz; Path=/; HttpOnly; Secure; SameSite=Strict. Manakah attribute yang SALAH?",
            ["Tidak ada yang salah", "Path harus spesifik", "Secure harus dengan domain", "SameSite harus Lax"], 0,
            "Semua attribute di atas adalah secure configuration."),
        
        generate_question(1, 93, "medium", ["http", "security-headers"],
            "Apa yang terjadi jika browser menerima HSTS dengan max-age=0?",
            ["HSTS diaktifkan selamanya", "HSTS dinonaktifkan", "Browser error", "Tidak berpengaruh"], 1,
            "HSTS max-age=0 menghapus HSTS policy dari browser."),
        
        generate_question(1, 94, "hard", ["http", "caching"],
            "Cache-Control: no-cache, no-store, must-revalidate. Apa arti kombinasi ini?",
            ["Conflict dan tidak valid", "Strict no-caching policy", "Only no-cache", "Only no-store"], 1,
            "Kombinasi ini adalah strict no-caching policy yang komprehensif."),
        
        generate_question(1, 95, "medium", ["http", "methods"],
            "API endpoint untuk delete sebaiknya menggunakan...",
            ["POST", "GET", "DELETE", "PUT"], 2,
            "DELETE adalah metode semantik yang benar untuk resource deletion."),
        
        generate_question(1, 96, "medium", ["http", "sessions"],
            "Session cookie tanpa HttpOnly flag vulnerable terhadap...",
            ["CSRF", "XSS theft", "Session fixation", "Brute force"], 1,
            "Tanpa HttpOnly, XSS dapat membaca dan mencuri cookie session."),
        
        generate_question(1, 97, "hard", ["http", "security"],
            "HTTPS downgrade attack dapat dicegah dengan...",
            ["Cookie Secure flag", "HSTS", "HttpOnly flag", "SameSite flag"], 1,
            "HSTS mencegah browser dari accepting HTTP connection yang tidak aman."),
        
        generate_question(1, 98, "medium", ["http", "traffic"],
            "Untuk melihat HTTP headers secara raw di DevTools...",
            ["Network tab, klik request, Headers", "Console tab", "Elements tab", "Sources tab"], 0,
            "Network tab menampilkan complete request/response headers."),
        
        generate_question(1, 99, "medium", ["http", "methods"],
            "Manakah yang BUKAN prinsip REST?",
            ["Stateless", "Cacheable", "Uniform interface", "Server-side session storage"], 3,
            "REST tidak mensyaratkan server-side session, stateless adalah prinsip utama."),
        
        generate_question(1, 100, "hard", ["http", "security"],
            "Request smuggling attack mengeksploitasi...",
            ["SQL injection", "Ambiguous parsing antara frontend dan backend server", "XSS", "CSRF"], 1,
            "HTTP request smuggling mengeksploitasi perbedaan HTTP parsing antara servers.")
    ])
    
    return questions

# Generate module 1 questions
module1_questions = generate_module1_questions()

# Print statistics
print(f"Module 1 generated: {len(module1_questions)} questions")
print(f"Question IDs: {module1_questions[0]['id']} to {module1_questions[-1]['id']}")

# Save to JSON for review
with open('/home/engine/project/module1_questions_preview.json', 'w') as f:
    json.dump(module1_questions, f, indent=2)

print("\nPreview saved to module1_questions_preview.json")
print("First question:", json.dumps(module1_questions[0], indent=2))
