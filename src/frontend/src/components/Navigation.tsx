import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { FileText } from "lucide-react";

export default function Navigation() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", ocid: "nav.home_link" },
    { to: "/templates", label: "Templates", ocid: "nav.templates_link" },
    { to: "/editor", label: "Editor", ocid: "nav.editor_link" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <FileText className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-semibold text-lg text-foreground tracking-tight">
            CV<span className="text-accent">Craft</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/editor">
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            Build My CV
          </Button>
        </Link>
      </div>
    </header>
  );
}
