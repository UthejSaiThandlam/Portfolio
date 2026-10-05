# Thandlam Uthej Sai - Personal Engineering & Product Portfolio

A minimalist, high-signal personal portfolio built for **Thandlam Uthej Sai** using **React (Vite)**, **Tailwind CSS**, and **React Router**.

> **Core Positioning:**  
> *"Full-stack engineer building AI-powered products. Learning product and business analysis."*  
> B.Tech CS (AI & ML) 2026 · CGPA 8.23 · Shipped live multi-tenant SaaS for 130+ users at Z.APPS.

---

## 🎯 Architecture & Design Highlights

1. **One Identity, Three Honest Layers**:
   - **Core (Proven)**: Shipped Python full stack, Django REST, React, multi-tenancy, HRMS with 130+ users.
   - **Applied (Growing)**: RAG planner, ChromaDB embeddings, clinical ensemble classifier, SQL telemetry.
   - **Direction (Learning)**: Product management, business analysis, PRDs, user stories.

2. **Dynamic "View as" Toggle**:
   - Switchable between **Engineer**, **Product**, and **Analyst** perspectives.
   - Reorders page sections and swaps focus subtitles seamlessly using identical underlying data with `localStorage` persistence.

3. **Strictly Verified Production Metrics (No Buzzword Clutter)**:
   - `130+` Live Users (Z.APPS HRMS/ERP SaaS in active use)
   - `5` Tenancy Layers (Row-level tenant isolation & ACL)
   - `O(n)` Org Chart Builder (Single-pass linear tree traversal)
   - `6 mo` Production Internship

4. **Product & Business Thinking Artifacts**:
   - One-page **HRMS Leave Approval PRD** (downloadable text specification).
   - Sprint-ready **User Stories & Acceptance Criteria**.
   - Transactional **Process Flow State Machine** (double-entry leave ledger).
   - Operational **KPI Mock Dashboard** with labeled sample data.

5. **Deep-Dive Case Study Template (`/projects/:slug`)**:
   - 1. Problem & Context
   - 2. Users & Goals
   - 3. Key Decisions & Trade-Offs (PM/Architecture signals)
   - 4. Architecture Blueprint
   - 5. Challenges & Solutions (N+1 query elimination & race conditions)
   - 6. Results (Measured telemetry)
   - 7. Lessons Learned

---

## 🎨 Design System Specs

| Token | Value | Description |
| :--- | :--- | :--- |
| **Page Background** | `#0B1020` | Deep space navy |
| **Surface / Cards** | `#121A2F` | Subdued card background |
| **Border** | `#1F2A44` | 1px clean separation |
| **Primary Text** | `#E8ECF5` | Headings & high-contrast body |
| **Secondary Text**| `#9AA6BF` | Descriptions & metadata |
| **Accent Blue** | `#4F8CFF` | Primary action buttons & links |
| **Accent Teal** | `#2DD4BF` | Success metrics & verified tags |
| **Typography** | `Inter` + `JetBrains Mono` | Humanist body + Monospace tags |

---

## 📁 Project Structure

```text
e:/porfolio/
├── index.html                  # SEO, meta tags, Google Fonts (Inter + JetBrains Mono)
├── tailwind.config.js          # Design spec palette and font families
├── postcss.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # Routing, layout, and global modals
│   ├── index.css               # Clean minimal card surfaces & spec-tags
│   ├── context/
│   │   └── RoleContext.jsx     # View-as state provider with localStorage
│   ├── data/
│   │   └── portfolioData.js    # Centralized single source of truth
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky 64px navbar with View-as toggle
│   │   ├── Hero.jsx            # Above-the-fold name, headline, 4 buttons, 3 layers
│   │   ├── ImpactStrip.jsx     # 4 clean numbers in 40-48px mono
│   │   ├── ProjectsSection.jsx # 3 featured projects + collapsible more
│   │   ├── ExperienceSection.jsx # Z.APPS timeline (Built, Designed, Fixed, Documented)
│   │   ├── ProductWorkSection.jsx # PRD, User Stories, Process Flow, KPI mock
│   │   ├── SkillsSection.jsx   # Grouped pill tags (Proven vs Learning)
│   │   ├── HowIWork.jsx        # 7-stage mental model
│   │   ├── EducationSection.jsx# Factual degree & certs
│   │   ├── ContactSection.jsx  # Form + role-specific resume download
│   │   ├── ResumeModal.jsx     # Printable/exportable resume preview
│   │   ├── Footer.jsx          # Minimal coordinates & copyright
│   │   └── Icons.jsx           # SVG icons (Github, Linkedin)
│   └── pages/
│       ├── HomePage.jsx        # Dynamic ordered sections per active lens
│       └── CaseStudyPage.jsx   # Structured 8-section architecture deep-dive
```

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production bundle
npm run preview
```

---

## 🌐 Deployment to Vercel

### Method 1: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Method 2: Via GitHub Integration
1. Push this repository to GitHub: `https://github.com/UthejSaiThandlam/portfolio`
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

*(A `vercel.json` rewrite configuration is included to ensure clean SPA routing on direct link reloads).*
