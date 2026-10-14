export const personalInfo = {
  name: "Thandlam Uthej Sai",
  title: "Backend & AI/ML Engineer",
  eyebrow: "Django REST · Applied AI/LLMs · Multi-Tenant SaaS",
  heroHeadline: "Backend and AI/ML engineer building systems and shipping them live.",
  heroSubhead: "Delivered multi-tenant HRMS/ERP SaaS for 130+ users, live hybrid RAG planner, and 98% accuracy stacked ML ensembles.",
  phone: "+91 9966939345",
  email: "uthejsaithandlam@gmail.com",
  location: "Bengaluru, Karnataka",
  avatar: "/profile-suit.jpg",
  photos: {
    suit: "/profile-suit.jpg",
    portraitRed: "/uthej-red-shirt.jpg",
    outdoorsWhite: "/uthej-white-shirt.jpg",
    sunsetBeach: "/uthej-beach-sunset.png",
    streetHoodie: "/uthej-black-hoodie.jpg"
  },
  status: "B.Tech CSE (AI & ML) 2026 (CGPA 8.23) · Open to Full-Time & SDE/AI Roles",
  summary: "Backend and AI/ML engineer, B.Tech CSE (AI & ML) graduate (2026, CGPA 8.23), who builds Django REST backends and LLM-powered systems and ships them live. Delivered a multi-tenant HRMS/ERP SaaS used by 130+ employees (JWT, RBAC, query optimization, 80% fewer redundant calls) and a live RAG application with hybrid retrieval (TF-IDF + BM25) and multi-provider LLM fallback (Gemini, Groq). Built a stacked ensemble reaching 98% accuracy.",
  social: {
    github: "https://github.com/UthejSaiThandlam",
    linkedin: "https://www.linkedin.com/in/thandlam-uthejsai-05752928b/",
    email: "uthejsaithandlam@gmail.com",
    phone: "+91 9966939345"
  },
  resumeLinks: {
    engineer: "/resume-engineer.pdf",
    product: "/resume-product.pdf",
    analyst: "/resume-analyst.pdf"
  }
};

export const impactNumbers = [
  { 
    value: "130+", 
    label: "ACTIVE SAAS USERS", 
    detail: "Shipped tenant isolation, leave ledger, and role APIs on production HRMS at Z.APPS.",
    linkTarget: "#projects",
    linkLabel: "View HRMS Project ↗"
  },
  { 
    value: "80%", 
    label: "FEWER REDUNDANT CALLS", 
    detail: "Measured query reduction via bulk role-map refactoring; cut response time by ~1s.",
    linkTarget: "#architecture",
    linkLabel: "Inspect Query Tuning ↗"
  },
  { 
    value: "98%", 
    label: "ENSEMBLE ML ACCURACY", 
    detail: "Evaluated dual-stacked classifier (RandomForest + GradientBoost + Meta-Learner).",
    linkTarget: "#projects",
    linkLabel: "View ML Ensemble ↗"
  }
];

export const experienceData = {
  company: "Z.APPS",
  role: "Python Full Stack Intern",
  period: "Feb 2026 – Aug 2026",
  location: "Sricity, India",
  summary: "Shipped features on a live, production multi-tenant HRMS/ERP SaaS used by 130+ employees, across Django REST backend, MySQL, and React layers.",
  groups: [
    {
      title: "Built",
      bullets: [
        { action: "Leave Management Microservice:", text: "Built end-to-end with an immutable-ledger balance pattern for traceable balances and automated email notifications." },
        { action: "Five-Layer Multi-Tenancy:", text: "Architected TenantScopedModel, TenantManager, JWT-based tenant resolution, HRRouter multi-DB routing, and CompanyMiddleware with audit tooling to enforce tenant data isolation." },
        { action: "AI Groq Chatbot:", text: "Built an AI chatbot using Groq LLM with RBAC-scoped, audit-logged query access; implemented dual authentication paths (JWT for HR/admin, employee-ID based for staff)." },
        { action: "AI Theme Engine:", text: "Developed an AI-powered theme engine that extracts color palettes and style cues from uploaded images and applies them across the portal for per-tenant UI customization." }
      ]
    },
    {
      title: "Fixed & Optimized",
      bullets: [
        { action: "N+1 Bottleneck Resolution:", text: "Resolved a critical N+1 query bottleneck via a bulk role-map refactor, reducing redundant calls by 80% and cutting response time by about 1 second." },
        { action: "Race Condition Safeguards:", text: "Implemented transactional row-level database locks to eliminate concurrent leave booking state collisions." }
      ]
    },
    {
      title: "Documented & Shipped",
      bullets: [
        { action: "API & Architecture Documentation:", text: "Authored comprehensive API and architecture documentation to support maintainability and cross-team knowledge transfer." },
        { action: "Full-Stack Integration:", text: "Connected Django REST Framework endpoints with React.js interfaces, providing real-time data flow and responsive state updates." }
      ]
    }
  ]
};

