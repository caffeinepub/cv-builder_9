export interface ExperienceEntry {
  role: string;
  description: string;
  company: string;
  dateRange: string;
}

export interface EducationEntry {
  school: string;
  year: string;
  description: string;
  degree: string;
}

export interface CV {
  education: EducationEntry[];
  fullName: string;
  email: string;
  website: string;
  experience: ExperienceEntry[];
  summary: string;
  selectedTemplate: bigint;
  jobTitle: string;
  phone: string;
  skills: string[];
  location: string;
}

export type TemplateId = 1 | 2 | 3 | 4 | 5;

export const TEMPLATE_NAMES: Record<number, string> = {
  1: "Classic",
  2: "Modern",
  3: "Minimal",
  4: "Creative",
  5: "Executive",
};
