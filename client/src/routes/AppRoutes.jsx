import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import ResumeBuilder from "../pages/ResumeBuilder/ResumeBuilder";
import ResumeAnalysis from "../pages/ResumeAnalysis/ResumeAnalysis";
import AIAssistant from "../pages/AIAssistant/AIAssistant";
import CareerPath from "../pages/CareerPath/CareerPath";
import CoverLetter from "../pages/CoverLetter/CoverLetter";
import InterviewPractice from "../pages/InterviewPractice/InterviewPractice";
import JobMatch from "../pages/JobMatch/JobMatch";
import LearningRoadmap from "../pages/LearningRoadmap/LearningRoadmap";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import SkillGap from "../pages/SkillGap/SkillGap";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;