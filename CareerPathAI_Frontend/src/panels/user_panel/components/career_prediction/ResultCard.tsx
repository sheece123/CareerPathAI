import { motion } from "framer-motion";
import Badge from "./Badge";
import SkillChip from "./SkillChip";

type Props = {
  title: string;
  tag: string;
  match: string;
  growth: string;
  salary: string;
  skills: string[];
  image: string;
  variant?: "primary" | "secondary" | "tertiary";
};

const ResultCard = ({
  title,
  tag,
  match,
  growth,
  salary,
  skills,
  image,
  variant = "primary",
}: Props) => {
  const matchColor =
    variant === "primary"
      ? "green"
      : variant === "secondary"
      ? "yellow"
      : "orange";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-[#e5e7eb] rounded-xl p-4 flex gap-4 items-center"
    >
      {/* IMAGE */}
      <div className="w-27.5 h-22.5 rounded-[10px] overflow-hidden bg-gray-200">
        <img src={image} className="w-full h-full object-cover" />
      </div>

      {/* CONTENT */}
      <div className="flex-1">

        <p className="text-[11px] text-[#4f46e5] mb-0.5">
          {tag}
        </p>

        <h3 className="text-[15px] font-semibold text-[#111827] mb-1.5">
          {title}
        </h3>

        {/* BADGES */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <Badge text={match} color={matchColor as any} />
          <span className="text-[11px] text-[#6b7280]">• {growth}</span>
        </div>

        <p className="text-[12px] text-[#6b7280] mb-1.5">
          Potential Salary: {salary}
        </p>

        {/* SKILLS */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {skills.map((s) => (
            <SkillChip key={s} label={s} />
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <button className="text-[12px] px-3 py-1.5 bg-[#4f46e5] text-white rounded-md">
        View Details
      </button>
    </motion.div>
  );
};

export default ResultCard;