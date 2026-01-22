# Security Improvement & Best Practices untuk SecGuided

## 🔒 **Authentication Security Enhancements**

### **1. Multi-Factor Authentication (MFA)**
- **Implementasi**:
  - Time-based One-Time Passwords (TOTP)
  - SMS-based verification
  - Email verification codes
  - Hardware security keys (FIDO2/WebAuthn)
  - Biometric authentication

**Rekomendasi Tools**:
- **Authy** - Multi-device TOTP
- **Google Authenticator** - TOTP implementation
- **Microsoft Authenticator** - Push notifications
- **YubiKey** - Hardware security keys

**Implementation Example**:
```javascript
// TOTP Implementation with speakeasy
const speakeasy = require('speakeasy');

const generateSecret = () => {
  return speakeasy.generateSecret({
    name: 'SecGuided',
    issuer: 'SecGuided Platform',
    length: 32,
  });
};

const verifyTOTP = (token, secret) => {
  return speakeasy.totp.verify({
    secret,
    encoding: 'base32',
    token,
    window: 2, // Allow 2 steps of clock drift
  });
};
```

### **2. Password Security**
- **Password Policy**:
  - Minimum 12 characters
  - Must include: uppercase, lowercase, numbers, special characters
  - No common passwords or dictionary words
  - No personal information
  - Password history check (last 10 passwords)

**Implementation**:
```javascript
const passwordPolicy = {
  minLength: 12,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true,
  forbidCommonPasswords: true,
  forbidPersonalInfo: true,
};

const validatePassword = (password, userInfo) => {
  const errors = [];
  
  // Length check
  if (password.length < passwordPolicy.minLength) {
    errors.push(`Password must be at least ${passwordPolicy.minLength} characters`);
  }
  
  // Character requirements
  if (passwordPolicy.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  // Common password check
  if (passwordPolicy.forbidCommonPasswords) {
    const commonPasswords = ['password', '123456', 'qwerty', 'admin'];
    if (commonPasswords.includes(password.toLowerCase())) {
      errors.push('Password is too common');
    }
  }
  
  // Personal info check
  if (passwordPolicy.forbidPersonalInfo && userInfo) {
    const personalInfo = [
      userInfo.firstName,
      userInfo.lastName,
      userInfo.email.split('@')[0],
      userInfo.username
    ].filter(Boolean);
    
    for (const info of personalInfo) {
      if (info && password.toLowerCase().includes(info.toLowerCase())) {
        errors.push('Password cannot contain personal information');
        break;
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    strength: calculatePasswordStrength(password)
  };
};
```

### **3. Session Management**
- **Secure Session Configuration**:
  - Secure HTTP-only cookies
  - Session timeout (30 minutes)
  - Concurrent session limits
  - Session fixation protection
  - Proper session invalidation

**Implementation**:
```javascript
// Session configuration
const sessionConfig = {
  name: 'secguided_session',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 30 * 60 * 1000, // 30 minutes
    sameSite: 'strict',
  },
  rolling: true, // Reset maxAge on each request
  proxy: true, // Trust proxy for secure cookies
};

// Session middleware
app.use(session(sessionConfig));

// Check concurrent sessions
const MAX_CONCURRENT_SESSIONS = 3;

const checkConcurrentSessions = (req, res, next) => {
  if (req.session.userId) {
    const userSessions = getUserSessions(req.session.userId);
    if (userSessions.length >= MAX_CONCURRENT_SESSIONS) {
      // Terminate oldest session
      terminateOldestSession(req.session.userId);
    }
  }
  next();
};
```

---

## 🛡️ **Input Validation & Sanitization**

### **1. SQL Injection Prevention**
```javascript
// Use parameterized queries (PostgreSQL example)
const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await db.query(query, [email]);
  return result.rows[0];
};

// Validation with Joi
const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const validateInput = (data) => {
  const { error, value } = loginSchema.validate(data);
  if (error) {
    throw new ValidationError('Invalid input data', error.details);
  }
  return value;
};
```

