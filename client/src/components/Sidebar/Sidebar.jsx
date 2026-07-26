import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaRobot,
  FaUser,
  FaCog,
  FaChartLine,
  FaEnvelope,
  FaComments,
  FaSearch,
  FaBook,
  FaChartBar,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>Career AI</h2>

      <Link to="/dashboard">
        <FaHome /> Dashboard
      </Link>

      <Link to="/resume-builder">
        <FaFileAlt /> Resume Builder
      </Link>

      <Link to="/resume-analysis">
        <FaChartLine /> Resume Analysis
      </Link>

      <Link to="/ai-assistant">
        <FaRobot /> AI Assistant
      </Link>

      <Link to="/career-path">
        <FaBook /> Career Path
      </Link>

      <Link to="/cover-letter">
        <FaEnvelope /> Cover Letter
      </Link>

      <Link to="/interview-practice">
        <FaComments /> Interview Practice
      </Link>

      <Link to="/job-match">
        <FaSearch /> Job Match
      </Link>

      <Link to="/learning-roadmap">
        <FaBook /> Learning Roadmap
      </Link>

      <Link to="/skill-gap">
        <FaChartBar /> Skill Gap
      </Link>

      <Link to="/profile">
        <FaUser /> Profile
      </Link>

      <Link to="/settings">
        <FaCog /> Settings
      </Link>

    </div>
  );
}

export default Sidebar;