import { motion } from "framer-motion";

const skills = [
  { name: "Visual Design", value: 90, color: "bg-blue-500" },
  { name: "Wireframing", value: 85, color: "bg-green-500" },
  { name: "User Research", value: 80, color: "bg-blue-400" },
  { name: "Prototyping", value: 40, color: "bg-orange-400" },
  { name: "User Testing", value: 30, color: "bg-orange-300" },
];

const SkillProgressCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border border-[#e5e7eb] rounded-xl p-4"
    >
      <h3 className="text-[13px] font-semibold mb-2">
        Skill Proficiency
      </h3>

      <p className="text-[12px] mb-3">
        <span className="font-semibold text-[#111827]">
          7/10 Skills Met
        </span>
        <span className="text-green-600 ml-1.5">+70%</span>
      </p>

      <div className="space-y-2.5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>

            <div className="w-full h-1.5 bg-[#e5e7eb] rounded-full">
              <div
                className={`h-1.5 rounded-full ${skill.color}`}
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillProgressCard;