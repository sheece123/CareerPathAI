import { motion } from "framer-motion";
import Button from "../../../../shared/components/button";

type Props = {
  score: number;
};

const ScoreCard = ({ score }: Props) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  const progress = score / 100;
  const strokeDashoffset = circumference * (1 - progress);

  const getLabel = () => {
    if (score >= 80) return "Strong Profile";
    if (score >= 60) return "Good Profile";
    return "Needs Improvement";
  };

  const getColor = () => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-[#e5e7eb] rounded-xl p-5 flex flex-col items-center"
    >
      {/* CIRCLE */}
      <div className="relative w-35 h-35 mb-4">
        <svg width="140" height="140">
          {/* Background */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />

          {/* Progress */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke="#1d4ed8"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 70 70)"
          />
        </svg>

        {/* SCORE */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[28px] font-semibold">{score}</span>
          <span className="text-[12px] text-[#6b7280]">/100</span>
        </div>
      </div>

      <h3 className="text-[14px] font-medium mb-1">
        Overall Resume Score
      </h3>

      <p className={`text-[12px] mb-4 ${getColor()}`}>
        {getLabel()}
      </p>

      <div className="w-full text-[12px] text-[#6b7280] mb-4">
        <p className="font-medium text-[#111827]">Your Resume</p>
        <p className="text-[11px] underline">
          Uploaded File
        </p>
      </div>

      <Button fullWidth size="sm">
        Improve Your Resume
      </Button>
    </motion.div>
  );
};

export default ScoreCard;