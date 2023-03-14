import React, { useEffect, useState } from "react";
import "./ScrollTop.scss";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.75) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp className="arrow-icon" />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
