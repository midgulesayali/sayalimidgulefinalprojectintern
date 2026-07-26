import { useState } from "react";
import "./SkillsForm.css";

function SkillsForm({ resumeData, setResumeData }) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    const value = skill.trim();

    if (!value) return;

    if (resumeData.skills.includes(value)) {
      setSkill("");
      return;
    }

    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, value],
    });

    setSkill("");
  };

  const removeSkill = (index) => {
    const updated = resumeData.skills.filter((_, i) => i !== index);

    setResumeData({
      ...resumeData,
      skills: updated,
    });
  };

  return (
    <div className="section">
      <h2>Skills</h2>

      <div className="skill-input">
        <input
          type="text"
          placeholder="React, Python, SQL..."
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />

        <button type="button" onClick={addSkill}>
          Add
        </button>
      </div>

      <div className="skill-list">
        {resumeData.skills.map((item, index) => (
          <span
            className="skill-chip"
            key={index}
            onClick={() => removeSkill(index)}
            title="Click to remove"
          >
            {item} ✕
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsForm;