import Button from "../../../../shared/components/button";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  onNext: () => void;
  onBack: () => void;
};

const StepLayout = ({ children, onNext, onBack }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-[#e5e7eb] rounded-xl px-6 py-5.5"
    >
      {children}

      <div className="border-t border-[#e5e7eb] mt-5 mb-4" />

      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="text-[12px] px-3.5 py-1.5 border border-[#d1d5db] rounded-lg"
        >
          Back
        </button>

        <Button size="sm" onClick={onNext}>
          Next Step
        </Button>
      </div>
    </motion.div>
  );
};

export default StepLayout;