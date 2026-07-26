import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function JobMatch() {
  return (
    <div className="page-shell">
      <Sidebar />
      <div className="page-content">
        <Navbar />
        <section className="page-section">
          <h1>Job Match</h1>
          <p>Find roles that fit your skills and preferences with AI matching and company insights.</p>
        </section>
      </div>
    </div>
  );
}

export default JobMatch;
