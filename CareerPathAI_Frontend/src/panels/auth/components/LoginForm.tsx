import { motion } from "framer-motion";
import Button from "../../../shared/components/button";
import Input from "../../../shared/components/input"
import Label from "../../../shared/components/label";

const LoginForm = () => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold text-center"
      >
        Welcome Back
      </motion.h2>

      <p className="text-sm text-gray-500 text-center mt-1">
        Log in to your CareerPathAI account
      </p>

      <form className="mt-6 space-y-4">
        <div>
          <Label>Email Address</Label>
          <Input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <Label>Password</Label>
          <Input type="password" placeholder="Enter your password" />
        </div>

        <div className="text-right text-xs text-indigo-600 cursor-pointer">
          Forgot Password?
        </div>

        <Button fullWidth type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;