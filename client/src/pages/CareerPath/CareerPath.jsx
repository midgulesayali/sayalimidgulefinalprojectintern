import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function CareerPath() {
  return (
    <div className="page-shell">
      <Sidebar />
      <div className="page-content">
        <Navbar />
        <section className="page-section">
          <h1>Career Path Guidance</h1>
          <p>Explore tailored career paths, growth opportunities, and AI-powered role recommendations.</p>
        </section>
      </div>
    </div>
  );
}

export default CareerPath;
