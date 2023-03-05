import React from "react";
import "./navbar.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <ul className="links">
          <li>
            <Link className="link" to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="projects" spy={true} smooth={true}>
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
