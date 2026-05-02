import Button from "../../../shared/components/button";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const SocialSignup = () => {
  return (
    <div className="mt-5 space-y-3">
      
      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-3">
        
        <Button variant="outline">
          <div className="flex items-center justify-center gap-2">
            <FaGoogle className="text-red-500 text-sm" />
            <span className="text-xs">Sign Up with Google</span>
          </div>
        </Button>

        <Button variant="outline">
          <div className="flex items-center justify-center gap-2">
            <FaLinkedin className="text-blue-600 text-sm" />
            <span className="text-xs">Sign Up with LinkedIn</span>
          </div>
        </Button>

      </div>

      {/* Divider */}
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <div className="flex-1 h-px bg-gray-300" />
        OR
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      
    </div>
  );
};

export default SocialSignup;