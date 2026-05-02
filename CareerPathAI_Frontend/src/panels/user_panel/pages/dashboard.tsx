import WelcomeCard from "../components/dashboard/WelcomeCard";
import ResumeScoreCard from "../components/dashboard/ResumeScoreCard";
import SkillGapsCard from "../components/dashboard/SkillGapCard";
import CoursesSection from "../components/dashboard/CoursesSection";

const Dashboard = () => {
  return (
    <div className="space-y-4">

      {/* TITLE (OUTSIDE GRID) */}
      <h2 className="text-[22px] font-semibold">
        Welcome back, Eleanor!
      </h2>

      {/* GRID STARTS HERE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <WelcomeCard />
          <SkillGapsCard />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex">
          <ResumeScoreCard />
        </div>

      </div>

      {/* COURSES */}
      <CoursesSection />

    </div>
  );
};

export default Dashboard;
