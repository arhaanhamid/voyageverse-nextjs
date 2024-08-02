import RegisterForm from "@/components/registerForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-[#ADB5BD] p-12 flex flex-col text-center gap-8  shadow-form-shadow">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
