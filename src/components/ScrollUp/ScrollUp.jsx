import React, { useEffect, useRef } from 'react';
import './scrollup.css';

const ScrollUp = () => {
  const scrollBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        scrollBtnRef.current?.classList.add('show-scroll');
      } else {
        scrollBtnRef.current?.classList.remove('show-scroll');
      }
    };

    // Throttle for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      ref={scrollBtnRef}
      className="scrollup"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
};

export default ScrollUp;
