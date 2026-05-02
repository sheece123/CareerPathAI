// import { motion } from "framer-motion";

// const SkillBreakdown = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="grid grid-cols-2 gap-4"
//     >
//       {/* LEFT */}
//       <div className="bg-white border border-[#e5e7eb] rounded-xl p-4">
//         <h3 className="text-[13px] font-semibold mb-2 text-green-600">
//           ✓ Your Strengths
//         </h3>

//         <div className="text-[12px] text-[#6b7280] space-y-1">
//           <p>Visual Design — Advanced</p>
//           <p>Wireframing — Advanced</p>
//           <p>User Research — Proficient</p>
//           <p>Interaction Design — Proficient</p>
//           <p>Information Architecture — Proficient</p>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="bg-white border border-orange-200 rounded-xl p-4">
//         <h3 className="text-[13px] font-semibold mb-2 text-orange-500">
//           ⚠ Skills to Develop
//         </h3>

//         <div className="text-[12px] text-[#6b7280] space-y-1">
//           <p>Prototyping — Beginner</p>
//           <p>User Testing — Beginner</p>
//           <p>Data Analysis — Not Present</p>
//           <p>Accessibility — Not Present</p>
//           <p>UX Writing — Not Present</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default SkillBreakdown;


import { motion } from "framer-motion";

type Props = {
  matched: string[];
  missing: string[];
};

const SkillBreakdown = ({ matched, missing }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-2 gap-4"
    >
      {/* LEFT - MATCHED */}
      <div className="bg-white border border-[#e5e7eb] rounded-xl p-4">
        <h3 className="text-[13px] font-semibold mb-2 text-green-600">
          ✓ Your Strengths
        </h3>

        <div className="text-[12px] text-[#6b7280] space-y-1">
          {matched && matched.length > 0 ? (
            matched.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))
          ) : (
            <p>No matching skills found</p>
          )}
        </div>
      </div>

      {/* RIGHT - MISSING */}
      <div className="bg-white border border-orange-200 rounded-xl p-4">
        <h3 className="text-[13px] font-semibold mb-2 text-orange-500">
          ⚠ Skills to Develop
        </h3>

        <div className="text-[12px] text-[#6b7280] space-y-1">
          {missing && missing.length > 0 ? (
            missing.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))
          ) : (
            <p>No missing skills 🎉</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillBreakdown;