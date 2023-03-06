import React from "react";
import "./Hero.scss";
import avatar from "../../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="intro">
          <h2>Hi, my name is</h2>
          <h1>Gurkirat Singh</h1>
          <p>I'm a Software Developer from Brampton, Ontario.</p>
          <a href="#projects">See some projects I've worked on</a>
        </div>
        <div className="img-container">
          <img src={avatar} alt="Main Hero"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
