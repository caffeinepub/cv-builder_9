import type { CV } from "../../types/cv";

interface Props {
  cv: CV;
}

// Executive Template - Dark header, gold accents, premium centered layout
export default function CVTemplate5({ cv }: Props) {
  const contactItems = [cv.email, cv.phone, cv.location, cv.website].filter(
    Boolean,
  ) as string[];

  return (
    <div
      style={{
        fontFamily: '"Georgia", "Times New Roman", serif',
        background: "#FFFEF9",
        width: "794px",
        minHeight: "1123px",
      }}
    >
      {/* Dark header */}
      <div
        style={{
          background: "#0A0A0A",
          padding: "48px 60px 36px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
        />
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "5px",
            color: "#C9A84C",
            textTransform: "uppercase",
            margin: "0 0 12px",
          }}
        >
          Curriculum Vitae
        </p>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 400,
            color: "#FFFFFF",
            margin: 0,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          {cv.fullName || "Your Full Name"}
        </h1>
        <div
          style={{
            width: "60px",
            height: "1px",
            background: "#C9A84C",
            margin: "16px auto 12px",
          }}
        />
        <p
          style={{
            fontSize: "13px",
            color: "#D4C5A9",
            margin: 0,
            letterSpacing: "2px",
            fontStyle: "italic",
          }}
        >
          {cv.jobTitle || "Professional Title"}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {contactItems.map((item) => (
            <span
              key={item}
              style={{
                fontSize: "10px",
                color: "#9CA3AF",
                letterSpacing: "0.5px",
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #C9A84C 30%, #C9A84C 70%, transparent)",
          }}
        />
      </div>

      <div style={{ padding: "40px 60px" }}>
        {cv.summary && (
          <div style={{ marginBottom: "36px", textAlign: "center" }}>
            <p
              style={{
                fontSize: "12px",
                lineHeight: 1.9,
                color: "#4B4B4B",
                margin: "0 auto",
                maxWidth: "560px",
                fontStyle: "italic",
              }}
            >
              &ldquo;{cv.summary}&rdquo;
            </p>
          </div>
        )}

        {cv.experience.length > 0 && (
          <div style={{ marginBottom: "32px" }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 600,
                }}
              >
                Professional Experience
              </span>
              <div
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                  marginTop: "8px",
                }}
              />
            </div>
            {cv.experience.map((exp) => (
              <div
                key={exp.role + exp.company}
                style={{
                  marginBottom: "24px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "16px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#0A0A0A",
                      margin: 0,
                      letterSpacing: "0.3px",
                    }}
                  >
                    {exp.role}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#C9A84C",
                      margin: "3px 0 6px",
                      fontStyle: "italic",
                    }}
                  >
                    {exp.company}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      lineHeight: 1.7,
                      color: "#5C5C5C",
                      margin: 0,
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#0A0A0A",
                      background: "#F5F0E8",
                      padding: "4px 10px",
                      borderRadius: "2px",
                      whiteSpace: "nowrap",
                      border: "1px solid #E8DFC8",
                      fontFamily: '"Helvetica Neue", sans-serif',
                    }}
                  >
                    {exp.dateRange}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
        >
          {cv.education.length > 0 && (
            <div>
              <div style={{ textAlign: "center", marginBottom: "16px" }}>
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    fontFamily: '"Helvetica Neue", sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Education
                </span>
                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                    marginTop: "8px",
                  }}
                />
              </div>
              {cv.education.map((edu) => (
                <div key={edu.degree} style={{ marginBottom: "14px" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#0A0A0A",
                      margin: 0,
                    }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#C9A84C",
                      margin: "2px 0",
                      fontStyle: "italic",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{
                      fontSize: "10px",
                      color: "#9CA3AF",
                      margin: 0,
                      fontFamily: '"Helvetica Neue", sans-serif',
                    }}
                  >
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          )}

          {cv.skills.length > 0 && (
            <div>
              <div style={{ textAlign: "center", marginBottom: "16px" }}>
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    fontFamily: '"Helvetica Neue", sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Core Skills
                </span>
                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                    marginTop: "8px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  justifyContent: "center",
                }}
              >
                {cv.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "10px",
                      color: "#4B4B4B",
                      background: "#F5F0E8",
                      padding: "4px 10px",
                      border: "1px solid #E8DFC8",
                      fontFamily: '"Helvetica Neue", sans-serif',
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
