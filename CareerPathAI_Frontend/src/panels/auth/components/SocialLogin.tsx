import Button from "../../../shared/components/button";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLogin = () => {
  return (
    <div className="mt-6 space-y-3">
      
      {/* Divider */}
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <div className="flex-1 h-px bg-gray-300" />
        OR
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Google */}
      <Button variant="outline" fullWidth>
        <div className="flex items-center justify-center gap-3">
          <FaGoogle className="text-red-500 text-sm" />
          <span>Continue with Google</span>
        </div>
      </Button>

      {/* LinkedIn */}
      <Button variant="outline" fullWidth>
        <div className="flex items-center justify-center gap-3">
          <FaLinkedin className="text-blue-600 text-sm" />
          <span>Continue with LinkedIn</span>
        </div>
      </Button>

      {/* Signup */}
      <p className="text-xs text-center mt-4 text-gray-500">
        Don’t have an account?{" "}
        <Link
            to="/signup"
            className="text-indigo-600 hover:underline"
          >
            Log In
          </Link>
      </p>
    </div>
  );
};

export default SocialLogin;