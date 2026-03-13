import type { CV } from "../../types/cv";

interface Props {
  cv: CV;
}

// Classic Template - Traditional two-column, navy/white, serif-style headings, formal look
export default function CVTemplate1({ cv }: Props) {
  return (
    <div
      style={{
        fontFamily: '"Georgia", "Times New Roman", serif',
        background: "#FAFAF8",
        width: "794px",
        minHeight: "1123px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#1B2A4A",
          color: "white",
          padding: "40px 48px",
          borderBottom: "4px solid #C9A84C",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 700,
            letterSpacing: "0.5px",
            margin: 0,
            marginBottom: "6px",
          }}
        >
          {cv.fullName || "Your Full Name"}
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#C9A84C",
            margin: 0,
            fontStyle: "italic",
            letterSpacing: "1px",
          }}
        >
          {cv.jobTitle || "Professional Title"}
        </p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "12px",
            flexWrap: "wrap",
          }}
        >
          {cv.email && (
            <span style={{ fontSize: "11px", color: "#B8C4D4" }}>
              ✉ {cv.email}
            </span>
          )}
          {cv.phone && (
            <span style={{ fontSize: "11px", color: "#B8C4D4" }}>
              ✆ {cv.phone}
            </span>
          )}
          {cv.location && (
            <span style={{ fontSize: "11px", color: "#B8C4D4" }}>
              ⊙ {cv.location}
            </span>
          )}
          {cv.website && (
            <span style={{ fontSize: "11px", color: "#B8C4D4" }}>
              ⊕ {cv.website}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div
          style={{
            width: "230px",
            background: "#EDF0F5",
            padding: "32px 24px",
            flexShrink: 0,
          }}
        >
          {cv.summary && (
            <div style={{ marginBottom: "28px" }}>
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#1B2A4A",
                  marginBottom: "10px",
                  borderBottom: "2px solid #C9A84C",
                  paddingBottom: "6px",
                }}
              >
                Profile
              </h3>
              <p
                style={{ fontSize: "11px", lineHeight: 1.7, color: "#374151" }}
              >
                {cv.summary}
              </p>
            </div>
          )}

          {cv.skills.length > 0 && (
            <div style={{ marginBottom: "28px" }}>
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#1B2A4A",
                  marginBottom: "10px",
                  borderBottom: "2px solid #C9A84C",
                  paddingBottom: "6px",
                }}
              >
                Skills
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                {cv.skills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      fontSize: "11px",
                      color: "#374151",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span style={{ color: "#C9A84C", fontWeight: 700 }}>•</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}

          {cv.education.length > 0 && (
            <div>
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#1B2A4A",
                  marginBottom: "10px",
                  borderBottom: "2px solid #C9A84C",
                  paddingBottom: "6px",
                }}
              >
                Education
              </h3>
              {cv.education.map((edu) => (
                <div key={edu.degree} style={{ marginBottom: "14px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#1B2A4A",
                      margin: 0,
                      marginBottom: "2px",
                    }}
                  >
                    {edu.degree}
                  </p>
                  <p style={{ fontSize: "10px", color: "#6B7280", margin: 0 }}>
                    {edu.school}
                  </p>
                  <p
                    style={{
                      fontSize: "10px",
                      color: "#C9A84C",
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: "32px 36px" }}>
          {cv.experience.length > 0 && (
            <div>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#1B2A4A",
                  marginBottom: "16px",
                  borderBottom: "2px solid #1B2A4A",
                  paddingBottom: "8px",
                }}
              >
                Professional Experience
              </h3>
              {cv.experience.map((exp) => (
                <div
                  key={exp.role + exp.company}
                  style={{ marginBottom: "22px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "#1B2A4A",
                          margin: 0,
                        }}
                      >
                        {exp.role}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#C9A84C",
                          margin: 0,
                          fontStyle: "italic",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: "10px",
                        background: "#1B2A4A",
                        color: "white",
                        padding: "2px 8px",
                        borderRadius: "2px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.dateRange}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "11px",
                      lineHeight: 1.7,
                      color: "#4B5563",
                      margin: "6px 0 0",
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
