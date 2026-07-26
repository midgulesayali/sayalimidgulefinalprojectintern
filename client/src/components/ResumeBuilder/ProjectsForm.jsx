import { useState } from "react";
import "./ProjectsForm.css";

function ProjectsForm({ resumeData, setResumeData }) {
  const [project, setProject] = useState({
    title: "",
    technology: "",
    description: "",
    github: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const addProject = () => {
    if (!project.title) return;

    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, project],
    });

    setProject({
      title: "",
      technology: "",
      description: "",
      github: "",
    });
  };

  return (
    <div className="section">
      <h2>Projects</h2>

      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={project.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="technology"
        placeholder="Technologies Used"
        value={project.technology}
        onChange={handleChange}
      />

      <textarea
        rows="4"
        name="description"
        placeholder="Project Description"
        value={project.description}
        onChange={handleChange}
      />

      <input
        type="url"
        name="github"
        placeholder="GitHub Repository"
        value={project.github}
        onChange={handleChange}
      />

      <button type="button" onClick={addProject}>
        Add Project
      </button>

      {resumeData.projects.map((item, index) => (
        <div className="project-card" key={index}>
          <h4>{item.title}</h4>
          <p>{item.technology}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectsForm;