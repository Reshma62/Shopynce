import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/footer/Footer";
import GlobalStyles from "@mui/material/GlobalStyles";
const RootLayout = () => {
  return (
    <div>
      <GlobalStyles
        styles={{
          ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
          },
          a: {
            textDecoration: "none",
          },
          img: {
            maxWidth: "100%",
          },
        }}
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
