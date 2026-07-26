import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import DashboardChart from "../../components/Charts/DashboardChart";
import ResumeScore from "../../components/ResumeScore/ResumeScore";
import AIStatus from "../../components/AIStatus/AIStatus";
import RecommendationCards from "../../components/RecommendationCards/RecommendationCards";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import QuickActions from "../../components/QuickActions/QuickActions";
import Notification from "../../components/Notification/Notification";
import Footer from "../../components/Footer/Footer";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="dashboard-body">
          <div className="dashboard-hero">
            <div>
              <p className="dashboard-eyebrow">Career intelligence workspace</p>
              <h1>Welcome back, let’s keep momentum going.</h1>
            </div>
            <div className="dashboard-banner">Your next opportunity is closer than it looks.</div>
          </div>

          <DashboardCards />
          <DashboardChart />

          <div className="grid-two">
            <ResumeScore />
            <AIStatus />
          </div>

          <RecommendationCards />
          <QuickActions />
          <RecentActivity />
          <Notification />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;