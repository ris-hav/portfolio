const caseStudies = [
  {
    company: "OnlyGood",
    role: "Senior Frontend Developer",
    period: "Aug 2025 – Present",
    title: "Cutting Angular form boilerplate by 95%",
    problem:
      "Angular Reactive Forms were one of the most painful parts of the codebase to work in, and state was scattered across modules, causing redundant backend calls and drift.",
    bullets: [
      "Rebuilt forms with Reactive Forms and FormBuilder, then documented the migration in markdown guides and ran internal sessions so every developer had a production-ready pattern.",
      "Redesigned cross-module state with a lightweight shared-service pattern, keeping data in sync across navigation without redundant fetches.",
      "Also shipped the OnlyGood mobile app from scratch in React Native with role-based auth, and ECharts dashboards with locale-aware PDF/CSV export.",
    ],
    impact: [
      { value: "95%", label: "less form boilerplate" },
      { value: "60%", label: "faster integration effort" },
    ],
    tech: ["Angular", "RxJS", "TypeScript", "React Native", "ECharts"],
  },
  {
    company: "Appnox Technologies",
    role: "Software Development Engineer 2",
    period: "Jul 2024 – Jun 2025",
    title: "Building Menu Management for a B2B travel platform",
    problem:
      "A B2B travel platform serving the Italian market needed an entire Menu Management system built from the ground up, under sprint deadlines that couldn't slip.",
    bullets: [
      "Owned the full Menu Management system end to end, integrating APIs with Axios and handling complex business workflows.",
      "Cut page load times by half using React Query for caching, lazy loading, memoization, and virtualization.",
      "Led the frontend team to consistently hit sprint targets and delivery deadlines.",
    ],
    impact: [{ value: "50%", label: "faster page loads" }],
    tech: ["React", "React Query", "Axios", "Performance Optimization"],
  },
  {
    company: "Personal Project",
    role: "Full-Stack Architecture",
    period: "2025",
    title: "AccessSuite — multi-tenant RBAC from scratch",
    problem:
      "Wanted to prove out backend architecture skills beyond the frontend: a real multi-tenant access-control system with proper isolation, not a CRUD toy.",
    bullets: [
      "Architected tenant isolation via request-level guards, so one client's data is structurally unreachable from another's requests.",
      "Implemented JWT auth with refresh rotation and per-client role-based access control.",
      "Built the full stack solo: NestJS API, Prisma ORM, PostgreSQL.",
    ],
    impact: [],
    tech: ["NestJS", "Prisma", "PostgreSQL", "JWT", "RBAC"],
    demoUrl: "https://accesssuite.vercel.app/",
  },
];

export default caseStudies;
