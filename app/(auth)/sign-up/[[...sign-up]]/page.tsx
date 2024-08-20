import { SignIn } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="auth-page">
      <SignIn />
    </div>
  );
};

export default SignUpPage;
