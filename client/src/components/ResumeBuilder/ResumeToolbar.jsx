import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./ResumeToolbar.css";

function ResumeToolbar({ resumeData }) {

  const downloadPDF = async () => {

    const resume = document.getElementById("resume-preview");

    if (!resume) return;

    const canvas = await html2canvas(resume, {
      scale: 2,
      useCORS: true,
    });

    const image = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(image, "PNG", 0, 0, pdfWidth, imgHeight);

    pdf.save(
      `${resumeData.personal.fullName || "Resume"}.pdf`
    );
  };

  const saveResume = () => {

    localStorage.setItem(
      "resumeData",
      JSON.stringify(resumeData)
    );

    alert("Resume Saved Successfully");
  };

  return (
    <div className="toolbar">

      <button onClick={saveResume}>
        💾 Save Resume
      </button>

      <button onClick={downloadPDF}>
        📄 Download PDF
      </button>

    </div>
  );
}

export default ResumeToolbar;