import type { CV } from "../../types/cv";

interface Props {
  cv: CV;
}

// Modern Template - Clean single column, teal accent, geometric dividers
export default function CVTemplate2({ cv }: Props) {
  const contactItems = [cv.email, cv.phone, cv.location, cv.website].filter(
    Boolean,
  ) as string[];

  return (
    <div
      style={{
        fontFamily: '"Inter", "Helvetica Neue", sans-serif',
        background: "white",
        width: "794px",
        minHeight: "1123px",
      }}
    >
      <div
        style={{
          height: "6px",
          background: "linear-gradient(90deg, #0D9488 0%, #06B6D4 100%)",
        }}
      />

      <div style={{ padding: "40px 52px" }}>
        <div style={{ marginBottom: "32px" }}>
          <h1
            style={{
              fontSize: "38px",
              fontWeight: 800,
              color: "#0F172A",
              margin: 0,
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            {cv.fullName || "Your Full Name"}
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#0D9488",
              fontWeight: 600,
              margin: "6px 0 16px",
              letterSpacing: "0.3px",
            }}
          >
            {cv.jobTitle || "Professional Title"}
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {contactItems.map((item) => (
              <span
                key={item}
                style={{
                  fontSize: "11px",
                  color: "#64748B",
                  background: "#F1F5F9",
                  padding: "3px 10px",
                  borderRadius: "100px",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, #0D9488, transparent)",
            marginBottom: "28px",
          }}
        />

        {cv.summary && (
          <div style={{ marginBottom: "28px" }}>
            <p
              style={{
                fontSize: "12px",
                lineHeight: 1.8,
                color: "#475569",
                margin: 0,
              }}
            >
              {cv.summary}
            </p>
          </div>
        )}

        {cv.experience.length > 0 && (
          <div style={{ marginBottom: "28px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  width: "4px",
                  height: "20px",
                  background: "#0D9488",
                  borderRadius: "2px",
                }}
              />
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#0F172A",
                  margin: 0,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                Experience
              </h2>
            </div>
            {cv.experience.map((exp) => (
              <div
                key={exp.role + exp.company}
                style={{
                  marginBottom: "20px",
                  paddingLeft: "14px",
                  borderLeft: "2px solid #E2E8F0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#0F172A",
                        margin: 0,
                      }}
                    >
                      {exp.role}
                    </p>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#0D9488",
                        margin: "2px 0 0",
                        fontWeight: 600,
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#94A3B8",
                      fontWeight: 500,
                    }}
                  >
                    {exp.dateRange}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#475569",
                    marginTop: "6px",
                    lineHeight: 1.7,
                    margin: "6px 0 0",
                  }}
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: "40px" }}>
          {cv.education.length > 0 && (
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "20px",
                    background: "#0D9488",
                    borderRadius: "2px",
                  }}
                />
                <h2
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0F172A",
                    margin: 0,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Education
                </h2>
              </div>
              {cv.education.map((edu) => (
                <div key={edu.degree} style={{ marginBottom: "14px" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#0F172A",
                      margin: 0,
                    }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#0D9488",
                      margin: "2px 0",
                      fontWeight: 600,
                    }}
                  >
                    {edu.school}
                  </p>
                  <p style={{ fontSize: "10px", color: "#94A3B8", margin: 0 }}>
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          )}

          {cv.skills.length > 0 && (
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "20px",
                    background: "#0D9488",
                    borderRadius: "2px",
                  }}
                />
                <h2
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0F172A",
                    margin: 0,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Skills
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {cv.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "10px",
                      color: "#0D9488",
                      border: "1px solid #0D9488",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
