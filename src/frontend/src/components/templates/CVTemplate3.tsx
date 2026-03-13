import type { CV } from "../../types/cv";

interface Props {
  cv: CV;
}

// Minimal Template - Ultra-clean, whitespace, subtle gray, thin lines
export default function CVTemplate3({ cv }: Props) {
  const contactItems = [cv.email, cv.phone, cv.location, cv.website].filter(
    Boolean,
  ) as string[];

  return (
    <div
      style={{
        fontFamily: '"Helvetica Neue", "Arial", sans-serif',
        background: "#FFFFFF",
        width: "794px",
        minHeight: "1123px",
        padding: "60px 72px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ marginBottom: "48px" }}>
        <h1
          style={{
            fontSize: "34px",
            fontWeight: 300,
            color: "#111111",
            margin: 0,
            letterSpacing: "-0.5px",
          }}
        >
          {cv.fullName || "Your Full Name"}
        </h1>
        <p
          style={{
            fontSize: "13px",
            color: "#888888",
            margin: "8px 0 20px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          {cv.jobTitle || "Professional Title"}
        </p>
        <div
          style={{ height: "1px", background: "#E5E5E5", marginBottom: "16px" }}
        />
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {contactItems.map((item) => (
            <span key={item} style={{ fontSize: "11px", color: "#888888" }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {cv.summary && (
        <div style={{ marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "12px",
              lineHeight: 1.9,
              color: "#555555",
              margin: 0,
            }}
          >
            {cv.summary}
          </p>
        </div>
      )}

      {cv.experience.length > 0 && (
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#AAAAAA",
                fontWeight: 500,
              }}
            >
              Experience
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "#E5E5E5",
                marginLeft: "16px",
              }}
            />
          </div>
          {cv.experience.map((exp) => (
            <div
              key={exp.role + exp.company}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "24px",
                marginBottom: "24px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    color: "#AAAAAA",
                    margin: 0,
                    marginBottom: "2px",
                  }}
                >
                  {exp.dateRange}
                </p>
                <p style={{ fontSize: "11px", color: "#888888", margin: 0 }}>
                  {exp.company}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#111111",
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  {exp.role}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#666666",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {cv.education.length > 0 && (
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#AAAAAA",
                fontWeight: 500,
              }}
            >
              Education
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "#E5E5E5",
                marginLeft: "16px",
              }}
            />
          </div>
          {cv.education.map((edu) => (
            <div
              key={edu.degree}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "24px",
                marginBottom: "16px",
              }}
            >
              <p style={{ fontSize: "10px", color: "#AAAAAA", margin: 0 }}>
                {edu.year}
              </p>
              <div>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#111111",
                    margin: 0,
                    marginBottom: "2px",
                  }}
                >
                  {edu.degree}
                </p>
                <p style={{ fontSize: "11px", color: "#888888", margin: 0 }}>
                  {edu.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {cv.skills.length > 0 && (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#AAAAAA",
                fontWeight: 500,
              }}
            >
              Skills
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "#E5E5E5",
                marginLeft: "16px",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "11px",
              color: "#666666",
              margin: 0,
              lineHeight: 1.9,
            }}
          >
            {cv.skills.join(" · ")}
          </p>
        </div>
      )}
    </div>
  );
}
