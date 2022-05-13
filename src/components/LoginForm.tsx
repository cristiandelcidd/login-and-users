import { LoginFormProps } from "../interfaces";

import "../styles/login-form.css";

const LoginForm = ({ onSubmit, children }: LoginFormProps) => {
  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={onSubmit}>
        <h1>Login</h1>
        {children}
      </form>
    </div>
  );
};

export default LoginForm;
