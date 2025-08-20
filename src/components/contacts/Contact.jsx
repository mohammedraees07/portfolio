import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // success or error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm("service_7ruf23s", "template_yki2k13", form.current, {
        publicKey: "y1GEFJdJaECQxJVhi",
      })
      .then(
        () => {
          setStatus("success");
          form.current.reset(); // reset inputs
          setTimeout(() => setStatus(""), 4000); // hide after 4s
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        {/* ===== TALK TO ME ===== */}
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {/* Email */}
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">raeesm215@gmail.com</span>
              <a href="mailto:raeesm215@gmail.com" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* Whatsapp */}
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91 9019135364</span>
              <a
                href="https://api.whatsapp.com/send?phone=9019135364"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* Messenger */}
            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123</span>
              <a href="https://m.me/user.fb123" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ===== WRITE ME YOUR PROJECT ===== */}
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
                required
              ></textarea>
            </div>

            <button type="submit" className="button button--flex">
              {status === "loading" ? "Sending..." : "Send Message"}
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 2L11 13"
                  stroke="var(--container-color)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="var(--container-color)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Status Message */}
            {status === "success" && (
              <p className="contact__status success">✅ Message Sent Successfully!</p>
            )}
            {status === "error" && (
              <p className="contact__status error">❌ Failed to send. Try again!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
