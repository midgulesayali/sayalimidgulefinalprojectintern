import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function LearningRoadmap() {
  return (
    <div className="page-shell">
      <Sidebar />
      <div className="page-content">
        <Navbar />
        <section className="page-section">
          <h1>Learning Roadmap</h1>
          <p>Track skill development and follow a personalized learning plan for your career goals.</p>
        </section>
      </div>
    </div>
  );
}

export default LearningRoadmap;
