import { CheckCircle, X } from "lucide-react";
import { motion } from "framer-motion";

const UploadSuccessCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex items-center justify-between bg-[#f9fafb] border border-[#e6e8ec] rounded-[10px] px-3.5 py-2.5"
    >
      <div className="flex items-center gap-2.5">
        <CheckCircle size={18} className="text-[#22c55e]" />

        <div>
          <p className="text-[12px] font-medium">
            john_doe_resume_2024.pdf
          </p>
          <p className="text-[11px] text-[#6b7280]">
            Upload successful
          </p>
        </div>
      </div>

      <button className="text-[#9ca3af]">
        <X size={16} />
      </button>
    </motion.div>
  );
};

export default UploadSuccessCard;