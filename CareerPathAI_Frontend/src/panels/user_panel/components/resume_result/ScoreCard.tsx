import { motion } from "framer-motion";
import Button from "../../../../shared/components/button";

const ScoreCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-[#e5e7eb] rounded-xl p-5 flex flex-col items-center"
    >
      {/* CIRCLE */}
      <div className="relative w-35 h-35 mb-4">
        <svg width="140" height="140">
          <circle
            cx="70"
            cy="70"
            r="60"
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="70"
            cy="70"
            r="60"
            stroke="#1d4ed8"
            strokeWidth="10"
            fill="none"
            strokeDasharray="377"
            strokeDashoffset="75"
            strokeLinecap="round"
            transform="rotate(-90 70 70)"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[28px] font-semibold">85</span>
          <span className="text-[12px] text-[#6b7280]">/100</span>
        </div>
      </div>

      <h3 className="text-[14px] font-medium mb-1">
        Overall Resume Score
      </h3>

      <p className="text-[12px] text-green-600 mb-4">
        Strong Profile
      </p>

      <div className="w-full text-[12px] text-[#6b7280] mb-4">
        <p className="font-medium text-[#111827]">Jane Doe</p>
        <p className="text-[11px] underline">
          jane_doe_resume_final_v2.pdf
        </p>
      </div>

      <Button fullWidth size="sm">
        Improve Your Resume
      </Button>
    </motion.div>
  );
};

export default ScoreCard;