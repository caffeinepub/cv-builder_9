import type { CV } from "../../types/cv";

interface Props {
  cv: CV;
}

// Creative Template - Colorful left sidebar, vibrant purple, photo placeholder
export default function CVTemplate4({ cv }: Props) {
  return (
    <div
      style={{
        fontFamily: '"Inter", "Helvetica Neue", sans-serif',
        background: "white",
        width: "794px",
        minHeight: "1123px",
        display: "flex",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background: "linear-gradient(180deg, #4F46E5 0%, #7C3AED 100%)",
          padding: "40px 24px",
          flexShrink: 0,
          color: "white",
        }}
      >
        <div
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            margin: "0 auto 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid rgba(255,255,255,0.4)",
          }}
        >
          <span style={{ fontSize: "28px", color: "rgba(255,255,255,0.6)" }}>
            👤
          </span>
        </div>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "white",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {cv.fullName || "Your Name"}
        </h1>
        <p
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
            margin: "6px 0 24px",
            letterSpacing: "0.5px",
          }}
        >
          {cv.jobTitle || "Professional Title"}
        </p>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "20px",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              margin: "0 0 10px",
            }}
          >
            Contact
          </h3>
          {cv.email && (
            <p
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.85)",
                margin: "0 0 5px",
                wordBreak: "break-all",
              }}
            >
              {cv.email}
            </p>
          )}
          {cv.phone && (
            <p
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.85)",
                margin: "0 0 5px",
              }}
            >
              {cv.phone}
            </p>
          )}
          {cv.location && (
            <p
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.85)",
                margin: "0 0 5px",
              }}
            >
              {cv.location}
            </p>
          )}
          {cv.website && (
            <p
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.85)",
                margin: 0,
                wordBreak: "break-all",
              }}
            >
              {cv.website}
            </p>
          )}
        </div>

        {cv.skills.length > 0 && (
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              paddingTop: "20px",
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "10px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                margin: "0 0 10px",
              }}
            >
              Skills
            </h3>
            {cv.skills.map((skill, skillIdx) => (
              <div key={skill} style={{ marginBottom: "6px" }}>
                <p
                  style={{
                    fontSize: "10px",
                    color: "white",
                    margin: "0 0 3px",
                  }}
                >
                  {skill}
                </p>
                <div
                  style={{
                    height: "3px",
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: "2px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${75 + (skillIdx % 3) * 8}%`,
                      background: "rgba(255,255,255,0.7)",
                      borderRadius: "2px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {cv.education.length > 0 && (
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              paddingTop: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "10px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                margin: "0 0 10px",
              }}
            >
              Education
            </h3>
            {cv.education.map((edu) => (
              <div key={edu.degree} style={{ marginBottom: "10px" }}>
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "white",
                    margin: 0,
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.7)",
                    margin: "2px 0 0",
                  }}
                >
                  {edu.school} · {edu.year}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "40px 32px" }}>
        {cv.summary && (
          <div style={{ marginBottom: "28px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "3px",
                  background: "#4F46E5",
                  borderRadius: "2px",
                }}
              />
              <h2
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#4F46E5",
                  margin: 0,
                }}
              >
                About Me
              </h2>
            </div>
            <p
              style={{
                fontSize: "11px",
                lineHeight: 1.8,
                color: "#4B5563",
                margin: 0,
              }}
            >
              {cv.summary}
            </p>
          </div>
        )}

        {cv.experience.length > 0 && (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "3px",
                  background: "#4F46E5",
                  borderRadius: "2px",
                }}
              />
              <h2
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#4F46E5",
                  margin: 0,
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
                  paddingLeft: "12px",
                  borderLeft: "3px solid #EDE9FE",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#1F2937",
                      margin: 0,
                    }}
                  >
                    {exp.role}
                  </p>
                  <span
                    style={{
                      fontSize: "9px",
                      color: "white",
                      background: "#4F46E5",
                      padding: "2px 7px",
                      borderRadius: "100px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.dateRange}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#7C3AED",
                    fontWeight: 600,
                    margin: "2px 0 4px",
                  }}
                >
                  {exp.company}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#6B7280",
                    margin: 0,
                    lineHeight: 1.7,
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
  );
}
