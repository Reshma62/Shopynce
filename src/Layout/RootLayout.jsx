import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/footer/Footer";
import useAuthContext from "../Hooks/useAuthContext";
import useGetUserQuery from "../Hooks/useGetUserQuery";
import Loading from "../components/Shared/Loading/Loading";
import Copyright from "../components/Shared/footer/Copyright";

const RootLayout = () => {
  const { user, loading } = useAuthContext();
  const { isLoading } = useGetUserQuery(user?.email);
  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Copyright />
    </div>
  );
};

export default RootLayout;
