import { motion } from "framer-motion";
import SkillForm from "../components/skill/SkillForm";

const SkillGap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-center pt-18"
    >
      <div className="w-full max-w-190">

        {/* HEADER */}
        <div className="text-center mb-7">
          <h1 className="text-[26px] font-semibold text-[#111827] mb-2">
            Skill Gap Analysis
          </h1>

          <p className="text-[13px] text-[#6b7280] leading-5">
            Tell us a bit about yourself to get a personalized career prediction.
            The more information you provide, the more accurate your results will be.
          </p>
        </div>

        <SkillForm />

      </div>
    </motion.div>
  );
};

export default SkillGap;