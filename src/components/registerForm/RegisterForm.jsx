"use client";

import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  //styles
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
        type="email"
        placeholder="Email Address"
        name="email"
      />
      <input
        className={inpCss}
        type="password"
        placeholder="Password"
        name="password"
      />
      <input
        className={inpCss}
        type="password"
        placeholder="Confirm Password"
        name="passwordRepeat"
      />
      <button className="p-5 cursor-pointer bg-black text-white font-bold border-none rounded-md hover:bg-white hover:text-black">
        Register
      </button>
      {state?.error}
      <Link href="/login" className="text-black">
        Have an account? <b className="text-blue-500">Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
