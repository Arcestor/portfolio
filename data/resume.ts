export type EducationItem = {
  label: string;
  institution: string;
  year: string;
};

export type ProjectItem = {
  title: string;
  tag: string;
  period: string;
  stack: string[];
  summary: string;
  outcome: string;
  repo: string;
  previewLabel: string;
  previewCaption: string;
  accentFrom: string;
  accentTo: string;
  highlights: string[];
};

export type ExperienceItem = {
  company: string;
  title: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

export type CertificationItem = {
  title: string;
  issuer: string;
  summary: string;
};

export const resume = {
  name: "Rohan Kumar",
  initials: "RK",
  email: "rkcool026@gmail.com",
  phone: "+91-9304795181",
  github: "https://github.com/Arcestor",
  linkedin: "https://linkedin.com/in/rohan-kumar-595415276",
  location: "Guna, India",
  title: "AI / ML Engineer & Full-Stack Developer",
  tagline: "AI / ML engineer and full-stack developer building privacy-first systems and polished product experiences.",
  heroSubtitle: "",
  summary:
    "Final year CS student at JUET Guna building AI systems, real-time apps, and modern full-stack products.",
  education: [
    {
      label: "B.Tech JUET",
      institution: "Jaypee University of Engineering and Technology, Guna",
      year: "2026",
    },
    {
      label: "Senior Secondary",
      institution: "Trident Public School",
      year: "2021",
    },
    {
      label: "Secondary",
      institution: "St. Xavier's Jr/Sr School",
      year: "2019",
    },
  ] satisfies EducationItem[],
  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
    mlAi: [
      "Scikit-learn",
      "PyTorch",
      "Hugging Face",
      "OpenAI API",
      "NLP",
      "Generative AI",
    ],
    web: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Socket.IO",
      "Tailwind",
      "Zod",
      "ShadCN",
    ],
    infra: ["AWS (EC2, S3)", "Docker", "Redis", "gRPC", "Git"],
  },
  projects: [
    {
      title: "Federated Learning using MCP",
      tag: "AI / ML / Privacy",
      period: "Jan 2024 - Present",
      stack: ["Python", "PyTorch", "gRPC", "Docker", "MCP"],
      summary:
        "Privacy-preserving federated training across distributed nodes.",
      outcome:
        "Model updates sync without centralizing raw data.",
      repo: "https://github.com/Arcestor",
      previewLabel: "Distributed nodes",
      previewCaption: "Containerized clients exchange secure model updates through a controlled protocol layer.",
      accentFrom: "#56d364",
      accentTo: "#38bdf8",
      highlights: [
        "gRPC-based client coordination",
        "Dockerized multi-node simulation",
        "MCP-driven experiment control",
      ],
    },
    {
      title: "Fashion Recommendation System",
      tag: "ML / Backend",
      period: "Sep 2023 - Dec 2023",
      stack: ["Python", "Scikit-learn", "Flask", "AWS"],
      summary:
        "Hybrid recommendation engine for better outfit ranking.",
      outcome:
        "18% accuracy lift with AWS deployment.",
      repo: "https://github.com/Arcestor",
      previewLabel: "Ranking engine",
      previewCaption: "Hybrid scoring blends profile similarity, content cues, and ranking feedback.",
      accentFrom: "#f59e0b",
      accentTo: "#fb7185",
      highlights: [
        "Collaborative + content filtering",
        "Flask API deployed on AWS",
        "18% recommendation improvement",
      ],
    },
    {
      title: "RealChat",
      tag: "Full-Stack / Real-Time",
      period: "Sep 2025 - Dec 2025",
      stack: ["Node.js", "TypeScript", "Socket.IO", "Redis", "Zod"],
      summary:
        "Typed real-time chat with multi-room support and safe message handling.",
      outcome:
        "Reliable event flow with validated sockets.",
      repo: "https://github.com/Arcestor",
      previewLabel: "Room fan-out",
      previewCaption: "Typed sockets and Redis-backed coordination keep room state in sync.",
      accentFrom: "#60a5fa",
      accentTo: "#a78bfa",
      highlights: [
        "Multi-room messaging architecture",
        "Redis-backed real-time coordination",
        "Zod validation + XSS sanitization",
      ],
    },
    {
      title: "Form Builder",
      tag: "Frontend / DX",
      period: "Nov 2025 - Present",
      stack: ["React", "Next.js", "TypeScript", "Tailwind", "Zod", "ShadCN"],
      summary:
        "Dynamic form builder with validation, SSR, and faster authoring.",
      outcome:
        "Live preview and reusable schema patterns.",
      repo: "https://github.com/Arcestor",
      previewLabel: "Schema canvas",
      previewCaption: "Field config, validation, and output stay synced in one authoring surface.",
      accentFrom: "#2dd4bf",
      accentTo: "#e879f9",
      highlights: [
        "Schema-driven field builders",
        "SSR-friendly form rendering",
        "Cleaner authoring workflow",
      ],
    },
  ] satisfies ProjectItem[],
  experience: [
    {
      company: "Agnirva AI",
      title: "Agnirva AI Internship",
      role: "AI Intern",
      location: "Remote",
      period: "May 2025 - Jun 2025",
      highlights: [
        "Built end-to-end ML pipelines covering data cleaning, feature engineering, training, and evaluation.",
        "Implemented supervised learning workflows with Python, NumPy, Pandas, and scikit-learn.",
        "Ran exploratory analysis to surface data quality issues, patterns, and modeling opportunities.",
        "Compared model and hyperparameter choices to improve reliability and generalization.",
      ],
    },
  ] satisfies ExperienceItem[],
  certifications: [
    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      summary: "Foundation in Azure AI concepts, services, and responsible AI workflows.",
    },
    {
      title: "Infosys Springboard AI-First SE",
      issuer: "Infosys Springboard",
      summary: "Coursework centered on building software systems with AI-first development practices.",
    },
  ] satisfies CertificationItem[],
} as const;
