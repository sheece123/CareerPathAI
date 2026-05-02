import { motion } from "framer-motion";

const steps = [
  {
    title: "Assess Your Profile",
    desc: "Tell us about your skills, experience, and career aspirations through our intuitive assessment.",
  },
  {
    title: "Receive Your AI Path",
    desc: "Our AI analyzes your profile to generate a personalized career roadmap.",
  },
  {
    title: "Explore & Grow",
    desc: "Follow your tailored path, discover resources, and track your progress.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="mt-28 text-center px-6 md:px-12">
      <h2 className="text-3xl font-semibold text-gray-900">
        How It Works
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div key={i} className="text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium">
              {i + 1}
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              {step.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;