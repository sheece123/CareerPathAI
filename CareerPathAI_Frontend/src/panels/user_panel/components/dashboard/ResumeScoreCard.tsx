import Button from "../../../../shared/components/button";

const ResumeScoreCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-between w-full h-full">

      {/* TOP */}
      <div className="flex flex-col items-center">
        <h3 className="text-[13px] font-semibold mb-4">
          Resume Strength
        </h3>

        <div className="relative w-27.5 h-27.5 mb-4">
          <svg width="110" height="110">
            <circle
              cx="55"
              cy="55"
              r="45"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="55"
              cy="55"
              r="45"
              stroke="#6366f1"
              strokeWidth="8"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset="60"
              strokeLinecap="round"
              transform="rotate(-90 55 55)"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[20px] font-semibold">78</span>
            <span className="text-[11px] text-gray-500">/100</span>
          </div>
        </div>

        <p className="text-[12px] text-gray-500 text-center max-w-45">
          Your resume is strong but has room for improvement.
        </p>
      </div>

      {/* BUTTON BOTTOM */}
      <Button fullWidth size="sm">
        Improve Resume
      </Button>
    </div>
  );
};

export default ResumeScoreCard;