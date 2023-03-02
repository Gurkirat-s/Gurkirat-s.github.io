import React from "react";
import "./Projects.scss";
import projectsData from "../../data/projectsData";

const Projects = () => {
  console.log(projectsData());
  const projects = projectsData();
  return (
    <div className="projects">
      <div className="container">
        <h1>Projects</h1>
        {projects.map((item) => {
          return <ProjectCard project={item} />;
        })}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {project.imgURL && (
        <img src={project.imgURL} alt="Screenshot of project" />
      )}

      <div className="card-info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div>
          {project.type && <h3>{project.type}</h3>}
          {project.demoURL && <a href="#about">{project.demoURL}</a>}
          {project.githubURL && <a href="#about">{project.githubURL}</a>}
        </div>
      </div>
    </div>
  );
};

const ButtonGithub = () => {
  return <div></div>;
};

const ButtonDemo = () => {
  return <div></div>;
};

export default Projects;
