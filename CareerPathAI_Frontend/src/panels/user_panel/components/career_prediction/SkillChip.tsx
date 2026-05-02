type Props = {
  label: string;
};

const SkillChip = ({ label }: Props) => {
  return (
    <span className="text-[11px] px-2.5 py-1 bg-[#f3f4f6] text-[#374151] rounded-md">
      {label}
    </span>
  );
};

export default SkillChip;