// import { motion } from "framer-motion";

// const SummaryCard = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="bg-white border border-[#e5e7eb] rounded-xl p-4 flex gap-4"
//     >
//       <div className="w-30 h-20 bg-gray-200 rounded-lg" />

//       <div>
//         <h3 className="text-[13px] font-semibold mb-1">
//           Analysis Summary
//         </h3>

//         <p className="text-[12px] text-[#6b7280] leading-4.5">
//           You meet 70% of the required skills. You have a strong foundation
//           in core design principles but need to develop your prototyping
//           and user testing skills.
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default SummaryCard;



import { motion } from "framer-motion";

type Props = {
  recommendation: string;
};

const SummaryCard = ({ recommendation }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border border-[#e5e7eb] rounded-xl p-4 flex gap-4"
    >
      {/* IMAGE / PLACEHOLDER */}
      <div className="w-30 h-20 bg-gray-200 rounded-lg" />

      <div>
        <h3 className="text-[13px] font-semibold mb-1">
          Analysis Summary
        </h3>

        <p className="text-[12px] text-[#6b7280] leading-4.5">
          {recommendation}
        </p>
      </div>
    </motion.div>
  );
};

export default SummaryCard;