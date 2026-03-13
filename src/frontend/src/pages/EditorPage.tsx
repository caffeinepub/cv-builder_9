import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, Plus, Save, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CVPreview from "../components/CVPreview";
import { PLACEHOLDER_CV } from "../data/placeholder";
import { useGetCV, useUpdateCV } from "../hooks/useQueries";
import { useTemplateStore } from "../store/templateStore";
import { TEMPLATE_NAMES } from "../types/cv";
import type { CV, EducationEntry, ExperienceEntry } from "../types/cv";

export default function EditorPage() {
  const { data: backendCV, isLoading } = useGetCV();
  const { mutate: saveCV, isPending: isSaving } = useUpdateCV();
  const { selectedTemplate, setSelectedTemplate } = useTemplateStore();

  const [cv, setCv] = useState<CV>({
    ...PLACEHOLDER_CV,
    selectedTemplate: BigInt(selectedTemplate),
  });
  const [newSkill, setNewSkill] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (backendCV) {
      setCv(backendCV);
      setSelectedTemplate(Number(backendCV.selectedTemplate));
    }
  }, [backendCV, setSelectedTemplate]);

  useEffect(() => {
    setCv((prev) => ({ ...prev, selectedTemplate: BigInt(selectedTemplate) }));
  }, [selectedTemplate]);

  const updateField = <K extends keyof CV>(key: K, value: CV[K]) => {
    setCv((prev) => ({ ...prev, [key]: value }));
  };

  const updateExperience = (
    index: number,
    field: keyof ExperienceEntry,
    value: string,
  ) => {
    setCv((prev) => ({
      ...prev,
      experience: prev.experience.map((e, i) =>
        i === index ? { ...e, [field]: value } : e,
      ),
    }));
  };

  const addExperience = () => {
    setCv((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { role: "", company: "", dateRange: "", description: "" },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setCv((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const updateEducation = (
    index: number,
    field: keyof EducationEntry,
    value: string,
  ) => {
    setCv((prev) => ({
      ...prev,
      education: prev.education.map((e, i) =>
        i === index ? { ...e, [field]: value } : e,
      ),
    }));
  };

  const addEducation = () => {
    setCv((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: "", school: "", year: "", description: "" },
      ],
    }));
  };

  const removeEducation = (index: number) => {
    setCv((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const addSkill = () => {
    const trimmed = newSkill.trim();
    if (!trimmed || cv.skills.includes(trimmed)) return;
    setCv((prev) => ({ ...prev, skills: [...prev.skills, trimmed] }));
    setNewSkill("");
  };

  const removeSkill = (skill: string) => {
    setCv((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  const handleSave = () => {
    saveCV(
      { cv, templateId: selectedTemplate },
      {
        onSuccess: () => {
          toast.success("CV saved successfully!");
          setSaved(true);
          setTimeout(() => setSaved(false), 3000);
        },
        onError: () => {
          toast.error("Failed to save CV. Please try again.");
        },
      },
    );
  };

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        data-ocid="editor.loading_state"
      >
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="border-b border-border bg-card px-6 py-3 flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-xl text-foreground">
            CV Editor
          </h1>
          <p className="text-xs text-muted-foreground">
            Changes update the preview instantly
          </p>
        </div>

        {/* Template selector */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs text-muted-foreground mr-1">Template:</span>
          {[1, 2, 3, 4, 5].map((id) => (
            <button
              type="button"
              key={id}
              onClick={() => setSelectedTemplate(id)}
              data-ocid={`editor.template_select.${id}`}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                selectedTemplate === id
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              }`}
            >
              {TEMPLATE_NAMES[id]}
            </button>
          ))}
        </div>

        <Button
          onClick={handleSave}
          disabled={isSaving}
          data-ocid="editor.save_button"
          className={`font-semibold min-w-[120px] ${
            saved
              ? "bg-green-600 hover:bg-green-600 text-white"
              : "bg-accent text-accent-foreground hover:bg-accent/90"
          }`}
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...
            </>
          ) : saved ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" /> Saved!
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" /> Save CV
            </>
          )}
        </Button>
      </div>

      {/* Main editor area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel */}
        <div className="w-full md:w-[400px] border-r border-border flex-shrink-0 flex flex-col">
          <ScrollArea className="flex-1">
            <div className="p-6">
              <Tabs defaultValue="personal">
                <TabsList className="w-full grid grid-cols-4 mb-6">
                  <TabsTrigger
                    value="personal"
                    data-ocid="editor.personal_tab"
                    className="text-xs"
                  >
                    Personal
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    data-ocid="editor.experience_tab"
                    className="text-xs"
                  >
                    Work
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    data-ocid="editor.education_tab"
                    className="text-xs"
                  >
                    Education
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    data-ocid="editor.skills_tab"
                    className="text-xs"
                  >
                    Skills
                  </TabsTrigger>
                </TabsList>

                {/* Personal Tab */}
                <TabsContent value="personal" className="space-y-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="fullName"
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      data-ocid="editor.name_input"
                      value={cv.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="Alexandra Johnson"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="jobTitle"
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      Job Title
                    </Label>
                    <Input
                      id="jobTitle"
                      data-ocid="editor.jobtitle_input"
                      value={cv.jobTitle}
                      onChange={(e) => updateField("jobTitle", e.target.value)}
                      placeholder="Senior Product Designer"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="summary"
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      Summary
                    </Label>
                    <Textarea
                      id="summary"
                      data-ocid="editor.summary_textarea"
                      value={cv.summary}
                      onChange={(e) => updateField("summary", e.target.value)}
                      placeholder="A brief professional summary..."
                      rows={4}
                    />
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        value={cv.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@email.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        value={cv.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="location"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        Location
                      </Label>
                      <Input
                        id="location"
                        value={cv.location}
                        onChange={(e) =>
                          updateField("location", e.target.value)
                        }
                        placeholder="City, Country"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="website"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        Website
                      </Label>
                      <Input
                        id="website"
                        value={cv.website}
                        onChange={(e) => updateField("website", e.target.value)}
                        placeholder="yourwebsite.com"
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Experience Tab */}
                <TabsContent value="experience" className="space-y-6">
                  {cv.experience.map((exp, i) => (
                    <div
                      key={`${exp.role}-${exp.company}-${i}`}
                      className="rounded-xl border border-border p-4 space-y-3 relative"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                          Position {i + 1}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeExperience(i)}
                          className="h-7 w-7 text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">
                            Role / Title
                          </Label>
                          <Input
                            value={exp.role}
                            onChange={(e) =>
                              updateExperience(i, "role", e.target.value)
                            }
                            placeholder="Job Title"
                            className="h-8 text-sm"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">
                            Company
                          </Label>
                          <Input
                            value={exp.company}
                            onChange={(e) =>
                              updateExperience(i, "company", e.target.value)
                            }
                            placeholder="Company Name"
                            className="h-8 text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">
                          Date Range
                        </Label>
                        <Input
                          value={exp.dateRange}
                          onChange={(e) =>
                            updateExperience(i, "dateRange", e.target.value)
                          }
                          placeholder="2021 – Present"
                          className="h-8 text-sm"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">
                          Description
                        </Label>
                        <Textarea
                          value={exp.description}
                          onChange={(e) =>
                            updateExperience(i, "description", e.target.value)
                          }
                          placeholder="Describe your role and achievements..."
                          rows={3}
                          className="text-sm"
                        />
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={addExperience}
                    data-ocid="editor.add_experience_button"
                    className="w-full border-dashed"
                  >
                    <Plus className="w-4 h-4 mr-2" /> Add Experience
                  </Button>
                </TabsContent>

                {/* Education Tab */}
                <TabsContent value="education" className="space-y-6">
                  {cv.education.map((edu, i) => (
                    <div
                      key={`${edu.degree}-${edu.school}-${i}`}
                      className="rounded-xl border border-border p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                          Entry {i + 1}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeEducation(i)}
                          className="h-7 w-7 text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="col-span-2 space-y-1">
                          <Label className="text-xs text-muted-foreground">
                            Degree
                          </Label>
                          <Input
                            value={edu.degree}
                            onChange={(e) =>
                              updateEducation(i, "degree", e.target.value)
                            }
                            placeholder="B.S. Computer Science"
                            className="h-8 text-sm"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">
                            School
                          </Label>
                          <Input
                            value={edu.school}
                            onChange={(e) =>
                              updateEducation(i, "school", e.target.value)
                            }
                            placeholder="University Name"
                            className="h-8 text-sm"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">
                            Year
                          </Label>
                          <Input
                            value={edu.year}
                            onChange={(e) =>
                              updateEducation(i, "year", e.target.value)
                            }
                            placeholder="2020"
                            className="h-8 text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">
                          Description
                        </Label>
                        <Textarea
                          value={edu.description}
                          onChange={(e) =>
                            updateEducation(i, "description", e.target.value)
                          }
                          placeholder="Notable achievements, honors, GPA..."
                          rows={2}
                          className="text-sm"
                        />
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={addEducation}
                    data-ocid="editor.add_education_button"
                    className="w-full border-dashed"
                  >
                    <Plus className="w-4 h-4 mr-2" /> Add Education
                  </Button>
                </TabsContent>

                {/* Skills Tab */}
                <TabsContent value="skills" className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Add Skill
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addSkill()}
                        placeholder="e.g. Figma, React, Leadership..."
                        className="flex-1"
                      />
                      <Button
                        onClick={addSkill}
                        data-ocid="editor.add_skill_button"
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cv.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="cursor-pointer hover:bg-destructive/10 hover:text-destructive transition-colors pr-1.5 pl-3 py-1.5 text-sm"
                        onClick={() => removeSkill(skill)}
                      >
                        {skill}
                        <span className="ml-1.5 text-muted-foreground">×</span>
                      </Badge>
                    ))}
                  </div>
                  {cv.skills.length === 0 && (
                    <p
                      className="text-sm text-muted-foreground text-center py-8"
                      data-ocid="editor.skills.empty_state"
                    >
                      No skills added yet. Start typing above!
                    </p>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </div>

        {/* Right preview panel */}
        <div className="hidden md:flex flex-1 flex-col bg-muted/30">
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-card">
            <span className="text-sm font-semibold text-foreground">
              Live Preview
            </span>
            <span className="text-xs text-muted-foreground">
              {TEMPLATE_NAMES[selectedTemplate]} Template
            </span>
          </div>
          <ScrollArea className="flex-1 p-8">
            <div
              data-ocid="editor.canvas_target"
              className="bg-white shadow-card-hover rounded-xl overflow-hidden"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              <CVPreview cv={cv} />
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-4 px-6">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
