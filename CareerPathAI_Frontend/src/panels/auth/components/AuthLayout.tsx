import type { ReactNode } from "react";
import { motion } from "framer-motion";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden flex">
        
        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden md:flex w-1/2 relative items-start justify-start p-6 text-white"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-linear-to-br from-indigo-700 via-purple-600 to-blue-500" />

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />

          {/* Content */}
          <div className="relative z-10 font-semibold text-lg">
            CareerPathAI
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-10">
          {children}
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;