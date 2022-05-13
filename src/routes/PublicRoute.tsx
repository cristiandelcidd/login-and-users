import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: any) => {
  const loggedIn: boolean =
    JSON.parse(localStorage.getItem("loggedIn")!) || false;

  return Boolean(loggedIn) ? <Navigate to="/" /> : children;
};

export default PublicRoute;
