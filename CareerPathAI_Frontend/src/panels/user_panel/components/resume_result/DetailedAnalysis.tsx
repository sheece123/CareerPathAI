import { motion } from "framer-motion";

type Props = {
  skills: string[];
};

const tabs = ["Skills", "Experience", "Education"];

const DetailedAnalysis = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border border-[#e5e7eb] rounded-xl p-5"
    >
      <h3 className="text-[14px] font-semibold mb-4">
        Detailed Analysis
      </h3>

      {/* TABS (UI ONLY FOR NOW) */}
      <div className="flex gap-6 border-b mb-4">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`text-[12px] pb-2 ${
              index === 0
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* SKILLS SECTION */}
      <div className="mb-4">
        <h4 className="text-[12px] font-medium mb-2">
          Extracted Skills
        </h4>

        <div className="flex flex-wrap gap-2">
          {skills && skills.length > 0 ? (
            skills.map((skill, index) => (
              <span
                key={index}
                className="text-[11px] px-3 py-1 rounded-full bg-blue-50 text-blue-600"
              >
                {skill}
              </span>
            ))
          ) : (
            <span className="text-[12px] text-gray-500">
              No skills detected
            </span>
          )}
        </div>
      </div>

      {/* NOTE */}
      <p className="text-[11px] text-gray-400">
        More detailed analysis (experience, education) will be available in future updates.
      </p>
    </motion.div>
  );
};

export default DetailedAnalysis;