export const featuredProjects = [
  {
    id: "ai-study-planner-rag",
    slug: "ai-study-planner-rag",
    tag: "Applied AI & RAG",
    accentColor: "purple",
    category: "AI & LLMOps",
    title: "AI Planner using RAG",
    subtitle: "AI-Powered Adaptive Learning & RAG Platform",
    outcome: "Live end-to-end RAG system with 70/30 hybrid retrieval and multi-provider LLM fallback.",
    description: "Full-stack AI-powered adaptive learning platform and RAG pipeline that transforms unstructured educational documents (PDF, DOCX, TXT, MD) into daily schedules, vector-search indexes, and cited answers.",
    bullets: [
      "Built and deployed live an end-to-end RAG pipeline: document ingestion (PDF, DOCX, TXT, MD), sliding-window chunking (500 chars, 100 overlap), TF-IDF vector index, and cited answers (top-5 chunks with source document and page).",
      "Implemented hybrid retrieval fusing 70% semantic similarity and 30% BM25 keyword scores, with switchable semantic, keyword and hybrid modes.",
      "Designed multi-provider LLM fallback (Gemini 2.5 Flash-Lite → Gemini 2.5 Flash, Groq Llama 3.3 70B) and REST endpoints for upload, chat, plan generation and vector search."
    ],
    technologies: ["Python", "Google Gemini", "Groq Llama 3.3 70B", "TF-IDF", "BM25", "FastAPI", "React.js"],
    keyStats: ["Live on Render", "Hybrid 70/30", "Multi-Provider Fallback", "Top-5 Cited Answers"],
    links: {
      github: "https://github.com/UthejSaiThandlam",
      live: "https://rag-ai-planner-1.onrender.com/",
      hasCaseStudy: true
    },
    caseStudy: {
      problem: "Learners struggle to convert massive syllabi into balanced daily routines with spaced repetition.",
      users: [
        "Undergraduate students managing multi-subject exams.",
        "Engineers preparing for competitive coding rounds."
      ],
      decisions: [
        "Hybrid retrieval fusing 70% semantic similarity with 30% BM25 keyword scoring for high precision.",
        "Multi-provider LLM fallback ensuring high availability across Gemini and Groq."
      ],
      architecture: [
        "Ingestion: Multi-format parsing (PDF, DOCX, TXT, MD) -> Sliding window chunking (500 chars, 100 overlap)",
        "Storage: TF-IDF vector index with keyword inverted index",
        "Orchestration: FastAPI REST API with streaming chat responses"
      ],
      challenges: [
        {
          problem: "LLM hallucinations and provider rate limits during peak usage.",
          solution: "Implemented automated fallback chain from Gemini 2.5 Flash-Lite to Gemini 2.5 Flash and Groq Llama 3.3 70B."
        }
      ],
      results: [
        "Live deployed on Render with fast response latency",
        "Top-5 cited document references verified per response"
      ],
      lessons: [
        "Pairing dense semantic embeddings with BM25 keyword matching yields substantially higher recall for technical documents."
      ]
    }
  },
  {
    id: "enterprise-hrms-erp",
    slug: "enterprise-hrms-erp",
    tag: "Shipped Production",
    accentColor: "emerald",
    category: "Full Stack & SaaS",
    title: "Enterprise Multi-Tenant HRMS/ERP SaaS",
    subtitle: "Production Multi-Tenant SaaS & Leave Ledger",
    outcome: "Used in production by 130+ employees across Django REST backend and React.",
    description: "Production multi-tenant SaaS with 5-layer data isolation, immutable double-entry leave ledger, Groq LLM chatbot, and automated per-tenant AI theme engine.",
    bullets: [
      "Shipped features on a live, production multi-tenant HRMS/ERP SaaS used by 130+ employees across Django REST backend, MySQL and React layers.",
      "Architected a five-layer multi-tenancy system (TenantScopedModel, TenantManager, JWT resolution, HRRouter multi-DB, CompanyMiddleware) with audit tooling.",
      "Resolved critical N+1 query bottleneck via bulk role-map refactor, reducing redundant calls by 80% and cutting response time by about 1 second.",
      "Built leave microservice with immutable double-entry ledger & Groq AI chatbot with RBAC-scoped queries."
    ],
    technologies: ["Python", "Django", "Django REST", "React.js", "MySQL", "Groq LLM", "JWT"],
    keyStats: ["130+ Employees", "5-Layer Tenancy", "80% Fewer Redundant Calls", "Immutable Ledger"],
    links: {
      github: "https://github.com/UthejSaiThandlam",
      live: null,
      hasCaseStudy: true
    },
    caseStudy: {
      problem: "Organizations needed a unified internal SaaS platform to manage corporate employees across client orgs, replacing error-prone spreadsheets that caused leave disputes.",
      users: [
        "HR Operations: Needs audit-proof records and one-click compliance exports.",
        "Team Leads: Needs immediate visibility into overlapping team absences.",
        "Employees: Needs real-time leave balances and self-service AI assistance."
      ],
      decisions: [
        "Five-layer multi-tenancy: TenantScopedModel, TenantManager, JWT claims, HRRouter multi-DB routing, and CompanyMiddleware.",
        "Immutable double-entry ledger (credits & debits) for tamper-proof leave balances.",
        "Bulk role-map prefetching to eliminate N+1 database queries."
      ],
      architecture: [
        "Frontend: React.js with role-gated interfaces and real-time state",
        "Backend: Django REST Framework with TenantScoped querysets",
        "AI Layer: Groq LLM chatbot with RBAC-scoped audit logging and image color extractor",
        "Database: MySQL multi-tenant schemas with composite tenant indexing"
      ],
      challenges: [
        {
          problem: "N+1 query storm when rendering employee cards with role and leave lookups.",
          solution: "Implemented bulk role-map refactor and batch prefetching, cutting redundant queries by 80% and latency by ~1 second."
        }
      ],
      results: [
        "Multi-tenant SaaS deployed with zero data leakage across tenants",
        "N+1 query bottleneck resolved, boosting API response time significantly",
        "Zero leave balance calculation errors during active monthly billing"
      ],
      lessons: [
        "A well-architected modular monolith with strict domain boundaries enables rapid delivery with minimal operational friction."
      ]
    }
  },
  {
    id: "heart-disease-ensemble",
    slug: "heart-disease-ensemble",
    tag: "Applied ML Project",
    accentColor: "rose",
    category: "Machine Learning & Data",
    title: "Heart Disease Prediction — Dual Stacked Ensemble",
    subtitle: "Predictive ML Classification & Stacked Ensemble",
    outcome: "98% test accuracy across 5-fold stratified cross-validation on clinical benchmark data.",
    description: "Educational machine learning classification pipeline utilizing a dual-stacked ensemble architecture (Random Forest, Gradient Boosting, Logistic Regression meta-learner) with feature scaling and cross-validation.",
    bullets: [
      "Built a stacked classifier combining diverse base learners (Random Forest, Gradient Boosting) with a logistic meta-learner.",
      "Engineered preprocessing pipeline: feature scaling, outlier filtering, and multicollinearity evaluation via VIF.",
      "Validated performance using 5-fold stratified cross-validation, achieving 98% test accuracy on held-out evaluation sets."
    ],
    technologies: ["Python", "Scikit-Learn", "Stacked Ensembles", "Pandas", "Cross-Validation"],
    keyStats: ["98% Accuracy", "Dual Stacked Ensemble", "5-Fold CV", "Scikit-Learn"],
    links: {
      github: "https://github.com/UthejSaiThandlam",
      live: null,
      hasCaseStudy: true
    },
    caseStudy: {
      problem: "Early cardiac diagnosis datasets present noise, multicollinearity, and severe penalties for false negative predictions.",
      users: [
        "Medical triage practitioners needing objective risk attribution.",
        "Clinical researchers evaluating non-linear biometric risk factors."
      ],
      decisions: [
        "Dual stacked ensemble combining diverse model families (tree-based, linear, and boosting).",
        "Calibrated threshold to strictly penalize false negatives in high-risk patients."
      ],
      architecture: [
        "Data Pipeline: RobustScaler & VIF multicollinearity pruning",
        "Base Learners: Random Forest, Extra Trees, Gradient Boosting with 5-Fold Stratified CV",
        "Meta Learner: Stacking classifier predicting calibrated probabilities"
      ],
      challenges: [
        {
          problem: "Multicollinearity between blood pressure and cholesterol biometric markers.",
          solution: "Pruned features with Variance Inflation Factor (VIF) > 5 and standardized inputs."
        }
      ],
      results: [
        "98% accuracy on holdout test evaluation",
        "Outperformed individual standalone model baselines consistently"
      ],
      lessons: [
        "In healthcare ML, ensemble diversity and calibrated sensitivity are paramount."
      ]
    }
  },
  {
    id: "attendance-management-system",
    slug: "attendance-management-system",
    tag: "Data Pipeline",
    accentColor: "cyan",
    category: "Full Stack & SaaS",
    title: "Attendance Management System",
    subtitle: "Automated Synchronization & Data Pipeline",
    outcome: "Automated raw-data validation and synchronization into structured attendance records.",
    description: "Automated attendance tracking and high-throughput data processing pipeline built with Django and MySQL, converting raw log streams and Excel imports into verified corporate records.",
    bullets: [
      "Automated attendance processing, raw-data validation and synchronization into structured attendance records with exportable reports.",
      "Built high-throughput Excel data ingestion and validation filters with automated error logging.",
      "Developed responsive REST APIs for fast administrative querying and report generation."
    ],
    technologies: ["Django", "MySQL", "Excel Data Pipelines", "REST APIs", "Python"],
    keyStats: ["Automated Pipeline", "Data Validation", "Exportable Reports", "REST APIs"],
    links: {
      github: "https://github.com/UthejSaiThandlam",
      live: null,
      hasCaseStudy: false
    }
  }
];

