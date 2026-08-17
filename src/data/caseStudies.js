const caseStudies = [
  {
    company: "Onlygood Futuretech Private Limited",
    role: "Senior Frontend Developer",
    period: "Aug 2025 – Present",
    title: "Cutting Angular form boilerplate by 95%",
    problem:
      "The Angular forms in this codebase were a mess to work in, and state was scattered across modules, so screens kept re-fetching data they already had.",
    bullets: [
      "Rebuilt the forms on Reactive Forms and FormBuilder, wrote up the migration in markdown guides, and ran sessions with the team so everyone had a pattern they could actually reuse.",
      "Redesigned state across modules with a shared-service pattern so data stayed in sync without re-fetching on every navigation.",
      "Built the OnlyGood mobile app from scratch in React Native, with role-based auth for operators and CXOs, plus ECharts dashboards that export to locale-aware PDF and CSV.",
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
      "This B2B travel platform for the Italian market needed a Menu Management system built from nothing, on sprint deadlines that weren't moving.",
    bullets: [
      "Owned the Menu Management system end to end, from the API integration work with Axios through the business logic.",
      "Cut page load times in half with React Query for caching, plus lazy loading, memoization, and virtualization where they actually mattered.",
      "Led the frontend team, and we hit our sprint targets every cycle.",
    ],
    impact: [{ value: "50%", label: "faster page loads" }],
    tech: ["React", "React Query", "Axios", "Performance Optimization"],
  },
  {
    company: "Personal Project",
    role: "Full-Stack Architecture",
    period: "2025",
    title: "AccessSuite: multi-tenant RBAC from scratch",
    problem:
      "Wanted to prove I could design backend architecture, not just consume an API someone else built. So I built a real multi-tenant access-control system, not another CRUD demo.",
    bullets: [
      "Built tenant isolation with request-level guards, so one client's data is structurally unreachable from another's requests.",
      "Set up JWT auth with refresh rotation and role-based access control scoped per client.",
      "Built the whole stack myself: NestJS API, Prisma ORM, PostgreSQL.",
    ],
    impact: [],
    tech: ["NestJS", "Prisma", "PostgreSQL", "JWT", "RBAC"],
    demoUrl: "https://accesssuite.vercel.app/",
  },
];

export default caseStudies;
