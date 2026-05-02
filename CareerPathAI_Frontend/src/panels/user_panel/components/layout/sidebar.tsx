import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  FileText,
  Briefcase,
  Settings,
  TargetIcon,
  CheckLine,
} from "lucide-react";


const items = [
  { label: "Dashboard", path: "/user/dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "My Profile", path: "/user/profile", icon: <User size={18} /> },
  { label: "Career Prediction", path: "/user/career", icon: <TargetIcon size={18} /> },
  { label: "Resume Analysis", path: "/user/resume", icon: <FileText size={18} /> },
  { label: "Skill Gap", path: "/user/skill", icon: <CheckLine size={18} /> },
  { label: "Job Search", path: "/user/jobs", icon: <Briefcase size={18} /> },
  { label: "Settings", path: "/user/settings", icon: <Settings size={18} /> },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-62.5 bg-white border-r border-gray-200 flex flex-col justify-between px-5 py-6">
      
      <div>
        <h1 className="text-[16px] font-semibold mb-6">CareerPathAI</h1>

        <nav className="space-y-1">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;