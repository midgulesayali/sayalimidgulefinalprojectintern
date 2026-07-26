import "./ResumePreview.css";

function ResumePreview({ resumeData }) {
  const {
    personal,
    education,
    experience,
    skills,
    projects,
    certificates,
    photo,
  } = resumeData;

  return (
    <div id="resume-preview" className="resume-preview">

      {/* Header */}

      <div className="resume-header">

        {photo && (
          <img
            src={photo}
            alt="Profile"
            className="resume-photo"
          />
        )}

        <div>

          <h1>{personal.fullName || "Your Name"}</h1>

          <p>{personal.email}</p>

          <p>{personal.phone}</p>

          <p>{personal.address}</p>

        </div>

      </div>

      {/* Summary */}

      <div className="resume-section">

        <h2>Professional Summary</h2>

        <p>
          {personal.summary ||
            "Write a professional summary about yourself."}
        </p>

      </div>

      {/* Education */}

      <div className="resume-section">

        <h2>Education</h2>

        {education.length === 0 ? (
          <p>No education added.</p>
        ) : (
          education.map((item, index) => (
            <div key={index} className="resume-item">

              <h3>{item.degree}</h3>

              <p>{item.college}</p>

              <p>{item.university}</p>

              <small>
                {item.year} | {item.cgpa}
              </small>

            </div>
          ))
        )}

      </div>

      {/* Experience */}

      <div className="resume-section">

        <h2>Experience</h2>

        {experience.length === 0 ? (
          <p>No experience added.</p>
        ) : (
          experience.map((item, index) => (
            <div key={index} className="resume-item">

              <h3>{item.role}</h3>

              <p>{item.company}</p>

              <small>{item.duration}</small>

              <p>{item.description}</p>

            </div>
          ))
        )}

      </div>

      {/* Skills */}

      <div className="resume-section">

        <h2>Skills</h2>

        <div className="skill-preview">

          {skills.length === 0 ? (
            <p>No skills added.</p>
          ) : (
            skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))
          )}

        </div>

      </div>

      {/* Projects */}

      <div className="resume-section">

        <h2>Projects</h2>

        {projects.length === 0 ? (
          <p>No projects added.</p>
        ) : (
          projects.map((item, index) => (
            <div key={index} className="resume-item">

              <h3>{item.title}</h3>

              <p>{item.technology}</p>

              <p>{item.description}</p>

              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
              )}

            </div>
          ))
        )}

      </div>

      {/* Certificates */}

      <div className="resume-section">

        <h2>Certificates</h2>

        {certificates.length === 0 ? (
          <p>No certificates added.</p>
        ) : (
          certificates.map((item, index) => (
            <div key={index} className="resume-item">

              <h3>{item.title}</h3>

              <p>{item.organization}</p>

              <small>{item.year}</small>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default ResumePreview;