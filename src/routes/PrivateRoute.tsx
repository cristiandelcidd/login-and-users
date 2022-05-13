import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = ({ children }: any) => {
  const loggedIn: boolean =
    JSON.parse(localStorage.getItem("loggedIn")!) || false;

  return loggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
