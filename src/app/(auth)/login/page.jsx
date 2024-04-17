import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin, handleGoogleLogin } from "@/lib/action";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <form action={handleGoogleLogin}>
          <button className={styles.github}>Login with Google</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