export const moreProjects = [
  {
    id: "centralign-task-worker",
    slug: "centralign-task-worker",
    tag: "Systems",
    title: "CentrAlign Asynchronous Task Worker",
    outcome: "Distributed task execution with Redis locking and exponential backoff.",
    technologies: ["Python", "FastAPI", "Redis", "Celery"],
    github: "https://github.com/UthejSaiThandlam"
  },
  {
    id: "product-teardown-slack",
    slug: "product-teardown-slack",
    tag: "Product",
    title: "Enterprise Incident Workflow Teardown",
    outcome: "User friction teardown proposing contextual tray to reduce alert fatigue by 40%.",
    technologies: ["Figma", "User Journey", "PRD Scoping"],
    github: "https://github.com/UthejSaiThandlam"
  }
];

export const categorizedSkills = [
  {
    id: "languages",
    category: "Languages",
    icon: "code",
    color: "blue",
    skills: [
      { name: "Python", level: "Core skill", variant: "core" },
      { name: "SQL", level: "Production queries", variant: "production" },
      { name: "JavaScript", level: "Full-stack apps", variant: "applied" },
      { name: "Java", level: "OOP & Algorithms", variant: "applied" },
      { name: "C", level: "Foundations", variant: "applied" }
    ]
  },
  {
    id: "backend",
    category: "Backend & Systems",
    icon: "terminal",
    color: "coral",
    skills: [
      { name: "Django REST Framework", level: "Production experience", variant: "production" },
      { name: "Multi-Tenant Architecture", level: "5-layer isolation", variant: "production" },
      { name: "REST API Design", level: "RBAC & JWT Auth", variant: "production" },
      { name: "Query Optimization", level: "-80% N+1 refactor", variant: "production" },
      { name: "MySQL & SQLite", level: "Relational DBs", variant: "applied" },
      { name: "Docker & Linux", level: "Containerization", variant: "applied" }
    ]
  },
  {
    id: "ai-ml",
    category: "AI / ML & LLMs",
    icon: "brain",
    color: "cyan",
    skills: [
      { name: "Hybrid RAG Pipelines", level: "Live on Render", variant: "production" },
      { name: "Groq Llama & Gemini", level: "API orchestration", variant: "production" },
      { name: "Scikit-Learn & Ensembles", level: "98% test accuracy", variant: "applied" },
      { name: "TF-IDF + BM25 Fusion", level: "Hybrid retrieval", variant: "applied" },
      { name: "Pandas & NumPy", level: "Data pipelines", variant: "applied" },
      { name: "Prompt Engineering", level: "Structured outputs", variant: "core" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend & Delivery",
    icon: "globe",
    color: "purple",
    skills: [
      { name: "React.js", level: "Component systems", variant: "production" },
      { name: "Tailwind CSS", level: "Design systems", variant: "core" },
      { name: "HTML5 & Semantic UI", level: "Accessible UX", variant: "core" },
      { name: "Git & GitHub Actions", level: "CI/CD workflows", variant: "applied" },
      { name: "Postman & REST Tests", level: "API verification", variant: "applied" }
    ]
  }
];

export const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "Java", "SQL", "JavaScript", "C"]
  },
  {
    category: "Backend & APIs",
    skills: ["Django", "Django REST Framework", "REST API Design", "Microservices", "Multi-Tenant Architecture", "JWT Authentication", "RBAC", "Middleware", "Audit Logging"]
  },
  {
    category: "AI/ML & LLMs",
    skills: ["RAG Pipelines", "Google Gemini", "Groq Llama 3.3 70B", "Prompt Engineering", "Hybrid Search (TF-IDF + BM25)", "Vector Similarity", "Scikit-Learn", "Stacked Ensembles", "Pandas", "NumPy"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "SQLite", "Multi-DB Routing", "Query Optimization", "Data Modeling"]
  },
  {
    category: "Frontend & Tools",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Git", "GitHub", "Postman", "Render", "VS Code"]
  }
];

