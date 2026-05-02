import { Bell, Search } from "lucide-react";

const Topbar = () => {
  return (
    <div className="h-16 bg-[#f5f7fb] border-b border-gray-200 px-6 flex items-center justify-between">
      
      <h1 className="text-[16px] font-semibold text-gray-800">
        Dashboard
      </h1>

      <div className="flex items-center bg-white border border-gray-200 rounded-md px-3 h-9 w-100">
        <Search size={16} className="text-gray-400 mr-2" />
        <input
          placeholder="Search..."
          className="bg-white outline-none text-[13px] w-full"
        />
      </div>

      <div className="flex items-center gap-4 ">
        <Bell size={18} className="text-gray-600" />
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </div>
  );
};

export default Topbar;