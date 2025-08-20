import React, { useState } from "react";
import "./qualifications.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => setToggleState(index);

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        {/* Tabs */}
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        {/* Sections */}
        <div className="qualification__sections">
          {/* ---------------- Education ---------------- */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.E. CSE</h3>
                <span className="qualification__subtitle">
                  P.A. College of Engineering, Mangaluru
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 – Present
                </div>
              </div>

              <div className="qualification__marker">
                <span className="qualification__rounder"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div className="qualification__marker">
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">PUC (Science)</h3>
                <span className="qualification__subtitle">
                  St. Sebastian PU College, Thokkottu
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 – 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Schooling</h3>
                <span className="qualification__subtitle">
                  Kanachur Public School, Mangaluru
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> – 2020
                </div>
              </div>

              <div className="qualification__marker">
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>

          {/* ---------------- Experience ---------------- */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Development Intern
                </h3>
                <span className="qualification__subtitle">GD EduTech</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2025
                </div>
              </div>

              <div className="qualification__marker">
                <span className="qualification__rounder"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div className="qualification__marker">
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Future Intern</h3>
                <span className="qualification__subtitle">
                  Internship Project
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
