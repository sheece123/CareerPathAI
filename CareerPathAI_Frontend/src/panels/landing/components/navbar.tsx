import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center px-6 md:px-12 py-4 bg-white sticky top-0 z-50"
    >
      <div className="font-semibold text-lg">CareerPathAI</div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
        <a href="#features" className="hover:text-black">Features</a>
        <a href="#how" className="hover:text-black">How it Works</a>
        <a href="#testimonials" className="hover:text-black">Testimonials</a>

        <Link to="/login" className="hover:text-black">Log In</Link>

        <Link
          to="/signup"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Sign Up
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;