### **2. XSS Prevention**
```javascript
// HTML sanitization with DOMPurify
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

// Sanitize user input
const sanitizeInput = (input) => {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href'],
  });
};

// Content Security Policy
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    scriptSrc: ["'self'"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'"],
    fontSrc: ["'self'"],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    frameSrc: ["'none'"],
  },
}));
```

### **3. File Upload Security**
```javascript
// File upload validation and sanitization
const multer = require('multer');
const sharp = require('sharp');
const crypto = require('crypto');

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Generate random filename
    const filename = crypto.randomBytes(16).toString('hex');
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, filename + ext);
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  // Allow only images
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'));
  }
};

// File size limits
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 5, // Maximum 5 files
  },
});

// Image processing for security
const processImage = async (req, res, next) => {
  if (!req.file) return next();
  
  try {
    // Process and sanitize image
    await sharp(req.file.path)
      .resize(1920, 1080, { fit: 'inside' })
      .jpeg({ quality: 85 })
      .toFile(req.file.path);
    
    next();
  } catch (error) {
    // Delete corrupted file
    fs.unlinkSync(req.file.path);
    next(error);
  }
};
```

---

## 🔐 **API Security**

### **1. Rate Limiting**
```javascript
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');

// Basic rate limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: 'Too many authentication attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
});

// Stricter rate limiting for login
const strictAuthLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  skipSuccessfulRequests: true,
  keyGenerator: (req) => {
    return req.ip + (req.body.email || '');
  },
});

// API rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, // 100 requests per 15 minutes
  message: 'API rate limit exceeded',
});

app.use('/api/', apiLimiter);
app.use('/api/auth/login', strictAuthLimiter);
app.use('/api/auth/register', authLimiter);
```

### **2. JWT Security**
```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// JWT configuration
const jwtConfig = {
  secret: process.env.JWT_SECRET,
  algorithm: 'HS256',
  expiresIn: '15m',
  issuer: 'secguided.com',
  audience: 'secguided-api',
};

// Generate secure JWT
const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { 
      userId: user.id,
      role: user.role,
      sessionId: crypto.randomUUID()
    },
    jwtConfig.secret,
    {
      algorithm: jwtConfig.algorithm,
      expiresIn: jwtConfig.expiresIn,
      issuer: jwtConfig.issuer,
      audience: jwtConfig.audience,
    }
  );
  
  const refreshToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  
  return { accessToken, refreshToken };
};

// Token verification middleware
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  try {
    const decoded = jwt.verify(token, jwtConfig.secret, {
      algorithms: [jwtConfig.algorithm],
      issuer: jwtConfig.issuer,
      audience: jwtConfig.audience,
    });
    
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};
```

### **3. Request Validation Middleware**
```javascript
// Comprehensive request validation
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    
    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message,
      }));
      
      return res.status(400).json({
        error: 'Validation failed',
        details: errors,
      });
    }
    
    req.body = value;
    next();
  };
};

// Example schemas
const schemas = {
  register: Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(12).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]')).required(),
    role: Joi.string().valid('student', 'professional', 'educator', 'researcher').default('student'),
  }),
  
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};
```

---

## 🏗️ **Database Security**

### **1. Database Configuration**
```sql
-- PostgreSQL security configuration
-- Connection security
ALTER SYSTEM SET ssl = on;
ALTER SYSTEM SET ssl_cert_file = 'server.crt';
ALTER SYSTEM SET ssl_key_file = 'server.key';

-- Authentication
ALTER SYSTEM SET password_encryption = 'scram-sha-256';

-- Row Level Security (RLS)
CREATE POLICY user_isolation ON users
  FOR ALL TO application_user
  USING (id = current_setting('app.current_user_id')::uuid);

-- Audit logging
ALTER SYSTEM SET log_statement = 'all';
ALTER SYSTEM SET log_connections = on;
ALTER SYSTEM SET log_disconnections = on;

-- Resource limits
ALTER SYSTEM SET max_connections = 100;
ALTER SYSTEM SET shared_buffers = '256MB';
ALTER SYSTEM SET work_mem = '4MB';
```

