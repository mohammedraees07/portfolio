import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ✅ header shadow
      setScrollHeader(window.scrollY >= 80);

      // ✅ scroll-spy
      const sections = document.querySelectorAll("section[id]");
      let current = "#home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // offset for header height
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = `#${section.getAttribute("id")}`;
        }
      });

      setActiveNav(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrollHeader ? "scroll-header" : ""}`}>
      <nav className="nav container">
        {/* Logo */}
        <a href="#home" className="nav__logo">
          MR
        </a>

        {/* Nav Menu */}
        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            {[
              { id: "#home", icon: "uil-estate", label: "Home" },
              { id: "#about", icon: "uil-user", label: "About" },
              { id: "#skills", icon: "uil-file-alt", label: "Skills" },
              { id: "#services", icon: "uil-briefcase-alt", label: "Services" },
              { id: "#qualifications", icon: "uil-graduation-cap", label: "Qualifications" },
              { id: "#portfolio", icon: "uil-scenery", label: "Portfolio" },
              { id: "#contact", icon: "uil-message", label: "Contact" },
            ].map((item) => (
              <li className="nav__item" key={item.id}>
                <a
                  href={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={
                    activeNav === item.id ? "nav__link active-link" : "nav__link"
                  }
                >
                  <i className={`uil ${item.icon} nav__icon`}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Close Icon */}
          <i
            className="uil uil-times nav__close"
            onClick={() => setMenuOpen(false)}
          ></i>
        </div>

        {/* Toggle Button */}
        <div className="nav__toggle" onClick={() => setMenuOpen(true)}>
          <i className="uil uil-apps nav__icon"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
