"use client";

import { login } from "@/lib/action";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const inpCss = "p-5 bg-white text-black border-none rounded-md";

  return (
    <form className="flex flex-col text-center gap-8" action={formAction}>
      <input
        className={inpCss}
        type="text"
        placeholder="Username"
        name="username"
      />
      <input
        className={inpCss}
        type="password"
        placeholder="Password"
        name="password"
      />
      <button className="p-5 cursor-pointer bg-black text-white font-bold border-none rounded-md hover:bg-white hover:text-black">
        Login
      </button>
      {state?.error}
      <Link href="/register" className="text-black">
        {"Don't have an account?"} <b className="text-blue-500">Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
