# SecGuided LMS (Student Portal) — Implementation Specification

**Brand line:** **“SecGuided — Learn Security, Reverse Engineering & Defensive Research”**

## 1) Information Architecture (IA)

### Top Navigation (Primary)
- Forums
- What’s New
- Downloads
- Tutorials
- Bank Soal
- Guides
- Security Blueprints
- Anticheat
- Info
- Search

### Student Dashboard Structure & Learning Flow
**Goal:** Provide quick access to ongoing learning, new content, and progress.

**Dashboard Sections (top → bottom)**
1. **Hero / Welcome**
   - Heading: **“SecGuided — Learn Security, Reverse Engineering & Defensive Research”**
   - Subheading: “Your security learning hub. Continue where you left off or start a new track.”
   - Primary CTA: **“Continue Learning”**
   - Secondary CTA: **“Browse Tracks”**
2. **Continue Learning**
   - Resume last module
   - Progress bar
   - CTA: **“Resume Module”**
3. **My Tracks (cards grid)**
   - Track cards with title, short description, progress, CTA **“Open Track”**
4. **What’s New**
   - Recent announcements/modules
   - CTA: **“View What’s New”**
5. **Quick Actions**
   - **“Start MCQ Practice”**
   - **“Take a Quiz”**
   - **“Download Materials”**
   - **“Go to Forums”**

**Learning Flow**
1. Login
2. Choose learning track
3. Open material
4. Read modules
5. MCQ practice
6. Quiz
7. Results
8. Progress tracking

## 2) User Roles & Permissions

### Student
- View tracks, materials, modules, topics
- Run MCQ practice
- Take quizzes and view results
- Track progress
- Access downloads/tutorial links
- Forum entry points
- Search content

### Instructor/Admin
- All Student permissions
- Create/update tracks, modules, topics, and questions
- Publish What’s New items
- Manage downloads/tutorials
- View analytics & progress reporting
- Moderate forums
- Manage users and role assignments

## 3) Primary User Flows (Step-by-step)

### Login → Track → Material → Modules → MCQ → Quiz → Results → Progress
1. User logs in
2. User selects a learning track from dashboard or track selection
3. Track detail opens and lists modules
4. User opens module detail
5. User reads topics/modules
6. User starts MCQ practice for the module
7. User completes MCQ set
8. User starts module quiz
9. User submits quiz and sees results
10. Progress updates on dashboard and progress page

## 4) Core Features

### MVP
- Learning tracks
- Modules and topics
- MCQ practice
- Quizzes
- Progress tracking
- Downloads and tutorial links
- Forum entry points
- Global search

### V2 (Future Features)
- Leaderboard (optional)
- Recommendations by interest
- Certificates/badges
- Advanced learning analytics
- Instructor events/live sessions

## 5) Text Wireframes / Layout per Page (No Images)

### A) Student Dashboard (matching example)
```
[Top Nav: Forums | What’s New | Downloads | Tutorials | Bank Soal | Guides | Security Blueprints | Anticheat | Info | Search]

[Hero]
H1: SecGuided — Learn Security, Reverse Engineering & Defensive Research
Sub: Your security learning hub. Continue where you left off or start a new track.
[Primary CTA: Continue Learning] [Secondary CTA: Browse Tracks]

[Continue Learning Card]
Track: Cyber Website
Module: Module 2 — Input Validation
Progress: 45%
[CTA: Resume Module]

[My Tracks]
- Card: Cyber Website (progress + CTA: Open Track)
- Card: Cyber Android
- Card: Cyber WiFi
- Card: Incident Response

[What’s New]
- Item list (date + summary)
[CTA: View What’s New]

[Quick Actions]
[Start MCQ Practice] [Take a Quiz] [Download Materials] [Go to Forums]
```

### B) Track Selection
```
[Breadcrumbs: Dashboard > Tracks]
H1: Choose Your Learning Track
Sub: Start a focused security path designed for practical mastery.

[Filters] [Search Tracks]

[Track Cards Grid]
- Cyber Website [CTA: Open Track]
- Cyber Android [CTA: Open Track]
- Cyber WiFi [CTA: Open Track]
- Incident Response [CTA: Open Track]
```

### C) Material Detail (Modules + Topics Covered)
```
[Breadcrumbs: Dashboard > Tracks > Cyber Website]
H1: Cyber Website
Sub: Master web security foundations and practical testing.

[Modules List]
Module 1: OWASP Top 10
Module 2: Input Validation
Module 3: Session Security
Module 4: Bug Bounty Workflow

[Topics Covered]
- OWASP Top 10
- Input validation
- Session security
- Bug bounty workflow

[CTA: Start Module] [CTA: Start MCQ Practice]
```

### D) MCQ Practice Page
```
[Breadcrumbs: Track > Module > MCQ Practice]
H1: MCQ Practice
Sub: Practice questions to reinforce understanding.

[Question Card]
- Question text
- Choices (radio buttons)
[CTA: Submit Answer] [CTA: Next Question]

[Progress Bar: Question 1/10]
```

### E) Quiz Page + Results Page
**Quiz Page**
```
[Breadcrumbs: Track > Module > Quiz]
H1: Module Quiz
Sub: Evaluate your mastery before continuing.

[Question Cards + Timer]
[CTA: Submit Quiz]
```

**Results Page**
```
H1: Quiz Results
Score: 7/10
Correct: 70%
[CTA: Review Answers] [CTA: Back to Module] [CTA: Next Module]
```

