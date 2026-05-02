import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

type Props = {
  strengths: string[];
  weaknesses: string[];
};

const InsightsCard = ({ strengths, weaknesses }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border border-[#e5e7eb] rounded-xl p-5"
    >
      <h3 className="text-[14px] font-semibold mb-4">
        Key Insights
      </h3>

      <div className="grid grid-cols-2 gap-6">
        
        {/* Strengths */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={16} className="text-green-500" />
            <span className="text-[13px] font-medium">
              Strengths
            </span>
          </div>

          <ul className="text-[12px] text-[#6b7280] space-y-2">
            {strengths && strengths.length > 0 ? (
              strengths.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No strengths identified</li>
            )}
          </ul>
        </div>

        {/* Improvements */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle size={16} className="text-orange-500" />
            <span className="text-[13px] font-medium">
              Areas for Improvement
            </span>
          </div>

          <ul className="text-[12px] text-[#6b7280] space-y-2">
            {weaknesses && weaknesses.length > 0 ? (
              weaknesses.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No improvements needed</li>
            )}
          </ul>
        </div>

      </div>
    </motion.div>
  );
};

export default InsightsCard;