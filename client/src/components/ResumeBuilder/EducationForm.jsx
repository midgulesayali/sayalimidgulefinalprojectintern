import { useState } from "react";
import "./EducationForm.css";

function EducationForm({ resumeData, setResumeData }) {
  const [education, setEducation] = useState({
    degree: "",
    college: "",
    university: "",
    year: "",
    cgpa: "",
  });

  const handleChange = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const addEducation = () => {
    if (!education.degree || !education.college) return;

    setResumeData({
      ...resumeData,
      education: [...resumeData.education, education],
    });

    setEducation({
      degree: "",
      college: "",
      university: "",
      year: "",
      cgpa: "",
    });
  };

  return (
    <div className="section">
      <h2>Education</h2>

      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={education.degree}
        onChange={handleChange}
      />

      <input
        type="text"
        name="college"
        placeholder="College"
        value={education.college}
        onChange={handleChange}
      />

      <input
        type="text"
        name="university"
        placeholder="University / Board"
        value={education.university}
        onChange={handleChange}
      />

      <input
        type="text"
        name="year"
        placeholder="Passing Year"
        value={education.year}
        onChange={handleChange}
      />

      <input
        type="text"
        name="cgpa"
        placeholder="CGPA / Percentage"
        value={education.cgpa}
        onChange={handleChange}
      />

      <button type="button" onClick={addEducation}>
        Add Education
      </button>

      {resumeData.education.map((item, index) => (
        <div className="list-card" key={index}>
          <strong>{item.degree}</strong>
          <p>{item.college}</p>
          <small>{item.year}</small>
        </div>
      ))}
    </div>
  );
}

export default EducationForm;