export const personalInfo = {
  name: "Thandlam Uthej Sai",
  eyebrow: "Python · React · AI · Product",
  heroHeadline: "Full-stack engineer building AI-powered products.",
  heroSubhead: "Learning product and business analysis.",
  status: "B.Tech CS (AI & ML) 2026 · Open to full-time and internship roles",
  social: {
    github: "https://github.com/UthejSaiThandlam",
    linkedin: "https://www.linkedin.com/in/thandlam-uthejsai-05752928b/",
    email: "uthejsai.thandlam@gmail.com",
    location: "India"
  },
  layers: [
    {
      label: "Core (Proven)",
      badge: "Built & Shipped",
      color: "border-sky-500/40 text-sky-400",
      description: "Python, Django REST, React, multi-tenant SaaS, HRMS used by 130+ employees."
    },
    {
      label: "Applied (Growing)",
      badge: "Actively Building",
      color: "border-teal-500/40 text-teal-400",
      description: "RAG planner, ChromaDB embeddings, stacked ML ensemble, SQL telemetry."
    },
    {
      label: "Direction (Learning)",
      badge: "Exploring & Practicing",
      color: "border-indigo-500/40 text-indigo-400",
      description: "Product management PRDs, user stories, business analysis, feature prioritization."
    }
  ]
};

// Exactly 4 honest numbers from the spec
export const impactNumbers = [
  {
    value: "130+",
    label: "LIVE USERS",
    detail: "Z.APPS HRMS/ERP in active use"
  },
  {
    value: "5",
    label: "TENANCY LAYERS",
    detail: "Data isolation & row-level ACL"
  },
  {
    value: "O(n)",
    label: "ORG CHART BUILDER",
    detail: "Single-pass linear tree traversal"
  },
  {
    value: "6 mo",
    label: "INTERNSHIP",
    detail: "Production ownership at Z.APPS"
  }
];

// Experience: 1 company (Z.APPS), grouped under mini headings: Built, Designed, Fixed, Documented
// Max 2 lines per bullet: Action verb -> what -> result
export const experienceData = {
  company: "Z.APPS",
  role: "Python Full-Stack Engineer Intern",
  period: "Feb 2024 – Aug 2024",
  location: "Hybrid",
  summary: "Owned core modules of a multi-tenant HRMS/ERP platform deployed to 130+ daily corporate employees.",
  groups: [
    {
      title: "Built",
      bullets: [
        {
          action: "Engineered",
          text: "a multi-tenant data isolation layer with organization-scoped queries, preventing cross-tenant data leakage across all REST endpoints."
        },
        {
          action: "Shipped",
          text: "an O(n) single-pass department tree algorithm to generate dynamic enterprise org charts, replacing recursive database lookups."
        }
      ]
    },
    {
      title: "Designed",
      bullets: [
        {
          action: "Architected",
          text: "an immutable double-entry leave ledger that stores audit-proof credit and debit events rather than mutating static counters."
        },
        {
          action: "Drafted",
          text: "end-to-end user stories and approval workflows for multi-tier manager delegation and leave conflict checks."
        }
      ]
    },
    {
      title: "Fixed",
      bullets: [
        {
          action: "Eliminated",
          text: "N+1 relational query bottlenecks across the leave calculation ledger, reducing page load query count from 180+ down to 3."
        },
        {
          action: "Resolved",
          text: "concurrent booking collisions by implementing database row-level locking on submission requests."
        }
      ]
    },
    {
      title: "Documented",
      bullets: [
        {
          action: "Authored",
          text: "comprehensive REST API contracts, deployment guides, and functional PRD specifications used by the engineering team."
        }
      ]
    }
  ]
};

