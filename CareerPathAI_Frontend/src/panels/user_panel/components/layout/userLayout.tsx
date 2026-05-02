import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

const UserLayout = () => {
  return (
    <div className="flex h-screen bg-[#f5f7fb]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="flex-1 px-6 py-5 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;