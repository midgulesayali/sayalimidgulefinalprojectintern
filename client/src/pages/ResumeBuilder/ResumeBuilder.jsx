import { useState } from "react";
import "./ResumeBuilder.css";

import PersonalInfoForm from "../../components/ResumeBuilder/PersonalInfoForm";
import EducationForm from "../../components/ResumeBuilder/EducationForm";
import ExperienceForm from "../../components/ResumeBuilder/ExperienceForm";
import SkillsForm from "../../components/ResumeBuilder/SkillsForm";
import ProjectsForm from "../../components/ResumeBuilder/ProjectsForm";
import CertificatesForm from "../../components/ResumeBuilder/CertificatesForm";
import PhotoUpload from "../../components/ResumeBuilder/PhotoUpload";
import ResumePreview from "../../components/ResumeBuilder/ResumePreview";
import ResumeToolbar from "../../components/ResumeBuilder/ResumeToolbar";

function ResumeBuilder() {

  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      summary: ""
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certificates: [],
    photo: ""
  });

  return (
    <div className="resume-page">
      <div className="resume-builder-grid">
        <section className="resume-form">
          <h1>AI Resume Builder</h1>

          <PhotoUpload resumeData={resumeData} setResumeData={setResumeData} />
          <PersonalInfoForm resumeData={resumeData} setResumeData={setResumeData} />
          <EducationForm resumeData={resumeData} setResumeData={setResumeData} />
          <ExperienceForm resumeData={resumeData} setResumeData={setResumeData} />
          <SkillsForm resumeData={resumeData} setResumeData={setResumeData} />
          <ProjectsForm resumeData={resumeData} setResumeData={setResumeData} />
          <CertificatesForm resumeData={resumeData} setResumeData={setResumeData} />
        </section>

        <aside className="resume-preview-panel">
          <ResumeToolbar resumeData={resumeData} />
          <ResumePreview resumeData={resumeData} />
        </aside>
      </div>
    </div>
  );
}

export default ResumeBuilder;