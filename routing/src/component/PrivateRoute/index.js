import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth-content";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn 
            ? children 
            : <Navigate to="/login"></Navigate>;
};
