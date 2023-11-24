import DashboardSideBar from "../Dashboard";

import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <>
      <DashboardSideBar Outlet={Outlet} />
    </>
  );
};

export default DashboardLayout;
