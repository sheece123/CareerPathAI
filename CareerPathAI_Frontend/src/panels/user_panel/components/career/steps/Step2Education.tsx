// import { forwardRef, useImperativeHandle, useState } from "react";
// import Select from "../../../../../shared/components/select";

// const Step2Education = forwardRef((_, ref) => {
//   const [qualification, setQualification] = useState("");
//   const [field, setField] = useState("");
//   const [subjects, setSubjects] = useState("");
//   const [performance, setPerformance] = useState("");
//   const [error, setError] = useState(false);

//   useImperativeHandle(ref, () => ({
//     validate: () => {
//       const valid = qualification && field && subjects && performance;
//       setError(!valid);
//       return valid;
//     },
//   }));

//   return (
//     <>
//       <h2 className="text-[14px] font-semibold mb-4">
//         Education Background
//       </h2>

//       <div className="grid grid-cols-2 gap-4">

//         <input
//           className={`input ${error && !qualification && "input-error"}`}
//           placeholder="Highest Qualification"
//           value={qualification}
//           onChange={(e) => setQualification(e.target.value)}
//         />

//         <input
//           className={`input ${error && !field && "input-error"}`}
//           placeholder="Field of Study"
//           value={field}
//           onChange={(e) => setField(e.target.value)}
//         />

//         <input
//           className={`input col-span-2 ${error && !subjects && "input-error"}`}
//           placeholder="Key Subjects"
//           value={subjects}
//           onChange={(e) => setSubjects(e.target.value)}
//         />

//         <div className="col-span-2">
//           <Select
//             value={performance}
//             onChange={setPerformance}
//             options={["High", "Average", "Low"]}
//             placeholder="Academic Performance"
//             error={error && !performance}
//           />
//         </div>

//       </div>
//     </>
//   );
// });

// export default Step2Education;


import { forwardRef, useImperativeHandle, useState } from "react";
import Select from "../../../../../shared/components/select";

const Step2Education = forwardRef((_, ref) => {
  const [qualification, setQualification] = useState("");
  const [field, setField] = useState("");
  const [subjects, setSubjects] = useState("");
  const [performance, setPerformance] = useState("");
  const [error, setError] = useState(false);

  useImperativeHandle(ref, () => ({
    validate: () => {
      const valid = qualification && field && subjects && performance;
      setError(!valid);
      return valid;
    },

    getData: () => {
      return {
        education: {
          field_of_study: field,
        },
      };
    },
  }));

  return (
    <>
      <h2 className="text-[14px] font-semibold mb-4">
        Education Background
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          className={`input ${error && !qualification ? "input-error" : ""}`}
          placeholder="Highest Qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />

        <input
          className={`input ${error && !field ? "input-error" : ""}`}
          placeholder="Field of Study"
          value={field}
          onChange={(e) => setField(e.target.value)}
        />

        <input
          className={`input col-span-2 ${error && !subjects ? "input-error" : ""}`}
          placeholder="Key Subjects"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
        />

        <div className="col-span-2">
          <Select
            value={performance}
            onChange={setPerformance}
            options={["High", "Average", "Low"]}
            placeholder="Academic Performance"
            error={error && !performance}
          />
        </div>

      </div>
    </>
  );
});

export default Step2Education;