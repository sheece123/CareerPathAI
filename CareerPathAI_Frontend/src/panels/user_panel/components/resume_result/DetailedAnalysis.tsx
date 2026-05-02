import { motion } from "framer-motion";

const tabs = ["Skills", "Experience", "Education"];

const DetailedAnalysis = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border border-[#e5e7eb] rounded-xl p-5"
    >
      <h3 className="text-[14px] font-semibold mb-4">
        Detailed Analysis
      </h3>

      {/* TABS */}
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

      {/* SKILLS */}
      <div className="mb-4">
        <h4 className="text-[12px] font-medium mb-2">
          Technical Skills
        </h4>

        <div className="flex flex-wrap gap-2">
          {["JavaScript", "React", "Node.js", "SQL", "Python", "AWS", "Figma"].map(
            (skill) => (
              <span
                key={skill}
                className="text-[11px] px-3 py-1 rounded-full bg-blue-50 text-blue-600"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      <div>
        <h4 className="text-[12px] font-medium mb-2">
          Soft Skills
        </h4>

        <div className="flex flex-wrap gap-2">
          {[
            "Communication",
            "Teamwork",
            "Problem-Solving",
            "Leadership",
            "Agile Methodologies",
          ].map((skill) => (
            <span
              key={skill}
              className="text-[11px] px-3 py-1 rounded-full bg-gray-100 text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DetailedAnalysis;