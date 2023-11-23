import { Outlet } from "react-router-dom";
import useQueryDataTest from "../Hooks/useQueryDataTest";
import Header from "../components/Shared/Header";

const RootLayout = () => {
  const { data, isLoading } = useQueryDataTest();
  console.log(data, isLoading);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
