const skills = ["Figma", "User Research", "Prototyping", "Wireframing", "Usability Testing"];

const SkillGapsCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">

      <h3 className="text-[14px] font-semibold mb-1">
        Skill Gaps for UX Designer
      </h3>

      <p className="text-[12px] text-gray-500 mb-4">
        Focus on these areas to strengthen your profile.
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-[11px] bg-indigo-50 text-indigo-600 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillGapsCard;