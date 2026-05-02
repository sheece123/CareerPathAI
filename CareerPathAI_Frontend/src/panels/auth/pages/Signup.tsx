import AuthLayout from "../components/AuthLayout";
import SignupForm from "../components/SignupForm";
import SocialSignup from "../components/SocialSignup";

const Signup = () => {
  return (
    <AuthLayout>
      <SocialSignup />
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;