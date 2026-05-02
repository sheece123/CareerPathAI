import { motion } from "framer-motion";
import Button from "../../../shared/components/button";
import Input from "../../../shared/components/input";
import Label from "../../../shared/components/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold text-center"
      >
        Create Your Account
      </motion.h2>

      <p className="text-sm text-gray-500 text-center mt-1">
        Start your journey to a brighter career path.
      </p>

      {/* FORM */}
      <form className="mt-6 space-y-4">
        
        <div>
          <Label>Full Name</Label>
          <Input placeholder="Enter your full name" />
        </div>

        <div>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter your email address" />
        </div>

        {/* Password */}
        <div>
          <Label>Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <Label>Confirm Password</Label>
          <div className="relative">
            <Input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </span>
          </div>
        </div>

        <Button fullWidth type="submit">
          Create Account
        </Button>

        <p className="text-xs text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 hover:underline"
          >
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;