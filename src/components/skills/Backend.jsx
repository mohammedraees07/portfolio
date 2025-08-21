import React from "react";

function SoftSkills() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Soft Skills</h3>
      <div className="skills__box">

        <div className="skills__group">
          <div className="skills__data">
            <i className='bx bx-comment'></i>
            <div>
              <h3 className="skills__name">Communication</h3>
              <span className="skills__level">Excellent</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-group'></i>
            <div>
              <h3 className="skills__name">Teamwork</h3>
              <span className="skills__level">Strong</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-cog'></i>
            <div>
              <h3 className="skills__name">Problem Solving</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className='bx bx-brain'></i>
            <div>
              <h3 className="skills__name">Creativity</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-time'></i>
            <div>
              <h3 className="skills__name">Time Management</h3>
              <span className="skills__level">Strong</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-user-check'></i>
            <div>
              <h3 className="skills__name">Leadership</h3>
              <span className="skills__level">Good</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SoftSkills;
