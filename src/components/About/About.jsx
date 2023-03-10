import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div id="about" className="about" id="about">
      <div className="container-small">
        <h2>About Me</h2>
        <p>
          A subscriber to the philosophy of life-long learning, I am an
          enthusiastic Software Developer and Bachelors of Computer Science
          graduate from the Greater Toronto Are. I love spending time coding and
          encountering and overcoming challenges. Isn’t it the most wonderful
          feeling when you finally implement a difficult feature or overcome
          something you were struggling with for a while. I thrive at solving
          problems and constantly learning through exploring new technologies
          and building practical projects.
        </p>

        <div className="interests">
          <h3>Hobbies and Interests</h3>
          <p>
            While I’m not coding, I enjoy hiking, running, playing boardgames
            and occasionally creating something out of wood.{" "}
          </p>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default About;
