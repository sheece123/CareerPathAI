import Button from "../../../../shared/components/button";

const WelcomeCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">

      <p className="text-[12px] text-indigo-500 font-medium mb-1">
        Predicted Career
      </p>

      <h3 className="text-[16px] font-semibold mb-1">
        Top Match: UX Designer
      </h3>

      <p className="text-[13px] text-gray-500 mb-3">
        Based on your profile, AI predicts this is your strongest career path.
      </p>

      <p className="text-[12px] text-gray-500 mb-1">
        Confidence Score: 85%
      </p>

      <div className="w-full h-1.25 bg-gray-200 rounded-full mb-4">
        <div className="h-1.25 bg-indigo-500 rounded-full w-[85%]" />
      </div>

      <Button size="sm">Explore Path</Button>
    </div>
  );
};

export default WelcomeCard;