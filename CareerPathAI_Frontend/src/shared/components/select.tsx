import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

type Props = {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  error?: boolean;
};

const Select = ({ value, onChange, options, placeholder, error }: Props) => {
  return (
    <div className="relative">
      <Listbox value={value} onChange={onChange}>
        <Listbox.Button
          className={`w-full h-10 px-3 text-[13px] flex items-center justify-between bg-[#f9fafb] border rounded-lg ${
            error ? "border-red-500" : "border-[#e5e7eb]"
          }`}
        >
          <span className={value ? "text-[#111827]" : "text-[#9ca3af]"}>
            {value || placeholder}
          </span>
          <ChevronDown size={16} className="text-[#6b7280]" />
        </Listbox.Button>

        <Listbox.Options className="absolute z-20 mt-1 w-full bg-white border border-[#e5e7eb] rounded-lg shadow-md">
          {options.map((opt) => (
            <Listbox.Option
              key={opt}
              value={opt}
              className="px-3 py-2 text-[13px] hover:bg-[#f3f4f6] cursor-pointer"
            >
              {opt}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default Select;