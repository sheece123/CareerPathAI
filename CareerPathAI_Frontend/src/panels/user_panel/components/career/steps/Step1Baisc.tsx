// import { forwardRef, useImperativeHandle, useState } from "react";
// import Select from "../../../../../shared/components/select";

// const Step1Basic = forwardRef((_, ref) => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [status, setStatus] = useState("");
//   const [workStyle, setWorkStyle] = useState("");
//   const [career, setCareer] = useState("");
//   const [error, setError] = useState(false);

//   useImperativeHandle(ref, () => ({
//     validate: () => {
//       const valid = name && age && status && workStyle && career;
//       setError(!valid);
//       return valid;
//     },
//   }));

//   return (
//     <>
//       <h2 className="text-[14px] font-semibold mb-4">Basic Profile</h2>

//       <div className="grid grid-cols-2 gap-4">

//         <input
//           className={`input ${error && !name && "input-error"}`}
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           className={`input ${error && !age && "input-error"}`}
//           placeholder="Age Range"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />

//         <Select
//           value={status}
//           onChange={setStatus}
//           options={["Student", "Graduate", "Working"]}
//           placeholder="Current Status"
//           error={error && !status}
//         />

//         <Select
//           value={workStyle}
//           onChange={setWorkStyle}
//           options={[
//             "Analytical",
//             "Creative",
//             "Technical",
//             "Social / People-oriented",
//           ]}
//           placeholder="Preferred Work Style"
//           error={error && !workStyle}
//         />

//         <div className="col-span-2">
//           <Select
//             value={career}
//             onChange={setCareer}
//             options={[
//               "IT / Tech",
//               "Business",
//               "Healthcare",
//               "Arts / Design",
//               "Science / Research",
//             ]}
//             placeholder="Career Inclination"
//             error={error && !career}
//           />
//         </div>

//       </div>
//     </>
//   );
// });

// export default Step1Basic;


import { forwardRef, useImperativeHandle, useState } from "react";
import Select from "../../../../../shared/components/select";

const Step1Basic = forwardRef((_, ref) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");
  const [workStyle, setWorkStyle] = useState("");
  const [career, setCareer] = useState("");
  const [error, setError] = useState(false);

  useImperativeHandle(ref, () => ({
    validate: () => {
      const valid = name && age && status && workStyle && career;
      setError(!valid);
      return valid;
    },

    getData: () => {
      return {
        profile: {
          work_style: workStyle,
        },
      };
    },
  }));

  return (
    <>
      <h2 className="text-[14px] font-semibold mb-4">Basic Profile</h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          className={`input ${error && !name ? "input-error" : ""}`}
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className={`input ${error && !age ? "input-error" : ""}`}
          placeholder="Age Range"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <Select
          value={status}
          onChange={setStatus}
          options={["Student", "Graduate", "Working"]}
          placeholder="Current Status"
          error={error && !status}
        />

        <Select
          value={workStyle}
          onChange={setWorkStyle}
          options={[
            "Analytical",
            "Creative",
            "Technical",
            "Social / People-oriented",
          ]}
          placeholder="Preferred Work Style"
          error={error && !workStyle}
        />

        <div className="col-span-2">
          <Select
            value={career}
            onChange={setCareer}
            options={[
              "IT / Tech",
              "Business",
              "Healthcare",
              "Arts / Design",
              "Science / Research",
            ]}
            placeholder="Career Inclination"
            error={error && !career}
          />
        </div>

      </div>
    </>
  );
});

export default Step1Basic;