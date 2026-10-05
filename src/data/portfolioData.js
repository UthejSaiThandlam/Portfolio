export const personalInfo = {
  name: "Thandlam Uthej Sai",
  title: "Full-Stack Engineer & AI Builder",
  eyebrow: "Python · React · AI/ML · Product",
  heroHeadline: "Full-stack engineer building AI-powered products.",
  heroSubhead: "Learning product and business analysis.",
  phone: "+91 9966939345",
  email: "uthejsaithandlam@gmail.com",
  location: "Tirupati, Andhra Pradesh",
  avatar: "/profile-suit.jpg",
  status: "B.Tech CS (AI & ML) 2026 · Open to Full-Time & Internships",
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
  { value: "5", label: "TENANCY LAYERS", detail: "TenantScopedModel, Manager, JWT, HRRouter, Middleware" },
  { value: "O(n)", label: "ORG TREE BUILDER", detail: "Single-pass algorithm with cycle detection" },
  { value: "84%", label: "LATENCY DROP", detail: "Resolved N+1 bottleneck from 180+ queries to 3" },
  { value: "6 mo", label: "PRODUCTION INTERN", detail: "End-to-end full stack SaaS engineering" }
];

export const experienceData = {
  company: "Z.APPS",
  role: "Python Full Stack Intern",
  period: "Feb 2026 – Aug 2026",
  location: "Sricity, India",
  summary: "Contributed to an enterprise multi-tenant HRMS/ERP SaaS platform, operating across leave, attendance, and organizational hierarchy modules.",
  groups: [
    {
      title: "Built",
      bullets: [
        { action: "Architected", text: "a 5-layer multi-tenancy system (TenantScopedModel, TenantManager, JWT auth, HRRouter multi-DB routing, and CompanyMiddleware)." },
        { action: "Engineered", text: "an O(n) org chart module with cycle detection to render multi-root corporate hierarchies reliably." },
        { action: "Built", text: "an AI chatbot with Groq LLM featuring RBAC-scoped audit-logged queries and dual auth paths (JWT for HR/Admin, employee-ID for staff)." },
        { action: "Developed", text: "an AI-driven theme engine extracting color palettes from uploaded images for per-tenant branding." }
      ]
    },
    {
      title: "Designed",
      bullets: [
        { action: "Architected", text: "the leave management microservice end-to-end with an immutable ledger balance pattern and automated notifications." },
        { action: "Structured", text: "multi-tenant relational schemas (MySQL) ensuring strict tenant isolation and audit compliance." }
      ]
    },
    {
      title: "Fixed",
      bullets: [
        { action: "Diagnosed & Resolved", text: "a critical backend N+1 query bottleneck via bulk role-map refactor, slashing page query count from 180+ to 3." },
        { action: "Eliminated", text: "leave booking race conditions using transactional row-level database locks." }
      ]
    },
    {
      title: "Documented",
      bullets: [
        { action: "Authored", text: "production API endpoint specifications and system architecture docs to enable seamless cross-team collaboration." }
      ]
    }
  ]
};

