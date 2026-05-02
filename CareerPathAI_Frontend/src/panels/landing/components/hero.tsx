import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="text-center mt-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
      >
        Navigate Your Career <br />
        with AI-Powered <br />
        Precision.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-gray-500 max-w-xl mx-auto text-sm md:text-base"
      >
        Unlock your potential with personalized guidance, skill mapping, and job matching powered by AI.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
      >
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Get Started Free
        </button>

        <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300">
          Watch Demo
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;