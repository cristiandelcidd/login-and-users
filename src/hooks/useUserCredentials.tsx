import { ChangeEvent, FormEvent, useState, useEffect } from "react";

import { LoginMessages, UserCredentials } from "../interfaces";
import { validateEmail } from "../utils";
import { useNavigate } from "react-router-dom";

const useUserCredentials = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });

  const [loginMessages, setLoginMessages] = useState<LoginMessages>({
    message: { error: "", success: "" },
  });

  const { email, password } = credentials;

  const navigate = useNavigate();

  const user: UserCredentials = {
    email: "mail@mail.com",
    password: "1234",
  };

  const resetMessage = () => {
    setTimeout(() => {
      setLoginMessages({
        message: {
          error: "",
          success: "",
        },
      });
    }, 1500);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      setLoginMessages({
        message: { error: "Los campos no deben estar vacíos.", success: "" },
      });
    } else if (!validateEmail(email)) {
      setLoginMessages({
        message: { error: "Formato de correo no válido.", success: "" },
      });
    } else if (email !== user.email || password !== user.password) {
      setLoginMessages({
        message: { error: "Revise sus credenciales.", success: "" },
      });
    } else {
      setLoginMessages({
        message: { success: `Bienvenido ${email}`, error: "" },
      });

      localStorage.setItem("loggedIn", JSON.stringify(true));

      setTimeout(() => {
        navigate("../", { replace: true });
      }, 1000);
    }

    resetMessage();
  };

  const handleLogOut = () => {
    localStorage.setItem("loggedIn", JSON.stringify(false));
    navigate("../login", { replace: true });
  };

  return {
    email,
    password,
    handleInputChange,
    handleSubmit,
    loginMessages,
    user,
    handleLogOut,
  };
};

export default useUserCredentials;
