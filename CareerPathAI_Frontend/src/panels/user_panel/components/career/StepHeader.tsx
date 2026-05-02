type Props = {
  step: number;
};

const StepHeader = ({ step }: Props) => {
  const percent = (step / 4) * 100;

  return (
    <>
      {/* TITLE */}
      <div className="text-center mb-7">
        <h1 className="text-[26px] font-semibold mb-2">
          Career Prediction
        </h1>

        <p className="text-[13px] text-[#6b7280]">
          Tell us a bit about yourself to get a personalized career prediction.
          The more information you provide, the more accurate your results will be.
        </p>
      </div>

      {/* PROGRESS */}
      <div className="mb-6">
        <div className="flex justify-between text-[12px] text-[#6b7280] mb-1.5">
          <span>Step {step} of 4</span>
          <span>{percent}% Complete</span>
        </div>

        <div className="w-full h-1.5 bg-[#e5e7eb] rounded-full">
          <div
            className="h-1.5 bg-[#4f46e5] rounded-full"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default StepHeader;