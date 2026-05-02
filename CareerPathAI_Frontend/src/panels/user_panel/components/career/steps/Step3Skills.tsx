import { forwardRef, useImperativeHandle, useState } from "react";
import Select from "../../../../../shared/components/select";

const Step3Skills = forwardRef((_, ref) => {
  const [skills, setSkills] = useState("");
  const [level, setLevel] = useState("");
  const [tools, setTools] = useState("");
  const [error, setError] = useState(false);

  useImperativeHandle(ref, () => ({
    validate: () => {
      const valid = skills && level;
      setError(!valid);
      return valid;
    },
  }));

  return (
    <>
      <h2 className="text-[14px] font-semibold mb-4">Skills</h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          className={`input col-span-2 ${error && !skills && "input-error"}`}
          placeholder="Technical Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <Select
          value={level}
          onChange={setLevel}
          options={["Beginner", "Intermediate", "Advanced"]}
          placeholder="Skill Level"
          error={error && !level}
        />

        <input
          className="input"
          placeholder="Tools / Technologies"
          value={tools}
          onChange={(e) => setTools(e.target.value)}
        />

      </div>
    </>
  );
});

export default Step3Skills;