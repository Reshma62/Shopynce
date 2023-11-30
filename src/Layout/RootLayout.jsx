import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/footer/Footer";

import Copyright from "../components/Shared/footer/Copyright";

const RootLayout = () => {
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
