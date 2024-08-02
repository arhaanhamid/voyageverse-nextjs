import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin, handleGoogleLogin } from "@/lib/action";
import { googleIcon } from "@/components/PostSvg";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-[#ADB5BD] p-12 flex flex-col text-center gap-[30px]  shadow-form-shadow">
        <form action={handleGithubLogin}>
          <button
            className="
            p-5 cursor-pointer w-full bg-blue-700 text-white font-bold border-none rounded-md hover:bg-white hover:text-black"
          >
            Login with Github
          </button>
        </form>
        <form action={handleGoogleLogin}>
          <button
            className="
          p-5 cursor-pointer w-full bg-blue-700 text-white font-bold border-none rounded-md hover:bg-white hover:text-black"
          >
            Login with Google
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
