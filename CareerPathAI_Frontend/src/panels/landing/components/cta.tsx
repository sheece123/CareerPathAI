import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-32 px-6 md:px-12 text-center">
      <div className="max-w-2xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight"
        >
          Ready to Unlock Your Professional Potential?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-500 text-sm md:text-base"
        >
          Join thousands of professionals who are taking control of their careers with AI-driven insights. Your next great opportunity is just a few clicks away.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-indigo-600 text-white px-7 py-3 rounded-md text-sm md:text-base font-medium hover:bg-indigo-700 transition duration-200"
          >
            Find Your Career Path Today
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;