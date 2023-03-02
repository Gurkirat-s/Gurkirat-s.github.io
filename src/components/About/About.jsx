import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <h1>About Me</h1>
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
          <h2>Hobbies and Interests</h2>
          <p>
            While I’m not coding, I enjoy hiking, running, playing boardgames
            and occasionally creating something out of wood.{" "}
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>HTML5</li>
            <li>CSS3/SASS</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Firebase</li>
            <li>SQL</li>
            <li>Object Oriented Principles</li>
            <li>Next.js</li>
            <li>Git</li>
          </ul>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default About;
