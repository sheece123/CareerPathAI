import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
      <SocialLogin />
    </AuthLayout>
  );
};

export default Login;