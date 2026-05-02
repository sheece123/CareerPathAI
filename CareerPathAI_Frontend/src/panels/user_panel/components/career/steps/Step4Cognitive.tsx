// import { forwardRef, useImperativeHandle, useState } from "react";
// import Select from "../../../../../shared/components/select";

// const Step4Cognitive = forwardRef((_, ref) => {
//   const [strengths, setStrengths] = useState("");
//   const [workPref, setWorkPref] = useState("");
//   const [learning, setLearning] = useState("");
//   const [error, setError] = useState(false);

//   useImperativeHandle(ref, () => ({
//     validate: () => {
//       const valid = strengths && workPref && learning;
//       setError(!valid);
//       return valid;
//     },
//   }));

//   return (
//     <>
//       <h2 className="text-[14px] font-semibold mb-4">
//         Cognitive Strengths
//       </h2>

//       <div className="grid grid-cols-2 gap-4">

//         <input
//           className={`input col-span-2 ${error && !strengths && "input-error"}`}
//           placeholder="Strength Areas"
//           value={strengths}
//           onChange={(e) => setStrengths(e.target.value)}
//         />

//         <Select
//           value={workPref}
//           onChange={setWorkPref}
//           options={["Individual Work", "Team Work"]}
//           placeholder="Work Preference"
//           error={error && !workPref}
//         />

//         <Select
//           value={learning}
//           onChange={setLearning}
//           options={["Practical", "Theoretical", "Mixed"]}
//           placeholder="Learning Style"
//           error={error && !learning}
//         />

//       </div>
//     </>
//   );
// });

// export default Step4Cognitive;



import { forwardRef, useImperativeHandle, useState } from "react";
import Select from "../../../../../shared/components/select";

const Step4Cognitive = forwardRef((_, ref) => {
  const [strengths, setStrengths] = useState("");
  const [workPref, setWorkPref] = useState("");
  const [learning, setLearning] = useState("");
  const [error, setError] = useState(false);

  useImperativeHandle(ref, () => ({
    validate: () => {
      const valid = strengths && workPref && learning;
      setError(!valid);
      return valid;
    },

    getData: () => {
      // Convert user input into weighted strengths (basic fallback logic)
      return {
        cognitive: {
          strengths: {
            logical: 3,
            mathematical: 3,
            communication: strengths.toLowerCase().includes("communication") ? 5 : 3,
            creativity: strengths.toLowerCase().includes("creative") ? 5 : 3,
            problem_solving: strengths.toLowerCase().includes("problem") ? 5 : 3,
          },
        },
      };
    },
  }));

  return (
    <>
      <h2 className="text-[14px] font-semibold mb-4">
        Cognitive Strengths
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          className={`input col-span-2 ${error && !strengths ? "input-error" : ""}`}
          placeholder="Strength Areas (e.g., creativity, communication)"
          value={strengths}
          onChange={(e) => setStrengths(e.target.value)}
        />

        <Select
          value={workPref}
          onChange={setWorkPref}
          options={["Individual Work", "Team Work"]}
          placeholder="Work Preference"
          error={error && !workPref}
        />

        <Select
          value={learning}
          onChange={setLearning}
          options={["Practical", "Theoretical", "Mixed"]}
          placeholder="Learning Style"
          error={error && !learning}
        />

      </div>
    </>
  );
});

export default Step4Cognitive;