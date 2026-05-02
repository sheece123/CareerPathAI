type Props = {
  value: string;
  onChange: (val: string) => void;
};

const SkillInput = ({ value, onChange }: Props) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="e.g., React (Advanced), Node.js (Intermediate)"
      className="w-full text-[13px] px-3 py-2.5 border border-[#d1d5db] rounded-lg outline-none focus:ring-2 focus:ring-[#4f46e5]/20"
    />
  );
};

export default SkillInput;