import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function Profile() {
  return (
    <div className="page-shell">
      <Sidebar />
      <div className="page-content">
        <Navbar />
        <section className="page-section">
          <h1>Profile</h1>
          <p>Manage your account, update your details, and review your AI career insights.</p>
        </section>
      </div>
    </div>
  );
}

export default Profile;
