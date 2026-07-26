import { useState } from "react";
import "./CertificatesForm.css";

function CertificatesForm({ resumeData, setResumeData }) {

  const [certificate, setCertificate] = useState({
    title: "",
    organization: "",
    year: "",
    link: ""
  });

  const handleChange = (e) => {
    setCertificate({
      ...certificate,
      [e.target.name]: e.target.value,
    });
  };

  const addCertificate = () => {

    if (certificate.title === "") return;

    setResumeData({
      ...resumeData,
      certificates: [
        ...resumeData.certificates,
        certificate
      ]
    });

    setCertificate({
      title: "",
      organization: "",
      year: "",
      link: ""
    });

  };

  return (
    <div className="section">

      <h2>Certificates</h2>

      <input
        type="text"
        name="title"
        placeholder="Certificate Name"
        value={certificate.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="organization"
        placeholder="Issued By"
        value={certificate.organization}
        onChange={handleChange}
      />

      <input
        type="text"
        name="year"
        placeholder="Year"
        value={certificate.year}
        onChange={handleChange}
      />

      <input
        type="url"
        name="link"
        placeholder="Certificate Link"
        value={certificate.link}
        onChange={handleChange}
      />

      <button onClick={addCertificate}>
        Add Certificate
      </button>

      {resumeData.certificates.map((item, index) => (

        <div className="certificate-card" key={index}>

          <h4>{item.title}</h4>

          <p>{item.organization}</p>

          <small>{item.year}</small>

        </div>

      ))}

    </div>
  );
}

export default CertificatesForm;