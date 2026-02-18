# Web Security Complete Curriculum

## Overview

Kurikulum lengkap 20 modul web security dari dasar hingga advanced telah ditambahkan ke dalam sistem. Kurikulum ini dirancang untuk memberikan pemahaman komprehensif tentang web application security dengan fokus pada praktik hands-on dan real-world scenarios.

## Curriculum Structure

### Metadata
- **ID**: `web-security-complete`
- **Level**: Dasar → Advanced
- **Duration**: 20–24 minggu
- **Total Modules**: 20
- **Assessment**: 30% teori, 50% praktik, 20% project

### Prerequisites
1. Dasar pemrograman web (HTML, CSS, JavaScript)
2. Pemahaman basic tentang HTTP/HTTPS
3. Familiar dengan command line (terminal/bash)
4. Linux basics untuk lab environment

### Learning Outcomes
1. Memahami fundamental HTTP dan bagaimana request/response bekerja
2. Mampu melakukan threat modeling untuk aplikasi web
3. Mengenali dan mitigasi seluruh OWASP Top 10 vulnerabilities
4. Implementasi authentication dan session management yang aman
5. Menguasai teknik injection (SQLi, NoSQLi, Command) dan cara pencegahannya
6. Memahami dan mencegah XSS, CSRF, dan client-side attacks
7. Implementasi security headers dan browser defenses
8. Mengamankan API REST dan GraphQL
9. Memahami logging, monitoring, dan incident response dasar
10. Integrasi security practices dalam SDLC

## Module Breakdown

### Level Dasar (Modules 1-3)
1. **Dasar Web & HTTP**
   - HTTP methods, headers, status codes
   - Cookies, sessions, caching
   - Traffic inspection dengan DevTools/proxy

2. **Threat Modeling untuk Web**
   - STRIDE methodology
   - Asset identification
   - Risk assessment

3. **OWASP Top 10 Overview**
   - Overview semua 10 kategori
   - Mapping fitur ke risiko OWASP
   - Remediation strategies dasar

### Level Dasar → Intermediate (Modules 4-6)
4. **Authentication Fundamentals**
   - Password policy dan hashing
   - MFA implementation
   - Brute force mitigation

5. **Session Management**
   - Cookie security flags
   - Session fixation prevention
   - Session hijacking mitigation

6. **Authorization & Access Control**
   - RBAC vs ABAC
   - IDOR prevention
   - Permission matrix

### Level Intermediate (Modules 7-17)
7. **Input Validation & Output Encoding**
   - Whitelist vs blacklist
   - Context-sensitive encoding
   - Canonicalization

8. **SQL Injection**
   - Union, error-based, blind SQLi
   - Prepared statements
   - ORM pitfalls

9. **NoSQL Injection**
   - Operator-based injection
   - JSON parsing abuse
   - NoSQL-specific security

10. **Cross-Site Scripting (XSS)**
    - Stored, reflected, DOM XSS
    - CSP implementation
    - XSS in modern frameworks

11. **Cross-Site Request Forgery (CSRF)**
    - SameSite vs CSRF token
    - Double-submit cookie
    - CSRF in SPA

12. **Clickjacking & UI Redressing**
    - Clickjacking techniques
    - X-Frame-Options
    - CSP frame-ancestors

13. **File Upload Security**
    - MIME validation
    - Polyglot files
    - Secure storage

14. **Path Traversal & File Inclusion**
    - LFI/RFI
    - Directory traversal
    - Safe file handling

15. **Command Injection & SSRF**
    - OS command injection
    - SSRF to internal services
    - Allowlist egress

16. **Deserialization & Template Injection**
    - Unsafe deserialization
    - SSTI
    - Gadget chains

17. **Security Headers & Browser Defenses**
    - HSTS, CSP, X-Content-Type-Options
    - Referrer-Policy
    - Permissions-Policy

### Level Intermediate → Advanced (Modules 18-20)
18. **API Security (REST/GraphQL)**
    - AuthZ di API
    - BOLA
    - GraphQL introspection abuse

