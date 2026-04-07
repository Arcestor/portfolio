export type EducationItem = {
  label: string;
  institution: string;
  year: string;
};

export type ProjectItem = {
  title: string;
  period: string;
  stack: string[];
  summary: string;
  highlights: string[];
};

export type ExperienceItem = {
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
  email: "221b308@juetguna.in",
  phone: "+91-9304795181",
  github: "https://github.com/Arcestor",
  linkedin: "https://linkedin.com/in/rohan-kumar-595415276",
  location: "Guna, India",
  title: "Computer Science Student",
  tagline: "CS student | ML & Full-Stack Developer | Building intelligent systems",
  heroSubtitle: "CS student at JUET Guna / ML / Full-Stack / AI",
  summary:
    "Final year CS student at JUET Guna (2026), passionate about building ML systems and full-stack web apps. Currently exploring federated learning, real-time applications, and AI-integrated software.",
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
      title: "Dynamic Form Creation and Validation Platform",
      period: "Nov 2025 - Present",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "shadcn/ui"],
      summary:
        "Built a dynamic form-building platform enabling users to create, customize, and preview complex forms with instant validation feedback.",
      highlights: [
        "Handled multiple input types including text, checkbox, radio, and select.",
        "Implemented real-time schema-based validation with Zod.",
        "Used server-side rendering patterns for performance and SEO.",
      ],
    },
    {
      title: "RealChat: Production-Grade Real Time Chat Application",
      period: "Sep 2025 - Dec 2025",
      stack: ["Node.js", "Express", "TypeScript", "Socket.IO", "React", "Zod"],
      summary:
        "Designed a typed real-time chat system with robust room management, event-driven communication, and security-focused validation.",
      highlights: [
        "Built private room support with active user tracking.",
        "Enforced strict TypeScript contracts and input sanitization.",
        "Optimized event flow for stable real-time delivery.",
      ],
    },
    {
      title:
        "Federated Learning using MCP: Privacy-Preserving Collaborative Model Training",
      period: "Jan 2024 - Present",
      stack: ["Python", "PyTorch", "gRPC", "Docker", "MCP"],
      summary:
        "Implemented a decentralized training framework using MCP to coordinate privacy-preserving client-server model updates.",
      highlights: [
        "Managed distributed communication with PyTorch and gRPC.",
        "Integrated Model Context Protocol to coordinate model updates.",
        "Simulated deployment environments with Docker containers.",
      ],
    },
    {
      title: "Fashion Recommendation System",
      period: "Sep 2023 - Dec 2023",
      stack: ["Python", "scikit-learn", "Flask", "AWS"],
      summary:
        "Built an ML-based outfit recommendation engine using collaborative and content-based filtering.",
      highlights: [
        "Deployed a Flask API on AWS with real-time prediction support.",
        "Improved recommendation accuracy through iterative model tuning.",
        "Focused on scalable architecture for personalized suggestions.",
      ],
    },
  ] satisfies ProjectItem[],
  experience: [
    {
      title: "Agnirva AI Internship Program - Summer 2025",
      role: "AI Intern",
      location: "Remote",
      period: "May 2025 - Jun 2025",
      highlights: [
        "Built end-to-end ML pipelines covering data cleaning, feature engineering, training, and performance evaluation.",
        "Implemented supervised learning workflows in Python with NumPy, Pandas, and scikit-learn.",
        "Conducted exploratory data analysis to identify patterns, missing values, and reliability improvements.",
        "Experimented with multiple models and hyperparameters to improve generalization.",
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