### **2. Data Encryption**
```javascript
// Encrypt sensitive data at rest
const crypto = require('crypto');

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // 32 bytes
const IV_LENGTH = 16; // For AES, this is always 16

const encrypt = (text) => {
 .randomBytes(IV_LENGTH);
  const const iv = crypto cipher = crypto.createCipher('aes-256-cbc', ENCRYPTION_KEY);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return iv.toString('hex') + ':' + encrypted;
};

const decrypt = (text) => {
  const parts = text.split(':');
  const iv = Buffer.from(parts.shift(), 'hex');
  const encryptedText = parts.join(':');
  
  const decipher = crypto.createDecipher('aes-256-cbc', ENCRYPTION_KEY);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
};
```

---

## 🚨 **Monitoring & Logging**

### **1. Security Logging**
```javascript
// Security event logging
const winston = require('winston');

const securityLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'secguided-security' },
  transports: [
    new winston.transports.File({ filename: 'logs/security.log' }),
    new winston.transports.File({ filename: 'logs/security-error.log', level: 'error' }),
  ],
});

// Log security events
const logSecurityEvent = (eventType, details) => {
  securityLogger.info({
    eventType,
    timestamp: new Date().toISOString(),
    ...details,
  });
};

// Login attempt logging
const logLoginAttempt = (email, success, ip, userAgent) => {
  logSecurityEvent('LOGIN_ATTEMPT', {
    email: success ? email : '***',
    success,
    ip,
    userAgent,
  });
};

// Failed login detection
const detectFailedLogins = async (email, ip) => {
  const recentFailures = await getRecentFailedLogins(email, ip, 15); // Last 15 minutes
  
  if (recentFailures >= 5) {
    // Lock account or implement additional measures
    await lockAccount(email, 30); // Lock for 30 minutes
    logSecurityEvent('ACCOUNT_LOCKED', { email, ip, reason: 'too_many_failures' });
  }
};
```

### **2. Real-time Monitoring**
```javascript
// Security monitoring dashboard
const getSecurityMetrics = () => {
  return {
    loginAttempts: {
      total: getLoginAttemptsCount(),
      successful: getSuccessfulLoginsCount(),
      failed: getFailedLoginsCount(),
    },
    activeSessions: getActiveSessionsCount(),
    blockedIPs: getBlockedIPsCount(),
    vulnerabilities: getKnownVulnerabilities(),
  };
};

// Anomaly detection
const detectAnomalies = async () => {
  const anomalies = [];
  
  // Unusual login patterns
  const loginPattern = await analyzeLoginPatterns();
  if (loginPattern.isAnomalous) {
    anomalies.push({
      type: 'login_pattern_anomaly',
      severity: 'high',
      details: loginPattern,
    });
  }
  
  // Volume anomalies
  const volumeAnomaly = await detectVolumeAnomalies();
  if (volumeAnomaly.detected) {
    anomalies.push({
      type: 'volume_anomaly',
      severity: 'medium',
      details: volumeAnomaly,
    });
  }
  
  return anomalies;
};
```

---

## 🔧 **Infrastructure Security**

### **1. Environment Configuration**
```bash
# .env file with security best practices
NODE_ENV=production
JWT_SECRET=your-super-secure-jwt-secret-here-256-bits
JWT_REFRESH_SECRET=your-refresh-token-secret-here
ENCRYPTION_KEY=your-32-byte-encryption-key-here
SESSION_SECRET=your-session-secret-here

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/secguided
DB_SSL=true

# Redis for sessions
REDIS_URL=redis://localhost:6379

# Email service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Cloud storage
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_S3_BUCKET=secguided-files

# Monitoring
SENTRY_DSN=https://your-sentry-dsn
```

### **2. Docker Security**
```dockerfile
# Secure Dockerfile
FROM node:18-alpine

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Install security updates
RUN apk update && apk upgrade

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy application
COPY --chown=nextjs:nodejs . .

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["npm", "start"]
```

