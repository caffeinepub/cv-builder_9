import type { CV } from "../types/cv";

export const PLACEHOLDER_CV: CV = {
  fullName: "Alexandra Johnson",
  jobTitle: "Senior Product Designer",
  summary:
    "Creative and strategic product designer with 8+ years of experience crafting user-centered digital experiences. Passionate about turning complex problems into elegant, intuitive solutions.",
  email: "alex.johnson@email.com",
  phone: "+1 (555) 234-5678",
  location: "San Francisco, CA",
  website: "alexjohnson.design",
  experience: [
    {
      role: "Senior Product Designer",
      company: "TechVision Inc.",
      dateRange: "2021 – Present",
      description:
        "Led end-to-end design for flagship SaaS platform serving 500K+ users. Increased user retention by 32% through redesigned onboarding flow.",
    },
    {
      role: "UX Designer",
      company: "Creative Studio Co.",
      dateRange: "2018 – 2021",
      description:
        "Designed mobile-first experiences for 15+ client projects. Collaborated with cross-functional teams to deliver pixel-perfect interfaces.",
    },
    {
      role: "Junior Designer",
      company: "Startup Labs",
      dateRange: "2016 – 2018",
      description:
        "Created wireframes, prototypes, and visual designs for early-stage startups across fintech and e-commerce verticals.",
    },
  ],
  education: [
    {
      degree: "B.F.A. Graphic Design",
      school: "California Institute of the Arts",
      year: "2016",
      description:
        "Graduated with honors. Focus on interaction design and typography.",
    },
    {
      degree: "UX Research Certificate",
      school: "Nielsen Norman Group",
      year: "2019",
      description: "Advanced certification in user research methodologies.",
    },
  ],
  skills: [
    "Figma",
    "Sketch",
    "Adobe XD",
    "Prototyping",
    "User Research",
    "Design Systems",
    "Wireframing",
    "HTML/CSS",
    "Agile/Scrum",
    "Accessibility",
  ],
  selectedTemplate: 1n,
};
