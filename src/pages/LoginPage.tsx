import { FormButton, LoginForm, LoginFormField } from "../components";
import { useUserCredentials } from "../hooks";
import { useEffect } from "react";

const LoginPage = () => {
  const {
    email,
    password,
    handleInputChange,
    handleSubmit,
    loginMessages,
    user,
  } = useUserCredentials();

  useEffect(() => {
    document.title = "Login Page";
  }, []);

  return (
    <>
      <LoginForm onSubmit={handleSubmit}>
        <LoginFormField
          type="text"
          name="email"
          onChange={handleInputChange}
          value={email}
        />

        <LoginFormField
          type="text"
          name="password"
          onChange={handleInputChange}
          value={password}
        />

        <FormButton />
        <div>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </div>
      </LoginForm>

      {!!loginMessages.message.error!.trim() && (
        <div className="login-message login-error">
          {loginMessages.message.error}
        </div>
      )}

      {!!loginMessages.message.success!.trim() && (
        <div className="login-message login-success">
          {loginMessages.message.success}
        </div>
      )}
    </>
  );
};

export default LoginPage;
