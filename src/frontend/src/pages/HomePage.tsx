import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Download,
  Eye,
  Layers,
  Palette,
} from "lucide-react";
import { motion } from "motion/react";
import CVPreview from "../components/CVPreview";
import { PLACEHOLDER_CV } from "../data/placeholder";
import { TEMPLATE_NAMES } from "../types/cv";

const features = [
  {
    icon: Layers,
    title: "5 Pro Templates",
    desc: "Choose from Classic, Modern, Minimal, Creative, and Executive designs crafted for every industry.",
  },
  {
    icon: Eye,
    title: "Live Preview",
    desc: "See your CV update in real-time as you type. No surprises when you export.",
  },
  {
    icon: Download,
    title: "Export Ready",
    desc: "Download print-ready PDFs or share a direct link to your professional profile.",
  },
  {
    icon: Palette,
    title: "Clean Design",
    desc: "Every template is crafted by designers to be ATS-friendly and visually stunning.",
  },
];

export default function HomePage() {
  const templates = [1, 2, 3, 4, 5].map((id) => ({
    id,
    name: TEMPLATE_NAMES[id],
    cv: { ...PLACEHOLDER_CV, selectedTemplate: BigInt(id) },
  }));

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.04 265) 0%, oklch(0.18 0.05 270) 60%, oklch(0.14 0.06 255) 100%)",
          minHeight: "88vh",
        }}
      >
        <img
          src="/assets/generated/cv-hero-bg.dim_1600x800.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative container mx-auto px-6 flex flex-col items-center justify-center text-center pt-28 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/40 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              Professional CV Builder
            </span>
            <h1
              className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
              style={{ letterSpacing: "-1.5px" }}
            >
              Build Your
              <br />
              <span style={{ color: "oklch(0.72 0.16 55)" }}>Perfect CV</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Create a stunning, professional CV in minutes. Choose from 5
              expertly crafted templates and land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/templates">
                <Button
                  size="lg"
                  data-ocid="hero.primary_button"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 h-auto"
                >
                  Browse Templates <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/editor">
                <Button
                  size="lg"
                  variant="outline"
                  data-ocid="hero.secondary_button"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 py-6 h-auto bg-transparent"
                >
                  Start Editing <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Built for job seekers who want to make a lasting impression.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-xl border border-border bg-card shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Strip */}
      <section
        className="py-24"
        style={{ background: "oklch(0.96 0.003 260)" }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              5 Stunning Templates
            </h2>
            <p className="text-muted-foreground text-lg">
              Each template is crafted for a different personal style.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {templates.map((tmpl, i) => (
              <motion.div
                key={tmpl.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group"
              >
                <Link to="/templates">
                  <div className="rounded-xl overflow-hidden border-2 border-border bg-white shadow-card hover:shadow-card-hover hover:border-accent transition-all cursor-pointer">
                    <div
                      className="overflow-hidden"
                      style={{ height: "200px" }}
                    >
                      <CVPreview cv={tmpl.cv} scale={0.253} />
                    </div>
                    <div className="p-3 border-t border-border">
                      <p className="text-xs font-semibold text-center text-foreground">
                        {tmpl.name}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/templates">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                View All Templates <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
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
