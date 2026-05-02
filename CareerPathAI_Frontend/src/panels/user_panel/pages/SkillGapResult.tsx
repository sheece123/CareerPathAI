// import { motion } from "framer-motion";
// import SummaryCard from "../components/skill_gap/SummaryCard";
// import SkillProgressCard from "../components/skill_gap/SkillProgressCard";
// import SkillBreakdown from "../components/skill_gap/SkillBreakdown";
// import BridgeGapCard from "../components/skill_gap/BridgeGapCard";

// const SkillGapResult = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 14 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="px-6 py-6 max-w-225 mx-auto"
//     >
//       {/* HEADER */}
//       <div className="mb-5">
//         <h1 className="text-[22px] font-semibold text-[#111827]">
//           Skill Gap Analysis
//         </h1>
//         <p className="text-[12px] text-[#4f46e5] mt-0.5">
//           for UX Designer
//         </p>
//       </div>

//       <div className="flex flex-col gap-5">
//         <SummaryCard />
//         <SkillProgressCard />
//         <SkillBreakdown />
//         <BridgeGapCard />
//       </div>

//       {/* FOOTER */}
//       <p className="text-[10px] text-[#9ca3af] text-center mt-6">
//         © 2024 CareerPathAI. All rights reserved.
//       </p>
//     </motion.div>
//   );
// };

// export default SkillGapResult;


import { motion } from "framer-motion";
import SummaryCard from "../components/skill_gap/SummaryCard";
import SkillProgressCard from "../components/skill_gap/SkillProgressCard";
import SkillBreakdown from "../components/skill_gap/SkillBreakdown";
import BridgeGapCard from "../components/skill_gap/BridgeGapCard";
import { useLocation } from "react-router-dom";

const SkillGapResult = () => {
  const location = useLocation();
  const response = location.state;

  // 🚨 SAFETY CHECK
  if (!response) {
    return (
      <div className="p-6">
        No data found. Please submit the form again.
      </div>
    );
  }

  const data = response; // already res.data.data from API

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-6 py-6 max-w-225 mx-auto"
    >
      {/* HEADER */}
      <div className="mb-5">
        <h1 className="text-[22px] font-semibold text-[#111827]">
          Skill Gap Analysis
        </h1>
        <p className="text-[12px] text-[#4f46e5] mt-0.5">
          for {data.target_field}
        </p>
      </div>

      <div className="flex flex-col gap-5">

        <SummaryCard recommendation={data.recommendation} />

        <SkillProgressCard progress={data.progress} />

        <SkillBreakdown
          matched={data.matched_skills}
          missing={data.missing_skills}
        />

        <BridgeGapCard skills={data.priority_skills} />

      </div>

      {/* FOOTER */}
      <p className="text-[10px] text-[#9ca3af] text-center mt-6">
        © 2024 CareerPathAI. All rights reserved.
      </p>
    </motion.div>
  );
};

export default SkillGapResult;