// import { useRef, useState } from "react";
// import StepLayout from "../components/career/StepLayout";
// import StepHeader from "../components/career/StepHeader";
// import Step1Basic from "../components/career/steps/Step1Baisc";
// import Step2Education from "../components/career/steps/Step2Education";
// import Step3Skills from "../components/career/steps/Step3Skills";
// import Step4Cognitive from "../components/career/steps/Step4Cognitive";

// const CareerPrediction = () => {
//   const [step, setStep] = useState(1);

//   const stepRef = useRef<any>(null);

//   const handleNext = () => {
//     const isValid = stepRef.current?.validate();
//     if (!isValid) return;

//     setStep((s) => Math.min(s + 1, 4));
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return <Step1Basic ref={stepRef} />;
//       case 2:
//         return <Step2Education ref={stepRef} />;
//       case 3:
//         return <Step3Skills ref={stepRef} />;
//       case 4:
//         return <Step4Cognitive ref={stepRef} />;
//     }
//   };

//   return (
//     <div className="flex justify-center pt-18">
//       <div className="w-full max-w-190">
//         <StepHeader step={step} />
//         <StepLayout
//           onNext={handleNext}
//           onBack={() => setStep((s) => Math.max(s - 1, 1))}
//         >
//           {renderStep()}
//         </StepLayout>
//       </div>
//     </div>
//   );
// };

// export default CareerPrediction;



import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import StepLayout from "../components/career/StepLayout";
import StepHeader from "../components/career/StepHeader";

import Step1Basic from "../components/career/steps/Step1Baisc";
import Step2Education from "../components/career/steps/Step2Education";
import Step3Skills from "../components/career/steps/Step3Skills";
import Step4Cognitive from "../components/career/steps/Step4Cognitive";

import { predictCareer } from "@/../../src/lib/api";

const CareerPrediction = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const stepRef = useRef<any>(null);
  const navigate = useNavigate();

  const handleNext = async () => {
    const isValid = stepRef.current?.validate();
    if (!isValid) return;

    const stepData = stepRef.current?.getData();

    const updatedData = {
      ...formData,
      ...stepData,
    };

    setFormData(updatedData);

    // FINAL STEP → CALL API
    if (step === 4) {
      try {
        const data = await predictCareer(updatedData);

        navigate("/user/careerprediction", {
          state: data,
        });
      } catch (error) {
        console.error(error);
      }

      return;
    }

    setStep((s) => Math.min(s + 1, 4));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1Basic ref={stepRef} />;
      case 2:
        return <Step2Education ref={stepRef} />;
      case 3:
        return <Step3Skills ref={stepRef} />;
      case 4:
        return <Step4Cognitive ref={stepRef} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center pt-18">
      <div className="w-full max-w-190">
        <StepHeader step={step} />

        <StepLayout
          onNext={handleNext}
          onBack={() => setStep((s) => Math.max(s - 1, 1))}
        >
          {renderStep()}
        </StepLayout>
      </div>
    </div>
  );
};

export default CareerPrediction;