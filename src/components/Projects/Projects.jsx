import React from "react";
import "./Projects.scss";
import projectsData from "../../data/projectsData";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const Projects = () => {
  console.log(projectsData());
  const projects = projectsData();
  return (
    <div id="projects" className="projects">
      <div className="container-small">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((item, index) => {
            return <ProjectCard key={index} project={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="img-container">
        {project.imgURL && (
          <img src={project.imgURL} alt="Screenshot of project" />
        )}
      </div>

      <div className="card-info">
        <h3>{project.title}</h3>
        {project.type && <h4>{project.type}</h4>}
        <p>{project.description}</p>
        <ul className="tools">
          {project.tools.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>

        <div className="buttons">
          {project.demoURL && <ButtonDemo url={project.demoURL} />}
          {project.githubURL && <ButtonGithub url={project.githubURL} />}
        </div>
      </div>
    </div>
  );
};

const ButtonGithub = ({ url }) => {
  return (
    <a className="btn btn-github" href={url}>
      <FaGithub />
      <span className="btn-text">Code</span>
    </a>
  );
};

const ButtonDemo = ({ url }) => {
  return (
    <a className="btn btn-demo" href={url}>
      <MdOutlineWeb className="flex-item" />
      <span className="btn-text flex-item">Demo</span>
    </a>
  );
};

export default Projects;
