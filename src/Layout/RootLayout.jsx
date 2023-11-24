import { Outlet } from "react-router-dom";
import useQueryDataTest from "../Hooks/useQueryDataTest";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/footer/Footer";
import GlobalStyles from "@mui/material/GlobalStyles";
const RootLayout = () => {
  const { data, isLoading } = useQueryDataTest();
  console.log(data, isLoading);
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
