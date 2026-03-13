import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import CVPreview from "../components/CVPreview";
import { PLACEHOLDER_CV } from "../data/placeholder";
import { useTemplateStore } from "../store/templateStore";
import { TEMPLATE_NAMES } from "../types/cv";

const TEMPLATE_DESCRIPTIONS: Record<number, string> = {
  1: "Traditional layout with navy accents. Perfect for finance, law, and corporate roles.",
  2: "Bold teal accents with clean lines. Ideal for tech, design, and modern industries.",
  3: "Ultra-clean whitespace-driven design. Great for creatives who let their work speak.",
  4: "Vibrant sidebar with personality. Perfect for marketing, media, and creative fields.",
  5: "Dark, luxurious header with gold accents. Made for executives and senior leadership.",
};

const TEMPLATE_TAGS: Record<number, string[]> = {
  1: ["Corporate", "Traditional", "Serif"],
  2: ["Modern", "Tech", "Clean"],
  3: ["Minimal", "Whitespace", "Elegant"],
  4: ["Creative", "Colorful", "Bold"],
  5: ["Executive", "Premium", "Luxury"],
};

export default function TemplatesPage() {
  const navigate = useNavigate();
  const { selectedTemplate, setSelectedTemplate } = useTemplateStore();

  const handleUseTemplate = (id: number) => {
    setSelectedTemplate(id);
    navigate({ to: "/editor" });
  };

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1
            className="font-display text-5xl font-bold text-foreground mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            CV Templates
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Five professionally designed templates to match your personal style
            and industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5].map((id, i) => {
            const cv = { ...PLACEHOLDER_CV, selectedTemplate: BigInt(id) };
            const isActive = selectedTemplate === id;
            const ocidIndex = i + 1;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`templates.item.${ocidIndex}`}
                className={`group rounded-2xl overflow-hidden border-2 bg-card shadow-card hover:shadow-card-hover transition-all ${
                  isActive
                    ? "border-accent"
                    : "border-border hover:border-primary/40"
                }`}
              >
                {/* Preview */}
                <div
                  className="relative overflow-hidden bg-white"
                  style={{ height: "340px" }}
                >
                  {isActive && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Active
                      </div>
                    </div>
                  )}
                  <CVPreview cv={cv} scale={0.428} />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {TEMPLATE_NAMES[id]}
                    </h3>
                    <span className="text-xs text-muted-foreground font-medium">
                      Template {id}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {TEMPLATE_DESCRIPTIONS[id]}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {TEMPLATE_TAGS[id].map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    onClick={() => handleUseTemplate(id)}
                    data-ocid={`templates.use_button.${ocidIndex}`}
                    className={`w-full font-semibold ${
                      isActive
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {isActive ? "Currently Active" : "Use This Template"}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
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
        </div>
      </footer>
    </main>
  );
}
