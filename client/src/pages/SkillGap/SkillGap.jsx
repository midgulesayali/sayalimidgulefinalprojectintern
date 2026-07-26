import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function SkillGap() {
  return (
    <div className="page-shell">
      <Sidebar />
      <div className="page-content">
        <Navbar />
        <section className="page-section">
          <h1>Skill Gap Analysis</h1>
          <p>Discover the skills you need next and close gaps with AI recommendations.</p>
        </section>
      </div>
    </div>
  );
}

export default SkillGap;
