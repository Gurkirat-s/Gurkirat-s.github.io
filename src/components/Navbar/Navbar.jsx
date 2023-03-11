import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const toggleMobileNav = () => {
  console.log("Button Clicked");
};

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbarToggle = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="navbar">
      <div className={`container main-nav ${showNavbar && "active"}`}>
        <ul className="links">
          <li>
            <Link
              onClick={handleNavbarToggle}
              className="link"
              to="about"
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNavbarToggle}
              className="link"
              to="skills"
              spy={true}
              smooth={true}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNavbarToggle}
              className="link"
              to="projects"
              spy={true}
              smooth={true}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNavbarToggle}
              className="link"
              to="contact"
              spy={true}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <button
        onClick={handleNavbarToggle}
        className={`btn-mobile-nav ${showNavbar && "active"}`}
      >
        <CgMenu class="icon-mobile-nav" name="menu-outline" />
        <AiOutlineClose class="icon-mobile-nav" name="close-outline" />
      </button>
    </div>
  );
};

export default Navbar;
