import React from "react";
import "./Hero.scss";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="intro">
          <h2>Hi, my name is</h2>
          <h1>Gurkirat Singh</h1>
          <p>I'm a Software Developer from Brampton, Ontario.</p>
          <Link className="link" to="projects" spy={true} smooth={true}>
            See some projects I've worked on
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