// 3 Featured projects + 2 more
export const featuredProjects = [
  {
    id: "enterprise-hrms-erp",
    slug: "enterprise-hrms-erp",
    tag: "Shipped Production",
    title: "Enterprise Multi-Tenant HRMS & ERP SaaS",
    outcome: "Shipped to production and currently used daily by 130+ employees.",
    description: "Multi-tenant HRMS platform with immutable leave ledgers, RBAC security, and an O(n) org chart builder.",
    technologies: ["Python", "Django", "PostgreSQL", "React", "REST API"],
    links: {
      github: "https://github.com/UthejSaiThandlam",
      live: "https://github.com/UthejSaiThandlam",
      hasCaseStudy: true
    },
    caseStudy: {
      problem: "Z.APPS managed 130+ employees across diverse client organizations using disconnected spreadsheets, causing frequent leave balance disputes and slow approval tracking.",
      users: [
        "HR Operations: Needs audit-proof records and one-click compliance exports.",
        "Team Leads: Needs immediate visibility into overlapping team absences.",
        "Employees: Needs accurate real-time leave quotas without manual check-ins."
      ],
      decisions: [
        "Chosen PostgreSQL row-level isolation via organization_id over separate DBs per tenant to keep hosting overhead minimal.",
        "Implemented an immutable double-entry ledger (credits & debits) instead of mutating a single balance integer.",
        "Constructed org hierarchy via single-pass hash indexing rather than recursive SQL queries to ensure stable memory limits."
      ],
      architecture: [
        "Frontend: React SPA with role-gated views and clear status badges",
        "API Layer: Django REST Framework with organization-scoped querysets",
        "Data Layer: PostgreSQL with indexed ledger tables and foreign-key constraints"
      ],
      challenges: [
        {
          problem: "N+1 query bottleneck when rendering the company directory with department, manager, and leave balance lookups.",
          solution: "Applied prefetch_related and select_related query batching, reducing queries from 180+ to 3."
        },
        {
          problem: "Race conditions when two employees applied for the same constrained calendar slots simultaneously.",
          solution: "Introduced row-level locks on the employee ledger during the submission transaction window."
        }
      ],
      results: [
        "130+ active users onboarded with zero security boundary violations",
        "Query count dropped from 180+ to 3 on core employee roster view",
        "Zero leave balance discrepancies across consecutive monthly cycles"
      ],
      lessons: [
        "A modular monolith with clean domain boundaries beats microservices for small engineering teams.",
        "Audit-proof ledgers save dozens of hours in customer support."
      ]
    }
  },
  {
    id: "ai-study-planner-rag",
    slug: "ai-study-planner-rag",
    tag: "Applied AI",
    title: "Autonomous AI Study & Goal Planner (RAG)",
    outcome: "Synthesizes multi-week curriculum syllabi into balanced daily study routines.",
    description: "Retrieval-augmented generation system combining semantic vector embeddings with heuristic scheduling constraints.",
    technologies: ["Python", "LangChain", "ChromaDB", "FastAPI", "React"],
    links: {
      github: "https://github.com/UthejSaiThandlam",
      live: "https://github.com/UthejSaiThandlam",
      hasCaseStudy: true
    },
    caseStudy: {
      problem: "Students struggle to convert dense multi-page course syllabi into realistic daily study calendars with spaced repetition.",
      users: [
        "Undergraduate students tackling dense technical courses.",
        "Self-taught developers balancing work with interview prep."
      ],
      decisions: [
        "Used ChromaDB with semantic chunking to keep conceptual definitions intact rather than arbitrary character splits.",
        "Combined LLM generation with deterministic rule validation to prevent unrealistic daily workloads."
      ],
      architecture: [
        "Ingestion: PDF parsing -> Semantic chunking -> Vector embeddings",
        "Vector Store: ChromaDB with metadata filtering on difficulty",
        "Validation: Pydantic constraints checking max 6 study hours per day"
      ],
      challenges: [
        {
          problem: "LLM hallucinating 16-hour daily study schedules without respecting rest intervals.",
          solution: "Enforced post-processing constraint validator before returning output to the frontend."
        }
      ],
      results: [
        "Average schedule generation completed in under 3.5 seconds",
        "94% schedule completion rate reported in initial cohort trials"
      ],
      lessons: [
        "Pair LLMs with deterministic heuristics for mathematical or time-bound tasks."
      ]
    }
  },
  {
    id: "heart-disease-ensemble",
    slug: "heart-disease-ensemble",
    tag: "Applied ML",
    title: "Clinical Heart Disease Predictive Engine",
    outcome: "Attained 91.8% ROC-AUC score while minimizing clinical false negatives.",
    description: "Dual-stacked gradient boosted ensemble classifier with SHAP explainability for clinical risk attribution.",
    technologies: ["Python", "Scikit-Learn", "XGBoost", "LightGBM", "Pandas"],
    links: {
      github: "https://github.com/UthejSaiThandlam",
      live: "https://github.com/UthejSaiThandlam",
      hasCaseStudy: true
    },
    caseStudy: {
      problem: "Early cardiac triage requires high sensitivity because missing an at-risk patient (false negative) has severe health consequences.",
      users: [
        "Healthcare practitioners wanting an objective second-opinion triage score.",
        "Clinical researchers evaluating feature importance in cardiovascular datasets."
      ],
      decisions: [
        "Tuned decision threshold to prioritize recall over raw accuracy to prevent false negatives.",
        "Employed SHAP summary plots so practitioners can understand why a risk score was assigned."
      ],
      architecture: [
        "Preprocessing: RobustScaler for non-normal biometric features",
        "Base Models: XGBoost, LightGBM, and Random Forest with 5-Fold Stratified CV",
        "Meta Learner: L2-regularized Logistic Regression predicting calibrated probability"
      ],
      challenges: [
        {
          problem: "High multicollinearity between blood pressure and cholesterol biometric markers.",
          solution: "Filtered redundant features with Variance Inflation Factor (VIF) > 5."
        }
      ],
      results: [
        "91.8% ROC-AUC on holdout test set",
        "Zero high-risk false negatives observed with threshold calibrated at 0.42"
      ],
      lessons: [
        "Model explainability is just as critical as predictive accuracy in healthcare."
      ]
    }
  }
];

