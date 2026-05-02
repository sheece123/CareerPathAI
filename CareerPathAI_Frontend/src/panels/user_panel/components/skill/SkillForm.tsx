// import { motion } from "framer-motion";
// import { useState } from "react";
// import Button from "../../../../shared/components/button";

// const SkillForm = () => {
//   const [targetField, setTargetField] = useState("");
//   const [skill1, setSkill1] = useState("");
//   const [skill2, setSkill2] = useState("");
//   const [skill3, setSkill3] = useState("");

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.25 }}
//       className="bg-white border border-[#e5e7eb] rounded-xl px-6 py-5.5"
//     >
//       {/* HEADER */}
//       <div>
//         <h2 className="text-[14px] font-semibold text-[#111827] mb-0.5">
//           Skill Input
//         </h2>
//         <p className="text-[12px] text-[#6b7280]">
//           Provide your target field and current skill level.
//         </p>
//       </div>

//       {/* DIVIDER */}
//       <div className="border-t border-[#e5e7eb] mt-3.5 mb-4.5" />

//       {/* GRID FORM (IMPORTANT — EXACT MATCH) */}
//       <div className="grid grid-cols-2 gap-x-4 gap-y-4">

//         {/* 1 */}
//         <div>
//           <label className="block text-[12px] text-[#374151] mb-1.5">
//             Targeted Field
//           </label>
//           <input
//             value={targetField}
//             onChange={(e) => setTargetField(e.target.value)}
//             placeholder="e.g., Frontend Development"
//             className="w-full h-10 px-3 text-[13px] bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none"
//           />
//         </div>

//         {/* 2 */}
//         <div>
//           <label className="block text-[12px] text-[#374151] mb-1.5">
//             Skill (Advanced)
//           </label>
//           <input
//             value={skill1}
//             onChange={(e) => setSkill1(e.target.value)}
//             placeholder="e.g., React"
//             className="w-full h-10 px-3 text-[13px] bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none"
//           />
//         </div>

//         {/* 3 */}
//         <div>
//           <label className="block text-[12px] text-[#374151] mb-1.5">
//             Skill (Proficient)
//           </label>
//           <input
//             value={skill2}
//             onChange={(e) => setSkill2(e.target.value)}
//             placeholder="e.g., Node.js"
//             className="w-full h-10 px-3 text-[13px] bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none"
//           />
//         </div>

//         {/* 4 */}
//         <div>
//           <label className="block text-[12px] text-[#374151] mb-1.5">
//             Skill (Beginner)
//           </label>
//           <input
//             value={skill3}
//             onChange={(e) => setSkill3(e.target.value)}
//             placeholder="e.g., AWS"
//             className="w-full h-10 px-3 text-[13px] bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none"
//           />
//         </div>

//       </div>

//       {/* DIVIDER */}
//       <div className="border-t border-[#e5e7eb] mt-5 mb-4" />

//       {/* ACTIONS */}
//       <div className="flex justify-between items-center">

//         <Button size="sm">
//           Submit
//         </Button>
//       </div>
//     </motion.div>
//   );
// };

// export default SkillForm;


import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../../../../shared/components/button";

type Props = {
  onSubmit: (data: any) => void;
};

const SkillForm = ({ onSubmit }: Props) => {
  const [targetField, setTargetField] = useState("");
  const [skill1, setSkill1] = useState(""); // advanced
  const [skill2, setSkill2] = useState(""); // intermediate
  const [skill3, setSkill3] = useState(""); // beginner

  const handleSubmit = () => {
    // CLEAN VALUES (remove empty)
    const advanced = skill1 ? [skill1] : [];
    const intermediate = skill2 ? [skill2] : [];
    const beginner = skill3 ? [skill3] : [];

    const payload = {
      target_field: targetField.trim(),
      advanced_skills: advanced,
      intermediate_skills: intermediate,
      beginner_skills: beginner,
    };

    onSubmit(payload);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white border border-[#e5e7eb] rounded-xl px-6 py-5.5"
    >
      {/* HEADER */}
      <div>
        <h2 className="text-[14px] font-semibold text-[#111827] mb-0.5">
          Skill Input
        </h2>
        <p className="text-[12px] text-[#6b7280]">
          Provide your target field and current skill level.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#e5e7eb] mt-3.5 mb-4.5" />

      {/* GRID */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">

        {/* TARGET FIELD */}
        <div>
          <label className="block text-[12px] text-[#374151] mb-1.5">
            Targeted Field
          </label>
          <input
            value={targetField}
            onChange={(e) => setTargetField(e.target.value)}
            placeholder="e.g., Frontend Development"
            className="w-full h-10 px-3 text-[13px] bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none"
          />
        </div>

        {/* ADVANCED */}
        <div>
          <label className="block text-[12px] text-[#374151] mb-1.5">
            Skill (Advanced)
          </label>
          <input
            value={skill1}
            onChange={(e) => setSkill1(e.target.value)}
            placeholder="e.g., React"
            className="w-full h-10 px-3 text-[13px] bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none"
          />
        </div>

        {/* INTERMEDIATE */}
        <div>
          <label className="block text-[12px] text-[#374151] mb-1.5">
            Skill (Proficient)
          </label>
          <input
            value={skill2}
            onChange={(e) => setSkill2(e.target.value)}
            placeholder="e.g., Node.js"
            className="w-full h-10 px-3 text-[13px] bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none"
          />
        </div>

        {/* BEGINNER */}
        <div>
          <label className="block text-[12px] text-[#374151] mb-1.5">
            Skill (Beginner)
          </label>
          <input
            value={skill3}
            onChange={(e) => setSkill3(e.target.value)}
            placeholder="e.g., AWS"
            className="w-full h-10 px-3 text-[13px] bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none"
          />
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#e5e7eb] mt-5 mb-4" />

      {/* ACTION */}
      <div className="flex justify-between items-center">
        <Button size="sm" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </motion.div>
  );
};

export default SkillForm;