export const journeyMilestones = [
  {
    id: "origins",
    tag: "Chapter 01",
    title: "My programming origins",
    image: "/profile.jpg",
    imageBadge: "CS & AI Foundations",
    imageCaption: "First algorithms & data structures",
    text: "I decided to pursue Computer Science and Engineering with a specialization in AI & ML at Siddharth Institute of Engineering & Technology. My coding journey began with an innate fascination for how lines of code translate into intelligent systems. Starting with Python, Java, SQL, and algorithm foundations, I built a solid mathematical and software core that confirmed backend systems and AI engineering were my true passion."
  },
  {
    id: "scaled-systems",
    tag: "Chapter 02",
    title: "Finding My Way to Production & Scaled AI",
    image: "/profile-suit.jpg",
    imageBadge: "Production SDE & AI Systems",
    imageCaption: "Live multi-tenant SaaS & RAG pipelines",
    text: "Moving from academia into enterprise engineering, I joined Z.APPS as a Python Full Stack Intern, shipping features for a live multi-tenant HRMS/ERP SaaS serving 130+ employees. I architected a 5-layer multi-tenancy system, fixed critical N+1 query bottlenecks cutting latency by 80%, engineered an immutable-ledger leave pattern, and built Groq AI chatbots. Concurrently, I built and deployed live end-to-end RAG systems with 70/30 hybrid retrieval and multi-provider fallback, alongside stacked ML ensembles reaching 98% accuracy."
  }
];

