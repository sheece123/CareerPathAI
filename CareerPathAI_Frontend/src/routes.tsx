import { Routes, Route } from "react-router-dom";

// Landing Page
import LandingPage from "./panels/landing/pages/landingPage";

// Auth Panel
import Login from "../src/panels/auth/pages/Login";
import Signup from "./panels/auth/pages/Signup";

// Layout
import UserLayout from "./panels/user_panel/components/layout/userLayout";
//./panels/user_panel/components/layout/UserLayout

// Pages (create Dashboard for now)
import Dashboard from "./panels/user_panel/pages/dashboard";
import ResumeAnalysis from "./panels/user_panel/pages/ResumeAnalysis";
import ResumeResults from "./panels/user_panel/pages/ResumeResults";
import SkillGap from "./panels/user_panel/pages/SkillGap";
import SkillGapResult from "./panels/user_panel/pages/SkillGapResult";
import CareerPrediction from "./panels/user_panel/pages/CareerPrediction";
import CareerResults from "./panels/user_panel/pages/CareerResults";



const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="career" element={<CareerPrediction/>} />
          <Route path="careerprediction" element={<CareerResults/>} />
          <Route path="resume" element={<ResumeAnalysis />} />
          <Route path="resumeanalysis" element={<ResumeResults />} />
          <Route path="skill" element={<SkillGap/>} />
          <Route path="skillgap" element={<SkillGapResult/>} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;