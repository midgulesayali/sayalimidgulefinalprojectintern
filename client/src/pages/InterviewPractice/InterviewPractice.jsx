import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function InterviewPractice() {
  return (
    <div className="page-shell">
      <Sidebar />
      <div className="page-content">
        <Navbar />
        <section className="page-section">
          <h1>Interview Practice</h1>
          <p>Practice interview questions, record your answers, and get AI feedback.</p>
        </section>
      </div>
    </div>
  );
}

export default InterviewPractice;
