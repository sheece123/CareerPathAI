import { motion } from "framer-motion";
import { FaMap, FaCheckCircle, FaChartLine } from "react-icons/fa";

const features = [
  {
    title: "AI-Personalized Roadmaps",
    description:
      "Receive a customized career plan based on your unique skills, interests, and goals.",
    icon: <FaMap />,
  },
  {
    title: "Skill Gap Analysis",
    description:
      "Identify the exact skills you need to develop to reach your desired role.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Market Trend Insights",
    description:
      "Stay ahead of the curve with real-time data on industry trends and in-demand jobs.",
    icon: <FaChartLine />,
  },
];

const Features = () => {
  return (
    <section id="features" className="mt-28 px-6 md:px-12 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        Discover a Smarter Way to Build Your Career
      </h2>

      <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm md:text-base">
        Our platform provides the tools and insights you need to make informed career decisions.
      </p>

      {/* Cards */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center"
          >
            {/* Icon Circle */}
            <div className="w-12 h-12 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-lg">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-5 font-semibold text-gray-900">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;