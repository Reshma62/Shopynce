import useAuthContext from "../Hooks/useAuthContext";
import useGetUserQuery from "../Hooks/useGetUserQuery";
import Loading from "../components/Shared/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";
const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuthContext();
  const { data: userData, isLoading } = useGetUserQuery(user?.email);
  if (loading && isLoading) {
    return <Loading />;
  }
  if (user && userData?.role === "admin") {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"} />;
};

export default AdminRoute;
