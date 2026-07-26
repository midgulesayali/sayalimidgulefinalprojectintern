import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function CoverLetter() {
  return (
    <div className="page-shell">
      <Sidebar />
      <div className="page-content">
        <Navbar />
        <section className="page-section">
          <h1>Cover Letter Builder</h1>
          <p>Generate personalized cover letters and customize messaging for every job application.</p>
        </section>
      </div>
    </div>
  );
}

export default CoverLetter;
