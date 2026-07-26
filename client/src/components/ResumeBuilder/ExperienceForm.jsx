import { useState } from "react";
import "./ExperienceForm.css";

function ExperienceForm({ resumeData, setResumeData }) {
  const [experience, setExperience] = useState({
    company: "",
    role: "",
    duration: "",
    description: "",
  });

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const addExperience = () => {
    if (!experience.company || !experience.role) return;

    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, experience],
    });

    setExperience({
      company: "",
      role: "",
      duration: "",
      description: "",
    });
  };

  return (
    <div className="section">
      <h2>Experience</h2>

      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={experience.company}
        onChange={handleChange}
      />

      <input
        type="text"
        name="role"
        placeholder="Job Role"
        value={experience.role}
        onChange={handleChange}
      />

      <input
        type="text"
        name="duration"
        placeholder="Duration"
        value={experience.duration}
        onChange={handleChange}
      />

      <textarea
        rows="4"
        name="description"
        placeholder="Job Description"
        value={experience.description}
        onChange={handleChange}
      />

      <button type="button" onClick={addExperience}>
        Add Experience
      </button>

      {resumeData.experience.map((item, index) => (
        <div className="list-card" key={index}>
          <strong>{item.role}</strong>
          <p>{item.company}</p>
          <small>{item.duration}</small>
        </div>
      ))}
    </div>
  );
}

export default ExperienceForm;