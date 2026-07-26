import { useState } from "react";
import "./ResumeUpload.css";

function ResumeUpload({ setAnalysis }) {

  const [fileName, setFileName] = useState("");

  const handleUpload = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setFileName(file.name);

    /*
      Replace this mock response with
      your FastAPI API call later.
    */

    setAnalysis({

      atsScore: 87,

      matchedSkills: [
        "React",
        "JavaScript",
        "Python",
        "FastAPI",
        "SQL"
      ],

      missingSkills: [
        "Docker",
        "AWS",
        "CI/CD"
      ],

      missingKeywords: [
        "REST API",
        "GitHub",
        "Microservices"
      ]

    });

  };

  return (

<div className="upload-card">

<h2>Upload Resume</h2>

<input
type="file"
accept=".pdf,.doc,.docx"
onChange={handleUpload}
/>

{fileName &&

<p>
Selected:
<strong> {fileName}</strong>
</p>

}

</div>

  );

}

export default ResumeUpload;