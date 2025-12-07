import React, { useState, useEffect } from "react";

// =======================
//  Skill Data (Full List)
// =======================
const allSkills = [
  { icon: "bxl-html5", name: "HTML", level: "Intermediate" },
  { icon: "bxl-css3", name: "CSS", level: "Intermediate" },
  { icon: "bxl-javascript", name: "JavaScript", level: "Basic" },
  { icon: "bxl-react", name: "React", level: "Basic" },
  { icon: "bxl-java", name: "Java", level: "Intermediate" },
  { icon: "bxl-c-plus-plus", name: "C++", level: "Basic" },
  { icon: "bxl-python", name: "Python", level: "Basic" },
  { icon: "mysql", name: "MySQL", level: "Intermediate", isSvg: true },
  { name: "Spring Boot", level: "Basic", isSpring: true },
  { icon: "bx-cloud", name: "REST APIs", level: "Intermediate" },
  { icon: "bx-bot", name: "RPA Automation", level: "Basic" },
];

// =======================
//  Icons
// =======================
const MySQLIcon = () => (
  <svg width="24" height="24" viewBox="0 0 64 64" fill="currentColor">
    <path d="M47.7 22.5c-2.6-6.1-7.8-10.3-13.4-13.3-3.9-2-9-3.5-13.4-3.2-2.3.2-4.6.9-6.2 2.5-.9 1-.9 2.6-.4 3.8.5 1.3 1.5 2.3 2.5 3.3 1.4 1.3 2.9 2.3 4.4 3.4l.8.6c-1.4 2.8-1.9 6-1.3 9.1.6 3.1 2.3 6 4.6 8.1 1.4 1.3 3.1 2.3 5 2.7 1.9.4 4 .3 5.7-.5 1.8-.9 3.1-2.7 3.8-4.6.7-1.9.8-4 .8-6-.1-3.2-.7-6.5-2.2-9.4z"/>
  </svg>
);

const SpringBootIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M128 16 24 74v108l104 58 104-58V74Zm0 14.3L215.3 74 128 131.7 40.7 74ZM40 86.1l84 47a8 8 0 0 0 7.9 0l84-47v87.8L128 226 40 173.9Z" />
    <path d="M128 104a26 26 0 1 1-26 26 26 26 0 0 1 26-26m0-12a38 38 0 1 0 38 38 38 38 0 0 0-38-38Zm6-30h-12v26h12Z" />
  </svg>
);

// =======================
//  MAIN COMPONENT
// =======================
const ProfessionalSkills = () => {
  const [expanded, setExpanded] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 576;

  // visibility rules
  const desktopVisibleCount = 6;
  const mobileVisibleCount = 4;

  const visibleSkills = expanded
    ? allSkills
    : isMobile
    ? allSkills.slice(0, mobileVisibleCount)
    : allSkills.slice(0, desktopVisibleCount);

  // Desktop → split into two columns
  const half = Math.ceil(visibleSkills.length / 2);
  const col1 = visibleSkills.slice(0, half);
  const col2 = visibleSkills.slice(half);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Professional Skills</h3>

      <div className="skills__box">
        {!isMobile ? (
          <>
            <div className="skills__group">
              {col1.map((skill, i) => (
                <SkillItem key={i} skill={skill} />
              ))}
            </div>

            <div className="skills__group">
              {col2.map((skill, i) => (
                <SkillItem key={i} skill={skill} />
              ))}
            </div>
          </>
        ) : (
          <div className="skills__group">
            {visibleSkills.map((skill, i) => (
              <SkillItem key={i} skill={skill} />
            ))}
          </div>
        )}
      </div>

      {/* VIEW MORE / LESS BUTTON */}
      <div style={{ textAlign: "right", marginTop: "1.2rem" }}>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--title-color)",
            fontSize: "0.95rem",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {expanded ? (
            <>
              View Less <span>←</span>
            </>
          ) : (
            <>
              View More <span>→</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// Component for rendering each skill
const SkillItem = ({ skill }) => (
  <div className="skills__data">
    {skill.isSpring ? (
      <SpringBootIcon />
    ) : skill.isSvg ? (
      <MySQLIcon />
    ) : (
      <i className={`bx ${skill.icon}`}></i>
    )}

    <div>
      <h3 className="skills__name">{skill.name}</h3>
      <span className="skills__level">{skill.level}</span>
    </div>
  </div>
);

export default ProfessionalSkills;