### F) What’s New / Downloads / Tutorials (Listing Pages)
```
[Page Title]
- What’s New
- Downloads
- Tutorials

[List Items]
- Title
- Short description
- Tags
- Date
[CTA: View / Download / Open Tutorial]
```

### Key UI Components
- Cards (tracks, modules, updates)
- Sidebar (optional in content pages)
- Breadcrumbs
- Primary CTA buttons
- Filters + search
- Progress bars
- Tag chips

## 6) Data Model & Database Schema (High-level)

### Tables / Collections

**Users**
- id (PK)
- email
- passwordHash
- role (student | instructor | admin)
- name
- createdAt

**Tracks**
- id (PK)
- title
- description
- createdAt
- published

**Courses/Materials**
- id (PK)
- trackId (FK)
- title
- description
- createdAt

**Modules**
- id (PK)
- courseId (FK)
- title
- orderIndex

**Topics**
- id (PK)
- moduleId (FK)
- title
- content

**Questions**
- id (PK)
- moduleId (FK)
- type (mcq | quiz)
- prompt

**Choices**
- id (PK)
- questionId (FK)
- text
- isCorrect (nullable | boolean)

**Attempts**
- id (PK)
- userId (FK)
- questionId (FK)
- selectedChoiceId (FK)
- isCorrect
- attemptType (mcq | quiz)
- createdAt

**Progress**
- id (PK)
- userId (FK)
- trackId (FK)
- moduleId (FK)
- completionPercent
- lastAccessedAt

### Relationships
- Track 1—N Courses/Materials
- Course 1—N Modules
- Module 1—N Topics
- Module 1—N Questions
- Question 1—N Choices
- User 1—N Attempts
- User 1—N Progress

## 7) Minimal REST API Endpoints

### Auth
- `POST /auth/login`
- `POST /auth/register`
- `GET /auth/me`

### Tracks & Materials
- `GET /tracks`
- `GET /tracks/:id`
- `GET /tracks/:id/modules`

### Modules & Questions
- `GET /modules/:id`
- `GET /modules/:id/questions?type=mcq`
- `GET /modules/:id/questions?type=quiz`

### Attempts & Progress
- `POST /attempts` (submit MCQ/quiz answer)
- `GET /progress`
- `GET /progress/:trackId`

### Optional (V2)
- `GET /leaderboard`

## 8) Example Content (Transformed from Input)

### Tracks (4)
1. **Cyber Website**
2. **Cyber Android**
3. **Cyber WiFi**
4. **Incident Response**

### Cyber Website — Modules 1–4
- Module 1: OWASP Top 10
- Module 2: Input Validation
- Module 3: Session Security
- Module 4: Bug Bounty Workflow

**Topics Covered**
- OWASP Top 10
- Input validation
- Session security
- Bug bounty workflow

## 9) MCQ Data (Structured Format)

Based on the first 4 questions in `deliverables/question-bank.json`.

```json
[
  {
    "id": 1,
    "track": "Cyber Website",
    "module": "OWASP Top 10",
    "prompt": "What is the safest first response to an urgent email asking for credentials?",
    "choices": [
      "Reply immediately to avoid account lock",
      "Click the link and verify later",
      "Verify request through a trusted channel before acting",
      "Forward to friends for advice"
    ],
    "correctAnswer": "Verify request through a trusted channel before acting"
  },
  {
    "id": 2,
    "track": "Cyber Website",
    "module": "Input Validation",
    "prompt": "Why does multi-factor authentication improve account security?",
    "choices": [
      "It replaces the need for passwords",
      "It adds a second proof of identity",
      "It hides your username from attackers",
      "It blocks all malware automatically"
    ],
    "correctAnswer": "It adds a second proof of identity"
  },
  {
    "id": 3,
    "track": "Cyber Website",
    "module": "Session Security",
    "prompt": "What is the main security benefit of timely software updates?",
    "choices": [
      "They change app icons",
      "They patch known vulnerabilities",
      "They guarantee faster internet",
      "They remove all ads"
    ],
    "correctAnswer": "They patch known vulnerabilities"
  },
  {
    "id": 4,
    "track": "Cyber Website",
    "module": "Bug Bounty Workflow",
    "prompt": "Why is password reuse risky?",
    "choices": [
      "It is easier to remember",
      "One breach can expose multiple accounts",
      "It improves encryption",
      "It disables MFA"
    ],
    "correctAnswer": "One breach can expose multiple accounts"
  }
]
```

## 10) UI Copywriting (Headings, Subheadings, CTAs)

**Global Heading**
- **“SecGuided — Learn Security, Reverse Engineering & Defensive Research”**

**Dashboard**
- Subheading: “Your security learning hub. Continue where you left off or start a new track.”
- CTAs: **“Continue Learning”**, **“Browse Tracks”**, **“Resume Module”**

**Track Selection**
- H1: “Choose Your Learning Track”
- Subheading: “Start a focused security path designed for practical mastery.”
- CTA: **“Open Track”**

**Material Detail**
- H1: “Cyber Website”
- Subheading: “Master web security foundations and practical testing.”
- CTAs: **“Start Module”**, **“Start MCQ Practice”**

**MCQ Practice**
- H1: “MCQ Practice”
- Subheading: “Practice questions to reinforce understanding.”
- CTAs: **“Submit Answer”**, **“Next Question”**

**Quiz Results**
- H1: “Quiz Results”
- CTAs: **“Review Answers”**, **“Back to Module”**, **“Next Module”**