19. **Logging, Monitoring, Incident Basics**
    - What to log
    - PII masking
    - Incident response

20. **Secure SDLC & Pentest Workflow**
    - SAST/DAST
    - Dependency scanning
    - CI/CD gates

## Implementation Details

### Files Modified
1. **`src/pages/Dashboard.jsx`**
   - Added new learning material: `web-security-complete`
   - 20 modules listed in materials array
   - 20 quiz questions covering all modules
   - Set as default selected material

2. **`src/data/webSecurityCurriculum.js`** (NEW)
   - Complete curriculum data structure
   - Detailed information for each module:
     - Topics
     - Learning objectives
     - Practice exercises
     - Recommended tools
   - Recommended tools categorized
   - Assessment structure
   - Capstone project suggestions

### Quiz Coverage
Each module has at least one quiz question covering key concepts:
- Module 1: HTTP headers and request/response
- Module 2: STRIDE methodology
- Module 3: OWASP Top 10 categories
- Module 4: MFA purpose
- Module 5: HttpOnly cookie flag
- Module 6: IDOR definition
- Module 7: Whitelisting vs blacklisting
- Module 8: Prepared statements for SQLi prevention
- Module 9: NoSQL injection differences
- Module 10: Stored XSS
- Module 11: XSS vs CSRF differences
- Module 12: X-Frame-Options
- Module 13: File upload risks
- Module 14: Local File Inclusion
- Module 15: Command injection vs SSRF
- Module 16: Template injection
- Module 17: Content Security Policy
- Module 18: BOLA
- Module 19: PII in logging
- Module 20: Secure SDLC

## Recommended Tools

### Web Testing
- Burp Suite
- OWASP ZAP
- Postman
- Insomnia

### Vulnerability Scanning
- Nuclei
- Nikto
- SQLMap
- XSStrike

### Code Analysis
- SonarQube
- Snyk
- Semgrep
- CodeQL

### Lab Environments
- OWASP WebGoat
- DVWA
- bWAPP
- Juice Shop
- PortSwigger Labs

### Network Analysis
- Wireshark
- tcpdump
- mitmproxy

## Capstone Projects

1. **Full Security Assessment** (2 minggu)
   - Security assessment lengkap pada aplikasi web target
   - Report mendetail dengan findings dan recommendations

2. **Secure Implementation** (2 minggu)
   - Implementasi security controls pada aplikasi vulnerable
   - Best practices implementation

3. **Security Pipeline** (1 minggu)
   - Setup CI/CD pipeline dengan automated security checks
   - Untuk aplikasi demo

## Assessment Structure

- **Teori (30%)**: Quiz modul dan exam konseptual
- **Praktik (50%)**: Lab praktik, capture the flag, dan real-world scenarios
- **Project (20%)**: Final project: security assessment dan remediation

## Next Steps

Untuk mengembangkan kurikulum ini lebih lanjut:

1. **Lab Environment Setup**
   - Setup vulnerable application untuk practice
   - Docker-compose untuk easy deployment
   - Documentasi step-by-step untuk tiap lab

2. **Video Content**
   - Tutorial video untuk setiap module
   - Demo exploit techniques
   - Walkthrough remediation strategies

3. **Interactive Content**
   - Interactive challenges untuk setiap topic
   - Gamified learning dengan points dan badges
   - Progress tracking

4. **Advanced Topics**
   - Cloud security (AWS, GCP, Azure)
   - Container security (Docker, Kubernetes)
   - Serverless security
   - Web3/Blockchain security

5. **Integration**
   - Link ke external resources (OWASP, PortSwigger, dll)
   - Integration dengan CTF platforms
   - Community challenges dan competitions

## References

- OWASP Top 10: https://owasp.org/www-project-top-ten/
- OWASP Testing Guide: https://owasp.org/www-project-web-security-testing-guide/
- OWASP Cheat Sheet Series: https://cheatsheetseries.owasp.org/
- PortSwigger Web Security Academy: https://portswigger.net/web-security
- Web Security Academy: https://www.websecurityacademy.com/

---

**Last Updated**: 2026-02-18
**Version**: 1.0