export const educationTimeline = [
  {
    id: "btech",
    institution: "Siddharth Institute of Engg. & Tech., Puttur",
    period: "2022 – 2026 (Graduating)",
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    specialization: "Specialization in Artificial Intelligence, Machine Learning, Multi-Tenant Architecture, and Distributed Backends.",
    score: "CGPA: 8.23 / 10.0",
    highlights: "Core coursework: Data Structures, Algorithms, DBMS, Operating Systems, Machine Learning, Deep Learning, Cloud Systems."
  },
  {
    id: "intermediate",
    institution: "Sri Chaitanya Junior College, Tirupati",
    period: "2020 – 2022",
    degree: "Higher Secondary Certificate (MPC) — Mathematics, Physics, Chemistry",
    specialization: "Intensive training in advanced mathematics, analytical reasoning, and physical sciences.",
    score: "Marks: 787 / 1000",
    highlights: "Solid foundation in linear algebra, calculus, probability, and algorithmic logic."
  },
  {
    id: "cert-nptel",
    institution: "NPTEL — IIT Madras",
    period: "Verified National Certification",
    degree: "The Joy of Computing Using Python",
    specialization: "Algorithmic thinking, recursion, computational models, and advanced Python architecture.",
    score: "Certified by IIT Madras",
    highlights: "Rigorous proctored national exam covering algorithmic complexity, data structures, and Python programming."
  },
  {
    id: "cert-fullstack",
    institution: "Think Champ Pvt Ltd",
    period: "Industry Credential",
    degree: "Python Full Stack Development Certification",
    specialization: "End-to-end full stack architecture: Django REST Framework, React.js, MySQL relational modeling, and deployment.",
    score: "Certified Full Stack Engineer",
    highlights: "Hands-on project work shipping integrated client-server applications and RESTful microservices."
  }
];

export const productArtifacts = [
  {
    id: "prd-hrms-leave",
    type: "PRD",
    badge: "Production PRD",
    title: "Leave Ledger & Approval PRD",
    context: "Multi-Tenant HRMS",
    summary: "One-page requirements document detailing user personas, functional requirements, and edge cases for the leave management module.",
    downloadableText: `PRODUCT REQUIREMENT DOCUMENT: HRMS LEAVE LEDGER
Target: Multi-Tenant Enterprise HRMS
Author: Thandlam Uthej Sai

1. PROBLEM:
Manual spreadsheet adjustments caused frequent leave balance discrepancies and slow manager approval turnaround.

2. PERSONAS:
- Employee: Submit requests, view quota, receive status updates.
- Manager: Review team overlap, one-click approve/reject.
- HR Admin: Configure yearly quotas, export compliance audit logs.

3. FUNCTIONAL REQUIREMENTS:
- FR-1: Balance derived by summing immutable credit/debit records.
- FR-2: Immediate row-lock on date range upon request creation.
- FR-3: Automatic escalation to HR Admin if manager inactive for 48 hours.

4. ACCEPTANCE CRITERIA:
- API response p95 < 250ms.
- 0 cross-organization data leakage.`
  },
  {
    id: "user-stories",
    type: "User Stories",
    badge: "Scrum Artifact",
    title: "Leave Module User Stories",
    context: "8 Stories with Acceptance Criteria",
    summary: "Sprint-ready user stories detailing role, goal, and verified acceptance criteria for cross-functional developers.",
    stories: [
      {
        asA: "Standard Employee",
        iWant: "to see my real-time remaining leave balance before submitting a request",
        soThat: "I do not apply for days beyond my annual quota."
      },
      {
        asA: "Team Manager",
        iWant: "to view a calendar warning if multiple direct reports apply for the same dates",
        soThat: "I ensure departmental coverage before approving."
      },
      {
        asA: "HR Administrator",
        iWant: "to export an immutable audit trail of all leave credits and debits",
        soThat: "we pass monthly payroll compliance without manual reconciliation."
      }
    ]
  },
  {
    id: "process-flow",
    type: "Process Flow",
    badge: "System Flow",
    title: "Leave Approval Transaction Flow",
    context: "BPMN / Architecture Flow",
    summary: "Step-by-step state transition: User Submission -> Lock Verification -> Manager Notification -> Atomic Debit Entry.",
    steps: [
      "1. Employee submits date range (Frontend client check against quota)",
      "2. Backend acquires row-level lock on ledger row (Prevents race conditions)",
      "3. Dispatches manager webhook notification with tokenized approve link",
      "4. Atomic commit writes an immutable DEBIT row upon manager approval"
    ]
  },
  {
    id: "kpi-mock",
    type: "KPI Mock",
    badge: "Sample Data",
    title: "HRMS Operational KPI Dashboard",
    context: "Simulated Telemetry Mock",
    summary: "Mock metrics tracking active user adoption, query latency drops, and reduced support tickets.",
    metrics: [
      { label: "Active Adoption", value: "98.4%", sub: "Enterprise workforce" },
      { label: "Query P95 Latency", value: "185 ms", sub: "-80% post N+1 fix" },
      { label: "Approval Turnaround", value: "3.4 hrs", sub: "Down from 3 days" },
      { label: "Dispute Tickets", value: "1 / mo", sub: "Down from 18 / mo" }
    ]
  }
];

export const howIWorkSteps = [
  { step: "01", name: "Problem", desc: "Identify root causes and operational pain points before writing code." },
  { step: "02", name: "Users", desc: "Map who touches the system and where cognitive friction occurs." },
  { step: "03", name: "Data", desc: "Design the relational schema and audit requirements upfront." },
  { step: "04", name: "Design", desc: "Define API contracts, state transitions, and clean user interfaces." },
  { step: "05", name: "Build", desc: "Ship modular, maintainable code with strict error handling." },
  { step: "06", name: "Measure", desc: "Track query performance, adoption, and error frequency." },
  { step: "07", name: "Improve", desc: "Iterate continuously based on user feedback and production telemetry." }
];

export const educationData = {
  degrees: [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      institution: "Siddharth Institute of Engineering & Technology, Puttur",
      year: "2022 – 2026",
      score: "CGPA: 8.23 / 10.0"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College, Tirupati",
      year: "2020 – 2022",
      score: "Marks: 787 / 1000"
    }
  ],
  certifications: [
    { title: "The Joy of Computing Using Python", issuer: "NPTEL / IIT Madras" },
    { title: "Python Full Stack Development Certification", issuer: "Think Champ Pvt Ltd" }
  ]
};

