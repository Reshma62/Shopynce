import { Box } from "@mui/material";
import Pricing from "../../components/Home/Pricing/Pricing";
import MapShow from "../../components/Home/Map/MapShow";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import FrequtlyQuestion from "../../components/Home/FrequtlyQuestion/FrequtlyQuestion";
import DynamicTitle from "../../components/Shared/DynamicTitle/DynamicTitle";

const Home = () => {
  return (
    <Box>
      <DynamicTitle title={"Home"} />
      <Banner />
      <AboutUs />
      <Pricing />
      <FrequtlyQuestion />
      <MapShow />
    </Box>
  );
};

export default Home;
