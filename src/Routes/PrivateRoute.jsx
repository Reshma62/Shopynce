import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Shared/Loading/Loading";
import useAuthContext from "../Hooks/useAuthContext";
import useAllUsers from "../Hooks/useAllUsers";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuthContext();
  const { data: userData } = useAllUsers();
  console.log("data user", userData);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
