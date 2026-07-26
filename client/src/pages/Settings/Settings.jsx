import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function Settings() {
  return (
    <div className="page-shell">
      <Sidebar />
      <div className="page-content">
        <Navbar />
        <section className="page-section">
          <h1>Settings</h1>
          <p>Adjust your preferences, notification settings, and account security options.</p>
        </section>
      </div>
    </div>
  );
}

export default Settings;
