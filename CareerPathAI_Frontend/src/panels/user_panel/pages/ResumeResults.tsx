import { motion } from "framer-motion";
import ScoreCard from "../components/resume_result/ScoreCard";
import InsightsCard from "../components/resume_result/InsightsCard";
import DetailedAnalysis from "../components/resume_result/DetailedAnalysis";
import { Download, RefreshCw } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const ResumeResults = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state;

  // 🚨 SAFETY CHECK
  if (!data) {
    return (
      <div className="p-6">
        No data found. Please upload resume again.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-6 py-6"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[24px] font-semibold text-[#111827]">
          Resume Analysis Results
        </h1>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 text-[12px] px-3 py-2 border border-[#e5e7eb] rounded-md bg-white">
            <Download size={14} /> Download Report
          </button>

          <button
            onClick={() => navigate("/user/resume")}
            className="flex items-center gap-2 text-[12px] px-3 py-2 border border-[#e5e7eb] rounded-md bg-white"
          >
            <RefreshCw size={14} />
            Re-analyze New Resume
          </button>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* LEFT */}
        <ScoreCard score={data.resume_score} />

        {/* RIGHT */}
        <div className="lg:col-span-2 flex flex-col gap-5">

          <InsightsCard
            strengths={data.strengths}
            weaknesses={data.weaknesses}
          />

          <DetailedAnalysis
            skills={data.extracted_skills}
          />

        </div>
      </div>
    </motion.div>
  );
};

export default ResumeResults;