### **3. Security Headers Configuration**
```javascript
// Helmet.js security headers
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'", "https://api.secguided.com"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
  frameguard: { action: 'deny' },
  xssFilter: true,
  noSniff: true,
  referrerPolicy: { policy: "strict-origin-when-cross-origin" },
}));

// Custom security middleware
app.use((req, res, next) => {
  // Remove server information
  res.removeHeader('X-Powered-By');
  
  // Add security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  next();
});
```

---

## 🧪 **Security Testing**

### **1. Automated Security Testing**
```javascript
// Security testing with jest and supertest
const request = require('supertest');
const app = require('../app');

describe('Security Tests', () => {
  test('should reject SQL injection attempts', async () => {
    const maliciousPayload = {
      email: "admin'; DROP TABLE users; --",
      password: "password"
    };
    
    const response = await request(app)
      .post('/api/auth/login')
      .send(maliciousPayload)
      .expect(400);
      
    expect(response.body.error).toContain('Invalid input');
  });
  
  test('should prevent XSS in user input', async () => {
    const xssPayload = {
      firstName: '<script>alert("xss")</script>',
      lastName: 'Doe',
      email: 'test@example.com',
      password: 'SecurePass123!'
    };
    
    const response = await request(app)
      .post('/api/auth/register')
      .send(xssPayload)
      .expect(400);
      
    expect(response.body.details).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          field: 'firstName',
          message: expect.stringContaining('fails to match')
        })
      ])
    );
  });
  
  test('should enforce rate limiting', async () => {
    const attempts = [];
    
    // Make 10 rapid requests
    for (let i = 0; i < 10; i++) {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'nonexistent@example.com',
          password: 'wrongpassword'
        });
      attempts.push(response.status);
    }
    
    // Last requests should be rate limited
    expect(attempts.slice(-3)).toEqual([429, 429, 429]);
  });
});
```

### **2. Penetration Testing Checklist**
```markdown
## Security Testing Checklist

### Authentication
- [ ] SQL injection in login form
- [ ] Brute force attack prevention
- [ ] Session fixation protection
- [ ] Password reset functionality
- [ ] Multi-factor authentication
- [ ] Account lockout mechanism

### Authorization
- [ ] Role-based access control
- [ ] Direct object reference vulnerabilities
- [ ] Privilege escalation testing
- [ ] API endpoint authorization

### Input Validation
- [ ] XSS prevention
- [ ] SQL injection protection
- [ ] File upload security
- [ ] Command injection prevention
- [ ] LDAP injection protection

### Session Management
- [ ] Secure session tokens
- [ ] Session timeout
- [ ] Concurrent session handling
- [ ] Session fixation protection

### Error Handling
- [ ] Information disclosure
- [ ] Stack trace exposure
- [ ] Verbose error messages
- [ ] Custom error pages

### Cryptography
- [ ] Data encryption at rest
- [ ] Secure data transmission
- [ ] Proper key management
- [ ] Random number generation

### Configuration
- [ ] Security headers
- [ ] Server information disclosure
- [ ] Default configurations
- [ ] Unnecessary services
```

---

## 📋 **Compliance & Standards**

### **1. GDPR Compliance**
- User consent management
- Right to be forgotten
- Data portability
- Breach notification procedures
- Privacy by design implementation

### **2. OWASP Top 10**
- A01: Broken Access Control
- A02: Cryptographic Failures
- A03: Injection
- A04: Insecure Design
- A05: Security Misconfiguration
- A06: Vulnerable Components
- A07: Authentication Failures
- A08: Software Integrity Failures
- A09: Security Logging Failures
- A10: Server-Side Request Forgery

### **3. Security Standards**
- ISO 27001 Information Security Management
- NIST Cybersecurity Framework
- CIS Controls Implementation
- PCI DSS (if handling payments)

---

*Dokumen ini menyediakan panduan lengkap untuk implementasi keamanan di SecGuided. Pastikan untuk regularly review dan update security measures sesuai dengan emerging threats dan best practices.*