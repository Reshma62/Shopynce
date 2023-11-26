import useAuthContext from "../../Hooks/useAuthContext";
import useGetUserQuery from "../../Hooks/useGetUserQuery";
import Loading from "../../components/Shared/Loading/Loading";
import AdminDashboard from "./Admin/AdminDashboard";
import ManagerDashboard from "./Manager/ManagerDashboard";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { data: userData, isLoading } = useGetUserQuery(user);
  if (isLoading) {
    return <Loading />;
  }
  const userRole = userData?.data?.role;
  return (
    <>{userRole === "admin" ? <AdminDashboard /> : <ManagerDashboard />}</>
  );
};

export default Dashboard;