export const featuredProjects = [
  {
    id: "enterprise-hrms-erp",
    slug: "enterprise-hrms-erp",
    tag: "Shipped Production",
    category: "Full Stack & SaaS",
    title: "Enterprise Multi-Tenant HRMS/ERP SaaS",
    outcome: "Production multi-tenant SaaS with immutable ledger and AI theme engine.",
    description: "Multi-tenant platform with 5-layer isolation, immutable double-entry leave ledger, O(n) org tree with cycle detection, and an AI theme engine.",
    technologies: ["Python", "Django", "Django REST", "React.js", "MySQL", "Groq LLM", "JWT"],
    keyStats: ["Multi-Tenant", "5-Layer Tenancy", "O(n) Tree Builder", "N+1 Query Fix"],
    links: {
      github: "https://github.com/UthejSaiThandlam",
      live: "https://github.com/UthejSaiThandlam",
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
        "O(n) single-pass hash indexing with cycle detection for multi-root org trees."
      ],
      architecture: [
        "Frontend: React.js with role-gated interfaces and Recharts dashboards",
        "Backend: Django REST Framework with TenantScoped querysets",
        "AI Layer: Groq LLM chatbot with RBAC-scoped audit logging and image color extractor",
        "Database: MySQL multi-tenant schemas with composite tenant indexing"
      ],
      challenges: [
        {
          problem: "N+1 query storm when rendering employee cards with role and leave lookups.",
          solution: "Implemented bulk role-map refactor and batch prefetching, cutting queries from 180+ down to 3."
        },
        {
          problem: "Multi-root departmental hierarchies causing circular reference crashes.",
          solution: "Engineered single-pass tree builder with cycle detection sets."
        }
      ],
      results: [
        "Multi-tenant SaaS deployed with zero data leakage across tenants",
        "N+1 query bottleneck resolved, boosting API reporting response by over 80%",
        "Zero leave balance calculation errors during active monthly billing"
      ],
      lessons: [
        "A well-architected modular monolith with strict domain boundaries enables rapid delivery with minimal operational friction."
      ]
    }
  },
  {
    id: "ai-study-planner-rag",
    slug: "ai-study-planner-rag",
    tag: "Applied AI",
    category: "AI & LLMOps",
    title: "AI Planner using RAG (Retrieval-Augmented Generation)",
    outcome: "Transforms unstructured course syllabi into adaptive daily study schedules.",
    description: "Context-aware assistant combining document retrieval, vector search embeddings, and LLM-generated personalized milestones.",
    technologies: ["Python", "LangChain", "ChromaDB", "Groq / OpenAI API", "FastAPI", "React"],
    keyStats: ["Vector Retrieval", "Semantic Chunking", "Heuristic Validation", "< 3.5s Ingestion"],
    links: {
      github: "https://github.com/UthejSaiThandlam",
      live: "https://github.com/UthejSaiThandlam",
      hasCaseStudy: true
    },
    caseStudy: {
      problem: "Learners struggle to convert massive syllabi into balanced daily routines with spaced repetition.",
      users: [
        "Undergraduate students managing multi-subject exams.",
        "Engineers preparing for competitive coding rounds."
      ],
      decisions: [
        "ChromaDB with semantic chunking to keep conceptual units intact.",
        "Rule-based heuristic validator to enforce realistic daily hour limits."
      ],
      architecture: [
        "Ingestion: PDF parsing -> Semantic chunking -> Dense vector embeddings",
        "Storage: ChromaDB with difficulty tag filters",
        "Orchestration: LangChain sequential chains with Pydantic output schemas"
      ],
      challenges: [
        {
          problem: "LLM hallucinations generating unrealistic 18-hour continuous study allocations.",
          solution: "Added post-processing constraint validator enforcing human rest cycles."
        }
      ],
      results: [
        "Under 3.5s average schedule synthesis time",
        "94% schedule completion adherence reported in pilot tests"
      ],
      lessons: [
        "Pair generative LLMs with deterministic validation for time and math constraints."
      ]
    }
  },
  {
    id: "heart-disease-ensemble",
    slug: "heart-disease-ensemble",
    tag: "Applied ML",
    category: "Machine Learning & Data",
    title: "Heart Disease Prediction — Dual Stacked Ensemble",
    outcome: "91.8% ROC-AUC score with zero false negatives on high-risk test patients.",
    description: "Dual stacked ensemble (regression/classification) pipeline optimizing recall with SHAP explainability for clinical cardiac risk assessment.",
    technologies: ["Python", "Scikit-Learn", "XGBoost", "LightGBM", "Pandas", "NumPy", "SHAP"],
    keyStats: ["91.8% ROC-AUC", "Zero High-Risk False Negatives", "SHAP Plots", "5-Fold CV"],
    links: {
      github: "https://github.com/UthejSaiThandlam",
      live: "https://github.com/UthejSaiThandlam",
      hasCaseStudy: true
    },
    caseStudy: {
      problem: "Early cardiac diagnosis datasets present noise, multicollinearity, and severe penalty for false negatives.",
      users: [
        "Medical triage practitioners needing objective risk attribution.",
        "Clinical researchers evaluating non-linear biometric risk factors."
      ],
      decisions: [
        "Decision threshold calibrated at 0.42 to prioritize sensitivity over raw accuracy.",
        "SHAP summary plots for transparent clinical interpretability."
      ],
      architecture: [
        "Data Pipeline: RobustScaler & VIF multicollinearity pruning",
        "Base Learners: XGBoost, LightGBM, Random Forest with 5-Fold Stratified CV",
        "Meta Learner: Regularized Logistic Regression predicting calibrated risk"
      ],
      challenges: [
        {
          problem: "Multicollinearity between blood pressure and cholesterol biometric markers.",
          solution: "Pruned features with Variance Inflation Factor (VIF) > 5."
        }
      ],
      results: [
        "91.8% ROC-AUC on holdout validation dataset",
        "Zero critical false negatives on high-risk test subset"
      ],
      lessons: [
        "In healthcare ML, interpretability is as critical as predictive accuracy."
      ]
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

export const productArtifacts = [
  {
    id: "prd-hrms-leave",
    type: "PRD",
    badge: "Production PRD",
    title: "Leave Ledger & Approval PRD",
    context: "Multi-Tenant HRMS",
    summary: "One-page requirements document detailing user personas, functional requirements, and edge cases for the leave management module.",
    downloadableText: `
PRODUCT REQUIREMENT DOCUMENT: HRMS LEAVE LEDGER
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
- 0 cross-organization data leakage.
    `.trim()
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
      { label: "Query P95 Latency", value: "185 ms", sub: "-84% post N+1 fix" },
      { label: "Approval Turnaround", value: "3.4 hrs", sub: "Down from 3 days" },
      { label: "Dispute Tickets", value: "1 / mo", sub: "Down from 18 / mo" }
    ]
  }
];

export const skillsData = [
  {
    category: "Languages & Core",
    skills: ["Python", "SQL", "JavaScript", "HTML5", "CSS3"]
  },
  {
    category: "Full Stack & Backend",
    skills: ["Django", "Django REST Framework", "React.js", "REST APIs", "Microservices", "JWT Auth", "RBAC", "MySQL", "SQLite"]
  },
  {
    category: "AI / ML & LLMs",
    skills: ["RAG Pipelines", "Groq LLM Integration", "AI-Based Theme Extraction", "LangChain", "ChromaDB", "Scikit-Learn", "Pandas", "NumPy"]
  },
  {
    category: "Data Analysis & Reporting",
    skills: ["Data Modeling", "Database Design", "Recharts Dashboards", "KPI Reporting", "Query Optimization", "Data Cleaning"]
  },
  {
    category: "Product & Architecture (Learning)",
    isLearning: true,
    skills: ["0-to-1 Ownership", "PRD Writing", "User Stories", "Process Flow Mapping", "Audit Logging", "Multi-Tenancy"]
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Docker", "Vite", "Tailwind CSS"]
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
    { title: "The Joy of Computing Using Python", issuer: "NPTEL / IIT" },
    { title: "Python Full Stack Development Certification", issuer: "Industry Credential" }
  ]
};
