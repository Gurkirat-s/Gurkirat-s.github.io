import React from "react";
import "./Skills.scss";
import skillsData from "../../data/skillsData";

const Skills = () => {
  const skills = skillsData();

  return (
    <div id="skills" className="skills">
      <div className="container-small">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((item) => {
            return (
              <div key={item.id} className="skill-card">
                <img src={item.image} alt={`${item.title} `} />
                <h4>{item.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
