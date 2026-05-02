import { motion } from "framer-motion";

const BridgeGapCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border border-[#e5e7eb] rounded-xl p-4"
    >
      <h3 className="text-[13px] font-semibold mb-1.5">
        Bridge the Gap
      </h3>

      <p className="text-[12px] text-[#6b7280] mb-3">
        Take the next step in your career journey by developing the skills you need to succeed.
        Explore curated courses and resources to get started.
      </p>

      <div className="flex gap-2.5">
        <button className="text-[12px] px-3 py-1.5 bg-[#4f46e5] text-white rounded-md">
          📘 Find Recommended Courses
        </button>

        <button className="text-[12px] px-3 py-1.5 border border-[#e5e7eb] rounded-md">
          Explore Learning Resources
        </button>
      </div>
    </motion.div>
  );
};

export default BridgeGapCard;