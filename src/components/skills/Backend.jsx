import React, { useState, useEffect } from "react";

const softSkillsData = [
  { icon: "bx-comment", name: "Communication", level: "Excellent" },
  { icon: "bx-group", name: "Teamwork", level: "Strong" },
  { icon: "bx-cog", name: "Problem Solving", level: "Intermediate" },
  { icon: "bx-brain", name: "Creativity", level: "Intermediate" },
  { icon: "bx-time", name: "Time Management", level: "Strong" },
  { icon: "bx-user-check", name: "Leadership", level: "Good" },
];

function SoftSkills() {
  const [expanded, setExpanded] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 576;

  // Visibility rules
  const desktopVisible = 6; // show all 6 on desktop
  const mobileVisible = 4; // show only 4 on mobile

  const visibleSkills = expanded
    ? softSkillsData
    : isMobile
    ? softSkillsData.slice(0, mobileVisible)
    : softSkillsData.slice(0, desktopVisible);

  // Split into two columns for desktop
  const half = Math.ceil(visibleSkills.length / 2);
  const col1 = visibleSkills.slice(0, half);
  const col2 = visibleSkills.slice(half);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Soft Skills</h3>

      <div className="skills__box">
        {!isMobile ? (
          <>
            <div className="skills__group">
              {col1.map((skill, i) => (
                <div key={i} className="skills__data">
                  <i className={`bx ${skill.icon}`}></i>
                  <div>
                    <h3 className="skills__name">{skill.name}</h3>
                    <span className="skills__level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills__group">
              {col2.map((skill, i) => (
                <div key={i} className="skills__data">
                  <i className={`bx ${skill.icon}`}></i>
                  <div>
                    <h3 className="skills__name">{skill.name}</h3>
                    <span className="skills__level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="skills__group">
            {visibleSkills.map((skill, i) => (
              <div key={i} className="skills__data">
                <i className={`bx ${skill.icon}`}></i>
                <div>
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* View More button – mobile only, or if soft skills > 6 */}
      {(isMobile || softSkillsData.length > desktopVisible) && (
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
      )}
    </div>
  );
}

export default SoftSkills;
