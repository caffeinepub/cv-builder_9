import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
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
    education: Array<EducationEntry>;
    fullName: string;
    email: string;
    website: string;
    experience: Array<ExperienceEntry>;
    summary: string;
    selectedTemplate: bigint;
    jobTitle: string;
    phone: string;
    skills: Array<string>;
    location: string;
}
export interface backendInterface {
    getCV(): Promise<CV | null>;
    getSelectedTemplate(): Promise<bigint>;
    selectTemplate(templateId: bigint): Promise<void>;
    updateCV(fullName: string, jobTitle: string, summary: string, email: string, phone: string, location: string, website: string, education: Array<EducationEntry>, experience: Array<ExperienceEntry>, skills: Array<string>): Promise<void>;
}
