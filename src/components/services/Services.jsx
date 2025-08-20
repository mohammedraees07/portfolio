import React, { useState } from "react";
import "./services.css";

function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    if (index !== 0) {
      document.body.classList.add("modal-open"); // prevent flicker
    } else {
      document.body.classList.remove("modal-open");
    }
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        {/* ===== Service 1 (UI/UX Designer) ===== */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
          </div>
          <h3 className="services__title">
            UI/UX <br /> Designer
          </h3>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
        </div>

        {/* ===== Service 2 (Frontend Web Development) ===== */}
        <div className="services__content">
          <div>
            <i className="uil uil-brackets-curly services__icon"></i>
          </div>
          <h3 className="services__title">
            Web <br /> Development
          </h3>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
        </div>

        {/* ===== Service 3 (Backend Development) ===== */}
        <div className="services__content">
          <div>
            <i className="uil uil-server services__icon"></i>
          </div>
          <h3 className="services__title">
            Backend <br /> Development
          </h3>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
        </div>
      </div>

      {/* ================= MODALS ================= */}
      <div
        className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}
      >
        <div className="services__modal-content">
          <i
            className="uil uil-times services__modal-close"
            onClick={() => toggleTab(0)}
          ></i>
          <h3 className="services__modal-title">UI/UX Designer</h3>
          <p className="services__modal-description">
            Designing clean, modern, and user-friendly interfaces using{" "}
            <strong>Figma</strong> and industry-standard design practices.
          </p>
          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Wireframing and prototyping in Figma.
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Interactive mockups and clickable prototypes.
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Designing intuitive user flows and interactions.
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Creating responsive design systems and style guides.
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Collaborating with developers for pixel-perfect implementation.
            </li>
          </ul>
        </div>
      </div>

      <div
        className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}
      >
        <div className="services__modal-content">
          <i
            className="uil uil-times services__modal-close"
            onClick={() => toggleTab(0)}
          ></i>
          <h3 className="services__modal-title">Frontend Development</h3>
          <p className="services__modal-description">
            I create responsive, interactive, and visually appealing websites using modern frontend technologies.
          </p>
          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> HTML, CSS, and JavaScript development.
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Responsive UI with React.
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Cross-browser compatibility.
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Optimized performance and SEO.
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Reusable and scalable components.
            </li>
          </ul>
        </div>
      </div>

      <div
        className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}
      >
        <div className="services__modal-content">
          <i
            className="uil uil-times services__modal-close"
            onClick={() => toggleTab(0)}
          ></i>
          <h3 className="services__modal-title">Backend Development (Java, Spring Boot)</h3>
          <p className="services__modal-description">
            I develop scalable backend systems using Java and Spring Boot, focusing on clean architecture and secure APIs.
          </p>
          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> RESTful API development with Spring Boot.
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Database design and integration (MySQL, MongoDB).
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Authentication and authorization (JWT, OAuth2).
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Scalable microservices architecture.
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle"></i> Deployment and CI/CD setup.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
