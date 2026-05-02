// import { motion } from "framer-motion";
// import ResultCard from "../components/career_prediction/ResultCard";

// const CareerResults = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 12 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="max-w-205 mx-auto px-6 py-6"
//     >
//       {/* HEADER */}
//       <h1 className="text-[20px] font-semibold mb-1">
//         Your Career Prediction Results
//       </h1>

//       <p className="text-[12px] text-[#6b7280] mb-3.5">
//         Based on your assessment, here are the top career paths we recommend for you.
//       </p>

//       {/* ACTION BUTTONS */}
//       <div className="flex gap-2 mb-5">
//         <button className="bg-[#4f46e5] text-white text-[12px] px-3 py-1.5 rounded-md">
//           Skill Gap Analysis
//         </button>

//         <button className="bg-[#f3f4f6] text-[#374151] text-[12px] px-3 py-1.5 rounded-md">
//           Course Recommendations
//         </button>

//         <button className="text-[12px] px-3 py-1.5">
//           Download Report
//         </button>
//       </div>

//       {/* CARDS */}
//       <div className="flex flex-col gap-4">

//         <ResultCard
//           title="Data Scientist"
//           tag="Top Recommendation"
//           match="92% Match"
//           growth="High Growth"
//           salary="$95,000 - $160,000 / year"
//           skills={["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics"]}
//           image="/images/data.jpg"
//           variant="primary"
//         />

//         <ResultCard
//           title="UX/UI Designer"
//           tag="Second Recommendation"
//           match="85% Match"
//           growth="Strong Growth"
//           salary="$80,000 - $145,000 / year"
//           skills={["Figma", "User Research", "Prototyping", "Wireframing"]}
//           image="/images/design.jpg"
//           variant="secondary"
//         />

//         <ResultCard
//           title="Cloud Solutions Architect"
//           tag="Third Recommendation"
//           match="78% Match"
//           growth="Stable Growth"
//           salary="$120,000 - $180,000 / year"
//           skills={["AWS/Azure/GCP", "Networking", "Security", "DevOps"]}
//           image="/images/cloud.jpg"
//           variant="tertiary"
//         />

//       </div>
//     </motion.div>
//   );
// };

// export default CareerResults;



import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ResultCard from "../components/career_prediction/ResultCard";

const CareerResults = () => {
  const location = useLocation();
  const data = location.state;

  // SAFETY CHECK
  if (!data || !data.top_careers) {
    return (
      <div className="p-6">
        No results found. Please run prediction again.
      </div>
    );
  }

  const getTag = (index: number) => {
    if (index === 0) return "Top Recommendation";
    if (index === 1) return "Second Recommendation";
    return "Third Recommendation";
  };

  const getVariant = (index: number) => {
    if (index === 0) return "primary";
    if (index === 1) return "secondary";
    return "tertiary";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-205 mx-auto px-6 py-6"
    >
      {/* HEADER */}
      <h1 className="text-[20px] font-semibold mb-1">
        Your Career Prediction Results
      </h1>

      <p className="text-[12px] text-[#6b7280] mb-3.5">
        Based on your assessment, here are the top career paths we recommend for you.
      </p>

      {/* ACTION BUTTONS */}
      <div className="flex gap-2 mb-5">
        <button className="bg-[#4f46e5] text-white text-[12px] px-3 py-1.5 rounded-md">
          Skill Gap Analysis
        </button>

        <button className="bg-[#f3f4f6] text-[#374151] text-[12px] px-3 py-1.5 rounded-md">
          Course Recommendations
        </button>

        <button className="text-[12px] px-3 py-1.5">
          Download Report
        </button>
      </div>

      {/* CARDS */}
      <div className="flex flex-col gap-4">
        {data.top_careers.map((item: any, index: number) => (
          <ResultCard
            key={index}
            title={item.career}
            tag={getTag(index)}
            match={`${Math.round(item.score * 100)}% Match`}
            growth={item.growth}
            salary={item.salary}
            skills={[]} // backend doesn’t provide skills yet
            image="/images/default.jpg"
            variant={getVariant(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CareerResults;