export const moreProjects = [
  {
    id: "centralign-task-worker",
    slug: "centralign-task-worker",
    tag: "Backend & Systems",
    title: "CentrAlign Asynchronous Task Worker",
    outcome: "Reliable background processing with zero message loss and exponential backoff.",
    technologies: ["Python", "FastAPI", "Redis", "Celery"],
    github: "https://github.com/UthejSaiThandlam"
  },
  {
    id: "product-teardown-slack",
    slug: "product-teardown-slack",
    tag: "Product Thinking",
    title: "Enterprise Incident Workflow Teardown",
    outcome: "User friction mapping proposing context tray to cut alert fatigue by 40%.",
    technologies: ["Figma", "User Journey", "PRD Scoping"],
    github: "https://github.com/UthejSaiThandlam"
  }
];

// Product & Analyst artifacts (The PM/BA direction)
// Clearly labeled as production work or self-initiated practice
export const productArtifacts = [
  {
    id: "prd-hrms-leave",
    type: "PRD",
    badge: "Production PRD",
    title: "Leave Ledger & Approval PRD",
    context: "Z.APPS (130+ users)",
    summary: "One-page requirements document detailing user personas, functional requirements, and edge cases for the leave management module.",
    downloadableText: `
PRODUCT REQUIREMENT DOCUMENT: HRMS LEAVE LEDGER
Target: Z.APPS (130+ Employees)
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
      { label: "Active Users", value: "134", sub: "Daily employees" },
      { label: "Query P95 Latency", value: "185 ms", sub: "-82% post N+1 fix" },
      { label: "Approval Turnaround", value: "3.4 hrs", sub: "Down from 3 days" },
      { label: "Dispute Tickets", value: "1 / mo", sub: "Down from 18 / mo" }
    ]
  }
];

// Skills: Grouped honestly into Proven vs Learning, no progress bars
export const skillsData = [
  {
    category: "Engineering (Proven)",
    skills: ["Python", "Django", "Django REST Framework", "React", "REST APIs", "PostgreSQL", "Docker", "Git"]
  },
  {
    category: "AI / ML (Applied)",
    skills: ["LLM APIs", "RAG Pipelines", "LangChain", "ChromaDB", "Scikit-Learn", "XGBoost", "Pandas", "NumPy"]
  },
  {
    category: "Data & Telemetry",
    skills: ["SQL", "Relational Schema Design", "Query Optimization (EXPLAIN)", "Data Cleaning", "KPI Dashboards"]
  },
  {
    category: "Product & Business (Learning)",
    isLearning: true,
    skills: ["PRD Writing", "User Stories", "Acceptance Criteria", "Process Flow Mapping", "Feature Prioritization"]
  },
  {
    category: "Tools & Infrastructure",
    skills: ["Postman", "GitHub", "Linux / Bash", "Vite", "Tailwind CSS", "Figma"]
  }
];

// How I Work: 7 clean steps
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
  degree: "B.Tech in Computer Science (Artificial Intelligence & Machine Learning)",
  institution: "Graduating 2026",
  cgpa: "8.23 / 10.0",
  coursework: "Data Structures & Algorithms, DBMS, Machine Learning, Operating Systems, Computer Networks",
  certifications: [
    { title: "Python Full Stack Development", issuer: "Industry Credential (2024)" },
    { title: "NPTEL Core Computer Science", issuer: "Ministry of Education / IIT (2023 - 2024)" }
  ]
};
